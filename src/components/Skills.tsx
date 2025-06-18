
import React from 'react';
import { Code, Database, BarChart, Server, Cpu, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["Python", "R", "SAS", "SQL", "C", "Java", "HTML", "CSS", "Javascript", "Matlab"]
  },
  {
    name: "Frameworks & ML",
    icon: <Cpu className="h-5 w-5" />,
    skills: [
      "PyTorch", "Tensorflow", "Keras", "Scikit-learn", "NLTK", "SpaCy", 
      "Numpy", "JAX", "Pandas", "MLOps", "OpenCV", "Time Series Modeling", 
      "NLP", "Transformers", "BERT", "ETL", "LLM", "Langchain", 
      "LLaMA index", "QLoRA", "LoRA", "RAG", "Vector Database"
    ]
  },
  {
    name: "Statistical Methods",
    icon: <BarChart className="h-5 w-5" />,
    skills: [
      "Hypothesis testing", "ANOVA", "Linear Regression", "Logistic Regression", 
      "Ridge Regression", "Lasso Regression", "Decision Tree", "Random Forest", 
      "XG Boost", "K-Means", "KNN", "Support Vector Machine", "A/B Testing"
    ]
  },
  {
    name: "Tools & Platforms",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      "Tableau", "Power BI", "Spark", "Hadoop", "Git", "GitHub", "Docker", 
      "RASA", "Graph Database", "Databricks", "PySpark", "Jenkins", 
      "Kubeflow", "Airflow"
    ]
  },
  {
    name: "Cloud & Infrastructure",
    icon: <Server className="h-5 w-5" />,
    skills: ["Azure", "AWS", "Streamlit", "CI/CD", "Azure Data Factory", "Azure ML", "Azure Databricks"]
  },
  {
    name: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: ["SQL Server", "MongoDB", "Cosmos DB", "Azure SQL Database", "Vector Databases", "Pinecone"]
  }
];

type SkillBadgeProps = {
  name: string;
  className?: string;
};

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, className }) => {
  return (
    <span className={cn(
      "inline-block px-3 py-1.5 bg-secondary rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:scale-105",
      className
    )}>
      {name}
    </span>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-40 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="interactive-card">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary/20 p-2 rounded-lg">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
