(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-admin-dashboard-admin-module"],{

/***/ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js ***!
  \***********************************************************/
/*! exports provided: CLIPBOARD_SERVICE_PROVIDER_FACTORY, ClipboardService, CLIPBOARD_SERVICE_PROVIDER, ClipboardDirective, ClipboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIPBOARD_SERVICE_PROVIDER_FACTORY", function() { return CLIPBOARD_SERVICE_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIPBOARD_SERVICE_PROVIDER", function() { return CLIPBOARD_SERVICE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-window-token */ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ClipboardService = /** @class */ (function () {
    function ClipboardService(document, window) {
        this.document = document;
        this.window = window;
    }
    Object.defineProperty(ClipboardService.prototype, "isSupported", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    ClipboardService.prototype.isTargetValid = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    };
    /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    ClipboardService.prototype.copyFromInputElement = /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    function (targetElm) {
        try {
            this.selectTarget(targetElm);
            /** @type {?} */
            var re = this.copyText();
            this.clearSelection(targetElm, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    };
    // this is for IE11 return true even if copy fail
    /**
     * @return {?}
     */
    ClipboardService.prototype.isCopySuccessInIE11 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var clipboardData = this.window['clipboardData'];
        if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
                return false;
            }
        }
        return true;
    };
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.copyFromContent = /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    function (content, container) {
        if (container === void 0) { container = this.window.document.body; }
        // check if the temp textarea is still belong the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        return this.copyFromInputElement(this.tempTextArea);
    };
    /**
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.destroy = /**
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        if (container === void 0) { container = this.window.document.body; }
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    };
    /**
     * @param {?} inputElement
     * @return {?}
     */
    ClipboardService.prototype.selectTarget = /**
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    };
    /**
     * @return {?}
     */
    ClipboardService.prototype.copyText = /**
     * @return {?}
     */
    function () {
        return this.document.execCommand('copy');
    };
    /**
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.clearSelection = /**
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    function (inputElement, window) {
        // tslint:disable-next-line:no-unused-expression
        inputElement && inputElement.blur();
        window.getSelection().removeAllRanges();
    };
    /**
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.createTempTextArea = /**
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    function (doc, window) {
        /** @type {?} */
        var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        /** @type {?} */
        var ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        /** @type {?} */
        var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    };
    ClipboardService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["WINDOW"],] }] }
    ]; };
    return ClipboardService;
}());
/**
 * @param {?} doc
 * @param {?} win
 * @param {?} parentDispatcher
 * @return {?}
 */
function CLIPBOARD_SERVICE_PROVIDER_FACTORY(doc, win, parentDispatcher) {
    return parentDispatcher || new ClipboardService(doc, win);
}
/** @type {?} */
var CLIPBOARD_SERVICE_PROVIDER = {
    deps: [/** @type {?} */ (_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), /** @type {?} */ (ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]), [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ClipboardService]],
    provide: ClipboardService,
    useFactory: CLIPBOARD_SERVICE_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ClipboardDirective = /** @class */ (function () {
    function ClipboardDirective(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clipboardSrv.destroy(this.container);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
    };
    /**
     * Fires an event based on the copy operation result.
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.handleResult = /**
     * Fires an event based on the copy operation result.
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */
    function (succeeded, copiedContent, event) {
        if (succeeded) {
            this.cbOnSuccess.emit({ isSuccess: true, content: copiedContent, event: event });
        }
        else {
            this.cbOnError.emit({ isSuccess: false, event: event });
        }
    };
    ClipboardDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngxClipboard]'
                },] },
    ];
    /** @nocollapse */
    ClipboardDirective.ctorParameters = function () { return [
        { type: ClipboardService }
    ]; };
    ClipboardDirective.propDecorators = {
        targetElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngxClipboard',] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cbContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cbOnSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cbOnError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event.target'],] }]
    };
    return ClipboardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
    ClipboardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ngx_window_token__WEBPACK_IMPORTED_MODULE_2__["NgxWindowTokenModule"]],
                    // tslint:disable-next-line:object-literal-sort-keys
                    declarations: [ClipboardDirective],
                    exports: [ClipboardDirective],
                    providers: [CLIPBOARD_SERVICE_PROVIDER]
                },] },
    ];
    return ClipboardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNsaXBib2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWNsaXBib2FyZC9saWIvbmd4LWNsaXBib2FyZC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtY2xpcGJvYXJkL2xpYi9uZ3gtY2xpcGJvYXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWNsaXBib2FyZC9saWIvbmd4LWNsaXBib2FyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJ25neC13aW5kb3ctdG9rZW4nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHRlbXBUZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHB1YmxpYyBkb2N1bWVudDogYW55LCBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW5kb3c6IGFueSkge31cclxuICAgIHB1YmxpYyBnZXQgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5kb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQgJiYgISF0aGlzLmRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCgnY29weScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1RhcmdldFZhbGlkKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBQbGVhc2UgdXNlIFwicmVhZG9ubHlcIiBpbnN0ZWFkIG9mIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXJnZXQgc2hvdWxkIGJlIGlucHV0IG9yIHRleHRhcmVhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjb3B5RnJvbUlucHV0RWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29weUZyb21JbnB1dEVsZW1lbnQodGFyZ2V0RWxtOiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFyZ2V0KHRhcmdldEVsbSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlID0gdGhpcy5jb3B5VGV4dCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKHRhcmdldEVsbSwgdGhpcy53aW5kb3cpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmUgJiYgdGhpcy5pc0NvcHlTdWNjZXNzSW5JRTExKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGZvciBJRTExIHJldHVybiB0cnVlIGV2ZW4gaWYgY29weSBmYWlsXHJcbiAgICBpc0NvcHlTdWNjZXNzSW5JRTExKCkge1xyXG4gICAgICAgIGNvbnN0IGNsaXBib2FyZERhdGEgPSB0aGlzLndpbmRvd1snY2xpcGJvYXJkRGF0YSddO1xyXG4gICAgICAgIGlmIChjbGlwYm9hcmREYXRhICYmIGNsaXBib2FyZERhdGEuZ2V0RGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIWNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZmFrZSB0ZXh0YXJlYSBlbGVtZW50LCBzZXRzIGl0cyB2YWx1ZSBmcm9tIGB0ZXh0YCBwcm9wZXJ0eSxcclxuICAgICAqIGFuZCBtYWtlcyBhIHNlbGVjdGlvbiBvbiBpdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvcHlGcm9tQ29udGVudChjb250ZW50OiBzdHJpbmcsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB0aGlzLndpbmRvdy5kb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHRlbXAgdGV4dGFyZWEgaXMgc3RpbGwgYmVsb25nIHRoZSBjdXJyZW50IGNvbnRhaW5lci5cclxuICAgICAgICAvLyBJbiBjYXNlIHdlIGhhdmUgbXVsdGlwbGUgcGxhY2VzIHVzaW5nIG5neC1jbGlwYm9hcmQsIG9uZSBpcyBpbiBhIG1vZGFsIHVzaW5nIGNvbnRhaW5lciBidXQgdGhlIG90aGVyIG9uZSBpcyBub3QuXHJcbiAgICAgICAgaWYgKHRoaXMudGVtcFRleHRBcmVhICYmICFjb250YWluZXIuY29udGFpbnModGhpcy50ZW1wVGV4dEFyZWEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSh0aGlzLnRlbXBUZXh0QXJlYS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy50ZW1wVGV4dEFyZWEpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wVGV4dEFyZWEgPSB0aGlzLmNyZWF0ZVRlbXBUZXh0QXJlYSh0aGlzLmRvY3VtZW50LCB0aGlzLndpbmRvdyk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50ZW1wVGV4dEFyZWEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgc2hvdWxkIGJlIGEgRG9tIGVsZW1lbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRlbXBUZXh0QXJlYS52YWx1ZSA9IGNvbnRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29weUZyb21JbnB1dEVsZW1lbnQodGhpcy50ZW1wVGV4dEFyZWEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSB0ZW1wb3JhcnkgdGV4dGFyZWEgaWYgYW55XHJcbiAgICBwdWJsaWMgZGVzdHJveShjb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy53aW5kb3cuZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRlbXBUZXh0QXJlYSkge1xyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy50ZW1wVGV4dEFyZWEpO1xyXG4gICAgICAgICAgICAvLyByZW1vdmVDaGlsZCBkb2Vzbid0IHJlbW92ZSB0aGUgcmVmZXJlbmNlIGZyb20gbWVtb3J5XHJcbiAgICAgICAgICAgIHRoaXMudGVtcFRleHRBcmVhID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY3QgdGhlIHRhcmdldCBodG1sIGlucHV0IGVsZW1lbnRcclxuICAgIHByaXZhdGUgc2VsZWN0VGFyZ2V0KGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlucHV0RWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgICBpbnB1dEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3B5VGV4dCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgfVxyXG4gICAgLy8gUmVtb3ZlcyBjdXJyZW50IHNlbGVjdGlvbiBhbmQgZm9jdXMgZnJvbSBgdGFyZ2V0YCBlbGVtZW50LlxyXG4gICAgcHJpdmF0ZSBjbGVhclNlbGVjdGlvbihpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LCB3aW5kb3c6IFdpbmRvdykge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgICAgIGlucHV0RWxlbWVudCAmJiBpbnB1dEVsZW1lbnQuYmx1cigpO1xyXG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGUgYSBmYWtlIHRleHRhcmVhIGZvciBjb3B5IGNvbW1hbmRcclxuICAgIHByaXZhdGUgY3JlYXRlVGVtcFRleHRBcmVhKGRvYzogRG9jdW1lbnQsIHdpbmRvdzogV2luZG93KTogSFRNTFRleHRBcmVhRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaXNSVEwgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT09ICdydGwnO1xyXG4gICAgICAgIGxldCB0YTogSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgICAgICB0YSA9IGRvYy5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgIC8vIFByZXZlbnQgem9vbWluZyBvbiBpT1NcclxuICAgICAgICB0YS5zdHlsZS5mb250U2l6ZSA9ICcxMnB0JztcclxuICAgICAgICAvLyBSZXNldCBib3ggbW9kZWxcclxuICAgICAgICB0YS5zdHlsZS5ib3JkZXIgPSAnMCc7XHJcbiAgICAgICAgdGEuc3R5bGUucGFkZGluZyA9ICcwJztcclxuICAgICAgICB0YS5zdHlsZS5tYXJnaW4gPSAnMCc7XHJcbiAgICAgICAgLy8gTW92ZSBlbGVtZW50IG91dCBvZiBzY3JlZW4gaG9yaXpvbnRhbGx5XHJcbiAgICAgICAgdGEuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRhLnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7XHJcbiAgICAgICAgLy8gTW92ZSBlbGVtZW50IHRvIHRoZSBzYW1lIHBvc2l0aW9uIHZlcnRpY2FsbHlcclxuICAgICAgICBjb25zdCB5UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgdGEuc3R5bGUudG9wID0geVBvc2l0aW9uICsgJ3B4JztcclxuICAgICAgICB0YS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xyXG4gICAgICAgIHJldHVybiB0YTtcclxuICAgIH1cclxufVxyXG4vLyB0aGlzIHBhdHRlcm4gaXMgbWVudGlvbmVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEzODU0IGluICM0M1xyXG5leHBvcnQgZnVuY3Rpb24gQ0xJUEJPQVJEX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShkb2M6IERvY3VtZW50LCB3aW46IFdpbmRvdywgcGFyZW50RGlzcGF0Y2hlcjogQ2xpcGJvYXJkU2VydmljZSkge1xyXG4gICAgcmV0dXJuIHBhcmVudERpc3BhdGNoZXIgfHwgbmV3IENsaXBib2FyZFNlcnZpY2UoZG9jLCB3aW4pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0xJUEJPQVJEX1NFUlZJQ0VfUFJPVklERVIgPSB7XHJcbiAgICBkZXBzOiBbRE9DVU1FTlQgYXMgSW5qZWN0aW9uVG9rZW48RG9jdW1lbnQ+LCBXSU5ET1cgYXMgSW5qZWN0aW9uVG9rZW48V2luZG93PiwgW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgQ2xpcGJvYXJkU2VydmljZV1dLFxyXG4gICAgcHJvdmlkZTogQ2xpcGJvYXJkU2VydmljZSxcclxuICAgIHVzZUZhY3Rvcnk6IENMSVBCT0FSRF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUllcclxufTtcclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENsaXBib2FyZFNlcnZpY2UgfSBmcm9tICcuL25neC1jbGlwYm9hcmQuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICAgIHNlbGVjdG9yOiAnW25neENsaXBib2FyZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgICBASW5wdXQoJ25neENsaXBib2FyZCcpXHJcbiAgICBwdWJsaWMgdGFyZ2V0RWxtOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBjb250YWluZXI6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBjYkNvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBjYk9uU3VjY2VzczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBjYk9uRXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaXBib2FyZFNydjogQ2xpcGJvYXJkU2VydmljZSkge31cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHt9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY2xpcGJvYXJkU3J2LmRlc3Ryb3kodGhpcy5jb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pXHJcbiAgICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2xpcGJvYXJkU3J2LmlzU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KGZhbHNlLCB1bmRlZmluZWQsIGV2ZW50KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0RWxtICYmIHRoaXMuY2xpcGJvYXJkU3J2LmlzVGFyZ2V0VmFsaWQodGhpcy50YXJnZXRFbG0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KHRoaXMuY2xpcGJvYXJkU3J2LmNvcHlGcm9tSW5wdXRFbGVtZW50KHRoaXMudGFyZ2V0RWxtKSwgdGhpcy50YXJnZXRFbG0udmFsdWUsIGV2ZW50KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2JDb250ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KHRoaXMuY2xpcGJvYXJkU3J2LmNvcHlGcm9tQ29udGVudCh0aGlzLmNiQ29udGVudCwgdGhpcy5jb250YWluZXIpLCB0aGlzLmNiQ29udGVudCwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpcmVzIGFuIGV2ZW50IGJhc2VkIG9uIHRoZSBjb3B5IG9wZXJhdGlvbiByZXN1bHQuXHJcbiAgICAgKiBAcGFyYW0gc3VjY2VlZGVkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZDogYm9vbGVhbiwgY29waWVkQ29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkLCBldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAoc3VjY2VlZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2JPblN1Y2Nlc3MuZW1pdCh7IGlzU3VjY2VzczogdHJ1ZSwgY29udGVudDogY29waWVkQ29udGVudCwgZXZlbnQ6IGV2ZW50IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2JPbkVycm9yLmVtaXQoeyBpc1N1Y2Nlc3M6IGZhbHNlLCBldmVudDogZXZlbnQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENsaXBib2FyZERpcmVjdGl2ZSB9IGZyb20gJy4vbmd4LWNsaXBib2FyZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ0xJUEJPQVJEX1NFUlZJQ0VfUFJPVklERVIgfSBmcm9tICcuL25neC1jbGlwYm9hcmQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFdpbmRvd1Rva2VuTW9kdWxlIH0gZnJvbSAnbmd4LXdpbmRvdy10b2tlbic7XG5leHBvcnQgKiBmcm9tICcuL25neC1jbGlwYm9hcmQuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbmd4LWNsaXBib2FyZC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmd4V2luZG93VG9rZW5Nb2R1bGVdLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gIGRlY2xhcmF0aW9uczogW0NsaXBib2FyZERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtDbGlwYm9hcmREaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFtDTElQQk9BUkRfU0VSVklDRV9QUk9WSURFUl1cbn0pXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFPSSwwQkFBcUMsUUFBYSxFQUEwQixNQUFXO1FBQWxELGFBQVEsR0FBUixRQUFRLENBQUs7UUFBMEIsV0FBTSxHQUFOLE1BQU0sQ0FBSztLQUFJOzBCQUNoRix5Q0FBVzs7Ozs7WUFDbEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBRzNGLHdDQUFhOzs7O2NBQUMsT0FBK0M7UUFDaEUsSUFBSSxPQUFPLFlBQVksZ0JBQWdCLElBQUksT0FBTyxZQUFZLG1CQUFtQixFQUFFO1lBQy9FLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDO2FBQ3hHO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMs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

/***/ }),

/***/ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-window-token/fesm5/ngx-window-token.js ***!
  \*****************************************************************/
/*! exports provided: WINDOW, _window, NgxWindowTokenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_window", function() { return _window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxWindowTokenModule", function() { return NgxWindowTokenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken');
/**
 * @return {?}
 */
function _window() {
    return window;
}
var NgxWindowTokenModule = /** @class */ (function () {
    function NgxWindowTokenModule() {
    }
    NgxWindowTokenModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [{
                            provide: WINDOW,
                            useFactory: _window
                        }]
                },] },
    ];
    return NgxWindowTokenModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXdpbmRvdy10b2tlbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXdpbmRvdy10b2tlbi9saWIvbmd4LXdpbmRvdy10b2tlbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBXSU5ET1cgPSBuZXcgSW5qZWN0aW9uVG9rZW48V2luZG93PignV2luZG93VG9rZW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIF93aW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gd2luZG93O1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogV0lORE9XLFxuICAgICAgICB1c2VGYWN0b3J5OiBfd2luZG93XG4gICAgfV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4V2luZG93VG9rZW5Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBR2EsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFTLGFBQWEsQ0FBQyxDQUFDOzs7O0FBRWhFO0lBQ0ksT0FBTyxNQUFNLENBQUM7Q0FDakI7Ozs7O2dCQUVBLFFBQVEsU0FBQztvQkFDTixTQUFTLEVBQUUsQ0FBQzs0QkFDUixPQUFPLEVBQUUsTUFBTTs0QkFDZixVQUFVLEVBQUUsT0FBTzt5QkFDdEIsQ0FBQztpQkFDTDs7K0JBZEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./src/app/common/core/module/material-admin/dashboard-material.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/common/core/module/material-admin/dashboard-material.module.ts ***!
  \********************************************************************************/
/*! exports provided: DashboardMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMaterialModule", function() { return DashboardMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardMaterialModule = /** @class */ (function () {
    function DashboardMaterialModule() {
    }
    DashboardMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_1__["CdkAccordionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"]
            ]
        })
    ], DashboardMaterialModule);
    return DashboardMaterialModule;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/dashboard-admin-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/dashboard-admin-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DashboardAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAdminRoutingModule", function() { return DashboardAdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-admin.component */ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _dashboard_admin_component__WEBPACK_IMPORTED_MODULE_2__["DashboardAdminComponent"] }
];
var DashboardAdminRoutingModule = /** @class */ (function () {
    function DashboardAdminRoutingModule() {
    }
    DashboardAdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardAdminRoutingModule);
    return DashboardAdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/dashboard-admin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n\r\n  <div id=\"row-01\">\r\n\r\n    <button mat-raised-button [routerLink]=\"['/', 'a', 'z']\">REFRESH</button>\r\n    \r\n    <button mat-raised-button [disabled]=\"panelState\" (click)=\"onCollapsePanels()\">COLLAPSE PANELS</button>\r\n\r\n  </div>\r\n\r\n  <div id=\"row-02\">\r\n    <div id=\"col-01\">\r\n      <mat-accordion [multi]=\"true\">\r\n\r\n        <h5>Generate account numbers</h5>\r\n\r\n        <mat-divider></mat-divider>\r\n\r\n        <mat-expansion-panel #panel1 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Patient no.</mat-panel-title>\r\n            <mat-panel-description>Generate patient no</mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ng-template matExpansionPanelContent>\r\n            <app-generate [isPatient]=\"true\"></app-generate>\r\n          </ng-template>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel #panel2 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Doctor no.</mat-panel-title>\r\n            <mat-panel-description>Generate doctor no.</mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ng-template matExpansionPanelContent>\r\n            <app-generate [isDoctor]=\"true\"></app-generate>\r\n          </ng-template>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n\r\n\r\n      <mat-accordion [multi]=\"true\">\r\n\r\n        <h5>Generate account</h5>\r\n\r\n        <mat-divider></mat-divider>\r\n\r\n        <mat-expansion-panel #panel3 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Details</mat-panel-title>\r\n            <mat-panel-description>Generate random account details.</mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ng-template matExpansionPanelContent>\r\n            <app-generate [isAccount]=\"true\"></app-generate>\r\n          </ng-template>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n\r\n\r\n      <mat-accordion [multi]=\"false\">\r\n\r\n        <h5>Show list of registered accounts</h5>\r\n\r\n        <mat-divider></mat-divider>\r\n\r\n        <mat-expansion-panel #panel4 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Patient</mat-panel-title>\r\n            <mat-panel-description>List of patients registerd</mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ng-template matExpansionPanelContent>\r\n            <app-list [isPatient]=\"true\"></app-list>\r\n          </ng-template>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel #panel5 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Doctor</mat-panel-title>\r\n            <mat-panel-description>List of doctors registered</mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ng-template matExpansionPanelContent>\r\n            <app-list [isDoctor]=\"true\"></app-list>\r\n          </ng-template>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel #panel6 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Admin</mat-panel-title>\r\n            <mat-panel-description>List of admins registered</mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ng-template matExpansionPanelContent>\r\n            <app-list [isAdmin]=\"true\"></app-list>\r\n          </ng-template>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <div id=\"col-02\">\r\n      <mat-accordion [multi]=\"false\">\r\n\r\n        <h5>Add patients or doctors</h5>\r\n\r\n        <mat-divider></mat-divider>\r\n\r\n        <mat-expansion-panel #panel7 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Doctor</mat-panel-title>\r\n            <mat-panel-description>Add patient to doctor</mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ng-template matExpansionPanelContent>\r\n            <app-join [isDoctor]=\"true\"></app-join>\r\n          </ng-template>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel #panel8 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Patient</mat-panel-title>\r\n            <mat-panel-description>Add doctor to patient</mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ng-template matExpansionPanelContent>\r\n            <app-join [isPatient]=\"true\"></app-join>\r\n          </ng-template>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n\r\n\r\n      <mat-accordion [multi]=\"false\">\r\n\r\n        <h5>Account registration</h5>\r\n\r\n        <mat-divider></mat-divider>\r\n\r\n        <mat-expansion-panel #panel9 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Patient</mat-panel-title>\r\n            <mat-panel-description>Patient account registration form</mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ng-template matExpansionPanelContent>\r\n            <app-register [isPatient]=\"true\"></app-register>\r\n          </ng-template>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel #panel10 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Doctor</mat-panel-title>\r\n            <mat-panel-description>Doctor account registration form</mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ng-template matExpansionPanelContent>\r\n            <app-register [isDoctor]=\"true\"></app-register>\r\n          </ng-template>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel #panel11 #panel (click)=\"onExpandPanel()\" (closed)=\"onClosePanel()\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Admin</mat-panel-title>\r\n            <mat-panel-description>Admin account registration form</mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ng-template matExpansionPanelContent>\r\n            <app-register [isAdmin]=\"true\"></app-register>\r\n          </ng-template>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/dashboard-admin.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap {\n  margin: 50px auto; }\n\n#row-01 {\n  display: flex;\n  flex-flow: row wrap; }\n\n#row-01 .mat-raised-button:nth-child(1),\n  #row-01 .mat-raised-button:nth-child(2) {\n    margin-right: 15px; }\n\n#row-02 {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n\n#row-02 #col-01 {\n    flex-basis: 49%; }\n\n#row-02 #col-01 h5 {\n      margin-top: 24px; }\n\n#row-02 #col-01 .mat-divider {\n      margin: 12px 0; }\n\n#row-02 #col-02 {\n    flex-basis: 49%; }\n\n#row-02 #col-02 h5 {\n      margin-top: 24px; }\n\n#row-02 #col-02 .mat-divider {\n      margin: 12px 0; }\n\n@media (max-width: 752px) {\n  #row-02 {\n    flex-direction: column; } }\n\n@media (max-width: 473px) {\n  #row-01 {\n    flex-direction: column; }\n    #row-01 .mat-raised-button:nth-child(1),\n    #row-01 .mat-raised-button:nth-child(2),\n    #row-01 .mat-raised-button:nth-child(3) {\n      margin: 5px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL0M6XFxVc2Vyc1xcS2lyYW5rdW1hciBHb250aVxcRGVza3RvcFxcUHJvZ3JhbW1pbmcuLldvcmxkXFxNYWpvclByb2plY3RcXEhvc3BpdGFsLURhc2hib2FyZFxcSG9zcGl0YWwtRGFzaGJvYXJkLUFwcC9zcmNcXGFwcFxcZW50cnktYWRtaW5cXGRhc2hib2FyZC1hZG1pblxcZGFzaGJvYXJkLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUZyQjs7SUFNSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBOztBQUhoQztJQU1JLGVBQWUsRUFBQTs7QUFObkI7TUFTTSxnQkFBZ0IsRUFBQTs7QUFUdEI7TUFhTSxjQUFjLEVBQUE7O0FBYnBCO0lBa0JJLGVBQWUsRUFBQTs7QUFsQm5CO01BcUJNLGdCQUFnQixFQUFBOztBQXJCdEI7TUF5Qk0sY0FBYyxFQUFBOztBQUtwQjtFQUNFO0lBQ0Usc0JBQXNCLEVBQUEsRUFDdkI7O0FBR0g7RUFDRTtJQUNFLHNCQUFzQixFQUFBO0lBRHhCOzs7TUFRSSxhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2VudHJ5LWFkbWluL2Rhc2hib2FyZC1hZG1pbi9kYXNoYm9hcmQtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbiNyb3ctMDEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuXHJcbiAgLm1hdC1yYWlzZWQtYnV0dG9uOm50aC1jaGlsZCgxKSxcclxuICAubWF0LXJhaXNlZC1idXR0b246bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbiNyb3ctMDIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICNjb2wtMDEge1xyXG4gICAgZmxleC1iYXNpczogNDklO1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWRpdmlkZXIge1xyXG4gICAgICBtYXJnaW46IDEycHggMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNjb2wtMDIge1xyXG4gICAgZmxleC1iYXNpczogNDklO1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWRpdmlkZXIge1xyXG4gICAgICBtYXJnaW46IDEycHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTJweCkge1xyXG4gICNyb3ctMDIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NzNweCkge1xyXG4gICNyb3ctMDEge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAvLyBUbG9va3MgdWdseSBidXQgaXQgZG9lc250IHdvcmsgdGhlIG90aGVyIHdheSBhcm91bmRcclxuICAgIC8vIHdvcmsgb25seSBpbiB0aGlzIHdheS4uIHNvb29vb28uLiB5ZWFcclxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbjpudGgtY2hpbGQoMSksXHJcbiAgICAubWF0LXJhaXNlZC1idXR0b246bnRoLWNoaWxkKDIpLFxyXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/dashboard-admin.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAdminComponent", function() { return DashboardAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/core/service/auth.service */ "./src/app/common/core/service/auth.service.ts");
/* harmony import */ var _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardAdminComponent = /** @class */ (function () {
    function DashboardAdminComponent(router, authService, sharedService) {
        this.router = router;
        this.authService = authService;
        this.sharedService = sharedService;
        this.panelState = true;
        this.isExpanded = false;
    }
    DashboardAdminComponent.prototype.ngOnInit = function () {
        this.authService.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return user !== null; })).subscribe(function (state) {
            // state ? 0 : this.router.navigate(['/']);
        });
    };
    DashboardAdminComponent.prototype.onExpandPanel = function () {
        var condition = this.panel1.expanded || this.panel2.expanded || this.panel3.expanded || this.panel4.expanded || this.panel5.expanded
            || this.panel6.expanded || this.panel7.expanded || this.panel8.expanded || this.panel9.expanded || this.panel10.expanded || this.panel11.expanded;
        this.panelState = !condition;
    };
    DashboardAdminComponent.prototype.onClosePanel = function () {
        this.isExpanded = false;
        this.sharedService.setPanel = true;
    };
    DashboardAdminComponent.prototype.newMethod = function () {
        return this.panel1.open();
    };
    // expandAllPanels() {
    //   this.newMethod() || this.panel2.open() || this.panel3.open() || this.panel4.open() || this.panel5.open()
    //   || this.panel6.open() || this.panel7.open() || this.panel8.open() || this.panel9.open() || this.panel10.open() || this.panel11.open();
    //   this.isExpanded = true;
    //   this.panelState = false;
    DashboardAdminComponent.prototype.onCollapsePanels = function () {
        this.panel1.close();
        this.panel2.close();
        this.panel3.close();
        this.panel4.close();
        this.panel5.close();
        this.panel6.close();
        this.panel7.close();
        this.panel8.close();
        this.panel9.close();
        this.panel10.close();
        this.panel11.close();
        this.panelState = true;
        this.isExpanded = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel1'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel2'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel3'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel4'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel5'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel5", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel6'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel6", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel7'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel7", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel8'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel8", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel9'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel9", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel10'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel10", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel11'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], DashboardAdminComponent.prototype, "panel11", void 0);
    DashboardAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-admin',
            template: __webpack_require__(/*! ./dashboard-admin.component.html */ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-admin.component.scss */ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], DashboardAdminComponent);
    return DashboardAdminComponent;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/dashboard-admin.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/dashboard-admin.module.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAdminModule", function() { return DashboardAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-admin-routing.module */ "./src/app/entry-admin/dashboard-admin/dashboard-admin-routing.module.ts");
/* harmony import */ var _common_core_module_material_admin_dashboard_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/core/module/material-admin/dashboard-material.module */ "./src/app/common/core/module/material-admin/dashboard-material.module.ts");
/* harmony import */ var _dashboard_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-admin.component */ "./src/app/entry-admin/dashboard-admin/dashboard-admin.component.ts");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generate/generate.component */ "./src/app/entry-admin/dashboard-admin/generate/generate.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/entry-admin/dashboard-admin/register/register.component.ts");
/* harmony import */ var _join_join_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./join/join.component */ "./src/app/entry-admin/dashboard-admin/join/join.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/list.component */ "./src/app/entry-admin/dashboard-admin/list/list.component.ts");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/core/service/database.service */ "./src/app/common/core/service/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardAdminModule = /** @class */ (function () {
    function DashboardAdminModule() {
    }
    DashboardAdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                _dashboard_admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardAdminRoutingModule"],
                _common_core_module_material_admin_dashboard_material_module__WEBPACK_IMPORTED_MODULE_5__["DashboardMaterialModule"]
            ],
            declarations: [
                _dashboard_admin_component__WEBPACK_IMPORTED_MODULE_6__["DashboardAdminComponent"],
                _generate_generate_component__WEBPACK_IMPORTED_MODULE_7__["GenerateComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _join_join_component__WEBPACK_IMPORTED_MODULE_9__["JoinComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"]
            ],
            providers: [
                _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_11__["FirestoreService"],
                _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_12__["DatabaseService"]
            ]
        })
    ], DashboardAdminModule);
    return DashboardAdminModule;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/generate/generate.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/generate/generate.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <form [formGroup]=\"form\">\r\n\r\n\r\n    <!-- GENERATE PATIENR NUMBER FORM -->\r\n    <div formGroupName=\"patientForm\" id=\"row-01\" *ngIf=\"isPatient\">\r\n\r\n      <div>\r\n        <button mat-raised-button type=\"button\" (click)=\"onGenerate()\">GENERATE</button>\r\n      </div>\r\n      <div>\r\n        <mat-form-field color=\"accent\" appearance=\"outline\">\r\n          <mat-label>Patient No.</mat-label>\r\n          <input matInput type=\"text\" formControlName=\"random\" #patientNo>\r\n          <button mat-icon-button matSuffix ngxClipboard [cbContent]=\"patientNo.value\" color=\"accent\" [disabled]=\"patientNo.value === ''\"\r\n            [matTooltip]=\"'copy to clipboard'\" [matTooltipPosition]=\"'below'\" (click)=\"onClipboard()\"><mat-icon>content_copy</mat-icon></button>\r\n        </mat-form-field>\r\n      </div>\r\n    <!-- END GENERATE PATIENR NUMBER FORM -->\r\n    </div>\r\n\r\n\r\n    <!-- GENERATE DOCTOR NUMBER FORM -->\r\n    <div formGroupName=\"doctorForm\" id=\"row-02\" *ngIf=\"isDoctor\">\r\n\r\n      <div>\r\n        <button mat-raised-button type=\"button\" (click)=\"onGenerate()\">GENERATE</button>\r\n      </div>\r\n      <div>\r\n        <mat-form-field color=\"accent\" appearance=\"outline\">\r\n          <mat-label>Doctor No.</mat-label>\r\n          <input matInput type=\"text\" formControlName=\"random\" #doctorNo>\r\n          <button mat-icon-button matSuffix ngxClipboard [cbContent]=\"doctorNo.value\" color=\"accent\" [disabled]=\"doctorNo.value === ''\"\r\n            [matTooltip]=\"'copy to clipboard'\" [matTooltipPosition]=\"'below'\" (click)=\"onClipboard()\"><mat-icon>content_copy</mat-icon></button>\r\n        </mat-form-field>\r\n      </div>\r\n    <!-- END GENERATE DOCTOR NUMBER FORM -->\r\n    </div>\r\n\r\n\r\n    <!-- GENERATE ACCOUNT FORM -->\r\n    <div formGroupName=\"accountForm\" id=\"row-03\" *ngIf=\"isAccount\">\r\n\r\n      <div class=\"inside\">\r\n        <div>\r\n          <button mat-raised-button type=\"button\" (click)=\"onGenerate('fullname')\">GENERATE</button>\r\n        </div>\r\n        <div>\r\n          <mat-form-field color=\"accent\" appearance=\"outline\">\r\n            <mat-label>Fullname</mat-label>\r\n            <input matInput type=\"text\" formControlName=\"fullname\" #fullname>\r\n            <button mat-icon-button matSuffix ngxClipboard [cbContent]=\"fullname.value\" color=\"accent\" [disabled]=\"fullname.value === ''\"\r\n              [matTooltip]=\"'copy to clipboard'\" [matTooltipPosition]=\"'below'\" (click)=\"onClipboard()\"><mat-icon>content_copy</mat-icon></button>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inside\">\r\n        <div>\r\n          <button mat-raised-button type=\"button\" (click)=\"onGenerate('email')\">GENERATE</button>\r\n        </div>\r\n        <div>\r\n          <mat-form-field color=\"accent\" appearance=\"outline\">\r\n            <mat-label>Email address</mat-label>\r\n            <input matInput type=\"text\" formControlName=\"email\" #email>\r\n            <button mat-icon-button matSuffix ngxClipboard [cbContent]=\"email.value\" color=\"accent\" [disabled]=\"email.value === ''\"\r\n              [matTooltip]=\"'copy to clipboard'\" [matTooltipPosition]=\"'below'\" (click)=\"onClipboard()\"><mat-icon>content_copy</mat-icon></button>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"inside\">\r\n        <div>\r\n          <button mat-raised-button type=\"button\" (click)=\"onGenerate('password')\">GENERATE</button>\r\n        </div>\r\n        <div>\r\n          <mat-form-field color=\"accent\" appearance=\"outline\">\r\n            <mat-label>Password</mat-label>\r\n            <input matInput type=\"text\" formControlName=\"password\" #password>\r\n            <button mat-icon-button matSuffix ngxClipboard [cbContent]=\"password.value\" color=\"accent\" [disabled]=\"password.value === ''\"\r\n              [matTooltip]=\"'copy to clipboard'\" [matTooltipPosition]=\"'below'\" (click)=\"onClipboard()\"><mat-icon>content_copy</mat-icon></button>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    <!-- END GENERATE ACCOUNT FORM -->\r\n    </div>\r\n\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/generate/generate.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/generate/generate.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row-01, #row-02 {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n  #row-01 div:last-child, #row-02 div:last-child {\n    flex-grow: 1; }\n  #row-01 .mat-raised-button, #row-02 .mat-raised-button {\n    margin-top: 12px;\n    margin-right: 15px; }\n  #row-01 .mat-form-field, #row-02 .mat-form-field {\n    width: 100%; }\n  #row-03 {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n  #row-03 .inside {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    width: 100%; }\n  #row-03 .inside div:last-child {\n      flex-grow: 1; }\n  #row-03 .inside .mat-raised-button {\n      margin-top: 12px;\n      margin-right: 15px; }\n  #row-03 .inside .mat-form-field {\n      width: 100%; }\n  @media (max-width: 429px) {\n  #row-01, #row-02, .inside {\n    flex-direction: column; }\n    #row-01 div:last-child,\n    #row-01 div:first-child, #row-02 div:last-child,\n    #row-02 div:first-child, .inside div:last-child,\n    .inside div:first-child {\n      flex-grow: 1; }\n    #row-01 .mat-raised-button, #row-02 .mat-raised-button, .inside .mat-raised-button {\n      margin: 8px 0;\n      width: 100%; } }\n  @media (max-width: 846px) and (min-width: 753px) {\n  #row-01, #row-02, .inside {\n    flex-direction: column; }\n    #row-01 div:last-child,\n    #row-01 div:first-child, #row-02 div:last-child,\n    #row-02 div:first-child, .inside div:last-child,\n    .inside div:first-child {\n      flex-grow: 1; }\n    #row-01 .mat-raised-button, #row-02 .mat-raised-button, .inside .mat-raised-button {\n      margin: 8px 0;\n      width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL2dlbmVyYXRlL0M6XFxVc2Vyc1xcS2lyYW5rdW1hciBHb250aVxcRGVza3RvcFxcUHJvZ3JhbW1pbmcuLldvcmxkXFxNYWpvclByb2plY3RcXEhvc3BpdGFsLURhc2hib2FyZFxcSG9zcGl0YWwtRGFzaGJvYXJkLUFwcC9zcmNcXGFwcFxcZW50cnktYWRtaW5cXGRhc2hib2FyZC1hZG1pblxcZ2VuZXJhdGVcXGdlbmVyYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTtFQUhoQztJQU1JLFlBQVksRUFBQTtFQU5oQjtJQVVJLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQVh0QjtJQWVJLFdBQVcsRUFBQTtFQUlmO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTtFQUhoQztJQU1JLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVcsRUFBQTtFQVRmO01BWU0sWUFBWSxFQUFBO0VBWmxCO01BZ0JNLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTtFQWpCeEI7TUFxQk0sV0FBVyxFQUFBO0VBS2pCO0VBQ0U7SUFDRSxzQkFBc0IsRUFBQTtJQUR4Qjs7OztNQUtJLFlBQVksRUFBQTtJQUxoQjtNQVNJLGFBQWE7TUFDYixXQUFXLEVBQUEsRUFDWjtFQUlMO0VBQ0U7SUFDRSxzQkFBc0IsRUFBQTtJQUR4Qjs7OztNQUtJLFlBQVksRUFBQTtJQUxoQjtNQVNJLGFBQWE7TUFDYixXQUFXLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5LWFkbWluL2Rhc2hib2FyZC1hZG1pbi9nZW5lcmF0ZS9nZW5lcmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb3ctMDEsICNyb3ctMDIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcblxyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuI3Jvdy0wMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmluc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjlweCkge1xyXG4gICNyb3ctMDEsICNyb3ctMDIsIC5pbnNpZGUgIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgZGl2Omxhc3QtY2hpbGQsXHJcbiAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODQ2cHgpIGFuZCAobWluLXdpZHRoOiA3NTNweCkge1xyXG4gICNyb3ctMDEsICNyb3ctMDIsIC5pbnNpZGUgIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgZGl2Omxhc3QtY2hpbGQsXHJcbiAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/generate/generate.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/generate/generate.component.ts ***!
  \****************************************************************************/
/*! exports provided: GenerateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateComponent", function() { return GenerateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chance */ "./node_modules/chance/chance.js");
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var GenerateComponent = /** @class */ (function () {
    function GenerateComponent(fb) {
        this.fb = fb;
        this.form = fb.group({
            'patientForm': fb.group({
                'random': ''
            }),
            'doctorForm': fb.group({
                'random': ''
            }),
            'accountForm': fb.group({
                'fullname': '',
                'email': '',
                'password': ''
            })
        });
    }
    GenerateComponent.prototype.ngOnInit = function () {
        this.form.get('patientForm').get('random').disable();
        this.form.get('doctorForm').get('random').disable();
        this.form.get('accountForm').get('fullname').disable();
        this.form.get('accountForm').get('email').disable();
        this.form.get('accountForm').get('password').disable();
    };
    GenerateComponent.prototype.onGenerate = function (option) {
        var fullname = this.form.get('accountForm').get('fullname').value;
        var email = this.form.get('accountForm').get('email').value;
        var password = this.form.get('accountForm').get('password').value;
        var chance = new chance__WEBPACK_IMPORTED_MODULE_2__();
        var randomChance = chance.integer({ min: 100000000000, max: 999999999999 });
        var randomFullname = option === 'fullname' ? chance.name() : fullname;
        var randomEmail = option === 'email' ? chance.email() : email;
        var randomPassword = option === 'password' ? chance.geohash({ length: 7 }) : password;
        this.form.setValue({
            patientForm: { random: "PX-" + randomChance },
            doctorForm: { random: "DX-" + randomChance },
            accountForm: {
                fullname: randomFullname,
                email: randomEmail,
                password: randomPassword
            }
        });
    };
    GenerateComponent.prototype.onClipboard = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GenerateComponent.prototype, "isDoctor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GenerateComponent.prototype, "isPatient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GenerateComponent.prototype, "isAccount", void 0);
    GenerateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generate',
            template: __webpack_require__(/*! ./generate.component.html */ "./src/app/entry-admin/dashboard-admin/generate/generate.component.html"),
            styles: [__webpack_require__(/*! ./generate.component.scss */ "./src/app/entry-admin/dashboard-admin/generate/generate.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], GenerateComponent);
    return GenerateComponent;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/join/join.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/join/join.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <form [formGroup]=\"form\">\r\n\r\n    <mat-form-field color=\"accent\" *ngIf=\"isPatient\">\r\n      <mat-label *ngIf=\"patients.length === 0\">Initializing patient list</mat-label>\r\n      <mat-label *ngIf=\"patients.length !== 0\">Patient</mat-label>\r\n      <input matInput [matAutocomplete]=\"reactiveAutoPatient\" formControlName=\"patient\" (focus)=\"onFocus()\">\r\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear(true)\"><mat-icon>clear</mat-icon></button>\r\n      <mat-autocomplete #reactiveAutoPatient [displayWith]=\"displayFn\">\r\n        <mat-option *ngFor=\"let patient of reactivePatients | async\" [value]=\"patient\">\r\n          <span>{{ patient.fullname }}</span>\r\n          <span> ({{ patient.patientNo }}) </span>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n      <mat-error *ngIf=\"patientError?.required\">This is required.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\">\r\n      <mat-label *ngIf=\"doctors.length === 0\">Initializing doctor list</mat-label>\r\n      <mat-label *ngIf=\"doctors.length !== 0\">Doctor</mat-label>\r\n      <input matInput [matAutocomplete]=\"reactiveAutoDoctor\" formControlName=\"doctor\" (focus)=\"onFocus()\">\r\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear(false)\"><mat-icon>clear</mat-icon></button>\r\n      <mat-autocomplete #reactiveAutoDoctor [displayWith]=\"displayFn\">\r\n        <mat-option *ngFor=\"let doctor of reactiveDoctors | async\" [value]=\"doctor\">\r\n          <span>{{ doctor.fullname }}</span>\r\n          <span> ({{ doctor.doctorNo }}) </span>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n      <mat-error *ngIf=\"doctorError?.required\">This is required.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\" *ngIf=\"isDoctor\">\r\n      <mat-label *ngIf=\"patients.length === 0\">Initializing patient list</mat-label>\r\n      <mat-label *ngIf=\"patients.length !== 0\">Patient</mat-label>\r\n      <input matInput [matAutocomplete]=\"reactiveAutoPatient\" formControlName=\"patient\" (focus)=\"onFocus()\">\r\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear(true)\"><mat-icon>clear</mat-icon></button>\r\n      <mat-autocomplete #reactiveAutoPatient [displayWith]=\"displayFn\">\r\n        <mat-option *ngFor=\"let patient of reactivePatients | async\" [value]=\"patient\">\r\n          <span>{{ patient.fullname }}</span>\r\n          <span> ({{ patient.patientNo }}) </span>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n      <mat-error *ngIf=\"patientError?.required\">This is required.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button [disabled]=\"isFormInvalid\" (click)=\"addDoctorToPatient()\" *ngIf=\"isPatient\">SUBMIT</button>\r\n    <button mat-raised-button [disabled]=\"isFormInvalid\" (click)=\"addPatientToDoctor()\" *ngIf=\"isDoctor\">SUBMIT</button>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/join/join.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/join/join.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n\n.mat-raised-button {\n  display: block;\n  margin-left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL2pvaW4vQzpcXFVzZXJzXFxLaXJhbmt1bWFyIEdvbnRpXFxEZXNrdG9wXFxQcm9ncmFtbWluZy4uV29ybGRcXE1ham9yUHJvamVjdFxcSG9zcGl0YWwtRGFzaGJvYXJkXFxIb3NwaXRhbC1EYXNoYm9hcmQtQXBwL3NyY1xcYXBwXFxlbnRyeS1hZG1pblxcZGFzaGJvYXJkLWFkbWluXFxqb2luXFxqb2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL2pvaW4vam9pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/join/join.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/join/join.component.ts ***!
  \********************************************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var JoinComponent = /** @class */ (function () {
    function JoinComponent(fb, firestoreService, sharedService) {
        this.fb = fb;
        this.firestoreService = firestoreService;
        this.sharedService = sharedService;
        this.patients = [];
        this.doctors = [];
        this.isFormInvalid = true;
        this.form = fb.group({
            'patient': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'doctor': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    Object.defineProperty(JoinComponent.prototype, "patientError", {
        get: function () { return this.form.get('patient').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinComponent.prototype, "doctorError", {
        get: function () { return this.form.get('doctor').errors; },
        enumerable: true,
        configurable: true
    });
    JoinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reactivePatients = this.form.get('patient').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.displayFn(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return _this.filterPatients(name); }));
        this.reactiveDoctors = this.form.get('doctor').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.displayFn(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return _this.filterDoctors(name); }));
        this.firestoreService.getPatientDetails()
            .subscribe(function (response) { return (_this.patients = response); });
        this.firestoreService.getDoctorDetails()
            .subscribe(function (response) { return (_this.doctors = response); });
        this.form.valueChanges.subscribe(function () {
            _this.isFormInvalid = _this.form.invalid;
        });
        this.sharedService.panelChanged.subscribe(function (state) {
            state ? _this.form.reset() : 0;
        });
    };
    JoinComponent.prototype.onClear = function (option) {
        option
            ? this.form.patchValue({
                'patient': ''
            })
            : this.form.patchValue({
                'doctor': ''
            });
    };
    JoinComponent.prototype.onFocus = function () {
        this.form.patchValue({
            'patient': this.form.get('patient').value || '',
            'doctor': this.form.get('doctor').value || ''
        });
    };
    JoinComponent.prototype.displayFn = function (value) {
        return value && typeof value === 'object' ? value.fullname : value;
    };
    JoinComponent.prototype.filterPatients = function (val) {
        return val ? this._filter(this.patients, val) : this.patients;
    };
    JoinComponent.prototype.filterDoctors = function (val) {
        return val ? this._filter(this.doctors, val) : this.doctors;
    };
    JoinComponent.prototype.addPatientToDoctor = function () {
        var form = this.form.value;
        delete form.doctor['patientNo'];
        delete form.patient['doctorNo'];
        this.firestoreService.addPatientToDoctor(form);
    };
    JoinComponent.prototype.addDoctorToPatient = function () {
        var form = this.form.value;
        delete form.doctor['patientNo'];
        delete form.patient['doctorNo'];
        this.firestoreService.addDoctorToPatient(form);
    };
    // helper functions
    JoinComponent.prototype._filter = function (values, val) {
        var filterValue = val.toLowerCase();
        return values.filter(function (value) { return value.fullname.toLowerCase().startsWith(filterValue); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], JoinComponent.prototype, "isPatient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], JoinComponent.prototype, "isDoctor", void 0);
    JoinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join',
            template: __webpack_require__(/*! ./join.component.html */ "./src/app/entry-admin/dashboard-admin/join/join.component.html"),
            styles: [__webpack_require__(/*! ./join.component.scss */ "./src/app/entry-admin/dashboard-admin/join/join.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], JoinComponent);
    return JoinComponent;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/list/list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/list/list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <div *ngIf=\"isAdmin\">\r\n    no preview available.\r\n  </div>\r\n\r\n  <div *ngIf=\"!isAdmin\">\r\n\r\n    <p *ngIf=\"isPatient\">Number of patients registerd: {{ patients.length }}</p>\r\n    <p *ngIf=\"isDoctor\">Number of doctors registerd: {{ doctors.length }}</p>\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"fill\" *ngIf=\"isPatient\">\r\n      <mat-label *ngIf=\"patients.length === 0\">Initializing patient list</mat-label>\r\n      <mat-label *ngIf=\"patients.length !== 0\">Patient</mat-label>\r\n      <input matInput [matAutocomplete]=\"reactiveAutoPatient\" [formControl]=\"patientControl\" (focus)=\"onFocus()\">\r\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear()\"><mat-icon>clear</mat-icon></button>\r\n      <mat-autocomplete #reactiveAutoPatient [displayWith]=\"displayFn\">\r\n        <mat-option *ngFor=\"let patient of reactivePatients | async\" [value]=\"patient\">\r\n          <span>{{ patient.fullname }}</span>\r\n          <span> ({{ patient.patientNo }}) </span>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"fill\" *ngIf=\"isDoctor\">\r\n      <mat-label *ngIf=\"doctors.length === 0\">Initializing doctor list</mat-label>\r\n      <mat-label *ngIf=\"doctors.length !== 0\">Doctor</mat-label>\r\n      <input matInput [matAutocomplete]=\"reactiveAutoDoctor\" [formControl]=\"doctorControl\" (focus)=\"onFocus()\">\r\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear()\"><mat-icon>clear</mat-icon></button>\r\n      <mat-autocomplete #reactiveAutoDoctor [displayWith]=\"displayFn\">\r\n        <mat-option *ngFor=\"let doctor of reactiveDoctors | async\" [value]=\"doctor\">\r\n          <span>{{ doctor.fullname }}</span>\r\n          <span> ({{ doctor.doctorNo }}) </span>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n\r\n    <div id=\"content\">\r\n\r\n      <div id=\"col-01\" *ngIf=\"patient || doctor\">\r\n        <p *ngIf=\"isPatient\">Patient details</p>\r\n        <p *ngIf=\"isDoctor\">Doctor details</p>\r\n\r\n        <mat-divider></mat-divider>\r\n\r\n        <div id=\"patient\" *ngIf=\"isPatient\">\r\n          <p>{{ patient?.fullname }}</p>\r\n          <p>{{ patient?.patientNo }}</p>\r\n          <p>{{ patient?.email }}</p>\r\n        </div>\r\n\r\n        <div id=\"patient\" *ngIf=\"isDoctor\">\r\n          <p>{{ doctor?.fullname }}</p>\r\n          <p>{{ doctor?.doctorNo }}</p>\r\n          <p>{{ doctor?.email }}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"col-02\" *ngIf=\"patient || doctor\">\r\n        <p *ngIf=\"isPatient\">Assigned doctors</p>\r\n        <p *ngIf=\"isDoctor\">Assigned patients</p>\r\n\r\n        <mat-divider></mat-divider>\r\n\r\n        <div *ngIf=\"isPatient\">\r\n          <p *ngIf=\"(patientDoctors | async)?.length === 0\">Please wait...</p>\r\n          <p *ngFor=\"let doctor of patientDoctors | async\">\r\n            {{ doctor?.fullname }} - {{ doctor?.doctorNo }}\r\n          </p>\r\n        </div>\r\n\r\n        <div *ngIf=\"isDoctor\">\r\n          <p *ngIf=\"(doctorPatients | async)?.length === 0\">Please wait...</p>\r\n          <p *ngFor=\"let patient of doctorPatients | async\">\r\n            {{ patient?.fullname }} - {{ patient?.patientNo }}\r\n          </p>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/list/list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/list/list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-bottom: 7px; }\n\n.mat-form-field {\n  width: 100%; }\n\n#content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n\n#content #col-01 > p,\n  #content #col-02 > p {\n    color: #b3b3b3; }\n\n#content #col-01 {\n    margin-right: 30px; }\n\n#content #col-01 > div {\n      margin-top: 10px; }\n\n#content #col-02 {\n    flex-grow: 1; }\n\n#content #col-02 div > p:first-child {\n      margin-top: 10px; }\n\n@media (max-width: 453px) {\n  #content {\n    flex-direction: column; }\n  #col-01 {\n    flex-grow: 1; }\n  #col-02 {\n    flex-grow: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL2xpc3QvQzpcXFVzZXJzXFxLaXJhbmt1bWFyIEdvbnRpXFxEZXNrdG9wXFxQcm9ncmFtbWluZy4uV29ybGRcXE1ham9yUHJvamVjdFxcSG9zcGl0YWwtRGFzaGJvYXJkXFxIb3NwaXRhbC1EYXNoYm9hcmQtQXBwL3NyY1xcYXBwXFxlbnRyeS1hZG1pblxcZGFzaGJvYXJkLWFkbWluXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTs7QUFIaEM7O0lBT0ksY0FBeUIsRUFBQTs7QUFQN0I7SUFXSSxrQkFBa0IsRUFBQTs7QUFYdEI7TUFjTSxnQkFBZ0IsRUFBQTs7QUFkdEI7SUFtQkksWUFBWSxFQUFBOztBQW5CaEI7TUFzQk0sZ0JBQWdCLEVBQUE7O0FBTXRCO0VBQ0U7SUFDRSxzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9lbnRyeS1hZG1pbi9kYXNoYm9hcmQtYWRtaW4vbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgI2NvbC0wMSA+IHAsXHJcbiAgI2NvbC0wMiA+IHAge1xyXG4gICAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcclxuICB9XHJcblxyXG4gICNjb2wtMDEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNjb2wtMDIge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgIGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTNweCkge1xyXG4gICNjb250ZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAjY29sLTAxIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcblxyXG4gICNjb2wtMDIge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/list/list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/list/list.component.ts ***!
  \********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(firestoreService) {
        this.firestoreService = firestoreService;
        this.patients = [];
        this.doctors = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.doctorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.reactivePatients = this.patientControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.displayFn(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return _this.filterPatients(name); }));
        this.reactiveDoctors = this.doctorControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.displayFn(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return _this.filterDoctors(name); }));
        this.firestoreService.getPatientDetails(true)
            .subscribe(function (response) { return (_this.patients = response); });
        this.firestoreService.getDoctorDetails(true)
            .subscribe(function (response) { return (_this.doctors = response); });
        this.patientControl.valueChanges.subscribe(function (control) {
            _this.patient = control;
        });
        this.doctorControl.valueChanges.subscribe(function (control) {
            _this.doctor = control;
        });
    };
    ListComponent.prototype.onClear = function () {
        this.patientControl.reset();
        this.doctorControl.reset();
    };
    ListComponent.prototype.onFocus = function () {
        this.patientControl.patchValue(this.patientControl.value || '');
        this.doctorControl.patchValue(this.doctorControl.value || '');
    };
    ListComponent.prototype.displayFn = function (value) {
        return value && typeof value === 'object' ? value.fullname : value;
    };
    ListComponent.prototype.filterPatients = function (val) {
        this.patientDoctors = this.firestoreService.getPatientDoctors(val);
        return val ? this._filter(this.patients, val) : this.patients;
    };
    ListComponent.prototype.filterDoctors = function (val) {
        this.doctorPatients = this.firestoreService.getDoctorPatients(val);
        return val ? this._filter(this.doctors, val) : this.doctors;
    };
    ListComponent.prototype._filter = function (values, val) {
        var filterValue = val.toLowerCase();
        return values.filter(function (value) { return value.fullname.toLowerCase().startsWith(filterValue); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ListComponent.prototype, "isPatient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ListComponent.prototype, "isDoctor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ListComponent.prototype, "isAdmin", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/entry-admin/dashboard-admin/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/entry-admin/dashboard-admin/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/register/register.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/register/register.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <form [formGroup]=\"form\">\r\n\r\n    <mat-form-field color=\"accent\" *ngIf=\"!isAdmin && !isDoctor\">\r\n      <mat-label>Patient No.</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"patientNo\">\r\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear('patientNo')\"><mat-icon>clear</mat-icon></button>\r\n      <mat-error *ngIf=\"patientNoError?.required\">This is required.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\" *ngIf=\"!isAdmin && !isPatient\">\r\n      <mat-label>Doctor No.</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"doctorNo\">\r\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear('doctorNo')\"><mat-icon>clear</mat-icon></button>\r\n      <mat-error *ngIf=\"doctorNoError?.required\">This is required.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\" *ngIf=\"!isAdmin\">\r\n      <mat-label>Fullname</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"fullname\">\r\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear('fullname')\"><mat-icon>clear</mat-icon></button>\r\n      <mat-error *ngIf=\"fullnameError?.required\">This is required.</mat-error>\r\n      <mat-error *ngIf=\"fullnameError?.minlength || fullnameError?.containsNumber\">Invalid name.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\">\r\n      <mat-label>Email</mat-label>\r\n      <input matInput type=\"email\" formControlName=\"email\">\r\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear('email')\"><mat-icon>clear</mat-icon></button>\r\n      <mat-error *ngIf=\"emailError?.required\">This is required.</mat-error>\r\n      <mat-error *ngIf=\"emailError?.email\">Invalid email.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\">\r\n      <mat-label>Password</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"password\">\r\n      <button mat-icon-button matSuffix color=\"accent\" [matTooltip]=\"'clear'\" (click)=\"onClear('password')\"><mat-icon>clear</mat-icon></button>\r\n      <mat-error *ngIf=\"passwordError?.required\">This is required.</mat-error>\r\n      <mat-error *ngIf=\"passwordError?.minlength\">Password is too short.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <div *ngIf=\"isPatientFormInvalid; else else1\">\r\n      <button mat-raised-button [disabled]=\"isProcessing\" (click)=\"patientCreate()\" *ngIf=\"isPatient\">SUBMIT</button>\r\n    </div>\r\n    <ng-template #else1>\r\n      <button mat-raised-button [disabled]=\"true\" *ngIf=\"isPatient\">SUBMIT</button>\r\n    </ng-template>\r\n    <div *ngIf=\"isDoctorFormInvalid; else else2\">\r\n      <button mat-raised-button [disabled]=\"isProcessing\" (click)=\"doctorCreate()\" *ngIf=\"isDoctor\">SUBMIT</button>\r\n    </div>\r\n    <ng-template #else2>\r\n      <button mat-raised-button [disabled]=\"true\" *ngIf=\"isDoctor\">SUBMIT</button>\r\n    </ng-template>\r\n    <div *ngIf=\"isAdminFormInvalid; else else3\">\r\n      <button mat-raised-button [disabled]=\"isProcessing\" (click)=\"adminCreate()\" *ngIf=\"isAdmin\">SUBMIT</button>\r\n    </div>\r\n    <ng-template #else3>\r\n      <button mat-raised-button [disabled]=\"true\" *ngIf=\"isAdmin\">SUBMIT</button>\r\n    </ng-template>\r\n\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/register/register.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/register/register.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n\n.mat-raised-button {\n  display: block;\n  margin-left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL3JlZ2lzdGVyL0M6XFxVc2Vyc1xcS2lyYW5rdW1hciBHb250aVxcRGVza3RvcFxcUHJvZ3JhbW1pbmcuLldvcmxkXFxNYWpvclByb2plY3RcXEhvc3BpdGFsLURhc2hib2FyZFxcSG9zcGl0YWwtRGFzaGJvYXJkLUFwcC9zcmNcXGFwcFxcZW50cnktYWRtaW5cXGRhc2hib2FyZC1hZG1pblxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50cnktYWRtaW4vZGFzaGJvYXJkLWFkbWluL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entry-admin/dashboard-admin/register/register.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/entry-admin/dashboard-admin/register/register.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterComponent, CustomValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidator", function() { return CustomValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, firestoreService, sharedService) {
        this.fb = fb;
        this.firestoreService = firestoreService;
        this.sharedService = sharedService;
        this.isProcessing = false;
        this.isPatientFormInvalid = false;
        this.isDoctorFormInvalid = false;
        this.isAdminFormInvalid = false;
        this.form = fb.group({
            'patientNo': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'doctorNo': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            'fullname': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), CustomValidator.containNum]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
        });
    }
    Object.defineProperty(RegisterComponent.prototype, "patientNoError", {
        get: function () { return this.form.get('patientNo').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "doctorNoError", {
        get: function () { return this.form.get('doctorNo').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "fullnameError", {
        get: function () { return this.form.get('fullname').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "emailError", {
        get: function () { return this.form.get('email').errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "passwordError", {
        get: function () { return this.form.get('password').errors; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.valueChanges.subscribe(function () {
            var doctorCondition = _this.form.get('doctorNo').valid && _this.form.get('fullname').valid && _this.form.get('email').valid && _this.form.get('password').valid;
            _this.isDoctorFormInvalid = doctorCondition;
            var patientCondition = _this.form.get('patientNo').valid && _this.form.get('fullname').valid && _this.form.get('email').valid && _this.form.get('password').valid;
            _this.isPatientFormInvalid = patientCondition;
            var adminCondition = _this.form.get('email').valid && _this.form.get('password').valid;
            _this.isAdminFormInvalid = adminCondition;
        });
        this.sharedService.panelChanged.subscribe(function (state) {
            state ? _this.form.reset() : 0;
        });
    };
    RegisterComponent.prototype.onClear = function (option) {
        option === 'patientNo'
            ? this.form.patchValue({
                'patientNo': ''
            })
            : option === 'doctorNo'
                ? this.form.patchValue({
                    'doctorNo': ''
                })
                : option === 'fullname'
                    ? this.form.patchValue({
                        'fullname': ''
                    })
                    : option === 'email'
                        ? this.form.patchValue({
                            'email': ''
                        })
                        : option === 'password'
                            ? this.form.patchValue({
                                'password': ''
                            }) : 0;
    };
    RegisterComponent.prototype.patientCreate = function () {
        var _this = this;
        delete this.form.value['doctorNo'];
        var userDetails = this.form.value;
        this.sharedService.snackbar('Processing... Please wait.', 10000000);
        this.isProcessing = true;
        this.firestoreService.createUser(userDetails, 'patient')
            .then(function (user) { return (_this.resetFormThen(user, 'patient')); })
            .catch(function (e) { return (_this.resetFormCatch(e)); });
    };
    RegisterComponent.prototype.doctorCreate = function () {
        var _this = this;
        delete this.form.value['patientNo'];
        var userDetails = this.form.value;
        this.sharedService.snackbar('Processing... Please wait.', 10000000);
        this.isProcessing = true;
        this.firestoreService.createUser(userDetails, 'doctor')
            .then(function (user) { return (_this.resetFormThen(user, 'doctor')); })
            .catch(function (e) { return (_this.resetFormCatch(e)); });
    };
    RegisterComponent.prototype.adminCreate = function () {
        var _this = this;
        delete this.form.value['patientNo'];
        delete this.form.value['doctorNo'];
        delete this.form.value['fullname'];
        var userDetails = this.form.value;
        this.sharedService.snackbar('Processing... Please wait.', 10000000);
        this.isProcessing = true;
        this.firestoreService.createUser(userDetails, 'admin')
            .then(function (user) { return (_this.resetFormThen(user, 'admin')); })
            .catch(function (e) { return (_this.resetFormCatch(e)); });
    };
    // helper functions
    RegisterComponent.prototype.resetFormThen = function (user, option) {
        this.form.reset();
        this.isProcessing = false;
        this.sharedService.closeAllSnackBar();
        option === 'admin'
            ? this.sharedService.snackbar("Successfully created an admin account.")
            : option === 'patient'
                ? this.sharedService.snackbar("Successfully created an account for " + user + ".")
                : option === 'doctor'
                    ? this.sharedService.snackbar("Successfully created an account for Dr. " + user + ".") : 0;
    };
    RegisterComponent.prototype.resetFormCatch = function (e) {
        this.form.reset();
        this.isProcessing = false;
        this.sharedService.closeAllSnackBar();
        this.sharedService.snackbar("Error: " + e.message);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegisterComponent.prototype, "isPatient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegisterComponent.prototype, "isDoctor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RegisterComponent.prototype, "isAdmin", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/entry-admin/dashboard-admin/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/entry-admin/dashboard-admin/register/register.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"],
            _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());

var CustomValidator = /** @class */ (function () {
    function CustomValidator() {
    }
    CustomValidator.containNum = function (control) {
        var CONTAIN_NUMBER_REGEXP = /\d/;
        return CONTAIN_NUMBER_REGEXP.test(control.value) ? { containsNumber: true } : null;
    };
    return CustomValidator;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-admin-dashboard-admin-module.js.map