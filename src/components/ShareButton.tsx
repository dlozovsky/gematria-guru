
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import ShareModal from "./ShareModal";
import { type GematriaResult } from "@/utils/gematriaCalculators";

interface ShareButtonProps {
  results: GematriaResult[];
  inputText: string;
}

interface ShareButtonProps {
  results: GematriaResult[];
  inputText: string;
  className?: string;
}

const ShareButton = ({ results, inputText, className }: ShareButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Only show share button if there are results
  if (!results.length || !inputText.trim()) return null;
  
  return (
    <>
      <Button 
        onClick={() => setIsModalOpen(true)}
        variant="secondary"
        className={`gap-2 bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-none border border-gray-300 ${className || ''}`.trim()}
      >
        <Share2 className="h-4 w-4" />
        Share Results
      </Button>
      
      <ShareModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        inputText={inputText}
        results={results}
      />
    </>
  );
};

export default ShareButton;
