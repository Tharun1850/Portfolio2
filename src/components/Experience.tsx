import React, { useState } from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

type ExperienceItemProps = {
  company: string;
  position: string;
  period: string;
  location: string;
  isRemote?: boolean;
  points: string[];
  skills?: string;
  isActive: boolean;
  onClick: () => void;
};

const experiences = [
  {
    company: "C3.AI",
    position: "Senior Data Scientist (Contract)",
    period: "Nov 2024 – Present",
    location: "Redwood city, CA",
    points: [
      "Built AI-AVM (Automated Valuation Models) in predicting the real estate property appraisal values utilizing decision trees and boosting techniques from LightGBM. Performed hyperparameter optimization using n-estimators, subsamples, learning rate.",
      "Feature engineered and processed 2M+ rows using Property Data, past appraisal history, location size, age, GIS data and relevant features.",
      "Evaluated model on custom metrics like Price-Related Differential, Percentage of sales price and using MAPE, and R-square methods.",
      "Migrated data from V7 version of entire project to V8. Handled feature set creation, setting up data workflow. Responsible for data cleaning through outlier detection, connecting with end clients for outlier review."
    ]
  },
  {
    company: "ELEPHAS",
    position: "Data Scientist",
    period: "May 2024 – Sep 2024",
    location: "Madison, WI",
    isRemote: true,
    points: [
      "Contributed to medical immunology research at a dynamic startup specializing in advanced imaging and data-driven immunotherapy.",
      "Utilized MPM (Multi Photon Microscopy) data to evaluate the performance of medical immunology treatment, PCA for dimensionality reduction and Binning to create custom buckets of similar values which improved data analysis efficiency.",
      "Performed Data analysis on cytokine data to assess the response levels on protein level.",
      "Experimented with feature selection techniques such as Recursive Feature Elimination with Random Forest and Gradient Boosting, and Genetic Algorithms with auto encoders and GMM, leading to improved model performance.",
      "Applied k-means, DB-SCAN, Hierarchical clustering, and Spectral clustering on assay samples to analyze drug responses based on protein level, resulting in more accurate clustering of response patterns."
    ]
  },
  {
    company: "HONEYWELL",
    position: "Data Science Intern",
    period: "May 2023 – Aug 2023",
    location: "Atlanta, GA",
    points: [
      "Analyzed diverse data tables with MS SQL Server within industrial repair solutions, pinpointing faults, errors. Leveraged Tableau to visualize and communicate insights to cross-functional stakeholders, enhancing collaboration and decision-making processes.",
      "Employed SAS for advanced statistical analysis and predictive modeling to identify trends and anomalies in repair data, leading to improved maintenance strategies and operational efficiency. Used SAS Viya for cloud-based analytics and machine learning, enhancing the scalability and performance of data analysis workflows.",
      "Utilized Support Vector Machines (SVMs) to detect anomalies in smoke sensor data, improving the accuracy of fault detection and reducing false alarms. Implemented LSTM models for accurate demand forecasting in critical sensor markets, facilitating proactive inventory management and cost optimization.",
      "Leveraged Falcon 7B LLM through Hugging Face to build a responsive answering system, delivering data-driven repair suggestions based on historical records, resulting in streamlined customer support interactions."
    ],
    skills: "MS SQL Server, Tableau, Python, Hugging Face, Azure Event Hubs, Power BI, Azure Data Factory, Azure Data Lake Storage"
  },
  {
    company: "TRENDS Lab (GEORGIA TECH UNIVERSITY)",
    position: "Machine Learning Research Assistant - Healthcare",
    period: "Aug 2022 – Apr 2024",
    location: "Atlanta, GA",
    points: [
      "Researched on ICA, brain disorders using fMRIs Functional Connectivity, StaticFNC, DynamicFNC. Designed, analyzed, and visualized high-dimensional time-series data to understand neurobiology for neurological diseases.",
      "Built a LSTM model for the classification of Alzheimer's (AD) and Schizophrenia (SZ) on rs-fMRI Time Series.",
      "Employed stratified k-fold on an imbalanced dataset finding best hyperparameters and model, achieving an accuracy of 80%, sensitivity of 79%, and specificity of 78% with the best model.",
      "Utilized ensembling methods to improve model performance, resulting in enhanced prediction accuracy for neurological disease classification.",
      "Presented research findings at OHBM 2023 in Canada, contributing to the community's understanding of neurological disease modeling.",
      "Built a U-Net model leveraging ImageNet models like ResNet and DenseNet as encoders on mammographic images. Optimized model performance through extensive hyperparameter tuning, achieving an AUC-ROC score of 0.94."
    ],
    skills: "Python, MATLAB, R language, Statistics, Neuroimaging, LSTM, ICA, U-Net"
  },
  {
    company: "ACCENTURE",
    position: "Data Scientist",
    period: "Jun 2021 – Jul 2022",
    location: "Bangalore, India",
    points: [
      "Developed regression models to predict the time of recovery of a patient and Customer Lifetime Value using Lasso, Ridge, Support Vector Regression (SVR), and XGBoost.",
      "Designed and implemented ETL pipelines leveraging Azure Data Factory and Azure Data Lake Storage Gen2.",
      "Established CI/CD pipelines with Docker containers for seamless model deployment and monitoring, guaranteeing efficient scaling and reproducibility on Azure Monitor.",
      "Applied machine learning models, including Generalized Linear Models (GLMs) and XGBoost, achieving 85% accuracy in predicting insurance claim costs, enhancing risk assessment precision and financial forecasting reliability.",
      "Developed an anomaly detection system using K-Nearest Neighbors algorithm, successfully identifying 90% of fraudulent insurance claims, enhancing the company's fraud prevention capabilities.",
      "Annotated physician notes with corresponding medical codes to train BERT-based NLP models for accurate extraction.",
      "Integrated BERT-based NLP models into the claims processing pipeline on Azure Databricks, achieving 92% accuracy in extracting medical codes from physician notes, significantly reducing manual workload and errors.",
      "Built a real-time fraud dashboard using Power BI and Azure SQL Database, providing insights into suspicious activity patterns."
    ],
    skills: "XGBoost, SVR, Regression, Neural Networks, ETL, Time Series, BERT, Azure ML"
  },
  {
    company: "TECHCITI TECHNOLOGIES",
    position: "Data Scientist",
    period: "Nov 2019 – Jun 2021",
    location: "Bangalore, India",
    points: [
      "Developed a personalized news recommendation system using collaborative filtering techniques, including user-based and item-based methods, to offer tailored content suggestions.",
      "Implemented advanced similarity algorithms (cosine similarity, Pearson correlation) to enhance recommendation accuracy, resulting in a 15% increase in user retention.",
      "Designed and managed ETL workflows using Apache Airflow, processing large-scale data sets efficiently for model training and updates, Apache Spark for scalable model training and recommendation generation, reducing processing time by 40% for large datasets.",
      "Implemented a CI/CD pipeline using Azure DevOps for version control and automated model deployment, reducing deployment time by 30% and improving overall development efficiency.",
      "Integrated MongoDB for real-time updates to the recommendation engine, enabling dynamic content personalization.",
      "Conducted rigorous A/B testing to optimize recommendation strategies, leading to a 20% increase in article click rates.",
      "Leveraged Azure Synapse Analytics for comprehensive data analysis and Azure Databricks for scalable model deployment and monitoring.",
      "Incorporated SHAP (Shapley Additive explanations) for interpretability and understanding of the recommendation model's decision-making process, enhancing transparency and trustworthiness in recommendations."
    ],
    skills: "Apache Spark, Apache Airflow, MongoDB, Synapse Analytics, A/B testing"
  }
];

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  period,
  location,
  isRemote,
  points,
  skills,
  isActive,
  onClick,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div 
      className={cn(
        "relative p-6 rounded-lg transition-all duration-300 cursor-pointer button-bounce experience-tile",
        isActive ? "experience-tile-active" : "experience-tile-inactive"
      )}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      aria-label={`${isActive ? 'Hide' : 'Show'} details for ${position} at ${company}`}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 p-[2px]">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 via-white/10 to-white/5"></div>
      </div>
      
      {/* Top glow effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 rounded-t-lg opacity-60 blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className={cn(
          "flex flex-col md:flex-row md:items-center justify-between mb-2 transition-colors",
          isActive ? "text-primary" : "text-foreground/90"
        )}>
          <h3 className="font-semibold text-lg">{company}</h3>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{period}</span>
          </div>
        </div>
        
        <p className="text-foreground/70 font-medium">{position}</p>
        <p className="text-sm text-foreground/60 mb-2 flex items-center gap-1">
          <span>{location}</span>
          {isRemote && <span className="bg-primary/20 text-primary/90 text-xs px-1.5 py-0.5 rounded-full">Remote</span>}
        </p>
        
        {isActive && (
          <div className="mt-4 animate-fade-in">
            {skills && (
              <div className="mb-3 p-2 bg-primary/10 rounded-md text-sm">
                <span className="font-semibold text-primary">Skills: </span>
                <span className="text-foreground/80">{skills}</span>
              </div>
            )}
            <ul className="space-y-2 list-disc pl-5 text-foreground/80 mt-2">
              {points.map((point, index) => (
                <li key={index} className="text-sm leading-relaxed">{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-40 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title flex items-center gap-2">
          <Briefcase className="h-8 w-8" />
          Professional Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              {...exp}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
