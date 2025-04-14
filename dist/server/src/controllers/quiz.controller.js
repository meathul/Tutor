"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizController = void 0;
const ai_service_1 = require("../services/ai.service");
const User_1 = require("../models/User");
exports.quizController = {
    async generateQuiz(req, res) {
        try {
            const { topic, difficulty } = req.body;
            const quiz = await ai_service_1.aiService.generateQuiz(topic, difficulty);
            res.json(quiz);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to generate quiz' });
        }
    },
    async submitQuiz(req, res) {
        try {
            const { userId, quizId, answers, score } = req.body;
            await User_1.User.findByIdAndUpdate(userId, {
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
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to submit quiz' });
        }
    }
};
