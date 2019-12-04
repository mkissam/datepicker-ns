import { BrowserModule } from '@angular/platform-browser';
import { Injectable, Component, Input, Output, EventEmitter, HostListener, Directive, ElementRef, NgModule, defineInjectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatepickerService {
    constructor() { }
}
DatepickerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DatepickerService.ctorParameters = () => [];
/** @nocollapse */ DatepickerService.ngInjectableDef = defineInjectable({ factory: function DatepickerService_Factory() { return new DatepickerService(); }, token: DatepickerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Outside {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.close = new EventEmitter();
        this.isOpen = false;
    }
    /**
     * @param {?} target
     * @return {?}
     */
    isChild(target) {
        /** @type {?} */
        const parent = target.parentNode;
        if (!parent || parent.tagName === 'undefined') {
            return false;
        }
        /** @type {?} */
        const tagName = parent.tagName;
        if (parent && tagName === 'APP-CALENDAR') {
            return true;
        }
        else if (parent && tagName !== 'HTML') {
            return this.isChild(parent);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleClick(event) {
        event.stopPropagation();
        event.preventDefault();
        if (!this.isOpen) {
            this.isOpen = true;
        }
        else if (!this.elRef.nativeElement.contains(event.target)) {
            this.close.emit();
        }
    }
}
Outside.decorators = [
    { type: Directive, args: [{
                selector: '[outside]',
            },] }
];
/** @nocollapse */
Outside.ctorParameters = () => [
    { type: ElementRef }
];
Outside.propDecorators = {
    close: [{ type: Output, args: ['outside',] }],
    handleClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
class Day {
}
class DatepickerComponent {
    constructor() {
        this.defaultOptions = {
            weekends: [5, 6],
            weekStart: 1,
            lang: 'en',
            selection: {
                mode: 'single',
                ctrlShift: false
            },
            timeMode: false,
            submitMode: false,
            suggestions: {
                enabled: false
            },
            initDates: [new Date()],
            disabled: {
                enabled: false,
                mode: 'after'
            }
        };
        this.onChanged = new EventEmitter();
        this.onCanceled = new EventEmitter();
        this.onClickOut = new EventEmitter();
        this._monthCalend = [];
        this._monthMode = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickout(event) {
        this.onClickOut.emit();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._options = Object.assign(this.defaultOptions, this.options);
        this._options.initDates = (this._options.initDates.length === 0) ? [new Date] : this._options.initDates;
        /** @type {?} */
        const lastDate = this._options.initDates[this._options.initDates.length - 1];
        this._currentMonth = new Date(lastDate.getFullYear(), lastDate.getMonth(), 1);
        /** @type {?} */
        const weekLabels = this.langs()['week'][this._options.lang];
        this.weekLabels = weekLabels.splice(this._options.weekStart).concat(weekLabels);
        this._getMonthsMatrix(this._currentMonth);
    }
    // half
    /**
     * @return {?}
     */
    showNext() {
        if (this._monthMode) {
            this._currentMonth.setMonth(this._currentMonth.getMonth() + 1);
            this._getMonthsMatrix(this._currentMonth);
        }
        else {
            this._currentMonth.setFullYear(this._currentMonth.getFullYear() + 1);
            this.showViewMonth(this._currentMonth);
        }
    }
    // half
    /**
     * @return {?}
     */
    showPrev() {
        if (this._monthMode) {
            this._currentMonth.setMonth(this._currentMonth.getMonth() - 1);
            this._getMonthsMatrix(this._currentMonth);
        }
        else {
            this._currentMonth.setFullYear(this._currentMonth.getFullYear() - 1);
            this.showViewMonth(this._currentMonth);
        }
    }
    /**
     * @param {?} str
     * @return {?}
     */
    withZero(str) {
        str = str.toString();
        return (str.length === 1) ? '0' + str : str;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateKey(date) {
        // tslint:disable-next-line: radix
        return parseInt(date.getFullYear() + '' + this.withZero(date.getMonth()) + '' + this.withZero(date.getDate()));
    }
    /**
     * @param {?} date
     * @param {?=} event
     * @return {?}
     */
    showViewMonth(date, event = null) {
        (event) ? event.stopPropagation() : null;
        /** @type {?} */
        const year = date.getFullYear();
        for (let k = 0; k < 4; k++) {
            this._monthCalend[k] = [];
            for (let i = k * 3; i < k * 3 + 3; i++) {
                this._monthCalend[k].push({
                    year,
                    month: i,
                    date: new Date(year, i, 1)
                });
            }
        }
        this._monthMode = false;
    }
    /**
     * @return {?}
     */
    langs() {
        /** @type {?} */
        const lang = {
            week: {
                en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'],
                ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            },
            month: {
                en: ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            }
        };
        return lang;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDisabled(date) {
        /** @type {?} */
        const a = new Date(date);
        a.setHours(0, 0, 0, 0);
        /** @type {?} */
        const b = new Date(new Date());
        b.setHours(0, 0, 0, 0);
        if (this._options.disabled.enabled) {
            /** @type {?} */
            const mode = this._options.disabled.mode;
            if (mode === 'before') {
                return (mode === 'before' && a.valueOf() < b.valueOf()) ? true : false;
            }
            else if (mode === 'after') {
                return (mode === 'after' && a.valueOf() > b.valueOf()) ? true : false;
            }
        }
        return false;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isWeekEnd(date) {
        return (this._options.weekends.includes(this.getNumDay(date))) ? true : false;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    getMonthByNUm(num) {
        /** @type {?} */
        const months = this.langs()['month'][this._options.lang];
        return months[num];
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getFirstDayNum(date) {
        /** @type {?} */
        const trueNum = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return this.getOffsetDaysStart(trueNum);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getLastDayNum(date) {
        /** @type {?} */
        const trueNum = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        return this.getOffsetDaysStart(trueNum);
    }
    /**
     * @param {?} day
     * @param {?=} event
     * @return {?}
     */
    clickDate(day, event = null) {
        (event) ? event.stopPropagation() : null;
        if (!day.disabled) {
            this.selectDay(day);
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDaysInMonth(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDaysInPrevMonth(date) {
        return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDay(date) {
        /** @type {?} */
        const day = new Day();
        day.key = this.getDateKey(date);
        day.num = date.getDate();
        day.date = new Date(date);
        day.isNowDate = this.isNowDate(date);
        day.isWeekEnd = this.isWeekEnd(date);
        day.disabled = this.isDisabled(date);
        day.currentMonth = (date.getFullYear() === this._currentMonth.getFullYear() && date.getMonth() === this._currentMonth.getMonth());
        return day;
    }
    // half
    /**
     * @param {?} date
     * @return {?}
     */
    _getMonthsMatrix(date) {
        /** @type {?} */
        const daysInMonth = this.getDaysInMonth(date);
        /** @type {?} */
        const daysInPrevMonth = this.getDaysInPrevMonth(date);
        /** @type {?} */
        const numFirstDay = this.getFirstDayNum(date);
        /** @type {?} */
        const numLastDay = this.getLastDayNum(date);
        /** @type {?} */
        const calend = [];
        /** @type {?} */
        const weekCalend = [];
        /** @type {?} */
        const nowMonth = new Date(date);
        /** @type {?} */
        const prevMonthDate = new Date(date);
        prevMonthDate.setMonth(new Date(date).getMonth() - 1);
        /** @type {?} */
        const nextMonthDate = new Date(date);
        nextMonthDate.setMonth(new Date(date).getMonth() + 1);
        if (numFirstDay !== 0) {
            for (let i = numFirstDay; i > 0; i--) {
                /** @type {?} */
                const num = daysInPrevMonth - i + 1;
                date = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), num);
                calend.push(this.getDay(date));
            }
        }
        for (let i = 1; i <= daysInMonth; i++) {
            nowMonth.setDate(i);
            date = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), i);
            calend.push(this.getDay(date));
        }
        if (numLastDay !== 6) {
            for (let i = 1; i < 7 - numLastDay; i++) {
                date = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), i);
                calend.push(this.getDay(date));
            }
        }
        for (let i = 0; i < calend.length / 7; i++) {
            /** @type {?} */
            const week = [];
            for (let k = i * 7; k < i * 7 + 7; k++) {
                week.push(calend[k]);
            }
            weekCalend.push(week);
        }
        this.calend = calend;
        this.weekCalend = weekCalend;
        this.markselectDay();
        this.markPeriodDates();
    }
    // half
    /**
     * @param {?} date
     * @return {?}
     */
    isNowDate(date) {
        /** @type {?} */
        const now = new Date();
        return (now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth()
            && now.getDate() === date.getDate()) ? true : false;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    timeChange(data) {
        this._options.initDates[data.index] = new Date(data.date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getNumDay(date) {
        return this.getOffsetDaysStart(date.getDay());
    }
    /**
     * @param {?} trueNum
     * @return {?}
     */
    getOffsetDaysStart(trueNum) {
        return (trueNum < this._options.weekStart) ? 7 + trueNum - this._options.weekStart : trueNum - this._options.weekStart;
    }
    /**
     * @param {?} day
     * @return {?}
     */
    selectDay(day) {
        if (this._options.selection.mode !== 'single') {
            if (!this._options.initDates.includes(day.date) && !day.isSelected) {
                if (this._options.selection.mode === 'period') {
                    if (this._options.initDates.length === 1) {
                        this._options.initDates.push(day.date);
                    }
                    else if (this._options.initDates.length === 2) {
                        this._options.initDates = [];
                        this._options.initDates.push(day.date);
                    }
                }
                else if (this._options.selection.mode === 'multiple') {
                    this._options.initDates.push(day.date);
                }
            }
            else {
                if (this._options.selection.mode === 'multiple') {
                    // tslint:disable-next-line: forin
                    for (const i in this._options.initDates) {
                        /** @type {?} */
                        const item = this._options.initDates[i];
                        if (this.getDateKey(item) === day.key) {
                            this._options.initDates.splice(parseInt(i), 1);
                        }
                    }
                }
            }
        }
        else {
            this._options.initDates = [day.date];
        }
        this.markselectDay();
        this.markPeriodDates();
        (!this._options.submitMode && !this._options.timeMode) ? this.change() : null;
    }
    /**
     * @param {?} day
     * @return {?}
     */
    hoverDate(day) {
        this.markPeriodDates(day);
    }
    // full
    /**
     * @return {?}
     */
    markselectDay() {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.calend.length; i++) {
            /** @type {?} */
            const item = this.calend[i];
            /** @type {?} */
            let selected = false;
            for (let date of this._options.initDates) {
                if (this.getDateKey(date) === item.key) {
                    selected = true;
                }
            }
            this.calend[i].isSelected = selected;
        }
    }
    /**
     * @param {?=} hoveredDate
     * @return {?}
     */
    markPeriodDates(hoveredDate = null) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.calend.length; i++) {
            /** @type {?} */
            const item = this.calend[i];
            if (this._options.selection.mode === 'period') {
                if (this._options.initDates.length === 1 && hoveredDate) {
                    if ((item.key >= hoveredDate.key && item.key <= this.getDateKey(this._options.initDates[0]))
                        || (item.key <= hoveredDate.key && item.key >= this.getDateKey(this._options.initDates[0]))) {
                        this.calend[i].markedPeriod = true;
                    }
                    else {
                        this.calend[i].markedPeriod = false;
                    }
                }
                else if (this._options.initDates.length === 2) {
                    if ((item.key >= this.getDateKey(this._options.initDates[1]) && item.key <= this.getDateKey(this._options.initDates[0]))
                        || (item.key <= this.getDateKey(this._options.initDates[1]) && item.key >= this.getDateKey(this._options.initDates[0]))) {
                        this.calend[i].markedPeriod = true;
                    }
                    else {
                        this.calend[i].markedPeriod = false;
                    }
                }
                else {
                    this.calend[i].markedPeriod = false;
                }
            }
        }
    }
    /**
     * @param {?} date
     * @param {?} event
     * @return {?}
     */
    showMonth(date, event) {
        event.stopPropagation();
        this._monthMode = true;
        this._currentMonth = date;
        this._getMonthsMatrix(date);
        this.markselectDay();
        this.markPeriodDates();
    }
    /**
     * @return {?}
     */
    cancel() {
        this.onCanceled.emit();
    }
    /**
     * @return {?}
     */
    submit() {
        this.change();
    }
    /**
     * @return {?}
     */
    change() {
        /** @type {?} */
        let data = [];
        data = this._options.initDates;
        this.onChanged.emit(data);
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ns-datepicker',
                template: "<div class=\"calendar\" (outside)=\"clickout($event)\" >\n\n    <div style=\"border-bottom: 1px solid #f3f3f3; display:flex; flex-direction: row; justify-content: center; align-items:center; padding:10px;flex-direction: column;\">\n        <!--<div *ngIf=\"suggestions\" style=\"display: block;\">\n            <button class=\"dateBtn\" (click)=\"selectDay(today)\">\u0441\u0435\u0433\u043E\u0434\u043D\u044F</button>\n        </div>-->\n      <div style=\"padding-top:10px; display:flex; flex-direction: row; justify-content: space-between; width: 100%;\">\n          <a href=\"javascript:void(0)\" (click)=\"showPrev()\" class=\"btnPrevNext\"><</a>\n          <div class=\"yearBtn\" (click)=\"showViewMonth(_currentMonth, $event)\">\n              <span *ngIf=\"_monthMode\" style=\"margin-right:3px\">{{getMonthByNUm(_currentMonth.getMonth())}}</span> <span>{{_currentMonth.getFullYear()}}</span>\n          </div>\n          <a href=\"javascript:void(0)\" (click)=\"showNext()\"  class=\"btnPrevNext\">></a>\n      </div>\n      \n      \n    \n  \n    </div>\n    <div style=\"padding: 8px 10px;\">\n      \n      <div *ngIf=\"weekLabels&&_monthMode\" class=\"row\">\n        <div class=\"col h\" *ngFor=\"let label of weekLabels\">\n          {{label}}\n        </div>\n      </div>\n  \n  \n      <div *ngIf=\"weekCalend&&_monthMode\">\n        <div class=\"row\" *ngFor=\"let week of weekCalend\">\n            <div \n              *ngFor=\"let day of week\" \n              class=\"col\" \n              [ngClass]=\"{currentMonth:day.currentMonth, isNowDate: day.isNowDate, isWeekEnd: day.isWeekEnd, isSelected: day.isSelected, markedPeriod: day.markedPeriod, disabled: day.disabled }\" \n              (click)=\"clickDate(day, $event)\"\n              (mouseover)=\"hoverDate(day)\"\n            >\n            {{day.num}}\n            <div></div>\n          </div>\n        </div>     \n      </div>\n  \n  \n      <div *ngIf=\"_monthCalend&&!_monthMode\">\n        <div class=\"row\" *ngFor=\"let months of _monthCalend\">\n            <div \n              *ngFor=\"let month of months\"\n              class=\"col month\"\n              (click)=\"showMonth(month.date, $event)\"\n            >\n            {{getMonthByNUm(month.month)}} \n            </div>\n        </div>     \n      </div>\n  \n    </div>\n    <div *ngIf=\"_options.timeMode\" style=\"border-bottom: 1px solid #f3f3f3; display:flex; flex-direction: column; justify-content: center; padding:10px; font-size: 11px\">\n      \n      <div *ngFor=\"let date of _options.initDates; let i = index\">\n        <ns-time [date]=\"date\" [index]=\"i\" (changed)=\"timeChange($event)\"></ns-time>\n      </div>\n\n    </div>\n\n\n    <div *ngIf=\"_options.timeMode||(!_options.timeMode&&_options.submitMode)\" style=\" display:flex; flex-direction: row; justify-content: space-between; align-items:center; padding:10px; font-size: 11px\">\n      <button class=\"btnCancel\" (click)=\"cancel()\">{{(_options.lang=='en')?'cancel':'\u043E\u0442\u043C\u0435\u043D\u0430'}}</button>\n      <button class=\"btnOk\" (click)=\"submit()\">{{(_options.lang=='en')?'ok':'\u043E\u043A'}}</button>\n    </div>\n  \n  </div>",
                styles: [".row{display:flex;flex-direction:row}.col{display:flex;position:relative;flex-direction:column;flex:1;justify-content:center;align-items:center;font-size:.8em;padding:4px;border-radius:2px;cursor:pointer;color:#c7c7c7;-webkit-animation:.2s ease-in slide-up;animation:.2s ease-in slide-up;text-align:center}@-webkit-keyframes slide-up{0%{opacity:.5}100%{opacity:1}}@keyframes slide-up{0%{opacity:.5}100%{opacity:1}}.col.markedPeriod{background:#d5ebff!important;border-radius:0!important;transition:.2s}.col.isSelected.markedPeriod{border-radius:2px!important}.col.isSelected{background:#5eb3fc!important;color:#fff!important}.dateBtn{float:left;background:#f3f3f3;border:0;font-size:.74em;color:#2fafff;outline:0;border-radius:2px;cursor:pointer;margin:2px;padding:2px 4px}.dateBtn:hover{background:#6398e0;color:#fff}.col.currentMonth{color:#353540}.col.isNowDate{color:#3f92ff}.col.isWeekEnd.currentMonth{color:#c53c3c}.col.disabled{background:#f5f5f5;color:#afafaf}.col.month:hover,.col:hover{background:#eee}.col.month{font-size:11px;color:#545454;padding:16px 8px;box-shadow:0 0 0 1px #f4f3f3;background:#fff;border-radius:0;min-width:40px}.col.h{color:#ff9a19;text-transform:uppercase}.col.h:hover{background:#fff}.calendar{float:left;box-shadow:0 3px 12px -5px #000;max-width:200px;-webkit-animation:50ms slide-up;animation:50ms slide-up;background:#fff;border-radius:8px}.btnPrevNext{font-size:14px;padding:6px 8px;border-radius:2px;color:#5eb3fc;text-decoration:none}.btnPrevNext:hover{background:#f4f3f3}.yearBtn{font-size:14px;padding:6px 10px;border-radius:2px;color:#585858;cursor:pointer}.yearBtn:hover{background:#f4f3f3}.btnOk{border:0;background:#5eb3fc;padding:8px 16px;color:#fff;border-radius:2px;outline:0;cursor:pointer}.btnOk:hover{background:#3e99e6}.btnCancel{border:0;background:#fff;padding:8px 16px;color:#5eb3fc;border-radius:2px;outline:0;cursor:pointer}.btnCancel:hover{background:#e4f3ff}"]
            }] }
];
/** @nocollapse */
DatepickerComponent.ctorParameters = () => [];
DatepickerComponent.propDecorators = {
    options: [{ type: Input }],
    onChanged: [{ type: Output }],
    onCanceled: [{ type: Output }],
    onClickOut: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimeComponent {
    constructor() {
        this.changed = new EventEmitter();
        this.inited = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.date.setHours(this.hour, this.minute);
        this.inited = true;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited) {
            this.date.setHours(this.hour, this.minute);
        }
    }
    /**
     * @return {?}
     */
    change() {
        /** @type {?} */
        const data = new Date(this.date);
        data.setHours(this.hour, this.minute);
        this.changed.emit({ index: this.index, date: data });
    }
    /**
     * @return {?}
     */
    hourChange() {
        this.change();
    }
    /**
     * @return {?}
     */
    minuteChange() {
        this.change();
    }
    /**
     * @return {?}
     */
    getTimeArays() {
        /** @type {?} */
        const arr = { min: [], hour: [] };
        for (let i = 0; i < 60; i++) {
            /** @type {?} */
            let k = i.toString();
            k = (k.length == 1) ? '0' + k : k;
            /** @type {?} */
            let item = { val: i, label: k };
            arr['min'].push(item);
            if (i < 24) {
                arr['hour'].push(item);
            }
        }
        return arr;
    }
}
TimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ns-time',
                template: "<div style=\"display: flex;flex-direction: row;justify-content: space-between;align-items: center; padding: 4px;color: #6f6f6f;background: linear-gradient(90deg,#fff, #e7f4ff); \">\n  <div >{{date.getDate()}}.{{date.getMonth()+1}}.{{date.getFullYear()}}</div>\n    <div>\n      <select [(ngModel)]=\"hour\"  (change)=\"hourChange()\"  style=\"border: 0; background: transparent; padding: 2px;font-size: 11px; outline: none;\">\n        <option *ngFor=\"let hour of getTimeArays()['hour']\" [ngValue]=\"hour.val\">{{hour.label}}</option>\n      </select>\n      <select [(ngModel)]=\"minute\" (change)=\"minuteChange()\" style=\"border: 0; background: transparent; padding: 2px;font-size: 11px; outline: none;\">\n        <option *ngFor=\"let min of getTimeArays()['min']\" [ngValue]=\"min.val\">{{min.label}}</option>\n      </select>\n    </div>\n\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
TimeComponent.ctorParameters = () => [];
TimeComponent.propDecorators = {
    date: [{ type: Input }],
    index: [{ type: Input }],
    changed: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ColComponent.decorators = [
    { type: Component, args: [{
                selector: 'ns-col',
                template: "<p>\n  col works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ColComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatepickerModule {
}
DatepickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DatepickerComponent, Outside, TimeComponent, ColComponent],
                imports: [
                    BrowserModule,
                    FormsModule
                ],
                exports: [DatepickerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DatepickerService, Outside, Day, DatepickerComponent, DatepickerModule, ColComponent as ɵb, TimeComponent as ɵa };

//# sourceMappingURL=datepicker-ns.js.map