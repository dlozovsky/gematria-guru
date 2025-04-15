
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Info, BookOpen, Calculator } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NumberMeaningProps {
  number: number;
}

const NumberMeaning = ({ number }: NumberMeaningProps) => {
  // Common significant numbers and their meanings
  const commonNumbers: Record<number, { meaning: string; tradition: string }[]> = {
    1: [
      { meaning: "Unity, divine oneness", tradition: "Universal" },
      { meaning: "The first cause, beginnings", tradition: "Kabbalah" }
    ],
    3: [
      { meaning: "Divine perfection, trinity", tradition: "Christian" },
      { meaning: "Balance and harmony", tradition: "Universal" }
    ],
    4: [
      { meaning: "Completeness of creation", tradition: "Jewish" },
      { meaning: "Solidity, foundation", tradition: "Universal" }
    ],
    5: [
      { meaning: "Grace, God's goodness", tradition: "Biblical" },
      { meaning: "Human being (5 senses, 5 fingers)", tradition: "Universal" }
    ],
    6: [
      { meaning: "Human imperfection, workdays", tradition: "Biblical" },
      { meaning: "Balance and harmony", tradition: "Pythagorean" }
    ],
    7: [
      { meaning: "Divine completion, perfection", tradition: "Biblical" },
      { meaning: "Mystical, spiritual significance", tradition: "Universal" }
    ],
    8: [
      { meaning: "New beginnings, resurrection", tradition: "Christian" },
      { meaning: "Infinity, cosmic balance", tradition: "Universal" }
    ],
    9: [
      { meaning: "Divine completeness from the Father", tradition: "Biblical" },
      { meaning: "Completeness, fulfillment", tradition: "Pythagorean" }
    ],
    10: [
      { meaning: "Perfect divine order", tradition: "Biblical" },
      { meaning: "Completion of a cycle", tradition: "Universal" }
    ],
    11: [
      { meaning: "Disorder, judgment", tradition: "Biblical" },
      { meaning: "Spiritual insight, intuition", tradition: "Esoteric" }
    ],
    12: [
      { meaning: "Governmental perfection", tradition: "Biblical" },
      { meaning: "Cosmic order (12 months, zodiac signs)", tradition: "Universal" }
    ],
    13: [
      { meaning: "Rebellion, apostasy", tradition: "Biblical" },
      { meaning: "Transformation, renewal", tradition: "Esoteric" }
    ],
    18: [
      { meaning: "Life (חי/chai)", tradition: "Jewish" },
      { meaning: "Long life, prosperity", tradition: "Kabbalah" }
    ],
    22: [
      { meaning: "Light, Hebrew alphabet letters", tradition: "Kabbalah" },
      { meaning: "Master builder number", tradition: "Esoteric" }
    ],
    26: [
      { meaning: "YHWH (יהוה), the divine name", tradition: "Jewish" },
      { meaning: "Compassion, divine love", tradition: "Kabbalah" }
    ],
    36: [
      { meaning: "Double life (2×18)", tradition: "Jewish" },
      { meaning: "The 36 righteous ones (Lamedvavniks)", tradition: "Jewish" }
    ],
    72: [
      { meaning: "The 72 names of God", tradition: "Kabbalah" },
      { meaning: "Divine connection, mystical power", tradition: "Esoteric" }
    ]
  };

  // Get mathematical properties of the number
  const getNumberProperties = (num: number) => {
    const properties = [];
    
    // Check if prime
    const isPrime = (n: number) => {
      if (n <= 1) return false;
      if (n <= 3) return true;
      if (n % 2 === 0 || n % 3 === 0) return false;
      for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
      }
      return true;
    };
    
    if (isPrime(num)) properties.push("Prime number");
    
    // Check if perfect square
    const sqrt = Math.sqrt(num);
    if (sqrt === Math.floor(sqrt)) properties.push(`Perfect square (${sqrt}²)`);
    
    // Check if triangular number
    const triangularTest = Math.sqrt(8 * num + 1);
    if (triangularTest === Math.floor(triangularTest)) properties.push("Triangular number");
    
    // Check if Fibonacci number
    const isSquare = (n: number) => {
      const s = Math.sqrt(n);
      return s === Math.floor(s);
    };
    if (isSquare(5 * num * num + 4) || isSquare(5 * num * num - 4)) properties.push("Fibonacci number");
    
    return properties;
  };

  // Get factors of the number
  const getFactors = (num: number) => {
    const factors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        factors.push(i);
        if (i !== num / i) factors.push(num / i);
      }
    }
    return factors.sort((a, b) => a - b);
  };

  // Get digit sum (reduction to single digit)
  const getDigitSum = (num: number): number => {
    const sum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum > 9 ? getDigitSum(sum) : sum;
  };

  // Prepare data
  const meanings = commonNumbers[number] || [];
  const reducedNumber = getDigitSum(number);
  const reducedMeanings = number !== reducedNumber ? commonNumbers[reducedNumber] || [] : [];
  const properties = getNumberProperties(number);
  const factors = getFactors(number);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-2"
    >
      <Card className="border border-muted">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Calculator size={16} className="text-primary" />
            Number {number} Analysis
          </CardTitle>
          <CardDescription className="text-xs">
            Understanding the significance and properties
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0 text-xs">
          {/* Primary meanings if this is a common number */}
          {meanings.length > 0 && (
            <div className="mb-3">
              <h4 className="font-medium text-xs mb-1">Traditional Meanings:</h4>
              <ul className="space-y-1">
                {meanings.map((item, index) => (
                  <li key={index} className="flex items-start gap-1.5">
                    <Badge variant="outline" className="h-5 text-[10px]">{item.tradition}</Badge>
                    <span>{item.meaning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Digit sum and its meaning */}
          {reducedNumber !== number && (
            <div className="mb-3">
              <h4 className="font-medium text-xs mb-1">Reduces to {reducedNumber}:</h4>
              {reducedMeanings.length > 0 ? (
                <ul className="space-y-1">
                  {reducedMeanings.map((item, index) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <Badge variant="outline" className="h-5 text-[10px]">{item.tradition}</Badge>
                      <span>{item.meaning}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">Consider the symbolic meaning of {reducedNumber}.</p>
              )}
            </div>
          )}
          
          {/* Mathematical properties */}
          {properties.length > 0 && (
            <div className="mb-3">
              <h4 className="font-medium text-xs mb-1">Mathematical Properties:</h4>
              <div className="flex flex-wrap gap-1">
                {properties.map((property, index) => (
                  <Badge key={index} variant="secondary" className="text-[10px]">{property}</Badge>
                ))}
              </div>
            </div>
          )}
          
          {/* Factors */}
          <div className="mb-1">
            <h4 className="font-medium text-xs mb-1">Factors:</h4>
            <div className="flex flex-wrap gap-1">
              {factors.map(factor => (
                <Badge key={factor} variant="outline" className="text-[10px]">
                  {factor}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* If this isn't a common number, show general interpretation guidance */}
          {meanings.length === 0 && reducedMeanings.length === 0 && (
            <p className="text-muted-foreground mt-3 italic">
              While {number} isn't traditionally recognized as a significant number, 
              its unique properties above may reveal personal meanings or connections.
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NumberMeaning;
