
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Share2, Copy, Download } from "lucide-react";
import ShareableCard from "./ShareableCard";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import { type GematriaResult } from "@/utils/gematriaCalculators";
import { toPng } from "html-to-image";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  inputText: string;
  results: GematriaResult[];
}

const ShareModal = ({ isOpen, onClose, inputText, results }: ShareModalProps) => {
  const { toast } = useToast();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  
  // URL to share
  const shareUrl = window.location.href;
  const shareTitle = `Gematria value of "${inputText}" is ${results[0]?.value}`;
  const shareText = `I discovered the gematria values of "${inputText}" using the Gematria Calculator!`;
  
  // Social media share URLs
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
  
  // Copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied",
      description: "Share link has been copied to clipboard",
    });
  };
  
  // Download as image
  const downloadAsImage = async () => {
    if (!cardRef.current) return;
    
    try {
      setIsGeneratingImage(true);
      const dataUrl = await toPng(cardRef.current, { quality: 0.95 });
      
      // Create a link to download the image
      const link = document.createElement('a');
      link.download = `gematria-${inputText.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
      
      toast({
        title: "Image downloaded",
        description: "Your shareable card has been downloaded",
      });
    } catch (error) {
      console.error("Error generating image:", error);
      toast({
        title: "Error generating image",
        description: "Could not generate image from card",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingImage(false);
    }
  };
  
  // Open a social media share window
  const openShareWindow = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Your Gematria Results</DialogTitle>
          <DialogDescription>
            Share your numerical insights with friends or download as an image.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4" ref={cardRef}>
          <ShareableCard inputText={inputText} results={results} />
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => openShareWindow(facebookShareUrl)}
              aria-label="Share on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => openShareWindow(twitterShareUrl)}
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => openShareWindow(linkedinShareUrl)}
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={copyToClipboard}
              aria-label="Copy link"
            >
              <Copy className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={downloadAsImage}
              disabled={isGeneratingImage}
              aria-label="Download as image"
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
