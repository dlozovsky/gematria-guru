
import { motion } from "framer-motion";
import { Info, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormattedSummary from "./FormattedSummary";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { checkSignificance, getAnimationClass } from "@/utils/significantNumbers";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";


interface NumberCardProps {
  value: number;
  method: string;
  explanation: string;
}

const getNumberMeaning = (num: number): string => {
  const meanings: {[key: number]: string} = {
    1: "Unity, beginnings, leadership, independence",
    2: "Duality, balance, partnership, cooperation",
    3: "Trinity, creativity, expression, growth",
    4: "Stability, foundation, order, practicality",
    5: "Change, freedom, adventure, versatility",
    6: "Harmony, responsibility, love, healing",
    7: "Spiritual perfection, wisdom, mystery",
    8: "Abundance, power, success, regeneration",
    9: "Completion, humanitarianism, wisdom",
    10: "Divine order, completion of a cycle",
    11: "Spiritual illumination, intuition, revelation",
    12: "Cosmic order, governance, completion",
    13: "Transformation (often viewed negatively in Western tradition, positively in Jewish tradition)",
    17: "Victory, overcoming obstacles",
    18: "Life (חי 'chai' in Hebrew)",
    22: "Master builder, practical idealism",
    23: "Uniqueness, new beginning",
    24: "Harmony and efficiency, represents time (24 hours)",
    26: "The Divine name (יהוה YHVH in Hebrew)",
    36: "Double life (2 × 18), represents tzadikim (righteous ones)",
    72: "The 72 names of God in Kabbalistic tradition",
  };
  
  if (meanings[num]) return meanings[num];
  
  const sqrt = Math.sqrt(num);
  if (sqrt === Math.floor(sqrt)) {
    return `Perfect square (${sqrt}²), representing completion and manifestation of ${sqrt}.`;
  }
  
  const factors = [];
  for (let i = 2; i <= Math.floor(num/2); i++) {
    if (num % i === 0) factors.push(i);
  }
  
  const significantFactors = factors.filter(f => meanings[f]);
  if (significantFactors.length > 0) {
    return `Contains factors with spiritual significance: ${significantFactors.join(', ')}. ` +
           `This suggests a combination of these energies.`;
  }
  
  const reduced = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  if (reduced < 10 && meanings[reduced]) {
    return `Reduces to ${reduced} (${meanings[reduced]}), suggesting this as its core energy.`;
  }
  
  return "This number's specific meaning may be personal to you or found through further research.";
};

const NumberCard = ({ value, method, explanation }: NumberCardProps) => {
  const meaning = getNumberMeaning(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const significance = checkSignificance(value);
  const animationClass = significance ? getAnimationClass(significance.significance) : "";
  
  return (
    <motion.div 
      className={`glass-card rounded-xl p-3 sm:p-5 flex flex-col items-center justify-center gap-2 relative overflow-hidden ${animationClass}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      style={{
        background: significance?.significance === 'profound' ? 
          'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,215,0,0.1), rgba(255,255,255,0.9))' : 
          undefined,
        backgroundSize: '200% 100%',
      }}
    >
      {significance && (
        <motion.div 
          className="absolute right-2 top-2 flex items-center gap-1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5 
          }}
        >
          <Award 
            className={`${
              significance.significance === 'profound' ? 'text-yellow-500 h-5 w-5' :
              significance.significance === 'major' ? 'text-amber-400 h-4 w-4' : 
              'text-muted-foreground h-3.5 w-3.5'
            }`}
          />
          <span className={`text-xs font-medium ${
            significance.significance === 'profound' ? 'text-yellow-500' :
            significance.significance === 'major' ? 'text-amber-400' :
            'text-muted-foreground'
          }`}>
            {significance.tradition}
          </span>
        </motion.div>
      )}
      
      <motion.span 
        className={`text-xl sm:text-2xl md:text-3xl font-bold ${significance?.significance === 'profound' ? 'text-primary' : 'text-primary'}`}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {value}
      </motion.span>
      <h3 className="text-sm font-medium text-foreground flex items-center gap-1">
        {method}
      </h3>
      <FormattedSummary summary={explanation} />
      
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="mt-2 text-xs gap-1 transition duration-150 hover:bg-primary/10 hover:text-primary active:scale-95 focus:ring-2 focus:ring-primary">
            <Info size={12} />
            Meaning
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              Meaning of {value} in Gematria
              {significance && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  significance.significance === 'profound' ? 'bg-primary/20 text-primary' :
                  significance.significance === 'major' ? 'bg-primary/10 text-primary' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {significance.tradition}
                </span>
              )}
            </DialogTitle>
            <DialogDescription>
              <div className="mt-2 space-y-4">
                {significance && (
                  <div className="p-3 bg-muted/40 rounded-lg border border-muted">
                    <p className="font-medium text-sm">{significance.description}</p>
                  </div>
                )}
                
                <p>{meaning}</p>
                
                <div>
                  <h4 className="text-sm font-medium">Factor Breakdown:</h4>
                  <ul className="text-sm mt-1">
                    {Array.from({length: Math.floor(value/2)}, (_, i) => i + 1)
                      .filter(n => value % n === 0)
                      .map(factor => (
                        <li key={factor}>{factor} × {value/factor} = {value}</li>
                      ))
                    }
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium">Digital Reduction:</h4>
                  <p className="text-sm">
                    {value} → {value.toString().split('').join(' + ')} = {value.toString().split('').reduce((a, b) => a + parseInt(b), 0)}
                  </p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {significance?.significance === 'profound' && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.2, 0, 0.2, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="absolute inset-0 bg-yellow-300/10 rounded-xl" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default NumberCard;
