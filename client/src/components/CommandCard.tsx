import { Command } from "@/types";

interface CommandCardProps {
  command: Command;
}

export function CommandCard({ command }: CommandCardProps) {
  return (
    <div className="command-card p-4 rounded-md mb-4">
      <h4 className="font-minecraft text-[#5E2F0D] text-lg mb-2 flex items-center">
        <span className="mr-2 text-[#8B4513]">⚒️</span>/{command.name}
      </h4>
      <div className="command-syntax px-3 py-2 text-[#F5DEB3] mb-2 font-mono bg-[#5E2F0D] rounded-sm border-l-4 border-[#A0522D]">
        {command.syntax}
      </div>
      <p className="text-[#5E2F0D] font-medium">{command.description}</p>
    </div>
  );
}
