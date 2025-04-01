import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface SearchBoxProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function SearchBox({ searchTerm, onSearchChange }: SearchBoxProps) {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="mt-6">
      <h3 className="text-xl font-minecraft mb-3 text-[#CD853F] text-shadow flex items-center">
        <i className="fas fa-scroll text-[#F5DEB3] mr-2"></i>
        Buscar Comandos
      </h3>
      
      <div className={`search-container p-1 rounded-lg ${isFocused ? 'bg-[#FFD700] shadow-md' : 'bg-[#8B4513]'} transition-all duration-300`}>
        <div className="relative">
          <div className="absolute left-3 top-2.5 text-[#8B4513]">
            <i className="fas fa-search"></i>
          </div>
          
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="search-input w-full py-2.5 pl-10 pr-3 font-minecraft text-[#5E2F0D] bg-[#F5DEB3] border-none rounded-md focus:ring-2 focus:ring-[#CD853F]" 
            placeholder="Escribe el nombre del comando..."
          />
          
          {searchTerm && (
            <button 
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-2.5 text-[#8B4513] hover:text-[#5E2F0D] transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>
      
      <div className="flex items-center mt-3 mb-2">
        <div className="h-px bg-[#8B4513] flex-grow opacity-30"></div>
        <div className="bone-float mx-2 text-[#F5DEB3] opacity-70">🦴</div>
        <div className="h-px bg-[#8B4513] flex-grow opacity-30"></div>
      </div>
    </div>
  );
}
