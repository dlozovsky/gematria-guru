
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
    2: [
      { meaning: "Duality, partnership, balance", tradition: "Universal" },
      { meaning: "Division, contrast", tradition: "Biblical" }
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
    14: [
      { meaning: "Deliverance, salvation", tradition: "Biblical" },
      { meaning: "Movement, change", tradition: "Universal" }
    ],
    15: [
      { meaning: "Rest, mercy", tradition: "Biblical" },
      { meaning: "Spiritual ascension", tradition: "Kabbalah" }
    ],
    17: [
      { meaning: "Victory, overcoming the enemy", tradition: "Biblical" },
      { meaning: "Spiritual transformation", tradition: "Universal" }
    ],
    18: [
      { meaning: "Life (חי/chai)", tradition: "Jewish" },
      { meaning: "Long life, prosperity", tradition: "Kabbalah" }
    ],
    19: [
      { meaning: "Faith, hearing", tradition: "Biblical" },
      { meaning: "Cycles, sun and moon", tradition: "Universal" }
    ],
    20: [
      { meaning: "Redemption, expectancy", tradition: "Biblical" },
      { meaning: "Completion, waiting", tradition: "Universal" }
    ],
    21: [
      { meaning: "Exceeding sinfulness of sin", tradition: "Biblical" },
      { meaning: "Maturity, responsibility", tradition: "Universal" }
    ],
    22: [
      { meaning: "Light, Hebrew alphabet letters", tradition: "Kabbalah" },
      { meaning: "Master builder number", tradition: "Esoteric" }
    ],
    23: [
      { meaning: "Death, change", tradition: "Biblical" },
      { meaning: "Personal transformation", tradition: "Universal" }
    ],
    26: [
      { meaning: "YHWH (יהוה), the divine name", tradition: "Jewish" },
      { meaning: "Compassion, divine love", tradition: "Kabbalah" }
    ],
    27: [
      { meaning: "Preaching of the Gospel", tradition: "Biblical" },
      { meaning: "Spiritual service", tradition: "Universal" }
    ],
    30: [
      { meaning: "Dedication to a calling", tradition: "Biblical" },
      { meaning: "Maturity, responsibility", tradition: "Universal" }
    ],
    33: [
      { meaning: "Master Teacher", tradition: "Esoteric" },
      { meaning: "Significant spiritual growth", tradition: "Universal" }
    ],
    36: [
      { meaning: "Double life (2×18)", tradition: "Jewish" },
      { meaning: "The 36 righteous ones (Lamedvavniks)", tradition: "Jewish" }
    ],
    40: [
      { meaning: "Testing, trial, probation", tradition: "Biblical" },
      { meaning: "Completion of a period", tradition: "Universal" }
    ],
    42: [
      { meaning: "God's revelation", tradition: "Kabbalah" },
      { meaning: "Spiritual journey", tradition: "Universal" }
    ],
    44: [
      { meaning: "Chosen people, generations", tradition: "Jewish" },
      { meaning: "Cycles of change", tradition: "Universal" }
    ],
    49: [
      { meaning: "Completion of counting (Omer)", tradition: "Jewish" },
      { meaning: "Attainment of wisdom", tradition: "Kabbalah" }
    ],
    50: [
      { meaning: "Jubilee, freedom", tradition: "Biblical" },
      { meaning: "Completion of a cycle", tradition: "Universal" }
    ],
    54: [
      { meaning: "Universal communication", tradition: "Universal" },
      { meaning: "Divine messages", tradition: "Esoteric" }
    ],
    60: [
      { meaning: "Support, help", tradition: "Biblical" },
      { meaning: "Harmony, family", tradition: "Universal" }
    ],
    63: [
      { meaning: "Understanding, wisdom", tradition: "Kabbalah" },
      { meaning: "Completion of a cycle", tradition: "Universal" }
    ],
    66: [
      { meaning: "Idolatry, apostasy", tradition: "Biblical" },
      { meaning: "Duality, balance", tradition: "Universal" }
    ],
    70: [
      { meaning: "Universality, nations of the world", tradition: "Jewish" },
      { meaning: "Completion, fullness", tradition: "Biblical" }
    ],
    72: [
      { meaning: "The 72 names of God", tradition: "Kabbalah" },
      { meaning: "Divine connection, mystical power", tradition: "Esoteric" }
    ],
    77: [
      { meaning: "Forgiveness, spiritual insight", tradition: "Biblical" },
      { meaning: "Spiritual awakening", tradition: "Universal" }
    ],
    100: [
      { meaning: "Fullness, a generation", tradition: "Biblical" },
      { meaning: "Wholeness, completion", tradition: "Universal" }
    ],
    108: [
      { meaning: "Spiritual completion (Buddhism, Hinduism)", tradition: "Eastern" },
      { meaning: "Cosmic wholeness", tradition: "Universal" }
    ],
    120: [
      { meaning: "Long life (Moses)", tradition: "Biblical" },
      { meaning: "Full measure, completion", tradition: "Universal" }
    ],
    137: [
      { meaning: "Mystical number (fine-structure constant)", tradition: "Science/Esoteric" },
      { meaning: "Hidden wisdom", tradition: "Kabbalah" }
    ],
    153: [
      { meaning: "Miraculous catch of fish", tradition: "Christian" },
      { meaning: "Abundance, overflow", tradition: "Universal" }
    ],
    200: [
      { meaning: "Insufficiency, lack", tradition: "Biblical" },
      { meaning: "Potential for growth", tradition: "Universal" }
    ],
    216: [
      { meaning: "The 216-letter name of God", tradition: "Kabbalah" },
      { meaning: "Spiritual power", tradition: "Esoteric" }
    ],
    222: [
      { meaning: "Balance, harmony", tradition: "Numerology" },
      { meaning: "Partnerships, relationships", tradition: "Universal" }
    ],
    248: [
      { meaning: "Positive commandments (mitzvot)", tradition: "Jewish" },
      { meaning: "Spiritual action", tradition: "Kabbalah" }
    ],
    300: [
      { meaning: "Divine deliverance", tradition: "Biblical" },
      { meaning: "Victory over adversity", tradition: "Universal" }
    ],
    318: [
      { meaning: "Abraham's trained men", tradition: "Biblical" },
      { meaning: "Preparedness, readiness", tradition: "Universal" }
    ],
    360: [
      { meaning: "Full circle, cycles", tradition: "Universal" },
      { meaning: "Wholeness, unity", tradition: "Esoteric" }
    ],
    400: [
      { meaning: "Trial, testing", tradition: "Biblical" },
      { meaning: "End of a cycle", tradition: "Universal" }
    ],
    432: [
      { meaning: "Cosmic harmony (Hz)", tradition: "Esoteric" },
      { meaning: "Cycles, resonance", tradition: "Universal" }
    ],
    444: [
      { meaning: "Protection, encouragement", tradition: "Numerology" },
      { meaning: "Stability, foundation", tradition: "Universal" }
    ],
    613: [
      { meaning: "Total commandments in Torah", tradition: "Jewish" },
      { meaning: "Spiritual completeness", tradition: "Kabbalah" }
    ],
    666: [
      { meaning: "Number of the beast", tradition: "Christian" },
      { meaning: "Materialism, temptation", tradition: "Esoteric" }
    ],
    700: [
      { meaning: "Completion, rest", tradition: "Biblical" },
      { meaning: "Spiritual fulfillment", tradition: "Universal" }
    ],
    713: [
      { meaning: "Compassion, idealism", tradition: "Kabbalah" },
      { meaning: "Spiritual wisdom", tradition: "Universal" }
    ],
    888: [
      { meaning: "Jesus, resurrection", tradition: "Christian" },
      { meaning: "Abundance, new beginnings", tradition: "Numerology" }
    ],
    1000: [
      { meaning: "Ultimate completeness, millennium", tradition: "Biblical" },
      { meaning: "Infinity, cosmic cycle", tradition: "Universal" }
    ],

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
