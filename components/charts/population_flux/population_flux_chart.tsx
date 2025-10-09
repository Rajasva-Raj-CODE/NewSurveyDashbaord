"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndiaMap } from "./india-map";
import { MapLegend } from "./map-legend";
import { PhaseFilter } from "./phase-filter";

export default function PopulationFluxChart() {
  const [selectedPhase, setSelectedPhase] = useState("During");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="space-y-4">
            <CardTitle className="text-2xl md:text-3xl font-bold text-center text-gray-900">
              Population Flux Across India
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="w-full h-[600px]">
                    <IndiaMap selectedPhase={selectedPhase} />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="flex justify-center">
                  <PhaseFilter
                      selectedPhase={selectedPhase}
                      onPhaseChange={setSelectedPhase}
                  />
                </div>
                <MapLegend />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
