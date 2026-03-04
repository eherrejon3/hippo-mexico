import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function AccordionCategories() {
  return (
    <Accordion
      type="multiple"
      className="min-w-[100vh]"
    >
      <AccordionItem value="regular">
        <AccordionTrigger className="text-[20px]">Regular Categories</AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]"></TableHead>
                <TableHead className="text-[20px]">BABY HIPPO</TableHead>
                <TableHead className="text-[20px]">LITTLE HIPPO</TableHead>
                <TableHead className="text-[20px]">HIPPO 1</TableHead>
                <TableHead className="text-[20px]">HIPPO 2</TableHead>
                <TableHead className="text-[20px]">HIPPO 3</TableHead>
                <TableHead className="text-[20px]">HIPPO 4</TableHead>
                <TableHead className="text-[20px]">HIPPO 5</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-bold text-[18px]">CEFR Level Preliminary</TableCell>
                <TableCell className="text-[15px]">CEFR Pre A1 YL</TableCell>
                <TableCell className="text-[15px]">CEFR Pre A1 YL</TableCell>
                <TableCell className="text-[15px]">CEFR A1 YL</TableCell>
                <TableCell className="text-[15px]">CEFR A1</TableCell>
                <TableCell className="text-[15px]">CEFR A2</TableCell>
                <TableCell className="text-[15px]">CEFR B1</TableCell>
                <TableCell className="text-[15px]">CEFR B2</TableCell>
                </TableRow>
            </TableBody>
            <TableBody>
                <TableRow>
                <TableCell className="font-bold text-[18px]">CEFR National Finals<br/> and Finals</TableCell>
                <TableCell className="text-[15px]">CEFR A1 YL</TableCell>
                <TableCell className="text-[15px]">CEFR A1 YL</TableCell>
                <TableCell className="text-[15px]">CEFR A2 YL</TableCell>
                <TableCell className="text-[15px]">CEFR A2</TableCell>
                <TableCell className="text-[15px]">CEFR B1</TableCell>
                <TableCell className="text-[15px]">CEFR B2</TableCell>
                <TableCell className="text-[15px]">CEFR C1</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="special">
        <AccordionTrigger className="text-[20px]">Special Categories (Bilingual Students)</AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]"></TableHead>
                    <TableHead className="text-[20px]">SPECIAL 1</TableHead>
                    <TableHead className="text-[20px]">SPECIAL 2</TableHead>
                    <TableHead className="text-[20px]">SPECIAL 3</TableHead>
                    <TableHead className="text-[20px]">SPECIAL 4</TableHead>
                    <TableHead className="text-[20px]">SPECIAL 5</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-bold text-[18px]">CEFR Level Preliminary</TableCell>
                <TableCell className="text-[15px]">CEFR A1</TableCell>
                <TableCell className="text-[15px]">CEFR A2</TableCell>
                <TableCell className="text-[15px]">CEFR B1</TableCell>
                <TableCell className="text-[15px]">CEFR B2</TableCell>
                <TableCell className="text-[15px]">CEFR C1</TableCell>
                </TableRow>
            </TableBody>
            <TableBody>
                <TableRow>
                <TableCell className="font-bold text-[18px]">CEFR National Finals<br/> and Finals</TableCell>
                <TableCell className="text-[15px]">CEFR A2</TableCell>
                <TableCell className="text-[15px]">CEFR B1</TableCell>
                <TableCell className="text-[15px]">CEFR B2</TableCell>
                <TableCell className="text-[15px]">CEFR C1</TableCell>
                <TableCell className="text-[15px]">CEFR C2</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
