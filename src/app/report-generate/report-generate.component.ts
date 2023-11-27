export interface GuestElement {
  id: number;
  name: string;
  designation: string;
  contact: number;
  checkinTime: string,
  checkinTrain: number,
  checkoutTime: string,
  checkoutTrain: number,
  room: string,
}
const ELEMENT_DATA: GuestElement[] = [
  {
    id: 1121,
    name: 'Sarkar',
    designation: 'Loco Pilot',
    contact: 9199123131,
    checkinTime: '23-11-2023 06:00',
    checkinTrain: 12378,
    checkoutTime: '24-11-2023 18:00',
    checkoutTrain: 22501,
    room: '101 Bed-1',
  },
  {
    id: 1125,
    name: 'Ghosh',
    designation: 'Staff',
    contact: 9123198231,
    checkinTime: '21-11-2023 12:39',
    checkinTrain: 12770,
    checkoutTime: '21-11-2023 21:25',
    checkoutTrain: 12791,
    room: '102 Bed-2',
  },
];
import { formatDate } from '@angular/common';
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
  fromDate: Date | undefined;
  displayedColumns: string[] = [
  'id',
  'name',
  'designation',
  'contact',
  'checkinTime',
  'checkinTrain',
  'checkoutTime',
  'checkoutTrain',
  'room'];
  guestList = ELEMENT_DATA;
  ngOnInit(): void {}
  checkDate(){
    console.log(this.fromDate);
    console.log(this.guestList.filter(e => e.name === 'Ghosh'));
  }
  export() {
    let element = document.getElementById('report-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
}
