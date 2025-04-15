
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import ShareModal from "./ShareModal";
import { type GematriaResult } from "@/utils/gematriaCalculators";

interface ShareButtonProps {
  results: GematriaResult[];
  inputText: string;
}

const ShareButton = ({ results, inputText }: ShareButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Only show share button if there are results
  if (!results.length || !inputText.trim()) return null;
  
  return (
    <>
      <Button 
        onClick={() => setIsModalOpen(true)}
        variant="outline"
        className="gap-2 mt-4 bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors"
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
