import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DiagnosticForm } from './diagnostic-form';

export const metadata = {
    title: 'Diagnóstico de ROI con IA | Angel Salazar Digital',
    description: 'Solicite su análisis preliminar de ROI y reciba una hoja de ruta clara hacia la rentabilidad con IA, sin riesgos técnicos.',
};

export default function DiagnosticoPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      <main className="flex-grow flex flex-col items-center justify-center py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-10 lg:sticky lg:top-32 pt-4">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/50 dark:bg-primary/20 text-primary dark:text-purple-200 text-sm font-bold border border-purple-200 dark:border-primary/30 backdrop-blur-sm">
                <span className="material-symbols-outlined filled !text-[18px]">verified</span>
                Diagnóstico de ROI con IA
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                ¿Cuánto está dejando de ganar hoy por la falta de un sistema?
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-medium">
                Su Primer Entregable: Una Hoja de Ruta clara hacia la Rentabilidad sin riesgos técnicos.
              </p>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-card">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                <div className="p-2 bg-purple-50 dark:bg-white/5 rounded-lg text-primary">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                Metodología "Order before Tool"
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-0.5 filled !text-[24px]">check_circle</span>
                  <span className="text-base text-slate-700 dark:text-slate-300">Identificación precisa de fugas de rentabilidad en sus procesos actuales.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-0.5 filled !text-[24px]">check_circle</span>
                  <span className="text-base text-slate-700 dark:text-slate-300">Priorización de herramientas IA basada estrictamente en impacto financiero.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-0.5 filled !text-[24px]">check_circle</span>
                  <span className="text-base text-slate-700 dark:text-slate-300">Plan de implementación paso a paso, diseñado para eliminar riesgos.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative z-10">
            <Card className="w-full max-w-[580px] mx-auto lg:mr-0 rounded-2xl shadow-2xl border-slate-200 dark:border-slate-700">
              <CardHeader className="p-6 md:p-8 lg:p-10 pb-6 border-b border-slate-100 dark:border-slate-700">
                <CardTitle className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">Solicitar Diagnóstico</CardTitle>
                <CardDescription className="text-slate-500 dark:text-slate-400 text-base">Complete el formulario para recibir su análisis preliminar de ROI.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 lg:p-10 pt-8">
                <DiagnosticForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
