# 2B OR NOT 2B AI Systems · Web corporativa estática

Web one-page corporativa para `www.2bornot2bai.com`, preparada para publicarse en GitHub Pages y migrar más adelante a WordPress si el proyecto evoluciona.

## Estructura

```txt
2b-ai-systems-web/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── logo-2b.png
        └── miguel-angel.jpg
```

## Qué incluye

- HTML semántico.
- CSS responsive para escritorio, tablet y móvil.
- Navegación interna por anclas.
- Hero con titular equilibrado, emblema limpio y badges sin tapar el logo.
- Cards de servicios con iconografía SVG lineal.
- Método 2B en 4 pasos.
- Bloque diferencial.
- Sección fundador.
- Formulario funcional con Formspree Basic HTML.
- Botón flotante de WhatsApp.
- Metadatos SEO básicos.
- Preparación para dominio personalizado en GitHub Pages.

## Formulario

El formulario usa Formspree con el endpoint:

```html
<form action="https://formspree.io/f/mrejvrjv" method="POST">
```

Campos ocultos incluidos:

```html
<input type="hidden" name="_subject" value="Nueva solicitud desde la web de 2B OR NOT 2B AI Systems">
<input type="hidden" name="origen" value="Web GitHub Pages · 2B OR NOT 2B AI Systems">
```

Revisar en Formspree que el endpoint está activo y que el email de destino está verificado.

## Imágenes

La carpeta `assets/img/` ya incluye los recursos visuales finales con los nombres esperados por el HTML:

- `assets/img/logo-2b.png`: logo circular oficial de 2B OR NOT 2B AI Systems.
- `assets/img/miguel-angel.jpg`: foto profesional de Miguel Ángel Fernández Sánchez.

Mantener estos nombres de archivo si se reemplazan por versiones futuras para no tocar el HTML.

## Subida a GitHub Pages

1. Crear un repositorio en GitHub, por ejemplo:
   `2b-ai-systems-web`

2. Subir todo el contenido de esta carpeta al repositorio:
   - `index.html`
   - `README.md`
   - carpeta `assets/`

3. Entrar en:
   `Settings → Pages`

4. En `Build and deployment`, seleccionar:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`

5. Guardar y esperar a que GitHub Pages publique la web.

6. URL temporal esperada:
   `https://2bornot2bai-stack.github.io/2b-ai-systems-web/`

   Si el repositorio elegido es el repositorio principal de usuario u organización, la URL puede variar.

## Dominio personalizado

Dominio final:

```txt
www.2bornot2bai.com
```

En GitHub Pages:

```txt
Settings → Pages → Custom domain
www.2bornot2bai.com
```

GitHub generará o actualizará el archivo `CNAME` internamente. Si se quiere gestionar manualmente, puede añadirse un archivo `CNAME` en la raíz con este contenido:

```txt
www.2bornot2bai.com
```

## DNS en Webempresa

Configurar el dominio raíz con registros A hacia GitHub Pages:

```txt
@    A    185.199.108.153
@    A    185.199.109.153
@    A    185.199.110.153
@    A    185.199.111.153
```

Configurar `www` con CNAME:

```txt
www    CNAME    2bornot2bai-stack.github.io
```

No tocar registros relacionados con correo:

- MX
- TXT
- SPF
- DKIM
- DMARC
- otros registros de email

## HTTPS

Cuando GitHub lo permita, activar:

```txt
Settings → Pages → Enforce HTTPS
```

Puede tardar un rato en estar disponible después de configurar DNS y dominio personalizado.

## Migración futura a WordPress

La web está pensada para poder migrarse después a WordPress:

- Las secciones están separadas por bloques claros.
- El copy ya está estructurado para convertirse en páginas, bloques o plantillas.
- Los servicios pueden pasar a Custom Post Types o páginas individuales.
- El formulario puede sustituirse por Fluent Forms, Gravity Forms, Contact Form 7 u otro plugin.
- La analítica puede integrarse después con Google Tag Manager, GA4, Search Console y eventos de conversión.

## Checklist final de revisión

### Logo

- [ ] Sustituido `assets/img/logo-2b.png` por el logo oficial.
- [ ] El logo no está deformado.
- [ ] El logo no está recortado.
- [ ] Ningún badge o elemento se coloca encima del emblema.

### Responsive

- [ ] Revisado en escritorio.
- [ ] Revisado en tablet.
- [ ] Revisado en móvil.
- [ ] Menú móvil abre y cierra correctamente.
- [ ] Los CTA son visibles en primera pantalla.

### Formulario

- [ ] Endpoint Formspree activo.
- [ ] Email de recepción verificado.
- [ ] Campos obligatorios funcionando.
- [ ] Checkbox de consentimiento obligatorio.
- [ ] Prueba de envío realizada.

### WhatsApp

- [ ] Botón flotante visible.
- [ ] Enlace abre `https://wa.me/34648606079`.
- [ ] Número mostrado: `648 606 079`.

### Dominio

- [ ] Custom domain configurado en GitHub Pages.
- [ ] Registros A del dominio raíz añadidos.
- [ ] CNAME de `www` configurado.
- [ ] No se han tocado MX, TXT, DKIM, DMARC ni registros de correo.

### HTTPS

- [ ] DNS propagado.
- [ ] GitHub Pages reconoce el dominio.
- [ ] `Enforce HTTPS` activado cuando esté disponible.

### Visual del hero

- [ ] Titular amarillo equilibrado, sin ocupar demasiado alto.
- [ ] Emblema centrado y limpio.
- [ ] Badges fuera del logo.
- [ ] Primera pantalla premium, tecnológica y clara.
- [ ] Sin saturación visual.
