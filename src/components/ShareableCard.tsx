
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { checkSignificance } from "@/utils/significantNumbers";
import { type GematriaResult } from "@/utils/gematriaCalculators";

interface ShareableCardProps {
  inputText: string;
  results: GematriaResult[];
}

const ShareableCard = ({ inputText, results }: ShareableCardProps) => {
  if (!results.length) return null;
  
  // Find the most "important" result (highest value or significant number)
  const significantResult = results.find(result => 
    checkSignificance(result.value)?.significance === 'profound' || 
    checkSignificance(result.value)?.significance === 'major'
  ) || results[0];
  
  const significance = checkSignificance(significantResult.value);
  
  return (
    <Card className="overflow-hidden border-2 border-primary/20 max-w-md mx-auto bg-gradient-to-br from-white to-primary/5">
      <CardHeader className="bg-primary/10 pb-2">
        <CardTitle className="text-center font-serif">
          <span className="text-lg text-primary/80">Gematria of</span>
          <div className="text-2xl font-bold mt-1 text-foreground">{inputText}</div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6 flex flex-col items-center">
        <motion.div 
          className="text-6xl font-bold text-primary mb-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          {significantResult.value}
        </motion.div>
        
        <div className="text-sm text-center text-muted-foreground mb-4">
          {significantResult.method} • {significantResult.explanation}
        </div>
        
        {significance && (
          <Badge variant="outline" className="bg-primary/5 text-primary text-xs px-3 py-1">
            {significance.tradition}: {significance.description}
          </Badge>
        )}
        
        <div className="grid grid-cols-2 gap-4 mt-6 w-full">
          {results.filter(r => r.method !== significantResult.method).slice(0, 4).map(result => (
            <div key={result.method} className="text-center">
              <div className="text-lg font-semibold">{result.value}</div>
              <div className="text-xs text-muted-foreground">{result.method}</div>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-center pt-0 pb-4">
        <div className="text-xs text-center text-muted-foreground">
          Generated with Gematria Calculator • lovable.app
        </div>
      </CardFooter>
    </Card>
  );
};

export default ShareableCard;
