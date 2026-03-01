"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/TextInput";
import NumberMapChart from "@/components/NumberMapChart";
import NumericalTwins from "@/components/NumericalTwins";
import TimelineReferences from "@/components/TimelineReferences";
import { calculateAllGematria } from "@/utils/gematriaCalculators";
import { useToast } from "@/hooks/use-toast";
import { generateNumberConnections, type NumberConnections } from "@/utils/numberMapUtils";

export default function NumberMapsClient() {
  const searchParams = useSearchParams();
  const [inputText, setInputText] = useState("");
  const [connections, setConnections] = useState<NumberConnections>({ nodes: [], links: [] });
  const { toast } = useToast();

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setInputText(q);
      setConnections(generateNumberConnections(q));
    }
  }, [searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText.trim()) setConnections(generateNumberConnections(inputText));
    }, 500);
    return () => clearTimeout(timer);
  }, [inputText]);

  const handleCalculate = () => {
    if (!inputText.trim()) {
      toast({ title: "Please enter some text", description: "Enter words or phrases to analyze" });
      return;
    }
    setConnections(generateNumberConnections(inputText));
  };

  const gematriaValues = inputText.trim()
    ? calculateAllGematria(inputText).map((r) => r.value)
    : [];

  return (
    <div className="w-full space-y-6">
      <Link href="/">
        <Button variant="ghost" size="sm" className="flex items-center gap-1.5 mb-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Calculator
        </Button>
      </Link>

      <TextInput
        value={inputText}
        onChange={setInputText}
        onSubmit={handleCalculate}
        placeholder="Enter text to map numerical connections..."
      />

      {connections.nodes.length > 0 && (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NumberMapChart connections={connections} inputText={inputText} />
          </div>
          <div className="lg:w-80">
            <NumericalTwins inputText={inputText} />
          </div>
        </div>
      )}

      {inputText.trim() && gematriaValues.length > 0 && (
        <TimelineReferences gematriaValues={gematriaValues} inputText={inputText} />
      )}
    </div>
  );
}
