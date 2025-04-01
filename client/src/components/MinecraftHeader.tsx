import { Link } from "wouter";

export function MinecraftHeader() {
  return (
    <header className="bg-[#3E2A16] border-b-4 border-[#8B4513] shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-end mb-2">
          <Link href="/" className="minecraft-btn flex items-center px-3 py-1 text-sm">
            <i className="fas fa-home mr-2"></i> Volver al Inicio
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-minecraft text-center tracking-wide text-shadow">
          <span className="text-[#CD853F]">Prehistoria</span><span className="text-[#F5DEB3]">MC</span>
        </h1>
        <p className="text-center text-[#F5DEB3] mt-2 font-minecraft">comandos</p>
        
        <div className="flex justify-center items-center mt-4 space-x-4">
          <a href="https://discord.gg/nrDzUmmK6a" target="_blank" rel="noopener noreferrer" className="minecraft-btn px-4 flex items-center">
            <i className="fab fa-discord mr-2"></i> Discord
          </a>
          <a href="https://www.tiktok.com/@prehistoriamc?_t=ZN-8uqxfmDx7Ha&_r=1" target="_blank" rel="noopener noreferrer" className="minecraft-btn px-4 flex items-center">
            <i className="fab fa-tiktok mr-2"></i> TikTok
          </a>
        </div>
        
        <div className="flex justify-center mt-4">
          <div className="font-minecraft bg-[#5E2F0D] text-[#F5DEB3] p-3 rounded-lg border-2 border-[#8B4513] max-w-xs w-full text-center shadow-lg">
            <p>IP: <span className="font-bold">prhmc.aternos.me</span> • Puerto: <span className="font-bold">61413</span></p>
          </div>
        </div>
      </div>
    </header>
  );
}
