import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const metadata = {
  title: 'Declaración de Accesibilidad | Angel Salazar Digital',
  description: 'Compromiso con la accesibilidad web (WCAG 2.2 AA) para garantizar el acceso universal a nuestros recursos y servicios de consultoría.',
};

const measures = [
  {
    icon: 'code',
    title: 'Estándares de Código',
    description: 'Uso de HTML semántico y atributos ARIA para mejorar la navegación con tecnologías de asistencia.',
  },
  {
    icon: 'contrast',
    title: 'Contraste y Legibilidad',
    description: 'Garantizamos un contraste de color que cumple con las directrices AA y una tipografía clara y escalable.',
  },
  {
    icon: 'keyboard',
    title: 'Navegación por Teclado',
    description: 'Toda la funcionalidad del sitio es accesible utilizando únicamente el teclado, con indicadores de foco visibles.',
  },
  {
    icon: 'hearing_disabled',
    title: 'Contenido Multimedia',
    description: 'Proporcionamos alternativas textuales para imágenes y transcripciones para contenido de audio o video cuando aplica.',
  },
];

export default function DeclaracionDeAccesibilidadPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-20 bg-background-light dark:bg-background-dark">
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:40px_40px] opacity-[0.4] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="material-symbols-outlined text-base mr-2">accessibility_new</span>
            <span className="text-sm font-semibold">WCAG 2.2 Nivel AA</span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Accesibilidad como Pilar Estratégico
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              En Angel Salazar Digital, la accesibilidad no es una ocurrencia tardía, sino un componente central de nuestra metodología "Orden antes que Herramienta". Un sistema verdaderamente eficiente debe ser utilizable por todos.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="flex flex-col gap-16">

          <AnimateOnScroll>
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-display font-bold mb-4 text-text-light dark:text-text-dark flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
                Compromiso Formal
              </h2>
              <p>
                Angel Salazar Digital se compromete a hacer su sitio web accesible de conformidad con el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público, que transpone la Directiva (UE) 2016/2102 del Parlamento Europeo y del Consejo.
              </p>
              <p>
                Nuestra meta es alcanzar y mantener el nivel de conformidad 'Doble-A' (AA) de las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.2.
              </p>
            </article>
          </AnimateOnScroll>

          <section>
            <AnimateOnScroll>
              <h2 className="text-3xl font-display font-bold mb-8 text-text-light dark:text-text-dark flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">checklist</span>
                Medidas Implementadas
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {measures.map((measure, index) => (
                <AnimateOnScroll key={measure.title} delay={100 * (index + 1)} className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="mb-4 text-primary">
                    <span className="material-symbols-outlined text-4xl">{measure.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-text-light dark:text-text-dark">{measure.title}</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">{measure.description}</p>
                </AnimateOnScroll>
              ))}
            </div>
          </section>

          <AnimateOnScroll>
             <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border-l-4 border-blue-500">
                <h3 className="text-2xl font-display font-bold mb-4 text-blue-900 dark:text-blue-300 flex items-center gap-3">
                    <span className="material-symbols-outlined">feedback</span>
                    Comunicación de Incidencias y Contacto
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-6 text-lg leading-relaxed">
                    A pesar de nuestros esfuerzos, es posible que algún contenido no cumpla plenamente con los estándares. Si encuentra alguna barrera de accesibilidad, le agradecemos que nos lo comunique. Su feedback es crucial para nuestra mejora continua.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                    <a href="mailto:soporte_asdigital@proton.me?subject=Incidencia%20de%20Accesibilidad%20Web">
                        <span className="material-symbols-outlined mr-2">email</span>
                        Notificar una Incidencia
                    </a>
                </Button>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </main>
  );
}
