// Significant numbers in various traditions
// This can be expanded with more numbers as needed
type SignificanceLevel = 'minor' | 'moderate' | 'major' | 'profound';

interface SignificantNumber {
  value: number;
  significance: SignificanceLevel;
  tradition: string;
  description: string;
}

// Database of significant numbers across various traditions
const significantNumbersDB: SignificantNumber[] = [
  // Major biblical and spiritual numbers
  { value: 7, significance: 'major', tradition: 'Biblical', description: 'Divine perfection, completion' },
  { value: 12, significance: 'major', tradition: 'Biblical', description: 'Governmental perfection, the tribes of Israel' },
  { value: 40, significance: 'major', tradition: 'Biblical', description: 'Period of testing or trial' },
  { value: 613, significance: 'major', tradition: 'Jewish', description: 'Number of commandments in the Torah' },
  { value: 666, significance: 'major', tradition: 'Biblical', description: 'Number of the beast in Revelation' },
  { value: 888, significance: 'major', tradition: 'Christian', description: 'Number representing Jesus in Greek gematria' },
  
  // Kabbalistic significant numbers
  { value: 18, significance: 'major', tradition: 'Jewish', description: 'Chai (חי) - life' },
  { value: 26, significance: 'profound', tradition: 'Jewish', description: 'YHWH (יהוה) - the divine name' },
  { value: 72, significance: 'profound', tradition: 'Kabbalistic', description: 'The 72 names of God' },
  
  // Pythagorean and mathematical numbers
  { value: 3, significance: 'moderate', tradition: 'Pythagorean', description: 'Trinity, creation' },
  { value: 4, significance: 'moderate', tradition: 'Pythagorean', description: 'Material world, foundation' },
  { value: 9, significance: 'moderate', tradition: 'Pythagorean', description: 'Completion, fulfillment' },
  { value: 108, significance: 'moderate', tradition: 'Hindu/Buddhist', description: 'Sacred number in Eastern traditions' },
  
  // Numerological and mystical numbers
  { value: 11, significance: 'minor', tradition: 'Numerology', description: 'Master number of intuition' },
  { value: 22, significance: 'minor', tradition: 'Numerology', description: 'Master builder number' },
  { value: 33, significance: 'minor', tradition: 'Numerology', description: 'Master teacher number' },
  { value: 137, significance: 'moderate', tradition: 'Physics/Mystical', description: 'Fine structure constant, intersection of science and mysticism' },
  
  // Other culturally significant numbers
  { value: 13, significance: 'minor', tradition: 'Western', description: 'Transformation, often considered unlucky' },
  { value: 666, significance: 'major', tradition: 'Apocalyptic', description: 'Number of the Beast' },
  { value: 777, significance: 'major', tradition: 'Mystical', description: 'Divine completion, perfection beyond perfection' },
  { value: 1111, significance: 'minor', tradition: 'New Age', description: 'Spiritual awakening, alignment' },
  { value: 1776, significance: 'minor', tradition: 'Historical', description: 'Founding of America, connected to Illuminati in conspiracy theories' },
];

/**
 * Checks if a number is considered significant in various traditions
 * @param value The number to check
 * @returns Information about the significance if found, otherwise null
 */
export const checkSignificance = (value: number): SignificantNumber | null => {
  // Direct match
  const exactMatch = significantNumbersDB.find(num => num.value === value);
  if (exactMatch) return exactMatch;
  
  // Check for numbers that might be significant when reduced
  // (only for larger numbers over 1000)
  if (value > 1000) {
    const reducedValue = value.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    const significantReduced = significantNumbersDB.find(num => num.value === reducedValue);
    
    // Return a modified version that explains the reduction
    if (significantReduced) {
      return {
        ...significantReduced,
        description: `${value} reduces to ${reducedValue}: ${significantReduced.description}`
      };
    }
  }
  
  return null;
};

/**
 * Get CSS animation class based on significance level
 */
export const getAnimationClass = (level: SignificanceLevel): string => {
  switch (level) {
    case 'minor':
      return 'animate-pulse-subtle';
    case 'moderate':
      return 'animate-glow-soft';
    case 'major': 
      return 'animate-shimmer';
    case 'profound':
      return 'animate-sacred-pulse';
    default:
      return '';
  }
};
