import { GroqChat } from '@langchain/groq';
import { ChatPromptTemplate } from 'langchain/prompts';

export class AIService {
  private model: GroqChat;

  constructor() {
    this.model = new GroqChat({
      apiKey: process.env.GROQ_API_KEY,
      temperature: 0.7,
    });
  }

  async generateQuiz(topic: string, difficulty: string) {
    const prompt = ChatPromptTemplate.fromTemplate(`
      Generate a quiz about {topic} at {difficulty} difficulty level.
      Include 5 multiple choice questions with explanations.
    `);

    const response = await this.model.invoke({
      messages: await prompt.formatMessages({
        topic,
        difficulty,
      }),
    });

    return response;
  }

  async generateExplanation(question: string, userAnswer: string) {
    const prompt = ChatPromptTemplate.fromTemplate(`
      Explain why the answer to "{question}" is {userAnswer}.
      Provide a detailed but concise explanation.
    `);

    const response = await this.model.invoke({
      messages: await prompt.formatMessages({
        question,
        userAnswer,
      }),
    });

    return response;
  }
}

export const aiService = new AIService();
