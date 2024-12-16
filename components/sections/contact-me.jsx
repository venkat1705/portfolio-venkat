import AnimationContainer from "@/lib/globals/animted-container";
import { MailIcon, PhoneIcon } from "lucide-react";
import { LampContainer } from "../lamp-container";

const ContactMe = () => {
  return (
    <AnimationContainer delay={0.4}>
      <LampContainer>
        <div className="flex flex-col items-center justify-center relative w-full text-center">
          <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
            I have got What u Need
          </h2>
          <p className="text-muted-foreground mt-6 max-w-lg mx-auto">
            Let’s create something amazing together! Connect with me for
            collaborations, projects, or freelance. Your vision, my craft!
          </p>
          <div className="mt-6">
            <div className="flex items-center gap-4">
              <PhoneIcon size={20} />
              <p>+919347653480</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <MailIcon size={20} />
              <p>venkataramireddyvenky@gmail.com</p>
            </div>
          </div>
        </div>
      </LampContainer>
    </AnimationContainer>
  );
};

export default ContactMe;
