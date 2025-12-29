"use client";

import React, { useEffect, useRef } from "react";

export function DiagnosticForm() {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const isFormCreated = useRef(false);

  useEffect(() => {
    // Evita que el script se cree más de una vez
    if (isFormCreated.current || !formContainerRef.current) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).hbspt && !isFormCreated.current) {
        (window as any).hbspt.forms.create({
          region: 'na1',
          portalId: '50347855',
          formId: '37d449e5-286b-4ae6-8e58-e26753974622',
          target: '#hubspot-form-container'
        });
        isFormCreated.current = true;
      }
    };

    return () => {
      // Limpia el script si el componente se desmonta
      document.body.removeChild(script);
      isFormCreated.current = false;
      const hubspotForm = formContainerRef.current?.querySelector('iframe');
      if (hubspotForm) {
        formContainerRef.current?.removeChild(hubspotForm);
      }
    }
  }, []);

  return (
    <div id="hubspot-form-container" ref={formContainerRef}></div>
  );
}