import { z } from "zod";

// Define ranks enum
export const RankEnum = z.enum(["usuario", "helper", "moderador", "admin"]);
export type Rank = z.infer<typeof RankEnum>;

// Define categories enum
export const CategoryEnum = z.enum(["teleport", "economy", "protection", "chat"]);
export type Category = z.infer<typeof CategoryEnum>;

// Command schema with zod validations
export const commandSchema = z.object({
  id: z.number(),
  name: z.string(),
  syntax: z.string(),
  description: z.string(),
  category: CategoryEnum,
  rank: RankEnum,
});

// Definición simplificada para el tipo Command
export type Command = {
  id: number;
  name: string;
  syntax: string;
  description: string;
  category: string;
  rank: string;
};
