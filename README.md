# EpiLovers Datathon · WCE 2027

Prototipo local en Python para identificar prioridades internacionales de epidemiología. Incluye:

- encuesta pública en español, inglés, portugués y francés;
- ubicación por país, primer nivel administrativo y ciudad;
- 14 grandes áreas de epidemiología con selección de hasta tres prioridades;
- almacenamiento local en SQLite;
- prevención de respuestas duplicadas por correo;
- tablero agregado protegido para el comité;
- datos ficticios de demostración, siempre separados de las respuestas reales;
- descarga de la base real en CSV compatible con Excel.

## Cómo probarlo en Windows

1. Asegúrate de tener **Python 3.10 o una versión más reciente**. Si no lo tienes, descárgalo desde <https://www.python.org/downloads/> y marca la opción **Add Python to PATH** durante la instalación.
2. Abre esta carpeta y haz doble clic en **`start_windows.bat`**.
3. La encuesta se abrirá en tu navegador. Si no ocurre automáticamente, visita <http://127.0.0.1:8000>.
4. Para detener la aplicación, cierra la ventana negra o presiona `Ctrl + C` allí.

No hay que instalar paquetes: la aplicación usa únicamente herramientas incluidas con Python.

## Acceso al tablero

- Al iniciar la aplicación, la ventana negra muestra una **clave temporal del tablero**.
- Entra en la pestaña **Tablero** e introduce esa clave.
- Cuando no existan respuestas reales, usa **Ver datos demo** para recorrer el prototipo.
- **Descargar CSV** exporta únicamente respuestas reales e incluye el correo para uso autorizado del comité.

Para definir una clave propia durante una sesión local, abre PowerShell desde esta carpeta:

```powershell
$env:EPILOVER_ADMIN_PIN="una-clave-segura-y-larga"
py -3 server.py
```

## Dónde quedan los datos

Las respuestas se guardan en `data/responses.db`. Ese archivo se crea automáticamente y no se incluye en Git gracias a `.gitignore`.

Para hacer una copia de seguridad, detén la aplicación y copia `data/responses.db` a un lugar seguro. No abras ni compartas públicamente ese archivo: contiene correos electrónicos.

## Campos recolectados

Correo; país; primer nivel administrativo; ciudad; rol; organización opcional; alcance de trabajo; entre una y tres áreas epidemiológicas; reto prioritario; población afectada opcional; etapa del principal cuello de botella; capacidades o alianzas requeridas; idioma; fecha e identificador automático.

## Publicación posterior

El código puede alojarse en GitHub, pero **GitHub Pages no ejecuta Python ni guarda bases SQLite**. Cuando el comité apruebe el prototipo, conviene conectar el repositorio a un servicio que ejecute Python y añadir almacenamiento persistente. Esa será la siguiente etapa de publicación y seguridad.

## Revisión técnica rápida

```powershell
py -3 -m unittest discover -s tests -v
```

La aplicación responde en `/api/health` para comprobaciones automáticas.
