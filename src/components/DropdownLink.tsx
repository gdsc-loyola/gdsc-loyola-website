import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { useState } from 'react';

type Props = {
  label: string;
  items: Array<{
    label: string;
    href: string;
  }>;
  fullWidth?: boolean;
  inFlow?: boolean;
};

export default function DropdownLink({ items, label, fullWidth, inFlow }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  if (inFlow) {
    return (
      <div>
        <button
          className={`text-gray-500 hover:text-blue-400 font-medium transition-colors cursor-pointer flex gap-2`}
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
                  className="text-gray-500 hover:text-blue-400 font-medium transition-colors cursor-pointer flex gap-2 px-2 py-2"
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
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger
          className={`text-gray-500 hover:text-blue-400 font-medium transition-colors cursor-pointer flex gap-2 ${
            fullWidth && 'w-full justify-center py-2'
          }`}
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
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            align="start"
            sideOffset={5}
            className="flex flex-col bg-white backdrop-filter "
          >
            {items.map(({ href, label }, i) => {
              return (
                <a
                  key={i}
                  href={href}
                  className="text-gray-500 hover:text-blue-400 font-medium transition-colors cursor-pointer flex gap-2 px-2 py-2"
                >
                  {label}
                </a>
              );
            })}
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
}
