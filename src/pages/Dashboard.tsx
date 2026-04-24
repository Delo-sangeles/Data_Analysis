import { CityBarChart, NeighbourhoodScatter, NeighbourhoodHorizontalBar } from '../components/Charts'
import { PriceMap } from '../components/MapChart'

const cityData = [
  { name: 'Sydney',   value: 208 },
  { name: 'New York', value: 153 },
  { name: 'Madrid',   value: 129 },
  { name: 'London',   value: 122 },
  { name: 'Milan',    value: 115 },
  { name: 'Tokyo',    value: 91  },
]

const scatterData = [
  { neighbourhood: 'Abrantes',    city: 'Madrid', price: 55,  reviews: 18 },
  { neighbourhood: 'Acacias',     city: 'Madrid', price: 75,  reviews: 85 },
  { neighbourhood: 'Adelfas',     city: 'Madrid', price: 90,  reviews: 113 },
  { neighbourhood: 'Aeropuerto',  city: 'Madrid', price: 120, reviews: 42 },
  { neighbourhood: 'Aguilas',     city: 'Madrid', price: 85,  reviews: 38 },
  { neighbourhood: 'Almagro',     city: 'Madrid', price: 150, reviews: 25 },
  { neighbourhood: 'Almenara',    city: 'Madrid', price: 200, reviews: 75 },
  { neighbourhood: 'Almendrales', city: 'Madrid', price: 95,  reviews: 20 },
  { neighbourhood: 'Aluche',      city: 'Madrid', price: 70,  reviews: 15 },
  { neighbourhood: 'Centro',      city: 'Madrid', price: 220, reviews: 61 },
  { neighbourhood: 'Retiro',      city: 'Madrid', price: 180, reviews: 49 },
  { neighbourhood: 'Salamanca',   city: 'Madrid', price: 250, reviews: 50 },
  { neighbourhood: 'Malasaña',    city: 'Madrid', price: 130, reviews: 55 },
  { neighbourhood: 'Lavapiés',    city: 'Madrid', price: 100, reviews: 30 },
  { neighbourhood: 'Westminster', city: 'London', price: 320, reviews: 22 },
  { neighbourhood: 'Camden',      city: 'London', price: 280, reviews: 18 },
  { neighbourhood: 'Shoreditch',  city: 'London', price: 350, reviews: 14 },
  { neighbourhood: 'Brixton',     city: 'London', price: 200, reviews: 8  },
  { neighbourhood: 'Hackney',     city: 'London', price: 450, reviews: 6  },
]

const horizontalData = [
  { neighbourhood: 'Fort Wadsworth',         price: 721 },
  { neighbourhood: 'Woodrow',                price: 631 },
  { neighbourhood: 'San Andrés',             price: 537 },
  { neighbourhood: 'Lucero',                 price: 505 },
  { neighbourhood: 'Hellín',                 price: 485 },
  { neighbourhood: 'TRE TORRI',              price: 468 },
  { neighbourhood: 'Tribeca',                price: 442 },
  { neighbourhood: 'Sea Gate',               price: 440 },
  { neighbourhood: 'Hachioji Shi',           price: 438 },
  { neighbourhood: 'Canillejas',             price: 428 },
  { neighbourhood: 'Riverdale',              price: 398 },
  { neighbourhood: 'Orcasur',                price: 396 },
  { neighbourhood: 'Rosas',                  price: 393 },
  { neighbourhood: 'Arcos',                  price: 391 },
  { neighbourhood: "Prince's Bay",           price: 369 },
  { neighbourhood: 'Chiyoda Ku',             price: 339 },
  { neighbourhood: 'Battery Park City',      price: 331 },
  { neighbourhood: 'Randall Manor',          price: 319 },
  { neighbourhood: 'Pittwater',              price: 308 },
  { neighbourhood: 'Flatiron District',      price: 308 },
  { neighbourhood: 'Simancas',               price: 307 },
  { neighbourhood: 'NoHo',                   price: 266 },
  { neighbourhood: 'SoHo',                   price: 260 },
  { neighbourhood: 'Midtown',                price: 255 },
  { neighbourhood: 'BRERA',                  price: 251 },
  { neighbourhood: 'Kensington and Chelsea', price: 248 },
  { neighbourhood: 'Neponsit',               price: 247 },
  { neighbourhood: 'Westminster',            price: 247 },
  { neighbourhood: 'West Village',           price: 241 },
  { neighbourhood: 'Piovera',                price: 239 },
  { neighbourhood: 'Mosman',                 price: 238 },
]

const madridData = [
  { lat: 40.4168, lng: -3.7038, neighbourhood: 'Centro',      price: 120, reviews: 45 },
  { lat: 40.4200, lng: -3.6900, neighbourhood: 'Retiro',      price: 150, reviews: 38 },
  { lat: 40.4300, lng: -3.7100, neighbourhood: 'Salamanca',   price: 200, reviews: 22 },
  { lat: 40.4100, lng: -3.7200, neighbourhood: 'Lavapiés',    price: 80,  reviews: 60 },
  { lat: 40.4250, lng: -3.6800, neighbourhood: 'Malasaña',    price: 110, reviews: 50 },
  { lat: 40.4050, lng: -3.6950, neighbourhood: 'Atocha',      price: 95,  reviews: 35 },
  { lat: 40.4400, lng: -3.7000, neighbourhood: 'Almagro',     price: 180, reviews: 18 },
  { lat: 40.3950, lng: -3.7100, neighbourhood: 'Usera',       price: 65,  reviews: 70 },
  { lat: 40.4500, lng: -3.6900, neighbourhood: 'Chamartín',   price: 160, reviews: 25 },
  { lat: 40.4150, lng: -3.7300, neighbourhood: 'Carabanchel', price: 55,  reviews: 80 },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
        Dashboard
      </h1>
      <p className="text-gray-400 text-sm tracking-widest uppercase mt-1">
        Análisis del mercado de alojamientos turísticos · 2026
      </p>

      {/* Resumen empresa */}
      <div className="bg-gradient-to-r from-teal-900/40 to-gray-800 border border-teal-500/20 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="text-4xl">📈</div>
          <div>
            <h2 className="text-teal-400 font-bold text-xl mb-2">DataInsight Analytics</h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
              Somos una empresa especializada en el análisis del mercado de alojamientos turísticos a nivel global.
              Este dashboard presenta un análisis comparativo de <span className="text-white font-semibold">6 ciudades clave</span> —
              Sydney, New York, Madrid, London, Milan y Tokyo — evaluando precios medios,
              disponibilidad y rentabilidad por barrio. Nuestro objetivo es proporcionar
              <span className="text-teal-400 font-semibold"> insights accionables</span> para inversores
              y gestores de propiedades en el mercado Airbnb.
            </p>
            <div className="flex gap-6 mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">6</p>
                <p className="text-gray-400 text-xs">Ciudades analizadas</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">220K</p>
                <p className="text-gray-400 text-xs">Alojamientos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">$136</p>
                <p className="text-gray-400 text-xs">Precio medio global</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">120</p>
                <p className="text-gray-400 text-xs">Días disp. media</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CityBarChart
        data={cityData}
        title="Precio promedio por ciudad"
        analysis="Sydney lidera con el precio más alto ($208), seguido de New York ($153). Tokyo tiene el precio más accesible con $91. La diferencia entre la ciudad más cara y la más barata es de $117."
      />

      <NeighbourhoodScatter
        data={scatterData}
        title="Promedio de price, Promedio de number_of_reviews y city por neighbourhood"
        analysis="Los barrios con precios entre $50-$150 concentran la mayor cantidad de reseñas, indicando mayor demanda. A precios superiores a $300 las reseñas caen significativamente. La línea azul marca la media de reseñas (20)."
      />

      <NeighbourhoodHorizontalBar
        data={horizontalData}
        title="Promedio de price por neighbourhood"
        threshold={300}
      />

      <PriceMap
        data={madridData}
        title="Mapa de precios por ubicación — Madrid"
      />
    </div>
  )
}