import byteLogo from "@/assets/8byte-logo.png";
import danlawLogo from "@/assets/danlaw-logo.png";
import ninestarsLogo from "@/assets/ninestars-logo.png";

export const Experience = () => {
  const experiences = [
    {
      company: "Octa Byte AI Pvt Ltd",
      role: "AI Engineer",
      period: "Jul 2024 - Present",
      logo: byteLogo,
      description: [
        "Developing RAG-based AI assistants for BFSI portfolio analytics using Vespa Vector Search, AWS Bedrock, Ray, and SQS, enhancing retrieval accuracy by 78% and enabling distributed, high-throughput data processing.",
        "Engineering modular LLM inference workflows and built POCs leveraging Docling, Layout, and VLM models for structured data extraction across diverse document formats—including legal, financial, and media—improving RAG workflows and query response quality."
      ],
    },
    {
      company: "Danlaw Technologies India Ltd",
      role: "Software Engineer Intern",
      period: "Jan 2024 - Jun 2024",
      logo: danlawLogo,
      description: [
        "Engineered fleet management dashboard using React and TypeScript, integrating real-time GPS tracking, health monitoring, and driver behaviour metrics to boost operational efficiency.",
        "Built Python-Flask pipeline for Databricks and Snowflake to unify vehicle telematics with multiple API sources, automating analytics for KPIs like fuel, distance, and diagnostic errors."
      ],
    },
    {
      company: "Ninestars Information Technologies",
      role: "Data Science Intern",
      period: "May 2023 - Jul 2023",
      logo: ninestarsLogo,
      description: [
        "Led data-driven projects for Reliance Jio, deploying machine learning models and performing extensive ETL using SQL to optimize marketing campaigns and improve customer segmentation strategies."
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-8 lg:px-20 bg-background">
      <div className="max-w-5xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Work Experiences</h2>
        <p className="text-primary text-xl mb-16">A list of organisations I've worked with:</p>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="grid lg:grid-cols-[2fr,3fr] gap-8 items-start">
              <div className="bg-white p-8 flex items-center justify-center">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full max-w-sm object-contain"
                />
              </div>
              
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-2">{exp.company}</h3>
                <p className="text-muted-foreground text-lg mb-1">{exp.role}</p>
                <p className="text-primary text-lg mb-6">{exp.period}</p>
                
                <ul className="space-y-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex">
                      <span className="mr-3">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
