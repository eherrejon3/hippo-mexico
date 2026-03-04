import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactsPage() {
  return (
    <>
    <div className="container wide pt-5 pb-20 flex flex-wrap justify-center">
      <Card className="relative mx-4 mb-4 w-full max-w-sm pt-0">
        <img
          src="/images/portfolio/country_coordinator.jpg"
          alt="Event cover"
          className="relative z-20 w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="text-[25px]">Ing. Martin Herrejon</CardTitle>
          <Badge variant="secondary">Country Coordinator</Badge>
        </CardHeader>
        <CardFooter className="min-w-full">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[15px]">Contact Information</AccordionTrigger>
              <AccordionContent className="text-[15px]">
                Mail: <a href="mailto:hippomexico1@gmail.com" className="dark:text-[#0084b4] dark:hover:text-[#97bddd] text-[#f39200] hover:text-[#fbba00]"><u>hippomexico1@gmail.com</u></a>
              </AccordionContent>
              <AccordionContent className="text-[15px]">
                Tel: +52 55 3678 9012
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardFooter>
      </Card>

      <Card className="relative mx-4 mb-4 w-full max-w-sm pt-0">
        <img
          src="/images/portfolio/coordinator_estado_de_mexico.jpg"
          alt="Event cover"
          className="relative z-20 w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="text-[25px]">Ivonne Mireles</CardTitle>
          <Badge variant="secondary">Coordinator for Estado de México</Badge>
          <CardDescription>
            Instituto Inglés de Toluca
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[15px]">Contact Information</AccordionTrigger>
              <AccordionContent className="text-[15px]">
                Mail: <a href="mailto:ivonne.falecguas@gmail.com" className="dark:text-[#0084b4] dark:hover:text-[#97bddd] text-[#f39200] hover:text-[#fbba00]"><u>ivonne.falecguas@gmail.com</u></a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardFooter>
      </Card>

      <Card className="relative mx-4 mb-4 w-full max-w-sm pt-0">
        <img
          src="/images/portfolio/coordinator.jpg"
          alt="Event cover"
          className="relative z-20 w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="text-[25px]">Alma Pérez de la Luz</CardTitle>
          <Badge variant="secondary">Coordinator</Badge>
        </CardHeader>
        <CardFooter>
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[15px]">Contact Information</AccordionTrigger>
              <AccordionContent className="text-[15px]">
                Mail: <a href="mailto:idiomascobi@gmail.com" className="dark:text-[#0084b4] dark:hover:text-[#97bddd] text-[#f39200] hover:text-[#fbba00]"><u>idiomascobi@gmail.com</u></a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardFooter>
      </Card>

      <Card className="relative mx-4 mb-4 w-full max-w-sm pt-0">
        <img
          src="/images/portfolio/coordinator_central_north_mexico.jpg"
          alt="Event cover"
          className="relative z-20 w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="text-[25px]">Misael Michel Montañez Duran</CardTitle>
          <Badge variant="secondary">Coordinator: Central & North Mexico</Badge>
        </CardHeader>
        <CardFooter>
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[15px]">Contact Information</AccordionTrigger>
              <AccordionContent className="text-[15px]">
                Mail: <a href="mailto:mduran.trebol@gmail.com" className="dark:text-[#0084b4] dark:hover:text-[#97bddd] text-[#f39200] hover:text-[#fbba00]"><u>mduran.trebol@gmail.com</u></a>
              </AccordionContent>
              <AccordionContent className="text-[15px]">
                Tel: +52 47 2108 0550
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardFooter>
      </Card>
    </div>
    <p className="container text-center text-[20px] pb-10">For any other further inquiries, contact <a href="mailto:info@hippo-thecontest.org" className="dark:text-[#0084b4] dark:hover:text-[#97bddd] text-[#f39200] hover:text-[#fbba00]"><u>info@hippo-thecontest.org</u></a> for any more questions.</p>
    </>
  );
}