import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

type ResearchPaperProps = {
  title: string;
  link: string;
  description?: string;
};

const researchPapers: ResearchPaperProps[] = [
  {
    title: "Design and analysis of attention-based mechanisms for intent recognition and classification",
    link: "https://drive.google.com/file/d/1Wd6-SSc1sz6VHw_foxsDSedeqeKThK_P/view",
    description: "Research focusing on enhancing intent recognition systems using attention mechanisms."
  },
  {
    title: "A Survey on recent advances in pneumonia detection using ChexNet",
    link: "https://www.ijrar.org/papers/IJRAR21C1643.pdf",
    description: "Comprehensive survey of the latest approaches in pneumonia detection leveraging ChexNet."
  },
  {
    title: "Classification of Alzheimer's and Schizophrenia using rs-FMRI",
    link: "https://drive.google.com/file/d/1BVDRK06wX85LixjSTJj-FLrjAqKIvAjU/view",
    description: "Novel approach to neurological disease classification using resting-state functional MRI data."
  }
];

const ResearchPaper: React.FC<ResearchPaperProps> = ({ title, link, description }) => {
  return (
    <div className="interactive-card group">
      <div className="flex items-start gap-4">
        <div className="bg-primary/20 p-3 rounded-lg shrink-0 group-hover:bg-primary/30 transition-colors">
          <FileText className="h-7 w-7" />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          
          {description && (
            <p className="text-foreground/70 text-sm mb-4">{description}</p>
          )}
          
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary/80 hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>View Paper</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Research Publications</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {researchPapers.map((paper, index) => (
            <ResearchPaper key={index} {...paper} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
