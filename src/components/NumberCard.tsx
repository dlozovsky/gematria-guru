import { motion } from "framer-motion";
import { Info, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { checkSignificance, getAnimationClass } from "@/utils/significantNumbers";
import { getSystemTradition, resolveSystemTraditionConflict } from "@/utils/systemIcons";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface NumberCardProps {
  value: number;
  reducedValue: number;
  reductionSteps: string;
  method: string;
  letterBreakdown: { char: string; value: number }[];
}

const NumberCard = ({
  value,
  reducedValue,
  reductionSteps,
  method,
  letterBreakdown,
}: NumberCardProps) => {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const significance = checkSignificance(value);

  const displayTradition = significance
    ? resolveSystemTraditionConflict(method, significance.tradition)
    : getSystemTradition(method);

  const animationClass = significance ? getAnimationClass(significance.significance) : "";

  return (
    <motion.div
      className={`glass-card rounded-xl p-3 sm:p-5 flex flex-col items-start gap-2 relative overflow-hidden ${animationClass}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      style={{
        background:
          significance?.significance === "profound"
            ? "linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,215,0,0.1), rgba(255,255,255,0.9))"
            : undefined,
      }}
    >
      {significance && (
        <motion.div
          className="absolute right-2 top-2 flex items-center gap-1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        >
          <Award
            className={`${
              significance.significance === "profound"
                ? "text-yellow-500 h-5 w-5"
                : significance.significance === "major"
                ? "text-amber-400 h-4 w-4"
                : "text-muted-foreground h-3.5 w-3.5"
            }`}
          />
          <span
            className={`text-xs font-medium ${
              significance.significance === "profound"
                ? "text-yellow-500"
                : significance.significance === "major"
                ? "text-amber-400"
                : "text-muted-foreground"
            }`}
          >
            {displayTradition}
          </span>
        </motion.div>
      )}

      <h3 className="text-sm font-semibold text-foreground">{method}</h3>

      <div className="flex items-center gap-2">
        <motion.span
          className="text-2xl sm:text-3xl font-bold text-primary"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {value}
        </motion.span>
        <span className="text-gray-400">→</span>
        <span className="text-lg font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
          {reducedValue}
        </span>
      </div>

      <p className="text-xs text-gray-500 font-mono break-all leading-relaxed">
        {reductionSteps}
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="mt-1 text-xs gap-1 self-start transition duration-150 hover:bg-primary/10 hover:text-primary active:scale-95 focus:ring-2 focus:ring-primary"
          >
            <Info size={12} />
            Details
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {method}: {value}
              {significance && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    significance.significance === "profound"
                      ? "bg-primary/20 text-primary"
                      : significance.significance === "major"
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {significance.tradition}
                </span>
              )}
            </DialogTitle>
            <DialogDescription asChild>
              <div className="mt-2 space-y-4 text-sm">
                {significance && (
                  <div className="p-3 bg-muted/40 rounded-lg border border-muted">
                    <p className="font-medium">{significance.description}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold mb-1">Reduction Steps</h4>
                  <p className="font-mono text-gray-700">{reductionSteps}</p>
                  <p className="mt-1 text-gray-600">
                    Total: {value} → Final reduced: {reducedValue}
                  </p>
                </div>

                {letterBreakdown.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-1">Letter Breakdown</h4>
                    <div className="flex flex-wrap gap-1 font-mono text-xs bg-gray-50 rounded p-2 border border-gray-200">
                      {letterBreakdown.map((item, i) => (
                        <span key={i} className="inline-flex items-center gap-0.5">
                          <span className="font-bold">{item.char}</span>
                          <span className="text-gray-400">=</span>
                          <span>{item.value}</span>
                          {i < letterBreakdown.length - 1 && (
                            <span className="text-gray-400 ml-0.5">+</span>
                          )}
                        </span>
                      ))}
                      <span className="text-gray-500 ml-1">= {value}</span>
                    </div>
                  </div>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {significance?.significance === "profound" && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0, 0.2, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
        >
          <div className="absolute inset-0 bg-yellow-300/10 rounded-xl" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default NumberCard;
