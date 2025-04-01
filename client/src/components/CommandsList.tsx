import { Category, Command, Rank } from "@/types";
import { CategoryHeader } from "./CategoryHeader";
import { CommandCard } from "./CommandCard";
import { groupCommandsByCategory } from "@/lib/command-utils";

interface CommandsListProps {
  commands: Command[];
  selectedRank: Rank;
}

export function CommandsList({ commands, selectedRank }: CommandsListProps) {
  // Group commands by category
  const commandsByCategory = groupCommandsByCategory(commands);
  
  // Category display info
  const categories: Record<Category, { title: string; icon: string }> = {
    teleport: { title: "Teletransporte", icon: "fa-location-arrow" },
    economy: { title: "Economía", icon: "fa-coins" },
    protection: { title: "Protección", icon: "fa-shield-alt" },
    chat: { title: "Chat", icon: "fa-comments" }
  };

  return (
    <section className="lg:w-3/4" id="commands-container">
      <div className="bg-[#3E2A16] bg-opacity-90 p-6 rounded-lg border-2 border-[#8B4513] shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-minecraft text-[#CD853F] mb-2 text-shadow">
            Comandos para <span id="current-rank" className="text-[#F5DEB3]">
              {selectedRank.charAt(0).toUpperCase() + selectedRank.slice(1)}
            </span>
          </h2>
          <div className="hidden lg:block">
            <span className="font-minecraft text-sm text-[#F5DEB3] bg-[#5E2F0D] py-1 px-3 rounded-md">
              Total: <span id="command-count" className="font-bold">{commands.length}</span> comandos
            </span>
          </div>
        </div>
        
        <div className="h-1 bg-[#8B4513] mb-6 rounded opacity-50"></div>

        {Object.entries(commandsByCategory).map(([category, categoryCommands]) => {
          // Skip empty categories
          if (categoryCommands.length === 0) return null;
          
          const categoryInfo = categories[category as Category];
          
          return (
            <div key={category} className="mb-8 command-category" id={category}>
              <CategoryHeader 
                title={categoryInfo.title} 
                icon={categoryInfo.icon} 
                id={category} 
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryCommands.map((command) => (
                  <CommandCard key={command.id} command={command} />
                ))}
              </div>
            </div>
          );
        })}
        
        {commands.length === 0 && (
          <div className="text-center py-8 bg-[#5E2F0D] bg-opacity-70 rounded-md">
            <p className="font-minecraft text-[#F5DEB3] text-xl">
              No se encontraron comandos para esta búsqueda
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
