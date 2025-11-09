import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 lg:px-20 bg-secondary">
      <div className="max-w-2xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Reach Out</h2>
        <p className="text-primary text-xl mb-12">Lets talk tech !</p>
        
        <form className="space-y-6">
          <div>
            <Input
              type="text"
              placeholder="Name"
              className="bg-background border-border text-lg py-6"
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="bg-background border-border text-lg py-6"
            />
          </div>
          
          <div className="flex gap-2">
            <div className="w-32">
              <Input
                type="text"
                value="+91"
                disabled
                className="bg-background border-border text-lg py-6"
              />
            </div>
            <Input
              type="tel"
              placeholder="Phone"
              className="flex-1 bg-background border-border text-lg py-6"
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Message"
              rows={6}
              className="bg-background border-border text-lg resize-none"
            />
          </div>
          
          <Button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};
