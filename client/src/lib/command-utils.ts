import { Command, Rank } from "@/types";

// Mapping of which ranks can access commands of which rank levels
export const RANK_ACCESS: Record<Rank, Rank[]> = {
  usuario: ["usuario"],
  helper: ["usuario", "helper"],
  moderador: ["usuario", "helper", "moderador"],
  admin: ["usuario", "helper", "moderador", "admin"]
};

/**
 * Filter commands based on rank and optional search term
 * Handles special cases for commands based on rank
 */
export function filterCommands(
  commands: Command[],
  selectedRank: Rank,
  searchTerm: string = ""
): Command[] {
  const accessibleRanks = RANK_ACCESS[selectedRank];
  
  // Primero, filtramos por búsqueda y rango
  let filteredCommands = commands.filter(command => {
    // Verifica si el comando es accesible para el rango seleccionado
    const isRankAccessible = accessibleRanks.includes(command.rank as Rank);
    
    // Verifica si el comando coincide con el término de búsqueda
    const matchesSearch = searchTerm === "" || 
      command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      command.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      command.syntax.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Casos especiales:
    
    // 1. Si el rango es moderador o admin, ocultar comandos de helper "reemplazados"
    if (selectedRank === "moderador" || selectedRank === "admin") {
      // No mostrar el tpo de helper cuando estamos en moderador o admin, solo tp
      if (command.name === "tpo" && command.rank === "helper") {
        return false;
      }
      
      // No mostrar el gamemode limitado de helper cuando estamos en moderador o admin 
      if (command.name === "gamemode-limited" && command.rank === "helper") {
        return false;
      }
    }
    
    // 2. Si el rango es helper, mostrar solo los comandos limitados, no los completos
    if (selectedRank === "helper") {
      // Para helper, mostramos gamemode-limited, no gamemode
      if (command.name === "gamemode" && command.rank === "moderador") {
        return false;
      }
      
      // Para helper, mostramos tpo, no tp
      if (command.name === "tp" && command.rank === "moderador") {
        return false;
      }
    }
    
    return isRankAccessible && matchesSearch;
  });
  
  return filteredCommands;
}

/**
 * Group commands by their category
 */
export function groupCommandsByCategory(commands: Command[]): Record<string, Command[]> {
  return commands.reduce((acc, command) => {
    const category = command.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(command);
    return acc;
  }, {} as Record<string, Command[]>);
}
