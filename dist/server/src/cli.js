"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LearningModel_1 = require("./models/LearningModel");
const readline = require("readline");
const process = require("process");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
async function main() {
    const model = new LearningModel_1.LearningModel();
    console.log('Welcome to the Learning Assistant');
    console.log('1. Train on a text file');
    console.log('2. Ask a question');
    console.log('3. Exit');
    const askQuestion = () => {
        rl.question('\nEnter your choice (1-3): ', async (choice) => {
            switch (choice) {
                case '1':
                    rl.question('Enter the path to your text file: ', async (filePath) => {
                        try {
                            await model.trainOnFile(filePath);
                            console.log('Training completed successfully!');
                        }
                        catch (error) {
                            console.error('Error training model:', error);
                        }
                        askQuestion();
                    });
                    break;
                case '2':
                    rl.question('Enter your question: ', async (question) => {
                        const answer = await model.askQuestion(question);
                        console.log('\nAnswer:', answer);
                        askQuestion();
                    });
                    break;
                case '3':
                    rl.close();
                    process.exit(0);
                    break;
                default:
                    console.log('Invalid choice. Please try again.');
                    askQuestion();
            }
        });
    };
    askQuestion();
}
main().catch(console.error);
