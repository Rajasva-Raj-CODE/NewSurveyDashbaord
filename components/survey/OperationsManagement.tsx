"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Users,
  Info,
  TrendingUp,
  BarChart3,
  Droplets,
  LayoutList,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import type { TooltipProps } from "recharts";

// --- Custom Colors ---
const CHART_LINE_COLOR = "hsl(210, 90%, 55%)"; // Blue
const CHART_BAR_COLOR_1 = "hsl(142, 70%, 50%)"; // Green
const CHART_BAR_COLOR_2 = "hsl(45, 100%, 70%)"; // Yellow/Orange

// --- Types ---
interface TooltipPayload {
  value: number;
  name: string;
  color?: string;
}

// Custom tooltip for Line/Bar charts
const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const value = (payload[0].value as number).toFixed(3);
    const name = payload[0].name || payload[0].dataKey;
    return (
      <div className="rounded-xl border bg-card text-card-foreground p-3 text-sm shadow-2xl backdrop-blur-sm bg-white/90 dark:bg-slate-900/90 transition-all duration-300">
        <p className="font-semibold text-base mb-0.5 text-foreground">{`Date: ${label}`}</p>
        <p
          style={{ color: payload[0].color || CHART_LINE_COLOR }}
          className="font-bold"
        >{`${name}: ${value} MT`}</p>
      </div>
    );
  }
  return null;
};

// --- Data Preparation ---
export default function OperationsManagement() {
  const wasteCollectionData = [
    { date: "13-01", weight: 217.135, month: "January" },
    { date: "14-01", weight: 116.445, month: "January" },
    { date: "15-01", weight: 236.31, month: "January" },
    { date: "16-01", weight: 246.73, month: "January" },
    { date: "17-01", weight: 214.72, month: "January" },
    { date: "18-01", weight: 219.03, month: "January" },
    { date: "19-01", weight: 197.425, month: "January" },
    { date: "20-01", weight: 257.69, month: "January" },
    { date: "21-01", weight: 287.225, month: "January" },
    { date: "22-01", weight: 306.55, month: "January" },
    { date: "23-01", weight: 304.245, month: "January" },
    { date: "24-01", weight: 278.405, month: "January" },
    { date: "25-01", weight: 257.195, month: "January" },
    { date: "26-01", weight: 276.395, month: "January" },
    { date: "27-01", weight: 323.215, month: "January" },
    { date: "28-01", weight: 148.89, month: "January" },
    { date: "29-01", weight: 28.23, month: "January" },
    { date: "30-01", weight: 281.65, month: "January" },
    { date: "31-01", weight: 503.29, month: "January" },
    { date: "01-02", weight: 603.755, month: "February" },
    { date: "02-02", weight: 635.275, month: "February" },
    { date: "03-02", weight: 532.21, month: "February" },
    { date: "04-02", weight: 615.51, month: "February" },
    { date: "05-02", weight: 778.76, month: "February" },
    { date: "06-02", weight: 456.78, month: "February" },
    { date: "07-02", weight: 513.025, month: "February" },
    { date: "08-02", weight: 271.765, month: "February" },
    { date: "09-02", weight: 595.475, month: "February" },
    { date: "10-02", weight: 458.305, month: "February" },
    { date: "11-02", weight: 542.31, month: "February" },
    { date: "12-02", weight: 326.915, month: "February" },
    { date: "13-02", weight: 657.34, month: "February" },
    { date: "14-02", weight: 458.705, month: "February" },
    { date: "15-02", weight: 448.695, month: "February" },
    { date: "16-02", weight: 353.27, month: "February" },
    { date: "17-02", weight: 322.83, month: "February" },
    { date: "18-02", weight: 494.86, month: "February" },
    { date: "19-02", weight: 419.095, month: "February" },
    { date: "20-02", weight: 434.77, month: "February" },
    { date: "21-02", weight: 396.205, month: "February" },
    { date: "22-02", weight: 316.225, month: "February" },
    { date: "23-02", weight: 378.65, month: "February" },
    { date: "24-02", weight: 360.305, month: "February" },
    { date: "25-02", weight: 387.425, month: "February" },
    { date: "26-02", weight: 381.03, month: "February" },
  ].map((d) => ({ ...d, date: d.date.replace("-2025", "") }));

  // Monthly totals
  const monthlyTotals = [
    { month: "January", total: 4700.805, color: CHART_BAR_COLOR_2 },
    { month: "February", total: 12139.49, color: CHART_BAR_COLOR_1 },
  ];

  // Combined Row Definition (Indicator | Definition | Inference | Data)
  const matrixRows = [
    // ... (rows 1-5 remain the same)
{
      title:
        "Safe Operation of Water Infrastructure (ATMs, Tankers, Standposts)",
      definition:
        "Ensuring uninterrupted and hygienic access to potable water through proactive maintenance, trained operators, coordinated supply logistics, and swift grievance redressal for the pilgrims.",
      inference:
        "Active monitoring and operator engagement ensured the hygiene and correct usage of key water points, minimizing service disruptions.",
      data: (
        <div className="flex flex-col items-center">
          <div className="w-full aspect-[16/13] relative rounded-lg border-2 border-blue-200 dark:border-blue-900/40 shadow-lg overflow-hidden">
            <Image
              src="/survey/State_operation_management/figure_c1.jpeg"
              alt="ATM Machine operator explaining its proper usage; monitoring the infrastructure services"
              fill
              className="object-cover"
            />
            {/* Modern Caption Bar at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm px-3 py-2">
                <p className="text-xs font-normal text-white/90">
                  <strong>Figure M:</strong> ATM operator explaining usage; demonstrating active monitoring of services.
                </p>
              </div>
          </div>
        </div>
      ),
    },
    {
      title: "Satisfaction with Planning and Mapping for Water Services Access",
      definition:
        "Assessing how effectively water infrastructure was strategically placed to ensure pilgrims' easy, timely, and crowd-free access to safe drinking water.",
      inference:
        "A total of <strong className='text-green-600 dark:text-green-400 font-semibold'>90%</strong> of respondents were satisfied with the timely planning and adequacy of water facilities, with no explicit dissatisfaction, reflecting efficient planning and mapping of services before their implementation.",
      data: (
        <Card className="rounded-xl border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/20 dark:to-blue-950/20 shadow-lg">
          <CardHeader className="py-3 px-4 border-b border-cyan-400/50 bg-cyan-400/10 dark:bg-cyan-900/20">
            <CardTitle className="text-base font-semibold flex items-center gap-2 text-cyan-700 dark:text-cyan-300">
              <Users className="w-4 h-4" />
              Pilgrim Satisfaction with Water Planning
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 px-4 space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 bg-blue-100/70 dark:bg-blue-900/40 rounded-lg border border-blue-300 dark:border-blue-700/50 text-center">
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  27%
                </p>
                <p className="text-xs font-medium text-blue-900 dark:text-blue-100">
                  Highly Satisfied
                </p>
              </div>
              <div className="p-2 bg-emerald-100/70 dark:bg-emerald-900/40 rounded-lg border border-emerald-300 dark:border-emerald-700/50 text-center">
                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  63%
                </p>
                <p className="text-xs font-medium text-emerald-900 dark:text-emerald-100">
                  Satisfied
                </p>
              </div>
              <div className="p-2 bg-slate-100/70 dark:bg-slate-900/40 rounded-lg border border-slate-300 dark:border-slate-700/50 text-center">
                <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">
                  10%
                </p>
                <p className="text-xs font-medium text-slate-900 dark:text-slate-100">
                  Neutral
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Operational Capacity of Water infrastructure",
      definition:
        "The capacity of water infrastructure to reliably meet the drinking water needs of the pilgrims.",
      inference:
        "The infrastructure demonstrated sufficient capacity, delivering up to <strong className='text-blue-600 dark:text-blue-400 font-semibold'>15,000 litres daily</strong>. Crucially, <strong className='text-green-600 dark:text-green-400 font-semibold'>backup systems</strong> were successfully implemented for peak days (Shahi Snans), ensuring <strong className='text-green-600 dark:text-green-400 font-semibold'>zero supply interruption</strong>.",
      data: (
        <Card className="rounded-xl border-2 border-emerald-400/50 bg-emerald-50/70 dark:bg-emerald-900/20 shadow-lg">
          <CardContent className="p-4 flex items-center gap-4">
            <Droplets className="w-10 h-10 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                Daily RO Water Dispensed:
              </p>
              <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
                12,000 - 15,000 Litres
              </p>
              <p className="text-xs font-normal text-gray-600 dark:text-gray-400 mt-1">
                *Supply sustained throughout, with <strong className='text-green-600 dark:text-green-400 font-semibold'>backup sources</strong> deployed
                for peak Shahi Snan days.
              </p>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Maintenance of a Hygienic Environment",
      definition:
        "Keeping WaSH facilities and their surroundings consistently clean and safe through routine cleaning, timely waste management, adequate cleaning staff and supplies, and prompt response to spills or blockages to protect pilgrim health.",
      inference:
        "Proactive measures like sanitizing powder application and immediate spillage cleanup demonstrate a commitment to maintaining a hygienic perimeter around the facilities, mitigating health risks.",
      data: (
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 p-2">
          <div className="flex flex-col items-center p-2 bg-white/70 dark:bg-slate-900/40 rounded-lg shadow-inner">
            <div className="w-full aspect-[4/3] relative rounded-md border overflow-hidden">
              <Image
                src="/survey/Maintenance of a hygienic environment/figure_c2.png"
                alt="Sprinkling of malathion and bleaching powder"
                fill
                className="object-cover"
              />
              {/* Modern Caption Bar at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm px-2 py-1">
                <p className="text-xs font-normal text-white/90">
                  <strong>Figure N:</strong> Sprinkling of malathion & bleaching powder (odor and vector control)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center p-2 bg-white/70 dark:bg-slate-900/40 rounded-lg shadow-inner">
            <div className="w-full aspect-[4/3] relative rounded-md border overflow-hidden">
              <Image
                src="/survey/Maintenance of a hygienic environment/figure_c3.png"
                alt="Sanitation worker scrubbing water spillage beneath water ATM"
                fill
                className="object-cover"
              />
              {/* Modern Caption Bar at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm px-2 py-1">
                <p className="text-xs font-normal text-white/90">
                  <strong>Figure O:</strong> Sanitation worker scrubbing water spillage beneath water ATM
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title:
        "Collaboration & Partnership among WaSH Institutional Stakeholders",
      definition:
        "Coordinated action between government bodies, NGOs, service providers, community groups, and private partners to jointly monitor service delivery through promotional campaigns, driving a behavioral shift among pilgrims towards becoming more WaSH sensitive and aware.",
      inference:
        "The use of community outreach programs (like Nukkad Natak) successfully demonstrated effective collaboration between institutional and private partners to drive crucial behavioral change regarding handwashing and hygiene awareness.",
      data: (
        <div className="mt-2 flex flex-col items-center p-2">
          <div className="w-full max-w-lg rounded-xl border-4 border-fuchsia-200 dark:border-fuchsia-900/40 shadow-lg overflow-hidden">
            <div className="w-full aspect-[4/3] relative">
              <Image
                src="/survey/State_operation_management/figure_c4.png"
                alt="Nukkad Natak at Sector 5 by GIWA and Dettol to create awareness of regular handwashing"
                fill
                className="object-cover"
              />
              {/* Modern Caption Bar at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm px-3 py-2">
                <p className="text-xs font-normal text-white/90">
                  <strong>Figure P:</strong> Nukkad Natak (Street Play) at Sector 5 by GIWA and Dettol promoting regular handwashing.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Safe Operation and Management of Sanitation Services",
      definition:
        "Ensuring toilets, urinals, and waste systems remain functional, clean, and accessible through regular maintenance, timely waste disposal, adequate staffing and quick response to breakdowns.",
      inference:
        "The consistent daily collection and the large increase in waste volume from January to February (from <strong className='text-blue-600 dark:text-blue-400 font-semibold'>4.7k MT</strong> to <strong className='text-green-600 dark:text-green-400 font-semibold'>12.1k MT</strong>) confirm the sanitation operations successfully scaled to meet the massive pilgrim influx and maintained a clean environment through constant manual cleaning.",
      data: (
        // 💡 FIX: This entire block will now take the full width of the main card's content area.
        <div className="space-y-4">
          {/* Visual Evidence Section (Images) - Wrapped in a card-like element for visual separation */}
<div className="p-3 rounded-xl border border-border/30 shadow-inner bg-white/70 dark:bg-slate-800/50">

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
    {[
      {
        src: "/survey/State_operation_management/figure_c5.png",
        alt: "Workers collecting trash with sewage nets",
        caption: "Figure Q: Collecting trash with nets",
      },
      {
        src: "/survey/State_operation_management/figure_c6.png",
        alt: "Workers transporting solid waste by handcarts",
        caption: "Figure R: Transporting solid waste",
      },
      {
        src: "/survey/State_operation_management/figure_c7.png",
        alt: "Workers sweeping in sectors 15 and 16",
        caption: "Figure S: Sector sweeping operations",
      },
      {
        src: "/survey/State_operation_management/figure_c8.jpeg",
        alt: "Cleaning of toilets by frontline workers",
        caption: "Figure T: Toilets cleaning by workers",
      },
    ].map((img, i) => (
      <div
        key={i}
        className="flex flex-col bg-white/70 dark:bg-slate-900/40 rounded-lg shadow-inner overflow-hidden"
      >
        <div className="w-full aspect-[4/3] relative overflow-hidden"> {/* Consistent aspect ratio */}
          <Image
            src={img.src}
            alt={img.alt}
            fill // Use fill instead of responsive
            className="object-cover" // Ensure image covers the area
          />
          {/* Modern Caption Bar at bottom */}
          <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm px-2 py-1">
            <p className="text-xs font-normal text-white/90">
              <strong>{img.caption.split(':')[0]}:</strong> {img.caption.split(':').slice(1).join(':').trim()}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

          {/* Waste Collection Charts Section - Full Width Card */}
          <Card className="border rounded-xl border-primary/30 bg-gradient-to-r from-blue-50/70 to-emerald-50/70 dark:from-blue-950/30 dark:to-emerald-950/30">
            <CardHeader className="py-3 px-4 border-b border-primary/20 bg-primary/5">
              <CardTitle className="text-base font-semibold flex items-center gap-2 text-foreground">
                <BarChart3 className="w-4 h-4 text-primary" />
                Daily Waste Collection Trend (JAN-FEB 2025)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 px-4 space-y-4">
              {/* Using Grid for 70/30 Split */}
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                {/* Daily Waste Weight (MT) - Line Chart (70% Width) */}
                <div className="lg:col-span-7">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <TrendingUp className="w-3 h-3" />
                    Daily Waste Weight (MT)
                  </h4>
                  <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={wasteCollectionData}
                        margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#e5e7eb"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="date"
                          stroke="#6b7280"
                          fontSize={10}
                          angle={-30}
                          textAnchor="end"
                          height={60}
                          interval={6}
                        />
                        <YAxis
                          stroke="#6b7280"
                          fontSize={10}
                          label={{
                            value: "Weight (MT)",
                            angle: -90,
                            position: "insideLeft",
                            dy: 10,
                            fontSize: 10,
                          }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                          type="monotone"
                          dataKey="weight"
                          stroke={CHART_LINE_COLOR}
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 4, fill: CHART_LINE_COLOR }}
                          name="Waste Weight"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Monthly Total Comparison - Bar Chart (30% Width) */}
                {/* <div className="lg:col-span-3">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <BarChart3 className="w-3 h-3" />
                    Monthly Total (MT)
                  </h4>
                  <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={monthlyTotals}
                        margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#e5e7eb"
                          vertical={false}
                        />
                        <XAxis dataKey="month" stroke="#6b7280" fontSize={10} />
                        <YAxis
                          stroke="#6b7280"
                          fontSize={10}
                          tickMargin={5}
                          label={{
                            value: "Total (MT)",
                            angle: -90,
                            position: "insideLeft",
                            dy: 25,
                            fontSize: 10,
                          }}
                        />
                        <Tooltip
                          formatter={(value: number) => [
                            `${value.toFixed(2)} MT`,
                            "Total Weight",
                          ]}
                        />
                        <Bar
                          dataKey="total"
                          name="Total Waste Collected"
                          fill={CHART_BAR_COLOR_1}
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      title: "Actionable Cleaning Protocols to Maintain Hygienic Environment",
      definition:
        "Establishing clear and standardized routines for cleaning and disinfection of WaSH facilities and their surroundings, with defined frequency, responsibilities, and monitoring.",
      inference:
        "Strong confidence in hygienic management is noted, with <strong className='text-green-600 dark:text-green-400 font-semibold'>78%</strong> of respondents (infra/service providers) agreeing that cleaning protocols were properly and daily executed. Only a small fraction expressed disagreement.",
      data: (
        <>
          <Card className="rounded-xl border-2 border-amber-400/50 bg-amber-50/70 dark:bg-amber-900/20 shadow-lg">
            <CardHeader className="py-3 px-4 border-b border-amber-400/50 bg-amber-400/10 dark:bg-amber-900/20">
              <CardTitle className="text-base font-semibold flex items-center gap-2 text-amber-700 dark:text-amber-300">
                <LayoutList className="w-4 h-4" />
                Perception on Maintenance & Cleaning Protocols
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 px-4">
              {/* Bar Chart for Perception Data */}
              <div className="mb-4">
                <div className="h-55 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        {
                          category: "Str. Agree",
                          percentage: 39,
                          color: CHART_BAR_COLOR_1,
                        },
                        {
                          category: "Agree",
                          percentage: 39,
                          color: CHART_LINE_COLOR,
                        },
                        {
                          category: "Neutral",
                          percentage: 9,
                          color: CHART_BAR_COLOR_2,
                        },
                        {
                          category: "Disagree",
                          percentage: 9,
                          color: "hsl(0, 80%, 65%)",
                        },
                        {
                          category: "Str. Disagree",
                          percentage: 5,
                          color: "hsl(0, 80%, 55%)",
                        },
                      ]}
                      margin={{ top: 5, right: 10, left: 0, bottom: 60 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#e5e7eb"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="category"
                        stroke="#6b7280"
                        fontSize={10}
                        angle={-30}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis
                        stroke="#6b7280"
                        fontSize={8}
                        label={{
                          value: "Percentage (%)",
                          angle: -90,
                          position: "insideLeft",
                          dy: 25,
                          fontSize: 10,
                        }}
                      />
                      <Tooltip
                        formatter={(value: number) => [
                          `${value}%`,
                          "Percentage",
                        ]}
                      />
                      <Bar
                        dataKey="percentage"
                        name="Percentage"
                        radius={[4, 4, 0, 0]}
                      >
                        {/* Use individual colors for bars */}
                        {[
                          CHART_BAR_COLOR_1,
                          CHART_LINE_COLOR,
                          CHART_BAR_COLOR_2,
                          "hsl(0, 80%, 65%)",
                          "hsl(0, 80%, 55%)",
                        ].map((color, index) => (
                          <Cell key={`cell-${index}`} fill={color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 text-center">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200">
                  <p className="text-sm font-semibold text-emerald-600">39%</p>
                  <p className="text-xs font-medium text-emerald-900 dark:text-emerald-100">
                    Str. Agree
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200">
                  <p className="text-sm font-semibold text-blue-600">39%</p>
                  <p className="text-xs font-medium text-blue-900 dark:text-blue-100">
                    Agree
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200">
                  <p className="text-sm font-semibold text-amber-600">9%</p>
                  <p className="text-xs font-medium text-amber-900 dark:text-amber-100">
                    Neutral
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200">
                  <p className="text-sm font-semibold text-red-600">9%</p>
                  <p className="text-xs font-medium text-red-900 dark:text-red-100">
                    Disagree
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200">
                  <p className="text-sm font-semibold text-red-600">5%</p>
                  <p className="text-xs font-medium text-red-900 dark:text-red-100">
                    Str. Disagree
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ),
    },
  ];

  // --- Render Function for Row Content ---
  const renderRowContent = (row: (typeof matrixRows)[0]) => (
    // Conditional grid structure for the full-width chart row
    <div
      className={`grid grid-cols-1 gap-4 ${
        row.title === "Safe Operation and Management of Sanitation Services"
          ? "lg:grid-cols-1"
          : "lg:grid-cols-2"
      }`}
    >
      {/* Text Content (Definition + Inference) - ALWAYS LEFT COLUMN (or full top) */}
      <div className="space-y-4">
        {/* Definition */}
        <div className="bg-primary/10 p-3 rounded-lg border-l-4 border-primary shadow-sm">
          <p className="text-xs uppercase font-bold text-primary mb-1">
            Definition
          </p>
          <p className="text-sm font-normal text-foreground leading-relaxed">
            {row.definition}
          </p>
        </div>

        {/* Inference */}
        <div className="bg-secondary/10 p-3 rounded-lg border-l-4 border-secondary shadow-sm">
          <p className="text-xs uppercase font-bold text-secondary-foreground mb-1">
            Inference
          </p>
          <p className="text-sm font-normal text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: row.inference }}>
          </p>
        </div>

        {/* 💡 FIX: For the full-width chart row, the data (charts/images) will go here 
               to span the full width below the text columns.
            */}
        {row.title ===
          "Safe Operation and Management of Sanitation Services" && (
          <div className="mt-4">{row.data}</div>
        )}
      </div>

      {/* Data/Chart Section (RIGHT COLUMN) - Only for rows 1-5 and 7 */}
      {row.title !== "Safe Operation and Management of Sanitation Services" && (
        <div className="bg-white/70 dark:bg-slate-800/50 p-3 rounded-xl border border-border/30 shadow-inner min-h-[200px] flex flex-col justify-center">
      
          {row.data}
        </div>
      )}
    </div>
  );

  // --- Main Component Render ---
  return (
    <div className="space-y-6 p-4">
      {/* Header Section */}
      <div className="text-center mb-6 py-4 rounded-xl bg-background shadow-xl border border-border/50">
        <h1 className="text-4xl font-bold tracking-tight text-center leading-tight bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent sm:text-5xl">
          State of Operations and Management
        </h1>
        <p className="text-xl font-normal mt-2 text-primary dark:text-primary-foreground/90">
        Key Stakeholder: Infrastructure & Service Provider Insights
        </p>
      </div>

      {/* Indicator Matrix */}
      <div className="grid grid-cols-1 gap-6">
        {matrixRows.map((row, idx) => (
          <Card
            key={idx}
            className="rounded-2xl bg-gradient-to-br from-background via-card to-card
                dark:from-slate-950/70 dark:via-slate-900 dark:to-slate-950/70
                border border-primary/20 shadow-xl hover:shadow-2xl
                transition-all duration-500 ease-in-out hover:scale-[1.005]"
          >
            <CardContent className="p-6">
              {/* Title */}
              <div className="flex items-center gap-3 mb-4 border-b pb-3 border-border/50">
                <div
                  className={`p-2 rounded-full bg-gradient-to-br ${
                    idx % 2 === 0
                      ? "from-cyan-500 to-blue-600"
                      : "from-green-500 to-teal-600"
                  } text-white shadow-lg`}
                >
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-xl leading-snug text-foreground">
                  {row.title}
                </h4>
              </div>

              {/* Content */}
              {renderRowContent(row)}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
