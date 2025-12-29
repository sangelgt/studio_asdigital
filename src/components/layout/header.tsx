"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/metodologia', label: 'Metodología' },
  { href: '/casos-de-exito', label: 'Casos de Éxito' },
  { href: '/recursos', label: 'Recursos' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-display font-bold text-xl">AS</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-text-light dark:text-text-dark">
              Angel Salazar <span className="text-primary">Digital</span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium text-sm transition-colors',
                  pathname === link.href
                    ? 'text-primary font-bold border-b-2 border-primary pb-0.5'
                    : 'text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-0.5">
              <Link href="/diagnostico">Diagnóstico</Link>
            </Button>
          </nav>

          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined">menu</span>
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 pt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors',
                        pathname === link.href
                          ? 'text-primary font-bold'
                          : 'text-text-muted-light dark:text-text-muted-dark hover:text-primary'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="text-lg">
                    <Link href="/diagnostico" onClick={() => setIsOpen(false)}>Diagnóstico</Link>
                  </Button>
                  <div className="pt-6 flex justify-center">
                    <ThemeToggle />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
