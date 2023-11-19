import OpenAI from 'openai';
import { OpenAIStream } from 'ai';

export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().openaiApiKey;
  if (!apiKey) throw new Error('Missing OpenAI API key');
  const openai = new OpenAI();

  return defineEventHandler(async event => {
    const { prompt } = (await readBody(event));
    const { messages } = (await readBody(event));
    const allMessages = messages.map(message => ({
      content: message.content,
      role: message.role,
    }))
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
          role: 'system',
          content: prompt
        },
        ...allMessages
      ]
    });
    return OpenAIStream(response);
  });
});
