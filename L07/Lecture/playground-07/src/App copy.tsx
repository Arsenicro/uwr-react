import { Accordion } from "@base-ui/react/accordion";
import { Button } from "@base-ui/react/button";
import BaseUICombobox from "./baseUiComponents/Combobox";
// ../../../../components/Combobox
// @/components/Combobox 

function PlusIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 12 12" fill="currentcolor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}


const accordionItems = [
  {
    title: "What is Base UI?",
    content: "Base UI is a library of high-quality unstyled React components for design systems and web apps.",
  },
  {
    title: "How do I get started?",
    content: "Head to the “Quick start” guide in the docs. If you’ve used unstyled libraries before, you’ll feel at home.",
  },
  {
    title: "Can I use it for my project?",
    content: "Of course! Base UI is free and open source.",
  },
]


function App() {

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 dark:bg-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Playground
        </h1>

        <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden dark:border-gray-700 dark:bg-gray-800">
          <Button className="flex items-center justify-center h-10 px-3.5 m-0 outline-0 border border-gray-200 rounded-md bg-gray-50 font-inherit text-base font-normal leading-6 text-gray-900 select-none hover:data-[disabled]:bg-gray-50 hover:bg-gray-100 active:data-[disabled]:bg-gray-50 active:bg-gray-200 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:-outline-offset-1 data-[disabled]:text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:data-[disabled]:bg-gray-800 dark:hover:bg-gray-700 dark:active:data-[disabled]:bg-gray-800 dark:active:bg-gray-600 dark:active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] dark:active:border-t-gray-500 dark:active:data-[disabled]:shadow-none dark:active:data-[disabled]:border-t-gray-700 dark:focus-visible:outline-blue-300 data-[disabled]:cursor-not-allowed">
            Click me
          </Button>

          <Accordion.Root className="flex w-96 max-w-[calc(100vw-8rem)] flex-col justify-center text-gray-900">

            {accordionItems.map((item) => (
              <Accordion.Item className="border-b border-gray-200">
                <Accordion.Header>
                  <Accordion.Trigger className="group relative flex w-full items-baseline justify-between gap-4 bg-gray-50 py-2 pr-1 pl-3 text-left font-normal hover:bg-gray-100 focus-visible:z-1 focus-visible:outline-2 focus-visible:outline-blue-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100">
                    {item.title}
                    <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-gray-600 transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 dark:text-gray-400">
                  <div className="p-3">
                    {item.content}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            ))}

          </Accordion.Root>

          <BaseUICombobox label="Choose a fruit" items={[
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
            { label: 'Cherry', value: 'cherry' },
          ]}
          />
        </div>
      </div>
    </div>
  )
}

export default App
