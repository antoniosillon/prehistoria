import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function RulesPage() {
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
              opacity: 0.1,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <div className="text-4xl md:text-6xl text-[#CD853F]">
              {["🦴", "🦴", "🥚", "🌋", "🍖", "🔥", "🦴", "🌋"][i % 8]}
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
            <h1 className="text-4xl font-minecraft text-center ml-4 text-[#CD853F]">Reglas del Servidor</h1>
          </div>

          {/* Separador decorativo */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 bg-[#8B4513] w-24 opacity-60 rounded"></div>
            <div className="mx-3 text-2xl text-[#CD853F]">🦴</div>
            <div className="h-1 bg-[#8B4513] w-24 opacity-60 rounded"></div>
          </div>

          {/* Introducción */}
          <div className="bg-[#3E2A16] border-2 border-[#8B4513] rounded-lg p-6 mb-8 theme-border">
            <p className="text-lg mb-4">
              Para garantizar una experiencia de juego agradable para todos, hemos establecido las siguientes reglas. Te pedimos que las leas detenidamente y las respetes durante tu estancia en PrehistoriaMC.
            </p>
            <div className="bg-[#2C1B0E] p-4 rounded border border-[#8B4513] italic">
              <p className="text-center text-lg">
                <span className="text-[#CD853F] font-bold">Importante:</span> Sin pruebas, no hay juicio
              </p>
              <p className="mt-2">
                Para cualquier reporte o reclamación, es imprescindible aportar evidencias como capturas de pantalla o grabaciones. Te recomendamos grabar tus transacciones importantes para tu propia seguridad. Sin pruebas, no podremos tomar medidas, independientemente de la gravedad que percibas en la situación.
              </p>
            </div>
          </div>

          {/* Lista de reglas */}
          <div className="bg-[#3E2A16] border-2 border-[#8B4513] rounded-lg p-6 mb-8 theme-border">
            <h2 className="text-2xl font-minecraft mb-6 text-center text-[#CD853F]">Normativa Oficial</h2>

            {/* Regla 1 */}
            <div className="mb-6 bg-[#2C1B0E] rounded-lg p-4 border border-[#8B4513]">
              <h3 className="text-xl font-minecraft mb-2 flex items-center">
                <span className="flex justify-center items-center bg-[#8B4513] text-[#F5DEB3] w-8 h-8 rounded-full mr-3">1</span>
                <span className="text-[#CD853F]">Combate y PvP</span>
              </h3>
              <p>
                El combate entre jugadores está permitido sin restricciones, siempre que no se utilicen hacks o modificaciones ilegales. Recuerda que la confianza en otros jugadores es bajo tu propio riesgo. Mantente alerta y prepárate adecuadamente para enfrentamientos.
              </p>
            </div>

            {/* Regla 2 */}
            <div className="mb-6 bg-[#2C1B0E] rounded-lg p-4 border border-[#8B4513]">
              <h3 className="text-xl font-minecraft mb-2 flex items-center">
                <span className="flex justify-center items-center bg-[#8B4513] text-[#F5DEB3] w-8 h-8 rounded-full mr-3">2</span>
                <span className="text-[#CD853F]">Granjas y construcciones</span>
              </h3>
              <p>
                Se permite la construcción de todo tipo de granjas y mecanismos automatizados, con la única condición de que no causen lag excesivo en el servidor. Si una granja afecta negativamente al rendimiento, el staff podrá solicitar su modificación o desactivación temporal.
              </p>
            </div>

            {/* Regla 3 */}
            <div className="mb-6 bg-[#2C1B0E] rounded-lg p-4 border border-[#8B4513]">
              <h3 className="text-xl font-minecraft mb-2 flex items-center">
                <span className="flex justify-center items-center bg-[#8B4513] text-[#F5DEB3] w-8 h-8 rounded-full mr-3">3</span>
                <span className="text-[#CD853F]">Comercio entre jugadores</span>
              </h3>
              <p>
                El comercio es completamente libre entre jugadores. Puedes establecer tus propios precios y condiciones para el intercambio de recursos, siempre que las transacciones respeten las demás normas del servidor. Recomendamos documentar las transacciones importantes.
              </p>
            </div>

            {/* Regla 4 */}
            <div className="mb-6 bg-[#2C1B0E] rounded-lg p-4 border border-[#8B4513]">
              <h3 className="text-xl font-minecraft mb-2 flex items-center">
                <span className="flex justify-center items-center bg-[#8B4513] text-[#F5DEB3] w-8 h-8 rounded-full mr-3">4</span>
                <span className="text-[#CD853F]">Teletransportes (TP)</span>
              </h3>
              <p>
                Al aceptar una solicitud de teletransporte, asumes el riesgo y las posibles consecuencias. Sin embargo, está estrictamente prohibido crear trampas de muerte o estructuras de encierro específicamente diseñadas para atrapar a jugadores que hayan aceptado un TP. Esta práctica será sancionada.
              </p>
            </div>

            {/* Regla 5 */}
            <div className="mb-6 bg-[#2C1B0E] rounded-lg p-4 border border-[#8B4513]">
              <h3 className="text-xl font-minecraft mb-2 flex items-center">
                <span className="flex justify-center items-center bg-[#8B4513] text-[#F5DEB3] w-8 h-8 rounded-full mr-3">5</span>
                <span className="text-[#CD853F]">Raideos y robos</span>
              </h3>
              <p>
                Los raideos y robos están permitidos como parte de la experiencia de supervivencia. Puedes tomar ítems de cofres, enderchests o del suelo pertenecientes a otros jugadores. Sin embargo, estas acciones no deben afectar al funcionamiento del servidor ni convertirse en acoso continuado hacia un jugador específico.
              </p>
            </div>

            {/* Regla 6 */}
            <div className="mb-6 bg-[#2C1B0E] rounded-lg p-4 border border-[#8B4513]">
              <h3 className="text-xl font-minecraft mb-2 flex items-center">
                <span className="flex justify-center items-center bg-[#8B4513] text-[#F5DEB3] w-8 h-8 rounded-full mr-3">6</span>
                <span className="text-[#CD853F]">Participación en eventos</span>
              </h3>
              <p>
                Durante los eventos organizados por el servidor, no se permite llevar objetos personales. Los organizadores utilizarán el comando <span className="text-[#CD853F] font-bold">/clear</span> para vaciar inventarios y garantizar condiciones justas de participación. Está prohibido quedarse con objetos obtenidos dentro del evento una vez este haya finalizado, a menos que se indique lo contrario.
              </p>
            </div>

            {/* Regla 7 */}
            <div className="mb-6 bg-[#2C1B0E] rounded-lg p-4 border border-[#8B4513]">
              <h3 className="text-xl font-minecraft mb-2 flex items-center">
                <span className="flex justify-center items-center bg-[#8B4513] text-[#F5DEB3] w-8 h-8 rounded-full mr-3">7</span>
                <span className="text-[#CD853F]">Uso de modificaciones</span>
              </h3>
              <p>
                En nuestro servidor, se permite el uso de X-Ray para minería, pero cualquier otro tipo de hack, programa de trampa o método de duplicación está estrictamente prohibido. El uso de bugs o exploits para obtener ventajas injustas también está prohibido y puede resultar en sanciones.
              </p>
            </div>

            {/* Regla 8 */}
            <div className="mb-6 bg-[#2C1B0E] rounded-lg p-4 border border-[#8B4513]">
              <h3 className="text-xl font-minecraft mb-2 flex items-center">
                <span className="flex justify-center items-center bg-[#8B4513] text-[#F5DEB3] w-8 h-8 rounded-full mr-3">8</span>
                <span className="text-[#CD853F]">Construcción de bases</span>
              </h3>
              <p>
                Puedes construir tu base donde prefieras, ya sea subterránea, en la superficie o aérea. La única restricción es que no está permitido construir sobre la capa de Bedrock. Respeta las construcciones de otros jugadores, manteniendo una distancia razonable cuando sea posible.
              </p>
            </div>

            {/* Regla 9 */}
            <div className="mb-6 bg-[#2C1B0E] rounded-lg p-4 border border-[#8B4513]">
              <h3 className="text-xl font-minecraft mb-2 flex items-center">
                <span className="flex justify-center items-center bg-[#8B4513] text-[#F5DEB3] w-8 h-8 rounded-full mr-3">9</span>
                <span className="text-[#CD853F]">Multicuentas</span>
              </h3>
              <p>
                No está permitido el uso de cuentas secundarias o alternativas. Solo puedes jugar con una única cuenta por dirección IP. Si detectamos varias cuentas registradas desde la misma IP, procederemos al baneo de dicha IP, impidiendo el acceso de forma permanente. Esta medida es para garantizar un entorno de juego equilibrado.
              </p>
            </div>

            {/* Regla 10 */}
            <div className="mb-6 bg-[#2C1B0E] rounded-lg p-4 border border-[#8B4513]">
              <h3 className="text-xl font-minecraft mb-2 flex items-center">
                <span className="flex justify-center items-center bg-[#8B4513] text-[#F5DEB3] w-8 h-8 rounded-full mr-3">10</span>
                <span className="text-[#CD853F]">Publicidad y promociones</span>
              </h3>
              <p>
                Está prohibida cualquier forma de publicidad o promoción de otros servidores, comunidades o plataformas no relacionadas con PrehistoriaMC. Esto incluye compartir IPs, enlaces o invitaciones en el chat del juego o en nuestros canales oficiales de comunicación.
              </p>
            </div>

            {/* Regla 11 */}
            <div className="mb-6 bg-[#2C1B0E] rounded-lg p-4 border border-[#8B4513]">
              <h3 className="text-xl font-minecraft mb-2 flex items-center">
                <span className="flex justify-center items-center bg-[#8B4513] text-[#F5DEB3] w-8 h-8 rounded-full mr-3">11</span>
                <span className="text-[#CD853F]">Interacción con el staff</span>
              </h3>
              <p>
                Está prohibido proporcionar información falsa o engañosa al equipo de moderación. No debes realizar reportes falsos o solicitar la devolución de objetos perdidos sin pruebas que lo respalden. El mal uso de los sistemas de reporte o la manipulación del staff será sancionado. Valoramos la honestidad y el respeto mutuo.
              </p>
            </div>
          </div>

          {/* Nota de cierre */}
          <div className="bg-[#3E2A16] border-2 border-[#8B4513] rounded-lg p-6 mb-8 theme-border">
            <h2 className="text-xl font-minecraft mb-4 text-center text-[#CD853F]">Notas finales</h2>
            <p className="mb-4">
              El equipo de moderación se reserva el derecho de interpretar estas reglas y tomar las medidas que considere necesarias para mantener un ambiente de juego agradable para todos. Las sanciones pueden incluir advertencias, expulsiones temporales o baneos permanentes, dependiendo de la gravedad de la infracción.
            </p>
            <p>
              Estas reglas pueden ser modificadas en cualquier momento para adaptarse a las necesidades del servidor y su comunidad. Los cambios se anunciarán en nuestro Discord oficial.
            </p>
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
            <Link href="/info" className="w-full md:w-auto">
              <Button className="minecraft-btn w-full text-lg py-6 flex items-center justify-center gap-2" size="lg">
                <i className="fas fa-info-circle mr-2"></i>
                Información
              </Button>
            </Link>
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