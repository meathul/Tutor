import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as fs from 'fs';
import * as path from 'path';

export class LearningModel {
  private model: use.UniversalSentenceEncoder | null = null;
  private knowledgeBase: Array<{ text: string; embedding: number[] }> = [];

  async initialize() {
    this.model = await use.load();
  }

  async trainOnText(text: string) {
    if (!this.model) {
      await this.initialize();
    }

    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const embeddings = await this.model!.embed(sentences);
    
    const embeddingArray = await embeddings.array();
    embeddings.dispose(); // Clean up tensor

    sentences.forEach((sentence, i) => {
      this.knowledgeBase.push({
        text: sentence.trim(),
        embedding: Array.from(embeddingArray[i])
      });
    });
  }

  async trainOnFile(filePath: string) {
    const content = fs.readFileSync(filePath, 'utf-8');
    await this.trainOnText(content);
  }

  async askQuestion(question: string): Promise<string> {
    if (!this.model) {
      await this.initialize();
    }

    const questionEmbedding = await this.model!.embed([question]);
    const questionVector = await questionEmbedding.array();
    questionEmbedding.dispose(); // Clean up tensor

    let bestMatch = '';
    let highestSimilarity = -1;

    for (const entry of this.knowledgeBase) {
      const similarity = this.cosineSimilarity(
        Array.from(questionVector[0]),
        entry.embedding
      );
      if (similarity > highestSimilarity) {
        highestSimilarity = similarity;
        bestMatch = entry.text;
      }
    }

    return highestSimilarity > 0.5 ? bestMatch : "I'm not sure about that.";
  }

  private cosineSimilarity(vec1: number[], vec2: number[]): number {
    const dotProduct = vec1.reduce((acc, val, i) => acc + val * vec2[i], 0);
    const mag1 = Math.sqrt(vec1.reduce((acc, val) => acc + val * val, 0));
    const mag2 = Math.sqrt(vec2.reduce((acc, val) => acc + val * val, 0));
    return dotProduct / (mag1 * mag2);
  }
}
