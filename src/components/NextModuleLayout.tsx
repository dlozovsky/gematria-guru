import Link from "next/link";
import NavHeader from "./NavHeader";
import NavFooter from "./NavFooter";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  prevModule?: { title: string; href: string };
  nextModule?: { title: string; href: string };
  children: React.ReactNode;
}

const NextModuleLayout = ({ title, description, prevModule, nextModule, children }: Props) => (
  <div className="min-h-screen flex flex-col">
    <NavHeader />
    <main className="flex-1 max-w-3xl mx-auto px-4 py-8 w-full">
      <Link
        href="/learning"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Learning Modules
      </Link>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-6">{children}</div>
      <div className="flex items-center justify-between mt-10 pt-6 border-t">
        {prevModule ? (
          <Link href={prevModule.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            {prevModule.title}
          </Link>
        ) : <div />}
        {nextModule ? (
          <Link href={nextModule.href} className="flex items-center gap-2 text-sm text-primary font-medium hover:text-primary/80 transition-colors">
            {nextModule.title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link href="/learning" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            All Modules <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </main>
    <NavFooter />
  </div>
);

export default NextModuleLayout;
