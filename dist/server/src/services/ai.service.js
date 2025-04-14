"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiService = exports.AIService = void 0;
const groq_1 = require("@langchain/groq");
const prompts_1 = require("langchain/prompts");
class AIService {
    constructor() {
        this.model = new groq_1.GroqChat({
            apiKey: process.env.GROQ_API_KEY,
            temperature: 0.7,
        });
    }
    async generateQuiz(topic, difficulty) {
        const prompt = prompts_1.ChatPromptTemplate.fromTemplate(`
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
    async generateExplanation(question, userAnswer) {
        const prompt = prompts_1.ChatPromptTemplate.fromTemplate(`
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
exports.AIService = AIService;
exports.aiService = new AIService();
