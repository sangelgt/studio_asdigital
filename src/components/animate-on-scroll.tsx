"use client";
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export const AnimateOnScroll = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else {
            if (!triggerOnce) {
              element.classList.remove('is-visible');
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transform translate-y-4 transition-all duration-700 ease-out',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
