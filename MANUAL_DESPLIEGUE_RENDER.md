# Manual de despliegue en Render

Este manual publica EpiLovers WCE 2027 y conserva las respuestas en una base SQLite persistente.

> La encuesta permite proponer retos y fuentes de datos. No constituye una inscripción al datatón ni al Congreso.

## 1. Requisitos

- Repositorio de GitHub actualizado.
- Cuenta de Render conectada con GitHub.
- Servicio web de pago y disco persistente de al menos 1 GB.
- Una clave privada y segura para el tablero.

## 2. Crear el servicio web

1. En Render, selecciona **New > Web Service**.
2. Conecta el repositorio `solsilvana/epilover-wce2027`.
3. Configura:
   - **Language:** Python 3
   - **Branch:** `main`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `python server.py`
   - **Health Check Path:** `/api/health`
4. Elige el plan de pago más pequeño disponible que permita añadir un disco persistente.

## 3. Variables privadas

En **Environment**, crea estas variables:

- `HOST` = `0.0.0.0`
- `EPILOVER_ADMIN_PIN` = una clave larga que solo conozca el comité
- `EPILOVER_SESSION_SECRET` = una cadena aleatoria larga y distinta de la clave anterior

No publiques estos valores ni los guardes en GitHub.

## 4. Disco persistente

Antes de publicar, agrega un disco:

- **Name:** `epilover-data`
- **Mount Path:** `/opt/render/project/src/data`
- **Size:** 1 GB

La aplicación guardará automáticamente la base en `/opt/render/project/src/data/responses.db`.

## 5. Verificación

Después de que Render indique **Live**:

1. Abre la dirección pública asignada por Render.
2. Envía una respuesta de prueba.
3. Abre **Tablero**, ingresa la clave privada y confirma que aparece la respuesta y el país en el mapa.
4. Descarga el CSV y comprueba su contenido.
5. Reinicia el servicio y confirma que la respuesta sigue presente.

## Seguridad y copias

- La base contiene correos electrónicos y no debe publicarse ni compartirse sin autorización.
- Descarga periódicamente el CSV desde el tablero como copia operativa.
- Antes de cambiar o eliminar el disco, conserva una copia de los datos.
- Si se sospecha que la clave fue compartida, cámbiala en Render y vuelve a desplegar el servicio.
