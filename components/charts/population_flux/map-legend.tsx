import { choroplethScale } from "./population-data";

export function MapLegend() {
  const legendItems = [
    { color: choroplethScale.colors[0], label: "0", range: choroplethScale.ranges[0] },
    { color: choroplethScale.colors[1], label: "< 10", range: choroplethScale.ranges[1] },
    { color: choroplethScale.colors[2], label: "10–39", range: choroplethScale.ranges[2] },
    { color: choroplethScale.colors[3], label: "40–89", range: choroplethScale.ranges[3] },
    { color: choroplethScale.colors[4], label: "90–249", range: choroplethScale.ranges[4] },
    { color: choroplethScale.colors[5], label: "≥ 250", range: choroplethScale.ranges[5] },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-slate-900">Count buckets</h3>
        <span className="text-[10px] text-slate-500">Choropleth scale</span>
      </div>
      <div className="text-xs text-slate-600 mb-3">Color scale shared with the map</div>
      <div className="space-y-2">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className="w-9 h-4 rounded-md border border-slate-300 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex justify-between items-center flex-1 min-w-0">
              <span className="text-xs text-slate-700">{item.label}</span>
              {/* <span className="text-[11px] text-slate-500 truncate">{item.range}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
