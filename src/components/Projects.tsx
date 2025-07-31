import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["React", "Express", "Socket.io", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling, and performance metrics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["React", "TypeScript", "Chart.js", "REST API"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather App PWA",
      description: "Progressive Web Application for weather forecasts with offline functionality and location-based services.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tags: ["React", "PWA", "Weather API", "Service Workers"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Blog CMS",
      description: "Content Management System for blogs with rich text editor, SEO optimization, and multi-author support.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Rich Text Editor"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      tags: ["React", "Express", "MongoDB", "Maps API"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Some of my recent work that I'm proud of
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:shadow-soft transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300 group hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
