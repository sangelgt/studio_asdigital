'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating personalized AI recommendations.
 *
 * - generatePersonalizedAIRecommendations - An async function that takes user input and returns tailored AI management recommendations.
 * - PersonalizedAIRecommendationsInput - The input type for the generatePersonalizedAIRecommendations function.
 * - PersonalizedAIRecommendationsOutput - The output type for the generatePersonalizedAIRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedAIRecommendationsInputSchema = z.object({
  revenueGoal: z
    .string()
    .describe('The specific revenue goal the user wants to achieve.'),
  businessType: z.string().describe('The type of business the user has.'),
  existingAI: z.string().describe('The existing AI implementations in the business, if any.'),
});

export type PersonalizedAIRecommendationsInput = z.infer<typeof PersonalizedAIRecommendationsInputSchema>;

const PersonalizedAIRecommendationsOutputSchema = z.object({
  recommendations: z.string().describe('A step-by-step guide with tailored recommendations for effectively managing AI and achieving the specified revenue goal.'),
});

export type PersonalizedAIRecommendationsOutput = z.infer<typeof PersonalizedAIRecommendationsOutputSchema>;

export async function generatePersonalizedAIRecommendations(
  input: PersonalizedAIRecommendationsInput
): Promise<PersonalizedAIRecommendationsOutput> {
  return personalizedAIRecommendationsFlow(input);
}

const personalizedAIRecommendationsPrompt = ai.definePrompt({
  name: 'personalizedAIRecommendationsPrompt',
  input: {schema: PersonalizedAIRecommendationsInputSchema},
  output: {schema: PersonalizedAIRecommendationsOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized recommendations for businesses looking to leverage AI to achieve their revenue goals.

  Based on the information provided, generate a step-by-step guide that provides tailored recommendations for effectively managing AI and achieving the specified revenue goal.

  Revenue Goal: {{{revenueGoal}}}
  Business Type: {{{businessType}}}
  Existing AI Implementations: {{{existingAI}}}

  The guide should be clear, concise, and actionable. Focus on practical steps that the user can take to improve their AI management and increase their chances of reaching their revenue goal.
  Format the output as a numbered list.
  `,
});

const personalizedAIRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedAIRecommendationsFlow',
    inputSchema: PersonalizedAIRecommendationsInputSchema,
    outputSchema: PersonalizedAIRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await personalizedAIRecommendationsPrompt(input);
    return output!;
  }
);
