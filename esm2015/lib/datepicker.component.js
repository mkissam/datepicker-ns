/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, HostListener, Directive, ElementRef } from '@angular/core';
export class Outside {
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
if (false) {
    /** @type {?} */
    Outside.prototype.close;
    /** @type {?} */
    Outside.prototype.isOpen;
    /**
     * @type {?}
     * @private
     */
    Outside.prototype.elRef;
}
/**
 * @record
 */
export function Suggestions() { }
if (false) {
    /** @type {?} */
    Suggestions.prototype.enabled;
    /** @type {?|undefined} */
    Suggestions.prototype.items;
}
/**
 * @record
 */
export function Selection() { }
if (false) {
    /** @type {?} */
    Selection.prototype.mode;
    /** @type {?|undefined} */
    Selection.prototype.ctrlShift;
}
/**
 * @record
 */
export function DayInterface() { }
if (false) {
    /** @type {?} */
    DayInterface.prototype.key;
    /** @type {?} */
    DayInterface.prototype.num;
    /** @type {?} */
    DayInterface.prototype.date;
    /** @type {?} */
    DayInterface.prototype.isNowDate;
    /** @type {?} */
    DayInterface.prototype.isWeekEnd;
    /** @type {?} */
    DayInterface.prototype.disabled;
    /** @type {?|undefined} */
    DayInterface.prototype.custom;
    /** @type {?} */
    DayInterface.prototype.currentMonth;
    /** @type {?|undefined} */
    DayInterface.prototype.markedPeriod;
    /** @type {?|undefined} */
    DayInterface.prototype.isSelected;
}
/**
 * @record
 */
export function Options() { }
if (false) {
    /** @type {?} */
    Options.prototype.weekends;
    /** @type {?} */
    Options.prototype.lang;
    /** @type {?} */
    Options.prototype.weekStart;
    /** @type {?} */
    Options.prototype.selection;
    /** @type {?} */
    Options.prototype.timeMode;
    /** @type {?} */
    Options.prototype.submitMode;
    /** @type {?} */
    Options.prototype.initDates;
    /** @type {?} */
    Options.prototype.suggestions;
    /** @type {?|undefined} */
    Options.prototype.disabled;
    /** @type {?|undefined} */
    Options.prototype.days;
}
export class Day {
}
if (false) {
    /** @type {?} */
    Day.prototype.key;
    /** @type {?} */
    Day.prototype.num;
    /** @type {?} */
    Day.prototype.date;
    /** @type {?} */
    Day.prototype.isNowDate;
    /** @type {?} */
    Day.prototype.isWeekEnd;
    /** @type {?} */
    Day.prototype.disabled;
    /** @type {?} */
    Day.prototype.custom;
    /** @type {?} */
    Day.prototype.currentMonth;
    /** @type {?} */
    Day.prototype.markedPeriod;
    /** @type {?} */
    Day.prototype.isSelected;
}
export class DatepickerComponent {
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
            else {
                //this.calend[i].markedPeriod = false;
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
if (false) {
    /** @type {?} */
    DatepickerComponent.prototype.defaultOptions;
    /** @type {?} */
    DatepickerComponent.prototype.options;
    /** @type {?} */
    DatepickerComponent.prototype.onChanged;
    /** @type {?} */
    DatepickerComponent.prototype.onCanceled;
    /** @type {?} */
    DatepickerComponent.prototype.onClickOut;
    /** @type {?} */
    DatepickerComponent.prototype._options;
    /** @type {?} */
    DatepickerComponent.prototype._currentMonth;
    /** @type {?} */
    DatepickerComponent.prototype._monthCalend;
    /** @type {?} */
    DatepickerComponent.prototype._monthMode;
    /** @type {?} */
    DatepickerComponent.prototype.calend;
    /** @type {?} */
    DatepickerComponent.prototype.weekCalend;
    /** @type {?} */
    DatepickerComponent.prototype.hoveredDate;
    /** @type {?} */
    DatepickerComponent.prototype.weekLabels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRlcGlja2VyLW5zLyIsInNvdXJjZXMiOlsibGliL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSy9ILE1BQU0sT0FBTyxPQUFPOzs7O0lBS2xCLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFKbEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUMsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUd4QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxNQUFNOztjQUNOLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVTtRQUNoQyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTs7Y0FDMUQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1FBQzlCLElBQUksTUFBTSxJQUFJLE9BQU8sS0FBSyxjQUFjLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksTUFBTSxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO0lBRUgsQ0FBQzs7Ozs7SUFHTSxXQUFXLENBQUMsS0FBSztRQUN0QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO2FBQU0sSUFB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QVMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFuWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwwbkdBQTBDOzthQUUzQzs7Ozs7c0JBd0JFLEtBQUs7d0JBQ0wsTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07Ozs7SUF4Qk4sNkNBa0JDOztJQUdGLHNDQUFpQjs7SUFDakIsd0NBQXlDOztJQUN6Qyx5Q0FBMEM7O0lBQzFDLHlDQUFtRDs7SUFFbEQsdUNBQWtCOztJQUNsQiw0Q0FBb0I7O0lBQ3BCLDJDQUF5Qjs7SUFDekIseUNBQTJCOztJQUMzQixxQ0FBYzs7SUFDZCx5Q0FBa0I7O0lBQ2xCLDBDQUFrQjs7SUFDbEIseUNBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tvdXRzaWRlXScsXG59KVxuZXhwb3J0IGNsYXNzIE91dHNpZGUge1xuICBAT3V0cHV0KCdvdXRzaWRlJykgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgaXNDaGlsZCh0YXJnZXQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZiAoIXBhcmVudCB8fCBwYXJlbnQudGFnTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgY29uc3QgdGFnTmFtZSA9IHBhcmVudC50YWdOYW1lO1xuICAgIGlmIChwYXJlbnQgJiYgdGFnTmFtZSA9PT0gJ0FQUC1DQUxFTkRBUicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAocGFyZW50ICYmIHRhZ05hbWUgIT09ICdIVE1MJykge1xuICAgICAgcmV0dXJuIHRoaXMuaXNDaGlsZChwYXJlbnQpO1xuICAgIH1cblxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbnMge1xuICBlbmFibGVkOiBib29sZWFuOyAvLyBzaW5nbGUsIHBlcmlvbiwgbXVsdGlwbGVcbiAgaXRlbXM/OiBhbnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb24ge1xuICBtb2RlOiBzdHJpbmc7IC8vIHNpbmdsZSwgcGVyaW9uLCBtdWx0aXBsZVxuICBjdHJsU2hpZnQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERheUludGVyZmFjZSB7XG4gIGtleTogbnVtYmVyO1xuICBudW06IG51bWJlcjtcbiAgZGF0ZTogRGF0ZTtcbiAgaXNOb3dEYXRlOiBib29sZWFuO1xuICBpc1dlZWtFbmQ6IGJvb2xlYW47XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBjdXN0b20/OiBhbnk7XG4gIGN1cnJlbnRNb250aDogYm9vbGVhbjtcbiAgbWFya2VkUGVyaW9kPzogYm9vbGVhbjtcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9ucyB7XG4gIHdlZWtlbmRzOiBudW1iZXJbXTtcbiAgbGFuZzogc3RyaW5nO1xuICB3ZWVrU3RhcnQ6IG51bWJlcjtcbiAgc2VsZWN0aW9uOiBTZWxlY3Rpb247XG4gIHRpbWVNb2RlOiBib29sZWFuO1xuICBzdWJtaXRNb2RlOiBib29sZWFuO1xuICBpbml0RGF0ZXM6IERhdGVbXTtcbiAgc3VnZ2VzdGlvbnM6IFN1Z2dlc3Rpb25zO1xuICBkaXNhYmxlZD86IGFueTtcbiAgZGF5cz86IERheVtdO1xufVxuXG5leHBvcnQgY2xhc3MgRGF5IGltcGxlbWVudHMgRGF5SW50ZXJmYWNlIHtcbiAga2V5OiBudW1iZXI7XG4gIG51bTogbnVtYmVyO1xuICBkYXRlOiBEYXRlO1xuICBpc05vd0RhdGU6IGJvb2xlYW47XG4gIGlzV2Vla0VuZDogYm9vbGVhbjtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIGN1c3RvbT86IGFueTtcbiAgY3VycmVudE1vbnRoOiBib29sZWFuO1xuICBtYXJrZWRQZXJpb2Q/OiBib29sZWFuO1xuICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgIGRlZmF1bHRPcHRpb25zOiBPcHRpb25zID0ge1xuICAgIHdlZWtlbmRzOiBbNSwgNl0sXG4gICAgd2Vla1N0YXJ0OiAxLFxuICAgIGxhbmc6ICdlbicsXG4gICAgc2VsZWN0aW9uOiB7XG4gICAgICBtb2RlOiAnc2luZ2xlJyxcbiAgICAgIGN0cmxTaGlmdDogZmFsc2VcbiAgICB9LFxuICAgIHRpbWVNb2RlOiBmYWxzZSxcbiAgICBzdWJtaXRNb2RlOiBmYWxzZSxcbiAgICBzdWdnZXN0aW9uczoge1xuICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICB9LFxuICAgIGluaXREYXRlczogW25ldyBEYXRlKCldLFxuICAgIGRpc2FibGVkOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIG1vZGU6ICdhZnRlcidcbiAgICB9XG4gIH07XG5cblxuICBASW5wdXQoKSBvcHRpb25zO1xuICBAT3V0cHV0KCkgb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25DYW5jZWxlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2xpY2tPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgIF9vcHRpb25zOiBPcHRpb25zO1xuICAgX2N1cnJlbnRNb250aDogRGF0ZTtcbiAgIF9tb250aENhbGVuZDogYW55W10gPSBbXTtcbiAgIF9tb250aE1vZGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgY2FsZW5kOiBEYXlbXTtcbiAgIHdlZWtDYWxlbmQ6IGFueVtdO1xuICAgaG92ZXJlZERhdGU6IERhdGU7XG4gICB3ZWVrTGFiZWxzO1xuXG4gIGNsaWNrb3V0KGV2ZW50KSB7XG4gICAgdGhpcy5vbkNsaWNrT3V0LmVtaXQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5fb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLl9vcHRpb25zLmluaXREYXRlcyA9ICh0aGlzLl9vcHRpb25zLmluaXREYXRlcy5sZW5ndGggPT09IDApID8gW25ldyBEYXRlXSA6IHRoaXMuX29wdGlvbnMuaW5pdERhdGVzO1xuXG4gICAgY29uc3QgbGFzdERhdGUgPSB0aGlzLl9vcHRpb25zLmluaXREYXRlc1t0aGlzLl9vcHRpb25zLmluaXREYXRlcy5sZW5ndGggLSAxXTtcbiAgICB0aGlzLl9jdXJyZW50TW9udGggPSBuZXcgRGF0ZShsYXN0RGF0ZS5nZXRGdWxsWWVhcigpLCBsYXN0RGF0ZS5nZXRNb250aCgpLCAxKTtcbiAgICBjb25zdCB3ZWVrTGFiZWxzID0gdGhpcy5sYW5ncygpWyd3ZWVrJ11bdGhpcy5fb3B0aW9ucy5sYW5nXTtcbiAgICB0aGlzLndlZWtMYWJlbHMgPSB3ZWVrTGFiZWxzLnNwbGljZSh0aGlzLl9vcHRpb25zLndlZWtTdGFydCkuY29uY2F0KHdlZWtMYWJlbHMpO1xuXG4gICAgdGhpcy5fZ2V0TW9udGhzTWF0cml4KHRoaXMuX2N1cnJlbnRNb250aCk7XG5cbiAgfVxuXG4gIC8vIGhhbGZcbiAgc2hvd05leHQoKSB7XG4gICAgaWYgKHRoaXMuX21vbnRoTW9kZSkge1xuICAgICAgdGhpcy5fY3VycmVudE1vbnRoLnNldE1vbnRoKHRoaXMuX2N1cnJlbnRNb250aC5nZXRNb250aCgpICsgMSk7XG4gICAgICB0aGlzLl9nZXRNb250aHNNYXRyaXgodGhpcy5fY3VycmVudE1vbnRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VycmVudE1vbnRoLnNldEZ1bGxZZWFyKHRoaXMuX2N1cnJlbnRNb250aC5nZXRGdWxsWWVhcigpICsgMSk7XG4gICAgICB0aGlzLnNob3dWaWV3TW9udGgodGhpcy5fY3VycmVudE1vbnRoKTtcbiAgICB9XG5cbiAgfVxuICAvLyBoYWxmXG4gIHNob3dQcmV2KCkge1xuICAgIGlmICh0aGlzLl9tb250aE1vZGUpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRNb250aC5zZXRNb250aCh0aGlzLl9jdXJyZW50TW9udGguZ2V0TW9udGgoKSAtIDEpO1xuICAgICAgdGhpcy5fZ2V0TW9udGhzTWF0cml4KHRoaXMuX2N1cnJlbnRNb250aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRNb250aC5zZXRGdWxsWWVhcih0aGlzLl9jdXJyZW50TW9udGguZ2V0RnVsbFllYXIoKSAtIDEpO1xuICAgICAgdGhpcy5zaG93Vmlld01vbnRoKHRoaXMuX2N1cnJlbnRNb250aCk7XG4gICAgfVxuXG4gIH1cblxuICAgd2l0aFplcm8oc3RyOiBhbnkpIHtcbiAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gKHN0ci5sZW5ndGggPT09IDEpID8gJzAnICsgc3RyIDogc3RyO1xuICB9XG5cbiAgIGdldERhdGVLZXkoZGF0ZTogRGF0ZSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcmFkaXhcbiAgICByZXR1cm4gcGFyc2VJbnQoZGF0ZS5nZXRGdWxsWWVhcigpICsgJycgKyB0aGlzLndpdGhaZXJvKGRhdGUuZ2V0TW9udGgoKSkgKyAnJyArIHRoaXMud2l0aFplcm8oZGF0ZS5nZXREYXRlKCkpKTtcbiAgfVxuXG5cbiAgIHNob3dWaWV3TW9udGgoZGF0ZTogRGF0ZSwgZXZlbnQgPSBudWxsKSB7XG4gICAgKGV2ZW50KSA/IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIDogbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgICB0aGlzLl9tb250aENhbGVuZFtrXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IGsgKiAzOyBpIDwgayAqIDMgKyAzOyBpKyspIHtcbiAgICAgICAgdGhpcy5fbW9udGhDYWxlbmRba10ucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgbW9udGg6IGksXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSh5ZWFyLCBpLCAxKVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fbW9udGhNb2RlID0gZmFsc2U7XG5cbiAgfVxuXG4gICBsYW5ncygpIHtcbiAgICBjb25zdCBsYW5nID0ge1xuICAgICAgd2Vlazoge1xuICAgICAgICBlbjogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTdCddLFxuICAgICAgICBydTogWyfQktGBJywgJ9Cf0L0nLCAn0JLRgicsICfQodGAJywgJ9Cn0YInLCAn0J/RgicsICfQodCxJ10sXG4gICAgICB9LFxuICAgICAgbW9udGg6IHtcbiAgICAgICAgZW46IFsnSmFudWFyeScsICdGZWJyYXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ10sXG4gICAgICAgIHJ1OiBbJ9Cv0L3QstCw0YDRjCcsICfQpNC10LLRgNCw0LvRjCcsICfQnNCw0YDRgicsICfQkNC/0YDQtdC70YwnLCAn0JzQsNC5JywgJ9CY0Y7QvdGMJywgJ9CY0Y7Qu9GMJywgJ9CQ0LLQs9GD0YHRgicsICfQodC10L3RgtGP0LHRgNGMJywgJ9Ce0LrRgtGP0LHRgNGMJywgJ9Cd0L7Rj9Cx0YDRjCcsICfQlNC10LrQsNCx0YDRjCddLFxuICAgICAgfVxuXG4gICAgfTtcbiAgICByZXR1cm4gbGFuZztcbiAgfVxuXG4gICBpc0Rpc2FibGVkKGRhdGU6IERhdGUpIHtcbiAgICBjb25zdCBhID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgYS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBjb25zdCBiID0gbmV3IERhdGUobmV3IERhdGUoKSk7XG4gICAgYi5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5kaXNhYmxlZC5lbmFibGVkKSB7XG4gICAgICBjb25zdCBtb2RlID0gdGhpcy5fb3B0aW9ucy5kaXNhYmxlZC5tb2RlO1xuICAgICAgaWYgKG1vZGUgPT09ICdiZWZvcmUnKSB7XG4gICAgICAgIHJldHVybiAobW9kZSA9PT0gJ2JlZm9yZScgJiYgYS52YWx1ZU9mKCkgPCBiLnZhbHVlT2YoKSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdhZnRlcicpIHtcbiAgICAgICAgcmV0dXJuIChtb2RlID09PSAnYWZ0ZXInICYmIGEudmFsdWVPZigpID4gYi52YWx1ZU9mKCkpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAgaXNXZWVrRW5kKGRhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuX29wdGlvbnMud2Vla2VuZHMuaW5jbHVkZXModGhpcy5nZXROdW1EYXkoZGF0ZSkpKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gICBnZXRNb250aEJ5TlVtKG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgbW9udGhzID0gdGhpcy5sYW5ncygpWydtb250aCddW3RoaXMuX29wdGlvbnMubGFuZ107XG4gICAgcmV0dXJuIG1vbnRoc1tudW1dO1xuICB9XG5cbiAgIGdldEZpcnN0RGF5TnVtKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIGNvbnN0IHRydWVOdW06IG51bWJlciA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXREYXkoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRPZmZzZXREYXlzU3RhcnQodHJ1ZU51bSk7XG4gIH1cblxuICAgZ2V0TGFzdERheU51bShkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICBjb25zdCB0cnVlTnVtOiBudW1iZXIgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERheSgpO1xuICAgIHJldHVybiB0aGlzLmdldE9mZnNldERheXNTdGFydCh0cnVlTnVtKTtcbiAgfVxuXG4gICBjbGlja0RhdGUoZGF5LCBldmVudCA9IG51bGwpIHtcbiAgICAoZXZlbnQpID8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgOiBudWxsO1xuICAgIGlmICghZGF5LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdERheShkYXkpO1xuICAgIH1cblxuICB9XG5cbiAgIGdldERheXNJbk1vbnRoKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKTtcbiAgfVxuXG4gIGdldERheXNJblByZXZNb250aChkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDApLmdldERhdGUoKTtcbiAgfVxuXG4gICBnZXREYXkoZGF0ZTogRGF0ZSk6IERheSB7XG4gICAgY29uc3QgZGF5ID0gbmV3IERheSgpO1xuICAgIGRheS5rZXkgPSB0aGlzLmdldERhdGVLZXkoZGF0ZSk7XG4gICAgZGF5Lm51bSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGRheS5kYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgZGF5LmlzTm93RGF0ZSA9IHRoaXMuaXNOb3dEYXRlKGRhdGUpO1xuICAgIGRheS5pc1dlZWtFbmQgPSB0aGlzLmlzV2Vla0VuZChkYXRlKTtcbiAgICBkYXkuZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoZGF0ZSk7XG4gICAgZGF5LmN1cnJlbnRNb250aCA9IChkYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRoaXMuX2N1cnJlbnRNb250aC5nZXRGdWxsWWVhcigpICYmIGRhdGUuZ2V0TW9udGgoKSA9PT0gdGhpcy5fY3VycmVudE1vbnRoLmdldE1vbnRoKCkpO1xuICAgIHJldHVybiBkYXk7XG4gIH1cblxuICAvLyBoYWxmXG4gICBfZ2V0TW9udGhzTWF0cml4KGRhdGU6IERhdGUpIHtcbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IHRoaXMuZ2V0RGF5c0luTW9udGgoZGF0ZSk7XG4gICAgY29uc3QgZGF5c0luUHJldk1vbnRoID0gdGhpcy5nZXREYXlzSW5QcmV2TW9udGgoZGF0ZSk7XG4gICAgY29uc3QgbnVtRmlyc3REYXkgPSB0aGlzLmdldEZpcnN0RGF5TnVtKGRhdGUpO1xuICAgIGNvbnN0IG51bUxhc3REYXkgPSB0aGlzLmdldExhc3REYXlOdW0oZGF0ZSk7XG4gICAgY29uc3QgY2FsZW5kID0gW107XG4gICAgY29uc3Qgd2Vla0NhbGVuZCA9IFtdO1xuXG4gICAgY29uc3Qgbm93TW9udGggPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBjb25zdCBwcmV2TW9udGhEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgcHJldk1vbnRoRGF0ZS5zZXRNb250aChuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpIC0gMSk7XG4gICAgY29uc3QgbmV4dE1vbnRoRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIG5leHRNb250aERhdGUuc2V0TW9udGgobmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKSArIDEpO1xuXG4gICAgaWYgKG51bUZpcnN0RGF5ICE9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gbnVtRmlyc3REYXk7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbnVtID0gZGF5c0luUHJldk1vbnRoIC0gaSArIDE7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShwcmV2TW9udGhEYXRlLmdldEZ1bGxZZWFyKCksIHByZXZNb250aERhdGUuZ2V0TW9udGgoKSwgbnVtKTtcbiAgICAgICAgY2FsZW5kLnB1c2godGhpcy5nZXREYXkoZGF0ZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoOyBpKyspIHtcbiAgICAgIG5vd01vbnRoLnNldERhdGUoaSk7XG4gICAgICBkYXRlID0gbmV3IERhdGUobm93TW9udGguZ2V0RnVsbFllYXIoKSwgbm93TW9udGguZ2V0TW9udGgoKSwgaSk7XG4gICAgICBjYWxlbmQucHVzaCh0aGlzLmdldERheShkYXRlKSk7XG4gICAgfVxuXG4gICAgaWYgKG51bUxhc3REYXkgIT09IDYpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNyAtIG51bUxhc3REYXk7IGkrKykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUobmV4dE1vbnRoRGF0ZS5nZXRGdWxsWWVhcigpLCBuZXh0TW9udGhEYXRlLmdldE1vbnRoKCksIGkpO1xuICAgICAgICBjYWxlbmQucHVzaCh0aGlzLmdldERheShkYXRlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxlbmQubGVuZ3RoIC8gNzsgaSsrKSB7XG4gICAgICBjb25zdCB3ZWVrID0gW107XG4gICAgICBmb3IgKGxldCBrID0gaSAqIDc7IGsgPCBpICogNyArIDc7IGsrKykge1xuICAgICAgICB3ZWVrLnB1c2goY2FsZW5kW2tdKTtcbiAgICAgIH1cbiAgICAgIHdlZWtDYWxlbmQucHVzaCh3ZWVrKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGVuZCA9IGNhbGVuZDtcbiAgICB0aGlzLndlZWtDYWxlbmQgPSB3ZWVrQ2FsZW5kO1xuICAgIHRoaXMubWFya3NlbGVjdERheSgpO1xuICAgIHRoaXMubWFya1BlcmlvZERhdGVzKCk7XG4gIH1cblxuICAvLyBoYWxmXG4gICBpc05vd0RhdGUoZGF0ZTogRGF0ZSkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIChub3cuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpICYmIG5vdy5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKClcbiAgICAgICYmIG5vdy5nZXREYXRlKCkgPT09IGRhdGUuZ2V0RGF0ZSgpKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gICB0aW1lQ2hhbmdlKGRhdGEpIHtcbiAgICB0aGlzLl9vcHRpb25zLmluaXREYXRlc1tkYXRhLmluZGV4XSA9IG5ldyBEYXRlKGRhdGEuZGF0ZSk7XG4gIH1cblxuICAgZ2V0TnVtRGF5KGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldE9mZnNldERheXNTdGFydChkYXRlLmdldERheSgpKTtcbiAgfVxuXG4gICBnZXRPZmZzZXREYXlzU3RhcnQodHJ1ZU51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRydWVOdW0gPCB0aGlzLl9vcHRpb25zLndlZWtTdGFydCkgPyA3ICsgdHJ1ZU51bSAtIHRoaXMuX29wdGlvbnMud2Vla1N0YXJ0IDogdHJ1ZU51bSAtIHRoaXMuX29wdGlvbnMud2Vla1N0YXJ0O1xuICB9XG5cbiAgIHNlbGVjdERheShkYXk6IERheSkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLnNlbGVjdGlvbi5tb2RlICE9PSAnc2luZ2xlJykge1xuICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLmluaXREYXRlcy5pbmNsdWRlcyhkYXkuZGF0ZSkgJiYgIWRheS5pc1NlbGVjdGVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnNlbGVjdGlvbi5tb2RlID09PSAncGVyaW9kJykge1xuICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmluaXREYXRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuaW5pdERhdGVzLnB1c2goZGF5LmRhdGUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmluaXREYXRlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5pbml0RGF0ZXMucHVzaChkYXkuZGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX29wdGlvbnMuc2VsZWN0aW9uLm1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmluaXREYXRlcy5wdXNoKGRheS5kYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2VsZWN0aW9uLm1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZvcmluXG4gICAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMuX29wdGlvbnMuaW5pdERhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fb3B0aW9ucy5pbml0RGF0ZXNbaV07XG4gICAgICAgICAgICBpZiAodGhpcy5nZXREYXRlS2V5KGl0ZW0pID09PSBkYXkua2V5KSB7XG4gICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuaW5pdERhdGVzLnNwbGljZShwYXJzZUludChpKSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wdGlvbnMuaW5pdERhdGVzID0gW2RheS5kYXRlXTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcmtzZWxlY3REYXkoKTtcbiAgICB0aGlzLm1hcmtQZXJpb2REYXRlcygpO1xuICAgICghdGhpcy5fb3B0aW9ucy5zdWJtaXRNb2RlICYmICF0aGlzLl9vcHRpb25zLnRpbWVNb2RlKSA/IHRoaXMuY2hhbmdlKCkgOiBudWxsIDtcbiAgfVxuXG4gICBob3ZlckRhdGUoZGF5OiBEYXkpIHtcbiAgICB0aGlzLm1hcmtQZXJpb2REYXRlcyhkYXkpO1xuICB9XG5cbiAgLy8gZnVsbFxuICAgbWFya3NlbGVjdERheSgpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FsZW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtOiBhbnkgPSB0aGlzLmNhbGVuZFtpXTtcbiAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgZGF0ZSBvZiB0aGlzLl9vcHRpb25zLmluaXREYXRlcykge1xuICAgICAgICBpZiAodGhpcy5nZXREYXRlS2V5KGRhdGUpID09PSBpdGVtLmtleSkge1xuICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jYWxlbmRbaV0uaXNTZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gICBtYXJrUGVyaW9kRGF0ZXMoaG92ZXJlZERhdGU6IERheSA9IG51bGwpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FsZW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5jYWxlbmRbaV07XG5cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLnNlbGVjdGlvbi5tb2RlID09PSAncGVyaW9kJykge1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXMubGVuZ3RoID09PSAxICYmIGhvdmVyZWREYXRlKSB7XG5cbiAgICAgICAgICBpZiAoKGl0ZW0ua2V5ID49IGhvdmVyZWREYXRlLmtleSAmJiBpdGVtLmtleSA8PSB0aGlzLmdldERhdGVLZXkodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXNbMF0pKVxuICAgICAgICAgICAgfHwgKGl0ZW0ua2V5IDw9IGhvdmVyZWREYXRlLmtleSAmJiBpdGVtLmtleSA+PSB0aGlzLmdldERhdGVLZXkodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXNbMF0pKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRbaV0ubWFya2VkUGVyaW9kID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRbaV0ubWFya2VkUGVyaW9kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgaWYgKChpdGVtLmtleSA+PSB0aGlzLmdldERhdGVLZXkodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXNbMV0pICYmIGl0ZW0ua2V5IDw9IHRoaXMuZ2V0RGF0ZUtleSh0aGlzLl9vcHRpb25zLmluaXREYXRlc1swXSkpXG4gICAgICAgICAgICB8fCAoaXRlbS5rZXkgPD0gdGhpcy5nZXREYXRlS2V5KHRoaXMuX29wdGlvbnMuaW5pdERhdGVzWzFdKSAmJiBpdGVtLmtleSA+PSB0aGlzLmdldERhdGVLZXkodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXNbMF0pKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRbaV0ubWFya2VkUGVyaW9kID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRbaV0ubWFya2VkUGVyaW9kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FsZW5kW2ldLm1hcmtlZFBlcmlvZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL3RoaXMuY2FsZW5kW2ldLm1hcmtlZFBlcmlvZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3dNb250aChkYXRlOiBEYXRlLCBldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX21vbnRoTW9kZSA9IHRydWU7XG4gICAgdGhpcy5fY3VycmVudE1vbnRoID0gZGF0ZTtcbiAgICB0aGlzLl9nZXRNb250aHNNYXRyaXgoZGF0ZSk7XG4gICAgdGhpcy5tYXJrc2VsZWN0RGF5KCk7XG4gICAgdGhpcy5tYXJrUGVyaW9kRGF0ZXMoKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLm9uQ2FuY2VsZWQuZW1pdCgpO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMuY2hhbmdlKCk7XG4gIH1cblxuICBjaGFuZ2UoKSB7XG4gICAgbGV0IGRhdGEgPSBbXTtcbiAgICBkYXRhID0gdGhpcy5fb3B0aW9ucy5pbml0RGF0ZXM7XG4gICAgdGhpcy5vbkNoYW5nZWQuZW1pdChkYXRhKTtcbiAgfVxuXG5cbn1cbiJdfQ==