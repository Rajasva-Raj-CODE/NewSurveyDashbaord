export const populationFluxData = {
  population_flux: [
    {
      phase: "Pre",
      data: [
        { state: "Bihar", count: 16 },
        { state: "Madhya Pradesh", count: 32 },
        { state: "Uttar Pradesh", count: 416 },
        { state: "Uttarakhand", count: 27 }
      ]
    },
    {
      phase: "During",
      data: [
        { state: "ASSAM", count: 14 },
        { state: "Bihar", count: 141 },
        { state: "CHANDIGARH", count: 29 },
        { state: "Chhattisgarh", count: 31 },
        { state: "DELHI", count: 69 },
        { state: "Goa", count: 1 },
        { state: "Gujarat", count: 45 },
        { state: "Haryana", count: 30 },
        { state: "HIMACHAL PRADESH", count: 8 },
        { state: "Jammu and Kashmir", count: 5 },
        { state: "JHARKHAND", count: 31 },
        { state: "KARNATAKA", count: 16 },
        { state: "MADHYA PRADESH", count: 245 },
        { state: "Maharashtra", count: 82 },
        { state: "Manipur", count: 1 },
        { state: "ODISHA", count: 17 },
        { state: "Punjab", count: 8 },
        { state: "RAJASTHAN", count: 45 },
        { state: "Sikkim", count: 2 },
        { state: "TAMIL NADU", count: 8 },
        { state: "TELANGANA", count: 10 },
        { state: "Uttar Pradesh", count: 1390 },
        { state: "UTTARAKHAND", count: 69 },
        { state: "WEST BENGAL", count: 36 }
      ]
    },
    {
      phase: "Post",
      data: [
        { state: "Bihar", count: 6 },
        { state: "Chhattisgarh", count: 1 },
        { state: "Gujarat", count: 4 },
        { state: "Uttarakhand", count: 1 },
        { state: "Maharashtra", count: 1 },
        { state: "Madhya Pradesh", count: 32 },
        { state: "RAJASTHAN", count: 5 },
        { state: "TELANGANA", count: 2 },
        { state: "Uttar Pradesh", count: 498 }
      ]
    }
  ]
};

export const stateNameMapping: Record<string, string[]> = {
  "Assam": ["ASSAM", "Assam", "Asom"],
  "Arunachal Pradesh": ["Arunachal Pradesh", "Arunāchal Pradesh"],
  "Nagaland": ["Nagaland", "Nāgāland"],
  "Manipur": ["Manipur", "Manipur"],
  "Mizoram": ["Mizoram"],
  "Tripura": ["Tripura"],
  "Meghalaya": ["Meghalaya", "Meghālaya"],
  "Bihar": ["Bihar", "Bihār"],
  "Chandigarh": ["CHANDIGARH", "Chandigarh", "Chandīgarh"],
  "Chhattisgarh": ["Chhattisgarh", "Chhattīsgarh"],
  "NCT of Delhi": ["DELHI", "Delhi", "NCT of Delhi", "National Capital Territory of Delhi"],
  "Goa": ["Goa"],
  "Gujarat": ["Gujarat", "Gujarāt"],
  "Haryana": ["Haryana", "Haryāna"],
  "Himachal Pradesh": ["HIMACHAL PRADESH", "Himachal Pradesh", "Himāchal Pradesh"],
  "Jammu and Kashmir": ["Jammu and Kashmir", "Jammu & Kashmir", "Jammu and Kashmīr"],
  "Jharkhand": ["JHARKHAND", "Jharkhand", "Jhārkhand"],
  "Karnataka": ["KARNATAKA", "Karnataka", "Karnātaka"],
  "Kerala": ["Kerala", "Kérala"],
  "Madhya Pradesh": ["MADHYA PRADESH", "Madhya Pradesh", "Madhya Pradēsh"],
  "Maharashtra": ["Maharashtra", "Mahārāshtra"],
  "Odisha": ["ODISHA", "Odisha", "Orissa", "Odisha"],
  "Punjab": ["Punjab", "Punjāb"],
  "Rajasthan": ["RAJASTHAN", "Rajasthan", "Rājasthān"],
  "Sikkim": ["Sikkim"],
  "Tamil Nadu": ["TAMIL NADU", "Tamil Nadu", "Tamil Nādu"],
  "Telangana": ["TELANGANA", "Telangana", "Telangāna"],
  "Uttar Pradesh": ["Uttar Pradesh", "Uttar Pradēsh"],
  "Uttarakhand": ["UTTARAKHAND", "Uttarakhand", "Uttarākhand"],
  "West Bengal": ["WEST BENGAL", "West Bengal", "Paschim Banga"],
  "Andhra Pradesh": ["Andhra Pradesh", "Āndhra Pradesh"],
  "Puducherry": ["Puducherry", "Pondicherry"],
  "Dadra and Nagar Haveli": ["Dadra and Nagar Haveli", "Dādra and Nagar Haveli and Daman and Diu"],
  "Daman and Diu": ["Daman and Diu", "Damān and Diu"],
  "Lakshadweep": ["Lakshadweep", "Lakshadwīp"],
  "Andaman and Nicobar": ["Andaman and Nicobar", "Andaman & Nicobar Islands", "Andaman and Nicobar Islands"],
  "Ladakh": ["Ladakh", "Ladākh"]
};

export function normalizeStateName(name: string): string {
  const trimmedName = name.trim();

  for (const [key, variations] of Object.entries(stateNameMapping)) {
    if (variations.some(v => v.toLowerCase() === trimmedName.toLowerCase())) {
      return key;
    }
  }

  return trimmedName;
}

export function findStateData(geoStateName: string, dataMap: Record<string, number>): number | undefined {
  const normalized = normalizeStateName(geoStateName);

  if (dataMap[normalized] !== undefined) {
    return dataMap[normalized];
  }

  for (const [key, value] of Object.entries(dataMap)) {
    if (normalizeStateName(key) === normalized) {
      return value;
    }
  }

  return undefined;
}

export function getDataForPhase(phase: string) {
  const phaseData = populationFluxData.population_flux.find(p => p.phase === phase);
  if (!phaseData) return {};

  const dataMap: Record<string, number> = {};

  phaseData.data.forEach(item => {
    const normalizedName = normalizeStateName(item.state);
    dataMap[normalizedName] = item.count;
  });

  return dataMap;
}

// Shared choropleth scale. Keep in sync with legend UI.
export const choroplethScale = {
  // Thresholds are upper bounds for each bucket, last bucket is Infinity
  thresholds: [0, 10, 40, 90, 250, Infinity],
  // Colors aligned with the image reference (blue to red)
  colors: [
    "#e5e7eb", // 0 (No data)
    "#dbeafe", // < 10
    "#93c5fd", // 10–39
    "#fb923c", // 40–89
    "#f87171", // 90–249
    "#dc2626", // 250+
  ],
  // Labels for legend
  ranges: [
    "0",
    "< 10",
    "10–40",
    "40–90",
    "90–250",
    ">= 250",
  ],
};

export function getColorForCount(count: number | undefined): string {
  if (count === undefined || count === 0) return choroplethScale.colors[0];
  if (count < 10) return choroplethScale.colors[1];
  if (count < 40) return choroplethScale.colors[2];
  if (count < 90) return choroplethScale.colors[3];
  if (count < 250) return choroplethScale.colors[4];
  return choroplethScale.colors[5];
}
