import { Link } from "wouter";

export function MinecraftFooter() {
  return (
    <footer className="bg-[#5E2F0D] border-t-4 border-[#8B4513] py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
          <Link href="/" className="minecraft-btn px-4 py-2 flex items-center">
            <i className="fas fa-home mr-2"></i> Inicio
          </Link>
          <Link href="/info" className="minecraft-btn px-4 py-2 flex items-center">
            <i className="fas fa-info-circle mr-2"></i> Información
          </Link>
          <Link href="/reglas" className="minecraft-btn px-4 py-2 flex items-center">
            <i className="fas fa-gavel mr-2"></i> Reglas
          </Link>
          <a 
            href="https://discord.gg/nrDzUmmK6a" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="minecraft-btn px-4 py-2 flex items-center"
          >
            <i className="fab fa-discord mr-2"></i> Discord
          </a>
          <a 
            href="https://www.tiktok.com/@prehistoriamc?_t=ZN-8uqxfmDx7Ha&_r=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="minecraft-btn px-4 py-2 flex items-center"
          >
            <i className="fab fa-tiktok mr-2"></i> TikTok
          </a>
        </div>
        <div className="flex justify-center items-center mb-4">
          <div className="bg-[#A0522D] text-[#F5DEB3] font-minecraft px-4 py-2 rounded-lg border-2 border-[#8B4513] shadow-md">
            <span className="mr-2 font-bold">IP:</span> prhmc.aternos.me
            <span className="mx-2">•</span>
            <span className="mr-2 font-bold">Puerto:</span> 61413
          </div>
        </div>
        <div className="bg-[#8B4513] h-1 mx-auto w-32 mb-4 rounded"></div>
        <p className="text-center font-minecraft text-[#F5DEB3] text-sm">
          &copy; {new Date().getFullYear()} Prehistoria MC | Versión 1.21
        </p>
        <p className="text-center text-[#F5DEB3] text-xs mt-2">
          Página hecha por Antoniosillon
        </p>
        <p className="text-center text-[#F5DEB3] text-opacity-80 text-xs mt-2">
          Minecraft es una marca registrada de Mojang Studios
        </p>
      </div>
    </footer>
  );
}
