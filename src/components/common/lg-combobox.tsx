"use client";

import i18n from "i18next";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  {
    value: "pt",
    label: "Português",
  },
  {
    value: "en",
    label: "English",
  },
  {
    value: "es",
    label: "Español",
  },
]

export default function LgCombobox() {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? languages.find((l) => l.value === value)?.label
            : "🇧🇷 🇺🇸 🇪🇸"}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Selecione uma lingua" />
          <CommandList>
            <CommandEmpty>Liguagem não suportada.</CommandEmpty>
            <CommandGroup>
              {languages.map((l) => (
                <CommandItem
                  key={l.value}
                  value={l.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? currentValue : currentValue);
                    setOpen(false);
                    i18n.changeLanguage(currentValue);
                    localStorage.setItem("lang", currentValue);
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === l.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {l.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}