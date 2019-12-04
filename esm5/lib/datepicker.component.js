/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output, HostListener, Directive, ElementRef } from '@angular/core';
var Outside = /** @class */ (function () {
    function Outside(elRef) {
        this.elRef = elRef;
        this.close = new EventEmitter();
        this.isOpen = false;
    }
    /**
     * @param {?} target
     * @return {?}
     */
    Outside.prototype.isChild = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var parent = target.parentNode;
        if (!parent || parent.tagName === 'undefined') {
            return false;
        }
        /** @type {?} */
        var tagName = parent.tagName;
        if (parent && tagName === 'APP-CALENDAR') {
            return true;
        }
        else if (parent && tagName !== 'HTML') {
            return this.isChild(parent);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Outside.prototype.handleClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (!this.isOpen) {
            this.isOpen = true;
        }
        else if (!this.elRef.nativeElement.contains(event.target)) {
            this.close.emit();
        }
    };
    Outside.decorators = [
        { type: Directive, args: [{
                    selector: '[outside]',
                },] }
    ];
    /** @nocollapse */
    Outside.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    Outside.propDecorators = {
        close: [{ type: Output, args: ['outside',] }],
        handleClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return Outside;
}());
export { Outside };
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
var Day = /** @class */ (function () {
    function Day() {
    }
    return Day;
}());
export { Day };
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
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
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
    DatepickerComponent.prototype.clickout = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onClickOut.emit();
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._options = Object.assign(this.defaultOptions, this.options);
        this._options.initDates = (this._options.initDates.length === 0) ? [new Date] : this._options.initDates;
        /** @type {?} */
        var lastDate = this._options.initDates[this._options.initDates.length - 1];
        this._currentMonth = new Date(lastDate.getFullYear(), lastDate.getMonth(), 1);
        /** @type {?} */
        var weekLabels = this.langs()['week'][this._options.lang];
        this.weekLabels = weekLabels.splice(this._options.weekStart).concat(weekLabels);
        this._getMonthsMatrix(this._currentMonth);
    };
    // half
    // half
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.showNext = 
    // half
    /**
     * @return {?}
     */
    function () {
        if (this._monthMode) {
            this._currentMonth.setMonth(this._currentMonth.getMonth() + 1);
            this._getMonthsMatrix(this._currentMonth);
        }
        else {
            this._currentMonth.setFullYear(this._currentMonth.getFullYear() + 1);
            this.showViewMonth(this._currentMonth);
        }
    };
    // half
    // half
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.showPrev = 
    // half
    /**
     * @return {?}
     */
    function () {
        if (this._monthMode) {
            this._currentMonth.setMonth(this._currentMonth.getMonth() - 1);
            this._getMonthsMatrix(this._currentMonth);
        }
        else {
            this._currentMonth.setFullYear(this._currentMonth.getFullYear() - 1);
            this.showViewMonth(this._currentMonth);
        }
    };
    /**
     * @param {?} str
     * @return {?}
     */
    DatepickerComponent.prototype.withZero = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        str = str.toString();
        return (str.length === 1) ? '0' + str : str;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.getDateKey = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // tslint:disable-next-line: radix
        return parseInt(date.getFullYear() + '' + this.withZero(date.getMonth()) + '' + this.withZero(date.getDate()));
    };
    /**
     * @param {?} date
     * @param {?=} event
     * @return {?}
     */
    DatepickerComponent.prototype.showViewMonth = /**
     * @param {?} date
     * @param {?=} event
     * @return {?}
     */
    function (date, event) {
        if (event === void 0) { event = null; }
        (event) ? event.stopPropagation() : null;
        /** @type {?} */
        var year = date.getFullYear();
        for (var k = 0; k < 4; k++) {
            this._monthCalend[k] = [];
            for (var i = k * 3; i < k * 3 + 3; i++) {
                this._monthCalend[k].push({
                    year: year,
                    month: i,
                    date: new Date(year, i, 1)
                });
            }
        }
        this._monthMode = false;
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.langs = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lang = {
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
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.isDisabled = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var a = new Date(date);
        a.setHours(0, 0, 0, 0);
        /** @type {?} */
        var b = new Date(new Date());
        b.setHours(0, 0, 0, 0);
        if (this._options.disabled.enabled) {
            /** @type {?} */
            var mode = this._options.disabled.mode;
            if (mode === 'before') {
                return (mode === 'before' && a.valueOf() < b.valueOf()) ? true : false;
            }
            else if (mode === 'after') {
                return (mode === 'after' && a.valueOf() > b.valueOf()) ? true : false;
            }
        }
        return false;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.isWeekEnd = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return (this._options.weekends.includes(this.getNumDay(date))) ? true : false;
    };
    /**
     * @param {?} num
     * @return {?}
     */
    DatepickerComponent.prototype.getMonthByNUm = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        /** @type {?} */
        var months = this.langs()['month'][this._options.lang];
        return months[num];
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.getFirstDayNum = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var trueNum = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return this.getOffsetDaysStart(trueNum);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.getLastDayNum = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var trueNum = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        return this.getOffsetDaysStart(trueNum);
    };
    /**
     * @param {?} day
     * @param {?=} event
     * @return {?}
     */
    DatepickerComponent.prototype.clickDate = /**
     * @param {?} day
     * @param {?=} event
     * @return {?}
     */
    function (day, event) {
        if (event === void 0) { event = null; }
        (event) ? event.stopPropagation() : null;
        if (!day.disabled) {
            this.selectDay(day);
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.getDaysInMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.getDaysInPrevMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.getDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var day = new Day();
        day.key = this.getDateKey(date);
        day.num = date.getDate();
        day.date = new Date(date);
        day.isNowDate = this.isNowDate(date);
        day.isWeekEnd = this.isWeekEnd(date);
        day.disabled = this.isDisabled(date);
        day.currentMonth = (date.getFullYear() === this._currentMonth.getFullYear() && date.getMonth() === this._currentMonth.getMonth());
        return day;
    };
    // half
    // half
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype._getMonthsMatrix = 
    // half
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var daysInMonth = this.getDaysInMonth(date);
        /** @type {?} */
        var daysInPrevMonth = this.getDaysInPrevMonth(date);
        /** @type {?} */
        var numFirstDay = this.getFirstDayNum(date);
        /** @type {?} */
        var numLastDay = this.getLastDayNum(date);
        /** @type {?} */
        var calend = [];
        /** @type {?} */
        var weekCalend = [];
        /** @type {?} */
        var nowMonth = new Date(date);
        /** @type {?} */
        var prevMonthDate = new Date(date);
        prevMonthDate.setMonth(new Date(date).getMonth() - 1);
        /** @type {?} */
        var nextMonthDate = new Date(date);
        nextMonthDate.setMonth(new Date(date).getMonth() + 1);
        if (numFirstDay !== 0) {
            for (var i = numFirstDay; i > 0; i--) {
                /** @type {?} */
                var num = daysInPrevMonth - i + 1;
                date = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), num);
                calend.push(this.getDay(date));
            }
        }
        for (var i = 1; i <= daysInMonth; i++) {
            nowMonth.setDate(i);
            date = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), i);
            calend.push(this.getDay(date));
        }
        if (numLastDay !== 6) {
            for (var i = 1; i < 7 - numLastDay; i++) {
                date = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), i);
                calend.push(this.getDay(date));
            }
        }
        for (var i = 0; i < calend.length / 7; i++) {
            /** @type {?} */
            var week = [];
            for (var k = i * 7; k < i * 7 + 7; k++) {
                week.push(calend[k]);
            }
            weekCalend.push(week);
        }
        this.calend = calend;
        this.weekCalend = weekCalend;
        this.markselectDay();
        this.markPeriodDates();
    };
    // half
    // half
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.isNowDate = 
    // half
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var now = new Date();
        return (now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth()
            && now.getDate() === date.getDate()) ? true : false;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DatepickerComponent.prototype.timeChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this._options.initDates[data.index] = new Date(data.date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatepickerComponent.prototype.getNumDay = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.getOffsetDaysStart(date.getDay());
    };
    /**
     * @param {?} trueNum
     * @return {?}
     */
    DatepickerComponent.prototype.getOffsetDaysStart = /**
     * @param {?} trueNum
     * @return {?}
     */
    function (trueNum) {
        return (trueNum < this._options.weekStart) ? 7 + trueNum - this._options.weekStart : trueNum - this._options.weekStart;
    };
    /**
     * @param {?} day
     * @return {?}
     */
    DatepickerComponent.prototype.selectDay = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
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
                    for (var i in this._options.initDates) {
                        /** @type {?} */
                        var item = this._options.initDates[i];
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
    };
    /**
     * @param {?} day
     * @return {?}
     */
    DatepickerComponent.prototype.hoverDate = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        this.markPeriodDates(day);
    };
    // full
    // full
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.markselectDay = 
    // full
    /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.calend.length; i++) {
            /** @type {?} */
            var item = this.calend[i];
            /** @type {?} */
            var selected = false;
            try {
                for (var _b = tslib_1.__values(this._options.initDates), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var date = _c.value;
                    if (this.getDateKey(date) === item.key) {
                        selected = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.calend[i].isSelected = selected;
        }
    };
    /**
     * @param {?=} hoveredDate
     * @return {?}
     */
    DatepickerComponent.prototype.markPeriodDates = /**
     * @param {?=} hoveredDate
     * @return {?}
     */
    function (hoveredDate) {
        if (hoveredDate === void 0) { hoveredDate = null; }
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.calend.length; i++) {
            /** @type {?} */
            var item = this.calend[i];
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
    };
    /**
     * @param {?} date
     * @param {?} event
     * @return {?}
     */
    DatepickerComponent.prototype.showMonth = /**
     * @param {?} date
     * @param {?} event
     * @return {?}
     */
    function (date, event) {
        event.stopPropagation();
        this._monthMode = true;
        this._currentMonth = date;
        this._getMonthsMatrix(date);
        this.markselectDay();
        this.markPeriodDates();
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.onCanceled.emit();
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.change();
    };
    /**
     * @return {?}
     */
    DatepickerComponent.prototype.change = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = [];
        data = this._options.initDates;
        this.onChanged.emit(data);
    };
    DatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ns-datepicker',
                    template: "<div class=\"calendar\" (outside)=\"clickout($event)\" >\n\n    <div style=\"border-bottom: 1px solid #f3f3f3; display:flex; flex-direction: row; justify-content: center; align-items:center; padding:10px;flex-direction: column;\">\n        <!--<div *ngIf=\"suggestions\" style=\"display: block;\">\n            <button class=\"dateBtn\" (click)=\"selectDay(today)\">\u0441\u0435\u0433\u043E\u0434\u043D\u044F</button>\n        </div>-->\n      <div style=\"padding-top:10px; display:flex; flex-direction: row; justify-content: space-between; width: 100%;\">\n          <a href=\"javascript:void(0)\" (click)=\"showPrev()\" class=\"btnPrevNext\"><</a>\n          <div class=\"yearBtn\" (click)=\"showViewMonth(_currentMonth, $event)\">\n              <span *ngIf=\"_monthMode\" style=\"margin-right:3px\">{{getMonthByNUm(_currentMonth.getMonth())}}</span> <span>{{_currentMonth.getFullYear()}}</span>\n          </div>\n          <a href=\"javascript:void(0)\" (click)=\"showNext()\"  class=\"btnPrevNext\">></a>\n      </div>\n      \n      \n    \n  \n    </div>\n    <div style=\"padding: 8px 10px;\">\n      \n      <div *ngIf=\"weekLabels&&_monthMode\" class=\"row\">\n        <div class=\"col h\" *ngFor=\"let label of weekLabels\">\n          {{label}}\n        </div>\n      </div>\n  \n  \n      <div *ngIf=\"weekCalend&&_monthMode\">\n        <div class=\"row\" *ngFor=\"let week of weekCalend\">\n            <div \n              *ngFor=\"let day of week\" \n              class=\"col\" \n              [ngClass]=\"{currentMonth:day.currentMonth, isNowDate: day.isNowDate, isWeekEnd: day.isWeekEnd, isSelected: day.isSelected, markedPeriod: day.markedPeriod, disabled: day.disabled }\" \n              (click)=\"clickDate(day, $event)\"\n              (mouseover)=\"hoverDate(day)\"\n            >\n            {{day.num}}\n            <div></div>\n          </div>\n        </div>     \n      </div>\n  \n  \n      <div *ngIf=\"_monthCalend&&!_monthMode\">\n        <div class=\"row\" *ngFor=\"let months of _monthCalend\">\n            <div \n              *ngFor=\"let month of months\"\n              class=\"col month\"\n              (click)=\"showMonth(month.date, $event)\"\n            >\n            {{getMonthByNUm(month.month)}} \n            </div>\n        </div>     \n      </div>\n  \n    </div>\n    <div *ngIf=\"_options.timeMode\" style=\"border-bottom: 1px solid #f3f3f3; display:flex; flex-direction: column; justify-content: center; padding:10px; font-size: 11px\">\n      \n      <div *ngFor=\"let date of _options.initDates; let i = index\">\n        <ns-time [date]=\"date\" [index]=\"i\" (changed)=\"timeChange($event)\"></ns-time>\n      </div>\n\n    </div>\n\n\n    <div *ngIf=\"_options.timeMode||(!_options.timeMode&&_options.submitMode)\" style=\" display:flex; flex-direction: row; justify-content: space-between; align-items:center; padding:10px; font-size: 11px\">\n      <button class=\"btnCancel\" (click)=\"cancel()\">{{(_options.lang=='en')?'cancel':'\u043E\u0442\u043C\u0435\u043D\u0430'}}</button>\n      <button class=\"btnOk\" (click)=\"submit()\">{{(_options.lang=='en')?'ok':'\u043E\u043A'}}</button>\n    </div>\n  \n  </div>",
                    styles: [".row{display:flex;flex-direction:row}.col{display:flex;position:relative;flex-direction:column;flex:1;justify-content:center;align-items:center;font-size:.8em;padding:4px;border-radius:2px;cursor:pointer;color:#c7c7c7;-webkit-animation:.2s ease-in slide-up;animation:.2s ease-in slide-up;text-align:center}@-webkit-keyframes slide-up{0%{opacity:.5}100%{opacity:1}}@keyframes slide-up{0%{opacity:.5}100%{opacity:1}}.col.markedPeriod{background:#d5ebff!important;border-radius:0!important;transition:.2s}.col.isSelected.markedPeriod{border-radius:2px!important}.col.isSelected{background:#5eb3fc!important;color:#fff!important}.dateBtn{float:left;background:#f3f3f3;border:0;font-size:.74em;color:#2fafff;outline:0;border-radius:2px;cursor:pointer;margin:2px;padding:2px 4px}.dateBtn:hover{background:#6398e0;color:#fff}.col.currentMonth{color:#353540}.col.isNowDate{color:#3f92ff}.col.isWeekEnd.currentMonth{color:#c53c3c}.col.disabled{background:#f5f5f5;color:#afafaf}.col.month:hover,.col:hover{background:#eee}.col.month{font-size:11px;color:#545454;padding:16px 8px;box-shadow:0 0 0 1px #f4f3f3;background:#fff;border-radius:0;min-width:40px}.col.h{color:#ff9a19;text-transform:uppercase}.col.h:hover{background:#fff}.calendar{float:left;box-shadow:0 3px 12px -5px #000;max-width:200px;-webkit-animation:50ms slide-up;animation:50ms slide-up;background:#fff;border-radius:8px}.btnPrevNext{font-size:14px;padding:6px 8px;border-radius:2px;color:#5eb3fc;text-decoration:none}.btnPrevNext:hover{background:#f4f3f3}.yearBtn{font-size:14px;padding:6px 10px;border-radius:2px;color:#585858;cursor:pointer}.yearBtn:hover{background:#f4f3f3}.btnOk{border:0;background:#5eb3fc;padding:8px 16px;color:#fff;border-radius:2px;outline:0;cursor:pointer}.btnOk:hover{background:#3e99e6}.btnCancel{border:0;background:#fff;padding:8px 16px;color:#5eb3fc;border-radius:2px;outline:0;cursor:pointer}.btnCancel:hover{background:#e4f3ff}"]
                }] }
    ];
    /** @nocollapse */
    DatepickerComponent.ctorParameters = function () { return []; };
    DatepickerComponent.propDecorators = {
        options: [{ type: Input }],
        onChanged: [{ type: Output }],
        onCanceled: [{ type: Output }],
        onClickOut: [{ type: Output }]
    };
    return DatepickerComponent;
}());
export { DatepickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRlcGlja2VyLW5zLyIsInNvdXJjZXMiOlsibGliL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvSDtJQVFFLGlCQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBSmxCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFHeEIsQ0FBQzs7Ozs7SUFFRCx5QkFBTzs7OztJQUFQLFVBQVEsTUFBTTs7WUFDTixNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVU7UUFDaEMsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1NBQUU7O1lBQzFELE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztRQUM5QixJQUFJLE1BQU0sSUFBSSxPQUFPLEtBQUssY0FBYyxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLE1BQU0sSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QjtJQUVILENBQUM7Ozs7O0lBR00sNkJBQVc7Ozs7SUFEbEIsVUFDbUIsS0FBSztRQUN0QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO2FBQU0s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cnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tvdXRzaWRlXScsXG59KVxuZXhwb3J0IGNsYXNzIE91dHNpZGUge1xuICBAT3V0cHV0KCdvdXRzaWRlJykgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgaXNDaGlsZCh0YXJnZXQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZiAoIXBhcmVudCB8fCBwYXJlbnQudGFnTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgY29uc3QgdGFnTmFtZSA9IHBhcmVudC50YWdOYW1lO1xuICAgIGlmIChwYXJlbnQgJiYgdGFnTmFtZSA9PT0gJ0FQUC1DQUxFTkRBUicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAocGFyZW50ICYmIHRhZ05hbWUgIT09ICdIVE1MJykge1xuICAgICAgcmV0dXJuIHRoaXMuaXNDaGlsZChwYXJlbnQpO1xuICAgIH1cblxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jbG9zZS5lbWl0KCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbnMge1xuICBlbmFibGVkOiBib29sZWFuOyAvLyBzaW5nbGUsIHBlcmlvbiwgbXVsdGlwbGVcbiAgaXRlbXM/OiBhbnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb24ge1xuICBtb2RlOiBzdHJpbmc7IC8vIHNpbmdsZSwgcGVyaW9uLCBtdWx0aXBsZVxuICBjdHJsU2hpZnQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERheUludGVyZmFjZSB7XG4gIGtleTogbnVtYmVyO1xuICBudW06IG51bWJlcjtcbiAgZGF0ZTogRGF0ZTtcbiAgaXNOb3dEYXRlOiBib29sZWFuO1xuICBpc1dlZWtFbmQ6IGJvb2xlYW47XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBjdXN0b20/OiBhbnk7XG4gIGN1cnJlbnRNb250aDogYm9vbGVhbjtcbiAgbWFya2VkUGVyaW9kPzogYm9vbGVhbjtcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9ucyB7XG4gIHdlZWtlbmRzOiBudW1iZXJbXTtcbiAgbGFuZzogc3RyaW5nO1xuICB3ZWVrU3RhcnQ6IG51bWJlcjtcbiAgc2VsZWN0aW9uOiBTZWxlY3Rpb247XG4gIHRpbWVNb2RlOiBib29sZWFuO1xuICBzdWJtaXRNb2RlOiBib29sZWFuO1xuICBpbml0RGF0ZXM6IERhdGVbXTtcbiAgc3VnZ2VzdGlvbnM6IFN1Z2dlc3Rpb25zO1xuICBkaXNhYmxlZD86IGFueTtcbiAgZGF5cz86IERheVtdO1xufVxuXG5leHBvcnQgY2xhc3MgRGF5IGltcGxlbWVudHMgRGF5SW50ZXJmYWNlIHtcbiAga2V5OiBudW1iZXI7XG4gIG51bTogbnVtYmVyO1xuICBkYXRlOiBEYXRlO1xuICBpc05vd0RhdGU6IGJvb2xlYW47XG4gIGlzV2Vla0VuZDogYm9vbGVhbjtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIGN1c3RvbT86IGFueTtcbiAgY3VycmVudE1vbnRoOiBib29sZWFuO1xuICBtYXJrZWRQZXJpb2Q/OiBib29sZWFuO1xuICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXBpY2tlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgIGRlZmF1bHRPcHRpb25zOiBPcHRpb25zID0ge1xuICAgIHdlZWtlbmRzOiBbNSwgNl0sXG4gICAgd2Vla1N0YXJ0OiAxLFxuICAgIGxhbmc6ICdlbicsXG4gICAgc2VsZWN0aW9uOiB7XG4gICAgICBtb2RlOiAnc2luZ2xlJyxcbiAgICAgIGN0cmxTaGlmdDogZmFsc2VcbiAgICB9LFxuICAgIHRpbWVNb2RlOiBmYWxzZSxcbiAgICBzdWJtaXRNb2RlOiBmYWxzZSxcbiAgICBzdWdnZXN0aW9uczoge1xuICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICB9LFxuICAgIGluaXREYXRlczogW25ldyBEYXRlKCldLFxuICAgIGRpc2FibGVkOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIG1vZGU6ICdhZnRlcidcbiAgICB9XG4gIH07XG5cblxuICBASW5wdXQoKSBvcHRpb25zO1xuICBAT3V0cHV0KCkgb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25DYW5jZWxlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2xpY2tPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgIF9vcHRpb25zOiBPcHRpb25zO1xuICAgX2N1cnJlbnRNb250aDogRGF0ZTtcbiAgIF9tb250aENhbGVuZDogYW55W10gPSBbXTtcbiAgIF9tb250aE1vZGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgY2FsZW5kOiBEYXlbXTtcbiAgIHdlZWtDYWxlbmQ6IGFueVtdO1xuICAgaG92ZXJlZERhdGU6IERhdGU7XG4gICB3ZWVrTGFiZWxzO1xuXG4gIGNsaWNrb3V0KGV2ZW50KSB7XG4gICAgdGhpcy5vbkNsaWNrT3V0LmVtaXQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5fb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLl9vcHRpb25zLmluaXREYXRlcyA9ICh0aGlzLl9vcHRpb25zLmluaXREYXRlcy5sZW5ndGggPT09IDApID8gW25ldyBEYXRlXSA6IHRoaXMuX29wdGlvbnMuaW5pdERhdGVzO1xuXG4gICAgY29uc3QgbGFzdERhdGUgPSB0aGlzLl9vcHRpb25zLmluaXREYXRlc1t0aGlzLl9vcHRpb25zLmluaXREYXRlcy5sZW5ndGggLSAxXTtcbiAgICB0aGlzLl9jdXJyZW50TW9udGggPSBuZXcgRGF0ZShsYXN0RGF0ZS5nZXRGdWxsWWVhcigpLCBsYXN0RGF0ZS5nZXRNb250aCgpLCAxKTtcbiAgICBjb25zdCB3ZWVrTGFiZWxzID0gdGhpcy5sYW5ncygpWyd3ZWVrJ11bdGhpcy5fb3B0aW9ucy5sYW5nXTtcbiAgICB0aGlzLndlZWtMYWJlbHMgPSB3ZWVrTGFiZWxzLnNwbGljZSh0aGlzLl9vcHRpb25zLndlZWtTdGFydCkuY29uY2F0KHdlZWtMYWJlbHMpO1xuXG4gICAgdGhpcy5fZ2V0TW9udGhzTWF0cml4KHRoaXMuX2N1cnJlbnRNb250aCk7XG5cbiAgfVxuXG4gIC8vIGhhbGZcbiAgc2hvd05leHQoKSB7XG4gICAgaWYgKHRoaXMuX21vbnRoTW9kZSkge1xuICAgICAgdGhpcy5fY3VycmVudE1vbnRoLnNldE1vbnRoKHRoaXMuX2N1cnJlbnRNb250aC5nZXRNb250aCgpICsgMSk7XG4gICAgICB0aGlzLl9nZXRNb250aHNNYXRyaXgodGhpcy5fY3VycmVudE1vbnRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VycmVudE1vbnRoLnNldEZ1bGxZZWFyKHRoaXMuX2N1cnJlbnRNb250aC5nZXRGdWxsWWVhcigpICsgMSk7XG4gICAgICB0aGlzLnNob3dWaWV3TW9udGgodGhpcy5fY3VycmVudE1vbnRoKTtcbiAgICB9XG5cbiAgfVxuICAvLyBoYWxmXG4gIHNob3dQcmV2KCkge1xuICAgIGlmICh0aGlzLl9tb250aE1vZGUpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRNb250aC5zZXRNb250aCh0aGlzLl9jdXJyZW50TW9udGguZ2V0TW9udGgoKSAtIDEpO1xuICAgICAgdGhpcy5fZ2V0TW9udGhzTWF0cml4KHRoaXMuX2N1cnJlbnRNb250aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRNb250aC5zZXRGdWxsWWVhcih0aGlzLl9jdXJyZW50TW9udGguZ2V0RnVsbFllYXIoKSAtIDEpO1xuICAgICAgdGhpcy5zaG93Vmlld01vbnRoKHRoaXMuX2N1cnJlbnRNb250aCk7XG4gICAgfVxuXG4gIH1cblxuICAgd2l0aFplcm8oc3RyOiBhbnkpIHtcbiAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gKHN0ci5sZW5ndGggPT09IDEpID8gJzAnICsgc3RyIDogc3RyO1xuICB9XG5cbiAgIGdldERhdGVLZXkoZGF0ZTogRGF0ZSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcmFkaXhcbiAgICByZXR1cm4gcGFyc2VJbnQoZGF0ZS5nZXRGdWxsWWVhcigpICsgJycgKyB0aGlzLndpdGhaZXJvKGRhdGUuZ2V0TW9udGgoKSkgKyAnJyArIHRoaXMud2l0aFplcm8oZGF0ZS5nZXREYXRlKCkpKTtcbiAgfVxuXG5cbiAgIHNob3dWaWV3TW9udGgoZGF0ZTogRGF0ZSwgZXZlbnQgPSBudWxsKSB7XG4gICAgKGV2ZW50KSA/IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIDogbnVsbDtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgICB0aGlzLl9tb250aENhbGVuZFtrXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IGsgKiAzOyBpIDwgayAqIDMgKyAzOyBpKyspIHtcbiAgICAgICAgdGhpcy5fbW9udGhDYWxlbmRba10ucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgbW9udGg6IGksXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSh5ZWFyLCBpLCAxKVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fbW9udGhNb2RlID0gZmFsc2U7XG5cbiAgfVxuXG4gICBsYW5ncygpIHtcbiAgICBjb25zdCBsYW5nID0ge1xuICAgICAgd2Vlazoge1xuICAgICAgICBlbjogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTdCddLFxuICAgICAgICBydTogWyfQktGBJywgJ9Cf0L0nLCAn0JLRgicsICfQodGAJywgJ9Cn0YInLCAn0J/RgicsICfQodCxJ10sXG4gICAgICB9LFxuICAgICAgbW9udGg6IHtcbiAgICAgICAgZW46IFsnSmFudWFyeScsICdGZWJyYXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ10sXG4gICAgICAgIHJ1OiBbJ9Cv0L3QstCw0YDRjCcsICfQpNC10LLRgNCw0LvRjCcsICfQnNCw0YDRgicsICfQkNC/0YDQtdC70YwnLCAn0JzQsNC5JywgJ9CY0Y7QvdGMJywgJ9CY0Y7Qu9GMJywgJ9CQ0LLQs9GD0YHRgicsICfQodC10L3RgtGP0LHRgNGMJywgJ9Ce0LrRgtGP0LHRgNGMJywgJ9Cd0L7Rj9Cx0YDRjCcsICfQlNC10LrQsNCx0YDRjCddLFxuICAgICAgfVxuXG4gICAgfTtcbiAgICByZXR1cm4gbGFuZztcbiAgfVxuXG4gICBpc0Rpc2FibGVkKGRhdGU6IERhdGUpIHtcbiAgICBjb25zdCBhID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgYS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBjb25zdCBiID0gbmV3IERhdGUobmV3IERhdGUoKSk7XG4gICAgYi5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5kaXNhYmxlZC5lbmFibGVkKSB7XG4gICAgICBjb25zdCBtb2RlID0gdGhpcy5fb3B0aW9ucy5kaXNhYmxlZC5tb2RlO1xuICAgICAgaWYgKG1vZGUgPT09ICdiZWZvcmUnKSB7XG4gICAgICAgIHJldHVybiAobW9kZSA9PT0gJ2JlZm9yZScgJiYgYS52YWx1ZU9mKCkgPCBiLnZhbHVlT2YoKSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdhZnRlcicpIHtcbiAgICAgICAgcmV0dXJuIChtb2RlID09PSAnYWZ0ZXInICYmIGEudmFsdWVPZigpID4gYi52YWx1ZU9mKCkpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAgaXNXZWVrRW5kKGRhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMuX29wdGlvbnMud2Vla2VuZHMuaW5jbHVkZXModGhpcy5nZXROdW1EYXkoZGF0ZSkpKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gICBnZXRNb250aEJ5TlVtKG51bTogbnVtYmVyKSB7XG4gICAgY29uc3QgbW9udGhzID0gdGhpcy5sYW5ncygpWydtb250aCddW3RoaXMuX29wdGlvbnMubGFuZ107XG4gICAgcmV0dXJuIG1vbnRoc1tudW1dO1xuICB9XG5cbiAgIGdldEZpcnN0RGF5TnVtKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIGNvbnN0IHRydWVOdW06IG51bWJlciA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXREYXkoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRPZmZzZXREYXlzU3RhcnQodHJ1ZU51bSk7XG4gIH1cblxuICAgZ2V0TGFzdERheU51bShkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICBjb25zdCB0cnVlTnVtOiBudW1iZXIgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERheSgpO1xuICAgIHJldHVybiB0aGlzLmdldE9mZnNldERheXNTdGFydCh0cnVlTnVtKTtcbiAgfVxuXG4gICBjbGlja0RhdGUoZGF5LCBldmVudCA9IG51bGwpIHtcbiAgICAoZXZlbnQpID8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgOiBudWxsO1xuICAgIGlmICghZGF5LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdERheShkYXkpO1xuICAgIH1cblxuICB9XG5cbiAgIGdldERheXNJbk1vbnRoKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKTtcbiAgfVxuXG4gIGdldERheXNJblByZXZNb250aChkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDApLmdldERhdGUoKTtcbiAgfVxuXG4gICBnZXREYXkoZGF0ZTogRGF0ZSk6IERheSB7XG4gICAgY29uc3QgZGF5ID0gbmV3IERheSgpO1xuICAgIGRheS5rZXkgPSB0aGlzLmdldERhdGVLZXkoZGF0ZSk7XG4gICAgZGF5Lm51bSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGRheS5kYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgZGF5LmlzTm93RGF0ZSA9IHRoaXMuaXNOb3dEYXRlKGRhdGUpO1xuICAgIGRheS5pc1dlZWtFbmQgPSB0aGlzLmlzV2Vla0VuZChkYXRlKTtcbiAgICBkYXkuZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoZGF0ZSk7XG4gICAgZGF5LmN1cnJlbnRNb250aCA9IChkYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRoaXMuX2N1cnJlbnRNb250aC5nZXRGdWxsWWVhcigpICYmIGRhdGUuZ2V0TW9udGgoKSA9PT0gdGhpcy5fY3VycmVudE1vbnRoLmdldE1vbnRoKCkpO1xuICAgIHJldHVybiBkYXk7XG4gIH1cblxuICAvLyBoYWxmXG4gICBfZ2V0TW9udGhzTWF0cml4KGRhdGU6IERhdGUpIHtcbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IHRoaXMuZ2V0RGF5c0luTW9udGgoZGF0ZSk7XG4gICAgY29uc3QgZGF5c0luUHJldk1vbnRoID0gdGhpcy5nZXREYXlzSW5QcmV2TW9udGgoZGF0ZSk7XG4gICAgY29uc3QgbnVtRmlyc3REYXkgPSB0aGlzLmdldEZpcnN0RGF5TnVtKGRhdGUpO1xuICAgIGNvbnN0IG51bUxhc3REYXkgPSB0aGlzLmdldExhc3REYXlOdW0oZGF0ZSk7XG4gICAgY29uc3QgY2FsZW5kID0gW107XG4gICAgY29uc3Qgd2Vla0NhbGVuZCA9IFtdO1xuXG4gICAgY29uc3Qgbm93TW9udGggPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBjb25zdCBwcmV2TW9udGhEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgcHJldk1vbnRoRGF0ZS5zZXRNb250aChuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpIC0gMSk7XG4gICAgY29uc3QgbmV4dE1vbnRoRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIG5leHRNb250aERhdGUuc2V0TW9udGgobmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKSArIDEpO1xuXG4gICAgaWYgKG51bUZpcnN0RGF5ICE9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gbnVtRmlyc3REYXk7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbnVtID0gZGF5c0luUHJldk1vbnRoIC0gaSArIDE7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShwcmV2TW9udGhEYXRlLmdldEZ1bGxZZWFyKCksIHByZXZNb250aERhdGUuZ2V0TW9udGgoKSwgbnVtKTtcbiAgICAgICAgY2FsZW5kLnB1c2godGhpcy5nZXREYXkoZGF0ZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoOyBpKyspIHtcbiAgICAgIG5vd01vbnRoLnNldERhdGUoaSk7XG4gICAgICBkYXRlID0gbmV3IERhdGUobm93TW9udGguZ2V0RnVsbFllYXIoKSwgbm93TW9udGguZ2V0TW9udGgoKSwgaSk7XG4gICAgICBjYWxlbmQucHVzaCh0aGlzLmdldERheShkYXRlKSk7XG4gICAgfVxuXG4gICAgaWYgKG51bUxhc3REYXkgIT09IDYpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNyAtIG51bUxhc3REYXk7IGkrKykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUobmV4dE1vbnRoRGF0ZS5nZXRGdWxsWWVhcigpLCBuZXh0TW9udGhEYXRlLmdldE1vbnRoKCksIGkpO1xuICAgICAgICBjYWxlbmQucHVzaCh0aGlzLmdldERheShkYXRlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxlbmQubGVuZ3RoIC8gNzsgaSsrKSB7XG4gICAgICBjb25zdCB3ZWVrID0gW107XG4gICAgICBmb3IgKGxldCBrID0gaSAqIDc7IGsgPCBpICogNyArIDc7IGsrKykge1xuICAgICAgICB3ZWVrLnB1c2goY2FsZW5kW2tdKTtcbiAgICAgIH1cbiAgICAgIHdlZWtDYWxlbmQucHVzaCh3ZWVrKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGVuZCA9IGNhbGVuZDtcbiAgICB0aGlzLndlZWtDYWxlbmQgPSB3ZWVrQ2FsZW5kO1xuICAgIHRoaXMubWFya3NlbGVjdERheSgpO1xuICAgIHRoaXMubWFya1BlcmlvZERhdGVzKCk7XG4gIH1cblxuICAvLyBoYWxmXG4gICBpc05vd0RhdGUoZGF0ZTogRGF0ZSkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIChub3cuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpICYmIG5vdy5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKClcbiAgICAgICYmIG5vdy5nZXREYXRlKCkgPT09IGRhdGUuZ2V0RGF0ZSgpKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gICB0aW1lQ2hhbmdlKGRhdGEpIHtcbiAgICB0aGlzLl9vcHRpb25zLmluaXREYXRlc1tkYXRhLmluZGV4XSA9IG5ldyBEYXRlKGRhdGEuZGF0ZSk7XG4gIH1cblxuICAgZ2V0TnVtRGF5KGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldE9mZnNldERheXNTdGFydChkYXRlLmdldERheSgpKTtcbiAgfVxuXG4gICBnZXRPZmZzZXREYXlzU3RhcnQodHJ1ZU51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRydWVOdW0gPCB0aGlzLl9vcHRpb25zLndlZWtTdGFydCkgPyA3ICsgdHJ1ZU51bSAtIHRoaXMuX29wdGlvbnMud2Vla1N0YXJ0IDogdHJ1ZU51bSAtIHRoaXMuX29wdGlvbnMud2Vla1N0YXJ0O1xuICB9XG5cbiAgIHNlbGVjdERheShkYXk6IERheSkge1xuICAgIGlmICh0aGlzLl9vcHRpb25zLnNlbGVjdGlvbi5tb2RlICE9PSAnc2luZ2xlJykge1xuICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLmluaXREYXRlcy5pbmNsdWRlcyhkYXkuZGF0ZSkgJiYgIWRheS5pc1NlbGVjdGVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnNlbGVjdGlvbi5tb2RlID09PSAncGVyaW9kJykge1xuICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmluaXREYXRlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuaW5pdERhdGVzLnB1c2goZGF5LmRhdGUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmluaXREYXRlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5pbml0RGF0ZXMucHVzaChkYXkuZGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX29wdGlvbnMuc2VsZWN0aW9uLm1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLmluaXREYXRlcy5wdXNoKGRheS5kYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc2VsZWN0aW9uLm1vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZvcmluXG4gICAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMuX29wdGlvbnMuaW5pdERhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fb3B0aW9ucy5pbml0RGF0ZXNbaV07XG4gICAgICAgICAgICBpZiAodGhpcy5nZXREYXRlS2V5KGl0ZW0pID09PSBkYXkua2V5KSB7XG4gICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuaW5pdERhdGVzLnNwbGljZShwYXJzZUludChpKSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wdGlvbnMuaW5pdERhdGVzID0gW2RheS5kYXRlXTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcmtzZWxlY3REYXkoKTtcbiAgICB0aGlzLm1hcmtQZXJpb2REYXRlcygpO1xuICAgICghdGhpcy5fb3B0aW9ucy5zdWJtaXRNb2RlICYmICF0aGlzLl9vcHRpb25zLnRpbWVNb2RlKSA/IHRoaXMuY2hhbmdlKCkgOiBudWxsIDtcbiAgfVxuXG4gICBob3ZlckRhdGUoZGF5OiBEYXkpIHtcbiAgICB0aGlzLm1hcmtQZXJpb2REYXRlcyhkYXkpO1xuICB9XG5cbiAgLy8gZnVsbFxuICAgbWFya3NlbGVjdERheSgpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FsZW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtOiBhbnkgPSB0aGlzLmNhbGVuZFtpXTtcbiAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgZGF0ZSBvZiB0aGlzLl9vcHRpb25zLmluaXREYXRlcykge1xuICAgICAgICBpZiAodGhpcy5nZXREYXRlS2V5KGRhdGUpID09PSBpdGVtLmtleSkge1xuICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jYWxlbmRbaV0uaXNTZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIH1cbiAgfVxuXG4gICBtYXJrUGVyaW9kRGF0ZXMoaG92ZXJlZERhdGU6IERheSA9IG51bGwpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FsZW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5jYWxlbmRbaV07XG5cbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLnNlbGVjdGlvbi5tb2RlID09PSAncGVyaW9kJykge1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXMubGVuZ3RoID09PSAxICYmIGhvdmVyZWREYXRlKSB7XG5cbiAgICAgICAgICBpZiAoKGl0ZW0ua2V5ID49IGhvdmVyZWREYXRlLmtleSAmJiBpdGVtLmtleSA8PSB0aGlzLmdldERhdGVLZXkodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXNbMF0pKVxuICAgICAgICAgICAgfHwgKGl0ZW0ua2V5IDw9IGhvdmVyZWREYXRlLmtleSAmJiBpdGVtLmtleSA+PSB0aGlzLmdldERhdGVLZXkodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXNbMF0pKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRbaV0ubWFya2VkUGVyaW9kID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRbaV0ubWFya2VkUGVyaW9kID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgaWYgKChpdGVtLmtleSA+PSB0aGlzLmdldERhdGVLZXkodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXNbMV0pICYmIGl0ZW0ua2V5IDw9IHRoaXMuZ2V0RGF0ZUtleSh0aGlzLl9vcHRpb25zLmluaXREYXRlc1swXSkpXG4gICAgICAgICAgICB8fCAoaXRlbS5rZXkgPD0gdGhpcy5nZXREYXRlS2V5KHRoaXMuX29wdGlvbnMuaW5pdERhdGVzWzFdKSAmJiBpdGVtLmtleSA+PSB0aGlzLmdldERhdGVLZXkodGhpcy5fb3B0aW9ucy5pbml0RGF0ZXNbMF0pKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRbaV0ubWFya2VkUGVyaW9kID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRbaV0ubWFya2VkUGVyaW9kID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FsZW5kW2ldLm1hcmtlZFBlcmlvZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL3RoaXMuY2FsZW5kW2ldLm1hcmtlZFBlcmlvZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3dNb250aChkYXRlOiBEYXRlLCBldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX21vbnRoTW9kZSA9IHRydWU7XG4gICAgdGhpcy5fY3VycmVudE1vbnRoID0gZGF0ZTtcbiAgICB0aGlzLl9nZXRNb250aHNNYXRyaXgoZGF0ZSk7XG4gICAgdGhpcy5tYXJrc2VsZWN0RGF5KCk7XG4gICAgdGhpcy5tYXJrUGVyaW9kRGF0ZXMoKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLm9uQ2FuY2VsZWQuZW1pdCgpO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMuY2hhbmdlKCk7XG4gIH1cblxuICBjaGFuZ2UoKSB7XG4gICAgbGV0IGRhdGEgPSBbXTtcbiAgICBkYXRhID0gdGhpcy5fb3B0aW9ucy5pbml0RGF0ZXM7XG4gICAgdGhpcy5vbkNoYW5nZWQuZW1pdChkYXRhKTtcbiAgfVxuXG5cbn1cbiJdfQ==