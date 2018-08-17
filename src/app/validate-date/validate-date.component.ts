import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Range } from './validate-date.range';

@Component({
  selector: 'app-validate-date',
  templateUrl: './validate-date.component.html',
  styleUrls: ['./validate-date.component.css']
})
export class ValidateDateComponent implements OnInit {
  @Input() minDate: string;
  @Input() maxDate: string;
  dayErrorMessage: string;
  monthErrorMessage: string;
  yearErrorMessage: string;
  myDate: string;

  tempMinDate: Date;
  tempMaxDate: Date;

  day: number;
  month: number;
  year: number;

  isShowErrorDay = false;
  isShowErrorMonth = false;
  isShowErrorYear = false;
  isShowDate = false;

  dayRange: Range;
  monthRange: Range;
  yearRange: Range;

  constructor() {
    this.dayRange = new Range(1, 31);
    this.monthRange = new Range(1, 12);
    this.yearRange = new Range(1800, 3000);
  }

  ngOnInit() {
    if (this.minDate === undefined || this.maxDate === undefined) {
      return;
    }
    this.tempMinDate = new Date(this.minDate);
    this.tempMaxDate = new Date(this.maxDate);

    this.dayRange = new Range(this.tempMinDate.getDate(), this.tempMaxDate.getDate());
    this.monthRange = new Range(this.tempMinDate.getMonth() + 1, this.tempMaxDate.getMonth() + 1);
    this.yearRange = new Range(this.tempMinDate.getFullYear(), this.tempMaxDate.getFullYear());
  }

  checkDayInput(): void {
    this.isShowDate = false;
    if (this.day === null) {
      this.isShowErrorDay = true;
      this.dayErrorMessage = 'Vui lòng nhập vào ngày';
    } else if (this.day < this.dayRange.min || this.day > this.dayRange.max) {
      this.isShowErrorDay = true;
      this.dayErrorMessage = 'Ngày phải nằm trong khoảng từ ' + this.dayRange.min + ' đến ' + this.dayRange.max;
    } else {
      this.isShowErrorDay = false;
    }
  }

  checkMonthInput(): void {
    this.isShowDate = false;
    if (this.day !== null) {
      this.checkDayOfMonth();
      this.checkDayInput();
    }
    if (this.month === null) {
      this.isShowErrorMonth = true;
      this.monthErrorMessage = 'Vui lòng nhập vào tháng';
    } else if (this.month < this.monthRange.min || this.month > this.monthRange.max) {
      this.isShowErrorMonth = true;
      this.monthErrorMessage = 'Tháng phải nằm trong khoảng từ ' + this.monthRange.min + ' đến ' + this.monthRange.max;
    } else {
      this.isShowErrorMonth = false;
    }
  }

  checkYearInput(): void {
    this.isShowDate = false;
    if (this.day !== null && this.month !== null) {
      this.checkDayOfMonth();
      this.checkDayInput();
      this.checkMonthInput();
    }
    if (this.year === null) {
      this.isShowErrorYear = true;
      this.yearErrorMessage = 'Vui lòng nhập vào năm';
    } else if (this.year < this.yearRange.min || this.year > this.yearRange.max) {
      this.isShowErrorYear = true;
      this.yearErrorMessage = 'Năm phải nằm trong khoảng từ ' + this.yearRange.min + ' đến ' + this.yearRange.max;
    } else {
      this.isShowErrorYear = false;
    }
  }

  checkDayOfMonth(): void {
    if (this.month === 1 || this.month === 3 || this.month === 5 || this.month === 7 ||
      this.month === 8 || this.month === 10 || this.month === 12 || this.month === null) {
      this.dayRange.max = 31;
    } else if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
      this.dayRange.max = 30;
    } else if (this.month === 2) {
      if (this.year === null) {
        this.dayRange.max = 28;
      } else {
        this.isLeapYear(this.year) ? this.dayRange.max = 29 : this.dayRange.max = 28;
      }
    }
  }

  isLeapYear(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
      return true;
    }
    return false;
  }

  isNullInput(): boolean {
    if (this.day === null || this.month === null || this.year === null) {
      return true;
    } else {
      return false;
    }
  }

  checkAll(): void {
    this.checkDayInput();
    this.checkMonthInput();
    this.checkYearInput();
  }

  showDate() {
    this.checkAll();
    if (this.isShowErrorDay === true || this.isShowErrorMonth === true || this.isShowErrorYear === true) {
      this.isShowDate = false;
    } else {
      this.isShowDate = true;
      this.outPutDate();
    }
  }

  outPutDate() {
    const dateString = `${this.year}/${this.month}/${this.day}`;
    this.myDate = new Date(dateString).toLocaleDateString();
  }
}
