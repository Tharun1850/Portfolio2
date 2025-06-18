import React from 'react';
import { Github, ExternalLink, Monitor, Brain, Activity, BarChart3, Database, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProjectProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  links?: {
    demo?: string;
    github?: string;
  };
};

const projects: ProjectProps[] = [
  {
    title: "Enhanced LLAMA 2 with Custom Insurance Q&A Dataset",
    description: "Successfully fine-tuned the LLAMA 2 large language model using Low-Rank Adaptation (LoRA) and Quantized Low-Rank Adaptation (QLoRA) techniques. Leveraged a custom dataset of human-annotated question-answer pairs from an insurance company database, significantly improving model performance on specific domain.",
    icon: <Brain className="h-8 w-8" />,
    skills: ["LLAMA 2", "LoRA", "QLoRA", "Fine-tuning", "LLM", "NLP", "Insurance"],
    links: {
      github: "https://github.com/Tharun1850/llama2-insurance-qa"
    }
  },
  {
    title: "Real-Time Face Emotion Detection",
    description: "Captured and segmented real-time face emotions video using the haar-cascade classifier, implemented deep learning model to classify various emotions such as sad, angry, happy, neutral, and surprised.",
    icon: <Monitor className="h-8 w-8" />,
    skills: ["Computer Vision", "OpenCV", "Haar-cascade", "Deep Learning", "CNN", "Real-time"],
    links: {
      github: "https://github.com/Tharun1850/face-emotion-detection",
      demo: "https://face-emotion-demo.vercel.app"
    }
  },
  {
    title: "End-to-end Healthcare Application",
    description: "Integrated OpenAI-Whisper for speech transcription, Gaussian Naive Bayes for diagnosis, and Haar-Cascade Classifier for heart rate monitoring. The app addressed pain points, such as provider shortage and burnout. Won 1st place.",
    icon: <Activity className="h-8 w-8" />,
    skills: ["OpenAI-Whisper", "GPT-4", "BERT", "Gaussian Naive Bayes", "Healthcare", "Hackathon"],
    links: {
      github: "https://github.com/Tharun1850/healthcare-ai-app"
    }
  },
  {
    title: "Sentiment Analysis on Yelp Data",
    description: "Performed sentiment analysis using LSTM with word embedding and TF-IDF. Implemented LDA for comprehensive topic modeling to extract insights from review data.",
    icon: <BarChart3 className="h-8 w-8" />,
    skills: ["NLP", "LSTM", "Word Embeddings", "TF-IDF", "LDA", "Topic Modeling", "Sentiment Analysis"],
    links: {
      github: "https://github.com/Tharun1850/yelp-sentiment-analysis"
    }
  },
  {
    title: "RAG Application Using Python, LangChain, and OpenAI API",
    description: "Developed a Retrieval Augmented Generation (RAG) system using Python, LangChain, and the OpenAI API. Utilized GPT 3.5 turbo model for intelligent question-answer generation from video transcripts. Integrated Pinecone as a vector storage database for efficient text retrieval.",
    icon: <Database className="h-8 w-8" />,
    skills: ["RAG", "LangChain", "OpenAI API", "GPT 3.5", "Pinecone", "Vector Database", "Text Retrieval"],
    links: {
      github: "https://github.com/Tharun1850/rag-video-transcript",
      demo: "https://rag-video-demo.vercel.app"
    }
  },
  {
    title: "Fintech AI",
    description: "Developed an end-to-end financial analysis tool using LangChain, OpenAI embeddings, and ChromaDB for embedding and analyzing SEC 10-K filings. Integrated Beautiful Soup for text extraction and Matplotlib for visualizing key financial metrics.",
    icon: <Bot className="h-8 w-8" />,
    skills: ["LangChain", "OpenAI Embeddings", "ChromaDB", "Beautiful Soup", "Matplotlib", "Financial Analysis"],
    links: {
      github: "https://github.com/Tharun1850/fintech-ai-sec-analysis"
    }
  }
];

const ProjectCard: React.FC<ProjectProps> = ({ title, description, icon, skills, links }) => {
  return (
    <div className="interactive-card group">
      <div className="flex items-start gap-4">
        <div className="bg-primary/20 p-3 rounded-lg shrink-0 group-hover:bg-primary/30 transition-colors">
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-foreground/70 text-sm mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.slice(0, 5).map((skill, index) => (
              <span key={index} className="text-xs bg-secondary px-2 py-1 rounded-full">
                {skill}
              </span>
            ))}
            {skills.length > 5 && (
              <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                +{skills.length - 5} more
              </span>
            )}
          </div>
          
          {links && (links.github || links.demo) && (
            <div className="flex gap-3">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-foreground/60 hover:text-primary transition-colors"
                  aria-label={`View ${title} on GitHub`}
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-foreground/60 hover:text-primary transition-colors"
                  aria-label={`View ${title} live demo`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
