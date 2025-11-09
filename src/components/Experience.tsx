import byteLogo from "@/assets/8byte-logo.png";
import ninestarsLogo from "@/assets/ninestars-logo.png";
import danlawLogo from "@/assets/danlaw-logo.png";

export const Experience = () => {
  const experiences = [
    {
      company: "Octa Byte AI Pvt Ltd",
      shortName: "8Byte",
      location: "Bengaluru, India",
      role: "Data and AI Engineer",
      period: "July 2025 – Present",
      logo: byteLogo,
      description: [
        "Developed RAG-based AI assistants for BFSI portfolio analytics using Vespa Vector Search, AWS Bedrock, Ray, and SQS — improving retrieval accuracy by 78% and enabling distributed, high-throughput data processing.",
        "Engineered modular LLM inference workflows and POCs leveraging Docling, Layout, and VLM models for document understanding and multimodal analysis — accelerating model experimentation and deployment cycles.",
      ],
      technologies:
        "Python, FastAPI, NLP, LLM, RAG, Vespa Vector Search, AWS Bedrock, Ray, SQS, Re-ranking, LangChain, HuggingFace, Docker, Gemini, Groq, MLOps, Docling, model router",
    },
    {
      company: "Ninestars Information Technologies Pvt Ltd",
      location: "Bengaluru, India",
      role: "Research & Development Engineer",
      period: "July 2024 – July 2025",
      logo: ninestarsLogo,
      description: [
        "Redesigned OCR + entity extraction pipeline using YOLOv10 and fine-tuned BERT models — reducing preprocessing latency from 6s → 220ms and improving NER F1-score by 45%, resulting in 2× faster document turnaround for clients.",
        "Developed transformer-based entity recognition and layout detection models with synthetic data augmentation, optimizing backend with caching and adaptive load balancing — boosting accuracy and cutting API latency by 93%.",
      ],
      technologies:
        "Python, OpenCV, YOLOv10, Hugging Face Transformers (Qwen, BERT), Django, PostgreSQL, RabbitMQ, Celery, Docker, NLP, Model Evaluation (F1, EM), System Design",
    },
    {
      company: "Danlaw Technologies India Ltd",
      shortName: "Danlaw Inc",
      location: "Bengaluru, India",
      role: "Software Development Engineer – Intern",
      period: "July 2023 – May 2024",
      logo: danlawLogo,
      description: [
        "Developed asynchronous micro-service framework for V2X device automation, reducing test cycle time by 88% and supporting 40+ modules.",
        "Implemented GUI tools (PySide6 / Qt) for device diagnostics and log visualization, improving developer productivity and debugging speed.",
      ],
      technologies:
        "Python, PySide6 / Qt, Microservices, AsyncIO, V2X, Automation Frameworks, Docker",
    },
  ];

  return (
    <section id="experience" className="py-20 px-8 lg:px-20 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16">Work Experience</h2>

        {/* Keep order — array order preserved */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-[2fr,3fr] gap-8 items-start"
            >
              {/* Logo */}
              <div className="bg-white p-8 flex items-center justify-center shadow-sm rounded-lg">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full max-w-xs object-contain"
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-1">
                  {exp.shortName
                    ? `${exp.shortName} — ${exp.company}`
                    : exp.company}
                </h3>

                <p className="text-muted-foreground text-lg mb-1">{exp.role}</p>

                <p className="text-gray-600 mb-6">
                  <span className="font-medium">{exp.location}</span> •{" "}
                  <span className="italic">{exp.period}</span>
                </p>

                <ul className="space-y-4 mb-4">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground leading-relaxed flex"
                    >
                      <span className="mr-3">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-600 italic">
                  <strong>Technologies used:</strong> {exp.technologies}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
