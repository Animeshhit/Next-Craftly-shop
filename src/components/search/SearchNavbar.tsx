import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Suspense } from "react";

const SearchNavbar = async () => {
  let req = await fetch(`${process.env.SERVERHOST}/api/v1/categories`);
  if (!req.ok) {
    throw new Error("Failed To Load");
  }
  let ctgs = await req.json();
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Category</AccordionTrigger>
          <Suspense fallback={<p>Loading...</p>}>
            <AccordionContent className="px-3">
              {ctgs &&
                ctgs.map((item: { name: string }, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center mb-4 space-x-2"
                    >
                      <Checkbox id={item.name} />
                      <label
                        htmlFor={item.name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {item.name}
                      </label>
                    </div>
                  );
                })}
            </AccordionContent>
          </Suspense>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent className="px-3">
            {Array.from({ length: 8 }).map((_, index: number) => {
              if (index < 1) {
                return (
                  <div key={index} className="flex items-center mb-4 space-x-2">
                    <Checkbox id={`${index}`} />
                    <label
                      htmlFor={`${index}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {index} - {index + 1 * 100}
                    </label>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="flex items-center mb-4 space-x-2">
                    <Checkbox id={`${index}`} />
                    <label
                      htmlFor={`${index}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {index * 200} - {index * 400}
                    </label>
                  </div>
                );
              }
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SearchNavbar;
