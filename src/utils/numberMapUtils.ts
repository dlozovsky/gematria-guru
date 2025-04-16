import { calculateAllGematria, type GematriaResult } from "./gematriaCalculators";

export interface Node {
  id: string;
  value: number;
  method: string;
  x: number;
  y: number;
  z: number;
}

export interface Link {
  source: string;
  target: string;
  strength: number;
}

export interface NumberConnections {
  nodes: Node[];
  links: Link[];
}

/**
 * Generate data for visualizing connections between gematria numbers
 */
export const generateNumberConnections = (text: string): NumberConnections => {
  // Calculate gematria values
  const results = calculateAllGematria(text);
  
  // Create nodes (one per gematria method)
  const nodes: Node[] = results.map((result, index) => {
    // Create x/y coordinates based on value and frequency
    // This is a simple arrangement - in a real app, you might use a more sophisticated algorithm
    return {
      id: `${result.method}-${result.value}`,
      value: result.value,
      method: result.method,
      x: result.value,
      y: index + 1, // Simple vertical positioning by method
      z: getNodeSize(result.value),
    };
  });
  
  // Create links between nodes
  const links: Link[] = [];
  
  // Connect each node to every other node
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      // Calculate link strength based on numerical relationship
      const strength = calculateRelationship(nodes[i].value, nodes[j].value);
      
      links.push({
        source: nodes[i].id,
        target: nodes[j].id,
        strength,
      });
    }
  }
  
  return { nodes, links };
};

/**
 * Calculate the relationship strength between two numbers
 */
const calculateRelationship = (value1: number, value2: number): number => {
  // If numbers are the same, strongest relationship
  if (value1 === value2) return 1;
  
  // If one is a multiple of the other
  if (value1 % value2 === 0 || value2 % value1 === 0) return 0.8;
  
  // If they share common factors
  const gcd = findGCD(value1, value2);
  if (gcd > 1) return 0.6;
  
  // If digital roots are the same
  if (getDigitalRoot(value1) === getDigitalRoot(value2)) return 0.5;
  
  // Default weak relationship
  return 0.2;
};

/**
 * Find the greatest common divisor of two numbers
 */
const findGCD = (a: number, b: number): number => {
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
};

/**
 * Calculate the digital root of a number (sum digits until single digit)
 */
const getDigitalRoot = (num: number): number => {
  if (num === 0) return 0;
  return 1 + ((num - 1) % 9);
};

/**
 * Determine node size based on numerical properties
 */
const getNodeSize = (value: number): number => {
  // Prime numbers get larger sizes
  if (isPrime(value)) return 300;
  
  // Perfect squares get medium sizes
  const sqrt = Math.sqrt(value);
  if (sqrt === Math.floor(sqrt)) return 250;
  
  // Perfect cubes get medium sizes
  const cbrt = Math.cbrt(value);
  if (cbrt === Math.floor(cbrt)) return 250;
  
  // Check if it has few factors (relatively prime)
  const factorCount = countFactors(value);
  if (factorCount <= 2) return 200;
  
  // Default size
  return 100;
};

/**
 * Check if a number is prime
 */
const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  
  return true;
};

/**
 * Count the number of factors of a number
 */
const countFactors = (num: number): number => {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // If divisors are equal, count only one
      if (num / i === i) count++;
      // Otherwise count both
      else count += 2;
    }
  }
  return count;
};
