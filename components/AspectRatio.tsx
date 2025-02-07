import { AspectRatio } from "@/components/ui/aspect-ratio"
import Offer from "./Offer"


const Aspect = () => {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <Offer/>
      </AspectRatio>
</div>
  )
}

export default Aspect