import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export class OpenAiService {
    OpenAiService() {
        console.log("hello"+ process.env.apiKey);
    }
    getAnswer = async (message: string) => {
        console.log("service started ..")
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        });
        const apiResponse = chatCompletion.data;
        console.log(apiResponse);
        console.log(chatCompletion.data.choices, 'message');
        let choices = chatCompletion.data.choices[0].message.content;
        console.log(choices)
        //const arrayPattern = /\[(.*?)\]/gm;
        //let stringArray =  choices.match(arrayPattern);
        //let a = stringArray
        //console.log(stringArray, 'heloo')
        //const array = a;//JSON.parse(a);
        //console.log(a);
        return choices;
    }
};











