import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Redux/Zustand", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS/Vercel", level: 80 },
        { name: "Jest/Testing", level: 75 },
        { name: "Webpack/Vite", level: 80 },
        { name: "CI/CD", level: 70 }
      ]
    }
  ];

  const certificates = [
    "Full Stack Web Development",
    "React Developer Certification",
    "MongoDB Developer Associate",
    "AWS Cloud Practitioner"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificates */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certificates.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="px-4 py-2 text-sm bg-gradient-secondary hover:bg-gradient-primary transition-all duration-300"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;