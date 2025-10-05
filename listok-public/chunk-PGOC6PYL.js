import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-KJLW2G5Q.js";
import {
  DefaultValueAccessor,
  ErrorStateMatcher,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  ListService,
  MAT_FORM_FIELD,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  MatToolbar,
  MatToolbarModule,
  MaxLengthValidator,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
  _ErrorStateTracker,
  ɵNgNoValidate
} from "./chunk-MBA56NPS.js";
import "./chunk-3ZBWVIZK.js";
import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  ObserversModule,
  Platform,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  coerceBooleanProperty,
  coerceElement,
  coerceNumberProperty,
  getSupportedInputTypes
} from "./chunk-SAHT5VQE.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  RendererFactory2,
  Router,
  Subject,
  ViewEncapsulation,
  __name,
  __publicField,
  auditTime,
  booleanAttribute,
  effect,
  inject,
  isSignal,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-376M5ZWK.js";

// node_modules/@angular/cdk/fesm2022/text-field.mjs
var __CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
};
__name(__CdkTextFieldStyleLoader, "_CdkTextFieldStyleLoader");
__publicField(__CdkTextFieldStyleLoader, "\u0275fac", /* @__PURE__ */ __name(function _CdkTextFieldStyleLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __CdkTextFieldStyleLoader)();
}, "_CdkTextFieldStyleLoader_Factory"));
__publicField(__CdkTextFieldStyleLoader, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: __CdkTextFieldStyleLoader,
  selectors: [["ng-component"]],
  hostAttrs: ["cdk-text-field-style-loader", ""],
  decls: 0,
  vars: 0,
  template: /* @__PURE__ */ __name(function _CdkTextFieldStyleLoader_Template(rf, ctx) {
  }, "_CdkTextFieldStyleLoader_Template"),
  styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var _CdkTextFieldStyleLoader = __CdkTextFieldStyleLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkTextFieldStyleLoader, [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "cdk-text-field-style-loader": ""
      },
      styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"]
    }]
  }], null, null);
})();
var listenerOptions = {
  passive: true
};
var _AutofillMonitor = class _AutofillMonitor {
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _monitoredElements = /* @__PURE__ */ new Map();
  constructor() {
  }
  monitor(elementOrRef) {
    if (!this._platform.isBrowser) {
      return EMPTY;
    }
    this._styleLoader.load(_CdkTextFieldStyleLoader);
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      return info.subject;
    }
    const subject = new Subject();
    const cssClass = "cdk-text-field-autofilled";
    const listener = /* @__PURE__ */ __name((event) => {
      if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: true
        }));
      } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: false
        }));
      }
    }, "listener");
    const unlisten = this._ngZone.runOutsideAngular(() => {
      element.classList.add("cdk-text-field-autofill-monitored");
      return this._renderer.listen(element, "animationstart", listener, listenerOptions);
    });
    this._monitoredElements.set(element, {
      subject,
      unlisten
    });
    return subject;
  }
  stopMonitoring(elementOrRef) {
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      info.unlisten();
      info.subject.complete();
      element.classList.remove("cdk-text-field-autofill-monitored");
      element.classList.remove("cdk-text-field-autofilled");
      this._monitoredElements.delete(element);
    }
  }
  ngOnDestroy() {
    this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
  }
};
__name(_AutofillMonitor, "AutofillMonitor");
__publicField(_AutofillMonitor, "\u0275fac", /* @__PURE__ */ __name(function AutofillMonitor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutofillMonitor)();
}, "AutofillMonitor_Factory"));
__publicField(_AutofillMonitor, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AutofillMonitor,
  factory: _AutofillMonitor.\u0275fac,
  providedIn: "root"
}));
var AutofillMonitor = _AutofillMonitor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutofillMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _CdkAutofill = class _CdkAutofill {
  _elementRef = inject(ElementRef);
  _autofillMonitor = inject(AutofillMonitor);
  /** Emits when the autofill state of the element changes. */
  cdkAutofill = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
    this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
  }
  ngOnDestroy() {
    this._autofillMonitor.stopMonitoring(this._elementRef);
  }
};
__name(_CdkAutofill, "CdkAutofill");
__publicField(_CdkAutofill, "\u0275fac", /* @__PURE__ */ __name(function CdkAutofill_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkAutofill)();
}, "CdkAutofill_Factory"));
__publicField(_CdkAutofill, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkAutofill,
  selectors: [["", "cdkAutofill", ""]],
  outputs: {
    cdkAutofill: "cdkAutofill"
  }
}));
var CdkAutofill = _CdkAutofill;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAutofill, [{
    type: Directive,
    args: [{
      selector: "[cdkAutofill]"
    }]
  }], () => [], {
    cdkAutofill: [{
      type: Output
    }]
  });
})();
var _CdkTextareaAutosize = class _CdkTextareaAutosize {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _resizeEvents = new Subject();
  /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
  _previousValue;
  _initialHeight;
  _destroyed = new Subject();
  _listenerCleanups;
  _minRows;
  _maxRows;
  _enabled = true;
  /**
   * Value of minRows as of last resize. If the minRows has decreased, the
   * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
   * does not have the same problem because it does not affect the textarea's scrollHeight.
   */
  _previousMinRows = -1;
  _textareaElement;
  /** Minimum amount of rows in the textarea. */
  get minRows() {
    return this._minRows;
  }
  set minRows(value) {
    this._minRows = coerceNumberProperty(value);
    this._setMinHeight();
  }
  /** Maximum amount of rows in the textarea. */
  get maxRows() {
    return this._maxRows;
  }
  set maxRows(value) {
    this._maxRows = coerceNumberProperty(value);
    this._setMaxHeight();
  }
  /** Whether autosizing is enabled or not */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    if (this._enabled !== value) {
      (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
    }
  }
  get placeholder() {
    return this._textareaElement.placeholder;
  }
  set placeholder(value) {
    this._cachedPlaceholderHeight = void 0;
    if (value) {
      this._textareaElement.setAttribute("placeholder", value);
    } else {
      this._textareaElement.removeAttribute("placeholder");
    }
    this._cacheTextareaPlaceholderHeight();
  }
  /** Cached height of a textarea with a single row. */
  _cachedLineHeight;
  /** Cached height of a textarea with only the placeholder. */
  _cachedPlaceholderHeight;
  /** Cached scroll top of a textarea */
  _cachedScrollTop;
  /** Used to reference correct document/window */
  _document = inject(DOCUMENT);
  _hasFocus;
  _isViewInited = false;
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_CdkTextFieldStyleLoader);
    this._textareaElement = this._elementRef.nativeElement;
  }
  /** Sets the minimum height of the textarea as determined by minRows. */
  _setMinHeight() {
    const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
    if (minHeight) {
      this._textareaElement.style.minHeight = minHeight;
    }
  }
  /** Sets the maximum height of the textarea as determined by maxRows. */
  _setMaxHeight() {
    const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
    if (maxHeight) {
      this._textareaElement.style.maxHeight = maxHeight;
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();
      this._ngZone.runOutsideAngular(() => {
        this._listenerCleanups = [this._renderer.listen("window", "resize", () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent), this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)];
        this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
          this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
          this.resizeToFitContent(true);
        });
      });
      this._isViewInited = true;
      this.resizeToFitContent(true);
    }
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
    this._resizeEvents.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Cache the height of a single-row textarea if it has not already been cached.
   *
   * We need to know how large a single "row" of a textarea is in order to apply minRows and
   * maxRows. For the initial version, we will assume that the height of a single line in the
   * textarea does not ever change.
   */
  _cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    }
    const textareaClone = this._textareaElement.cloneNode(false);
    const cloneStyles = textareaClone.style;
    textareaClone.rows = 1;
    cloneStyles.position = "absolute";
    cloneStyles.visibility = "hidden";
    cloneStyles.border = "none";
    cloneStyles.padding = "0";
    cloneStyles.height = "";
    cloneStyles.minHeight = "";
    cloneStyles.maxHeight = "";
    cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
    cloneStyles.overflow = "hidden";
    this._textareaElement.parentNode.appendChild(textareaClone);
    this._cachedLineHeight = textareaClone.clientHeight;
    textareaClone.remove();
    this._setMinHeight();
    this._setMaxHeight();
  }
  _measureScrollHeight() {
    const element = this._textareaElement;
    const previousMargin = element.style.marginBottom || "";
    const isFirefox = this._platform.FIREFOX;
    const needsMarginFiller = isFirefox && this._hasFocus;
    const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
    if (needsMarginFiller) {
      element.style.marginBottom = `${element.clientHeight}px`;
    }
    element.classList.add(measuringClass);
    const scrollHeight = element.scrollHeight - 4;
    element.classList.remove(measuringClass);
    if (needsMarginFiller) {
      element.style.marginBottom = previousMargin;
    }
    return scrollHeight;
  }
  _cacheTextareaPlaceholderHeight() {
    if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
      return;
    }
    if (!this.placeholder) {
      this._cachedPlaceholderHeight = 0;
      return;
    }
    const value = this._textareaElement.value;
    this._textareaElement.value = this._textareaElement.placeholder;
    this._cachedPlaceholderHeight = this._measureScrollHeight();
    this._textareaElement.value = value;
  }
  /** Handles `focus` and `blur` events. */
  _handleFocusEvent = /* @__PURE__ */ __name((event) => {
    this._hasFocus = event.type === "focus";
  }, "_handleFocusEvent");
  ngDoCheck() {
    if (this._platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
  /**
   * Resize the textarea to fit its content.
   * @param force Whether to force a height recalculation. By default the height will be
   *    recalculated only if the value changed since the last call.
   */
  resizeToFitContent(force = false) {
    if (!this._enabled) {
      return;
    }
    this._cacheTextareaLineHeight();
    this._cacheTextareaPlaceholderHeight();
    this._cachedScrollTop = this._textareaElement.scrollTop;
    if (!this._cachedLineHeight) {
      return;
    }
    const textarea = this._elementRef.nativeElement;
    const value = textarea.value;
    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }
    const scrollHeight = this._measureScrollHeight();
    const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
    textarea.style.height = `${height}px`;
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this._scrollToCaretPosition(textarea));
      }
    });
    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }
  /**
   * Resets the textarea to its original size
   */
  reset() {
    if (this._initialHeight !== void 0) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }
  _noopInputHandler() {
  }
  /**
   * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
   * prevent it from scrolling to the caret position. We need to re-set the selection
   * in order for it to scroll to the proper position.
   */
  _scrollToCaretPosition(textarea) {
    const {
      selectionStart,
      selectionEnd
    } = textarea;
    if (!this._destroyed.isStopped && this._hasFocus) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
      textarea.scrollTop = this._cachedScrollTop;
    }
  }
};
__name(_CdkTextareaAutosize, "CdkTextareaAutosize");
__publicField(_CdkTextareaAutosize, "\u0275fac", /* @__PURE__ */ __name(function CdkTextareaAutosize_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CdkTextareaAutosize)();
}, "CdkTextareaAutosize_Factory"));
__publicField(_CdkTextareaAutosize, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkTextareaAutosize,
  selectors: [["textarea", "cdkTextareaAutosize", ""]],
  hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
  hostBindings: /* @__PURE__ */ __name(function CdkTextareaAutosize_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("input", /* @__PURE__ */ __name(function CdkTextareaAutosize_input_HostBindingHandler() {
        return ctx._noopInputHandler();
      }, "CdkTextareaAutosize_input_HostBindingHandler"));
    }
  }, "CdkTextareaAutosize_HostBindings"),
  inputs: {
    minRows: [0, "cdkAutosizeMinRows", "minRows"],
    maxRows: [0, "cdkAutosizeMaxRows", "maxRows"],
    enabled: [2, "cdkTextareaAutosize", "enabled", booleanAttribute],
    placeholder: "placeholder"
  },
  exportAs: ["cdkTextareaAutosize"]
}));
var CdkTextareaAutosize = _CdkTextareaAutosize;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextareaAutosize, [{
    type: Directive,
    args: [{
      selector: "textarea[cdkTextareaAutosize]",
      exportAs: "cdkTextareaAutosize",
      host: {
        "class": "cdk-textarea-autosize",
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        "rows": "1",
        "(input)": "_noopInputHandler()"
      }
    }]
  }], () => [], {
    minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }],
    maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }],
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTextareaAutosize",
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }]
  });
})();
var _TextFieldModule = class _TextFieldModule {
};
__name(_TextFieldModule, "TextFieldModule");
__publicField(_TextFieldModule, "\u0275fac", /* @__PURE__ */ __name(function TextFieldModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TextFieldModule)();
}, "TextFieldModule_Factory"));
__publicField(_TextFieldModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _TextFieldModule,
  imports: [CdkAutofill, CdkTextareaAutosize],
  exports: [CdkAutofill, CdkTextareaAutosize]
}));
__publicField(_TextFieldModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({}));
var TextFieldModule = _TextFieldModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAutofill, CdkTextareaAutosize],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/input-value-accessor.mjs
var MAT_INPUT_VALUE_ACCESSOR = new InjectionToken("MAT_INPUT_VALUE_ACCESSOR");

// node_modules/@angular/material/fesm2022/form-field-module.mjs
var _MatFormFieldModule = class _MatFormFieldModule {
};
__name(_MatFormFieldModule, "MatFormFieldModule");
__publicField(_MatFormFieldModule, "\u0275fac", /* @__PURE__ */ __name(function MatFormFieldModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatFormFieldModule)();
}, "MatFormFieldModule_Factory"));
__publicField(_MatFormFieldModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatFormFieldModule,
  imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
  exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
}));
__publicField(_MatFormFieldModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, ObserversModule, MatFormField, MatCommonModule]
}));
var MatFormFieldModule = _MatFormFieldModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
      exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/input.mjs
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
__name(getMatInputUnsupportedTypeError, "getMatInputUnsupportedTypeError");
var MAT_INPUT_INVALID_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];
var MAT_INPUT_CONFIG = new InjectionToken("MAT_INPUT_CONFIG");
var _MatInput = class _MatInput {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  _autofillMonitor = inject(AutofillMonitor);
  _ngZone = inject(NgZone);
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _renderer = inject(Renderer2);
  _uid = inject(_IdGenerator).getId("mat-input-");
  _previousNativeValue;
  _inputValueAccessor;
  _signalBasedValueAccessor;
  _previousPlaceholder;
  _errorStateTracker;
  _config = inject(MAT_INPUT_CONFIG, {
    optional: true
  });
  _cleanupIosKeyup;
  _cleanupWebkitWheel;
  /** Whether the component is being rendered on the server. */
  _isServer;
  /** Whether the component is a native html select. */
  _isNativeSelect;
  /** Whether the component is a textarea. */
  _isTextarea;
  /** Whether the input is inside of a form field. */
  _isInFormField;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  focused = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  stateChanges = new Subject();
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  controlType = "mat-input";
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  autofilled = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  _disabled = false;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
  }
  _id;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  placeholder;
  /**
   * Name of the input.
   * @docs-private
   */
  name;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }
  _required;
  /** Input type of the element. */
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value || "text";
    this._validateType();
    if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
      this._elementRef.nativeElement.type = this._type;
    }
  }
  _type = "text";
  /** An object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  userAriaDescribedBy;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get value() {
    return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
  }
  set value(value) {
    if (value !== this.value) {
      if (this._signalBasedValueAccessor) {
        this._signalBasedValueAccessor.value.set(value);
      } else {
        this._inputValueAccessor.value = value;
      }
      this.stateChanges.next();
    }
  }
  /** Whether the element is readonly. */
  get readonly() {
    return this._readonly;
  }
  set readonly(value) {
    this._readonly = coerceBooleanProperty(value);
  }
  _readonly = false;
  /** Whether the input should remain interactive when it is disabled. */
  disabledInteractive;
  /** Whether the input is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  _neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter((t) => getSupportedInputTypes().has(t));
  constructor() {
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const accessor = inject(MAT_INPUT_VALUE_ACCESSOR, {
      optional: true,
      self: true
    });
    const element = this._elementRef.nativeElement;
    const nodeName = element.nodeName.toLowerCase();
    if (accessor) {
      if (isSignal(accessor.value)) {
        this._signalBasedValueAccessor = accessor;
      } else {
        this._inputValueAccessor = accessor;
      }
    } else {
      this._inputValueAccessor = element;
    }
    this._previousNativeValue = this.value;
    this.id = this.id;
    if (this._platform.IOS) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupIosKeyup = this._renderer.listen(element, "keyup", this._iOSKeyupListener);
      });
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._isServer = !this._platform.isBrowser;
    this._isNativeSelect = nodeName === "select";
    this._isTextarea = nodeName === "textarea";
    this._isInFormField = !!this._formField;
    this.disabledInteractive = this._config?.disabledInteractive || false;
    if (this._isNativeSelect) {
      this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
    }
    if (this._signalBasedValueAccessor) {
      effect(() => {
        this._signalBasedValueAccessor.value();
        this.stateChanges.next();
      });
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((event) => {
        this.autofilled = event.isAutofilled;
        this.stateChanges.next();
      });
    }
  }
  ngOnChanges() {
    this.stateChanges.next();
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    if (this._platform.isBrowser) {
      this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
    this._cleanupIosKeyup?.();
    this._cleanupWebkitWheel?.();
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
      if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
        this.disabled = this.ngControl.disabled;
        this.stateChanges.next();
      }
    }
    this._dirtyCheckNativeValue();
    this._dirtyCheckPlaceholder();
  }
  /** Focuses the input. */
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Refreshes the error state of the input. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Callback for the cases where the focused state of the input changes. */
  _focusChanged(isFocused) {
    if (isFocused === this.focused) {
      return;
    }
    if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
      const element = this._elementRef.nativeElement;
      if (element.type === "number") {
        element.type = "text";
        element.setSelectionRange(0, 0);
        element.type = "number";
      } else {
        element.setSelectionRange(0, 0);
      }
    }
    this.focused = isFocused;
    this.stateChanges.next();
  }
  _onInput() {
  }
  /** Does some manual dirty checking on the native input `value` property. */
  _dirtyCheckNativeValue() {
    const newValue = this._elementRef.nativeElement.value;
    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  /** Does some manual dirty checking on the native input `placeholder` attribute. */
  _dirtyCheckPlaceholder() {
    const placeholder = this._getPlaceholder();
    if (placeholder !== this._previousPlaceholder) {
      const element = this._elementRef.nativeElement;
      this._previousPlaceholder = placeholder;
      placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
    }
  }
  /** Gets the current placeholder of the form field. */
  _getPlaceholder() {
    return this.placeholder || null;
  }
  /** Make sure the input is a supported type. */
  _validateType() {
    if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatInputUnsupportedTypeError(this._type);
    }
  }
  /** Checks whether the input type is one of the types that are never empty. */
  _isNeverEmpty() {
    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  /** Checks whether the input is invalid based on the native validation. */
  _isBadInput() {
    let validity = this._elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get empty() {
    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    if (this._isNativeSelect) {
      const selectElement = this._elementRef.nativeElement;
      const firstOption = selectElement.options[0];
      return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
    } else {
      return this.focused && !this.disabled || !this.empty;
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused) {
      this.focus();
    }
  }
  /** Whether the form control is a native select that is displayed inline. */
  _isInlineSelect() {
    const element = this._elementRef.nativeElement;
    return this._isNativeSelect && (element.multiple || element.size > 1);
  }
  _iOSKeyupListener = /* @__PURE__ */ __name((event) => {
    const el = event.target;
    if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
      el.setSelectionRange(1, 1);
      el.setSelectionRange(0, 0);
    }
  }, "_iOSKeyupListener");
  /** Gets the value to set on the `readonly` attribute. */
  _getReadonlyAttribute() {
    if (this._isNativeSelect) {
      return null;
    }
    if (this.readonly || this.disabled && this.disabledInteractive) {
      return "true";
    }
    return null;
  }
};
__name(_MatInput, "MatInput");
__publicField(_MatInput, "\u0275fac", /* @__PURE__ */ __name(function MatInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatInput)();
}, "MatInput_Factory"));
__publicField(_MatInput, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatInput,
  selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
  hostAttrs: [1, "mat-mdc-input-element"],
  hostVars: 21,
  hostBindings: /* @__PURE__ */ __name(function MatInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focus", /* @__PURE__ */ __name(function MatInput_focus_HostBindingHandler() {
        return ctx._focusChanged(true);
      }, "MatInput_focus_HostBindingHandler"))("blur", /* @__PURE__ */ __name(function MatInput_blur_HostBindingHandler() {
        return ctx._focusChanged(false);
      }, "MatInput_blur_HostBindingHandler"))("input", /* @__PURE__ */ __name(function MatInput_input_HostBindingHandler() {
        return ctx._onInput();
      }, "MatInput_input_HostBindingHandler"));
    }
    if (rf & 2) {
      \u0275\u0275domProperty("id", ctx.id)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
      \u0275\u0275attribute("name", ctx.name || null)("readonly", ctx._getReadonlyAttribute())("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required)("id", ctx.id);
      \u0275\u0275classProp("mat-input-server", ctx._isServer)("mat-mdc-form-field-textarea-control", ctx._isInFormField && ctx._isTextarea)("mat-mdc-form-field-input-control", ctx._isInFormField)("mat-mdc-input-disabled-interactive", ctx.disabledInteractive)("mdc-text-field__input", ctx._isInFormField)("mat-mdc-native-select-inline", ctx._isInlineSelect());
    }
  }, "MatInput_HostBindings"),
  inputs: {
    disabled: "disabled",
    id: "id",
    placeholder: "placeholder",
    name: "name",
    required: "required",
    type: "type",
    errorStateMatcher: "errorStateMatcher",
    userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
    value: "value",
    readonly: "readonly",
    disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
  },
  exportAs: ["matInput"],
  features: [\u0275\u0275ProvidersFeature([{
    provide: MatFormFieldControl,
    useExisting: _MatInput
  }]), \u0275\u0275NgOnChangesFeature]
}));
var MatInput = _MatInput;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInput, [{
    type: Directive,
    args: [{
      selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
      exportAs: "matInput",
      host: {
        "class": "mat-mdc-input-element",
        // The BaseMatInput parent class adds `mat-input-element`, `mat-form-field-control` and
        // `mat-form-field-autofill-control` to the CSS class list, but this should not be added for
        // this MDC equivalent input.
        "[class.mat-input-server]": "_isServer",
        "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
        "[class.mat-mdc-form-field-input-control]": "_isInFormField",
        "[class.mat-mdc-input-disabled-interactive]": "disabledInteractive",
        "[class.mdc-text-field__input]": "_isInFormField",
        "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        "[id]": "id",
        "[disabled]": "disabled && !disabledInteractive",
        "[required]": "required",
        "[attr.name]": "name || null",
        "[attr.readonly]": "_getReadonlyAttribute()",
        "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
        // Only mark the input as invalid for assistive technology if it has a value since the
        // state usually overlaps with `aria-required` when the input is empty and can be redundant.
        "[attr.aria-invalid]": "(empty && required) ? null : errorState",
        "[attr.aria-required]": "required",
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        "[attr.id]": "id",
        "(focus)": "_focusChanged(true)",
        "(blur)": "_focusChanged(false)",
        "(input)": "_onInput()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatInput
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    errorStateMatcher: [{
      type: Input
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    value: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatInputModule = class _MatInputModule {
};
__name(_MatInputModule, "MatInputModule");
__publicField(_MatInputModule, "\u0275fac", /* @__PURE__ */ __name(function MatInputModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatInputModule)();
}, "MatInputModule_Factory"));
__publicField(_MatInputModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatInputModule,
  imports: [MatCommonModule, MatFormFieldModule, MatInput],
  exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
}));
__publicField(_MatInputModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatFormFieldModule, MatFormFieldModule, TextFieldModule, MatCommonModule]
}));
var MatInputModule = _MatInputModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInputModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatFormFieldModule, MatInput],
      exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/components/list-create/list-create.component.ts
function ListCreateComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
__name(ListCreateComponent_mat_icon_9_Template, "ListCreateComponent_mat_icon_9_Template");
function ListCreateComponent_mat_spinner_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 23);
  }
}
__name(ListCreateComponent_mat_spinner_10_Template, "ListCreateComponent_mat_spinner_10_Template");
function ListCreateComponent_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " List name is required ");
    \u0275\u0275elementEnd();
  }
}
__name(ListCreateComponent_mat_error_27_Template, "ListCreateComponent_mat_error_27_Template");
function ListCreateComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " List name must be at least 2 characters long ");
    \u0275\u0275elementEnd();
  }
}
__name(ListCreateComponent_mat_error_28_Template, "ListCreateComponent_mat_error_28_Template");
function ListCreateComponent_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid URL ");
    \u0275\u0275elementEnd();
  }
}
__name(ListCreateComponent_mat_error_46_Template, "ListCreateComponent_mat_error_46_Template");
function ListCreateComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "h4");
    \u0275\u0275text(2, "Image Preview:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.imagePreviewUrl, \u0275\u0275sanitizeUrl)("alt", (tmp_2_0 = ctx_r0.listForm.get("name")) == null ? null : tmp_2_0.value);
  }
}
__name(ListCreateComponent_div_47_Template, "ListCreateComponent_div_47_Template");
function ListCreateComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ListCreateComponent_div_52_Template_div_click_0_listener() {
      const image_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectImage(image_r3.url));
    }, "ListCreateComponent_div_52_Template_div_click_0_listener"));
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const image_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ((tmp_2_0 = ctx_r0.listForm.get("img")) == null ? null : tmp_2_0.value) === image_r3.url);
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r3.url, \u0275\u0275sanitizeUrl)("alt", image_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(image_r3.name);
  }
}
__name(ListCreateComponent_div_52_Template, "ListCreateComponent_div_52_Template");
function ListCreateComponent_mat_icon_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "add");
    \u0275\u0275elementEnd();
  }
}
__name(ListCreateComponent_mat_icon_57_Template, "ListCreateComponent_mat_icon_57_Template");
function ListCreateComponent_mat_spinner_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 23);
  }
}
__name(ListCreateComponent_mat_spinner_58_Template, "ListCreateComponent_mat_spinner_58_Template");
var _ListCreateComponent = class _ListCreateComponent {
  constructor() {
    this.isSubmitting = false;
    this.imagePreviewUrl = "";
    this.suggestedImages = [
      {
        name: "Groceries",
        url: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
      },
      {
        name: "Shopping",
        url: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
      },
      {
        name: "Office Supplies",
        url: "https://aa-business.co.uk/wp-content/uploads/2019/10/Stationery-Supplies-min-700x553.jpg"
      },
      {
        name: "Home & Garden",
        url: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg"
      },
      {
        name: "Books",
        url: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg"
      },
      {
        name: "Travel",
        url: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
      }
    ];
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.listService = inject(ListService);
    this.snackBar = inject(MatSnackBar);
  }
  ngOnInit() {
    this.initializeForm();
    this.setupImagePreview();
  }
  initializeForm() {
    this.listForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      comment: [""],
      img: ["", [Validators.pattern(/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i)]]
    });
  }
  setupImagePreview() {
    this.listForm.get("img")?.valueChanges.subscribe((url) => {
      if (url && this.listForm.get("img")?.valid) {
        this.imagePreviewUrl = url;
      } else {
        this.imagePreviewUrl = "";
      }
    });
  }
  selectImage(url) {
    this.listForm.patchValue({ img: url });
  }
  createList() {
    if (this.listForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const listData = {
        name: this.listForm.value.name.trim(),
        comment: this.listForm.value.comment?.trim() || void 0,
        img: this.listForm.value.img?.trim() || void 0
      };
      this.listService.createList(listData).subscribe({
        next: /* @__PURE__ */ __name((createdList) => {
          this.snackBar.open("List created successfully!", "Close", {
            duration: 3e3
          });
          this.router.navigate(["/lists", createdList.id]);
        }, "next"),
        error: /* @__PURE__ */ __name((error) => {
          console.error("Error creating list:", error);
          this.snackBar.open("Error creating list. Please try again.", "Close", {
            duration: 5e3
          });
          this.isSubmitting = false;
        }, "error")
      });
    }
  }
  goBack() {
    this.router.navigate(["/dashboard"]);
  }
};
__name(_ListCreateComponent, "ListCreateComponent");
_ListCreateComponent.\u0275fac = /* @__PURE__ */ __name(function ListCreateComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCreateComponent)();
}, "ListCreateComponent_Factory");
_ListCreateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCreateComponent, selectors: [["app-list-create"]], decls: 60, vars: 17, consts: [[1, "create-list-container"], [1, "create-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "toolbar-title"], [1, "spacer"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [4, "ngIf"], ["diameter", "20", 4, "ngIf"], [1, "create-content"], [1, "create-card"], [1, "list-form", 3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "name", "placeholder", "Enter list name", "maxlength", "100"], ["matSuffix", ""], ["align", "end"], ["matInput", "", "formControlName", "comment", "placeholder", "Add a description for your list", "rows", "3", "maxlength", "500"], ["matInput", "", "formControlName", "img", "placeholder", "https://example.com/image.jpg", "type", "url"], ["class", "image-preview", 4, "ngIf"], [1, "suggested-images"], [1, "image-grid"], ["class", "image-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "action-buttons"], ["mat-button", "", 3, "click", "disabled"], ["diameter", "20"], [1, "image-preview"], [1, "preview-image", 3, "src", "alt"], [1, "image-option", 3, "click"], [3, "src", "alt"], [1, "image-label"]], template: /* @__PURE__ */ __name(function ListCreateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-toolbar", 1)(2, "button", 2);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ListCreateComponent_Template_button_click_2_listener() {
      return ctx.goBack();
    }, "ListCreateComponent_Template_button_click_2_listener"));
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "Create New List");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "span", 4);
    \u0275\u0275elementStart(8, "button", 5);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ListCreateComponent_Template_button_click_8_listener() {
      return ctx.createList();
    }, "ListCreateComponent_Template_button_click_8_listener"));
    \u0275\u0275template(9, ListCreateComponent_mat_icon_9_Template, 2, 0, "mat-icon", 6)(10, ListCreateComponent_mat_spinner_10_Template, 1, 0, "mat-spinner", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8)(13, "mat-card", 9)(14, "mat-card-header")(15, "mat-card-title");
    \u0275\u0275text(16, "List Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-card-subtitle");
    \u0275\u0275text(18, "Fill in the information for your new list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-card-content")(20, "form", 10)(21, "mat-form-field", 11)(22, "mat-label");
    \u0275\u0275text(23, "List Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 12);
    \u0275\u0275elementStart(25, "mat-icon", 13);
    \u0275\u0275text(26, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ListCreateComponent_mat_error_27_Template, 2, 0, "mat-error", 6)(28, ListCreateComponent_mat_error_28_Template, 2, 0, "mat-error", 6);
    \u0275\u0275elementStart(29, "mat-hint", 14);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 11)(32, "mat-label");
    \u0275\u0275text(33, "Description (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "textarea", 15);
    \u0275\u0275text(35, "                ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-icon", 13);
    \u0275\u0275text(37, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-hint", 14);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "mat-form-field", 11)(41, "mat-label");
    \u0275\u0275text(42, "Image URL (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 16);
    \u0275\u0275elementStart(44, "mat-icon", 13);
    \u0275\u0275text(45, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, ListCreateComponent_mat_error_46_Template, 2, 0, "mat-error", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, ListCreateComponent_div_47_Template, 4, 2, "div", 17);
    \u0275\u0275elementStart(48, "div", 18)(49, "h4");
    \u0275\u0275text(50, "Or choose from suggested images:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 19);
    \u0275\u0275template(52, ListCreateComponent_div_52_Template, 4, 5, "div", 20);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "div", 21)(54, "button", 22);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ListCreateComponent_Template_button_click_54_listener() {
      return ctx.goBack();
    }, "ListCreateComponent_Template_button_click_54_listener"));
    \u0275\u0275text(55, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 5);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ListCreateComponent_Template_button_click_56_listener() {
      return ctx.createList();
    }, "ListCreateComponent_Template_button_click_56_listener"));
    \u0275\u0275template(57, ListCreateComponent_mat_icon_57_Template, 2, 0, "mat-icon", 6)(58, ListCreateComponent_mat_spinner_58_Template, 1, 0, "mat-spinner", 7);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx.listForm.valid || ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Creating..." : "Create List", " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx.listForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx.listForm.get("name")) == null ? null : tmp_5_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx.listForm.get("name")) == null ? null : tmp_6_0.hasError("minlength"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ((tmp_7_0 = ctx.listForm.get("name")) == null ? null : tmp_7_0.value == null ? null : tmp_7_0.value.length) || 0, "/100");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ((tmp_8_0 = ctx.listForm.get("comment")) == null ? null : tmp_8_0.value == null ? null : tmp_8_0.value.length) || 0, "/500");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_9_0 = ctx.listForm.get("img")) == null ? null : tmp_9_0.hasError("pattern"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.imagePreviewUrl);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.suggestedImages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isSubmitting);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.listForm.valid || ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Creating List..." : "Create List", " ");
  }
}, "ListCreateComponent_Template"), dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MaxLengthValidator,
  FormGroupDirective,
  FormControlName,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatButtonModule,
  MatButton,
  MatIconButton,
  MatIconModule,
  MatIcon,
  MatInputModule,
  MatInput,
  MatFormField,
  MatLabel,
  MatHint,
  MatError,
  MatSuffix,
  MatFormFieldModule,
  MatToolbarModule,
  MatToolbar,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressSpinner
], styles: ["\n\n.create-list-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #fafafa;\n}\n.create-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #333;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.toolbar-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin-left: 16px;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.create-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.create-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-bottom: 24px;\n}\n.list-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 16px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.image-preview[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.image-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.suggested-images[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.suggested-images[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.image-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.image-option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n  border: 2px solid transparent;\n}\n.image-option[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.image-option.selected[_ngcontent-%COMP%] {\n  border-color: #1976d2;\n  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);\n}\n.image-option[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  object-fit: cover;\n}\n.image-label[_ngcontent-%COMP%] {\n  display: block;\n  padding: 8px;\n  font-size: 12px;\n  text-align: center;\n  background-color: white;\n  border-top: 1px solid #eee;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 16px 0;\n}\n@media (max-width: 768px) {\n  .create-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .toolbar-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .image-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: 8px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=list-create.component.css.map */"] });
var ListCreateComponent = _ListCreateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListCreateComponent, [{
    type: Component,
    args: [{ selector: "app-list-create", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatToolbarModule,
      MatSnackBarModule,
      MatProgressSpinnerModule
    ], template: `<div class="create-list-container">
    <mat-toolbar class="create-toolbar">
        <button mat-icon-button (click)="goBack()">
            <mat-icon>arrow_back</mat-icon>
        </button>

        <span class="toolbar-title">Create New List</span>

        <span class="spacer"></span>

        <button
                mat-raised-button
                color="primary"
                [disabled]="!listForm.valid || isSubmitting"
                (click)="createList()">
            <mat-icon *ngIf="!isSubmitting">save</mat-icon>
            <mat-spinner *ngIf="isSubmitting" diameter="20"></mat-spinner>
            {{ isSubmitting ? 'Creating...' : 'Create List' }}
        </button>
    </mat-toolbar>

    <div class="create-content">
        <mat-card class="create-card">
            <mat-card-header>
                <mat-card-title>List Details</mat-card-title>
                <mat-card-subtitle>Fill in the information for your new list</mat-card-subtitle>
            </mat-card-header>

            <mat-card-content>
                <form [formGroup]="listForm" class="list-form">
                    <mat-form-field appearance="outline" class="full-width">
                        <mat-label>List Name</mat-label>
                        <input
                                matInput
                                formControlName="name"
                                placeholder="Enter list name"
                                maxlength="100">
                        <mat-icon matSuffix>list</mat-icon>
                        <mat-error *ngIf="listForm.get('name')?.hasError('required')">
                            List name is required
                        </mat-error>
                        <mat-error *ngIf="listForm.get('name')?.hasError('minlength')">
                            List name must be at least 2 characters long
                        </mat-error>
                        <mat-hint align="end">{{ listForm.get('name')?.value?.length || 0 }}/100</mat-hint>
                    </mat-form-field>

                    <mat-form-field appearance="outline" class="full-width">
                        <mat-label>Description (Optional)</mat-label>
                        <textarea
                                matInput
                                formControlName="comment"
                                placeholder="Add a description for your list"
                                rows="3"
                                maxlength="500">
                </textarea>
                        <mat-icon matSuffix>description</mat-icon>
                        <mat-hint align="end">{{ listForm.get('comment')?.value?.length || 0 }}/500</mat-hint>
                    </mat-form-field>

                    <mat-form-field appearance="outline" class="full-width">
                        <mat-label>Image URL (Optional)</mat-label>
                        <input
                                matInput
                                formControlName="img"
                                placeholder="https://example.com/image.jpg"
                                type="url">
                        <mat-icon matSuffix>image</mat-icon>
                        <mat-error *ngIf="listForm.get('img')?.hasError('pattern')">
                            Please enter a valid URL
                        </mat-error>
                    </mat-form-field>

                    <div class="image-preview" *ngIf="imagePreviewUrl">
                        <h4>Image Preview:</h4>
                        <img [src]="imagePreviewUrl" [alt]="listForm.get('name')?.value" class="preview-image">
                    </div>

                    <div class="suggested-images">
                        <h4>Or choose from suggested images:</h4>
                        <div class="image-grid">
                            <div
                                    *ngFor="let image of suggestedImages"
                                    class="image-option"
                                    [class.selected]="listForm.get('img')?.value === image.url"
                                    (click)="selectImage(image.url)">
                                <img [src]="image.url" [alt]="image.name">
                                <span class="image-label">{{ image.name }}</span>
                            </div>
                        </div>
                    </div>
                </form>
            </mat-card-content>
        </mat-card>

        <div class="action-buttons">
            <button mat-button (click)="goBack()" [disabled]="isSubmitting">
                Cancel
            </button>
            <button
                    mat-raised-button
                    color="primary"
                    [disabled]="!listForm.valid || isSubmitting"
                    (click)="createList()">
                <mat-icon *ngIf="!isSubmitting">add</mat-icon>
                <mat-spinner *ngIf="isSubmitting" diameter="20"></mat-spinner>
                {{ isSubmitting ? 'Creating List...' : 'Create List' }}
            </button>
        </div>
    </div>
</div>
`, styles: ["/* src/app/components/list-create/list-create.component.scss */\n.create-list-container {\n  min-height: 100vh;\n  background-color: #fafafa;\n}\n.create-toolbar {\n  background-color: white;\n  color: #333;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.toolbar-title {\n  font-size: 20px;\n  font-weight: 600;\n  margin-left: 16px;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.create-content {\n  padding: 24px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.create-card {\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-bottom: 24px;\n}\n.list-form {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 16px;\n}\n.full-width {\n  width: 100%;\n}\n.image-preview {\n  margin-top: 16px;\n}\n.image-preview h4 {\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.preview-image {\n  width: 100%;\n  max-width: 400px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.suggested-images {\n  margin-top: 24px;\n}\n.suggested-images h4 {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.image-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.image-option {\n  cursor: pointer;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n  border: 2px solid transparent;\n}\n.image-option:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.image-option.selected {\n  border-color: #1976d2;\n  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);\n}\n.image-option img {\n  width: 100%;\n  height: 100px;\n  object-fit: cover;\n}\n.image-label {\n  display: block;\n  padding: 8px;\n  font-size: 12px;\n  text-align: center;\n  background-color: white;\n  border-top: 1px solid #eee;\n}\n.action-buttons {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 16px 0;\n}\n@media (max-width: 768px) {\n  .create-content {\n    padding: 16px;\n  }\n  .toolbar-title {\n    font-size: 18px;\n  }\n  .image-grid {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: 8px;\n  }\n  .action-buttons {\n    flex-direction: column-reverse;\n  }\n  .action-buttons button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=list-create.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCreateComponent, { className: "ListCreateComponent", filePath: "src/app/components/list-create/list-create.component.ts", lineNumber: 33 });
})();
export {
  ListCreateComponent
};
//# sourceMappingURL=chunk-PGOC6PYL.js.map
