import { Routes } from '@angular/router';
import { ReportGenerateComponent } from './report-generate/report-generate.component';
import { RoomEntryComponent } from './room-entry/room-entry.component';
import { MealBokingComponent } from './meal-boking/meal-boking.component';
import { GuesteComponent } from './gueste/gueste.component';
export const routes = [
  { path: 'room-entry', component: RoomEntryComponent },
  { path: 'report', component: ReportGenerateComponent },
  { path: 'meal-entry', component: MealBokingComponent},
  {path: 'search-guest', component: GuesteComponent},
];
