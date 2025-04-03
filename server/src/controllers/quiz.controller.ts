import { Request, Response } from 'express';
import { aiService } from '../services/ai.service';
import { User } from '../models/User';

export const quizController = {
  async generateQuiz(req: Request, res: Response) {
    try {
      const { topic, difficulty } = req.body;
      const quiz = await aiService.generateQuiz(topic, difficulty);
      res.json(quiz);
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate quiz' });
    }
  },

  async submitQuiz(req: Request, res: Response) {
    try {
      const { userId, quizId, answers, score } = req.body;
      await User.findByIdAndUpdate(userId, {
        $push: {
          quizHistory: {
            quizId,
            score,
            completedAt: new Date(),
          },
        },
        $inc: { 'progress.completedQuizzes': 1 },
      });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to submit quiz' });
    }
  }
};
