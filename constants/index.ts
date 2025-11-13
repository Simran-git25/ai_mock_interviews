import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];


export const generator = {
  name: "Untitled Workflow",
  nodes: [
    {
      name: "start_node",
      type: "start",
      metadata: { position: { x: 0, y: 0 } }
    },
    {
      name: "say",
      type: "say",
      metadata: { position: { x: -43.13, y: 189.37 } },
      prompt: "",
      exact: "Hello ,{{username}} ! Let's prepare your interview. I'll\nask you a few questions and generate a perfect interview just for you. Are you ready?"
    },
    {
      name: "conversation_1748534881000",
      type: "conversation",
      metadata: { position: { x: -43.13, y: 439.37 } },
      prompt: "Required all information",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7
      },
      voice: {
        model: "aura-2",
        voiceId: "thalia",
        provider: "deepgram",
        chunkPlan: {
          enabled: true,
          formatPlan: { enabled: true, replacements: [], numberToDigitsCutoff: 2025 },
          minCharacters: 30,
          punctuationBoundaries: [".", "!", "?", ";"]
        },
        mipOptOut: false,
        cachingEnabled: true
      },
      variableExtractionPlan: {
        output: [
          { type: "string", title: "role", description: "What role would you like to train for?", enum: [] },
          { type: "string", title: "type", description: "Are you aiming for a technical , behavioral or mixed interview?", enum: [] },
          { type: "string", title: "level", description: "The Job experience level", enum: [] },
          { type: "string", title: "techstack", description: "A list of technologies to cover during the job interview.", enum: [] },
          { type: "string", title: "amount", description: "How many questions would you like to generate?", enum: [] }
        ]
      },
      messagePlan: { firstMessage: "" }
    },
    {
      name: "API Request",
      type: "tool",
      metadata: { position: { x: -43.13, y: 689.37 } },
      tool: {
        url: "https://ai-mock-interviews-two-xi.vercel.app/api/vapi/generate",
        method: "POST",
        type: "apiRequest",
        body: {
          type: "object",
          required: ["role", "type", "level", "techstack", "amount", "userid"],
          properties: {
            role: { type: "string", value: "role", description: "" },
            type: { type: "string", value: "type", description: "" },
            level: { type: "string", value: "level", description: "" },
            amount: { type: "string", value: "amount", description: "" },
            userid: { type: "string", value: "userid", description: "" },
            techstack: { type: "string", value: "techstack", description: "" }
          }
        },
        function: {
          name: "untitled_tool",
          parameters: {
            type: "object",
            required: [],
            properties: {}
          }
        }
      }
    },
    {
      name: "conversation_1748538433313",
      type: "conversation",
      metadata: { position: { x: -43.13, y: 939.37 } },
      prompt: "Say that the interview has been generated and thank the user for the call ",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7
      },
      voice: {
        model: "aura-2",
        voiceId: "thalia",
        provider: "deepgram",
        chunkPlan: {
          enabled: true,
          formatPlan: { enabled: true, replacements: [], numberToDigitsCutoff: 2025 },
          minCharacters: 30,
          punctuationBoundaries: [".", "!", "?", ";"]
        },
        mipOptOut: false,
        cachingEnabled: true
      },
      messagePlan: { firstMessage: "" }
    },
    {
      name: "conversation_1748538581384",
      type: "conversation",
      metadata: { position: { x: -43.13, y: 1189.37 } },
      prompt: "Ask the generated questions from the user and record answer of each question",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7
      },
      messagePlan: { firstMessage: "" }
    },
    {
      name: "conversation_1748538700529",
      type: "conversation",
      metadata: { position: { x: -43.13, y: 1439.37 } },
      prompt: "Make a analysis based on user performance and give them feedback on that interview of each question",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7
      },
      messagePlan: { firstMessage: "" }
    },
    {
      name: "hangup_1748538815707",
      type: "tool",
      metadata: { position: { x: 48.87, y: 1689.37 } },
      tool: {
        type: "endCall"
      }
    }
  ],
  edges: [
    { from: "start_node", to: "say" },
    { from: "say", to: "conversation_1748534881000", condition: { type: "ai", prompt: "if user provide their username" } },
    { from: "conversation_1748534881000", to: "API Request", condition: { type: "ai", prompt: "if the user provided all the information" } },
    { from: "API Request", to: "conversation_1748538433313", condition: { type: "ai", prompt: "if the user given all information" } },
    { from: "conversation_1748538433313", to: "conversation_1748538581384", condition: { type: "ai", prompt: "" } },
    { from: "conversation_1748538581384", to: "conversation_1748538700529", condition: { type: "ai", prompt: "After user answer all questions" } },
    { from: "conversation_1748538700529", to: "hangup_1748538815707", condition: { type: "ai", prompt: "if user said yes" } }
  ]
};

export default generator;



