
import React from 'react';
import { GraduationCap, Award, Briefcase, BarChart2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Data Scientist with 4+ years of experience in Healthcare, Finance, and Real Estate industries, 
              skilled in developing LSTM, Transfer learning, imaging methods for healthcare 
              research and GLM, Anomaly Detection, Demand Forecasting for finance.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm experienced in Python, Machine Learning, Data Science, SQL, ETL pipelines, 
              CI/CD, EDA, Azure, AWS. As a 3x Winner of hackathons, certified in Tableau, 
              Azure AI, I enjoy exploring the latest in Large Language Models (LLM), QLoRA, 
              LoRA, Vector Databases, Fine-tuning LLMs, RAGs, and Gen AI.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Education</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 interactive-card">
                  <div className="mt-1 bg-primary/20 p-2 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Master of Science in Data Science and Analytics</h4>
                    <p className="text-sm text-foreground/70">Georgia State University | GPA: 3.9/4.00</p>
                  </div>
                </div>
                
                <div className="flex gap-4 interactive-card">
                  <div className="mt-1 bg-primary/20 p-2 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Bachelor of Technology in Electronics and Computer Engineering</h4>
                    <p className="text-sm text-foreground/70">JNTU Hyderabad | GPA: 3.6/4.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 space-y-8">
            <div className="interactive-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Achievements</span>
              </h3>
              
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Winner – Georgia Tech Hackathon 2023</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Winner – Google Hackathon 2023</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Runner-up – Georgia Tech Hackathon 2024</span>
                </li>
              </ul>
            </div>
            
            <div className="interactive-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>Current Position</span>
              </h3>
              
              <p className="text-foreground/80">
                Senior Data Scientist (Contract)<br />
                <span className="text-foreground/60">C3.AI, Redwood City, CA</span>
              </p>
            </div>
            
            <div className="interactive-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-primary" />
                <span>Specialization</span>
              </h3>
              
              <ul className="space-y-2 text-foreground/80">
                <li>Machine Learning & Deep Learning</li>
                <li>Healthcare & Finance Analytics</li>
                <li>Real Estate Analytics</li>
                <li>Large Language Models</li>
                <li>ETL & Data Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
