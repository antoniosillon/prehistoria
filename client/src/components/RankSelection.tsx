import { Rank } from "@/types";

interface RankSelectionProps {
  selectedRank: Rank;
  onRankChange: (rank: Rank) => void;
}

export function RankSelection({ selectedRank, onRankChange }: RankSelectionProps) {
  const ranks: { id: Rank; label: string; icon: string }[] = [
    { id: "usuario", label: "Usuario", icon: "fa-user" },
    { id: "helper", label: "Helper", icon: "fa-hands-helping" },
    { id: "moderador", label: "Moderador", icon: "fa-shield-alt" },
    { id: "admin", label: "Administrador", icon: "fa-crown" }
  ];

  return (
    <div className="space-y-2" id="rank-buttons">
      {ranks.map((rank) => (
        <button
          key={rank.id}
          className={`minecraft-btn w-full text-left font-minecraft ${
            selectedRank === rank.id ? "active bg-minecraft-green" : "bg-[#545454]"
          }`}
          onClick={() => onRankChange(rank.id)}
        >
          <i className={`fas ${rank.icon} mr-2`}></i> {rank.label}
        </button>
      ))}
    </div>
  );
}
