import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const metadata = {
  title: 'Términos de Uso - Angel Salazar Digital',
  description: 'Términos de uso y condiciones legales para los servicios de consultoría de Angel Salazar Digital.',
};

const sections = [
  {
    num: "1",
    title: "Marco de Gobernanza y el Rol del AI Owner",
    description: "La implementación de Inteligencia Artificial requiere un responsable humano claro. No iniciamos proyectos sin estructura de mando definida.",
    points: [
      "<strong>Designación obligatoria:</strong> El cliente debe nombrar un AI Owner con autoridad para tomar decisiones.",
      "<strong>Aprobación por métricas:</strong> Los hitos se aprueban con KPIs objetivos, no con opiniones subjetivas.",
      "<strong>Cláusula \"No-Tool-First\":</strong> Nos reservamos el derecho de detener la implementación si los procesos base no están optimizados."
    ]
  },
  {
    num: "2",
    title: "Propiedad Intelectual y Prevención de la Amnesia",
    description: "Su conocimiento es su activo más valioso. Nosotros estructuramos ese activo, no nos lo apropiamos.",
    points: [
      "<strong>Propiedad del Cliente:</strong> Todo el 'know-how', datos y outputs generados pertenecen 100% al cliente.",
      "<strong>Sin Dependencia:</strong> Entregamos documentación completa para evitar la dependencia eterna del consultor.",
      "<strong>Licencia de Frameworks:</strong> Se otorga licencia de uso perpetua sobre nuestros frameworks estratégicos propietarios para uso interno."
    ]
  },
  {
    num: "3",
    title: "Limitaciones de Responsabilidad y 'Transparencia Radical'",
    description: "Hablamos claro sobre lo que la IA puede hacer hoy y lo que no. Prometemos esfuerzo y método, no magia.",
    points: [
      "<strong>Garantía de Servicio:</strong> Basada en la aplicación rigurosa de la metodología, no en predicciones de mercado incontrolables.",
      "<strong>Tecnología de Terceros:</strong> No nos responsabilizamos por alucinaciones o cambios en modelos de terceros (ej. OpenAI, Anthropic).",
      "<strong>Compromiso de Rectificación:</strong> Corrección inmediata y prioritaria ante errores derivados de nuestra implementación estratégica."
    ]
  },
  {
    num: "4",
    title: "Accesibilidad y Estándares Técnicos",
    description: "El compromiso con la inclusión no es opcional; es parte de nuestro ADN operativo y contractual.",
    points: [
      "<strong>Cumplimiento Normativo:</strong> Adherencia estricta a WCAG 2.2 Nivel AA en todos los entregables digitales.",
      "<strong>Formatos Universales:</strong> Documentación técnica entregada en formatos remediados para lectores de pantalla.",
      "<strong>Soporte Inclusivo:</strong> Canales de soporte dedicados y adaptados para usuarios con discapacidades."
    ]
  }
];

const solutions = [
  {
    icon: 'error_outline',
    title: 'El Problema',
    description: 'La mayoría de los contratos tecnológicos son laberintos de jerga legal diseñados para confundir, ocultando responsabilidades clave bajo cláusulas genéricas.',
    color: 'red'
  },
  {
    icon: 'warning',
    title: 'El Riesgo',
    description: 'En IA, esta ambigüedad es fatal. Sin definir un "AI Owner" claro, las inversiones se diluyen en herramientas sin retorno, creando fricción y desconfianza operativa.',
    color: 'orange'
  },
  {
    icon: 'check',
    title: 'Nuestra Solución',
    description: 'Nuestros términos formalizan la metodología "Orden antes que Herramienta". Definimos cómo colaboramos para asegurar rentabilidad medible desde el día uno.',
    color: 'primary'
  }
];

export default function TerminosYCondicionesPage() {
  return (
    <>
      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 py-12 md:py-20">
        <AnimateOnScroll className="flex flex-col gap-8 max-w-[960px]">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
            <span className="material-symbols-outlined text-primary text-[18px]">gavel</span>
            <span className="text-xs font-bold uppercase tracking-wide text-primary">Marco Legal & Ético</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-tight tracking-[-0.033em] text-text-main dark:text-white">
            Claridad Legal para Sistemas de Rentabilidad Real.
          </h1>
          <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary dark:text-gray-300 max-w-[720px]">
            Establecemos las reglas del juego para una alianza transparente, accesible y enfocada en resultados, no en letra pequeña.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button asChild size="lg" className="h-12 px-6 shadow-lg shadow-primary/20 w-full sm:w-auto hover:-translate-y-0.5 transition-transform">
              <a href="#"><span className="material-symbols-outlined mr-2">download</span> Descargar Resumen en PDF Accesible</a>
            </Button>
          </div>
          <div className="flex items-center gap-2 text-text-secondary dark:text-gray-500 text-sm mt-2">
            <span className="material-symbols-outlined text-[18px]">accessibility_new</span>
            <span>Documento remediado para lectores de pantalla según estándares internacionales.</span>
          </div>
        </AnimateOnScroll>
      </section>

      <section className="w-full bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark py-16">
        <div className="w-full max-w-[1280px] px-4 md:px-10 lg:px-40 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {solutions.map((item, index) => (
              <AnimateOnScroll key={index} delay={index * 150} className="flex flex-col gap-4 p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark transition-transform hover:scale-[1.02] duration-300">
                <div className={`size-12 rounded-full flex items-center justify-center mb-2
                  ${item.color === 'red' ? 'bg-red-100 text-red-700' : ''}
                  ${item.color === 'orange' ? 'bg-orange-100 text-orange-700' : ''}
                  ${item.color === 'primary' ? 'bg-primary text-white shadow-lg shadow-primary/30' : ''}`}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white tracking-tight">{item.title}</h3>
                <p className="text-text-secondary dark:text-gray-400 leading-relaxed">{item.description}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[960px] mx-auto px-4 md:px-10 lg:px-40 py-20">
        <div className="flex flex-col gap-16">
          {sections.map((section, index) => (
            <AnimateOnScroll key={index} className="group">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex-none flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary font-bold text-lg border border-primary/20 shadow-sm">{section.num}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white tracking-tight">{section.title}</h2>
              </div>
              <div className="pl-14 border-l-2 border-border-light dark:border-border-dark group-hover:border-primary/30 transition-colors duration-300">
                <p className="text-lg text-text-secondary dark:text-gray-300 mb-6 leading-relaxed">{section.description}</p>
                <ul className="space-y-4">
                  {section.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right_alt</span>
                      <span className="text-text-secondary dark:text-gray-400" dangerouslySetInnerHTML={{ __html: point }} />
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 pb-20 pt-10">
        <AnimateOnScroll className="flex flex-col items-center justify-center text-center gap-8 bg-surface-light dark:bg-surface-dark rounded-2xl p-10 md:p-16 border border-border-light dark:border-border-dark shadow-xl shadow-primary/5">
          <div className="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-4xl">support_agent</span>
          </div>
          <div className="flex flex-col gap-4 max-w-[720px]">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-text-main dark:text-white tracking-tight">
              ¿Tiene dudas sobre una cláusula? <br/>Hablemos de humano a humano.
            </h2>
            <p className="text-lg text-text-secondary dark:text-gray-300">
              La transparencia construye confianza. Estamos listos para revisar cada punto con usted antes de comenzar.
            </p>
          </div>
          <Button size="lg" asChild className="h-14 px-8 text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-transform">
            <Link href="/diagnostico">Acepto los Términos y Comienzo el Diagnóstico</Link>
          </Button>
          <p className="text-xs text-text-secondary dark:text-gray-500 max-w-md">
            Al hacer clic, confirma haber leído nuestra <Link href="/politica-de-privacidad" className="underline hover:text-primary transition-colors">Política de Privacidad</Link> y acepta el tratamiento de sus datos conforme a la normativa vigente.
          </p>
        </AnimateOnScroll>
      </section>
    </>
  );
}
