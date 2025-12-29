import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const metadata = {
    title: 'Recursos - Gestión del Conocimiento | Angel Salazar Digital',
    description: 'Recursos estratégicos, guías de gobernanza y herramientas de ROI para la implementación de IA. Documentación accesible WCAG 2.2 AA.',
};

const resources = [
  {
    icon: 'fact_check',
    title: 'Checklist de Gobernanza',
    description: 'Lista de verificación crítica para asegurar que sus datos y procesos cumplen con los estándares éticos y legales antes de escalar cualquier modelo.',
    link: '#',
  },
  {
    icon: 'folder_supervised',
    title: 'Plantillas de AI Owner',
    description: 'Set de documentos para definir roles, responsabilidades y estructuras de reporte para los dueños de producto en proyectos de Inteligencia Artificial.',
    link: '#',
  },
];

export default function RecursosPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:40px_40px] opacity-[0.4] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark pointer-events-none"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimateOnScroll className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        <span className="text-sm font-semibold">Gestión del Conocimiento</span>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={100}>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
                            Recursos &amp; <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary">
                                Capital Intelectual
                            </span>
                        </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200}>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                            Herramientas diseñadas bajo la metodología "Order before Tool". Transforme su inversión en IA en activos tangibles y evite la deuda técnica.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-24">
                <AnimateOnScroll className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Repositorio</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-text-light dark:text-text-dark">
                        Activos Estratégicos para una Organización Resiliente
                    </h2>
                    <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8">
                        Proveemos herramientas, guías técnicas y artículos de profundidad para prevenir la degradación del conocimiento corporativo ante la velocidad de la IA.
                    </p>
                    <div className="inline-flex items-center bg-secondary/10 dark:bg-secondary/20 px-4 py-2 rounded-full border border-secondary/20">
                        <span className="material-symbols-outlined text-secondary mr-2 text-xl">accessibility_new</span>
                        <span className="text-sm font-medium text-secondary/90 dark:text-secondary">
                            Documentos optimizados para accesibilidad nativa WCAG 2.2 AA
                        </span>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={100} className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-16 relative group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <span className="material-symbols-outlined text-9xl text-primary">rocket_launch</span>
                    </div>
                    <div className="md:flex items-center">
                        <div className="md:w-1/3 bg-primary/5 dark:bg-primary/10 p-8 flex items-center justify-center border-r border-gray-100 dark:border-gray-700">
                            <div className="text-center">
                                <span className="material-symbols-outlined text-6xl text-primary mb-4">analytics</span>
                                <div className="text-sm font-bold text-primary uppercase tracking-wider">Recurso Destacado</div>
                            </div>
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-2xl font-bold font-display text-text-light dark:text-text-dark">Guía de Rentabilidad en IA</h3>
                                <span className="bg-primary/5 dark:bg-primary/10 text-primary border border-primary/20 text-xs px-2 py-1 rounded font-mono">PDF Accesible</span>
                            </div>
                            <p className="text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
                                La guía definitiva para directores financieros y líderes de tecnología. Aprenda a calcular el ROI real de sus implementaciones, separando el hype de la eficiencia operativa real. Incluye fórmulas y KPIs estándar de la industria.
                            </p>
                            <Button asChild size="lg" className="w-full md:w-auto text-lg font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary/30 transform transition-all duration-300 group-hover:translate-x-1">
                                <a href="#">
                                    <span className="material-symbols-outlined mr-2">download</span>
                                    Descargar Guía de Rentabilidad en IA
                                </a>
                            </Button>
                        </div>
                    </div>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-2 gap-8">
                    {resources.map((resource, index) => (
                        <AnimateOnScroll key={index} delay={200 + index * 100} className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <span className="material-symbols-outlined text-3xl text-gray-600 dark:text-gray-300 group-hover:text-primary">{resource.icon}</span>
                                </div>
                                <span className="bg-primary/5 dark:bg-primary/10 text-primary border border-primary/20 text-xs font-mono px-2 py-1 rounded">PDF Accesible</span>
                            </div>
                            <h3 className="text-xl font-display font-bold mb-3 text-text-light dark:text-text-dark group-hover:text-primary transition-colors">{resource.title}</h3>
                            <p className="text-text-muted-light dark:text-text-muted-dark mb-6 text-sm leading-relaxed">
                                {resource.description}
                            </p>
                            <Link href={resource.link} className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors">
                                Descargar documento
                                <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                            </Link>
                        </AnimateOnScroll>
                    ))}
                </div>
            </main>

            <section className="bg-background-dark text-text-dark py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <AnimateOnScroll><h2 className="text-3xl font-display font-bold mb-4">¿Necesita una auditoría personalizada?</h2></AnimateOnScroll>
                    <AnimateOnScroll delay={100}><p className="text-text-muted-dark max-w-2xl mx-auto mb-8">Más allá de las herramientas, ofrecemos consultoría estratégica para asegurar que su organización esté lista para el cambio.</p></AnimateOnScroll>
                    <AnimateOnScroll delay={200}>
                        <Button variant="outline" size="lg" asChild className="border-gray-600 hover:border-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/25">
                            <Link href="/diagnostico">Contactar Consultoría</Link>
                        </Button>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
