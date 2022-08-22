import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

type Props = {
  label: string;
  items: Array<{
    label: string;
    href: string;
  }>;
};

const DropdownLink = ({ items, label }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-gray-500 hover:text-blue-400 font-medium transition-colors cursor-pointer flex gap-2">
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
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={5}
        className="flex flex-col bg-white backdrop-filter "
      >
        {items.map(({ href, label }, i) => {
          return (
            <DropdownMenuItem asChild key={label + i}>
              <a
                href={href}
                className="text-gray-500 hover:text-blue-400 font-medium transition-colors cursor-pointer flex gap-2 px-2 py-2 outline-none focus-visible:outline"
              >
                {label}
              </a>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownLink;
