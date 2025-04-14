"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.default.Schema({
    learningProgress: {
        slidesCompleted: { type: [String], default: [] },
        notebooksCompleted: { type: [String], default: [] },
        questionsAttempted: { type: Number, default: 0 },
        lastAccessDate: { type: Date, default: Date.now },
    },
    materials: {
        slideSets: [{
                name: { type: String, required: true },
                totalSlides: { type: Number, required: true },
                currentSlide: { type: Number, default: 0 },
            }],
        notebooks: [{
                name: { type: String, required: true },
                completed: { type: Boolean, default: false },
                lastAccessed: { type: Date, default: Date.now },
            }],
        questionPapers: [{
                year: { type: Number, required: true },
                solved: { type: Boolean, default: false },
                score: Number,
                attempts: { type: Number, default: 0 },
            }]
    },
    performance: [{
            materialId: { type: String, required: true },
            materialType: {
                type: String,
                required: true,
                enum: ['slide', 'notebook', 'questionPaper']
            },
            score: Number,
            timeSpent: { type: Number, default: 0 }, // in minutes
            completedAt: { type: Date, default: Date.now },
        }]
}, { timestamps: true });
exports.User = mongoose_1.default.model('User', userSchema);
