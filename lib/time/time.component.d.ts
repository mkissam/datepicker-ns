import { OnInit, EventEmitter } from '@angular/core';
export declare class TimeComponent implements OnInit {
    date: any;
    index: any;
    changed: EventEmitter<{}>;
    hour: any;
    minute: any;
    inited: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    change(): void;
    hourChange(): void;
    minuteChange(): void;
    getTimeArays(): {
        min: any[];
        hour: any[];
    };
}
