#!/bin/bash
# ============================================
# Descargador de imágenes v2 — con fallbacks
# Para Isolant Paraguay
# ============================================
# Prueba múltiples estrategias por imagen y verifica
# que lo descargado sea realmente una imagen (no HTML).

set -u

# Múltiples fechas de snapshot del Wayback para probar
DATES=("20250227172504" "20240613064600" "20240501000000" "20231201000000")

# Función: verificar si un archivo es una imagen real (no HTML, no error)
is_valid_image() {
  local file="$1"
  # Si no existe o es muy chico (< 1KB), inválido
  if [ ! -f "$file" ] || [ "$(wc -c < "$file")" -lt 1024 ]; then
    return 1
  fi
  # Verificar magic bytes
  local header
  header=$(head -c 8 "$file" | xxd -p 2>/dev/null || head -c 8 "$file" | od -An -tx1 | tr -d ' \n')
  case "$header" in
    ffd8ff*)         return 0 ;;  # JPEG
    89504e47*)       return 0 ;;  # PNG
    *504e47*)        return 0 ;;  # PNG variante
    47494638*)       return 0 ;;  # GIF
    52494646*)       return 0 ;;  # WEBP/RIFF
    *)               return 1 ;;
  esac
}

# Función: intentar descargar una imagen probando múltiples URLs
download_image() {
  local target_path="$1"
  local image_path="$2"     # ej: /images/homepage/products/atacama.png
  local img_name
  img_name=$(basename "$target_path")

  # URL-encode del path (espacios y / mantenemos)
  local encoded_path
  encoded_path=$(python3 -c "import urllib.parse,sys; print(urllib.parse.quote(sys.argv[1], safe=''))" "$image_path")

  echo "  → $img_name"

  # Probar cada fecha con cada estrategia
  for date in "${DATES[@]}"; do
    # Estrategia 1: URL cruda (sin optimización)
    local url1="https://web.archive.org/web/${date}im_/https://isolant.com.py${image_path}"
    # Estrategia 2: _ipx con ancho 1920 (sí estaba en el listado del Wayback)
    local url2="https://web.archive.org/web/${date}im_/https://isolant.com.py/_ipx/w_1920,q_75/${encoded_path}"
    # Estrategia 3: _ipx con ancho 1080
    local url3="https://web.archive.org/web/${date}im_/https://isolant.com.py/_ipx/w_1080,q_75/${encoded_path}"
    # Estrategia 4: _next/image
    local url4="https://web.archive.org/web/${date}im_/https://isolant.com.py/_next/image?url=${encoded_path}&w=1920&q=75"

    for url in "$url1" "$url2" "$url3" "$url4"; do
      curl -sL --max-time 30 -A "Mozilla/5.0" -o "$target_path" "$url" 2>/dev/null || continue
      if is_valid_image "$target_path"; then
        local size_kb=$(($(wc -c < "$target_path") / 1024))
        echo "     ✅ OK (${size_kb} KB) — fecha $date"
        return 0
      fi
    done
  done

  # Si nada funcionó, borrar el archivo basura
  rm -f "$target_path"
  echo "     ❌ NO se pudo descargar"
  return 1
}

echo "🔽 Descargando imágenes desde Wayback Machine (con validación)..."
echo "   Esto puede tardar varios minutos. Probará varias fechas y estrategias."
echo ""

mkdir -p images/slider images/about images/products/thumbnails

# --- SLIDER ---
echo "📸 Slider..."
download_image "images/slider/slide-1.jpg" "/images/homepage/slider/slide-3.jpg"
download_image "images/slider/slide-2.jpg" "/images/homepage/slider/slide-2.jpg"

# --- ABOUT ---
echo ""
echo "🏭 Empresa..."
download_image "images/about/about.jpg" "/images/homepage/about.jpg"

# --- PRODUCTOS ---
PRODUCTOS=("atacama" "cedro-net" "contrapiso-acoustic" "rufi-aluminio" "rufi-aluminizada" "rufi-doble-aluminizada")

echo ""
echo "📦 Productos (thumbnails JPG)..."
for p in "${PRODUCTOS[@]}"; do
  download_image "images/products/thumbnails/${p}.jpg" "/images/homepage/products/thumbnails/${p}.jpg"
done

echo ""
echo "📦 Productos (packshots PNG)..."
for p in "${PRODUCTOS[@]}"; do
  download_image "images/products/${p}.png" "/images/homepage/products/${p}.png"
done

echo ""
echo "═══════════════════════════════════════"
echo "📊 Resumen final:"
echo "═══════════════════════════════════════"
TOTAL=0
OK=0
for f in images/slider/slide-1.jpg images/slider/slide-2.jpg images/about/about.jpg \
         images/products/thumbnails/*.jpg images/products/*.png; do
  TOTAL=$((TOTAL + 1))
  if [ -f "$f" ] && is_valid_image "$f"; then
    OK=$((OK + 1))
    size_kb=$(($(wc -c < "$f") / 1024))
    echo "  ✅ $f (${size_kb} KB)"
  else
    echo "  ❌ $f — falta"
  fi
done
echo ""
echo "Resultado: $OK / $TOTAL imágenes recuperadas"
echo ""
if [ "$OK" -lt "$TOTAL" ]; then
  echo "💡 Para las que faltan, podés:"
  echo "   1. Pedirle imágenes a Isolant Argentina (lo más recomendado)"
  echo "   2. Sacar fotos propias de los productos"
  echo "   3. Buscar las URLs manualmente en https://web.archive.org/web/*/isolant.com.py"
fi