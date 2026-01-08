
import { Github, Linkedin, Mail, Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/InteractiveProjects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import FloatingMessage from '@/components/FloatingMessage';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  // Custom X (Twitter) Icon Component
  const XIcon = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-x-hidden">
      {/* Enhanced background effects with ML/Data Science patterns */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
      <div className="absolute inset-0 opacity-5">
        {/* Python/ML Code Patterns */}
        <div className="absolute top-10 left-10 text-gray-400 text-xs font-mono rotate-12">
          import pandas as pd<br/>
          import numpy as np<br/>
          from sklearn.model_selection import train_test_split<br/>
          model = RandomForestClassifier()
        </div>
        <div className="absolute top-32 right-20 text-gray-400 text-xs font-mono -rotate-12">
          # Deep Learning Pipeline<br/>
          model = Sequential([<br/>
          &nbsp;&nbsp;Dense(128, activation='relu'),<br/>
          &nbsp;&nbsp;Dropout(0.2),<br/>
          &nbsp;&nbsp;Dense(10, activation='softmax')<br/>
          ])
        </div>
        <div className="absolute bottom-40 left-20 text-gray-400 text-xs font-mono rotate-6">
          # Data Analysis<br/>
          df.groupby('category').agg(&#123;<br/>
          &nbsp;&nbsp;'sales': ['mean', 'sum'],<br/>
          &nbsp;&nbsp;'profit': 'std'<br/>
          &#125;)
        </div>
        <div className="absolute bottom-20 right-32 text-gray-400 text-xs font-mono -rotate-6">
          # Neural Network Training<br/>
          for epoch in range(epochs):<br/>
          &nbsp;&nbsp;loss = model.fit(X_train, y_train)<br/>
          &nbsp;&nbsp;accuracy = evaluate(X_test, y_test)
        </div>
        {/* Mathematical Formulas */}
        <div className="absolute top-1/2 left-10 text-gray-400 text-sm font-mono rotate-12">
          ∇f(x) = ∂f/∂x<br/>
          σ(x) = 1/(1+e^(-x))<br/>
          MSE = Σ(y-ŷ)²/n
        </div>
        <div className="absolute top-1/3 right-10 text-gray-400 text-sm font-mono -rotate-12">
          P(A|B) = P(B|A)×P(A)/P(B)<br/>
          R² = 1 - SS_res/SS_tot<br/>
          F₁ = 2×(precision×recall)/(precision+recall)
        </div>
      </div>
      
      {/* Enhanced floating geometric shapes with data visualization elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-purple-400/15 to-pink-600/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      {/* Data visualization inspired shapes */}
      <div className="absolute top-1/4 right-1/3 w-32 h-32 opacity-10">
        <div className="w-full h-full border-2 border-blue-500 rounded-lg rotate-45 animate-spin-slow"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce-slow"></div>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Mobile Hamburger Button - Left Side */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-blue-50 rounded-xl transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </Button>
            </div>

            {/* Logo - Left on desktop, right corner on mobile */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent md:order-first order-last">
              KS
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-8"></span>
                </a>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="p-3 hover:bg-blue-50 rounded-xl transition-all duration-300" asChild>
                <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-50 rounded-xl transition-all duration-300" asChild>
                <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-gray-600 hover:text-gray-900 transition-colors" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300" 
                asChild
              >
                <a href="https://drive.google.com/file/d/1zWy8DBkD8pA85c_JbXkJ1v6jy-N3OdkX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Mobile placeholder - now empty since logo moved to right */}
            <div className="md:hidden w-10"></div>
          </div>

          {/* Enhanced Mobile Menu */}
          <div className={`md:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100 pb-6' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl mx-2 mb-4 shadow-xl border border-gray-100 overflow-hidden">
              <div className="flex flex-col py-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-gray-700 hover:text-blue-600 transition-all duration-300 px-6 py-4 hover:bg-blue-50 relative group"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <span className="font-medium">{item.label}</span>
                    <div className="absolute left-6 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-8"></div>
                  </a>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-4 pt-6 mt-4 border-t border-gray-100">
                  <Button variant="ghost" size="sm" className="p-3 hover:bg-blue-50 rounded-xl transition-all duration-300" asChild>
                    <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-50 rounded-xl transition-all duration-300" asChild>
                    <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6 text-gray-600 hover:text-gray-900 transition-colors" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 rounded-xl hover:shadow-lg transition-all duration-300" 
                    asChild
                  >
                    <a href="https://drive.google.com/file/d/1eUSgvNZ8f9nkz4KiysD5zOBRJbhDwIiK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with enhanced styling */}
      <section id="hero" className="pt-10 relative">
        <Hero />
      </section>

      {/* About Section with glass morphism effect */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-blue-50/60 backdrop-blur-sm"></div>
        <div className="relative">
          <About />
        </div>
      </section>

      {/* Advanced Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <Skills />
      </section>

      {/* Interactive Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-50/30 to-blue-50/30"></div>
        <div className="relative">
          <Projects />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/20 relative">
        <Education />
      </section>

      {/* Contact Section with advanced gradient */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent"></div>
        <div className="relative">
          <Contact />
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Kodari Sravan</h3>
              <p className="text-gray-300 text-lg">Data Scientist & ML Engineer</p>
              <p className="text-gray-400 text-sm leading-relaxed">Passionate about AI and Machine Learning, transforming data into actionable insights</p>
            </div>
            <div className="text-center md:text-left space-y-4">
              <h4 className="font-semibold text-lg text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {navItems.slice(1).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center md:text-left space-y-4">
              <h4 className="font-semibold text-lg text-white mb-6">Connect</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="https://www.linkedin.com/in/sravan-kodari" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="https://github.com/sravan-dsai" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="https://x.com/sravankodari1" target="_blank" rel="noopener noreferrer">
                    <XIcon className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-3 rounded-xl transition-all duration-300 hover:scale-110" asChild>
                  <a href="mailto:sravankodari4@gmail.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Kodari Sravan. Crafted with passion and precision.</p>
          </div>
        </div>
      </footer>

      {/* Floating Message Component */}
      <FloatingMessage />

      <style>
        {`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.15) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        `}
      </style>
    </div>
  );
};

export default Index;
