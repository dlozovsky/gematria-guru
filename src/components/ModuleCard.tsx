
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  level: string;
  duration: string;
  path: string;
  objectives?: string[];
  highlights?: string[];
  quote?: { text: string; source?: string };
}

const ModuleCard = ({ title, description, icon: Icon, level, duration, path, objectives, highlights, quote }: ModuleCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="cursor-pointer" onClick={() => navigate(path)}>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold flex items-center gap-2">
  {title.includes('Calculator') ? '🧮' : title.includes('Map') || title.includes('Chart') || title.includes('Stats') ? '📊' : '📘'}
  {title}
</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <Button variant="outline" className="transition duration-150 hover:bg-primary/10 hover:text-primary active:scale-95 focus:ring-2 focus:ring-primary">Start</Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {duration}
            </span>
            <span className="flex items-center gap-1">Level: {level}</span>
          </div>
        </CardContent>
        {(objectives || highlights || quote) && (
          <div className="px-6 pb-4 pt-2">
            {quote && (
              <blockquote className="border-l-4 border-primary pl-4 italic text-primary text-base mb-3">
                “{quote.text}”
                {quote.source && <span className="block text-xs text-muted-foreground mt-1">— {quote.source}</span>}
              </blockquote>
            )}
            {objectives && (
              <div className="mb-2">
                <div className="font-semibold text-sm text-blue-800 mb-1">🎯 Learning Objectives</div>
                <ul className="list-disc pl-6 space-y-1 text-[15px] text-blue-900">
                  {objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                </ul>
              </div>
            )}
            {highlights && (
              <div className="mb-2">
                <div className="font-semibold text-sm text-blue-800 mb-1">✨ Module Highlights</div>
                <ul className="list-disc pl-6 space-y-1 text-[15px] text-blue-900">
                  {highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default ModuleCard;
