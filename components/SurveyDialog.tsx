"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Layers, Activity, BarChart3, Users, Settings, Brain} from "lucide-react";
import { Button } from "@/components/ui/button";
import {Dialog, DialogContent, DialogTrigger, DialogTitle} from "@/components/ui/dialog";
import KWashFramework from "@/components/survey/KWashFramework";
import InfrastructureTech from "@/components/survey/InfrastructureTech";
import EquitableAccess from "@/components/survey/EquitableAccess";
import OperationsManagement from "@/components/survey/OperationsManagement";
import PsychosocialFactors from "@/components/survey/PsychosocialFactors";

export default function SurveyDialog() {
  const [activeTab, setActiveTab] = useState("kwash");
  const [activeSubTab, setActiveSubTab] = useState("infrastructure");

  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
              variant="outline"
              className={`
                        cursor-pointer border text-[var(--text-primary)] border-[var(--text-primary)]
                        bg-transparent font-medium transition-all duration-300 
                        hover:bg-[var(--accent)] hover:text-[var(--accent-text)] hover:border-[var(--accent)]
                        focus:outline-none focus:ring-1 focus:ring-[var(--accent)] focus:ring-offset-2
                        active:scale-[0.98]
                      `}
          >
            Water Sanitation & Hygiene at Kumbh Mela 2025
          </Button>


        </DialogTrigger>

      <DialogContent className="max-w-[95vw]! max-h-[98vh]! w-[95vw]! h-[98vh]! p-0! overflow-hidden!">
          <DialogTitle className="sr-only">K-WaSH Dashboard</DialogTitle>

          <div className="relative h-full bg-background overflow-auto">
            {/* Background Blur Decorations */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
              <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 h-64 w-[48rem] -translate-x-1/2 rounded-[999px] bg-blue-200/30 blur-3xl" />
            </div>

            <div className="container mx-auto py-14 px-6 md:px-10">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                {/* Main Tabs */}
                <div className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border/40">
                  <TabsList className="flex w-full rounded-2xl bg-card/80 backdrop-blur border border-border/40 shadow-lg">
                    <TabsTrigger
                        value="kwash"
                        className="flex-1 cursor-pointer rounded-full px-6 py-2 font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
                    >
                      <Layers className="w-4 h-4 mr-2" />
                      K-WaSH Framework
                    </TabsTrigger>

                    <TabsTrigger
                        value="state"
                        className="flex-1 cursor-pointer rounded-full px-6 py-2 font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
                    >
                      <Activity className="w-4 h-4 mr-2" />
                      State of WaSH Services
                    </TabsTrigger>
                  </TabsList>

                </div>

                {/* Tab Content */}
                <TabsContent value="kwash" className="mt-6">
                  <KWashFramework />
                </TabsContent>

                <TabsContent value="state" className="mt-6">
                  {/* Sub Tabs */}
                  <Tabs value={activeSubTab} onValueChange={setActiveSubTab}>
                    <div className="sticky top-[45px] z-40 bg-background/80 backdrop-blur border-b border-border/40">
                      <TabsList className="flex w-full gap-2 p-3 rounded-2xl bg-card/80 backdrop-blur border border-border/40 shadow-lg">
                        <TabsTrigger
                            value="infrastructure"
                            className="flex-1 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
                        >
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Infrastructure & Technology
                        </TabsTrigger>

                        <TabsTrigger
                            value="access"
                            className="flex-1 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
                        >
                          <Users className="w-4 h-4 mr-2" />
                          Equitable Access
                        </TabsTrigger>

                        <TabsTrigger
                            value="operations"
                            className="flex-1 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Operations & Management
                        </TabsTrigger>

                        <TabsTrigger
                            value="psychosocial"
                            className="flex-1 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
                        >
                          <Brain className="w-4 h-4 mr-2" />
                          Psychosocial Factors
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    {/* Sub-tab content */}
                    <div className="mt-6">
                      <TabsContent value="infrastructure">
                        <InfrastructureTech />
                      </TabsContent>
                      <TabsContent value="access">
                        <EquitableAccess />
                      </TabsContent>
                      <TabsContent value="operations">
                        <OperationsManagement />
                      </TabsContent>
                      <TabsContent value="psychosocial">
                        <PsychosocialFactors />
                      </TabsContent>
                    </div>
                  </Tabs>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </DialogContent>
      </Dialog>
  );
}
