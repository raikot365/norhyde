# Catálogo Web — Norhydé Licores Artesanales

Sitio catálogo estático desarrollado con **Astro**, estética pastel cálida en tonos crema, amarillo manteca, marrón y terracota con **bordes festoneados (scalloped edges)**.

## Comandos principales

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev

# Generar el sitio estático en dist/
npm run build

# Previsualizar la versión compilada
npm run preview
```

## Cómo actualizar datos de contacto y formatos

Editá el archivo `src/data/site.ts`:
- `whatsappNumber`: Número de WhatsApp con código de país y área (sin `+` ni espacios, por ejemplo `5493764123456`).
- `instagramHandle`, `instagramUrl`, `email`, `locationNote`.
- `formats`: Etiquetas y capacidades de **Botella grande** y **Botellita**.

## Cómo agregar nuevas fotos o sabores

1. Copiá las nuevas fotografías en `public/assets/botellas/` (para botellas grandes) o `public/assets/botellitas/` (para botellitas).
2. Abrí `src/data/catalog.ts`, ubicá el sabor correspondiente y completá `images.botella` o `images.botellita` con la ruta `/assets/...`:
   ```ts
   images: {
     botella: '/assets/botellas/maracuya.jpg',
     botellita: '/assets/botellitas/maracuya.jpg',
   },
   ```
3. Guardá el archivo y volvé a compilar con `npm run build`. Automáticamente desaparecerá la tarjeta de *"Foto próximamente"* y se mostrará la fotografía real.
