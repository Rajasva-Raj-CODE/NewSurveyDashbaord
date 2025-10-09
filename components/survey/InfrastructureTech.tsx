"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  PieChart,
  Pie,
  Cell,
  Treemap,
  ResponsiveContainer,
  RadialBarChart,
} from "recharts";
import {
  Pipette,
  Droplets,
  Columns2,
  LayoutGrid,
  Truck,
  Factory,
  Trees,
  Recycle,
  MapPinned,
  Droplet,
} from "lucide-react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
};

function SectionHeadingInline({
  title,
  subtitle,
  icon,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1 flex items-center gap-2">
        {icon ? <span className="text-primary">{icon}</span> : null}
        <span>{title}</span>
      </h2>
      {subtitle ? <p className="text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

function iconFor(key: string) {
  const lower = key.toLowerCase();
  // Specific matches for sub-indicators used in the colorful data cards
  if (lower.includes("pipeline")) return <Pipette className="h-5 w-5" />;
  if (lower.includes("atm")) return <Droplets className="h-5 w-5" />;
  if (lower.includes("tap")) return <Droplet className="h-5 w-5" />;
  if (lower.includes("standpost")) return <MapPinned className="h-5 w-5" />;
  if (lower.includes("tubewell")) return <Droplets className="h-5 w-5" />;
  if (lower.includes("water supply")) return <Pipette className="h-5 w-5" />;
  if (lower.includes("extraction")) return <Droplets className="h-5 w-5" />;
  if (lower.includes("toilet")) return <Columns2 className="h-5 w-5" />;
  if (lower.includes("wastewater collection"))
    return <LayoutGrid className="h-5 w-5" />;
  if (lower.includes("transport")) return <Truck className="h-5 w-5" />;
  if (lower.includes("treatment")) return <Factory className="h-5 w-5" />;
  if (lower.includes("disposal")) return <Trees className="h-5 w-5" />;
  if (lower.includes("solid waste")) return <Recycle className="h-5 w-5" />;
  if (lower.includes("signage")) return <MapPinned className="h-5 w-5" />;
  return <Pipette className="h-5 w-5" />;
}
export default function InfrastructureTech() {
  const mainRows = [
    {
      sno: "1",
      indicator:
        "Types of water supply infrastructure and number of water access points",
      definition:
        "This indicator displays the diversity and distribution of water supply infrastructure available during Maha Kumbh Mela 2025.",
      isParent: true,
      subIndicators: [
        {
          sno: "1a",
          indicator: "Total water supply pipeline length",
          definition: "",
          data: [{ label: "Value", value: "1295 km" }],
        },
        {
          sno: "1b",
          indicator: "Water ATMs",
          definition: "",
          data: [{ label: "Value", value: "233" }],
        },
        {
          sno: "1c",
          indicator: "Tap Connections",
          definition: "",
          data: [{ label: "Value", value: "1,12,151" }],
        },
        {
          sno: "1d",
          indicator: "Standposts",
          definition: "",
          data: [{ label: "Value", value: "6,500" }],
        },
        {
          sno: "1e",
          indicator: "Tubewells",
          definition:
            "This indicator displays the diversity and distribution of water extraction systems available during Maha Kumbh Mela 2025",
          data: [{ label: "Value", value: "85" }],
        },
      ],
    },
    {
      sno: "3",
      indicator: "Types and Number of toilets (latrines, urinals)",
      definition:
        "This indicator displays the diversity and distribution of toilets available during Maha Kumbh Mela 2025",
      data: [
        { label: "Types", value: "10" },
        { label: "Total units (approx.)", value: "1,50,000" },
        { label: "See Table 1 and Figures A–D", value: "Image placeholders" },
      ],
    },
    {
      sno: "5",
      indicator:
        "Types and number of wastewater collection units (Wastewater Drains)",
      definition:
        "This indicator displays infrastructure provided to collect wastewater in the sectors of Maha Kumbh Mela 2025.",
      data: [
        {
          label: "Description",
          value:
            "Kutcha drains laid; wastewater disposed at stabilization ponds for bio-culturing; transported to STPs. Refer Figure K.",
        },
      ],
    },
    {
      sno: "6",
      indicator: "Types and number of wastewater transportation units",
      definition:
        "This indicator displays diversity and distribution of vehicles deployed to transport wastewater from Kumbh catchment to nearby treatment plants",
      data: [
        { label: "Suction vehicles", value: "300" },
        { label: "PMA owned", value: "90" },
        { label: "See Table 2", value: "Details" },
      ],
    },
    {
      sno: "7",
      indicator: "Treatment Plants",
      definition:
        "This indicator displays infrastructure provided to treat the wastewater during Maha Kumbh Mela 2025",
      data: [{ label: "See Table 3", value: "Details" }],
    },
    {
      sno: "8",
      indicator: "Types and number of wastewater disposal units",
      definition:
        "This indicator talks about the wastewater disposal points other than Treatment facilities.",
      data: [
        { label: "Stabilization ponds", value: "50" },
        { label: "See Figure E", value: "Image placeholder" },
      ],
    },
    {
      sno: "9",
      indicator: "Solid waste collection units",
      definition:
        "Solid waste collection units are facilities that enable the organized and hygienic collection of solid waste in Maha Kumbh Mela 2025",
      data: [{ label: "See Table 4", value: "Details" }],
    },
    {
      sno: "10",
      indicator: "Signage infrastructure for WASH services",
      definition:
        "Signage infrastructure in the Kumbh Mela displays the system of visual communication tools used to guide and inform pilgrims about WASH infrastructure",
      data: [
        {
          label: "Figures",
          value: "See Figures F, G, H, I, J and M (image placeholders)",
        },
      ],
    },
  ];

  const toiletTypes = [
    { type: "VIP toilets", value: 1673 },
    { type: "Kanath toilets", value: 53760 },
    { type: "FRP with Soak pit", value: 16072 },
    { type: "FRP with Septic", value: 13212 },
    { type: "Steel with Septic", value: 11053 },
    { type: "Steel with Soak pit", value: 22382 },
    { type: "Urinal with Septic tank", value: 20000 },
    { type: "Cemented Toilet 6x4", value: 7926 },
    { type: "Cemented Toilet 8x8", value: 6373 },
    { type: "Mobile Toilets", value: 2120 },
  ];
  const wastewaterData = {
    total: 300,
    vendors: [
      { vendor: "PMA", machines: 90 },
      { vendor: "Bhutani", machines: 80 },
      { vendor: "YLDA", machines: 14 },
      { vendor: "LJS", machines: 21 },
      { vendor: "Saldar", machines: 7 },
      { vendor: "Sahyogi", machines: 25 },
      { vendor: "ICESPL", machines: 6 },
      { vendor: "Kate", machines: 4 },
      { vendor: "Saraplast", machines: 12 },
      { vendor: "JR Project", machines: 1 },
      { vendor: "Surbhi", machines: 20 },
      { vendor: "AP Infra", machines: 20 },
    ],
  };

  const wastewaterInfraBySector = [
    {
      sectors: "Sector 1,2,3,4",
      infra: "Sewer lines connected to newly constructed Salori STP",
    },
    { sectors: "Sector 6,7", infra: "Salori STP" },
    { sectors: "Sector 8,9,10", infra: "Phaphamau Temporary STP" },
    { sectors: "Sector 5, 18,19, 20, 21, 22", infra: "Jhusi Adani STP" },
    { sectors: "Sector 11,12,14", infra: "Temporary STP (Geotubes)" },
  ];

  const wasteMgmtItems = [
    {
      item: "Dustbins",
      qty: "20,000 (at every 50-100m distance)",
      value: 20000,
    },
    { item: "Compactors", qty: "40 (1-2/ sector)", value: 40 },
    { item: "Tippers", qty: "145 (5-6/sector)", value: 145 },
    {
      item: "Liner Bags",
      qty: "37 lakhs liner bags changed thrice a day",
      value: 3700000,
    },
  ];

  // Chart configuration for toilet types pie chart
  const toiletChartConfig = {
    count: {
      label: "Number of Toilets",
    },
  };

  // Colors for pie chart segments
  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7300",
    "#00ff00",
    "#ff00ff",
    "#00ffff",
    "#ffff00",
    "#ff0000",
    "#0000ff",
  ];

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight mb-4 text-center leading-tight bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
        State of Infrastructure and Technology of WASH services
        <span className="text-primary block text-lg font-normal mt-1">
          (Key Stakeholder: Government officials)
        </span>
      </h1>

      <SectionHeadingInline
        className="mb-4"
        title="Types of water supply"
        subtitle="(infrastructure and number of water access points)"
        icon={iconFor("water supply")}
      />
      {/* Sub-indicator cards with icon, colorful backgrounds, and readable content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {mainRows
          .filter((row) => row.isParent && row.subIndicators)
          .flatMap(
            (row) =>
              row.subIndicators?.map((subRow) => ({
                ...subRow,
                parentDefinition: row.definition,
              })) || []
          )
          .map((subRow, idx) => {
            const lower = subRow.indicator.toLowerCase();
            const imageSrc =
              (lower.includes("pipeline") && "/indicators/piplinepic.png") ||
              (lower.includes("atm") && "/indicators/water-atm.png") ||
              (lower.includes("tap") && "/indicators/tap.png") ||
              (lower.includes("standpost") && "/indicators/standpost.png") ||
              (lower.includes("tubewell") && "/indicators/tubewell.png") ||
              "/file.svg";
            // Vibrant, readable gradient backgrounds per card
            const bgClasses = [
              "from-sky-500/60 to-blue-700/60",
              "from-emerald-500/60 to-teal-700/60",
              "from-fuchsia-500/60 to-purple-700/60",
              "from-amber-500/60 to-orange-600/60",
              "from-rose-500/60 to-pink-700/60",
              "from-indigo-500/60 to-violet-700/60",
              "from-cyan-500/60 to-sky-700/60",
              "from-lime-500/60 to-green-700/60",
              "from-red-500/60 to-rose-700/60",
              "from-yellow-500/60 to-amber-600/60",
            ];
            const bg = bgClasses[idx % bgClasses.length];

            return (
              <div
                key={subRow.sno}
                className={`group relative overflow-hidden rounded-2xl border border-border/60 flex flex-col shadow-sm transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-2xl hover:border-white/20 bg-gradient-to-br ${bg}`}
              >
                <div className="p-3 flex-1 flex flex-col">
                  {/* Icon using the provided image as a small badge, not a background */}
                  <div className="flex items-start justify-between">
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1 rounded-lg">
                      <img
                        src={imageSrc}
                        alt=""
                        className="h-10 rounded-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <h3 className="text-sm font-semibold leading-snug text-white">
                      {subRow.indicator}
                    </h3>
                    {subRow.definition || subRow.parentDefinition ? (
                      <p className="mt-1 text-base text-white/90 line-clamp-3">
                        {subRow.definition || subRow.parentDefinition}
                      </p>
                    ) : null}
                  </div>

                  {subRow.data?.[0]?.value ? (
                    <div className="mt-2">
                      <p className="text-2xl font-extrabold text-white drop-shadow-sm">
                        {subRow.data[0].value}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
      </div>
      {/* --- Indicator 3 Section: Toilets --- */}
      <SectionHeadingInline
        className="mb-4 mt-8"
        title="Types and Number of toilets"
        subtitle="(latrines, urinals)"
        icon={iconFor("toilets")}
      />

      {/* Toilet Infrastructure (Definition Card with Metrics) */}
      <div className="mb-6">
        <Card
          className="
    relative 
    overflow-hidden 
    p-4 
    hover:shadow-md 
    transition-all 
    duration-300 
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Purple) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-purple-500 rounded-l-lg opacity-80" />
          <CardHeader className="pb-2 pt-0 px-0">
            <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Toilet Infrastructure Overview
            </h3>
          </CardHeader>
          <CardContent className="pt-0 px-0 pb-0">
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 border-l-2 border-gray-200 dark:border-gray-700 pl-3">
              This indicator displays the diversity and distribution of toilets
              available during Maha Kumbh Mela 2025.
            </p>
            <div className="mt-2 grid grid-cols-2 gap-3">
              {/* Metric 1: Types */}
              <div className="p-2 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-700/50">
                <p className="text-xs font-medium uppercase text-purple-600 dark:text-purple-400 mb-1">
                  Total Types Available
                </p>
                <p className="text-2xl font-extrabold text-purple-700 dark:text-purple-400">
                  10
                </p>
              </div>
              {/* Metric 2: Number */}
              <div className="p-2 bg-purple-50 dark:bg-purple-900/10 rounded-lg border border-purple-100 dark:border-purple-700/50">
                <p className="text-xs font-medium uppercase text-purple-600 dark:text-purple-400 mb-1">
                  Total Units Deployed
                </p>
                <p className="text-2xl font-extrabold text-purple-700 dark:text-purple-400">
                  1,50,000
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pie Chart Section */}
      <div className="mb-4">
        <Card
          tabIndex={0}
          className="rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/40 dark:to-indigo-900/30 backdrop-blur-sm border border-border/50 shadow-md hover:bg-primary/5 dark:hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-bold">
              Toilet Types Distribution
            </CardTitle>
            <CardDescription className="text-sm">
              Pie chart showing the distribution of different toilet types with
              detailed breakdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              <ChartContainer
                config={toiletChartConfig}
                className="h-[300px] w-full"
              >
                <PieChart>
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value, name) => [
                      `${value.toLocaleString()} units`,
                      name,
                    ]}
                  />
                  <Pie
                    data={toiletTypes}
                    dataKey="value"
                    nameKey="type"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={30}
                    paddingAngle={3}
                    label={({ percent }) =>
                      percent > 0.05 ? `${(percent * 100).toFixed(1)}%` : ""
                    }
                    labelLine={false}
                  >
                    {toiletTypes.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {toiletTypes.map((toilet, index) => {
                  const percentage = (
                    (toilet.value /
                      toiletTypes.reduce((sum, t) => sum + t.value, 0)) *
                    100
                  ).toFixed(1);
                  return (
                    <div
                      key={toilet.type}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-muted/70"
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold truncate">
                          {toilet.type}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {toilet.value.toLocaleString()} units ({percentage}%)
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Figures A, B, C, D - Image Grid */}
      <div className="mb-6">
        <Card
          tabIndex={0}
          className="rounded-xl p-4 shadow-xl border-gray-200 dark:border-gray-700 dark:bg-gray-850"
        >
          <CardHeader className="pb-3 pt-0 px-0">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Standard Toilet Types
            </h3>
            <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Visual examples of toilet types used in Maha Kumbh Mela 2025.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-3 px-0 pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  caption: "Figure A: Standard Kanath toilet",
                  src: "figure_a.png",
                },
                {
                  caption: "Figure B: Standard Steel toilet",
                  src: "figure_b.png",
                },
                {
                  caption: "Figure C: Standard FRP toilets",
                  src: "figure_c.png",
                },
                {
                  caption: "Figure D: Standard Mobile compartment toilets",
                  src: "figure_d.png",
                },
              ].map((item) => (
                <Card
                  key={item.caption}
                  className="overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="w-full aspect-[4/3] relative">
                      {" "}
                      {/* Changed to aspect ratio */}
                      <Image
                        src={`/survey/Toilet_Type_Images/${item.src}`}
                        alt={item.caption}
                        fill // Use fill instead of fixed width/height
                        className="object-cover" // Changed to cover to fill the container
                      />
                      {/* Modern Caption Bar at bottom */}
                      <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm px-2 py-1">
                        <p className="text-xs font-light text-white/90">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* --- Separator --- */}
      <SectionHeadingInline
        className="mb-4 mt-8"
        title="Types and number of wastewater disposal and collection units"
        icon={iconFor("disposal")}
      />

      {/* Side-by-Side Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Left Side — Wastewater Disposal Infrastructure */}
        <Card
          className="
      relative 
      overflow-hidden 
      p-4 
      hover:shadow-md 
      transition-all 
      duration-300 
      border-gray-200 
      dark:border-gray-700
      dark:bg-gray-850
    "
        >
          {/* Decorative Accent (Red) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-red-500 rounded-l-lg opacity-80" />
          <CardHeader className="pb-3 pt-0 px-0">
            <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Wastewater Disposal Infrastructure
            </h3>
          </CardHeader>
          <CardContent className="pt-0 px-0 pb-0 space-y-3">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1">
                <p className="text-xs font-medium uppercase text-red-600 dark:text-red-400 mb-2">
                  Definition
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                  This indicator talks about wastewater disposal points other
                  than Treatment facilities. One such facility is{" "}
                  <strong>Stabilization Ponds</strong>.
                </p>
              </div>
              <div className="flex-shrink-0 p-2 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-700/50">
                <p className="text-xs font-medium uppercase text-red-600 dark:text-red-400 mb-1">
                  Total Stabilization Ponds
                </p>
                <p className="text-2xl font-extrabold text-red-700 dark:text-red-400">
                  50
                </p>
              </div>
            </div>
            <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <Image
                src="/survey/Types and number of wastewater disposal units/figure_e.png"
                alt="Wastewater Stabilization Pond in Sector 22"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
              {/* Modern Caption Bar */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm px-3 py-1">
                <p className="text-xs font-light text-white/90">
                  <strong>Figure E:</strong> Wastewater Stabilization Pond in
                  Sector 22
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Side — Wastewater Collection */}
        <Card
          className="
      relative 
      overflow-hidden 
      p-4 
      hover:shadow-lg 
      transition-all 
      duration-300 
      ease-in-out
      border-gray-200 
      dark:border-gray-700
      dark:bg-gray-850
    "
        >
          {/* Decorative Accent (Orange) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-orange-500 rounded-l-lg opacity-80" />

          <CardHeader className="pb-3 pt-0 px-0">
            <div className="flex items-start gap-3">
              <div
                className="
            p-2 
            bg-orange-500/10 
            text-orange-500 
            rounded-lg 
            flex-shrink-0
            self-start
          "
              >
                {iconFor("wastewater collection")}
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Wastewater Collection
                </h3>
                <CardDescription className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Infrastructure & System Overview
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-900/60 flex flex-col justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>

              <div className="w-full max-w-4xl px-3 pt-4 pb-3 z-20 text-center">
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-snug">
                  Kutcha drains were laid for wastewater collection, disposed at
                  a stabilization pond for bio culturing, and then transported
                  to STPs.
                </p>
              </div>

              <div
                className="
            relative 
            w-full 
            h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]
            overflow-hidden 
          "
              >
                <Image
                  src="/survey/Types and number of wastewater collection units (Wastewater Drains/figure_k.png"
                  alt="Kutcha drain in sector 19 typology in Maha Kumbh Mela 2025"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="rounded-b-xl shadow-2xl"
                />

                <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm px-4 py-2 z-20">
                  <p className="text-sm font-semibold text-white">
                    Figure K: Kutcha drain in Sector 19 typology in the Maha
                    Kumbh Mela 2025
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Indicator 6 Section */}
      <SectionHeadingInline
        className="mb-4"
        title="Types and number of wastewater transportation units"
        icon={iconFor("transport")}
      />

      <div className="mb-6">
        <Card
          className="
    relative 
    overflow-hidden 
    p-4 
    hover:shadow-xl 
    transition-all 
    duration-300 
    ease-in-out
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Modern alternative to a thick border-l) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-teal-500 rounded-l-lg opacity-80" />

          <CardHeader className="pb-3 pt-0 px-0">
            <div className="flex items-start gap-3">
              {/* Icon with a subtle, contained background */}
              <div
                className="
          p-2 
          bg-teal-500/10 
          text-teal-500 
          rounded-lg 
          flex-shrink-0
          self-start
        "
              >
                {/* Replace 'wastewater transport' with a suitable string for a modern icon */}
                {iconFor("wastewater transport")}
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Wastewater Transportation
                </h3>
                <CardDescription className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Infrastructure & Fleet Overview
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-3 px-0 pb-0">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-snug">
              This indicator displays diversity and distribution of vehicles
              deployed to transport wastewater from Kumbh catchment to nearby
              treatment plants.
            </p>

            {/* Modern Data Visualization Layout (Focus on large, easy-to-scan numbers) */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {/* Metric 1 */}
              <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700/50">
                <p className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400 mb-1 truncate">
                  Total Suction Vehicles
                </p>
                <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">
                  300
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700/50">
                <p className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400 mb-1 truncate">
                  PMA Owned Fleet
                </p>
                <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">
                  90
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transportation Vehicles Treemap */}
      <div className="mb-6">
        <Card
          className="
    rounded-xl 
    p-4 
    shadow-xl 
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          <CardHeader className="pb-3 pt-0 px-0">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Wastewater Transportation Vehicles Distribution
            </h3>
            <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Distribution of vehicles by vendor (Treemap visualization)
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-3 px-0 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
              {/* Treemap Visualization (2/3 width) */}
              <div className="lg:col-span-2">
                <ChartContainer
                  config={toiletChartConfig}
                  className="h-[350px] w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <Treemap
                      data={wastewaterData.vendors.map((vendor, index) => ({
                        ...vendor,
                        fill: COLORS[index % COLORS.length],
                      }))}
                      dataKey="machines"
                      aspectRatio={4 / 3}
                      stroke="#fff"
                      className="rounded-lg"
                    >
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-white dark:bg-gray-700 p-3 border rounded-lg shadow-xl">
                                <p className="font-semibold text-gray-900 dark:text-white">
                                  {data.vendor}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                  **{data.machines} vehicles**
                                </p>
                                <p className="text-xs text-teal-600 dark:text-teal-400">
                                  {(
                                    (data.machines / wastewaterData.total) *
                                    100
                                  ).toFixed(1)}
                                  % of total
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </Treemap>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              {/* Legend / Metrics (1/3 width) */}
              <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {wastewaterData.vendors.map((vendor, index) => {
                  const percentage = (
                    (vendor.machines / wastewaterData.total) *
                    100
                  ).toFixed(1);
                  const colorIndex = index % COLORS.length;
                  return (
                    <div
                      key={vendor.vendor}
                      className="flex items-start space-x-2 p-2 rounded-lg border border-gray-100 dark:border-gray-700/50 hover:bg-teal-500/5 transition-colors"
                    >
                      <div
                        className="w-3 h-3 rounded-full mt-1 flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: COLORS[colorIndex] }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold truncate text-gray-800 dark:text-gray-100">
                          {vendor.vendor}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {vendor.machines} vehicles
                          <span className="ml-1 text-xs font-semibold text-teal-600 dark:text-teal-400">
                            ({percentage}%)
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* --- Separator --- */}
      <SectionHeadingInline
        className="mb-4 mt-8"
        title="Treatment Plants"
        icon={iconFor("treatment")}
      />

      {/* Indicator 7: Wastewater Treatment Infrastructure (Definition Card) */}
      <div className="mb-6">
        <Card
          className="
    relative 
    overflow-hidden 
    p-4 
    hover:shadow-md 
    transition-all 
    duration-300 
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Indigo) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-indigo-500 rounded-l-lg opacity-80" />
          <CardHeader className="pb-3 pt-0 px-0">
            <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Wastewater Treatment Infrastructure
            </h3>
          </CardHeader>
          <CardContent className="pt-0 px-0 pb-0">
            <p className="text-xs font-medium uppercase text-indigo-600 dark:text-indigo-400 mb-2">
              Definition
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-3">
              This indicator displays infrastructure provided to treat the
              wastewater during Maha Kumbh Mela 2025.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Treatment Plants by Sector as cards (Radial chart removed) */}
      <div className="mb-6">
        <Card
          tabIndex={0}
          className="
      rounded-xl 
      p-4
      shadow-xl 
      border-gray-200 
      dark:border-gray-700
      bg-gradient-to-br from-indigo-50 via-sky-50 to-cyan-50
      dark:from-slate-900/40 dark:via-indigo-900/30 dark:to-cyan-900/20
      backdrop-blur-sm
    "
        >
          <CardHeader className="pb-3 pt-0 px-0">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Wastewater Treatment Infrastructure by Sector
            </h3>
            <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              All sectors with their respective infrastructure types
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-3 px-0 pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
              {wastewaterInfraBySector.map((item, index) => {
                const color = COLORS[index % COLORS.length];
                const isSTP = item.infra.includes("STP");
                return (
                  <Card
                    key={item.sectors}
                    className="group overflow-hidden border border-gray-200/70 dark:border-gray-700/60 hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-white/5 backdrop-blur-sm hover:-translate-y-0.5"
                  >
                    <div
                      className="h-1 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${color}, transparent)`,
                      }}
                    />
                    <CardContent className="p-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          <span
                            className="w-3 h-3 rounded-full mt-1 flex-shrink-0 shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                              {item.sectors}
                            </p>
                            <p
                              className="text-xs font-semibold tracking-wide uppercase"
                              style={{ color }}
                            >
                              {isSTP ? "STP Facility" : "Geo-tube Facility"}
                            </p>
                          </div>
                        </div>
                        <div className="p-1.5 rounded-full bg-white/60 dark:bg-white/10 shadow-sm">
                          {isSTP ? (
                            <Factory className="h-4 w-4" style={{ color }} />
                          ) : (
                            <Recycle className="h-4 w-4" style={{ color }} />
                          )}
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-gray-700 dark:text-gray-300">
                        {item.infra}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* --- Separator --- */}
      <SectionHeadingInline
        className="mb-4 mt-8"
        title="Solid waste collection units"
        icon={iconFor("solid waste")}
      />

      {/* Indicator 9: Solid Waste Collection Infrastructure (Definition Card) */}
      <div className="mb-6">
        <Card
          className="
    relative 
    overflow-hidden 
    p-4 
    hover:shadow-md 
    transition-all 
    duration-300 
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Yellow) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-yellow-500 rounded-l-lg opacity-80" />
          <CardHeader className="pb-3 pt-0 px-0">
            <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Solid Waste Collection Infrastructure
            </h3>
          </CardHeader>
          <CardContent className="pt-0 px-0 pb-0">
            <p className="text-xs font-medium uppercase text-yellow-600 dark:text-yellow-400 mb-2">
              Definition
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-3">
              Solid waste collection units are facilities that enable the
              organized and hygienic collection of solid waste in Maha Kumbh
              Mela 2025.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Solid Waste Management: Cards with image backgrounds (no chart) */}
      <div className="mb-6">
        <Card
          tabIndex={0}
          className="
      rounded-xl 
      p-4
      shadow-xl 
      border-gray-200 
      dark:border-gray-700
      dark:bg-gray-850
    "
        >
          <CardHeader className="pb-3 pt-0 px-0">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Solid Waste Collection Infrastructure
            </h3>
            <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Key items deployed across sectors
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-3 px-0 pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {wasteMgmtItems.map((item, index) => {
                const color = COLORS[index % COLORS.length];
                const lower = item.item.toLowerCase();
                const bgImage =
                  (lower.includes("dustbin") && "/indicators/Dustbins.png") ||
                  (lower.includes("compactor") &&
                    "/indicators/Compactors.png") ||
                  (lower.includes("tipper") && "/indicators/Tippers.png") ||
                  (lower.includes("liner") && "/indicators/Liner%20Bags.png") ||
                  "/file.svg";

                return (
                  <div
                    key={item.item}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-62 w-full">
                      <img
                        src={bgImage}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                      <div className="absolute inset-0 p-3 flex flex-col justify-end">
                        <h4 className="text-white text-sm font-semibold">
                          {item.item}
                        </h4>
                        <p className="text-white/90 text-xl font-extrabold">
                          {item.value.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="p-2 bg-white dark:bg-white/5">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {item.qty}
                      </p>
                      <div
                        className="mt-1 h-1 rounded"
                        style={{
                          background: `linear-gradient(90deg, ${color}, transparent)`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* --- Separator --- */}
      <SectionHeadingInline
        className="mb-4 mt-8"
        title="Signage infrastructure for WASH services"
        icon={iconFor("signage")}
      />

      {/* Indicator 10: WASH Services Signage Infrastructure (Definition Card) */}
      <div className="mb-6">
        <Card
          className="
    relative 
    overflow-hidden 
    p-4 
    hover:shadow-md 
    transition-all 
    duration-300 
    border-gray-200 
    dark:border-gray-700
    dark:bg-gray-850
  "
        >
          {/* Decorative Accent (Cyan) */}
          <div className="absolute top-0 left-0 h-full w-2 bg-cyan-500 rounded-l-lg opacity-80" />
          <CardHeader className="pb-3 pt-0 px-0">
            <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
              WASH Services Signage Infrastructure
            </h3>
          </CardHeader>
          <CardContent className="pt-0 px-0 pb-0">
            <p className="text-xs font-medium uppercase text-cyan-600 dark:text-cyan-400 mb-2">
              Definition
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-3">
              Signage infrastructure in the Kumbh Mela displays the system of
              visual communication tools—such as signs or boards, used to guide
              and inform pilgrims about **WASH infrastructure**.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Signage Images Section */}
      <div className="mb-6">
        <Card
          tabIndex={0}
          className="
      rounded-xl 
      p-4
      shadow-xl 
      border-gray-200 
      dark:border-gray-700
      dark:bg-gray-850
    "
        >
          <CardHeader className="pb-3 pt-0 px-0">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              WASH Services Signage Examples
            </h3>
            <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Visual communication tools used to guide and inform pilgrims about
              WASH infrastructure.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-3 px-0 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  caption:
                    "Figure F: Signages informing location of female toilets in Sector 22",
                  src: "figure_f.png",
                },
                {
                  caption: "Figure G: Signages informing toilets in sector 16",
                  src: "figure_g.png",
                },
                {
                  caption: "Figure H: Gender segregated toilets in Sector 17",
                  src: "figure_h.png",
                },
                {
                  caption:
                    "Figure I: Signages indicating changing rooms for women",
                  src: "figure_i.png",
                },
                {
                  caption:
                    "Figure L: Signage for judicious usage of Water for pilgrim population",
                  src: "figure_l.jpeg",
                },
                {
                  caption:
                    "Figure M: Signage creating awareness about circular economy amongst pilgrim population",
                  src: "figure_m.jpeg",
                },
              ].map((item) => (
                <Card
                  key={item.caption}
                  className="overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="w-full aspect-[4/3] relative overflow-hidden">
                      {" "}
                      {/* Changed to aspect ratio */}
                      <Image
                        src={`/survey/Signage infrastructure for WASH services/${item.src}`}
                        alt={item.caption}
                        fill // Use fill to make image cover entire container
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="p-3 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800">
                      {item.caption}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
