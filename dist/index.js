// server/index.ts
import express3 from "express";

// server/routes.ts
import express from "express";
import { createServer } from "http";

// server/data/commands.ts
var initialCommands = [
  // Teleport Commands
  {
    id: 1,
    name: "spawn",
    syntax: "/spawn",
    description: "Te teletransporta al punto de aparici\xF3n del servidor.",
    category: "teleport",
    rank: "usuario"
  },
  {
    id: 2,
    name: "rtp",
    syntax: "/rtp",
    description: "Te teletransporta a una ubicaci\xF3n aleatoria en el mapa.",
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
    description: "Establece un punto de home en tu ubicaci\xF3n actual.",
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
    description: "Retira dinero de tu cuenta en forma de efectivo f\xEDsico.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 11,
    name: "shop",
    syntax: "/shop",
    description: "Abre el men\xFA de la tienda del servidor para comprar y vender \xEDtems.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 12,
    name: "pay",
    syntax: "/pay [jugador] [cantidad]",
    description: "Env\xEDa dinero a otro jugador.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 13,
    name: "jobs",
    syntax: "/jobs",
    description: "Muestra el men\xFA del plugin PicoJobs para elegir y gestionar tus trabajos.",
    category: "economy",
    rank: "usuario"
  },
  {
    id: 14,
    name: "eco",
    syntax: "/eco give/take/set [jugador] [cantidad]",
    description: "Administra la econom\xEDa del servidor. Solo disponible para administradores.",
    category: "economy",
    rank: "admin"
  },
  {
    id: 15,
    name: "kit",
    syntax: "/kit [nombre]",
    description: "Obtiene un kit de \xEDtems. Por ahora solo est\xE1 disponible el kit inicial.",
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
    description: "Env\xEDa un mensaje al chat exclusivo del staff.",
    category: "chat",
    rank: "helper"
  },
  {
    id: 19,
    name: "kick",
    syntax: "/kick [jugador] [raz\xF3n]",
    description: "Expulsa a un jugador del servidor.",
    category: "protection",
    rank: "helper"
  },
  {
    id: 20,
    name: "mute",
    syntax: "/mute [jugador] [tiempo] [raz\xF3n]",
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
    syntax: "/ban [jugador] [tiempo] [raz\xF3n]",
    description: "Bloquea a un jugador del servidor.",
    category: "protection",
    rank: "moderador"
  },
  {
    id: 23,
    name: "tempban",
    syntax: "/tempban [jugador] [tiempo] [raz\xF3n]",
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
    description: "Env\xEDa un mensaje privado a otro jugador.",
    category: "chat",
    rank: "usuario"
  },
  {
    id: 26,
    name: "r",
    syntax: "/r [mensaje]",
    description: "Responde r\xE1pidamente al \xFAltimo mensaje privado recibido.",
    category: "chat",
    rank: "usuario"
  },
  {
    id: 27,
    name: "ignore",
    syntax: "/ignore [jugador]",
    description: "Ignora los mensajes de un jugador espec\xEDfico.",
    category: "chat",
    rank: "usuario"
  },
  {
    id: 28,
    name: "broadcast",
    syntax: "/broadcast [mensaje]",
    description: "Env\xEDa un mensaje a todo el servidor con formato especial.",
    category: "chat",
    rank: "admin"
  }
];

// server/storage.ts
var MemStorage = class {
  users;
  commands;
  userCurrentId;
  commandCurrentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.commands = /* @__PURE__ */ new Map();
    this.userCurrentId = 1;
    this.commandCurrentId = initialCommands.length + 1;
    initialCommands.forEach((command) => {
      this.commands.set(command.id, command);
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userCurrentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getAllCommands() {
    return Array.from(this.commands.values());
  }
  async getCommandById(id) {
    return this.commands.get(id);
  }
  async getCommandsByRank(rank) {
    return Array.from(this.commands.values()).filter(
      (command) => command.rank === rank
    );
  }
  async getCommandsByCategory(category) {
    return Array.from(this.commands.values()).filter(
      (command) => command.category === category
    );
  }
  async createCommand(insertCommand) {
    const id = this.commandCurrentId++;
    const command = { ...insertCommand, id };
    this.commands.set(id, command);
    return command;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var RankEnum = z.enum(["usuario", "helper", "moderador", "admin"]);
var CategoryEnum = z.enum(["teleport", "economy", "protection", "chat"]);
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var commands = pgTable("commands", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  syntax: text("syntax").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  rank: text("rank").notNull()
});
var insertCommandSchema = createInsertSchema(commands).pick({
  name: true,
  syntax: true,
  description: true,
  category: true,
  rank: true
});
var commandSchema = z.object({
  id: z.number(),
  name: z.string(),
  syntax: z.string(),
  description: z.string(),
  category: CategoryEnum,
  rank: RankEnum
});

// server/routes.ts
async function registerRoutes(app2) {
  const apiRouter = express.Router();
  apiRouter.get("/commands", async (req, res) => {
    try {
      const commands2 = await storage.getAllCommands();
      res.json(commands2);
    } catch (error) {
      res.status(500).json({ message: "Error fetching commands" });
    }
  });
  apiRouter.get("/commands/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid command ID" });
      }
      const command = await storage.getCommandById(id);
      if (!command) {
        return res.status(404).json({ message: "Command not found" });
      }
      res.json(command);
    } catch (error) {
      res.status(500).json({ message: "Error fetching command" });
    }
  });
  apiRouter.get("/commands/rank/:rank", async (req, res) => {
    try {
      const rank = req.params.rank;
      const commands2 = await storage.getCommandsByRank(rank);
      res.json(commands2);
    } catch (error) {
      res.status(500).json({ message: "Error fetching commands by rank" });
    }
  });
  apiRouter.get("/commands/category/:category", async (req, res) => {
    try {
      const category = req.params.category;
      const commands2 = await storage.getCommandsByCategory(category);
      res.json(commands2);
    } catch (error) {
      res.status(500).json({ message: "Error fetching commands by category" });
    }
  });
  apiRouter.post("/commands", async (req, res) => {
    try {
      const result = commandSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          message: "Invalid command data",
          errors: result.error.format()
        });
      }
      const command = await storage.createCommand(req.body);
      res.status(201).json(command);
    } catch (error) {
      res.status(500).json({ message: "Error creating command" });
    }
  });
  app2.use("/api", apiRouter);
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express2 from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express2.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express3();
app.use(express3.json());
app.use(express3.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
