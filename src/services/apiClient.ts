import axios, { AxiosInstance, AxiosError } from 'axios'
import { ApiResponse, ChartData, DashboardMetrics, AnalyticsData } from '../types'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

class ApiClient {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Interceptor para errores
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error('API Error:', error.message)
        return Promise.reject(error)
      }
    )
  }

  // Obtener datos del dashboard
  async getDashboardData(): Promise<ApiResponse<DashboardMetrics>> {
    try {
      const response = await this.client.get('/api/dashboard')
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  // Obtener datos de análisis
  async getAnalyticsData(): Promise<ApiResponse<AnalyticsData>> {
    try {
      const response = await this.client.get('/api/analytics')
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  // Obtener gráficos específicos
  async getChartData(chartId: string): Promise<ApiResponse<ChartData[]>> {
    try {
      const response = await this.client.get(`/api/charts/${chartId}`)
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  // Obtener datos con filtros
  async getFilteredData(filters: Record<string, any>): Promise<ApiResponse<AnalyticsData>> {
    try {
      const response = await this.client.post('/api/analytics/filter', filters)
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  // Power BI - Obtener token de incrustación (si aplica)
  async getPowerBIToken(): Promise<ApiResponse<{ token: string }>> {
    try {
      const response = await this.client.get('/api/powerbi/token')
      return response.data
    } catch (error) {
      throw this.handleError(error)
    }
  }

  private handleError(error: any) {
    if (error.response) {
      return new Error(error.response.data.message || 'Error en la solicitud')
    } else if (error.request) {
      return new Error('No se recibió respuesta del servidor')
    } else {
      return new Error('Error al procesar la solicitud')
    }
  }
}

export default new ApiClient()
