"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Feature, Geometry } from "geojson";
import {
    getDataForPhase,
    getColorForCount,
    findStateData,
    normalizeStateName,
} from "./population-data";

const INDIA_TOPO_JSON =
    "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson";

interface IndiaMapProps {
    selectedPhase: string;
}

interface IndiaStateProperties {
    st_nm?: string;
    ST_NM?: string;
    NAME_1?: string;
    name?: string;
    [key: string]: unknown;
}

export function IndiaMap({ selectedPhase }: IndiaMapProps) {
    const [tooltipContent, setTooltipContent] = useState<{
        name: string;
        count: number | undefined;
        x: number;
        y: number;
    } | null>(null);

    const phaseData = getDataForPhase(selectedPhase);

    return (
        <div className="relative w-full h-full flex items-center justify-center rounded-xl p-6 bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 1000,
                    center: [78.9629, 22.5937],
                }}
                width={800}
                height={600}
                style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "800px",
                    filter: "drop-shadow(0 10px 20px rgba(2,6,23,0.08))",
                }}
            >
                <Geographies geography={INDIA_TOPO_JSON}>
                    {({
                          geographies,
                      }: {
                        geographies: Feature<Geometry, IndiaStateProperties>[];
                    }) => {
                        if (!geographies || geographies.length === 0) return null;

                        return geographies.map((geo, index) => {
                            const rawStateName =
                                geo.properties?.st_nm ||
                                geo.properties?.ST_NM ||
                                geo.properties?.NAME_1 ||
                                geo.properties?.name ||
                                "";
                            const stateName = normalizeStateName(rawStateName);
                            const count = findStateData(rawStateName, phaseData);
                            const fillColor = getColorForCount(count);

                            return (
                                <Geography
                                    key={geo.properties?.st_nm || geo.properties?.NAME_1 || index}
                                    geography={geo}
                                    fill={fillColor}
                                    stroke="#FFFFFF"
                                    strokeWidth={0.9}
                                    style={{
                                        default: { outline: "none", transition: "all 0.2s ease-in-out" },
                                        hover: {
                                            outline: "none",
                                            cursor: "pointer",
                                            stroke: "#0F172A",
                                            strokeWidth: 1.25,
                                            fill: fillColor,
                                        },
                                        pressed: { outline: "none", fill: fillColor },
                                    }}
                                    onMouseEnter={(
                                        e: React.MouseEvent<SVGElement, MouseEvent>
                                    ) =>
                                        setTooltipContent({
                                            name: stateName,
                                            count,
                                            x: e.clientX,
                                            y: e.clientY,
                                        })
                                    }
                                    onMouseMove={(
                                        e: React.MouseEvent<SVGElement, MouseEvent>
                                    ) =>
                                        setTooltipContent((prev) =>
                                            prev
                                                ? { ...prev, x: e.clientX, y: e.clientY }
                                                : prev
                                        )
                                    }
                                    onMouseLeave={() => setTooltipContent(null)}
                                />
                            );
                        });
                    }}
                </Geographies>
            </ComposableMap>

            {tooltipContent && tooltipContent.name && (
                <div
                    className="fixed pointer-events-none z-[9999]"
                    style={{
                        left: `${tooltipContent.x}px`,
                        top: `${tooltipContent.y - 10}px`,
                        transform: "translate(-50%, -100%)",
                    }}
                >
                    <div className="backdrop-blur supports-[backdrop-filter]:bg-white/75 bg-white border border-slate-200 rounded-xl shadow-lg px-4 py-3 text-slate-800">
                        <p className="font-semibold text-sm leading-none tracking-wide">
                            {tooltipContent.name}
                        </p>
                        {tooltipContent.count !== undefined ? (
                            <div className="text-xs mt-1.5">
                                <p className="text-[11px] text-slate-500">
                                    Count of Place of Residence
                                </p>
                                <p className="mt-0.5">
                                    Count:{" "}
                                    <span className="font-semibold text-slate-900">
                    {tooltipContent.count}
                  </span>
                                </p>
                            </div>
                        ) : (
                            <p className="text-slate-500 text-xs mt-1.5">No data</p>
                        )}
                        <p className="text-[10px] text-slate-500 mt-2">
                            Phase: {selectedPhase}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
