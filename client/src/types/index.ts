import { type Command, type Rank, type Category } from "@shared/schema";

export interface RankAccessMap {
  [key: string]: Rank[];
}

export interface CommandsState {
  selectedRank: Rank;
  searchTerm: string;
  visibleCommands: Command[];
  commands: Command[];
  isLoading: boolean;
}

export type { Command, Rank, Category };
