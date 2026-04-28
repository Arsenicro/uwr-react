import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion"
import { Calendar } from "./components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"

function App() {

  const [date, setDate] = useState<Date | undefined>(new Date())


  return (
    <div className="dark min-h-screen bg-background flex items-center justify-center">


      <Card className="w-full max-w-sm flex">
        <CardHeader>
          <CardTitle>Playground</CardTitle>

        </CardHeader>
        <CardContent>
          <Button variant="destructive">Click Me</Button>

          <Accordion defaultValue={["shipping"]} className="max-w-lg">
            <AccordionItem value="shipping">
              <AccordionTrigger>What are your shipping options?</AccordionTrigger>
              <AccordionContent>
                We offer standard (5-7 days), express (2-3 days), and overnight
                shipping. Free shipping on international orders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                Returns accepted within 30 days. Items must be unused and in original
                packaging. Refunds processed within 5-7 business days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
              <AccordionContent>
                Reach us via email, live chat, or phone. We respond within 24 hours
                during business days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>


          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
            captionLayout="dropdown"
          />

        </CardContent>

      </Card>

    </div>
  )
}

export default App
