import { BpmZone } from "../../model/bpm-zone.model";

export const BPM_ZONES: { max: number; zone: BpmZone}[] = [
  { max: 169, zone: { label: 'Easy Run', cssClass: 'bg-blue-100 text-blue-700', seeds: ['2LDYcDd3ksPUd0Dk9fwtvI','6Mh1s95hQdLK2MqpZF7wch'] } },
  { max: 174, zone: { label: 'Base', cssClass: 'bg-green-100 text-green-700' , seeds: ['6Mh1s95hQdLK2MqpZF7wch','2fTsFCKRFQ5M0igJgabnLA'] } },
  { max: 184, zone: { label: 'Tempo', cssClass: 'bg-yellow-100 text-yellow-700' , seeds: ['2fTsFCKRFQ5M0igJgabnLA','1Qof3l5y03Ne3AstmBxXvO'] } },
  { max: 220, zone: { label: 'Sprint', cssClass: 'bg-red-100 text-red-700', seeds: ['1Qof3l5y03Ne3AstmBxXvO','7bt4cu3TgORlagQCunWHvY'] } },
];
