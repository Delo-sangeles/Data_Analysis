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

function SectionHeader({ emoji, title, subtitle }: any) {
  return (
    <div className="flex items-center gap-4 mb-6">

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg p-2 shadow-md">
        <span className="text-xl">{emoji}</span>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white tracking-tight">
          {title}
        </h2>
        <p className="text-gray-400 text-xs uppercase tracking-widest">
          {subtitle}
        </p>
      </div>

      <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)] text-white px-6 py-10 space-y-14">

      {/* Cabecera */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold ...">
        </h1>
        <p className="text-gray-400 text-sm tracking-widest uppercase mt-2">
          Análisis del mercado de alojamientos turísticos · 2026
        </p>
      </div>

      {/* Resumen empresa */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-xl shadow-black/30">
        
        <div className="flex flex-col md:flex-row items-start gap-4">
          
          <div className="bg-teal-500/10 border border-teal-400/30 rounded-xl p-4 shadow-md shadow-teal-500/20">
            <span className="text-4xl drop-shadow-[0_0_10px_rgba(45,212,191,0.7)]">📈</span>
          </div>

          <div className="flex-1">
            
            <span className="text-xs font-semibold tracking-widest uppercase text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20">
              Informe Ejecutivo · 2026
            </span>

            <h2 className="text-white font-bold text-2xl mt-3 mb-3">
              DataInsight Analytics
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
              Somos una empresa especializada en el análisis del mercado de alojamientos turísticos a nivel global.
              Este dashboard presenta un análisis comparativo de{' '}
              <span className="text-white font-semibold">6 ciudades clave</span> —
              Sydney, New York, Madrid, London, Milan y Tokyo — evaluando precios medios,
              disponibilidad y rentabilidad por barrio. Nuestro objetivo es proporcionar{' '}
              <span className="text-teal-400 font-semibold">insights accionables</span>.
            </p>

            {/* Stats */}
            <div className="border-t border-gray-700 mt-6 pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">

              {[
                { value: '6', label: 'Ciudades', color: 'text-white' },
                { value: '220K', label: 'Alojamientos', color: 'text-teal-400' },
                { value: '€136', label: 'Precio medio', color: 'text-blue-400' },
                { value: '120', label: 'Días disp.', color: 'text-white' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all shadow-md shadow-black/20"
                >
                  <p className={`text-3xl font-bold ${item.color}`}>
                    {item.value}
                  </p>
                  <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>

      {/* Secciones */}
      <section>
        <SectionHeader
          emoji="🏙️"
          title="Comparativa de Precios por Ciudad"
          subtitle="Precio medio · 6 ciudades globales"
        />
        <CityBarChart
          data={cityData}
          title="Precio promedio por ciudad"
          analysis="Sydney lidera con el precio más alto (€208)..."
        />
      </section>

      <section>
        <SectionHeader
          emoji="📊"
          title="Rentabilidad por Barrio"
          subtitle="Precio vs. reseñas · Madrid & London"
        />
        <NeighbourhoodScatter
          data={scatterData}
          title="Promedio de price vs reseñas"
          analysis="Los barrios con precios entre €50-€150 concentran mayor demanda..."
        />
      </section>

      <section>
        <SectionHeader
          emoji="🏘️"
          title="Ranking de Barrios por Precio"
          subtitle="Top barrios · precio medio"
        />
        <NeighbourhoodHorizontalBar
          data={horizontalData}
          title="Promedio de price por neighbourhood"
          threshold={300}
        />
      </section>

      <section>
        <SectionHeader
          emoji="🗺️"
          title="Distribución Geográfica — Madrid"
          subtitle="Mapa de precios"
        />
        <PriceMap
          data={madridData}
          title="Mapa de precios por ubicación — Madrid"
        />
      </section>

      <section>
        <SectionHeader
          emoji="👤"
          title="Comparación Host vs Superhost"
          subtitle="Distribución de anfitriones"
        />
        <DonutChart
          data={hostData}
          title="Comparación entre host y superhost"
          subtitle="Superhost = 4+ propiedades"
          analysis="El 73,83% de los alojamientos pertenecen a hosts regulares..."
        />
      </section>

    </div>
  )
}