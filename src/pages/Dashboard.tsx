import { CityBarChart, NeighbourhoodScatter, NeighbourhoodHorizontalBar, DonutChart } from '../components/Charts'
import { PriceMap } from '../components/MapChart'

const cityData = [
  { name: 'Sydney',   value: 208 },
  { name: 'New York', value: 153 },
  { name: 'Madrid',   value: 129 },
  { name: 'London',   value: 122 },
  { name: 'Milan',    value: 115 },
  { name: 'Tokyo',    value: 91  },
]
const hostData = [
  { name: 'host',      value: 161256 },
  { name: 'superhost', value: 57153  },
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

function SectionHeader({ emoji, title, subtitle }: { emoji: string, title: string, subtitle: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-2xl">{emoji}</span>
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
        <p className="text-gray-500 text-xs uppercase tracking-widest mt-0.5">{subtitle}</p>
      </div>
      <div className="flex-1 h-px bg-gray-700 ml-4" />
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="space-y-12">

      {/* Cabecera */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-400 text-sm tracking-widest uppercase mt-1">
          Análisis del mercado de alojamientos turísticos · 2026
        </p>
      </div>

      {/* Resumen empresa */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 shadow-xl">
        <div className="flex items-start gap-6">
          <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-4 shrink-0">
            <span className="text-4xl">📈</span>
          </div>
          <div className="flex-1">
            <span className="text-xs font-semibold tracking-widest uppercase text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20">
              Informe Ejecutivo · 2026
            </span>
            <h2 className="text-white font-bold text-2xl mt-3 mb-2">DataInsight Analytics</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
              Somos una empresa especializada en el análisis del mercado de alojamientos turísticos a nivel global.
              Este dashboard presenta un análisis comparativo de{' '}
              <span className="text-white font-semibold">6 ciudades clave</span> —
              Sydney, New York, Madrid, London, Milan y Tokyo — evaluando precios medios,
              disponibilidad y rentabilidad por barrio. Nuestro objetivo es proporcionar{' '}
              <span className="text-teal-400 font-semibold">insights accionables</span> para inversores
              y gestores de propiedades en el mercado Airbnb.
            </p>
            <div className="border-t border-gray-700 mt-6 pt-6 grid grid-cols-4 gap-4">
              <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
                <p className="text-3xl font-bold text-white">6</p>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">Ciudades</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
                <p className="text-3xl font-bold text-teal-400">220K</p>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">Alojamientos</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
                <p className="text-3xl font-bold text-blue-400">€136</p>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">Precio medio</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
                <p className="text-3xl font-bold text-white">120</p>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">Días disp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 1 */}
      <section>
        <SectionHeader
          emoji="🏙️"
          title="Comparativa de Precios por Ciudad"
          subtitle="Precio medio · 6 ciudades globales"
        />
        <CityBarChart
          data={cityData}
          title="Precio promedio por ciudad"
          analysis="Sydney lidera con el precio más alto (€208), seguido de New York (€153). Tokyo tiene el precio más accesible con €91. La diferencia entre la ciudad más cara y la más barata es de €117."
        />
      </section>

      {/* Sección 2 */}
      <section>
        <SectionHeader
          emoji="📊"
          title="Rentabilidad por Barrio"
          subtitle="Precio vs. reseñas · Madrid & London"
        />
        <NeighbourhoodScatter
          data={scatterData}
          title="Promedio de price, Promedio de number_of_reviews y city por neighbourhood"
          analysis="Los barrios con precios entre €50-€150 concentran la mayor cantidad de reseñas, indicando mayor demanda. A precios superiores a $300 las reseñas caen significativamente. La línea azul marca la media de reseñas (20)."
        />
      </section> 

      {/* Sección 3 */}
      <section>
        <SectionHeader
          emoji="🏘️"
          title="Ranking de Barrios por Precio"
          subtitle="Top barrios · precio medio por alojamiento"
        />
        <NeighbourhoodHorizontalBar
          data={horizontalData}
          title="Promedio de price por neighbourhood"
          threshold={300}
        />
      </section>

      {/* Sección 4 */}
      <section>
        <SectionHeader
          emoji="🗺️"
          title="Distribución Geográfica — Madrid"
          subtitle="Mapa de precios por ubicación"
        />
        <PriceMap
          data={madridData}
          title="Mapa de precios por ubicación — Madrid"
        />
      </section>

      <section>
  <SectionHeader
    emoji="👤"
    title="Comparación Host vs Superhost.. "
    subtitle="Distribución de tipos de anfitrión"
  />
  <DonutChart
    data={hostData}
    title="Comparación entre host y superhost"
    subtitle="superhost cuando tiene 4 o más propiedades"
    analysis="El 73,83% de los alojamientos pertenecen a hosts regulares (161.256), mientras que el 26,17% son gestionados por superhosts (57.153). Los superhosts se caracterizan por tener 4 o más propiedades y mejores valoraciones."
  />
</section>

    </div>
    
  )
}