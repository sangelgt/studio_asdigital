import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const techLogos = [
  { 
    name: 'TensorFlow', 
    logo: (
      <svg className="size-6" viewBox="0 0 256 256" fill="currentColor"><path d="M131.3 233.1h-4.6l-31.1-54-31.1 54h-4.6l33.4-57.8-33.4-57.8h4.6l31.1 54 31.1-54h4.6l-33.4 57.8zM218.6 233.1h-4.6l-31.1-54-31.1 54h-4.6l33.4-57.8-33.4-57.8h4.6l31.1 54 31.1-54h4.6l-33.4 57.8z"/></svg>
    )
  },
  { 
    name: 'Microsoft Azure', 
    logo: (
      <svg className="size-6" viewBox="0 0 256 256" fill="currentColor"><path d="m142.8 133.7-33.3 67.3-6.7 13.5c-4.4 8.9-1.3 19.6 7.6 24s19.6 1.3 24-7.6l8.9-17.8 72.8-146.1c6.2-12.4 1.3-27.6-11.1-33.8s-27.6-1.3-33.8 11.1l-28.4 56.6zM96.2 24.1 24.1 133.7 0 182.6l102.7-27.5L168.3 43c6.2-12.4 1.3-27.6-11.1-33.8S130-2.1 123.8 10.3l-27.6 13.8z"/></svg>
    ) 
  },
  { 
    name: 'Google Cloud', 
    logo: (
      <svg className="size-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.433 21.135c-2.43.538-4.96.406-7.385-.385a9.902 9.902 0 0 1-5.02-3.805c-.86-1.388-1.42-2.956-1.638-4.59C3.178 10.82 3.44 9.17 4.09 7.64a9.856 9.856 0 0 1 3.55-4.475c1.32-.9 2.8-1.5 4.34-1.765 2.76-.477 5.567.106 7.92 1.62a9.89 9.89 0 0 1 3.82 5.08A9.856 9.856 0 0 1 24 12.82a9.95 9.95 0 0 1-4.14 8.01 9.86 9.86 0 0 1-2.427.305zm-4.32-15.01c-1.31 0-2.58.49-3.56 1.39a4.853 4.853 0 0 0-1.74 3.52c0 1.3.49 2.58 1.41 3.55a4.89 4.89 0 0 0 3.56 1.36h.22c1.3 0 2.58-.49 3.55-1.4a4.85 4.85 0 0 0 1.42-3.56c0-1.3-.5-2.58-1.4-3.56a4.89 4.89 0 0 0-3.46-1.29zM19.982 17.5a4.85 4.85 0 0 0-1.75-3.55c-.97-.9-2.25-1.4-3.56-1.4h-.3a4.91 4.91 0 0 0-4.9 4.9c0 .97.3 1.9.83 2.71.55.8 1.28 1.45 2.16 1.86a4.83 4.83 0 0 0 2.9.22c.98-.18 1.9-.66 2.65-1.37a4.88 4.88 0 0 0 1.97-4.37z"/></svg>
    ) 
  },
  { 
    name: 'OpenAI', 
    logo: (
       <svg className="size-6" viewBox="0 0 209 209" fill="currentColor"><path d="m104.5 208.2-104-59.8v-119L104.5 89v60l-45-25.8v-60L104.5 37.5 149.5 63v60l-45 25.8v-60l45-25.8v-60L104.5.8 1.3 61.2v87.4L104.5 208.2zm104-119v119l-104 59.8L.5 208.2l104-59.8v-60l45 25.8v60l-45-25.8 45-25.8v-60l-45 25.8V29.5l104-59.8 1.3 1.2z"/></svg>
    ) 
  },
  { 
    name: 'NVIDIA AI', 
    logo: (
      <svg className="size-6" viewBox="0 0 32 32" fill="currentColor"><path d="M22.51 29.59c-1.89-.01-3.69-.33-5.36-1.04l.01-.01-9.9-5.14-.01-.01c-2.45-1.26-4.63-2.98-6.42-5.11a14.73 14.73 0 0 1-3.08-6.19C-2.41 11.23.43 0 13.93 0c9.12 0 13.43 4.38 13.9 9.33 1.05.54 2.05 1.16 3 1.84.49.36.96.75 1.42 1.15a.5.5 0 0 1 .15.68c-.76 1.2-1.57 2.37-2.42 3.51-.5.66-1.01 1.3-1.54 1.93-2.12 2.5-4.66 4.45-7.5 5.76l-.01.01-4.22 1.93s-1.89 3.45-4.15 3.45zM13.93 3.65C5.45 3.65 3.4 10.3 3.93 13.5c.37 2.21 1.74 4.09 3.69 5.37l.01.01 9.9 5.14.01.01c1.88.97 3.93.97 5.81 0l.01-.01 4.22-1.93-.01-.01c2.31-1.07 4.3-2.6 5.92-4.52.54-.66 1.06-1.34 1.54-2.03.73-1 1.42-2.01 2.05-3.04a11.14 11.14 0 0 0-2.3-2.28c-1.46-.96-3.13-1.63-4.92-1.93-.5-5.46-4.52-8.3-10.23-8.3z"/></svg>
    ) 
  },
  { 
    name: 'Databricks', 
    logo: (
      <svg className="size-6" viewBox="0 0 1024 1024" fill="currentColor"><path d="m395.2 331 328-189.4c17.2-9.9 39.1 2.5 39.1 21.6v378.8c0 19.1-21.9 31.5-39.1 21.6L395.2 414.2c-17.2-9.9-17.2-33.3 0-43.2zm-268.4-155L455.1 27.2c17.2-9.9 39.1 2.5 39.1 21.6v127.9c0 19.1-21.9 31.5-39.1 21.6L126.8 243c-17.2-9.9-17.2-33.3 0-43.2zm536.8 510.8-328.3-189.4c-17.2-9.9-17.2-33.3 0-43.2l328.3-189.4c17.2-9.9 39.1 2.5 39.1 21.6v378.8c0 19.1-21.9 31.5-39.1 21.6zM126.8 781l328.3-189.4c17.2-9.9 17.2-33.3 0-43.2L126.8 359c-17.2-9.9-39.1 2.5-39.1 21.6v378.8c0 19.2 21.9 31.6 39.1 21.6zm268.4 155L65.9 746.6c-17.2-9.9-39.1 2.5-39.1 21.6v127.9c0 19.1 21.9 31.5 39.1 21.6l328.3-189.4c17.2-9.9 17.2-33.2 0-43.1z"/></svg>
    ) 
  },
  { 
    name: 'AWS', 
    logo: (
      <svg className="size-6" viewBox="0 0 128 128" fill="currentColor"><path d="M37.3 84.2c-1.3-1-3.3-1.6-4.9-.8-1.6.8-2.6 2.8-1.8 4.4.8 1.6 2.8 2.6 4.4 1.8 1.6-.8 2.6-2.8 1.8-4.4l.5-.8zM89.9 84.2c-1.3-1-3.3-1.6-4.9-.8-1.6.8-2.6 2.8-1.8 4.4.8 1.6 2.8 2.6 4.4 1.8 1.6-.8 2.6-2.8 1.8-4.4l.5-.8zM64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm25.9 89.2c-1.5 1.3-3.8 1.8-5.7 1-2-.8-3.2-2.9-2.4-5.1.8-2.1 2.9-3.4 5-3.4.7 0 1.4.2 2.1.5.3-1 .5-2 .7-3.1 0-.1.1-.3.1-.4 1-5.1 1.5-10.4 1.5-15.8 0-14.6-4.1-28.1-11.4-38.9-1-1.5-3-2.1-4.7-1.3-1.8.8-2.7 2.8-1.9 4.7.1.1.2.3.3.4 5.2 8.3 8.3 18.2 8.3 28.9 0 5.4-.5 10.7-1.5 15.7-2.6-3-6-4.9-9.8-5.3-5.3-.6-10.7 2.3-13.8 7-3.8 5.7-4.1 12.9-.6 18.9 3.5 6.1 9.9 9.8 16.9 9.8 4.1 0 8.1-1.3 11.4-3.8 1.8-.1 3.5-1 4.7-2.4 1.5-1.7 1.8-4 .7-6zm-48.4-54c-1.7-.8-3.7-.3-4.7 1.3-1.3 2.1-.2 4.8 2.3 5.7 6.4 2.5 12.1 6.8 16.5 12.4 1.3 1.6 3.7 2.1 5.4 1 1.8-1.1 2.5-3.4 1.5-5.4-5.3-6.8-12-11.9-19.6-14.8l-1.4-.2zM36.5 89.2c-1.5 1.3-3.8 1.8-5.7 1-2-.8-3.2-2.9-2.4-5.1.8-2.1 2.9-3.4 5-3.4.7 0 1.4.2 2.1.5.3-1 .5-2 .7-3.1 0-.1.1-.3.1-.4 1-5.1 1.5-10.4 1.5-15.8 0-14.6-4.1-28.1-11.4-38.9-1-1.5-3-2.1-4.7-1.3-1.8.8-2.7 2.8-1.9 4.7.1.1.2.3.3.4 5.2 8.3 8.3 18.2 8.3 28.9 0 5.4-.5 10.7-1.5 15.7-2.6-3-6-4.9-9.8-5.3-5.3-.6-10.7 2.3-13.8 7-3.8 5.7-4.1 12.9-.6 18.9 3.5 6.1 9.9 9.8 16.9 9.8 4.1 0 8.1-1.3 11.4-3.8 1.8-.1 3.5-1 4.7-2.4 1.5-1.7 1.8-4 .7-6z"/></svg>
    ) 
  },
  { 
    name: 'Snowflake', 
    logo: (
      <svg className="size-6" viewBox="0 0 256 256" fill="currentColor"><path d="M251.2 145.7 145.7 251.2c-4.8 4.8-12.7 4.8-17.5 0l-17.2-17.2-17.1-17.1c-2.3-2.3-5.4-3.6-8.7-3.6s-6.4 1.2-8.7 3.6l-17.1 17.1-17.2 17.2c-4.8 4.8-12.7 4.8-17.5 0L4.8 145.7c-4.8-4.8-4.8-12.7 0-17.5l17.2-17.2 17.1-17.1c2.3-2.3 3.6-5.4 3.6-8.7s-1.2-6.4-3.6-8.7L22 62.4 4.8 45.2c-4.8-4.8-4.8-12.7 0-17.5L110.3 4.8c4.8-4.8 12.7-4.8 17.5 0l17.2 17.2 17.1 17.1c2.3 2.3 5.4 3.6 8.7 3.6s6.4-1.2 8.7-3.6l17.1-17.1 17.2-17.2c4.8-4.8 12.7-4.8 17.5 0L251.2 110.3c4.8 4.8 4.8 12.7 0 17.5l-17.2 17.2-17.1 17.1c-2.3 2.3-3.6 5.4-3.6 8.7s1.2 6.4 3.6 8.7l17.1 17.1 17.2 17.2c4.8 4.9 4.8 12.8 0 17.4zM128 152.2c-13.4 0-24.2-10.9-24.2-24.2s10.9-24.2 24.2-24.2 24.2 10.9 24.2 24.2-10.8 24.2-24.2 24.2z"/></svg>
    ) 
  },
];

export default function Home() {
  return (
    <>
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:40px_40px] opacity-[0.4] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-[1.1] text-text-light dark:text-text-dark">
                Deje de comprar <br className="hidden md:block" /> herramientas. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary">
                  Construya sistemas de rentabilidad.
                </span>
              </h1>
              <AnimateOnScroll delay={100}>
                <h2 className="mb-10 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed font-normal">
                  El 95% de los pilotos de Inteligencia Artificial fracasan en generar resultados financieros. En Angel Salazar Digital, orquestamos procesos de negocio bajo el método "Orden antes que Herramienta" para transformar su frustración en ROI tangible.
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200} className="flex flex-col items-center lg:items-start">
                <Button asChild size="lg" className="text-lg font-bold py-7 px-10 rounded-lg shadow-xl shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300 group">
                  <Link href="/diagnostico">
                    Calcula tu Potencial de ROI
                    <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">calculate</span>
                  </Link>
                </Button>
                <p className="mt-4 text-sm text-text-muted-light dark:text-text-muted-dark flex items-center">
                  <span className="material-symbols-outlined text-base mr-1 text-primary">timer</span>
                  Estimación personalizada en menos de 2 minutos.
                </p>
              </AnimateOnScroll>
            </div>

            <div className="relative hidden lg:flex items-center justify-center h-full min-h-[500px]">
             <AnimateOnScroll delay={300} className="w-full h-full">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-600/30 rounded-full blur-[80px] opacity-60 animate-pulse-slow"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute top-10 left-0 right-0 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-xl border border-white/40 dark:border-gray-700 rounded-2xl shadow-2xl p-6 z-20 animate-[float_6s_ease-in-out_infinite] ring-1 ring-black/5 dark:ring-white/5">
                      <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs font-mono text-primary font-bold tracking-wider">SYSTEM_ROI_V2.0</div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-end h-32 gap-3 px-2">
                          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[30%]"></div>
                          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[45%]"></div>
                          <div className="w-full bg-primary/30 rounded-t-sm h-[55%]"></div>
                          <div className="w-full bg-primary/60 rounded-t-sm h-[75%]"></div>
                          <div className="w-full bg-secondary rounded-t-sm h-[95%] relative group">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs font-bold py-1 px-3 rounded shadow-lg whitespace-nowrap">
                              +240% Growth
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-text-muted-light dark:text-text-muted-dark font-mono mt-2">
                          <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
         <AnimateOnScroll>
            <span className="text-xs font-bold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">Ecosistema Tecnológico</span>
            <h3 className="mt-4 text-sm font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-[0.2em]">
              Integración Nativa con Líderes del Sector
            </h3>
          </AnimateOnScroll>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
          <div className="flex items-center w-max animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused] py-4">
            {[...techLogos, ...techLogos].map((logo, index) => (
              <div key={index} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 group cursor-default mx-8">
                {logo.logo}
                <span className="text-lg font-bold text-text-light dark:text-text-dark font-sans">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent z-0"></div>
            <AnimateOnScroll className="relative z-10 bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg group hover:border-destructive/40 transition-colors duration-300 h-full flex flex-col text-center">
              <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mb-6 text-destructive mx-auto group-hover:scale-110 transition-transform duration-300 ring-4 ring-surface-light dark:ring-surface-dark">
                <span className="material-symbols-outlined text-3xl">error_outline</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-text-light dark:text-text-dark tracking-tight text-center">El Error de Prioridades</h3>
              <h4 className="text-lg font-bold text-destructive mb-3">Implementación Inversa</h4>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed flex-grow">
                La mayoría de las empresas cometen el error capital: compran licencias de software esperando que la herramienta arregle mágicamente procesos rotos. Esto no es innovación, es automatización del caos.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100} className="relative z-10 bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg group hover:border-warning/40 transition-colors duration-300 h-full flex flex-col text-center">
              <div className="w-14 h-14 bg-warning/10 rounded-full flex items-center justify-center mb-6 text-warning mx-auto group-hover:scale-110 transition-transform duration-300 ring-4 ring-surface-light dark:ring-surface-dark">
                <span className="material-symbols-outlined text-3xl">psychology_alt</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-text-light dark:text-text-dark tracking-tight text-center">El Desgaste Operativo</h3>
              <h4 className="text-lg font-bold text-warning mb-3">La Hemorragia Silenciosa</h4>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed flex-grow">
                Mientras sus competidores anuncian "éxitos", usted acumula costos ocultos. Equipos frustrados, datos aislados y herramientas caras que nadie usa. La brecha entre expectativa y realidad se ensancha.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200} className="relative z-10 bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-primary/30 shadow-xl shadow-primary/5 group h-full flex flex-col text-center">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl pointer-events-none"></div>
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 ring-4 ring-surface-light dark:ring-surface-dark shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-text-light dark:text-text-dark tracking-tight text-center">Arquitectura de Procesos</h3>
              <h4 className="text-lg font-bold text-primary mb-3">Método ASD: Orden antes que Herramienta</h4>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed flex-grow relative z-10">
                Auditamos sus flujos de trabajo, eliminamos la fricción y estructuramos sus datos. Solo entonces, inyectamos la IA precisa. Transformamos la adopción tecnológica en una ciencia de rentabilidad predecible.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight text-text-light dark:text-text-dark">Resultados Tangibles</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto text-lg">Métricas promedio de nuestros clientes tras 6 meses de implementación.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <AnimateOnScroll delay={100} className="p-6 bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm text-center group hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-3 group-hover:scale-110 transition-transform inline-block font-display">+240%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">ROI Promedio</div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200} className="p-6 bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm text-center group hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform inline-block font-display">-45%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">Costos Operativos</div>
            </AnimateOnScroll>
             <AnimateOnScroll delay={300} className="p-6 bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm text-center group hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-3 group-hover:scale-110 transition-transform inline-block font-display">14</div>
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">Semanas Break-even</div>
            </AnimateOnScroll>
             <AnimateOnScroll delay={400} className="p-6 bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm text-center group hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-warning mb-3 group-hover:scale-110 transition-transform inline-block font-display">0</div>
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">Dependencia Técnica</div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <AnimateOnScroll className="w-full md:w-1/3 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 ring-1 ring-gray-900/10 dark:ring-white/10">
                <Image alt="Angel Salazar" className="h-full w-full object-cover" src="/mi-foto-1.png" width={400} height={400} />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-grid-pattern dark:bg-grid-pattern-dark opacity-50 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200} className="w-full md:w-2/3">
              <h2 className="text-3xl font-display font-bold mb-6 text-text-light dark:text-text-dark">Resultados reales antes de la primera línea de código</h2>
              <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
                "La Inteligencia Artificial no es una varita mágica, es un amplificador. Si amplificas procesos ineficientes, solo escalas el desastre. Mi misión es simple: limpiar la casa antes de invitar a los robots. Los resultados no mienten."
              </p>
              <div className="border-l-4 border-primary pl-6 py-4 bg-background-light dark:bg-gray-800/50 rounded-r-2xl">
                <div className="flex items-start">
                  <span className="material-symbols-outlined text-primary text-4xl mr-4 mt-1">format_quote</span>
                  <div>
                    <p className="italic text-text-light dark:text-text-dark font-medium mb-4 text-lg">
                      "Contratamos a tres agencias antes de Angel Salazar. Todas querían vendernos chatbots. Angel nos vendió una reingeniería de procesos que nos ahorró $200k antes de instalar la primera línea de código."
                    </p>
                    <div className="font-bold text-base text-primary">Carlos Mendez</div>
                    <div className="text-xs font-bold uppercase tracking-wide text-text-muted-light dark:text-text-muted-dark">CEO, Logistics Ve</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark text-center relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 z-0"></div>
        <AnimateOnScroll className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-text-light dark:text-text-dark tracking-tight">
            ¿Listo para dejar de adivinar?
          </h2>
          <p className="text-xl text-text-muted-light dark:text-text-muted-dark mb-10 leading-relaxed">
            Audite su madurez digital y descubra cuánto dinero está dejando sobre la mesa con nuestra metodología probada.
          </p>
          <Button asChild size="lg" className="text-lg font-bold py-7 px-10 rounded-lg shadow-xl shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300 group">
             <Link href="/diagnostico">
              Calcula tu Potencial de ROI
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </Button>
          <p className="mt-6 text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
            <span className="inline-block w-2 h-2 bg-secondary rounded-full mr-2"></span>
            Agenda limitada a 3 consultorías por mes.
          </p>
        </AnimateOnScroll>
      </section>
    </>
  );
}
