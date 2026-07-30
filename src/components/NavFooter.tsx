import Link from "next/link";

const NavFooter = () => (
  <footer className="bg-muted/50 border-t border-border mt-auto">
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <div>
          <h3 className="font-semibold text-sm mb-3">Tools</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary transition-colors">Gematria Calculator</Link></li>
            <li><Link href="/number-maps" className="hover:text-primary transition-colors">Number Maps</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-3">Learn</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/learning" className="hover:text-primary transition-colors">Learning Modules</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Knowledge Center</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-sm mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Gematria Guru. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default NavFooter;
