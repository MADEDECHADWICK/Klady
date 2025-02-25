import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "../ui/button"


function Categories ({title,content}: {title:string,content:React.ReactNode}) {
  return (
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>{title}</AccordionTrigger>
    <AccordionContent>
      {content}
      <div className="button-container">
                        <Button type="submit">Casual</Button>
                        <Button type="submit">Official</Button>
                    </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>

  )
}

export default Categories