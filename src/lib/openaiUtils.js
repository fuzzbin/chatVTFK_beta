import OpenAI from 'openai';
import { env } from '$env/dynamic/public';

const OPENAI_API_KEY = env.PUBLIC_OPENAI_API_KEY;
const ASSISTANT = import.meta.env.VITE_ASSISTANT;

const openai = new OpenAI({apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true});

export const plainChat = async (prompt, temperature, kontekst) => {
    const completion = await openai.chat.completions.create({
        messages: [{"role": "user", "content": prompt},],
        model: "gpt-3.5-turbo",
        temperature,
      });
      console.log(completion.choices[0].message.content);
      return completion.choices[0].message.content;
    }

// Valg av assistent
export const setAssistantID = (newAssistantId) => {
  env.ASSISTANT = newAssistantId;
  console.log(ASSISTANT);
}

// Oppretter ny tråd
export const createNewThread = async () => {
  const thread = await openai.beta.threads.create();
  console.log(thread);
  return thread;
  };

export const askDok = async (assistantID, threadID, prompt) => {
  console.log("Jadda!!!")
  console.log(assistantID || ASSISTANT, threadID, prompt);
  await openai.beta.threads.messages.create(threadID, {
    role: "user",
    content: prompt,
  });

const run = await openai.beta.threads.runs.create(threadID, {
  assistant_id: assistantID,
  instructions: "Du er en hyggelig assistent som alltid svarer på norsk. Alle svar skal ta utgangspunkt filvedlegget. Avslutt alltid responsen med: 'Ha en fortsatt fin dag!'.",
});

let response = new Promise((resolve, reject) => {
  let intervalId = setInterval(async () => {
    const updatedRun = await openai.beta.threads.runs.retrieve(
      threadID,
      run.id
    );

    console.log("Venter på svar... ", updatedRun.status);
    if (updatedRun.status === "completed") {
      clearInterval(intervalId);
      resolve((await openai.beta.threads.messages.list(threadID)).data[0].content[0].text.value);
    }
  }, 1000);
});
return response;
};

export const chat = async (spm) => {
const completion = await openai.chat.completions.create({
  messages: [{ role: "user", content: spm }],
  model: "gpt-3.5-turbo",
});

console.log(completion.choices[0].message.content);
return completion.choices[0].message.content
}

export const createSpeech = async (speech) => {
const mp3 = await openai.audio.speech.create({
  model: "tts-1",
  voice: "alloy",
  input: speech,
  voice: "shimmer",
})
return mp3.arrayBuffer();
};


