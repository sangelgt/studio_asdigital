"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export function DiagnosticForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: 'na1',
          portalId: '50347855',
          formId: '37d449e5-286b-4ae6-8e58-e26753974622',
          target: '#hubspot-form-container'
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div id="hubspot-form-container"></div>
  );
}
