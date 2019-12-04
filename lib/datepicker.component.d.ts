import { OnInit, EventEmitter, ElementRef } from '@angular/core';
export declare class Outside {
    private elRef;
    close: EventEmitter<{}>;
    isOpen: boolean;
    constructor(elRef: ElementRef);
    isChild(target: any): any;
    handleClick(event: any): void;
}
export interface Suggestions {
    enabled: boolean;
    items?: any[];
}
export interface Selection {
    mode: string;
    ctrlShift?: boolean;
}
export interface DayInterface {
    key: number;
    num: number;
    date: Date;
    isNowDate: boolean;
    isWeekEnd: boolean;
    disabled: boolean;
    custom?: any;
    currentMonth: boolean;
    markedPeriod?: boolean;
    isSelected?: boolean;
}
export interface Options {
    weekends: number[];
    lang: string;
    weekStart: number;
    selection: Selection;
    timeMode: boolean;
    submitMode: boolean;
    initDates: Date[];
    suggestions: Suggestions;
    disabled?: any;
    days?: Day[];
}
export declare class Day implements DayInterface {
    key: number;
    num: number;
    date: Date;
    isNowDate: boolean;
    isWeekEnd: boolean;
    disabled: boolean;
    custom?: any;
    currentMonth: boolean;
    markedPeriod?: boolean;
    isSelected?: boolean;
}
export declare class DatepickerComponent implements OnInit {
    defaultOptions: Options;
    options: any;
    onChanged: EventEmitter<{}>;
    onCanceled: EventEmitter<{}>;
    onClickOut: EventEmitter<boolean>;
    _options: Options;
    _currentMonth: Date;
    _monthCalend: any[];
    _monthMode: boolean;
    calend: Day[];
    weekCalend: any[];
    hoveredDate: Date;
    weekLabels: any;
    clickout(event: any): void;
    constructor();
    ngOnInit(): void;
    showNext(): void;
    showPrev(): void;
    withZero(str: any): any;
    getDateKey(date: Date): number;
    showViewMonth(date: Date, event?: any): void;
    langs(): {
        week: {
            en: string[];
            ru: string[];
        };
        month: {
            en: string[];
            ru: string[];
        };
    };
    isDisabled(date: Date): boolean;
    isWeekEnd(date: Date): boolean;
    getMonthByNUm(num: number): any;
    getFirstDayNum(date: Date): number;
    getLastDayNum(date: Date): number;
    clickDate(day: any, event?: any): void;
    getDaysInMonth(date: Date): number;
    getDaysInPrevMonth(date: Date): number;
    getDay(date: Date): Day;
    _getMonthsMatrix(date: Date): void;
    isNowDate(date: Date): boolean;
    timeChange(data: any): void;
    getNumDay(date: Date): number;
    getOffsetDaysStart(trueNum: number): number;
    selectDay(day: Day): void;
    hoverDate(day: Day): void;
    markselectDay(): void;
    markPeriodDates(hoveredDate?: Day): void;
    showMonth(date: Date, event: any): void;
    cancel(): void;
    submit(): void;
    change(): void;
}
