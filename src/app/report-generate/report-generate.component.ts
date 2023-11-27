import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-report-generate',
  templateUrl: './report-generate.component.html',
  styleUrls: ['./report-generate.component.css'],
})
export class ReportGenerateComponent implements OnInit {
  fileName = 'Report.xlsx';
  constructor() {}
  guestList = [
    {
      id: 1121,
      name: 'Sarkar',
      designation: 'Loco Pilot',
      contact: 9199123131,
      checkin_time: '23-11-2023 22:39',
      checkin_train: 12378,
      checkout_time: '24-11-2023 06:15',
      checkout_train: 22501,
      room: '101 Bed-1',
    },
    {
      id: 1125,
      name: 'Ghosh',
      designation: 'Staff',
      contact: 9123198231,
      checkin_time: '21-11-2023 12:39',
      checkin_train: 12770,
      checkout_time: '21-11-2023 21:25',
      checkout_train: 12791,
      room: '102 Bed-2',
    },
  ];
  ngOnInit(): void {}
  export() {
    let element = document.getElementById('report-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
}
