# EpiLovers Datathon · WCE 2027 · Versión 2

Prototipo local en Python para identificar prioridades internacionales de epidemiología. Incluye:

- encuesta pública en español, inglés, portugués y francés;
- ubicación por país, primer nivel administrativo y ciudad;
- temas oficiales del Congreso organizados en cuatro ejes, con selección de hasta tres temas;
- campos para documentar disponibilidad, carácter público o privado y referencias de posibles fuentes de datos;
- almacenamiento local en SQLite;
- prevención de respuestas duplicadas por correo;
- tablero agregado protegido para el comité;
- mapa mundial interactivo con intensidad según respuestas por país;
- datos ficticios de demostración, siempre separados de las respuestas reales;
- descarga de la base real en CSV compatible con Excel.

## Cómo probarlo en Windows

1. Asegúrate de tener **Python 3.10 o una versión más reciente**. Si no lo tienes, descárgalo desde <https://www.python.org/downloads/> y marca la opción **Add Python to PATH** durante la instalación.
2. Abre esta carpeta y haz doble clic en **`start_windows.bat`**.
3. La encuesta se abrirá en tu navegador. Si no ocurre automáticamente, visita <http://127.0.0.1:8000>.
4. Para detener la aplicación, cierra la ventana negra o presiona `Ctrl + C` allí.

No hay que instalar paquetes: la aplicación usa únicamente herramientas incluidas con Python.

> **Nota:** la encuesta sirve para proponer retos y posibles fuentes de datos. No constituye una inscripción al datatón ni al Congreso.

## Acceso al tablero

- La aplicación usa la clave privada configurada en el perfil local de Windows.
- Si otro equipo no tiene una clave configurada, la ventana de inicio mostrará una clave temporal para esa sesión.
- Entra en la pestaña **Tablero**.
- Cuando no existan respuestas reales, usa **Ver datos demo** para recorrer el prototipo.
- El mapa usa la misma información agregada por país del tablero; no muestra correos ni datos individuales.
- **Descargar CSV** exporta únicamente respuestas reales e incluye el correo para uso autorizado del comité.

Para definir una clave propia durante una sesión local, abre PowerShell desde esta carpeta. No escribas la clave dentro del código ni la publiques en GitHub:

```powershell
$env:EPILOVER_ADMIN_PIN="una-clave-segura-y-larga"
py -3 server.py
```

## Dónde quedan los datos

Las respuestas se guardan en `data/responses.db`. Ese archivo se crea automáticamente y no se incluye en Git gracias a `.gitignore`.

Para hacer una copia de seguridad, detén la aplicación y copia `data/responses.db` a un lugar seguro. No abras ni compartas públicamente ese archivo: contiene correos electrónicos.

## Campos recolectados

Correo; país; primer nivel administrativo; ciudad; rol; organización opcional; alcance de trabajo; eje temático; entre uno y tres temas del Congreso; reto prioritario; población afectada opcional; disponibilidad de datos; tipo, nombre, enlace y notas de la posible fuente; etapa del principal cuello de botella; capacidades o alianzas requeridas; idioma; fecha e identificador automático.

El comité puede complementar posteriormente las fuentes de datos. La encuesta no depende de que cada participante conozca una fuente al momento de responder.

## Publicación en Render

El repositorio está preparado para ejecutarse como servicio web en Render. Para conservar las respuestas se debe usar un servicio de pago con un disco persistente montado en `/opt/render/project/src/data`. La clave del tablero nunca debe escribirse en el código: se configura como variable privada en Render.

Las instrucciones completas están en [`MANUAL_DESPLIEGUE_RENDER.md`](MANUAL_DESPLIEGUE_RENDER.md).

## Revisión técnica rápida

```powershell
py -3 -m unittest discover -s tests -v
```

La aplicación responde en `/api/health` para comprobaciones automáticas.
