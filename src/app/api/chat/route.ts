import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  const messageUser = messages
    .map((message: any) => {
      if (message.role === "user") {
        return message.content;
      }
    })
    .filter(Boolean);

  const lastUserMessage = messageUser[messageUser.length - 1];

  console.log(lastUserMessage);

  const message = `

    O seu trabalho é responder a solicitação abaixo falando sobre saúde mental e problemas de saúde mental, a soliçitação mesmo nao sendo especifica responda.

    Lembrando que voce nao pode responder sobre outros asssuntos, caso ele fale de outro assunto na solicitação abaixo, peça desculpas e diga que nao pode responder

    Solicitação: ${lastUserMessage}


    conforme a solicitação acima, de respostas curtas e positivas.

  `.trim();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
