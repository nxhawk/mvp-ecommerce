import SimpleCanvas from "@/components/canvas/SimpleCanvas";
import { diagram } from "@/constants/heroDiagram";

const ErdGenerate = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      {/* Canvas */}
      <div className="h-0 md:h-[25rem] w-full bg-white mb-6 rounded-2xl shadow-lg">
        <SimpleCanvas diagram={diagram} zoom={0.85} />
      </div>
    </div>
  );
};

export default ErdGenerate;
