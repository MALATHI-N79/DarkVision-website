import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple API endpoints
  app.get('/api/stats', (req, res) => {
    res.json({
      users: 102350,
      rating: 4.9,
      reviews: 10283
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
