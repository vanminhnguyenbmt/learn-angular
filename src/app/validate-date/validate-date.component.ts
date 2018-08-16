import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-validate-date',
  templateUrl: './validate-date.component.html',
  styleUrls: ['./validate-date.component.css']
})
export class ValidateDateComponent implements OnInit {

  day: number = null;
  month: number = null;
  year: number = null;
  isShowErrorDay = false;
  isShowErrorMonth = false;
  isShowErrorYear = false;
  isShowDate = false;
  dayErrorMessage: string;
  monthErrorMessage: string;
  yearErrorMessage: string;
  @Input() min_day = 1;
  @Input() max_day = 31;
  myDate: string;

  @Output() handleDayInput = new EventEmitter<void>();
  @Output() handleMonthInput = new EventEmitter<void>();
  @Output() handleYearInput = new EventEmitter<void>();
  @Output() handleDate = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  checkDayInput(): void {
    this.handleDayInput.emit();
    this.isShowDate = false;
    if (this.day === null) {
      this.isShowErrorDay = true;
      this.dayErrorMessage = 'Vui lòng nhập vào ngày';
    } else if (this.day < this.min_day || this.day > this.max_day) {
      this.isShowErrorDay = true;
      this.dayErrorMessage = 'Ngày phải nằm trong khoảng từ ' + this.min_day + ' đến ' + this.max_day;
    } else {
      this.isShowErrorDay = false;
    }
  }

  checkMonthInput(): void {
    this.handleMonthInput.emit();
    this.isShowDate = false;
    if (this.day !== null) {
      this.checkDayOfMonth();
      this.checkDayInput();
    }
    if (this.month === null) {
      this.isShowErrorMonth = true;
      this.monthErrorMessage = 'Vui lòng nhập vào tháng';
    } else if (this.month < 1 || this.month > 12) {
      this.isShowErrorMonth = true;
      this.monthErrorMessage = 'Tháng phải nằm trong khoảng từ 1 đến 12';
    } else {
      this.isShowErrorMonth = false;
    }
  }

  checkYearInput(): void {
    this.handleYearInput.emit();
    this.isShowDate = false;
    if (this.day !== null && this.month !== null) {
      this.checkDayOfMonth();
      this.checkDayInput();
      this.checkMonthInput();
    }
    if (this.year === null) {
      this.isShowErrorYear = true;
      this.yearErrorMessage = 'Vui lòng nhập vào năm';
    } else if (this.year < 1) {
      this.isShowErrorYear = true;
      this.yearErrorMessage = 'Năm phải lớn hơn 1';
    } else {
      this.isShowErrorYear = false;
    }
  }

  checkDayOfMonth(): void {
    if (this.month === 1 || this.month === 3 || this.month === 5 || this.month === 7 ||
      this.month === 8 || this.month === 10 || this.month === 12 || this.month === null) {
      this.max_day = 31;
    } else if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
      this.max_day = 30;
    } else if (this.month === 2) {
      if (this.year === null) {
        this.max_day = 28;
      } else {
        this.isLeapYear(this.year) ? this.max_day = 29 : this.max_day = 28;
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
    this.handleShowDate.emit();
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
