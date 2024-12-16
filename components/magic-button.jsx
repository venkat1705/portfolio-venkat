import { Button } from "./ui/button";

const MagicButton = ({ title, icon }) => {
  return (
    <div className="relative inline-flex h-10 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1D4ED8_0%,#1D4ED8_50%,#007AFF_100%)]" />
      <Button
        variant="outline"
        className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl"
      >
        {icon}
        {title}
      </Button>
    </div>
  );
};

export default MagicButton;
