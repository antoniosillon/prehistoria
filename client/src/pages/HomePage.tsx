import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HomePage() {
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
      <main className="container mx-auto px-4 py-8 flex-grow flex flex-col items-center justify-center z-10">
        <div className="mt-8 md:mt-0">
          {/* Logo decorativo */}
          <div className="flex justify-center mb-8">
            <div className="text-6xl bone-float">
              <span className="text-[#CD853F]">🦴</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-minecraft text-center tracking-wide text-shadow mb-4">
            <span className="text-[#CD853F]">Prehistoria</span>
            <span className="text-[#F5DEB3]">MC</span>
          </h1>
          <p className="text-xl text-center text-[#F5DEB3] opacity-90 max-w-2xl mx-auto mb-8">
            ¡Te invitamos a jugar en un servidor donde las aventuras son interminables! Crea tu clan, conquista territorios, completa misiones emocionantes y forma parte de una historia que cambia cada semana. ¡La diversión nunca termina en PrehistoriaMC!
          </p>
          
          {/* Separador decorativo */}
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-[#8B4513] w-16 opacity-60 rounded"></div>
            <div className="mx-3 text-2xl text-[#CD853F]">🦴</div>
            <div className="h-1 bg-[#8B4513] w-16 opacity-60 rounded"></div>
          </div>
        </div>

        {/* IP del servidor */}
        <div className="mb-10">
          <div className="bg-[#A0522D] text-[#F5DEB3] font-minecraft px-6 py-3 rounded-lg border-2 border-[#8B4513] shadow-md text-center">
            <div className="text-sm uppercase tracking-wide mb-1 opacity-80">Conéctate ahora</div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
              <div>
                <span className="mr-2 font-bold">IP:</span> 
                <span className="text-white">prhmc.aternos.me</span>
              </div>
              <div className="hidden md:block opacity-50">•</div>
              <div>
                <span className="mr-2 font-bold">Puerto:</span> 
                <span className="text-white">61413</span>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col gap-4 justify-center items-center w-full mx-auto mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full max-w-5xl mx-auto">
            <Link href="/comandos" className="w-full">
              <Button className="minecraft-btn w-full h-full text-base sm:text-lg py-4 sm:py-6 flex items-center justify-center gap-1" size="lg">
                <i className="fas fa-scroll mr-1 sm:mr-2"></i>
                Comandos
              </Button>
            </Link>
            <Link href="/info" className="w-full">
              <Button className="minecraft-btn w-full h-full text-base sm:text-lg py-4 sm:py-6 flex items-center justify-center gap-1" size="lg">
                <i className="fas fa-info-circle mr-1 sm:mr-2"></i>
                Info
              </Button>
            </Link>
            <Link href="/reglas" className="w-full">
              <Button className="minecraft-btn w-full h-full text-base sm:text-lg py-4 sm:py-6 flex items-center justify-center gap-1" size="lg">
                <i className="fas fa-gavel mr-1 sm:mr-2"></i>
                Reglas
              </Button>
            </Link>
            <a 
              href="https://discord.gg/nrDzUmmK6a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="minecraft-btn w-full h-full text-base sm:text-lg py-4 sm:py-6 flex items-center justify-center gap-1" size="lg">
                <i className="fab fa-discord mr-1 sm:mr-2"></i>
                Discord
              </Button>
            </a>
            <a 
              href="https://www.tiktok.com/@prehistoriamc?_t=ZN-8uqxfmDx7Ha&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="minecraft-btn w-full h-full text-base sm:text-lg py-4 sm:py-6 flex items-center justify-center gap-1" size="lg">
                <i className="fab fa-tiktok mr-1 sm:mr-2"></i>
                TikTok
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
          <p className="text-xs text-[#F5DEB3] opacity-60 mt-1">
            Página hecha por Antoniosillon
          </p>
        </div>
      </footer>
    </div>
  );
}