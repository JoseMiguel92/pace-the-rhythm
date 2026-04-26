export type BpmZone = {
  label: string;
  cssClass: string;
};

export const BPM_ZONES: { max: number; zone: BpmZone }[] = [
  { max: 170, zone: { label: 'Easy Run', cssClass: 'bg-blue-100 text-blue-700' } },
  { max: 175, zone: { label: 'Base', cssClass: 'bg-green-100 text-green-700' } },
  { max: 185, zone: { label: 'Tempo', cssClass: 'bg-yellow-100 text-yellow-700' } },
  { max: 200, zone: { label: 'Sprint', cssClass: 'bg-red-100 text-red-700' } },
];
