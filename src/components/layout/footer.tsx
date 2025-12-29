import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
               <Image
                  src="/logo.png"
                  alt="Angel Salazar Digital Logo"
                  width={384}
                  height={128}
                  className="h-32 w-auto"
                />
            </div>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed">
              Transformando negocios mediante inteligencia artificial aplicada.<br />
              <span className="font-semibold text-primary">Order before Tool.</span>
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/angel-salazar-066749284" target="_blank" rel="noopener noreferrer" className="text-text-muted-light hover:text-primary transition-colors duration-200" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579988355763" target="_blank" rel="noopener noreferrer" className="text-text-muted-light hover:text-primary transition-colors duration-200" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.5c0-.849.221-1.5 1.5-1.5h2.5v-5h-3.5c-3.47,0-5,2.165-5,5v3Z"/></svg>
              </a>
              <a href="https://www.instagram.com/sangelgt/" target="_blank" rel="noopener noreferrer" className="text-text-muted-light hover:text-primary transition-colors duration-200" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-sans font-bold text-lg mb-4 text-text-light dark:text-text-dark">Navegación</h3>
            <ul className="space-y-3 text-sm text-text-muted-light dark:text-text-muted-dark font-medium">
              <li><Link className="hover:text-primary transition-colors block" href="/">Inicio</Link></li>
              <li><Link className="hover:text-primary transition-colors block" href="/metodologia">Metodología</Link></li>
              <li><Link className="hover:text-primary transition-colors block" href="/casos-de-exito">Casos de Éxito</Link></li>
              <li><Link className="hover:text-primary transition-colors block" href="/recursos">Recursos</Link></li>
              <li><Link className="hover:text-primary transition-colors block" href="/diagnostico">Diagnóstico</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans font-bold text-lg mb-4 text-text-light dark:text-text-dark">Contacto</h3>
            <ul className="space-y-4 text-sm text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center group cursor-pointer">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-sm">email</span>
                </div>
                <span className="group-hover:text-text-light dark:group-hover:text-text-dark transition-colors">soporte_asdigital@proton.me</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                </div>
                <span>Lun - Vie: 9:00 - 18:00 CET</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans font-bold text-lg mb-4 text-text-light dark:text-text-dark">Legal</h3>
            <ul className="space-y-3 text-sm text-text-muted-light dark:text-text-muted-dark font-medium">
              <li><Link className="hover:text-primary transition-colors block" href="/declaracion-de-accesibilidad">Declaración de Accesibilidad</Link></li>
              <li><Link className="hover:text-primary transition-colors block" href="/politica-de-privacidad">Política de Privacidad</Link></li>
              <li><Link className="hover:text-primary transition-colors block" href="/terminos-y-condiciones">Términos y Condiciones</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted-light dark:text-text-muted-dark">
          <div className="mb-4 md:mb-0">
            © 2024 Angel Salazar Digital. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-xs opacity-75">
              <span className="material-symbols-outlined text-sm mr-1">location_on</span>
              Madrid, España
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
