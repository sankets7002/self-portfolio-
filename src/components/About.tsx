import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Users, Trophy } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, responsiveness, and exceptional user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating complex ideas clearly."
    },
    {
      icon: Trophy,
      title: "Innovation",
      description: "Staying current with latest technologies and implementing creative solutions."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by passion for technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="prose prose-lg text-foreground max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                As a passionate <span className="text-primary font-semibold">MERN Stack Developer</span>, 
                I specialize in building full-stack web applications that deliver exceptional user experiences. 
                My journey in software development has been driven by a love for problem-solving and creating 
                digital solutions that make a real impact.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                With expertise in <span className="text-accent font-semibold">MongoDB, Express.js, React, and Node.js</span>, 
                I bring ideas to life through clean, efficient code and modern development practices. 
                I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;