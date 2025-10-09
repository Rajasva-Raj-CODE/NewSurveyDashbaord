"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Label,
  LabelList,
} from "recharts";
import type { TooltipProps } from "recharts";
import {
  MapPin,
  Accessibility,
  Droplets,
  Shield,
  Heart,
  Trash2,
  Handshake,
  Info,
  Layers,
} from "lucide-react";
import type React from "react";

// --- Types ---
type PieDatum = { name: string; value: number; color?: string };
type BarDatum = { category: string; value: number; color?: string };
type Indicator = {
  title: string;
  definition: string;
  icon: React.ReactNode;
  data: PieDatum[] | BarDatum[];
  inference: string;
  type: "pie" | "bar";
};

// --- Custom Colors ---
const CHART_COLORS = [
  "hsl(142, 70%, 50%)", // Green (Primary success)
  "hsl(210, 90%, 55%)", // Blue (Primary info)
  "hsl(45, 100%, 70%)", // Yellow/Orange (Warning)
  "hsl(0, 80%, 65%)", // Red (Danger)
  "hsl(270, 70%, 60%)", // Purple
];

const getChartColor = (index: number) =>
  CHART_COLORS[index % CHART_COLORS.length];

// --- Custom Tooltip Components ---
const CustomTooltip: React.FC<TooltipProps<number, string> & { type: "pie" | "bar" }> = ({
  active,
  payload,
  type,
}) => {
  if (active && payload && payload.length) {
    const datum = payload[0]?.payload;

    if (!datum) return null;

    let name, value;
    if (type === "pie") {
      name = (datum as PieDatum).name;
      value = (datum as PieDatum).value;
    } else {
      name = (datum as BarDatum).category;
      value = (datum as BarDatum).value;
    }

    return (
      <div className="rounded-xl border bg-card text-card-foreground p-3 text-sm shadow-2xl backdrop-blur-sm bg-white/90 dark:bg-slate-900/90 transition-all duration-300">
        <p className="font-semibold text-base mb-0.5">{name}</p>
        <p className="text-primary font-bold">Value: {value}%</p>
      </div>
    );
  }
  return null;
};

// --- Legend Component (Optimized) ---
const ChartLegend: React.FC<{
  data: PieDatum[] | BarDatum[];
  type: "pie" | "bar";
}> = ({ data, type }) => {
  return (
    <div className="flex-1 grid grid-cols-1 gap-1 min-w-[50%]"> 
      {data.map((item, index) => {
        const name = type === "pie" ? (item as PieDatum).name : (item as BarDatum).category;
        const percentage = item.value;
        const color = getChartColor(index);
        return (
          <div
            key={name}
            className="flex items-center justify-between p-1.5 rounded-lg border border-border/50 bg-background/60 hover:bg-background/90 transition-colors duration-200 cursor-default"
          >
            <div className="flex items-center space-x-2 flex-1 min-w-0">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0 shadow-sm"
                style={{ backgroundColor: color }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground"> 
                  {name}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// --- Main Component: EquitableAccess ---
export default function EquitableAccess() {
  // Data definitions with your specific data
  const proximityData: PieDatum[] = [
    { name: "100-200m", value: 62 },
    { name: "500m", value: 38 },
  ];

  const accessibilityData: BarDatum[] = [
    { category: "Easy", value: 77 },
    { category: "Manageable", value: 23 },
    { category: "Difficult", value: 0 },
  ];

  const waterAvailabilityData: PieDatum[] = [
    { name: "Always Sufficient", value: 93 },
    { name: "Sometimes Sufficient", value: 7 },
  ];

  const sanitationAccessData: BarDatum[] = [
    { category: "Always Accessible", value: 12 },
    { category: "Mostly Accessible", value: 51 },
    { category: "Neutral", value: 27 },
    { category: "Difficult", value: 10 },
  ];

  const healthConcernsData: PieDatum[] = [
    { name: "No Concern", value: 98 },
    { name: "Some Concern", value: 2 },
  ];

  const wasteDisposalData: BarDatum[] = [
    { category: "Strongly Agree", value: 19 },
    { category: "Agree", value: 67 },
    { category: "Neutral", value: 12 },
    { category: "Disagree", value: 2 },
  ];

  const surveyIndicators: Indicator[] = [
    {
      title: "Proximity to nearest potable water infrastructure",
      definition:
        "Typical one-way effort required for a respondent to reach the closest potable water source (e.g., free standpost, Water-ATM, tanker-tap) that is safe for drinking",
      icon: <MapPin className="w-5 h-5" />,
      data: proximityData,
      inference:
        "The data illustrates that **62%** of the floating population respondents had proximity to water infrastructure within **100-200 m** area whereas **38%** had to walk **500m**. This difference could be due to their awareness and sector-wise infrastructure setups.",
      type: "pie",
    },
    {
      title: "Perception towards accessibility to Water Infrastructure",
      definition:
        "Perceived ease of respondents to locate, reach, and use water points when needed.",
      icon: <Accessibility className="w-5 h-5" />,
      data: accessibilityData,
      inference:
        "The respondents mostly reported a **positive perception** towards accessibility. **77%** found it easily accessible, and **23%** found it manageable. None reported difficulty.",
      type: "bar",
    },
    {
      title: "Perception on sufficient availability of water",
      definition:
        "Illustrates the respondents' judgment that enough water was available when needed (volume/flow, refill frequency, and ability to obtain adequate personal consumption",
      icon: <Droplets className="w-5 h-5" />,
      data: waterAvailabilityData,
      inference:
        "A strong majority of the respondents (**93%**) found water availability to be **sufficient** during the Mela. Merely **7%** had concerns related to sufficiency.",
      type: "pie",
    },
    {
      title: "Perception towards accessibility of sanitation facilities",
      definition:
        "Perceived ease of respondents to locate, reach, and use an appropriate and functional toilet when needed.",
      icon: <Shield className="w-5 h-5" />,
      data: sanitationAccessData,
      inference:
        "The accessibility of sanitation infrastructure was mostly positive (**63%** found it accessible/mostly accessible), with only **10%** facing difficulties.",
      type: "bar",
    },
    {
      title: "Perception towards health-related concerns",
      definition:
        "The extent to which respondents felt at risk of illness due to WASH conditions (e.g., unsafe water, dirty/toilet surfaces, inadequate hand-washing enablers, crowding near facilities).",
      icon: <Heart className="w-5 h-5" />,
      data: healthConcernsData,
      inference:
        "An overwhelming **98%** of respondents faced **no health-related concerns**, showcasing good maintenance of the hygienic environment, water quality, and health infrastructure.",
      type: "pie",
    },
    {
      title: "Perception on disposing of solid waste appropriately",
      definition:
        "Illustrates the respondent's perceived ability and ease to dispose of their solid waste in the right place and form (finding bins, segregating dry/wet, understanding signage, and not being forced to litter).",
      icon: <Trash2 className="w-5 h-5" />,
      data: wasteDisposalData,
      inference:
        "A combined **86%** of the respondents were in **agreement or strong agreement** towards appropriate waste disposal, with a low **2%** showing disagreement.",
      type: "bar",
    },
  ];

  // --- Chart Rendering Function (FIXED for bar charts) ---
  const renderChart = (indicator: Indicator) => {
    if (indicator.type === "pie") {
      const pieRadius = 60;
      return (
        <div className="flex items-center gap-3 h-full">
          <div className="flex-shrink-0 relative w-[120px] h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <RechartsTooltip
                  content={<CustomTooltip type="pie" />}
                  wrapperStyle={{ outline: "none" }}
                />
                <Pie
                  data={indicator.data as PieDatum[]}
                  cx="50%"
                  cy="50%"
                  outerRadius={pieRadius}
                  innerRadius={pieRadius * 0.6}
                  dataKey="value"
                  stroke="hsl(var(--background))"
                  strokeWidth={2}
                >
                  {(indicator.data as PieDatum[]).map((_, i) => (
                    <Cell
                      key={`cell-${i}`}
                      fill={getChartColor(i)}
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                    />
                  ))}
                  <Label
                    value={`${(indicator.data as PieDatum[]).reduce((sum, d) => sum + d.value, 0)}%`}
                    position="center"
                    className="font-bold text-sm fill-foreground"
                  />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ChartLegend data={indicator.data as PieDatum[]} type="pie" />
        </div>
      );
    } else {
      // FIXED: Proper bar chart sizing with adequate space
      return (
        <div className="h-full flex flex-col">
          {/* Chart Container with proper height */}
          <div className="flex-1 min-h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={indicator.data as BarDatum[]}
                margin={{ top: 20, right: 10, left: 0, bottom: 40 }} // Adequate bottom margin for labels
              >
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" vertical={false} />
                {/* <XAxis
                  dataKey="category"
                  angle={-30} // Reduced angle for better readability
                  textAnchor="end"
                  height={50} // Adequate height for labels
                  fontSize={11}
                  stroke="hsl(var(--foreground))"
                  interval={0}
                /> */}
                <YAxis
                  fontSize={10}
                  domain={[0, 100]}
                  allowDecimals={false}
                  tickFormatter={(value) => `${value}%`}
                  stroke="hsl(var(--foreground))"
                  width={35}
                />
                <RechartsTooltip
                  content={<CustomTooltip type="bar" />}
                  wrapperStyle={{ outline: "none" }}
                />
                <Bar 
                  dataKey="value" 
                  radius={[4, 4, 0, 0]} 
                  barSize={32} // Proper bar size
                >
                  {(indicator.data as BarDatum[]).map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getChartColor(index)}
                      className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                    />
                  ))}
                  <LabelList
                    dataKey="value"
                    position="top"
                    formatter={(value: number) => `${value}%`}
                    fontSize={10}
                    fill="hsl(var(--foreground))"
                    offset={10}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Legend below chart */}
          <div className="mt-3">
            <ChartLegend data={indicator.data as BarDatum[]} type="bar" />
          </div>
        </div>
      );
    }
  };

  // --- Main Render ---
  return (
    <TooltipProvider>
      <div className="space-y-6 p-4">
        {/* Header Section */}
        <div className="text-center mb-6 py-4 rounded-xl bg-background shadow-xl border border-border/50">
          <h1 className="text-4xl font-extrabold tracking-tight text-center leading-tight bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent sm:text-5xl">
            Equitable Access to WaSH Services
          </h1>
          <p className="text-xl font-medium mt-2 text-primary dark:text-primary-foreground/90">
            Key Stakeholder: Floating Population Survey Insights
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mt-3">
            <Layers className="w-4 h-4 text-secondary" />
            <span className="font-semibold">Indicator | Definition | Data | Inference</span>
          </div>
        </div>

        {/* Compact Grid Layout - Equal distribution */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {surveyIndicators.map((indicator, i) => (
            <Card
              key={i}
              className="rounded-2xl bg-gradient-to-br from-background via-card to-background
                dark:from-slate-950/70 dark:via-slate-900 dark:to-slate-950/70
                border border-primary/20 shadow-xl hover:shadow-2xl
                transition-all duration-500 ease-in-out hover:scale-[1.01] min-h-[450px]" // Increased height for bar charts
            >
              <CardContent className="p-4 h-full flex flex-col">
                {/* Title */}
                <div className="flex items-center gap-3 mb-3 border-b pb-2 border-border/50">
                  <div className={`p-2 rounded-full bg-gradient-to-br ${i % 2 === 0 ? 'from-cyan-500 to-blue-600' : 'from-green-500 to-teal-600'} text-white shadow-lg`}>
                    {indicator.icon}
                  </div>
                  <h4 className="font-bold text-lg leading-tight text-foreground line-clamp-2">
                    {indicator.title}
                  </h4>
                </div>

                {/* Content Grid - Equal distribution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 flex-1">
                  {/* Text Content */}
                  <div className="space-y-3 flex flex-col">
                    {/* Definition */}
                    <div className="bg-primary/10 p-3 rounded-lg border-l-4 border-primary shadow-sm flex-1">
                      <p className="text-xs uppercase font-bold text-primary mb-1">
                        Definition
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {indicator.definition}
                      </p>
                    </div>

                    {/* Inference */}
                    <div className="bg-secondary/10 p-3 rounded-lg border-l-4 border-secondary shadow-sm flex-1">
                      <p className="text-xs uppercase font-bold text-secondary-foreground mb-1">
                        Inference
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {indicator.inference}
                      </p>
                    </div>
                  </div>
                  
                  {/* Chart Section - Now with proper bar chart sizing */}
                  <div className="bg-white/50 dark:bg-slate-900/40 p-3 rounded-xl border border-border/50 shadow-inner flex flex-col">
                    <h5 className="text-sm font-semibold text-secondary-foreground mb-2 text-center flex items-center justify-center">
                      <span className="mr-1">📊</span> Indicators
                    </h5>
                    <div className="flex-1">
                      {renderChart(indicator)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section - Compact layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Handwashing availability */}
          <Card className="rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 
            dark:from-violet-950/50 dark:to-fuchsia-950/50 border border-fuchsia-500/50 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3 border-b pb-2 border-border/50">
                <div className="p-2 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white shadow-lg">
                  <Handshake className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg">Handwashing Stations Ratio</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Availability of handwashing points supporting sanitation use, measured against toilet density.
              </p>
              <div className="bg-white dark:bg-slate-900/90 p-4 rounded-xl border border-fuchsia-300 dark:border-fuchsia-700 text-center shadow-inner">
                <div className="text-5xl font-extrabold text-fuchsia-600 dark:text-fuchsia-400 mb-1 leading-none">2:10</div>
                <div className="text-md font-semibold text-foreground">Handwashing stations per 10 toilets</div>
              </div>
            </CardContent>
          </Card>

          {/* Key facts */}
          <Card className="rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-100 
            dark:from-slate-950/50 dark:to-indigo-950/50 border border-blue-500/50 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3 border-b pb-2 border-border/50">
                <div className="p-2 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
                  <Info className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg">Key Observational Facts</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Additional observations and triangulation notes from on-site assessments and data sources.
              </p>
              <ul className="list-none text-sm space-y-2 leading-relaxed">
                <li className="flex items-start text-foreground">
                    <span className="text-green-500 mr-2 text-lg font-bold flex-shrink-0">✓</span>
                    <p>
                        Our Observations and stakeholder consultations reveal that **no people were drinking water from surface sources**, i.e. from the rivers.
                    </p>
                </li>
                <li className="flex items-start text-foreground">
                    <span className="text-green-500 mr-2 text-lg font-bold flex-shrink-0">✓</span>
                    <p>
                        Data from PMA indicates that the **availability of sanitation facility** such as toilets and handwashing stations was **40 person per hour per toilet**.
                    </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}