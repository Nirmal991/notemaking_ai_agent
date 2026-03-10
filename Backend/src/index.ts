import dotenv from 'dotenv';
dotenv.config();
console.log("Gemini Key:", process.env.GEMINI_API_KEY);
import { app } from './app.js';

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})