import { useState, useEffect } from "react";
import { MinecraftHeader } from "@/components/MinecraftHeader";
import { MinecraftFooter } from "@/components/MinecraftFooter";
import { RankSelection } from "@/components/RankSelection";
import { SearchBox } from "@/components/SearchBox";
import { CommandsList } from "@/components/CommandsList";
import { Command, Rank } from "@/types";
import { filterCommands } from "@/lib/command-utils";
import { commands } from "@/data/commands";

export default function CommandsPage() {
  // State for filters
  const [selectedRank, setSelectedRank] = useState<Rank>("usuario");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter commands based on selected rank and search term
  const filteredCommands = filterCommands(commands, selectedRank, searchTerm);
  
  // Handle category jump on mobile
  const handleCategoryJump = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = event.target.value;
    if (categoryId) {
      const categoryElement = document.getElementById(categoryId);
      if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: 'smooth' });
      }
      event.target.value = ''; // Reset select after jump
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#2C1B0E] text-[#F5DEB3] font-roboto minecraft-bg">
      <MinecraftHeader />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-[#3E2A16] bg-opacity-90 p-5 rounded-lg border-2 border-[#8B4513] shadow-lg">
              <div className="bone-float mb-2">
                <span className="text-3xl">🦴</span>
              </div>
              <h2 className="text-2xl font-minecraft mb-4 text-[#CD853F] text-shadow">Selecciona tu Rango</h2>
              
              {/* Rank Selection */}
              <RankSelection 
                selectedRank={selectedRank} 
                onRankChange={setSelectedRank} 
              />
              
              {/* Search Box */}
              <SearchBox 
                searchTerm={searchTerm} 
                onSearchChange={setSearchTerm} 
              />

              {/* Mobile Category Jump */}
              <div className="mt-6 lg:hidden">
                <h3 className="text-xl font-minecraft mb-2 text-[#CD853F]">Categorías</h3>
                <select 
                  className="search-input w-full py-2 px-4 font-minecraft text-[#5E2F0D] bg-[#F5DEB3] border-2 border-[#8B4513] rounded-md" 
                  id="category-jump"
                  onChange={handleCategoryJump}
                >
                  <option value="">Saltar a categoría...</option>
                  <option value="teleport">Teletransporte</option>
                  <option value="economy">Economía</option>
                  <option value="protection">Protección</option>
                  <option value="chat">Chat</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Commands List */}
          {isLoading ? (
            <div className="lg:w-3/4 flex items-center justify-center">
              <div className="text-center p-8 bg-[#3E2A16] bg-opacity-80 rounded-lg border-2 border-[#8B4513]">
                <div className="animate-pulse">
                  <h2 className="text-2xl font-minecraft text-[#CD853F]">
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Cargando comandos...
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            <CommandsList 
              commands={filteredCommands} 
              selectedRank={selectedRank} 
            />
          )}
        </div>
      </main>
      
      <MinecraftFooter />
    </div>
  );
}
