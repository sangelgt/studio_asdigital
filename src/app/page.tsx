import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const techLogos = [
  { name: 'TensorFlow', icon: 'neurology' },
  { name: 'Microsoft Azure', icon: 'cloud' },
  { name: 'Google Cloud', icon: 'cloud_circle' },
  { name: 'OpenAI', icon: 'smart_toy' },
  { name: 'NVIDIA AI', icon: 'developer_board' },
  { name: 'Databricks', icon: 'database' },
  { name: 'AWS', icon: 'cloud_queue' },
  { name: 'Snowflake', icon: 'ac_unit' },
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
              <AnimateOnScroll>
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-[1.1] text-text-light dark:text-text-dark">
                  Deje de comprar <br className="hidden md:block" /> herramientas. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary">
                    Construya sistemas de rentabilidad.
                  </span>
                </h1>
              </AnimateOnScroll>
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
                <span className="material-symbols-outlined text-3xl text-text-light dark:text-text-dark">{logo.icon}</span>
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
              <h3 className="text-2xl font-display font-bold mb-4 text-text-light dark:text-text-dark tracking-tight">El Error de Prioridades</h3>
              <h4 className="text-lg font-bold text-destructive mb-3">Implementación Inversa</h4>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed flex-grow">
                La mayoría de las empresas cometen el error capital: compran licencias de software esperando que la herramienta arregle mágicamente procesos rotos. Esto no es innovación, es automatización del caos.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100} className="relative z-10 bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg group hover:border-warning/40 transition-colors duration-300 h-full flex flex-col text-center">
              <div className="w-14 h-14 bg-warning/10 rounded-full flex items-center justify-center mb-6 text-warning mx-auto group-hover:scale-110 transition-transform duration-300 ring-4 ring-surface-light dark:ring-surface-dark">
                <span className="material-symbols-outlined text-3xl">psychology_alt</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-text-light dark:text-text-dark tracking-tight">El Desgaste Operativo</h3>
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
              <h3 className="text-2xl font-display font-bold mb-4 text-text-light dark:text-text-dark tracking-tight">Arquitectura de Procesos</h3>
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
                <Image alt="Angel Salazar" className="h-full w-full object-cover" src="/mi-foto.png" width={400} height={400} />
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
