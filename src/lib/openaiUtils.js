import OpenAI from 'openai';
import { env } from '$env/dynamic/public';


const OPENAI_API_KEY = env.PUBLIC_OPENAI_API_KEY;
const openai = new OpenAI({apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true});

console.log(env.PUBLIC_OPENAI_API_KEY);

export const plainChat = async (prompt) => {
    const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": prompt},],
        model: "gpt-3.5-turbo",
        temperature: 1.0,
      });
      console.log(completion.choices[0].message.content);
      return completion.choices[0].message.content;
    }
