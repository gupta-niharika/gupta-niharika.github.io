import vitLogo from "@/assets/vit-logo.jpg";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-8 lg:px-20 bg-secondary">
      <div className="max-w-5xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16">Education</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
              Vellore Institute of Technology - VIT Vellore
            </h3>
            <p className="text-primary text-xl mb-4">Master of Technology, 2019-2024</p>
            <p className="text-muted-foreground text-lg mb-4">
              Intergrated (B.Tech + M.Tech) course -<br />
              Software Engineering
            </p>
            <p className="text-muted-foreground text-lg mb-6">CGPA - 9.01/10</p>
            
            <div>
              <p className="text-lg font-semibold mb-3">Achivements:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Winner - CrowdHacks'21 (IEEE GTBIT)</li>
                <li>Appathon'21 (ADG VIT)</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img
              src={vitLogo}
              alt="VIT Logo"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
