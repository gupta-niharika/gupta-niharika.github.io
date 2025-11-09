import beachVid from "@/assets/beach_vid.mp4";

export const Hero = () => {
  return (
    <section
      id="hello"
      className="relative min-h-screen flex items-center px-8 lg:px-20 overflow-hidden"
    >
      {/* Background Video */}
      <video src={beachVid} autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Optional overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl text-white">
        <h1 className="text-5xl lg:text-7xl font-bold mb-24 lg:mb-32">Hello</h1>
        <p className="text-2xl leading-relaxed mt-10">I'm Niharika,</p>
        <p className="text-2xl leading-relaxed">an AI / ML Engineer from Bengaluru.</p>
      </div>
    </section>
  );
};
