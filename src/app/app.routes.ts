import { Routes } from '@angular/router';
import { ReportGenerateComponent } from './report-generate/report-generate.component';
import { RoomEntryComponent } from './room-entry/room-entry.component';
export const routes = [
  { path: 'room-entry', component: RoomEntryComponent },
  { path: 'report', component: ReportGenerateComponent },
];
