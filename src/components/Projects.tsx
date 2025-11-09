export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 lg:px-20 bg-background">
      <div className="max-w-5xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
        <p className="text-primary text-xl mb-16">Some cool things I've built!</p>

        <div className="space-y-12">
          {/* Project 1 */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-2 flex items-center flex-wrap">
              Multi-task Deep Learning for Retinal Disease Diagnosis
              <a
                href="https://github.com/gupta-niharika/idrid_cs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline text-lg font-normal ml-3 hover:text-primary transition-colors"
              >
                Check it out
              </a>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Designed a <strong>ResNet-18–based</strong> system with shared feature extraction and task-specific heads for grading diabetic retinopathy and segmenting retinal lesions using the <strong>IDRiD dataset</strong>. Evaluated using classification accuracy and Dice score.
            </p>
          </div>

          {/* Project 2 */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
              Student Researcher at Samsung PRISM
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Engineered expansive datasets for the Automatic Language Classification of Code-Switched Data, 
              with a focus on transliteration models for Bixby.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
