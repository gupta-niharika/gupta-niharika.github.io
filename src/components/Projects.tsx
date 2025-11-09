export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 lg:px-20 bg-background">
      <div className="max-w-5xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
        <p className="text-primary text-xl mb-16">Some cool things I've built !</p>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
              Multi-task Deep Learning for Retinal Disease Diagnosis
            </h3>
            <a
              href="#"
              className="text-foreground underline text-lg mb-4 inline-block hover:text-primary transition-colors"
            >
              Check it out
            </a>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Designed a ResNet-18–based system with shared feature extraction and task-specific heads for grading diabetic retinopathy and segmenting retinal lesions using the IDRiD dataset. Evaluated using classification accuracy and Dice score.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
