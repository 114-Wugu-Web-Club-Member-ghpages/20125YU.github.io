import { Link, useLocation } from "wouter";
import { Menu, X, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "首頁" },
    { path: "/gallery", label: "作品集" },
    { path: "/diary", label: "日記" },
    { path: "/about", label: "關於我" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <a className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3" data-testid="link-home">
              <Palette className="w-6 h-6 text-primary" />
              <span className="font-serif text-xl font-medium">藝術日記</span>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a data-testid={`link-nav-${item.label}`}>
                  <Button
                    variant={location === item.path ? "secondary" : "ghost"}
                    className="font-serif"
                  >
                    {item.label}
                  </Button>
                </a>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a onClick={() => setMobileMenuOpen(false)} data-testid={`link-mobile-${item.label}`}>
                  <Button
                    variant={location === item.path ? "secondary" : "ghost"}
                    className="w-full justify-start font-serif"
                  >
                    {item.label}
                  </Button>
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
