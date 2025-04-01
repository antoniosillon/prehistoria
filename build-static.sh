#!/bin/bash
echo "Compilando el sitio estático..."
npx vite build
echo "Compilación completada. Los archivos estáticos están en dist/public"