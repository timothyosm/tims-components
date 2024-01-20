import React, { ReactElement, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";

interface DropdownItem {
  label: string;
  icon?: React.ElementType;
  onClick?: () => void;
  divider?: boolean;
  header?: string;
}

interface ReusableDropdownProps {
  items: DropdownItem[];
  renderItem: (item: DropdownItem, active: boolean) => ReactNode;
  buttonContent?: ReactNode;
}

const Dropdown: React.FC<ReusableDropdownProps> = ({
  items,
  renderItem,
  buttonContent = "Options",
  ...additionalProps
}) => {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
      {...additionalProps}
    >
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-50">
          {buttonContent}
        </Menu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg focus:outline-none">
          {items.map((item, index) => {
            if (item.divider) {
              return (
                <div className="divide-y divide-gray-100" key={index}></div>
              );
            } else if (item.header) {
              return (
                <div className="px-4 py-3 text-sm" key={index}>
                  {item.header}
                </div>
              );
            } else {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <React.Fragment>{renderItem(item, active)}</React.Fragment>
                  )}
                </Menu.Item>
              );
            }
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
