# Quick Start Guide - Guía de Inicio Rápido

## 🚀 Opción 1: Desarrollo Local (SIN Docker)

### Paso 1: Instalar dependencias
```bash
cd Frontend_Data_Analysis2026
npm install
```

### Paso 2: Crear archivo .env
```bash
cp .env.example .env
```

### Paso 3: Completar .env
```env
VITE_API_URL=http://localhost:8000
VITE_API_TIMEOUT=30000
```

### Paso 4: Iniciar servidor de desarrollo
```bash
npm run dev
```

La aplicación abrirá automáticamente en `http://localhost:5173`

---

## 🐳 Opción 2: Desarrollo con Docker (RECOMENDADO)

### Paso 1: Asegurate de tener Docker y Docker Compose
```bash
docker --version
docker-compose --version
```

### Paso 2: Construir y levantar los contenedores
```bash
# Desde la raíz del proyecto (donde están Backend_API y Frontend_Data_Analysis2026)
docker-compose up --build
```

- Frontend estará en: `http://localhost:3000`
- Backend estará en: `http://localhost:8000`

### Paso 3: Parar los contenedores
```bash
docker-compose down
```

---

## 📡 Integración Backend - Rutas Esperadas

Tu backend debe tener estos endpoints implementados:

### 1. Dashboard Metrics
```http
GET /api/dashboard
```
**Respuesta esperada:**
```json
{
  "success": true,
  "data": {
    "totalUsers": 15420,
    "activeUsers": 8234,
    "revenue": 45890,
    "growth": 12.5
  }
}
```

### 2. Analytics Data
```http
GET /api/analytics
```
**Respuesta esperada:**
```json
{
  "success": true,
  "data": {
    "chartData": [
      { "name": "Enero", "value": 4000 },
      { "name": "Febrero", "value": 3000 }
    ],
    "metrics": {
      "totalUsers": 15420,
      "activeUsers": 8234,
      "revenue": 45890,
      "growth": 12.5
    },
    "timestamp": "2024-04-23T10:30:00Z"
  }
}
```

### 3. Filtered Analytics
```http
POST /api/analytics/filter
Content-Type: application/json

{
  "startDate": "2024-01-01",
  "endDate": "2024-04-23",
  "category": "electronics"
}
```

### 4. Chart Data (específico)
```http
GET /api/charts/{chartId}
```
**Respuesta:**
```json
{
  "success": true,
  "data": [
    { "name": "Ene", "value": 4000 },
    { "name": "Feb", "value": 3000 },
    { "name": "Mar", "value": 2000 }
  ]
}
```

### 5. Power BI Token (opcional)
```http
GET /api/powerbi/token
```
**Respuesta:**
```json
{
  "success": true,
  "data": {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
    "expiresIn": 600
  }
}
```

---

## 🔗 Conectar poder BI (2 métodos)

### Método 1: Power BI Embedded
Si tienes Power BI Premium, puedes incrustar reportes:

```typescript
// En tu backend
import { PowerBIClient } from "@microsoft/powerbi-client";

app.get('/api/powerbi/token', async (req, res) => {
  const token = await generateEmbedToken({
    reportId: process.env.POWERBI_REPORT_ID,
    datasetId: process.env.POWERBI_DATASET_ID
  });
  
  res.json({
    success: true,
    data: { token, expiresIn: 600 }
  });
});
```

Luego en el frontend:
```typescript
import { PowerBIEmbed } from 'powerbi-client-angular';

// Usar el componente para incrustar el reporte
```

### Método 2: Power BI API (Recomendado)
Tu backend consulta Power BI y devuelve los datos:

```typescript
// En tu backend
import { RestClient } from 'microsoft-rest-client-js';

app.get('/api/analytics', async (req, res) => {
  const data = await getPowerBIData({
    workspaceId: process.env.POWERBI_WORKSPACE_ID,
    reportId: process.env.POWERBI_REPORT_ID
  });
  
  res.json({
    success: true,
    data: transformData(data)
  });
});
```

---

## 🛠️ Troubleshooting

### Error: CORS Origin not allowed
**Solución:** Agrega en tu backend:
```javascript
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
```

### Error: Cannot GET /api/...
**Solución:** Verifica que tu backend esté corriendo en el puerto configurado

### Error: Failed to fetch data
**Solución:** 
```bash
# Revisa la terminal del backend
docker-compose logs backend

# O si está en desarrollo local
npm run dev  # En terminal del backend
```

### Actualizar variables de entorno en producción
1. Edita `.env` localmente
2. Rebuild: `docker-compose up --build`

---

## 📦 Comandos útiles

```bash
# Desarrollo local
npm run dev              # Start dev server
npm run build            # Build para producción
npm run preview          # Preview del build

# Docker
docker-compose up        # Levantar servicios
docker-compose down      # Bajar servicios
docker-compose logs      # Ver logs
docker-compose logs -f backend  # Logs en vivo del backend

# Build individual
docker build -t frontend:latest .

# Ejecutar frontend solo
docker run -p 3000:3000 frontend:latest
```

---

## 📝 Configuraciones según tu Stack

### Si tu backend es Node.js/Express
```bash
# Instala CORS
npm install cors express

# En tu app.js
const cors = require('cors');
app.use(cors());
```

### Si tu backend es Python/FastAPI
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Si tu backend es .NET/C#
```csharp
services.AddCors(options => {
    options.AddDefaultPolicy(builder => {
        builder.WithOrigins("http://localhost:5173", "http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

app.UseCors();
```

---

## ✅ Checklist de Deploy

- [ ] Backend endpoints implementados y probados
- [ ] CORS configurado
- [ ] Variables de entorno correctas en .env
- [ ] `npm install` ejecutado
- [ ] `npm run build` sin errores
- [ ] `docker build` exitoso
- [ ] `docker-compose up` sin errores
- [ ] Frontend se carga en http://localhost:3000
- [ ] API devuelve datos correctamente
- [ ] Gráficos se renderizan

---

¡Listo! Tu interfaz de análisis de datos está lista. 🎉
