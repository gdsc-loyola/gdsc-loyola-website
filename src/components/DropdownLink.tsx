// import * as Tooltip from "@radix-ui/react-tooltip";
import { useFloating } from "@floating-ui/react-dom";

import { useState } from "react";

type Props = {
  label: string;
  items: Array<{
    label: string;
    href: string;
  }>;
  fullWidth?: boolean;
  inFlow?: boolean;
};

export default function DropdownLink({
  items,
  label,
  fullWidth,
  inFlow,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, reference, floating, strategy } = useFloating({
    placement: "bottom-start",
    strategy: "fixed",
  });

  if (inFlow) {
    return (
      <div>
        <button
          className={`flex cursor-pointer gap-2 font-medium text-gray-500 transition-colors hover:text-blue-400`}
          onClick={() => setIsOpen((p) => !p)}
        >
          {label}

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z" />
          </svg>
        </button>

        {isOpen && (
          <div className="flex flex-col gap-5 pt-3">
            {items.map(({ href, label }, i) => {
              return (
                <a
                  href={href}
                  key={i}
                  className="flex cursor-pointer gap-2 px-2 py-2 font-medium text-gray-500 transition-colors hover:text-blue-400"
                >
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex cursor-pointer gap-2 font-medium text-gray-500 transition-colors hover:text-blue-400 ${
          fullWidth && "w-full justify-center py-2"
        }`}
        ref={reference}
      >
        {label}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z" />
        </svg>
      </button>
      {isOpen && (
        <div
          className="pt-[5px]"
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
        >
          <div className="flex flex-col whitespace-nowrap bg-white backdrop-filter">
            {items.map(({ href, label }, i) => {
              return (
                <a
                  key={i}
                  href={href}
                  className="flex cursor-pointer gap-2 px-2 py-2 font-medium text-gray-500 transition-colors hover:text-blue-400"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  // return (
  //   <Tooltip.Provider delayDuration={0}>
  //     <Tooltip.Root>
  //       <Tooltip.TooltipTrigger
  //         className={`flex cursor-pointer gap-2 font-medium text-gray-500 transition-colors hover:text-blue-400 ${
  //           fullWidth && "w-full justify-center py-2"
  //         }`}
  //       >
  //         {label}
  //         <svg
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           className="fill-current"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z" />
  //         </svg>
  //       </Tooltip.TooltipTrigger>
  //       <Tooltip.TooltipPortal>
  //         <Tooltip.TooltipContent
  //           align="start"
  //           sideOffset={5}
  //           className="flex flex-col bg-white backdrop-filter "
  //         >
  //           {items.map(({ href, label }, i) => {
  //             return (
  //               <a
  //                 key={i}
  //                 href={href}
  //                 className="flex cursor-pointer gap-2 px-2 py-2 font-medium text-gray-500 transition-colors hover:text-blue-400"
  //               >
  //                 {label}
  //               </a>
  //             );
  //           })}
  //         </Tooltip.TooltipContent>
  //       </Tooltip.TooltipPortal>
  //     </Tooltip.Root>
  //   </Tooltip.Provider>
  // );
}
