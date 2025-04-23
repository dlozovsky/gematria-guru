import { SYMBOLIC_NUMBERS } from '../data/symbolicNumbers';
import { REDUCED_TEMPLATES, FACTOR_TEMPLATES } from '../data/numerologyTemplates';
import type { GematriaSystemResult } from '../types/GematriaSystemResult';
import { detectEntityType } from './entityTypeDetector';

// Simple Gematria: A=1, B=2, ..., Z=26
export function calculateGematriaValue(input: string, system: string): number {
  if (system === 'Simple Gematria') {
    return input
      .toUpperCase()
      .replace(/[^A-Z]/g, '')
      .split('')
      .reduce((sum, char) => sum + (char.charCodeAt(0) - 64), 0);
  }
  // Add other systems here
  return 0;
}

export function reduceValue(value: number): number {
  while (value > 9) {
    value = value
      .toString()
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return value;
}

export function getFactors(value: number): number[] {
  const factors = [];
  for (let i = 1; i <= value; i++) {
    if (value % i === 0) factors.push(i);
  }
  return factors;
}

export function getSymbolicMatches(value: number, factors: number[]) {
  const matches = [];
  for (const num of [value, ...factors]) {
    if (SYMBOLIC_NUMBERS[num]) {
      matches.push({
        number: num,
        description: SYMBOLIC_NUMBERS[num].description,
        matchingWords: SYMBOLIC_NUMBERS[num].matchingWords
      });
    }
  }
  return matches;
}

// Generate a concise, card-friendly summary
export function generateShortSummary(reducedValue: number | undefined, system?: string): string {
  if (!reducedValue) return '';
  return REDUCED_TEMPLATES[reducedValue] || '';
}

// Generate human-readable interpretation using templates
export function generateInterpretation(
  reducedValue: number | undefined, 
  factors: number[], 
  inputWord?: string
): string {
  const reducedText = reducedValue && REDUCED_TEMPLATES[reducedValue] ? REDUCED_TEMPLATES[reducedValue] : '';
  const factorTexts = factors
    .filter(f => FACTOR_TEMPLATES[f])
    .map(f => FACTOR_TEMPLATES[f]);
  let factorSummary = '';
  
  if (factorTexts.length) {
    factorSummary = `The presence of ${factorTexts.join(', ')} suggests a combination of ${factorTexts.join(', ')}.`;
  }
  
  let prefix = '';
  if (inputWord) {
    const entityType = detectEntityType(inputWord);
    prefix = entityType === 'name' 
      ? 'This name carries ' 
      : `The word "${inputWord}" embodies `;
  }
  
  if (reducedText && factorSummary) {
    return `${prefix}${reducedText} ${factorSummary} Together, these energies imply ${inputWord ? '' : 'a name or word that carries'} great potential for balanced power, creative insight, and emotional intelligence.`;
  }
  
  return prefix + (reducedText || factorSummary || '');
}
