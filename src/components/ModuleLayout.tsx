
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

interface ModuleLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const ModuleLayout = ({ children, title, description }: ModuleLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/learning"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Modules
          </Link>
          
          <Card className="p-6 mb-8">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </Card>

          <div className="space-y-8">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModuleLayout;
