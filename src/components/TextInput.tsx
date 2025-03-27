
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}

const TextInput = ({ value, onChange, onSubmit, placeholder = "Enter text..." }: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <motion.div 
      className={`relative w-full max-w-lg transition-fade ${isFocused ? 'scale-[1.01]' : 'scale-100'}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="glass-input w-full px-4 py-3 text-lg rounded-xl focus:placeholder-transparent"
        aria-label="Enter text to calculate gematria value"
      />
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full" 
        initial={{ width: "0%" }}
        animate={{ width: isFocused ? "100%" : value ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default TextInput;
