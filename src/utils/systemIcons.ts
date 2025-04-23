/**
 * Utility functions for system icons and badges
 */

/**
 * Get the correct tradition/system name for a gematria method
 * This ensures the correct cultural tradition is displayed on badges
 */
export const getSystemTradition = (methodName: string): string => {
  // Match methods to their cultural traditions
  const systemMapping: Record<string, string> = {
    // English/Western systems
    "English Gematria": "English",
    "English Ordinal": "English",
    "Simple Gematria": "English",
    "Pythagorean": "Pythagorean",
    "Pythagorean Gematria": "Pythagorean",
    "Sumerian": "Sumerian",
    "Reverse Ordinal": "English",
    "Reverse Pythagorean": "Pythagorean",
    "Full Reduction": "English",
    "Reverse Full Reduction": "English",
    "Francis Bacon": "English",
    "Satanic": "Western",
    
    // Hebrew/Jewish systems
    "Hebrew Gematria": "Hebrew",
    "Jewish Gematria": "Jewish",
    "Mispar Gadol": "Hebrew",
    "Mispar Katan": "Hebrew",
    "Atbash": "Hebrew",
    "Albam": "Hebrew",
    
    // Greek systems
    "Greek Isopsephy": "Greek",
    "Milesian": "Greek",
    
    // Other systems
    "Chaldean": "Chaldean",
    "Ordinal": "English",
    "Reduction": "English",
    "Septenary": "Western"
  };
  
  return systemMapping[methodName] || "Unknown";
};

/**
 * Check if a significance tradition conflicts with the method's tradition
 * This prevents incorrect badges from displaying (like Jewish badges on Greek results)
 */
export const resolveSystemTraditionConflict = (
  methodName: string, 
  significanceTradition: string | null
): string => {
  if (!significanceTradition) return getSystemTradition(methodName);
  
  // Get the system's base tradition
  const systemTradition = getSystemTradition(methodName);
  
  // If the method is from Greek tradition but significance says "Jewish", use "Greek" instead
  if (systemTradition === "Greek" && significanceTradition === "Jewish") {
    return "Greek";
  }
  
  // If the method is from Hebrew/Jewish tradition but significance says "Greek", use "Jewish" instead
  if ((systemTradition === "Hebrew" || systemTradition === "Jewish") && significanceTradition === "Greek") {
    return "Jewish";
  }
  
  // Otherwise use the significance tradition as it's more specific
  return significanceTradition;
}; 