import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  progress: {
    completedQuizzes: { type: Number, default: 0 },
    averageScore: { type: Number, default: 0 },
    studyStreak: { type: Number, default: 0 },
    lastStudyDate: { type: Date },
  },
  studyPlan: {
    topics: [String],
    currentLevel: { type: String, default: 'beginner' },
    weeklyGoals: [String],
  },
  quizHistory: [{
    quizId: String,
    score: Number,
    completedAt: Date,
  }],
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
