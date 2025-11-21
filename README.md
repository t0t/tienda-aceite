# OleoPuro - Tienda de Aceite de Oliva

Landing page para tienda online de aceite de oliva virgen extra premium.

## Descripción

Página web de una sola página (single-page) para la venta directa de aceite de oliva desde la almazara al consumidor. Diseño elegante y minimalista con estética mediterránea.

## Características

- **Hero Section** con efecto parallax
- **Sección Historia** sobre el origen del producto
- **Tienda Online** con catálogo de 3 productos
- **Formulario de Contacto** para consultas
- **Modales legales**: Aviso Legal, Política de Privacidad, Envíos
- **Banner de Cookies** conforme a RGPD
- **Diseño Responsive** adaptado a móviles y tablets

## Tecnología

- HTML5 puro
- CSS3 embebido
- JavaScript Vanilla
- Fuentes: Google Fonts (Lato + Playfair Display)
- Imágenes: Unsplash

## Demo

🌐 [Ver página en vivo](https://t0t.github.io/tienda-aceite/)

## Productos

1. **Reserva Familiar 500ml** - 18.50€
2. **En Rama (Sin Filtrar)** - 21.00€
3. **Pack Degustación 3L** - 45.00€

## Integración de Pagos

Actualmente en modo simulación. Para integrar pagos reales con Stripe:

1. Crear cuenta en [Stripe](https://stripe.com)
2. Crear productos en el panel de Stripe
3. Sustituir la función `simularCompra()` en el JavaScript por enlaces reales de Stripe Checkout

## Instalación

```bash
git clone https://github.com/t0t/tienda-aceite.git
cd tienda-aceite
```

Abrir `index.html` directamente en el navegador o usar un servidor local.

## Personalización

Para adaptar la página a tu marca:

1. Cambiar variables CSS en `:root` (línea 15-23)
2. Actualizar textos y precios de productos
3. Reemplazar imágenes de Unsplash por las propias
4. Completar datos en modales legales (líneas 302-337)
5. Integrar enlaces de pago de Stripe

## Licencia

© 2024 OleoPuro S.L. Todos los derechos reservados.

## Autor

Proyecto creado con Claude Code
