import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function InfoPage() {
  return (
    <div className="min-h-screen flex flex-col lava-background text-[#F5DEB3] font-minecraft overflow-hidden relative">
      {/* Decoraciones flotantes */}
      <div className="absolute w-full h-full pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute bone-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              opacity: 0.3,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <div className="text-4xl md:text-6xl text-[#CD853F]">
              {["🦖", "🦕", "🦴", "🦴", "🥚", "🌋", "🍖", "🔥"][i % 8]}
            </div>
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8 flex-grow z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center">
            <Link href="/">
              <Button className="minecraft-btn py-2 px-4 flex items-center justify-center gap-2">
                <i className="fas fa-arrow-left mr-2"></i>
                Volver
              </Button>
            </Link>
            <h1 className="text-4xl font-minecraft text-center ml-4 text-[#CD853F]">Información del Servidor</h1>
          </div>

          {/* Separador decorativo */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 bg-[#8B4513] w-24 opacity-60 rounded"></div>
            <div className="mx-3 text-2xl text-[#CD853F]">🦴</div>
            <div className="h-1 bg-[#8B4513] w-24 opacity-60 rounded"></div>
          </div>

          {/* Sección de bienvenida */}
          <div className="bg-[#3E2A16] border-2 border-[#8B4513] rounded-lg p-6 mb-8 theme-border">
            <h2 className="text-2xl font-minecraft mb-4 text-[#F5DEB3]">
              <span className="text-[#CD853F]">Bienvenido a PrehistoriaMC</span>
            </h2>
            
            <div className="bg-[#2C1B0E] p-4 rounded border border-[#8B4513] mb-4">
              <p className="italic text-[#F5DEB3]">
                "¡Saludos, aventurero! Estás a punto de embarcarte en una experiencia única donde el pasado y el presente se encuentran en un mundo lleno de posibilidades."
              </p>
            </div>
            
            <p className="mb-3">
              PrehistoriaMC es un servidor de Minecraft donde la exploración, la creatividad y la comunidad son los pilares fundamentales. Aquí encontrarás un mundo donde podrás forjar tu propio destino: construir imperios, formar alianzas, conquistar territorios y sumergirte en una experiencia única de supervivencia con temática prehistórica.
            </p>
            
            <p className="mb-3">
              Al ingresar al servidor, serás recibido por los NPCs que te guiarán en tus primeros pasos. El Anciano del Pueblo te explicará los fundamentos del mundo y cómo puedes prosperar en él, mientras que el Maestro de Misiones te introducirá en las aventuras que podrás emprender.
            </p>
            
            <div className="bg-[#2C1B0E] p-4 rounded border border-[#8B4513] mt-4">
              <p className="italic text-[#F5DEB3]">
                "Lo más valioso en este mundo no son los recursos que encuentres, sino las historias que crearás y las amistades que forjarás en el camino."
              </p>
            </div>
          </div>

          {/* Características del servidor */}
          <div className="bg-[#3E2A16] border-2 border-[#8B4513] rounded-lg p-6 mb-8 theme-border">
            <h2 className="text-2xl font-minecraft mb-4 text-[#F5DEB3]">Un Mundo de Posibilidades</h2>
            
            <h3 className="text-xl font-minecraft mb-3 text-[#CD853F]">¿Qué hace especial a PrehistoriaMC?</h3>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <span className="text-xl mr-3 text-[#F5DEB3]">🫂</span>
                <div>
                  <strong className="text-[#F5DEB3]">Comunidad amigable y activa</strong>
                  <p className="text-sm opacity-90">Jugadores dispuestos a ayudarte y compartir experiencias, creando un ambiente acogedor para todos.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3 text-[#F5DEB3]">🎊</span>
                <div>
                  <strong className="text-[#F5DEB3]">Eventos semanales</strong>
                  <p className="text-sm opacity-90">Cada semana organizamos competiciones, desafíos y actividades para mantener la experiencia siempre fresca y emocionante.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3 text-[#F5DEB3]">📜</span>
                <div>
                  <strong className="text-[#F5DEB3]">Modo historia con progresión</strong>
                  <p className="text-sm opacity-90">Una narrativa envolvente que evoluciona con el tiempo, donde tus acciones pueden influir en el desarrollo del mundo.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3 text-[#F5DEB3]">⚔️</span>
                <div>
                  <strong className="text-[#F5DEB3]">Sistema de misiones y combate</strong>
                  <p className="text-sm opacity-90">Misiones diarias, semanales y principales que te recompensarán con recursos, equipamiento y monedas del servidor.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3 text-[#F5DEB3]">👥</span>
                <div>
                  <strong className="text-[#F5DEB3]">Sistema de clanes</strong>
                  <p className="text-sm opacity-90">Crea tu propio clan o únete a uno existente para dominar territorios, participar en guerras y forjar alianzas.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3 text-[#F5DEB3]">💰</span>
                <div>
                  <strong className="text-[#F5DEB3]">Economía dinámica</strong>
                  <p className="text-sm opacity-90">Compra, vende, comercia y gana dinero para mejorar tu equipamiento y expandir tus dominios.</p>
                </div>
              </li>
            </ul>

            <h3 className="text-xl font-minecraft mb-3 text-[#CD853F]">Modalidad de juego</h3>
            <div className="bg-[#2C1B0E] p-4 rounded border border-[#8B4513] mb-6">
              <div className="flex items-center">
                <span className="text-2xl mr-3 text-[#F5DEB3]">🌴</span>
                <div>
                  <strong className="text-lg text-[#F5DEB3]">Survival Custom Prehistórico</strong>
                  <p className="text-sm opacity-90">Una experiencia de supervivencia única con elementos prehistóricos, sistemas de clanes, economía y misiones que se entrelazan para crear un mundo vivo y en constante evolución.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#2C1B0E] p-4 rounded border border-[#8B4513]">
              <h4 className="text-center text-lg font-minecraft mb-2 text-[#CD853F]">Compromiso con la comunidad</h4>
              <p className="text-center text-[#F5DEB3]">
                Nuestro servidor está diseñado para perdurar. <strong>Nunca reiniciaremos el mundo</strong>, permitiéndote construir tu legado a largo plazo. Tu progreso y creaciones estarán seguros mientras el servidor exista.
              </p>
            </div>
          </div>

          {/* Guía para nuevos jugadores */}
          <div className="bg-[#3E2A16] border-2 border-[#8B4513] rounded-lg p-6 mb-8 theme-border">
            <h2 className="text-2xl font-minecraft mb-4 text-[#F5DEB3]">Guía para Nuevos Aventureros</h2>
            
            <div className="bg-[#2C1B0E] p-4 rounded border border-[#8B4513] mb-4">
              <p className="text-[#F5DEB3]">
                Para ayudarte a dar tus primeros pasos en PrehistoriaMC, hemos creado esta guía con todo lo que necesitas saber para comenzar tu aventura.
              </p>
            </div>
            
            <h3 className="text-xl font-minecraft mb-3 text-[#CD853F]">Primeros pasos</h3>
            <ol className="space-y-3 list-decimal pl-6 mb-6">
              <li>
                <strong className="text-[#F5DEB3]">Familiarízate con las reglas</strong> - En nuestro Discord encontrarás el canal de reglas para conocer lo que está permitido.
              </li>
              <li>
                <strong className="text-[#F5DEB3]">Explora el spawn</strong> - Aquí encontrarás a los NPCs que te darán las primeras misiones y explicaciones.
              </li>
              <li>
                <strong className="text-[#F5DEB3]">Usa <span className="text-[#CD853F] font-bold">/rtp</span></strong> - Este comando te teletransportará a un lugar aleatorio del mapa para comenzar tu aventura. ¡No te muevas hasta completar el teletransporte!
              </li>
              <li>
                <strong className="text-[#F5DEB3]">Regresa al spawn con <span className="text-[#CD853F] font-bold">/spawn</span></strong> - Úsalo cuando necesites volver al punto de inicio.
              </li>
              <li>
                <strong className="text-[#F5DEB3]">Consulta tu balance</strong> - Usa <span className="text-[#CD853F] font-bold">/bal</span> para ver cuánto dinero tienes.
              </li>
              <li>
                <strong className="text-[#F5DEB3]">Compra y vende</strong> - Visita la tienda con <span className="text-[#CD853F] font-bold">/shop</span> para comerciar.
              </li>
            </ol>
            
            <h3 className="text-xl font-minecraft mb-3 text-[#CD853F]">Consejos importantes</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-xl mr-2 text-[#F5DEB3]">⚠️</span>
                <span>No aceptes teletransportes (<strong>tp</strong>) de jugadores desconocidos, podrían ser trampas para robarte.</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2 text-[#F5DEB3]">🛡️</span>
                <span>En el servidor puedes usar comandos ocultos como <strong>!ip</strong> o <strong>!puerto</strong> para obtener información rápidamente.</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2 text-[#F5DEB3]">💼</span>
                <span>Disponemos de kits para ayudarte a comenzar y rangos para tu progresión en el servidor.</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-2 text-[#F5DEB3]">📢</span>
                <span>Únete a nuestro Discord para mantenerte informado de eventos, actualizaciones y comunicarte con otros jugadores.</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-minecraft mb-3 text-[#CD853F]">Versiones compatibles</h3>
            <div className="mt-4 bg-[#2C1B0E] p-4 rounded border border-[#8B4513]">
              <p className="text-center font-bold text-[#F5DEB3] mb-2">Compatible con todas las versiones de Minecraft 1.21</p>
              <div className="flex justify-center items-center gap-6">
                <div className="text-center">
                  <span className="block text-lg font-bold text-[#CD853F]">Java</span>
                  <span>Recomendada: 1.21.4 ☕</span>
                </div>
                <div className="text-center">
                  <span className="block text-lg font-bold text-[#CD853F]">Bedrock</span>
                  <span>Recomendada: Última versión ⛏️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-8">
            <Link href="/" className="w-full md:w-auto">
              <Button className="minecraft-btn w-full text-lg py-6 flex items-center justify-center gap-2" size="lg">
                <i className="fas fa-home mr-2"></i>
                Inicio
              </Button>
            </Link>
            <Link href="/comandos" className="w-full md:w-auto">
              <Button className="minecraft-btn w-full text-lg py-6 flex items-center justify-center gap-2" size="lg">
                <i className="fas fa-scroll mr-2"></i>
                Comandos
              </Button>
            </Link>
            <Link href="/reglas" className="w-full md:w-auto">
              <Button className="minecraft-btn w-full text-lg py-6 flex items-center justify-center gap-2" size="lg">
                <i className="fas fa-gavel mr-2"></i>
                Reglas
              </Button>
            </Link>
            <a 
              href="https://discord.gg/nrDzUmmK6a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <Button className="minecraft-btn w-full text-lg py-6 flex items-center justify-center gap-2" size="lg">
                <i className="fab fa-discord mr-2"></i>
                Discord
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E2A16] border-t-2 border-[#8B4513] py-4 text-center z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-2">
            <div className="bone-float mx-2 text-[#CD853F]">🦴</div>
          </div>
          <p className="text-sm text-[#F5DEB3] opacity-70">
            &copy; {new Date().getFullYear()} Prehistoria MC | Versión 1.21
          </p>
        </div>
      </footer>
    </div>
  );
}