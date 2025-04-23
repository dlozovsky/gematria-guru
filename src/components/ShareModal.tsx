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
import { useState, useRef, useEffect } from "react";
import { type GematriaResult } from "@/utils/gematriaCalculators";
import { toPng } from "html-to-image";
import DynamicMetaTags from "./DynamicMetaTags";
import { checkSignificance } from "@/utils/significantNumbers";

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
  const [cardImageUrl, setCardImageUrl] = useState<string | null>(null);
  
  // Find the most significant result for sharing text
  const significantResult = results.find(result => 
    checkSignificance(result.value)?.significance === 'profound' || 
    checkSignificance(result.value)?.significance === 'major'
  ) || results[0];
  
  const significance = significantResult ? checkSignificance(significantResult.value) : null;
  
  // Create more detailed share text
  const shareUrl = window.location.href;
  const shareTitle = `Gematria value of "${inputText}" is ${significantResult?.value}`;
  
  // Create more detailed share text that includes card content
  const shareText = `I discovered the gematria values of "${inputText}" using the Gematria Calculator!
Value: ${significantResult?.value} (${significantResult?.method})
${significantResult?.explanation || ''}
${significance ? `Significance: ${significance.description}` : ''}
${results.length > 1 ? `Also appears as: ${results.filter(r => r.method !== significantResult?.method).slice(0, 3).map(r => `${r.value} (${r.method})`).join(', ')}` : ''}`;

  // Generate image on mount for sharing
  useEffect(() => {
    if (cardRef.current && isOpen) {
      generateCardImage();
    }
  }, [isOpen, inputText, results]);
  
  // Generate shareable image
  const generateCardImage = async () => {
    if (!cardRef.current) return;
    
    try {
      const dataUrl = await toPng(cardRef.current, { quality: 0.95 });
      setCardImageUrl(dataUrl);
    } catch (error) {
      console.error("Error generating image for sharing:", error);
    }
  };
  
  // Web Share API
  const canUseWebShare = () => {
    return typeof navigator !== 'undefined' && navigator.share && navigator.canShare;
  };
  
  // Native share (using Web Share API if available)
  const nativeShare = async () => {
    if (!canUseWebShare()) {
      toast({
        title: "Not supported",
        description: "Web Share API is not supported in your browser",
        variant: "destructive"
      });
      return;
    }
    
    try {
      // Ensure we have an image to share
      if (!cardImageUrl) {
        await generateCardImage();
      }
      
      // Create a file from the image for sharing
      if (cardImageUrl) {
        const imageResponse = await fetch(cardImageUrl);
        const imageBlob = await imageResponse.blob();
        const imageFile = new File(
          [imageBlob], 
          `gematria-${inputText.replace(/\s+/g, '-').toLowerCase()}.png`,
          { type: 'image/png' }
        );
        
        // Share data object
        const shareData: { title: string; text: string; url: string; files?: File[] } = {
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        };
        
        // Add file if browser supports it
        if (navigator.canShare && navigator.canShare({ files: [imageFile] })) {
          shareData.files = [imageFile];
        }
        
        await navigator.share(shareData);
        
        toast({
          title: "Shared successfully",
          description: "Your gematria results have been shared",
        });
      } else {
        // Fallback to sharing just text and URL
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      }
    } catch (error) {
      // User cancelled or sharing failed
      console.error("Error sharing:", error);
      if (error instanceof Error && error.name !== 'AbortError') {
        toast({
          title: "Sharing failed",
          description: error.message || "Could not share your results",
          variant: "destructive",
        });
      }
    }
  };
  
  // Social media share URLs with image when available
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}${cardImageUrl ? `&picture=${encodeURIComponent(cardImageUrl)}` : ''}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(shareText)}`;
  
  // Copy link to clipboard
  const copyToClipboard = () => {
    // Copy the full text including all the gematria information
    navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
    toast({
      title: "Copied to clipboard",
      description: "Complete gematria results have been copied to your clipboard",
    });
  };
  
  // Download as image
  const downloadAsImage = async () => {
    if (!cardRef.current) return;
    
    try {
      setIsGeneratingImage(true);
      
      // Use existing image if available, otherwise generate a new one
      const dataUrl = cardImageUrl || await toPng(cardRef.current, { quality: 0.95 });
      
      // Create a link to download the image
      const link = document.createElement('a');
      link.download = `gematria-${inputText.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
      
      // Save the image URL if it was newly generated
      if (!cardImageUrl) {
        setCardImageUrl(dataUrl);
      }
      
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
    // Ensure we have a card image before opening share windows
    if (!cardImageUrl) {
      generateCardImage().then(() => {
        window.open(url, '_blank', 'width=600,height=400');
      });
    } else {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      {/* Dynamic meta tags for better social media sharing */}
      {cardImageUrl && (
        <DynamicMetaTags
          title={shareTitle}
          description={shareText}
          imageUrl={cardImageUrl}
        />
      )}
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
          {canUseWebShare() && (
            <Button 
              variant="default" 
              className="w-full"
              onClick={nativeShare}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          )}
          
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
