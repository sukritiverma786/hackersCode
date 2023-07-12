import { OpenAI } from "langchain/llms/openai";
import { SerpAPI } from "langchain/tools";
import { initializeAgentExecutorWithOptions } from "langchain/agents"
import type { GoogleParameters } from "serpapi";
import { getJson } from "serpapi";

const model = new OpenAI({ temperature: 0.2 });
const serpApiTool = new SerpAPI("f5f7d670d3d40a1ec65c850723d190851c5018d88420909e31571e03c7901bab");
const tools = [serpApiTool];



export class GoogleSearchService {

    GoogleSearchService(){
        console.log("search service");
    }

    getAnswer = async (message: string) => {
        console.log("google service started ..");
        const tools = [serpApiTool];
    
        const executor = await initializeAgentExecutorWithOptions(tools, model, {
         agentType: "zero-shot-react-description",
         verbose:true
        });

        // const input = message;
        // console.log(input, 'input');
        // const result = await executor.run(input);
        // console.log(result, 'result');

        const params = {
            q: message,
            api_key: "f5f7d670d3d40a1ec65c850723d190851c5018d88420909e31571e03c7901bab"
          } satisfies GoogleParameters;
          
          // Show result as JSON
          const response = await getJson("google", params);
          console.log(response["organic_results"]);

        return response["organic_results"];
       
    }

}

// let gs = new GoogleSearchService();
