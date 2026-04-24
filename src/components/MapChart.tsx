import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'


interface MapPoint {
  lat: number
  lng: number
  neighbourhood: string
  price: number
  reviews: number
}

interface MapProps {
  data: MapPoint[]
  title: string
}

export function PriceMap({ data, title }: MapProps) {
  const avgPrice = Math.round(data.reduce((a, b) => a + b.price, 0) / data.length)
  const maxPrice = Math.max(...data.map(d => d.price))
  const minPrice = Math.min(...data.map(d => d.price))

const getColor = (price: number) => {
  if (price > 200) return '#dc2626'   // rojo oscuro
  if (price > 100) return '#ef4444'   // rojo
  return '#fca5a5'                    // rojo claro
}

  const getRadius = (price: number) => {
    const min = minPrice
    const max = maxPrice
    return 4 + ((price - min) / (max - min)) * 14
  }

  return (
    <div className="bg-gray-900 rounded-xl p-6 max-w-5xl">
      <h3 className="text-lg font-semibold tracking-wide text-gray-100 border-b border-gray-700 pb-3 mb-4">
        {title}
      </h3>

      {/* Mapa */}
      <div className="rounded-xl overflow-hidden" style={{ height: '480px' }}>
        <MapContainer
          center={[40.4168, -3.7038]}
          zoom={11}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {data.map((point, index) => (
            <CircleMarker
              key={index}
              center={[point.lat, point.lng]}
              radius={getRadius(point.price)}
              fillColor={getColor(point.price)}
              color="white"
              weight={0.5}
              fillOpacity={0.7}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-bold">{point.neighbourhood}</p>
                  <p>💰 Precio: <strong>${point.price}</strong></p>
                  <p>⭐ Reseñas: <strong>{point.reviews}</strong></p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* KPIs debajo del mapa */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-blue-500 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-white">{avgPrice}</p>
          <p className="text-blue-100 text-sm font-medium mt-1">Promedio de price</p>
        </div>
        <div className="bg-red-500 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-white">${maxPrice}</p>
          <p className="text-red-100 text-sm font-medium mt-1">Máx. de price</p>
        </div>
        <div className="bg-green-500 rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-white">${minPrice}</p>
          <p className="text-green-100 text-sm font-medium mt-1">Mín. de price</p>
        </div>
      </div>
    </div>
  )
}