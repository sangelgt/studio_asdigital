"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { generateAIRoadmap, GenerateAIRoadmapInput } from "@/ai/flows/generate-ai-roadmap";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  workEmail: z.string().email("Por favor ingrese un email empresarial válido."),
  industry: z.string().min(1, "Por favor seleccione una industria."),
  companySize: z.string().min(1, "Por favor seleccione el tamaño de la empresa."),
  existingTech: z.string().min(3, "Describa brevemente su tecnología existente."),
  frustration: z.string().min(10, "La descripción debe tener al menos 10 caracteres."),
});

type FormValues = z.infer<typeof formSchema>;

export function DiagnosticForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      industry: "",
      companySize: "",
      existingTech: "",
      frustration: "",
    },
  });

  function onSubmit(values: FormValues) {
    startTransition(async () => {
      const input: GenerateAIRoadmapInput = {
        businessNeeds: values.frustration,
        industry: values.industry,
        companySize: values.companySize,
        existingTech: values.existingTech,
      };
      
      try {
        const response = await generateAIRoadmap(input);
        setResult(response.roadmap);
      } catch (error) {
        console.error("Error generating roadmap:", error);
        toast({
          title: "Error al generar el diagnóstico",
          description: "Hubo un problema al contactar al servicio de IA. Por favor, intente de nuevo más tarde.",
          variant: "destructive",
        });
      }
    });
  }
  
  if (result) {
    return (
      <Card className="bg-primary/5 dark:bg-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">route</span>
            Su Hoja de Ruta Personalizada
          </CardTitle>
          <CardDescription>
            Basado en sus respuestas, aquí tiene un plan de acción inicial.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap font-sans">
            {result}
          </div>
          <Button onClick={() => setResult(null)} className="w-full mt-6">
            Generar un nuevo diagnóstico
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre completo <span aria-hidden="true" className="text-red-500">*</span></FormLabel>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors !text-[20px]">person</span>
                </div>
                <FormControl>
                  <Input placeholder="Ej. Juan Pérez" {...field} className="pl-10 py-6" />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email empresarial <span aria-hidden="true" className="text-red-500">*</span></FormLabel>
               <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors !text-[20px]">mail</span>
                </div>
                <FormControl>
                  <Input type="email" placeholder="nombre@empresa.com" {...field} className="pl-10 py-6"/>
                </FormControl>
              </div>
              <FormDescription className="flex items-center gap-1.5 mt-1">
                <span className="material-symbols-outlined !text-[14px]">lock</span>
                Solo correos corporativos. Datos protegidos.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industria de la Empresa <span aria-hidden="true" className="text-red-500">*</span></FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors !text-[20px]">domain</span>
                    </div>
                    <SelectTrigger className="pl-10 py-6">
                      <SelectValue placeholder="Seleccione una opción" />
                    </SelectTrigger>
                  </div>
                </FormControl>
                <SelectContent>
                  <SelectItem value="finanzas">Servicios Financieros / Fintech</SelectItem>
                  <SelectItem value="salud">Salud / Pharma</SelectItem>
                  <SelectItem value="retail">Retail / E-commerce</SelectItem>
                  <SelectItem value="manufactura">Manufactura / Logística</SelectItem>
                  <SelectItem value="tecnologia">Tecnología / SaaS</SelectItem>
                  <SelectItem value="servicios">Servicios Profesionales</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="companySize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tamaño de la empresa <span aria-hidden="true" className="text-red-500">*</span></FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                    <SelectTrigger className="py-6">
                      <SelectValue placeholder="Seleccione el tamaño" />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1-10">1-10 empleados</SelectItem>
                  <SelectItem value="11-50">11-50 empleados</SelectItem>
                  <SelectItem value="51-200">51-200 empleados</SelectItem>
                  <SelectItem value="201-1000">201-1000 empleados</SelectItem>
                  <SelectItem value="1000+">1000+ empleados</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="existingTech"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tecnología existente <span aria-hidden="true" className="text-red-500">*</span></FormLabel>
               <FormControl>
                <Input placeholder="Ej: Salesforce CRM, SAP, sitio en Shopify" {...field} className="py-6" />
              </FormControl>
              <FormDescription>
                Mencione las herramientas clave que utiliza su empresa.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="frustration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Principal frustración con IA actual <span aria-hidden="true" className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ej. Implementamos herramientas pero no vemos retorno de inversión claro..."
                  rows={4}
                  {...field}
                />
              </FormControl>
               <FormDescription>
                Esto nos ayudará a entender sus necesidades de negocio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-4">
          <Button type="submit" className="w-full text-lg py-7" disabled={isPending}>
            {isPending ? (
              <>
                <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                Generando diagnóstico...
              </>
            ) : (
              <>
                Obtener mi Diagnóstico de ROI
                <span className="material-symbols-outlined font-bold ml-2">arrow_forward</span>
              </>
            )}
          </Button>
          <p className="text-center text-xs text-slate-400 mt-5">
            Al enviar este formulario, acepta nuestra <Link href="/politica-de-privacidad" className="underline hover:text-primary transition-colors">Política de Privacidad</Link>.
          </p>
        </div>
      </form>
    </Form>
  );
}
