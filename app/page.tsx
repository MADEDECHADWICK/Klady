import Aspect from "@/components/AspectRatio";
import LeftSide from "@/components/LeftSide";

export default function Home() {
  return (
    <div className="flex">
     <LeftSide/>
     <div className="py-4">
        <Aspect/>
     </div>
    </div>
  );
}
