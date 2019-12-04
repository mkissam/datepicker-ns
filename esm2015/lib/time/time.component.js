/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class TimeComponent {
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
if (false) {
    /** @type {?} */
    TimeComponent.prototype.date;
    /** @type {?} */
    TimeComponent.prototype.index;
    /** @type {?} */
    TimeComponent.prototype.changed;
    /** @type {?} */
    TimeComponent.prototype.hour;
    /** @type {?} */
    TimeComponent.prototype.minute;
    /** @type {?} */
    TimeComponent.prototype.inited;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRlcGlja2VyLW5zLyIsInNvdXJjZXMiOlsibGliL3RpbWUvdGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFPMUYsTUFBTSxPQUFPLGFBQWE7SUFVeEI7UUFMVSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUl2QyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBR2YsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7O0lBRUQsTUFBTTs7Y0FDRSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUNELFlBQVk7UUFDVixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFlBQVk7O2NBQ0osR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUM5QixJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ1YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixvMkJBQW9DOzthQUVyQzs7Ozs7bUJBSUUsS0FBSztvQkFDTCxLQUFLO3NCQUNMLE1BQU07Ozs7SUFGUCw2QkFBYzs7SUFDZCw4QkFBZTs7SUFDZixnQ0FBdUM7O0lBRXZDLDZCQUFLOztJQUNMLCtCQUFPOztJQUNQLCtCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXRpbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgQElucHV0KCkgZGF0ZTtcbiAgQElucHV0KCkgaW5kZXg7XG4gIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGhvdXI7XG4gIG1pbnV0ZTtcbiAgaW5pdGVkID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmhvdXIgPSB0aGlzLmRhdGUuZ2V0SG91cnMoKTtcbiAgICB0aGlzLm1pbnV0ZSA9IHRoaXMuZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgdGhpcy5kYXRlLnNldEhvdXJzKHRoaXMuaG91ciwgdGhpcy5taW51dGUpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5kYXRlLnNldEhvdXJzKHRoaXMuaG91ciwgdGhpcy5taW51dGUpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZSgpIHtcbiAgICBjb25zdCBkYXRhID0gbmV3IERhdGUodGhpcy5kYXRlKTtcbiAgICBkYXRhLnNldEhvdXJzKHRoaXMuaG91ciwgdGhpcy5taW51dGUpO1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHtpbmRleDogdGhpcy5pbmRleCwgZGF0ZTogZGF0YX0pO1xuICB9XG5cbiAgaG91ckNoYW5nZSgpIHtcbiAgICB0aGlzLmNoYW5nZSgpO1xuICB9XG4gIG1pbnV0ZUNoYW5nZSgpIHtcbiAgICB0aGlzLmNoYW5nZSgpO1xuICB9XG5cbiAgZ2V0VGltZUFyYXlzKCkge1xuICAgIGNvbnN0IGFyciA9IHsgbWluOiBbXSwgaG91cjogW10gfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGxldCBrID0gaS50b1N0cmluZygpO1xuICAgICAgayA9IChrLmxlbmd0aCA9PSAxKSA/ICcwJyArIGsgOiBrO1xuICAgICAgbGV0IGl0ZW0gPSB7IHZhbDogaSwgbGFiZWw6IGsgfVxuICAgICAgYXJyWydtaW4nXS5wdXNoKGl0ZW0pO1xuICAgICAgaWYgKGkgPCAyNCkge1xuICAgICAgICBhcnJbJ2hvdXInXS5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbn1cbiJdfQ==