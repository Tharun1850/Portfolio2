import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

// Throttle function to limit execution frequency
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

const App = () => {
  const glowElementRef = useRef<HTMLDivElement | null>(null);

  // Mouse effect for cursor glow applied to entire application
  useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      if (glowElementRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        
        // Use transform instead of left/top for better performance
        glowElementRef.current.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
      }
    }, 16); // ~60fps
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create and append glow element if it doesn't exist
    if (!document.querySelector('.circle-glow')) {
      const glowElement = document.createElement('div');
      glowElement.className = 'circle-glow fixed';
      glowElementRef.current = glowElement;
      document.body.appendChild(glowElement);
    } else {
      glowElementRef.current = document.querySelector('.circle-glow') as HTMLDivElement;
    }
    
    // Add click event listener for button bounce animation
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button, a.interactive-button, a.button-bounce');
      
      if (button) {
        // Set data attribute to trigger the animation
        button.setAttribute('data-bounce', 'true');
        
        // Remove the attribute after animation completes to allow it to be triggered again
        setTimeout(() => {
          button.removeAttribute('data-bounce');
        }, 600); // Match this with the animation duration
      }
    };
    
    window.addEventListener('click', handleButtonClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleButtonClick);
    };
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
