import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

const caseStudies = [
  {
    id: 1,
    category: 'Retail & Fitness',
    client: 'Nabolic Fitness',
    tagline: 'Automatización de inventario y atención al cliente.',
    image: PlaceHolderImages.find(img => img.imageHint.includes('gym'))!,
    context: 'Nabolic enfrentaba una crisis de escalabilidad. Con 12 sucursales nuevas, el sistema manual de gestión de inventario y la atención al cliente vía WhatsApp estaban colapsando. La pérdida de leads por falta de respuesta inmediata superaba el 35%.',
    decisiveFactor: 'La integración de IA predictiva en la cadena de suministro redujo el "stock muerto" en un 40% antes de tocar la interfaz de usuario.',
    obstacles: [
      'Resistencia del personal de ventas a adoptar el CRM automatizado.',
      'Datos históricos de inventario fragmentados en excels locales.',
      'Alucinaciones tempranas del chatbot en consultas sobre suplementos médicos.',
    ],
    results: [
      { metric: 'Tasa de Conversión (Leads)', before: '2.1%', after: '5.8%' },
      { metric: 'Tiempo Respuesta Promedio', before: '4.5 hrs', after: '45 seg' },
      { metric: 'Coste Operativo / Cliente', before: '$12.50', after: '$4.20' },
    ],
    timeline: 'Q3 2023 - Q1 2024',
  },
  {
    id: 2,
    category: 'E-Commerce & Logística',
    client: 'La Explotada.ve',
    tagline: 'Optimización de rutas y predicción de demanda.',
    image: PlaceHolderImages.find(img => img.imageHint.includes('warehouse'))!,
    context: 'Con el auge del delivery en Venezuela, La Explotada.ve creció exponencialmente pero caóticamente. Los costos de última milla se comían el margen de ganancia. Se implementó un modelo de IA para optimización logística dinámica.',
    decisiveFactor: 'Limpiar la base de datos de direcciones "informales" permitió al algoritmo de rutas reducir el gasto de combustible en un 22% la primera semana.',
    obstacles: [
      'Geolocalización imprecisa en zonas no cartografiadas por Google Maps.',
      'Falta de conectividad estable para los choferes en ruta.',
    ],
    results: [
      { metric: 'Entregas a Tiempo', before: '78%', after: '96%' },
      { metric: 'Gasto Combustible Mensual', before: '$4,200', after: '$3,150' },
      { metric: 'Devoluciones por error', before: '12%', after: '2%' },
    ],
    timeline: 'Q2 2024',
  },
  {
    id: 3,
    category: 'B2B & Consultoría',
    client: 'Medusa Group',
    tagline: 'Generación de informes y analítica predictiva.',
    image: PlaceHolderImages.find(img => img.imageHint.includes('office'))!,
    context: 'Medusa Group dedicaba 400 horas hombre mensuales a la generación de reportes para clientes. El error humano era frecuente y el análisis carecía de profundidad estratégica. Se implementaron agentes de IA para data mining y reporting.',
    decisiveFactor: 'La estructuración de datos no estructurados (emails, PDFs) permitió identificar patrones de churn (abandono) con 3 meses de antelación.',
    obstacles: [
      'Privacidad de datos y compliance (GDPR/LOPD) al usar LLMs.',
      'Necesidad de "fine-tuning" costoso para jerga específica de la industria.',
    ],
    results: [
      { metric: 'Horas dedicadas a Reporting', before: '400h/mes', after: '25h/mes' },
      { metric: 'Margen de Error en Datos', before: '4.5%', after: '<0.1%' },
      { metric: 'Retención de Clientes', before: '85%', after: '94%' },
    ],
    timeline: 'Annual 2023',
  },
];

export const metadata = {
  title: 'Casos de Éxito | Angel Salazar Digital',
  description: 'Análisis post-mortem de implementaciones de IA. Transparencia radical sobre ROI, obstáculos superados y resultados cuantificables.',
};

const CaseStudy = ({ study, index }: { study: (typeof caseStudies)[0]; index: number }) => (
    <article className="grid lg:grid-cols-12 gap-12 items-start" id={`case-${study.id}`}>
        <div className="lg:col-span-5 lg:sticky top-28">
            <AnimateOnScroll>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-10 mix-blend-multiply opacity-80"></div>
                    <Image alt={study.client} className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" src={study.image.imageUrl} width={600} height={800} data-ai-hint={study.image.imageHint}/>
                    <div className="absolute bottom-0 left-0 p-8 z-20">
                        <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur text-white text-xs font-bold uppercase tracking-wider rounded mb-3 border border-white/20">{study.category}</div>
                        <h2 className="text-4xl font-display font-bold text-white mb-2">{study.client}</h2>
                        <p className="text-white/90 font-light">{study.tagline}</p>
                    </div>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200} className="mt-6 bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-sm">
                <div className="flex items-start">
                    <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 mr-3 text-3xl">lightbulb</span>
                    <div>
                        <h4 className="font-bold text-yellow-800 dark:text-yellow-400 uppercase text-sm tracking-wider mb-1">El Factor Decisivo</h4>
                        <p className="text-sm text-yellow-900/80 dark:text-yellow-100/80">{study.decisiveFactor}</p>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
        <div className="lg:col-span-7 space-y-8">
            <AnimateOnScroll delay={100}>
                <h3 className="text-2xl font-bold mb-4 flex items-center text-text-light dark:text-text-dark">
                    <span className="w-8 h-1.5 bg-primary dark:bg-primary-light mr-4 rounded-full"></span> Contexto
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-lg">{study.context}</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200} className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
                <div className="p-6 border-l-4 border-destructive">
                    <h4 className="text-lg font-bold flex items-center mb-4 text-text-light dark:text-text-dark">
                        <span className="bg-destructive/10 p-1.5 rounded-full mr-3 flex items-center justify-center">
                            <span className="material-symbols-outlined text-destructive text-sm">warning</span>
                        </span>
                        Obstáculos Superados (Critical Errors)
                    </h4>
                    <ul className="space-y-4">
                        {study.obstacles.map((obstacle, i) => (
                            <li key={i} className="flex items-start">
                                <span className="material-symbols-outlined text-destructive text-sm mt-1 mr-2">close</span>
                                <span className="text-text-muted-light dark:text-text-muted-dark text-sm">{obstacle}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300} className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden border-l-4 border-l-secondary">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-secondary/5">
                    <h4 className="font-bold text-secondary flex items-center">
                        <span className="material-symbols-outlined mr-2">verified</span> Resultados Cuantificables
                    </h4>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{study.timeline}</span>
                </div>
                <div className="p-0">
                    <table className="w-full text-left border-collapse">
                        <tbody>
                            {study.results.map((result, i) => (
                                <tr key={i} className="border-b border-gray-100 dark:border-gray-700/50 last:border-b-0 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4 text-sm font-medium text-text-light dark:text-text-dark">{result.metric}</td>
                                    <td className="p-4 text-sm font-mono text-text-muted-light dark:text-text-muted-dark hidden sm:table-cell">{result.before}</td>
                                    <td className="p-4 text-sm font-bold text-secondary text-right">{result.after}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AnimateOnScroll>
        </div>
    </article>
);


export default function CasosDeExitoPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:40px_40px] opacity-[0.4] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark pointer-events-none"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimateOnScroll className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/10 text-primary border border-primary/20 shadow-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        <span className="text-sm font-semibold">Análisis Post-Mortem 2024</span>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={100}>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-tight">
                        Transparencia Radical: <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white">
                            Lo que aprendimos de los fallos
                        </span>
                    </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200}>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        El mercado está saturado de promesas vacías sobre Inteligencia Artificial. En Angel Salazar Digital, creemos que el verdadero aprendizaje proviene de diseccionar la fricción. Aquí mostramos cómo transformamos el caos operativo en rentabilidad medible.
                    </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={300} className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-mono text-text-muted-light dark:text-text-muted-dark">
                        <span className="flex items-center px-3 py-1 rounded-md bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700"><span className="material-symbols-outlined text-primary text-lg mr-2">analytics</span> ROI Promedio: +240%</span>
                        <span className="flex items-center px-3 py-1 rounded-md bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700"><span className="material-symbols-outlined text-primary text-lg mr-2">timer</span> Tiempo Implementación: 14 Semanas</span>
                    </AnimateOnScroll>
                </div>
            </section>
            
            <section className="py-16 bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <AnimateOnScroll>
                        <span className="material-symbols-outlined text-6xl text-primary/20 dark:text-primary/20 mb-4">format_quote</span>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={100}>
                        <blockquote className="text-2xl md:text-3xl font-display font-medium leading-relaxed italic text-text-light dark:text-text-dark">
                            "No vendemos herramientas de IA. Vendemos orden. La herramienta es irrelevante si el proceso subyacente es un caos. Orden antes que Herramienta."
                        </blockquote>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200} className="mt-8 flex items-center justify-center space-x-4">
                        <div className="h-14 w-14 rounded-full bg-gray-300 overflow-hidden ring-2 ring-primary/20 dark:ring-primary/20">
                            <Image alt="Angel Salazar" className="h-full w-full object-cover" src="https://picsum.photos/seed/authorshot/100/100" width={100} height={100} data-ai-hint="man portrait"/>
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-lg text-text-light dark:text-text-dark">Angel Salazar</div>
                            <div className="text-sm text-primary font-bold">Fundador &amp; Consultor Principal</div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32 flex-grow">
                {caseStudies.map((study, index) => (
                    <div key={study.id}>
                        <CaseStudy study={study} index={index} />
                        {index < caseStudies.length - 1 && <hr className="border-gray-200 dark:border-gray-800 mt-32"/>}
                    </div>
                ))}
            </main>

            <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary opacity-30 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary opacity-10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <AnimateOnScroll><h2 className="text-4xl font-display font-bold mb-6">Patrones Compartidos</h2></AnimateOnScroll>
                            <AnimateOnScroll delay={100}><p className="text-gray-300 mb-10 text-lg leading-relaxed">Tras analizar más de 50 implementaciones, el 90% de los fallos no son tecnológicos, son culturales y estructurales.</p></AnimateOnScroll>
                            <div className="space-y-8">
                                <AnimateOnScroll delay={200} className="flex">
                                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30"><span className="material-symbols-outlined text-primary">storage</span></div>
                                    <div className="ml-5"><h4 className="text-xl font-bold text-white">Datos Sucios = IA Tonta</h4><p className="text-gray-400 text-base mt-1">Sin una gobernanza de datos previa, cualquier modelo fallará.</p></div>
                                </AnimateOnScroll>
                                <AnimateOnScroll delay={300} className="flex">
                                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30"><span className="material-symbols-outlined text-primary">psychology</span></div>
                                    <div className="ml-5"><h4 className="text-xl font-bold text-white">Expectativa vs Realidad</h4><p className="text-gray-400 text-base mt-1">La IA no es magia, es estadística. Entender esto es crucial para el equipo directivo.</p></div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                        <AnimateOnScroll delay={200} className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 text-center relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6 border border-primary/20">Métrica Clave</span>
                            <h3 className="text-2xl font-medium text-gray-300 mb-2">Multiplicador Común</h3>
                            <div className="text-8xl font-display font-bold text-white tracking-tighter">2.5x</div>
                            <p className="mt-6 text-gray-400 max-w-xs mx-auto leading-relaxed">Las empresas que ordenan sus procesos *antes* de implementar IA ven un retorno 2.5 veces mayor que las que intentan automatizar el caos.</p>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
            
            <section className="py-24 bg-background-light dark:bg-background-dark text-center" id="contact">
                <div className="max-w-3xl mx-auto px-4">
                    <AnimateOnScroll><h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-text-light dark:text-text-dark">¿Tu empresa está lista para escalar?</h2></AnimateOnScroll>
                    <AnimateOnScroll delay={100}><p className="text-xl text-text-muted-light dark:text-text-muted-dark mb-10">Deja de adivinar. Hagamos una auditoría de viabilidad y encontremos dónde está tu ROI oculto.</p></AnimateOnScroll>
                    <AnimateOnScroll delay={200}>
                    <Button asChild size="lg" className="text-lg font-bold py-7 px-10 rounded-xl shadow-xl shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300 group">
                        <Link href="/diagnostico">
                            Descubre el ROI Potencial para Tu Empresa
                            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </Button>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={300}><p className="mt-6 text-sm text-text-muted-light dark:text-text-muted-dark">Agenda limitada a 3 consultorías por mes.</p></AnimateOnScroll>
                </div>
            </section>
        </div>
    );
}
