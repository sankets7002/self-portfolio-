import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Building amazing web experiences with modern technologies and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:your@email.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>your@email.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:your@email.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm flex items-center">
            © {currentYear} Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Your Name
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;