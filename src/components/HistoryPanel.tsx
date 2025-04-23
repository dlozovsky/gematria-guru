import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface HistoryEntry {
  input: string;
  timestamp: number;
}

const LOCAL_STORAGE_KEY = "gematria_history";

export default function HistoryPanel({ onSelect }: { onSelect?: (input: string) => void }) {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const handleSelect = (input: string) => {
    if (onSelect) onSelect(input);
  };

  if (!history.length) return null;

  return (
    <motion.aside
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed right-2 top-20 z-30 w-64 bg-background/90 shadow-lg rounded-xl border p-4 flex flex-col gap-2"
    >
      <div className="flex items-center gap-2 mb-2">
        <Clock className="h-5 w-5 text-primary" />
        <span className="font-semibold text-sm">Your Previous Entries</span>
      </div>
      <ul className="space-y-1 max-h-64 overflow-y-auto">
        {history.slice(0, 12).map((entry, idx) => (
          <li key={entry.timestamp + entry.input}>
            <button
              className="text-xs w-full text-left px-2 py-1 rounded hover:bg-primary/10 transition-colors truncate"
              onClick={() => handleSelect(entry.input)}
              title={entry.input}
            >
              {entry.input}
            </button>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}

// Utility to add to history (to be called from input/result components)
export function addToHistory(input: string) {
  let history: HistoryEntry[] = [];
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved) {
    history = JSON.parse(saved);
  }
  // Remove duplicates, keep recent
  history = history.filter((e) => e.input !== input);
  history.unshift({ input, timestamp: Date.now() });
  if (history.length > 24) history = history.slice(0, 24);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(history));
}
