import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full animate-float blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Building Modern Web Applications with <span className="text-primary font-semibold">MERN Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through clean code, 
            innovative solutions, and cutting-edge technologies. Let's build something amazing together.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 transition-all duration-300">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:your@email.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;