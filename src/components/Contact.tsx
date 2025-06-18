import React, { useRef, useState } from 'react';
import { Mail, Smartphone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting: prevent multiple submissions within 5 seconds
    const now = Date.now();
    if (now - lastSubmissionTime < 5000) {
      toast({
        title: "Please wait",
        description: "You can only submit once every 5 seconds. Please wait a moment.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    setLastSubmissionTime(now);
    
    if (!formRef.current) return;
    
    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    // Basic validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    // Create mailto link as fallback since EmailJS isn't configured
    const mailtoLink = `mailto:tharunbandaru18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    try {
      // For now, we'll use a mailto link since EmailJS isn't configured
      // In production, you'd want to use a proper email service like:
      // - EmailJS (with proper configuration)
      // - Formspree
      // - Netlify Forms
      // - Custom backend endpoint
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Your default email client should open with the message pre-filled. Please send it manually.",
      });
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error opening email client:', error);
      toast({
        title: "Email client error",
        description: "Please email directly to tharunbandaru18@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="glass-card p-6 md:p-8 space-y-6">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="bg-primary/20 p-3 rounded-full group-hover:bg-primary/30 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <a 
                      href="mailto:tharunbandaru18@gmail.com" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      tharunbandaru18@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="bg-primary/20 p-3 rounded-full group-hover:bg-primary/30 transition-colors">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Phone</p>
                    <a 
                      href="tel:+14707753759" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +1 (470) 775-3759
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="bg-primary/20 p-3 rounded-full group-hover:bg-primary/30 transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Location</p>
                    <p className="text-foreground">Redwood City, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-foreground/70 mb-4">Connect with me on social media</p>
                
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/tharun-kumar-bandaru/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="interactive-button flex items-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://github.com/Tharun1850" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="interactive-button flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="bg-secondary/50 border-secondary"
                      minLength={2}
                      maxLength={100}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                      className="bg-secondary/50 border-secondary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can I help you?"
                      required
                      className="bg-secondary/50 border-secondary"
                      minLength={5}
                      maxLength={200}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      required
                      className="min-h-[120px] bg-secondary/50 border-secondary resize-none"
                      minLength={10}
                      maxLength={1000}
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Opening Email...' : 'Send Message'}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
