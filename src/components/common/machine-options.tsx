import { useState } from "react";

export default function MachineOptions() {
  const [mainOpen, setMainOpen] = useState<boolean>(false);
  const [manualOpen, setManualOpen] = useState<boolean>(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setMainOpen(true)}
    >
      <p className={`text-white cursor-pointer`}>Máquinas</p>
      {mainOpen && (
        <div
          className="absolute top-full left-1 mt-1 bg-[#0e0458e6] p-2 shadow-lg z-50"
          onMouseEnter={() => setMainOpen(true)}
          onMouseLeave={() => setMainOpen(false)}
        >
          <p
            className="text-white p-2 mb-1 cursor-pointer"
            onMouseEnter={() => setManualOpen(true)}
            onMouseLeave={() => setManualOpen(false)}
          >
            Manuais
          </p>

          {manualOpen && (
            <div className="absolute w-44 bg-[#0e0458e6] top-1 left-43 shadow-lg z-50"
            onMouseEnter={() => setManualOpen(true)}
            onMouseLeave={() => setManualOpen(false)}>
              <p className="text-white p-2 cursor-pointer">Flamador Manual</p>
            </div>
          )}

          <p className="text-white p-2 mb-1 cursor-pointer">Semiautomáticas</p>

          <p className="text-white p-2 mb-1 cursor-pointer">Automáticas</p>
        </div>
      )}
    </div>
  );
}
