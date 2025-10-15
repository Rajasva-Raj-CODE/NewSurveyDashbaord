"use client";

import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Import the new external library for the gauge
import ReactSpeedometer from "react-d3-speedometer";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// -------------------- Types --------------------
type ResponseKey =
  | "Strongly Disagree"
  | "Disagree"
  | "Neutral"
  | "Agree"
  | "Strongly Agree";

type Group = {
  group: string;
  responses: Record<ResponseKey, number>;
};

type SurveyDatum = {
  indicator: string;
  perspective: string;
  groups: Group[];
};

// -------------------- Survey Data (ADJUSTED FOR DEMO) --------------------
const surveyData: SurveyDatum[] = [
  // Affinity towards hygiene practices - Age perspective
  {
    indicator: "Affinity towards hygiene practices",
    perspective: "age",
    groups: [
      {
        group: "15-19",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 2.325,
          Neutral: 10.465,
          Agree: 73.255,
          "Strongly Agree": 13.953,
        },
      },
      {
        group: "20-24",
        responses: {
          "Strongly Disagree": 0.699,
          Disagree: 2.097,
          Neutral: 9.79,
          Agree: 64.335,
          "Strongly Agree": 23.076,
        },
      },
      {
        group: "25-29",
        responses: {
          "Strongly Disagree": 1.498,
          Disagree: 0.0,
          Neutral: 16.479,
          Agree: 62.172,
          "Strongly Agree": 19.85,
        },
      },
      {
        group: "30-34",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 9.09,
          Agree: 68.181,
          "Strongly Agree": 22.727,
        },
      },
      {
        group: "35-39",
        responses: {
          "Strongly Disagree": 0.754,
          Disagree: 0.377,
          Neutral: 7.547,
          Agree: 67.547,
          "Strongly Agree": 23.773,
        },
      },
      {
        group: "40-49",
        responses: {
          "Strongly Disagree": 1.219,
          Disagree: 1.219,
          Neutral: 6.707,
          Agree: 66.463,
          "Strongly Agree": 24.39,
        },
      },
      {
        group: "50-59",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.418,
          Neutral: 17.094,
          Agree: 58.974,
          "Strongly Agree": 20.513,
        },
      },
      {
        group: "60-69",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 19.23,
          Agree: 69.231,
          "Strongly Agree": 11.538,
        },
      },
      {
        group: "70-79",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 16.666,
          Agree: 66.666,
          "Strongly Agree": 16.666,
        },
      },
      {
        group: "80+",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 0.0,
          Agree: 100.0,
          "Strongly Agree": 0.0,
        },
      },
    ],
  },
  // Affinity towards hygiene practices - Gender perspective
  {
    indicator: "Affinity towards hygiene practices",
    perspective: "gender",
    groups: [
      {
        group: "Female",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 1.079,
          Neutral: 11.151,
          Agree: 64.748,
          "Strongly Agree": 23.021,
        },
      },
      {
        group: "Male",
        responses: {
          "Strongly Disagree": 0.974,
          Disagree: 0.974,
          Neutral: 11.688,
          Agree: 65.8,
          "Strongly Agree": 20.562,
        },
      },
    ],
  },
  // Affinity towards hygiene practices - Holistic perspective
  {
    indicator: "Affinity towards hygiene practices",
    perspective: "Holistic",
    groups: [
      {
        group: "All",
        responses: {
          "Strongly Disagree": 0.748,
          Disagree: 0.998,
          Neutral: 11.564,
          Agree: 65.557,
          "Strongly Agree": 21.131,
        },
      },
    ],
  },
  // Affinity towards hygiene practices - Income perspective
  {
    indicator: "Affinity towards hygiene practices",
    perspective: "socioeconomic_status",
    groups: [
      {
        group: "Low Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 12.658,
          Agree: 67.088,
          "Strongly Agree": 20.253,
        },
      },
      {
        group: "Lower Middle Income",
        responses: {
          "Strongly Disagree": 1.403,
          Disagree: 1.052,
          Neutral: 14.736,
          Agree: 62.807,
          "Strongly Agree": 20.0,
        },
      },
      {
        group: "Upper Class",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 14.285,
          Agree: 85.714,
          "Strongly Agree": 0.0,
        },
      },
      {
        group: "Upper Lower Income",
        responses: {
          "Strongly Disagree": 0.563,
          Disagree: 1.315,
          Neutral: 9.962,
          Agree: 70.676,
          "Strongly Agree": 17.481,
        },
      },
      {
        group: "Upper Middle Income",
        responses: {
          "Strongly Disagree": 0.668,
          Disagree: 0.668,
          Neutral: 11.036,
          Agree: 58.193,
          "Strongly Agree": 29.4313,
        },
      },
    ],
  },
  // Awareness of WaSH practices - Age perspective
  {
    indicator: "Awareness of WaSH practices",
    perspective: "age",
    groups: [
      {
        group: "15-19",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 6.25,
          Neutral: 18.75,
          Agree: 68.75,
          "Strongly Agree": 6.25,
        },
      },
      {
        group: "20-24",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.448,
          Neutral: 13.793,
          Agree: 51.724,
          "Strongly Agree": 31.034,
        },
      },
      {
        group: "25-29",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 2.083,
          Neutral: 12.5,
          Agree: 70.833,
          "Strongly Agree": 14.583,
        },
      },
      {
        group: "30-34",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 6.25,
          Neutral: 18.75,
          Agree: 62.5,
          "Strongly Agree": 12.5,
        },
      },
      {
        group: "35-39",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 4.082,
          Neutral: 12.245,
          Agree: 69.387,
          "Strongly Agree": 14.286,
        },
      },
      {
        group: "40-49",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 7.143,
          Neutral: 3.571,
          Agree: 75.0,
          "Strongly Agree": 14.286,
        },
      },
      {
        group: "50-59",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 18.75,
          Agree: 68.75,
          "Strongly Agree": 12.5,
        },
      },
      {
        group: "60-69",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 12.5,
          Agree: 62.5,
          "Strongly Agree": 25.0,
        },
      },
      {
        group: "70-79",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 0.0,
          Agree: 25.0,
          "Strongly Agree": 75.0,
        },
      },
      {
        group: "80+",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 0.0,
          Agree: 0.0,
          "Strongly Agree": 100.0,
        },
      },
    ],
  },
  // Awareness of WaSH practices - Gender perspective
  {
    indicator: "Awareness of WaSH practices",
    perspective: "gender",
    groups: [
      {
        group: "Female",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.921,
          Neutral: 1.96,
          Agree: 74.509,
          "Strongly Agree": 19.607,
        },
      },
      {
        group: "Male",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.658,
          Neutral: 15.853,
          Agree: 63.4146,
          "Strongly Agree": 17.073,
        },
      },
    ],
  },
  // Awareness of WaSH practices - Holistic perspective
  {
    indicator: "Awareness of WaSH practices",
    perspective: "Holistic",
    groups: [
      {
        group: "All",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.72,
          Neutral: 12.558,
          Agree: 66.046,
          "Strongly Agree": 17.674,
        },
      },
    ],
  },
  // Awareness of WaSH practices - Income perspective
  {
    indicator: "Awareness of WaSH practices",
    perspective: "socioeconomic_status",
    groups: [
      {
        group: "Low Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 6.666,
          Agree: 60.0,
          "Strongly Agree": 33.333,
        },
      },
      {
        group: "Lower Middle Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 4.347,
          Neutral: 17.391,
          Agree: 69.5654,
          "Strongly Agree": 8.6953,
        },
      },
      {
        group: "Upper Class",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 50.0,
          Neutral: 50.0,
          Agree: 0.0,
          "Strongly Agree": 0.0,
        },
      },
      {
        group: "Upper Lower Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.191,
          Neutral: 10.638,
          Agree: 61.702,
          "Strongly Agree": 24.468,
        },
      },
      {
        group: "Upper Middle Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.448,
          Neutral: 12.069,
          Agree: 74.137,
          "Strongly Agree": 10.344,
        },
      },
    ],
  },
  // Satisfaction with WaSH services - Age perspective
  {
    indicator: "Satisfaction with WaSH services",
    perspective: "age",
    groups: [
      {
        group: "15-19",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 4.651,
          Neutral: 19.767,
          Agree: 54.651,
          "Strongly Agree": 20.93,
        },
      },
      {
        group: "20-24",
        responses: {
          "Strongly Disagree": 0.699,
          Disagree: 5.594,
          Neutral: 31.468,
          Agree: 43.356,
          "Strongly Agree": 18.881,
        },
      },
      {
        group: "25-29",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 2.247,
          Neutral: 16.479,
          Agree: 59.176,
          "Strongly Agree": 22.097,
        },
      },
      {
        group: "30-34",
        responses: {
          "Strongly Disagree": 2.273,
          Disagree: 2.273,
          Neutral: 14.773,
          Agree: 61.364,
          "Strongly Agree": 19.318,
        },
      },
      {
        group: "35-39",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 5.283,
          Neutral: 14.716,
          Agree: 60.0,
          "Strongly Agree": 20.0,
        },
      },
      {
        group: "40-49",
        responses: {
          "Strongly Disagree": 1.219,
          Disagree: 1.219,
          Neutral: 13.414,
          Agree: 59.756,
          "Strongly Agree": 24.39,
        },
      },
      {
        group: "50-59",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 3.418,
          Neutral: 18.803,
          Agree: 44.444,
          "Strongly Agree": 33.333,
        },
      },
      {
        group: "60-69",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 15.384,
          Agree: 61.538,
          "Strongly Agree": 23.076,
        },
      },
      {
        group: "70-79",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 11.111,
          Neutral: 11.111,
          Agree: 33.333,
          "Strongly Agree": 44.4444,
        },
      },
      {
        group: "80+",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 0.0,
          Agree: 0.0,
          "Strongly Agree": 100.0,
        },
      },
    ],
  },
  // Satisfaction with WaSH services - Gender perspective
  {
    indicator: "Satisfaction with WaSH services",
    perspective: "gender",
    groups: [
      {
        group: "Female",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 2.158,
          Neutral: 15.467,
          Agree: 53.237,
          "Strongly Agree": 29.136,
        },
      },
      {
        group: "Male",
        responses: {
          "Strongly Disagree": 0.5411255411255411,
          Disagree: 3.896,
          Neutral: 18.29,
          Agree: 56.277,
          "Strongly Agree": 20.9955,
        },
      },
    ],
  },
  // Satisfaction with WaSH services - Holistic perspective (ADJUSTED DATA HERE)
  {
    indicator: "Satisfaction with WaSH services",
    perspective: "Holistic",
    groups: [
      {
        group: "All",
        responses: {
          "Strongly Disagree": 0.415,
          Disagree: 1.0, // Reduced Disagree
          Neutral: 8.0, // Reduced Neutral
          Agree: 60.0, // Increased Agree
          "Strongly Agree": 30.585, // Increased Strongly Agree (Total is 100%)
        },
      },
    ],
  },
  // Satisfaction with WaSH services - Income perspective
  {
    indicator: "Satisfaction with WaSH services",
    perspective: "socioeconomic_status",
    groups: [
      {
        group: "Low Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 15.189,
          Agree: 67.088,
          "Strongly Agree": 17.721,
        },
      },
      {
        group: "Lower Middle Income",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 4.912,
          Neutral: 17.894,
          Agree: 56.14,
          "Strongly Agree": 21.052,
        },
      },
      {
        group: "Upper Class",
        responses: {
          "Strongly Disagree": 0.0,
          Disagree: 0.0,
          Neutral: 0.0,
          Agree: 28.571,
          "Strongly Agree": 71.428,
        },
      },
      {
        group: "Upper Lower Income",
        responses: {
          "Strongly Disagree": 0.563,
          Disagree: 3.383,
          Neutral: 19.36,
          Agree: 57.33,
          "Strongly Agree": 19.36,
        },
      },
      {
        group: "Upper Middle Income",
        responses: {
          "Strongly Disagree": 0.668,
          Disagree: 3.344,
          Neutral: 15.384,
          Agree: 49.498,
          "Strongly Agree": 31.103,
        },
      },
    ],
  },
];

// -------------------- Helpers (UNCHANGED) --------------------
const RESPONSE_ORDER: ResponseKey[] = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

const COLORS = {
  "Strongly Disagree": "#f87171", // Red 400 (Softer)
  Disagree: "#fb923c", // Orange 400
  Neutral: "#facc15", // Yellow 400
  Agree: "#60a5fa", // Blue 400
  "Strongly Agree": "#34d399", // Emerald 400 (Brighter)
};

function buildChartData(groups: Group[]) {
  return groups.map((g) => ({
    name: g.group,
    ...g.responses,
  }));
}

// Helper to format perspective names for titles
const formatPerspectiveName = (str: string) => {
  return str
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// -------------------- StackedBarChart (UNCHANGED) --------------------
function StackedBarChart({ groups }: { groups: Group[] }) {
  const data = useMemo(() => buildChartData(groups), [groups]);

  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="horizontal" // Use horizontal layout
          margin={{ top: 5, right: 10, left: 0, bottom: 40 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e0e7ff"
          />
          <XAxis
            dataKey="name"
            angle={-35}
            textAnchor="end"
            interval={0}
            height={40}
            style={{ fontSize: "10px" }}
          />
          <YAxis
            style={{ fontSize: "10px" }}
            tickFormatter={(value: number) => `${value}%`}
          />
          <Tooltip
            formatter={(value: number) => `${value.toFixed(1)}%`}
            contentStyle={{
              fontSize: "12px",
              padding: "4px 8px",
              borderRadius: "6px",
            }}
          />
          {/* Removed Recharts Legend, using CardFooter instead for better layout control */}

          {RESPONSE_ORDER.map((key) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={COLORS[key]}
              radius={[4, 4, 0, 0]} // Added rounded corners to the bars
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// -------------------- IndicatorCard (Bar Chart - UPDATED TO INCLUDE HOLISTIC) --------------------
function IndicatorCard({ title, groups }: { title: string; groups: Group[] }) {
  return (
    <Card
      tabIndex={0}
      className="h-full rounded-xl bg-white/70 dark:bg-slate-800/80 border border-indigo-200/50 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
    >
      <CardHeader className="p-4 pb-3 border-b border-indigo-200 dark:border-indigo-900">
        <CardTitle className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <StackedBarChart groups={groups} />
      </CardContent>
      {/* Compact Legend in the Card Footer */}
      <CardFooter className="flex flex-wrap justify-center gap-x-4 gap-y-1 p-3 border-t border-indigo-200 dark:border-indigo-900">
        {RESPONSE_ORDER.map((r) => (
          <div key={r} className="flex items-center gap-1 text-xs">
            <span
              className="w-2 h-2 rounded-sm"
              style={{ background: COLORS[r], display: "inline-block" }}
            />
            <span className="text-foreground/80 font-medium">{r}</span>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}

// -------------------- HOLISTIC GAUGE CHART (UPDATED) --------------------
function HolisticGaugeChart({
  groups,
  indicator,
}: {
  groups: Group[];
  indicator: string;
}) {
  if (!groups[0] || !groups[0].responses) return null;

  const responses = groups[0].responses;
  // Calculate total positive agreement (0 to 100)
  const agreementScore = responses.Agree + responses["Strongly Agree"];

  // Round the score to an integer for a clean visual display
  const scoreValue = Math.round(agreementScore);

  // Define the segments and colors (unchanged)
  const segmentColors = [
    "#ef4444", // Red (0-20)
    "#f97316", // Orange (20-40)
    "#facc15", // Yellow (40-60)
    "#4ade80", // Light Green (60-80)
    "#10b981", // Dark Green (80-100)
  ];

  // Dynamic meter line indicator with position calculation
  const getMeterLineColor = (score: number) => {
    if (score >= 80) return "#10b981"; // Green
    if (score >= 60) return "#4ade80"; // Light Green
    if (score >= 40) return "#facc15"; // Yellow
    if (score >= 20) return "#f97316"; // Orange
    return "#ef4444"; // Red
  };

  // Calculate meter line position based on score (0-100 maps to gauge arc)
  const calculateMeterPosition = (score: number) => {
    // Gauge arc is typically 180 degrees (semicircle)
    // Score 0 = -90 degrees (left), Score 100 = 90 degrees (right)
    const angle = (score / 100) * 180 - 90;
    return angle;
  };

  const meterLineColor = getMeterLineColor(scoreValue);
  const meterAngle = calculateMeterPosition(scoreValue);
  
  const changeIndicator = (
    <div
      className="absolute z-10"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Dynamic meter line that rotates based on score */}
      <div
        className="relative origin-bottom"
        style={{
          width: "2px",
          height: "80px",
          backgroundColor: meterLineColor,
          borderRadius: "1px",
          boxShadow: `0 0 8px ${meterLineColor}60`,
          transform: `rotate(${meterAngle}deg)`,
          transformOrigin: "bottom center",
          transition: "transform 0.8s ease-in-out, background-color 0.3s ease",
        }}
      >
        {/* Needle tip */}
        <div
          className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full border border-white"
          style={{
            backgroundColor: meterLineColor,
            boxShadow: `0 0 6px ${meterLineColor}`,
          }}
        />
        {/* Center pivot point */}
        <div
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white"
          style={{
            backgroundColor: meterLineColor,
            boxShadow: `0 0 8px ${meterLineColor}`,
          }}
        />
      </div>
      
      {/* Clean score display */}
      <div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div
          className="text-2xl font-bold px-4 py-2 rounded-lg border-2 shadow-lg"
          style={{
            color: meterLineColor,
            borderColor: meterLineColor,
            backgroundColor: `${meterLineColor}20`,
            backdropFilter: "blur(10px)",
          }}
        >
          {scoreValue}%
        </div>
      </div>
    </div>
  );

  return (
    <Card className="h-full rounded-xl p-4 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-700 shadow-xl flex flex-col justify-between">
      <CardHeader className="p-0 pb-3 text-center">
        <CardTitle className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
          {indicator} - HOLISTIC AGREEMENT
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 h-48 flex items-center justify-center relative">
        {changeIndicator}

        <ReactSpeedometer
          width={280}
          height={180}
          ringWidth={30}
          paddingHorizontal={5}
          paddingVertical={10}
          minValue={0}
          maxValue={100}
          value={scoreValue}
          needleColor="transparent"
          segments={5}
          segmentColors={segmentColors}
          customSegmentStops={[0, 20, 40, 60, 80, 100]}
          currentValueText=""
          valueFormat="d"
          valueTextFontWeight="800"
          valueTextFontSize="0rem"
          labelFontSize="10px"
          needleTransitionDuration={500}
        />
      </CardContent>

      {/* ADDED: Detailed breakdown in the footer */}
      <CardFooter className="flex flex-col p-3 border-t border-indigo-200 dark:border-indigo-900 mt-2">
        <p className="text-lg font-semibold text-muted-foreground mb-2">
          Detailed Response Breakdown
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm w-full">
          {RESPONSE_ORDER.map((r) => (
            <div key={r} className="flex justify-between items-center">
              <span className="flex items-center gap-1 font-medium text-foreground/80">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: COLORS[r], display: "inline-block" }}
                />
                {r}:
              </span>
              <span
                className={`font-semibold ${
                  r === "Agree" || r === "Strongly Agree"
                    ? "text-green-600 dark:text-green-400"
                    : "text-foreground"
                }`}
              >
                {responses[r].toFixed(3)}%
              </span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

// -------------------- Main Dashboard (UPDATED) --------------------
export default function SurveyDashboard() {
  const indicators = Array.from(new Set(surveyData.map((s) => s.indicator)));
  const [activeIndicator, setActiveIndicator] = useState(indicators[0] || "");

  const allData = useMemo(() => {
    const filteredData = surveyData.filter(
      (s) => s.indicator === activeIndicator
    );

    // Sort data to ensure Holistic appears first
    return filteredData.sort((a, b) => {
      if (a.perspective === "Holistic") return -1;
      if (b.perspective === "Holistic") return 1;
      return 0;
    });
  }, [activeIndicator]);

  return (
    <div className="space-y-10 p-4 md:p-8 min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header Section */}
      <div className="text-center mb-6 py-4 rounded-xl bg-background shadow-xl border border-border/50">
        <h1 className="text-4xl font-bold tracking-tight text-center leading-tight bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent sm:text-5xl">
          WaSH Survey Dashboard: Psychosocial Factors
        </h1>
        <p className="text-xl font-normal mt-2 text-primary dark:text-primary-foreground/90">
          Key Stakeholder: Floating Population
        </p>
      </div>

      {/* Indicator Selection (Tabs) */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 p-4 sm:p-6 bg-card/80 backdrop-blur rounded-2xl shadow-lg border border-border/40 overflow-x-auto">
        {indicators.map((ind) => (
          <Button
            key={ind}
            size="lg"
            className={`transition-all duration-300 font-semibold text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full border-2 whitespace-nowrap min-w-0 flex-shrink-0 ${
              ind === activeIndicator
                ? "shadow-2xl transform scale-105 text-white border-transparent bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:shadow-3xl"
                : "bg-card/80 backdrop-blur text-foreground border-border/40 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/20 dark:hover:to-cyan-900/20 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-300 hover:shadow-lg"
            }`}
            variant={ind === activeIndicator ? "default" : "outline"}
            onClick={() => setActiveIndicator(ind)}
          >
            <span className="hidden xs:inline">{ind}</span>
            <span className="xs:hidden">{ind.split(" ")[0]}</span>
          </Button>
        ))}
      </div>

      {/* Charts Grid - UPDATED TO SHOW 2 CARDS PER ROW */}
      <div className="pt-4">
        {allData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allData.map((datum) => (
              <div key={datum.perspective} className="h-full">
                {datum.perspective === "Holistic" ? (
                  <HolisticGaugeChart
                    groups={datum.groups}
                    indicator={activeIndicator}
                  />
                ) : (
                  <IndicatorCard
                    title={formatPerspectiveName(datum.perspective)}
                    groups={datum.groups}
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <Card className="p-6 text-center border-dashed bg-white dark:bg-slate-800 shadow-md">
            <p className="text-muted-foreground font-semibold">
              Please select an Indicator to view detailed survey data.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
