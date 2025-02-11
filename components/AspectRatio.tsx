import { AspectRatio } from "@/components/ui/aspect-ratio"
import Offer from "./Offer"


const Aspect = () => {
  return (
    <div className="w-[600px] border-b-2 border-gray-300 py-12">
      <AspectRatio ratio={4 / 1}>
        <Offer/>
      </AspectRatio>
</div>
  )
}

export default Aspect