import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMysticalDescription = async (signName: string, element: string, risingSignName?: string): Promise<string> => {
  try {
    const risingContext = risingSignName ? `и подзнак во ${risingSignName}` : '';
    
    const prompt = `
      Ти си мистичен астролог. Корисникот е роден во знакот ${signName} (Елемент: ${element}) ${risingContext}.
      
      Напиши кратко, интересно и малку мистериозно толкување за нивната личност, земајќи го предвид и подзнакот ако е даден.
      Објасни како подзнакот влијае на главниот знак.
      Нека биде забавно и позитивно.
      
      Одговори САМО на Македонски јазик.
      Максимум 3-4 реченици.
      Не користи markdown formatting (bold/italic).
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Gemini Error:", error);
    return `Вие сте ${signName}. Ѕвездите велат дека пред вас е интересен период исполнет со нови можности. Вашата енергија на ${element} ќе ве води напред.`;
  }
};