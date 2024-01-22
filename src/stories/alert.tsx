import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./button";
import clsx from "clsx"; // Import the clsx library

export interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
  icon: JSX.Element;
  iconColor: string;
  dialogTitle: string;
  dialogContent: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

function Alert({
  isOpen,
  onClose,
  icon,
  iconColor,
  dialogTitle,
  dialogContent,
  primaryButtonText,
  secondaryButtonText,
}: AlertProps) {
  const backdropClasses = clsx(
    "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  );

  const dialogClasses = clsx("fixed inset-0 z-10 w-screen overflow-y-auto", {
    "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0":
      isOpen,
  });

  const dialogPanelClasses = clsx(
    "relative transform overflow-hidden rounded-xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 dark:bg-zinc-800",
    {
      "opacity-100 translate-y-0 sm:scale-100": isOpen,
      "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95": !isOpen,
    }
  );

  const iconClasses = clsx(
    "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full",
    iconColor,
    "sm:mx-0 sm:h-10 sm:w-10"
  );

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className={clsx("relative z-10", { hidden: !isOpen })}
        onClose={onClose}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={backdropClasses} />
        </Transition.Child>

        <div className={dialogClasses}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className={dialogPanelClasses}>
              <div className="sm:flex sm:items-start">
                <div className={iconClasses}>{icon}</div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"
                  >
                    {dialogTitle}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-gray-100">
                      {dialogContent}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-2">
                <Button type="primary" onClick={onClose}>
                  {primaryButtonText}
                </Button>
                <Button type="secondary" onClick={onClose}>
                  {secondaryButtonText}
                </Button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Alert;
