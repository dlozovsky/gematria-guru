
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface NumberCardProps {
  value: number;
  method: string;
  explanation: string;
}

// Helper function to provide number interpretations
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
  
  // Return meaning if it exists directly
  if (meanings[num]) return meanings[num];
  
  // Check if it's a perfect square
  const sqrt = Math.sqrt(num);
  if (sqrt === Math.floor(sqrt)) {
    return `Perfect square (${sqrt}²), representing completion and manifestation of ${sqrt}.`;
  }
  
  // Check for factors of spiritual significance
  const factors = [];
  for (let i = 2; i <= Math.floor(num/2); i++) {
    if (num % i === 0) factors.push(i);
  }
  
  const significantFactors = factors.filter(f => meanings[f]);
  if (significantFactors.length > 0) {
    return `Contains factors with spiritual significance: ${significantFactors.join(', ')}. ` +
           `This suggests a combination of these energies.`;
  }
  
  // Check for reduction
  const reduced = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  if (reduced < 10 && meanings[reduced]) {
    return `Reduces to ${reduced} (${meanings[reduced]}), suggesting this as its core energy.`;
  }
  
  // Default response for numbers without specific meanings
  return "This number's specific meaning may be personal to you or found through further research.";
};

const NumberCard = ({ value, method, explanation }: NumberCardProps) => {
  const meaning = getNumberMeaning(value);
  
  return (
    <motion.div 
      className="glass-card rounded-xl p-5 flex flex-col items-center justify-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <motion.span 
        className="text-2xl md:text-3xl font-bold text-primary"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {value}
      </motion.span>
      <h3 className="text-sm font-medium text-foreground">{method}</h3>
      <p className="text-xs text-muted-foreground text-center">{explanation}</p>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="mt-2 text-xs gap-1">
            <Info size={12} />
            Meaning
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Meaning of {value} in Gematria</DialogTitle>
            <DialogDescription>
              <div className="mt-2 space-y-4">
                <p>{meaning}</p>
                
                {/* Factor breakdown */}
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
                
                {/* Digital reduction */}
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
    </motion.div>
  );
};

export default NumberCard;
