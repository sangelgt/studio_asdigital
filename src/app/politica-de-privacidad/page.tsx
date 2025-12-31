import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | Angel Salazar Digital',
  description: 'Gobernanza de datos alineada con nuestra metodología para transformar inversiones en IA en rentabilidad medible y segura.',
};

const userRights = [
  {
    icon: 'folder_open',
    title: 'Acceso',
    description: 'Solicitar una copia detallada de los datos personales que almacenamos sobre usted en un formato estructurado y legible.',
  },
  {
    icon: 'edit_note',
    title: 'Rectificación',
    description: 'Corregir información inexacta, incompleta o desactualizada en nuestras bases de datos para asegurar la integridad.',
  },
  {
    icon: 'delete_forever',
    title: 'Supresión',
    description: 'Solicitar el "Derecho al Olvido", eliminando sus datos cuando ya no sean necesarios para la finalidad recolectada.',
  },
  {
    icon: 'pan_tool',
    title: 'Oposición',
    description: 'Oponerse al tratamiento de sus datos para fines específicos, como marketing directo o elaboración de perfiles de usuario.',
  },
];

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative flex flex-col items-center justify-center p-4 py-16 md:py-20 bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-[960px] flex flex-col gap-6">
          <AnimateOnScroll
            className="overflow-hidden rounded-xl shadow-2xl relative min-h-[420px] flex flex-col items-center justify-center p-8 md:p-20 text-center group"
            data-ai-hint="abstract geometric"
          >
            {/* CORRECCIÓN: El fondo se maneja en un div interno para evitar el error de TypeScript */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'linear-gradient(rgba(16, 22, 34, 0.8) 0%, rgba(91, 33, 182, 0.5) 100%), url("https://picsum.photos/seed/privacy-bg/1200/600")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            
            {/* Contenido con z-index superior para estar sobre el fondo */}
            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-display font-bold uppercase tracking-wider mb-8 hover:bg-white/20 transition-colors cursor-default">
                <span className="material-symbols-outlined text-base">shield</span>
                Política de Privacidad
              </span>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight tracking-tight mb-6 max-w-3xl">
                Su Privacidad, Nuestro Compromiso con el Orden
              </h1>
              <h2 className="text-slate-100 text-lg md:text-xl font-body font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-opacity-90">
                Gobernanza de datos alineada con nuestra metodología para transformar inversiones en IA en rentabilidad medible y segura.
              </h2>
              <Button asChild className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-display font-bold transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
                <Link href="#user-rights">
                  <span className="material-symbols-outlined text-xl">gavel</span>
                  <span>Conozca sus derechos</span>
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="flex justify-center pb-24 px-4 md:px-8">
        <div className="flex flex-col max-w-[800px] w-full gap-16">
          <AnimateOnScroll>
            <article>
              <div className="flex items-center gap-2 mb-4 text-primary">
                <span className="material-symbols-outlined">info</span>
                <span className="font-display font-bold text-sm uppercase tracking-wide">Introducción</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed">
                En Angel Salazar Digital, creemos que la seguridad de la información es el pilar fundamental del ROI en Inteligencia Artificial. No existe rentabilidad sostenible sin una base de confianza. Esta política detalla cómo recopilamos, usamos y protegemos sus datos bajo estrictos estándares de gobernanza, aplicando nuestra filosofía de <span className="text-primary font-bold">"Orden antes que Herramienta"</span>.
              </p>
            </article>
          </AnimateOnScroll>

          <section>
            <AnimateOnScroll>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">database</span>
                </span>
                Datos que Recopilamos
              </h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimateOnScroll delay={100} className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="mb-4 text-primary"><span className="material-symbols-outlined text-4xl">person</span></div>
                <h4 className="font-display font-bold text-xl mb-3 text-slate-900 dark:text-white">Identificación Personal</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Nombre, correo electrónico, cargo y empresa, necesarios para la prestación de nuestros servicios de consultoría.</p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200} className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="mb-4 text-primary"><span className="material-symbols-outlined text-4xl">analytics</span></div>
                <h4 className="font-display font-bold text-xl mb-3 text-slate-900 dark:text-white">Datos de Uso y Navegación</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Información sobre cómo interactúa con nuestro sitio web, dirección IP y tipo de navegador para mejorar la experiencia.</p>
              </AnimateOnScroll>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
            <AnimateOnScroll delay={300} className="flex-1">
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Finalidad del Tratamiento</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Utilizamos sus datos exclusivamente para proveer servicios de consultoría, gestionar la relación comercial y enviar información relevante sobre tendencias en IA y ROI.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300"><span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span><span>Mejora continua de nuestros modelos de consultoría.</span></li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300"><span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span><span>Comunicaciones sobre actualizaciones legales en IA.</span></li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300"><span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span><span>Cumplimiento de obligaciones contractuales.</span></li>
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll delay={400} className="md:w-5/12 bg-slate-100 dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
              <h4 className="font-display font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">lock</span>Seguridad
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Aplicamos protocolos de encriptación y acceso restringido. Sus datos no se venden a terceros y se almacenan en servidores que cumplen con GDPR y CCPA.
              </p>
            </AnimateOnScroll>
          </section>

          <section id="user-rights">
            <AnimateOnScroll>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">Derechos del Usuario</h3>
                <span className="text-sm px-4 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full font-display font-bold tracking-wide">ARCO</span>
              </div>
            </AnimateOnScroll>
            <div className="flex flex-col gap-6">
              {userRights.map((right, index) => (
                <AnimateOnScroll key={right.title} delay={100 * index} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 pb-6 border-b border-slate-100 dark:border-slate-800/50 last:border-b-0">
                  <div className="md:w-1/4 shrink-0">
                    <p className="text-primary dark:text-purple-400 font-display font-bold text-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-2xl">{right.icon}</span>{right.title}
                    </p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{right.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </section>

          <AnimateOnScroll>
            <section className="bg-primary text-white rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-primary/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">¿Dudas sobre su privacidad?</h3>
                <p className="text-purple-100 max-w-lg text-lg leading-relaxed">
                  Nuestro Delegado de Protección de Datos está disponible para atender cualquier solicitud relacionada con el manejo de su información.
                </p>
              </div>
              <Button asChild variant="secondary" className="relative z-10 shrink-0 bg-white text-primary hover:bg-purple-50 px-8 py-4 rounded-lg font-display font-bold transition-all shadow-lg flex items-center gap-3 group">
                <a href="mailto:privacy@angelsalazardigital.com">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">mail</span>
                  privacy@angelsalazardigital.com
                </a>
              </Button>
            </section>
          </AnimateOnScroll>
        </div>
      </div>
    </main>
  );
}
