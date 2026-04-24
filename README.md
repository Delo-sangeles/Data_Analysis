# Frontend Data Analysis

Interfaz gráfica moderna para visualización de datos, con soporte para Power BI y análisis de datos personalizados.

## 🚀 Características

- ✨ Interfaz moderna con React + TypeScript
- 📊 Gráficos interactivos con Recharts
- 🎨 Estilos con Tailwind CSS
- 🔗 Cliente API integrado con Axios
- 📱 Diseño responsivo
- ♻️ Hooks personalizados para manejo de estado
- 🔐 Soporte para variables de entorno

## 📁 Estructura de Carpetas

```
src/
├── components/       # Componentes reutilizables
│   ├── Charts.tsx           # Gráficos (LineChart, BarChart, PieChart)
│   ├── MetricCard.tsx       # Tarjetas de métricas
│   ├── Navbar.tsx           # Navegación
│   └── LoadingStates.tsx    # Estados de carga y error
├── pages/           # Páginas principales
│   ├── Dashboard.tsx        # Dashboard principal
│   └── Analytics.tsx        # Análisis detallado
├── services/        # Servicios de API
│   └── apiClient.ts         # Cliente HTTP
├── hooks/           # Hooks personalizados
│   └── useApi.ts            # Hook para llamadas API
├── types/           # Tipos TypeScript
│   └── index.ts             # Definiciones de tipos
├── utils/           # Funciones utilitarias
│   └── formatters.ts        # Formateadores de datos
├── styles/          # Estilos CSS
│   ├── index.css            # Estilos globales
│   └── App.css              # Estilos de la aplicación
├── main.tsx         # Punto de entrada
└── App.tsx          # Componente principal

public/             # Archivos estáticos

.env.example        # Variables de entorno de ejemplo
```

## 🛠️ Instalación

### Requisitos
- Node.js 18+ 
- npm o yarn

### Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de build
npm run preview

# Linting
npm run lint
```

## 🔌 Configuración

### Variables de Entorno

Copia `.env.example` a `.env` y configura:

```env
VITE_API_URL=http://localhost:8000
VITE_API_TIMEOUT=30000

# Para Power BI
# VITE_POWERBI_TENANT_ID=tu_tenant_id
# VITE_POWERBI_CLIENT_ID=tu_client_id
```

## 📡 Integración con Backend

El frontend espera los siguientes endpoints:

### Dashboard
```
GET /api/dashboard
```
Respuesta esperada:
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

### Análisis
```
GET /api/analytics
```

### Filtros de datos
```
POST /api/analytics/filter
Body: { "startDate": "2024-01-01", ... }
```

### Power BI Token (si aplica)
```
GET /api/powerbi/token
```

## 🎨 Alternativas de Visualización

El proyecto actualmente utiliza **Recharts**, pero puedes cambiar a:

### Chart.js
```bash
npm install chart.js react-chartjs-2
```

### Apache ECharts
```bash
npm install echarts echarts-for-react
```

### Visx (Airbnb)
```bash
npm install @visx/visx
```

## 🐳 Docker

Para builds de producción:

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

Ejemplo de Dockerfile:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

## 📚 Dependencias Principales

- **React 18**: Framework UI
- **React Router DOM 6**: Enrutamiento
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Recharts**: Visualización de gráficos
- **Axios**: Cliente HTTP
- **Tailwind CSS**: Utility-first CSS
- **Lucide React**: Iconografía

## 🔗 Conexión con Docker Compose

Ejemplo de configuración para unir frontend y backend:

```yaml
version: '3.8'

services:
  backend:
    build: ../Backend_API
    ports:
      - "8000:8000"
    environment:
      - NODE_ENV=production

  frontend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - VITE_API_URL=http://backend:8000
    depends_on:
      - backend
```

## 📖 Desarrollo

Para agregar un nuevo gráfico:

1. Crea el componente en `src/components/Charts.tsx`
2. Define los tipos en `src/types/index.ts`
3. Utiliza el hook `useApi` en tu página
4. Integra con `apiClient.ts` vía tu servicio

## 🚨 Troubleshooting

### CORS Error
Asegúrate que tu backend tenga CORS habilitado para `http://localhost:5173`

### API no responde
Verifica `VITE_API_URL` en las variables de entorno

### TypeScript errors
Ejecuta:
```bash
npm run type-check
```

## 📝 Licencia

MIT

## 👤 Autor

Generado como estructura base para análisis de datos

---

**¿Necesitas ayuda?** Revisa la documentación de:
- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [Recharts](https://recharts.org)
- [Tailwind CSS](https://tailwindcss.com)
