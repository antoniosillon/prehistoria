import { Command } from "../types";

export const commands: Command[] = [
  // Teleport Commands
  {
    id: 1,
    name: "spawn",
    syntax: "/spawn",
    description: "Te teletransporta al punto de aparición del servidor.",
    category: "teleport",
    rank: "usuario"
  },
  {
    id: 2,
    name: "rtp",
    syntax: "/rtp",
    description: "Te teletransporta a una ubicación aleatoria en el mapa.",
    category: "teleport",
    rank: "usuario"
  },
  {
    id: 3,
    name: "home",
    syntax: "/home [nombre]",
    description: "Te teletransporta a tu hogar establecido.",
    category: "teleport",
    rank: "usuario"
  },
  {
    id: 4,
    name: "sethome",
    syntax: "/sethome [nombre]",
    description: "Establece un punto de home en tu ubicación actual.",
    category: "teleport",
    rank: "usuario"
  },
  {
    id: 5,
    name: "delhome",
    syntax: "/delhome [nombre]",
    description: "Elimina uno de tus puntos de home establecidos.",
    category: "teleport",
    rank: "usuario"
  },
  {
    id: 6,
    name: "tpo",
    syntax: "/tpo [jugador]",
    description: "Teletransportarse a otro jugador (disponible solo para helpers).",
    category: "teleport",
    rank: "helper"
  },
  {
    id: 7,
    name: "tp",
    syntax: "/tp [jugador]",
    description: "Teletransportarse directamente a otro jugador (reemplaza tpo para moderadores).",
    category: "teleport",
    rank: "moderador"
  },
  {
    id: 8,
    name: "warp",
    syntax: "/warp [nombre]",
    description: "Te teletransporta a un punto warp del servidor, como 'meteorito' o 'misiones'.",
    category: "teleport",
    rank: "usuario"
  },
  
  // Economy Commands
  {
    id: 9,
    name: "balance",
    syntax: "/balance",
    description: "Muestra la cantidad de dinero que tienes en el servidor.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 10,
    name: "withdraw",
    syntax: "/withdraw [cantidad]",
    description: "Retira dinero de tu cuenta en forma de efectivo físico.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 11,
    name: "shop",
    syntax: "/shop",
    description: "Abre el menú de la tienda del servidor para comprar y vender ítems.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 12,
    name: "pay",
    syntax: "/pay [jugador] [cantidad]",
    description: "Envía dinero a otro jugador.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 13,
    name: "jobs",
    syntax: "/jobs",
    description: "Muestra el menú del plugin PicoJobs para elegir y gestionar tus trabajos.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 14,
    name: "eco",
    syntax: "/eco give/take/set [jugador] [cantidad]",
    description: "Administra la economía del servidor. Solo disponible para administradores.",
    category: "economy",
    rank: "admin"
  },
  {
    id: 15,
    name: "kit",
    syntax: "/kit [nombre]",
    description: "Obtiene un kit de ítems. Por ahora solo está disponible el kit inicial.",
    category: "economy",
    rank: "usuario"
  },
  
  // Admin/Moderación Commands
  {
    id: 16,
    name: "gamemode-limited",
    syntax: "/gamemode spectator/survival",
    description: "Cambia tu modo de juego. Helper solo puede usar supervivencia y espectador.",
    category: "protection",
    rank: "helper"
  },
  {
    id: 17,
    name: "gamemode",
    syntax: "/gamemode <modo>",
    description: "Cambia tu modo de juego a cualquier modo (creative, survival, spectator, adventure).",
    category: "protection",
    rank: "moderador"
  },
  {
    id: 18,
    name: "staffchat",
    syntax: "/staffchat <mensaje>",
    description: "Envía un mensaje al chat exclusivo del staff.",
    category: "chat",
    rank: "helper"
  },
  {
    id: 19,
    name: "kick",
    syntax: "/kick [jugador] [razón]",
    description: "Expulsa a un jugador del servidor.",
    category: "protection",
    rank: "helper"
  },
  {
    id: 20,
    name: "mute",
    syntax: "/mute [jugador] [tiempo] [razón]",
    description: "Silencia a un jugador por un tiempo determinado.",
    category: "chat",
    rank: "helper"
  },
  {
    id: 21,
    name: "vanish",
    syntax: "/vanish",
    description: "Te hace invisible para otros jugadores. Solo moderadores y administradores.",
    category: "protection",
    rank: "moderador"
  },
  {
    id: 22,
    name: "ban",
    syntax: "/ban [jugador] [tiempo] [razón]",
    description: "Bloquea a un jugador del servidor.",
    category: "protection",
    rank: "moderador"
  },
  {
    id: 23,
    name: "tempban",
    syntax: "/tempban [jugador] [tiempo] [razón]",
    description: "Bloquea temporalmente a un jugador del servidor.",
    category: "protection",
    rank: "moderador"
  },
  {
    id: 24,
    name: "unban",
    syntax: "/unban [jugador]",
    description: "Desbloquea a un jugador previamente baneado.",
    category: "protection",
    rank: "moderador"
  },
  
  // Chat Commands
  {
    id: 25,
    name: "msg",
    syntax: "/msg [jugador] [mensaje]",
    description: "Envía un mensaje privado a otro jugador.",
    category: "chat",
    rank: "usuario"
  },
  {
    id: 26,
    name: "r",
    syntax: "/r [mensaje]",
    description: "Responde rápidamente al último mensaje privado recibido.",
    category: "chat",
    rank: "usuario"
  },
  {
    id: 27,
    name: "ignore",
    syntax: "/ignore [jugador]",
    description: "Ignora los mensajes de un jugador específico.",
    category: "chat",
    rank: "usuario"
  },
  {
    id: 28,
    name: "broadcast",
    syntax: "/broadcast [mensaje]",
    description: "Envía un mensaje a todo el servidor con formato especial.",
    category: "chat",
    rank: "admin"
  }
];