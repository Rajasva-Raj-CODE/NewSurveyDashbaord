"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface PhaseFilterProps {
  selectedPhase: string;
  onPhaseChange: (phase: string) => void;
}

export function PhaseFilter({ selectedPhase, onPhaseChange }: PhaseFilterProps) {
  const phases = ["Pre", "During", "Post"];

  return (
      <ToggleGroup
          type="single"
          value={selectedPhase}
          onValueChange={(v) => v && onPhaseChange(v)}
          className="flex justify-between w-full mb-5 border border-slate-200 rounded-lg p-1 shadow-sm bg-white"
      >
        {phases.map((phase) => (
            <ToggleGroupItem
                key={phase}
                value={phase}
                aria-label={`Select ${phase}`}
                className="
            flex-1
            text-center
            py-2
            rounded-lg
            transition
            cursor-pointer
            data-[state=on]:bg-gradient-to-r
            data-[state=on]:from-sky-400
            data-[state=on]:to-sky-600
            data-[state=on]:text-white
            data-[state=off]:text-slate-700
          "
            >
              {phase}
            </ToggleGroupItem>
        ))}
      </ToggleGroup>
  );
}
