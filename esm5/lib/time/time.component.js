/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var TimeComponent = /** @class */ (function () {
    function TimeComponent() {
        this.changed = new EventEmitter();
        this.inited = false;
    }
    /**
     * @return {?}
     */
    TimeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.date.setHours(this.hour, this.minute);
        this.inited = true;
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited) {
            this.date.setHours(this.hour, this.minute);
        }
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype.change = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = new Date(this.date);
        data.setHours(this.hour, this.minute);
        this.changed.emit({ index: this.index, date: data });
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype.hourChange = /**
     * @return {?}
     */
    function () {
        this.change();
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype.minuteChange = /**
     * @return {?}
     */
    function () {
        this.change();
    };
    /**
     * @return {?}
     */
    TimeComponent.prototype.getTimeArays = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var arr = { min: [], hour: [] };
        for (var i = 0; i < 60; i++) {
            /** @type {?} */
            var k = i.toString();
            k = (k.length == 1) ? '0' + k : k;
            /** @type {?} */
            var item = { val: i, label: k };
            arr['min'].push(item);
            if (i < 24) {
                arr['hour'].push(item);
            }
        }
        return arr;
    };
    TimeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ns-time',
                    template: "<div style=\"display: flex;flex-direction: row;justify-content: space-between;align-items: center; padding: 4px;color: #6f6f6f;background: linear-gradient(90deg,#fff, #e7f4ff); \">\n  <div >{{date.getDate()}}.{{date.getMonth()+1}}.{{date.getFullYear()}}</div>\n    <div>\n      <select [(ngModel)]=\"hour\"  (change)=\"hourChange()\"  style=\"border: 0; background: transparent; padding: 2px;font-size: 11px; outline: none;\">\n        <option *ngFor=\"let hour of getTimeArays()['hour']\" [ngValue]=\"hour.val\">{{hour.label}}</option>\n      </select>\n      <select [(ngModel)]=\"minute\" (change)=\"minuteChange()\" style=\"border: 0; background: transparent; padding: 2px;font-size: 11px; outline: none;\">\n        <option *ngFor=\"let min of getTimeArays()['min']\" [ngValue]=\"min.val\">{{min.label}}</option>\n      </select>\n    </div>\n\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TimeComponent.ctorParameters = function () { return []; };
    TimeComponent.propDecorators = {
        date: [{ type: Input }],
        index: [{ type: Input }],
        changed: [{ type: Output }]
    };
    return TimeComponent;
}());
export { TimeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRlcGlja2VyLW5zLyIsInNvdXJjZXMiOlsibGliL3RpbWUvdGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFMUY7SUFlRTtRQUxVLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXZDLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFHZixDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7O0lBRUQsOEJBQU07OztJQUFOOztZQUNRLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsa0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFDRCxvQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELG9DQUFZOzs7SUFBWjs7WUFDUSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7UUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ3ZCLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQzlCLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUMvQixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDVixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLG8yQkFBb0M7O2lCQUVyQzs7Ozs7dUJBSUUsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLE1BQU07O0lBaURULG9CQUFDO0NBQUEsQUEzREQsSUEyREM7U0F0RFksYUFBYTs7O0lBR3hCLDZCQUFjOztJQUNkLDhCQUFlOztJQUNmLGdDQUF1Qzs7SUFFdkMsNkJBQUs7O0lBQ0wsK0JBQU87O0lBQ1AsK0JBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtdGltZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBASW5wdXQoKSBkYXRlO1xuICBASW5wdXQoKSBpbmRleDtcbiAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaG91cjtcbiAgbWludXRlO1xuICBpbml0ZWQgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaG91ciA9IHRoaXMuZGF0ZS5nZXRIb3VycygpO1xuICAgIHRoaXMubWludXRlID0gdGhpcy5kYXRlLmdldE1pbnV0ZXMoKTtcbiAgICB0aGlzLmRhdGUuc2V0SG91cnModGhpcy5ob3VyLCB0aGlzLm1pbnV0ZSk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLmRhdGUuc2V0SG91cnModGhpcy5ob3VyLCB0aGlzLm1pbnV0ZSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpO1xuICAgIGRhdGEuc2V0SG91cnModGhpcy5ob3VyLCB0aGlzLm1pbnV0ZSk7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQoe2luZGV4OiB0aGlzLmluZGV4LCBkYXRlOiBkYXRhfSk7XG4gIH1cblxuICBob3VyQ2hhbmdlKCkge1xuICAgIHRoaXMuY2hhbmdlKCk7XG4gIH1cbiAgbWludXRlQ2hhbmdlKCkge1xuICAgIHRoaXMuY2hhbmdlKCk7XG4gIH1cblxuICBnZXRUaW1lQXJheXMoKSB7XG4gICAgY29uc3QgYXJyID0geyBtaW46IFtdLCBob3VyOiBbXSB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgbGV0IGsgPSBpLnRvU3RyaW5nKCk7XG4gICAgICBrID0gKGsubGVuZ3RoID09IDEpID8gJzAnICsgayA6IGs7XG4gICAgICBsZXQgaXRlbSA9IHsgdmFsOiBpLCBsYWJlbDogayB9XG4gICAgICBhcnJbJ21pbiddLnB1c2goaXRlbSk7XG4gICAgICBpZiAoaSA8IDI0KSB7XG4gICAgICAgIGFyclsnaG91ciddLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cblxufVxuIl19