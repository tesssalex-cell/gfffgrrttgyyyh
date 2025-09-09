import React from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Send, Sparkles, Image as ImageIcon, Laugh, Info } from "lucide-react";

// Helper: floating coin component
const FloatingCoin = ({ delay = 0, size = 48, x = 0, y = 0 }) => (
  <motion.div
    className="pointer-events-none absolute"
    style={{ left: x, top: y }}
    initial={{ y: 0, rotate: 0, opacity: 0.6 }}
    animate={{ y: [0, -20, 0], rotate: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
    transition={{ repeat: Infinity, duration: 6, delay, ease: "easeInOut" }}
  >
    <div
      className="rounded-full shadow-2xl backdrop-blur-md"
      style={{
        width: size,
        height: size,
        background:
          "conic-gradient(from 0deg, #ffd700, #ffa200, #ffe066, #ffd700)",
        boxShadow:
          "0 0 20px rgba(255,215,0,0.8), inset 0 0 10px rgba(255,255,255,0.6)",
      }}
    />
  </motion.div>
);

// ... (rest of component code from textdoc)
