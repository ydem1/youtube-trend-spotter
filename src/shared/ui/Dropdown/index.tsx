import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Icon } from "../Icon";

interface BaseDropdownItem {
  id: string;
  name: string;
}

interface DropdownProps<T extends BaseDropdownItem> {
  id: string;
  title?: string;
  data: T[];
  position?:
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-left"
    | "bottom-center"
    | "top-center";
  selectedId?: string;
  onSelect?: (id: string) => void;
  renderTitle?: (selectedItem: T, isOpen: boolean) => React.ReactNode;
  renderItem?: (item: T, selected: boolean) => React.ReactNode;
}

export const Dropdown = <T extends BaseDropdownItem>({
  id,
  title = "Select",
  data,
  position = "bottom-right",
  selectedId,
  onSelect,
  renderTitle,
  renderItem,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<T | undefined>(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined
  );

  const handleChange = (item: T) => {
    setSelectedItem(item);
    onSelect?.(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({ ref: dropdownRef, handler: () => setIsOpen(false) });

  const dropdownClass = cn(
    "absolute border border-primary/10 backdrop-blur-sm z-50 max-h-52 w-max transform overflow-y-auto rounded-xl bg-widget/50 shadow-lg transition-all duration-300 ease-out",
    {
      "scale-100 opacity-100": isOpen,
      "scale-95 opacity-0": !isOpen,
      "right-0 top-full mt-2": position === "bottom-right",
      "left-0 top-full mt-2": position === "bottom-left",
      "bottom-full right-0 mb-2": position === "top-right",
      "bottom-full left-0 mb-2": position === "top-left",
      "left-1/2 -translate-x-1/2 top-full mt-2": position === "bottom-center",
      "left-1/2 -translate-x-1/2 bottom-full mb-2": position === "top-center",
    }
  );

  return (
    <div ref={dropdownRef} className="relative h-max">
      <button
        id={id}
        className="rounded-xl border border-primary/20 bg-widget/80 px-3 py-1.5 text-sm text-default outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/40"
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {renderTitle && selectedItem ? (
          renderTitle(selectedItem, isOpen)
        ) : (
          <div className="flex w-full items-center justify-between gap-2 rounded px-4 py-2">
            <span>{selectedItem?.name || title}</span>

            <Icon
              className={cn("text-default transition-transform duration-300", {
                "-rotate-180": isOpen,
              })}
              name="arrow"
            />
          </div>
        )}
      </button>

      <div aria-label="Dropdown menu" className={dropdownClass}>
        <ul
          role="menu"
          aria-labelledby={id}
          aria-orientation="vertical"
          className="leading-10"
        >
          {data?.map((item) => {
            const isSelected = selectedItem?.id === item.id;

            return (
              <li
                className="cursor-pointer"
                key={item.id}
                onClick={() => handleChange(item)}
              >
                {renderItem ? (
                  renderItem(item, isSelected)
                ) : (
                  <div
                    className={cn(
                      "transition-hover px-3 text-default duration-300 hover:bg-background",
                      {
                        "bg-background": isSelected,
                      }
                    )}
                  >
                    <span>{item.name}</span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
