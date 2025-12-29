'use server';

/**
 * @fileOverview An AI roadmap generator flow.
 *
 * - generateAIRoadmap - A function that generates a personalized, actionable roadmap for AI implementation.
 * - GenerateAIRoadmapInput - The input type for the generateAIRoadmap function.
 * - GenerateAIRoadmapOutput - The return type for the generateAIRoadmap function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAIRoadmapInputSchema = z.object({
  businessNeeds: z
    .string()
    .describe('The specific business needs and goals for AI implementation.'),
  industry: z.string().describe('The industry of the business.'),
  companySize: z.string().describe('The size of the company (e.g., small, medium, large).'),
  existingTech: z.string().describe('The existing technology infrastructure.'),
});
export type GenerateAIRoadmapInput = z.infer<typeof GenerateAIRoadmapInputSchema>;

const GenerateAIRoadmapOutputSchema = z.object({
  roadmap: z.string().describe('A personalized, actionable roadmap for AI implementation.'),
});
export type GenerateAIRoadmapOutput = z.infer<typeof GenerateAIRoadmapOutputSchema>;

export async function generateAIRoadmap(input: GenerateAIRoadmapInput): Promise<GenerateAIRoadmapOutput> {
  return generateAIRoadmapFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAIRoadmapPrompt',
  input: {schema: GenerateAIRoadmapInputSchema},
  output: {schema: GenerateAIRoadmapOutputSchema},
  prompt: `You are an AI roadmap generation expert.

  Based on the business needs, industry, company size, and existing technology infrastructure, generate a personalized, actionable roadmap for AI implementation. Make sure the generated road map considers the "Order before Tool" methodology, ensuring a focus on first optimizing existing business processes and then integrating AI tools strategically.

  Business Needs: {{{businessNeeds}}}
  Industry: {{{industry}}}
  Company Size: {{{companySize}}}
  Existing Technology Infrastructure: {{{existingTech}}}

  Roadmap:
`,
});

const generateAIRoadmapFlow = ai.defineFlow(
  {
    name: 'generateAIRoadmapFlow',
    inputSchema: GenerateAIRoadmapInputSchema,
    outputSchema: GenerateAIRoadmapOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
