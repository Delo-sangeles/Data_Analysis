# Ejemplos de Integración - Backend

## 📝 Ejemplos de Endpoints para tu Backend

### Node.js/Express

```javascript
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Dashboard Metrics
app.get('/api/dashboard', (req, res) => {
  res.json({
    success: true,
    data: {
      totalUsers: 15420,
      activeUsers: 8234,
      revenue: 45890,
      growth: 12.5
    }
  });
});

// Analytics con gráficos
app.get('/api/analytics', (req, res) => {
  res.json({
    success: true,
    data: {
      chartData: [
        { name: 'Enero', value: 4000 },
        { name: 'Febrero', value: 3000 },
        { name: 'Marzo', value: 2000 },
        { name: 'Abril', value: 2780 },
        { name: 'Mayo', value: 1890 },
        { name: 'Junio', value: 2390 }
      ],
      metrics: {
        totalUsers: 15420,
        activeUsers: 8234,
        revenue: 45890,
        growth: 12.5
      },
      timestamp: new Date().toISOString()
    }
  });
});

// Filtrado de datos
app.post('/api/analytics/filter', (req, res) => {
  const { startDate, endDate, category } = req.body;
  
  // Aquí va tu lógica de filtrado
  
  res.json({
    success: true,
    data: {
      chartData: [...],
      metrics: {...},
      timestamp: new Date().toISOString()
    }
  });
});

// Chart específico
app.get('/api/charts/:chartId', (req, res) => {
  const { chartId } = req.params;
  
  res.json({
    success: true,
    data: [
      { name: 'Item 1', value: 400 },
      { name: 'Item 2', value: 300 },
      // ...
    ]
  });
});

app.listen(8000, () => {
  console.log('Backend running on port 8000');
});
```

### Python/FastAPI

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/dashboard")
async def get_dashboard():
    return {
        "success": True,
        "data": {
            "totalUsers": 15420,
            "activeUsers": 8234,
            "revenue": 45890,
            "growth": 12.5
        }
    }

@app.get("/api/analytics")
async def get_analytics():
    return {
        "success": True,
        "data": {
            "chartData": [
                {"name": "Enero", "value": 4000},
                {"name": "Febrero", "value": 3000},
                # ...
            ],
            "metrics": {
                "totalUsers": 15420,
                "activeUsers": 8234,
                "revenue": 45890,
                "growth": 12.5
            },
            "timestamp": datetime.now().isoformat()
        }
    }

@app.post("/api/analytics/filter")
async def filter_analytics(filters: dict):
    # Procesar filtros
    return {
        "success": True,
        "data": {...}
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

### .NET/C# (ASP.NET Core)

```csharp
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

[ApiController]
[Route("api")]
public class DataController : ControllerBase
{
    [HttpGet("dashboard")]
    public IActionResult GetDashboard()
    {
        return Ok(new
        {
            success = true,
            data = new
            {
                totalUsers = 15420,
                activeUsers = 8234,
                revenue = 45890,
                growth = 12.5
            }
        });
    }

    [HttpGet("analytics")]
    public IActionResult GetAnalytics()
    {
        var chartData = new List<object>
        {
            new { name = "Enero", value = 4000 },
            new { name = "Febrero", value = 3000 },
            // ...
        };

        return Ok(new
        {
            success = true,
            data = new
            {
                chartData = chartData,
                metrics = new
                {
                    totalUsers = 15420,
                    activeUsers = 8234,
                    revenue = 45890,
                    growth = 12.5
                },
                timestamp = DateTime.UtcNow
            }
        });
    }

    [HttpPost("analytics/filter")]
    public IActionResult FilterAnalytics([FromBody] FilterRequest filter)
    {
        // Procesar el filtrado
        
        return Ok(new
        {
            success = true,
            data = new { /* ... */ }
        });
    }
}

public class FilterRequest
{
    public string StartDate { get; set; }
    public string EndDate { get; set; }
    public string Category { get; set; }
}
```

---

## 🔌 Integrando con Power BI

### Opción A: Power BI Embedded (Node.js)

```javascript
import { PowerBIEmbedding } from 'powerbi-embedding';

app.get('/api/powerbi/token', async (req, res) => {
  try {
    const token = await powerbi.generateToken({
      reportId: process.env.POWERBI_REPORT_ID,
      datasetId: process.env.POWERBI_DATASET_ID,
      tenantId: process.env.POWERBI_TENANT_ID,
      clientId: process.env.POWERBI_CLIENT_ID,
      clientSecret: process.env.POWERBI_CLIENT_SECRET
    });

    res.json({
      success: true,
      data: {
        token: token.accessToken,
        expiresIn: 600
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});
```

### Opción B: Power BI API (Obtener datos)

```javascript
import axios from 'axios';

async function getPowerBIData() {
  const token = await getAccessToken();
  
  const response = await axios.get(
    `https://api.powerbi.com/v1.0/myorg/groups/${workspaceId}/reports/${reportId}/datasources`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  
  return response.data;
}
```

---

## 📋 Ejemplo Completo de Estructura

```
Backend_API/
├── src/
│   ├── routes/
│   │   ├── dashboard.js
│   │   ├── analytics.js
│   │   └── powerbi.js
│   ├── controllers/
│   │   ├── dashboardController.js
│   │   ├── analyticsController.js
│   │   └── powerbiController.js
│   ├── models/
│   │   ├── Dashboard.js
│   │   └── Analytics.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── utils/
│   │   └── powerbi.js
│   └── app.js
├── .env.example
├── package.json
└── Dockerfile
```

---

## 🔐 Variables de Entorno Esperadas

```env
# Servidor
PORT=8000
NODE_ENV=development

# Base de datos
DB_HOST=localhost
DB_PORT=5432
DB_NAME=analytics
DB_USER=user
DB_PASSWORD=password

# Power BI (opcional)
POWERBI_TENANT_ID=
POWERBI_CLIENT_ID=
POWERBI_CLIENT_SECRET=
POWERBI_WORKSPACE_ID=
POWERBI_REPORT_ID=
POWERBI_DATASET_ID=

# CORS
FRONTEND_URL=http://localhost:5173
```

---

¡Ahora el frontend podrá conectarse correctamente a tu backend! 🎉
