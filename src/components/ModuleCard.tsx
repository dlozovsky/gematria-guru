
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
}

const ModuleCard = ({ title, description, icon: Icon, level, duration, path }: ModuleCardProps) => {
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
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <Button variant="outline">Start</Button>
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
      </Card>
    </motion.div>
  );
};

export default ModuleCard;
