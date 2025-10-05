import {
  MatChipsModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-G3BCYBM2.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-KJLW2G5Q.js";
import {
  ListService,
  MatToolbar,
  MatToolbarModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-MBA56NPS.js";
import {
  ItemApiService
} from "./chunk-3ZBWVIZK.js";
import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled
} from "./chunk-SAHT5VQE.js";
import {
  ActivatedRoute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  Injectable,
  InjectionToken,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Output,
  Router,
  RouterLink,
  RouterModule,
  Subject,
  ViewChild,
  ViewEncapsulation,
  __name,
  __publicField,
  booleanAttribute,
  forwardRef,
  inject,
  map,
  numberAttribute,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-376M5ZWK.js";

// node_modules/@angular/material/fesm2022/internal-form-field.mjs
var _c0 = ["mat-internal-form-field", ""];
var _c1 = ["*"];
var __MatInternalFormField = class __MatInternalFormField {
  /** Position of the label relative to the content. */
  labelPosition;
};
__name(__MatInternalFormField, "_MatInternalFormField");
__publicField(__MatInternalFormField, "\u0275fac", /* @__PURE__ */ __name(function _MatInternalFormField_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || __MatInternalFormField)();
}, "_MatInternalFormField_Factory"));
__publicField(__MatInternalFormField, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: __MatInternalFormField,
  selectors: [["div", "mat-internal-form-field", ""]],
  hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
  hostVars: 2,
  hostBindings: /* @__PURE__ */ __name(function _MatInternalFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mdc-form-field--align-end", ctx.labelPosition === "before");
    }
  }, "_MatInternalFormField_HostBindings"),
  inputs: {
    labelPosition: "labelPosition"
  },
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: /* @__PURE__ */ __name(function _MatInternalFormField_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  }, "_MatInternalFormField_Template"),
  styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
}));
var _MatInternalFormField = __MatInternalFormField;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c02 = ["input"];
var _c12 = ["label"];
var _c2 = ["*"];
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: false
  };
}
__name(MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY, "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY");
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var _MatCheckboxChange = class _MatCheckboxChange {
  /** The source checkbox of the event. */
  source;
  /** The new `checked` value of the checkbox. */
  checked;
};
__name(_MatCheckboxChange, "MatCheckboxChange");
var MatCheckboxChange = _MatCheckboxChange;
var defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
var _MatCheckbox = class _MatCheckbox {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _animationsDisabled = _animationsDisabled();
  _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
    optional: true
  });
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  /** Creates the change event that will be emitted by the checkbox. */
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  /** Gets the element on which to add the animation CSS classes. */
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  /** CSS classes to add when transitioning between the different checkbox states. */
  _animationClasses = {
    uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
    uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
    checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
    checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
    indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
    indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
  };
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  ariaLabel = "";
  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  ariaLabelledby = null;
  /** The 'aria-describedby' attribute is read after the element's label and field type. */
  ariaDescribedby;
  /**
   * Users can specify the `aria-expanded` attribute which will be forwarded to the input element
   */
  ariaExpanded;
  /**
   * Users can specify the `aria-controls` attribute which will be forwarded to the input element
   */
  ariaControls;
  /** Users can specify the `aria-owns` attribute which will be forwarded to the input element */
  ariaOwns;
  _uniqueId;
  /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
  id;
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether the checkbox is required. */
  required;
  /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
  labelPosition = "after";
  /** Name value will be applied to the input element if present */
  name = null;
  /** Event emitted when the checkbox's `checked` value changes. */
  change = new EventEmitter();
  /** Event emitted when the checkbox's `indeterminate` value changes. */
  indeterminateChange = new EventEmitter();
  /** The value attribute of the native input element */
  value;
  /** Whether the checkbox has a ripple. */
  disableRipple;
  /** The native `<input type="checkbox">` element */
  _inputElement;
  /** The native `<label>` element */
  _labelElement;
  /** Tabindex for the checkbox. */
  tabIndex;
  // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
  // the lack of type checking previously and assigning random strings.
  /**
   * Theme color of the checkbox. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/checkbox/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether the checkbox should remain interactive when it is disabled. */
  disabledInteractive;
  /**
   * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
   * @docs-private
   */
  _onTouched = /* @__PURE__ */ __name(() => {
  }, "_onTouched");
  _currentAnimationClass = "";
  _currentCheckState = TransitionCheckState.Init;
  _controlValueAccessorChangeFn = /* @__PURE__ */ __name(() => {
  }, "_controlValueAccessorChangeFn");
  _validatorChangeFn = /* @__PURE__ */ __name(() => {
  }, "_validatorChangeFn");
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
    this.disabledInteractive = this._options?.disabledInteractive ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this.indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _checked = false;
  /** Whether the checkbox is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _disabled = false;
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate();
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate();
    this._indeterminate.set(value);
    if (changed) {
      if (value) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(value);
    }
    this._syncIndeterminate(value);
  }
  _indeterminate = signal(false, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : []);
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // Implemented as a part of Validator.
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  // Implemented as a part of Validator.
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate.set(false);
          this.indeterminateChange.emit(false);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationsDisabled) {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
};
__name(_MatCheckbox, "MatCheckbox");
__publicField(_MatCheckbox, "\u0275fac", /* @__PURE__ */ __name(function MatCheckbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCheckbox)();
}, "MatCheckbox_Factory"));
__publicField(_MatCheckbox, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatCheckbox,
  selectors: [["mat-checkbox"]],
  viewQuery: /* @__PURE__ */ __name(function MatCheckbox_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._labelElement = _t.first);
    }
  }, "MatCheckbox_Query"),
  hostAttrs: [1, "mat-mdc-checkbox"],
  hostVars: 16,
  hostBindings: /* @__PURE__ */ __name(function MatCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275domProperty("id", ctx.id);
      \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
      \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
      \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled)("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
    }
  }, "MatCheckbox_HostBindings"),
  inputs: {
    ariaLabel: [0, "aria-label", "ariaLabel"],
    ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
    ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
    ariaControls: [0, "aria-controls", "ariaControls"],
    ariaOwns: [0, "aria-owns", "ariaOwns"],
    id: "id",
    required: [2, "required", "required", booleanAttribute],
    labelPosition: "labelPosition",
    name: "name",
    value: "value",
    disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
    tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
    color: "color",
    disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
    checked: [2, "checked", "checked", booleanAttribute],
    disabled: [2, "disabled", "disabled", booleanAttribute],
    indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
  },
  outputs: {
    change: "change",
    indeterminateChange: "indeterminateChange"
  },
  exportAs: ["matCheckbox"],
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _MatCheckbox),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: _MatCheckbox,
    multi: true
  }]), \u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c2,
  decls: 15,
  vars: 23,
  consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
  template: /* @__PURE__ */ __name(function MatCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 3);
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function MatCheckbox_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._preventBubblingFromLabel($event));
      }, "MatCheckbox_Template_div_click_0_listener"));
      \u0275\u0275elementStart(1, "div", 4, 0)(3, "div", 5);
      \u0275\u0275listener("click", /* @__PURE__ */ __name(function MatCheckbox_Template_div_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onTouchTargetClick());
      }, "MatCheckbox_Template_div_click_3_listener"));
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "input", 6, 1);
      \u0275\u0275listener("blur", /* @__PURE__ */ __name(function MatCheckbox_Template_input_blur_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onBlur());
      }, "MatCheckbox_Template_input_blur_4_listener"))("click", /* @__PURE__ */ __name(function MatCheckbox_Template_input_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onInputClick());
      }, "MatCheckbox_Template_input_click_4_listener"))("change", /* @__PURE__ */ __name(function MatCheckbox_Template_input_change_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx._onInteractionEvent($event));
      }, "MatCheckbox_Template_input_change_4_listener"));
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "div", 7);
      \u0275\u0275elementStart(7, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 9);
      \u0275\u0275element(9, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(10, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "label", 13, 2);
      \u0275\u0275projection(14);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const checkbox_r2 = \u0275\u0275reference(2);
      \u0275\u0275property("labelPosition", ctx.labelPosition);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("mdc-checkbox--selected", ctx.checked);
      \u0275\u0275property("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
      \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
      \u0275\u0275advance(7);
      \u0275\u0275property("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
      \u0275\u0275advance();
      \u0275\u0275property("for", ctx.inputId);
    }
  }, "MatCheckbox_Template"),
  dependencies: [MatRipple, _MatInternalFormField],
  styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n'],
  encapsulation: 2,
  changeDetection: 0
}));
var MatCheckbox = _MatCheckbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatCheckbox),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaExpanded: [{
      type: Input,
      args: [{
        alias: "aria-expanded",
        transform: booleanAttribute
      }]
    }],
    ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }],
    ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: /* @__PURE__ */ __name((value) => value == null ? void 0 : numberAttribute(value), "transform")
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MatCheckboxModule = class _MatCheckboxModule {
};
__name(_MatCheckboxModule, "MatCheckboxModule");
__publicField(_MatCheckboxModule, "\u0275fac", /* @__PURE__ */ __name(function MatCheckboxModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MatCheckboxModule)();
}, "MatCheckboxModule_Factory"));
__publicField(_MatCheckboxModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatCheckboxModule,
  imports: [MatCheckbox, MatCommonModule],
  exports: [MatCheckbox, MatCommonModule]
}));
__publicField(_MatCheckboxModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCheckbox, MatCommonModule, MatCommonModule]
}));
var MatCheckboxModule = _MatCheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox, MatCommonModule],
      exports: [MatCheckbox, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/models/list.model.ts
var ItemStatus;
(function(ItemStatus2) {
  ItemStatus2["ToBuy"] = "to_buy";
  ItemStatus2["Bought"] = "bought";
})(ItemStatus || (ItemStatus = {}));

// src/app/services/item.service.ts
var _ItemService = class _ItemService {
  constructor() {
    this.itemService = inject(ItemApiService);
  }
  createItemInList(listId, item) {
    const apiItem = this.mapItemToItemFields(item);
    return this.itemService.addItemToList(listId, apiItem).pipe(map((value) => this.mapApiItemToItem(value)));
  }
  getItemById(id) {
    return this.itemService.getItem(id).pipe(map((value) => this.mapApiItemToItem(value)));
  }
  updateItem(id, item) {
    const apiItem = this.mapItemToItemFields(item);
    return this.itemService.updateItem(id, apiItem).pipe(map((value) => this.mapApiItemToItem(value)));
  }
  deleteItem(id) {
    return this.itemService.deleteItem(id).pipe(map((value) => this.mapApiItemToItem(value)));
  }
  mapApiItemToItem(apiItem) {
    return {
      id: apiItem.id,
      item: apiItem.product,
      count: apiItem.count,
      color: apiItem.groupColor,
      status: this.mapItemStatusFromApi(apiItem.status)
    };
  }
  mapItemToItemFields(item) {
    return {
      product: item.item,
      count: item.count,
      groupColor: item.color,
      status: this.mapItemStatusToApi(item.status)
    };
  }
  mapItemStatusToApi(status) {
    return status;
  }
  mapItemStatusFromApi(status) {
    return status;
  }
};
__name(_ItemService, "ItemService");
_ItemService.\u0275fac = /* @__PURE__ */ __name(function ItemService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ItemService)();
}, "ItemService_Factory");
_ItemService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ItemService, factory: _ItemService.\u0275fac, providedIn: "root" });
var ItemService = _ItemService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/list-detail/list-detail.component.ts
var _c03 = /* @__PURE__ */ __name(() => ["/items/new"], "_c0");
var _c13 = /* @__PURE__ */ __name((a0) => ({ listId: a0 }), "_c1");
var _c22 = /* @__PURE__ */ __name((a0) => ["/lists", a0, "edit"], "_c2");
function ListDetailComponent_div_0_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.list == null ? null : ctx_r1.list.comment);
  }
}
__name(ListDetailComponent_div_0_p_8_Template, "ListDetailComponent_div_0_p_8_Template");
function ListDetailComponent_div_0_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "img", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.list.img, \u0275\u0275sanitizeUrl)("alt", ctx_r1.list.name);
  }
}
__name(ListDetailComponent_div_0_div_27_div_1_Template, "ListDetailComponent_div_0_div_27_div_1_Template");
function ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 40);
  }
  if (rf & 2) {
    const group_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background-color", group_r3.color);
  }
}
__name(ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_1_Template, "ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_1_Template");
function ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "img", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r5.item.img, \u0275\u0275sanitizeUrl)("alt", item_r5.item.name);
  }
}
__name(ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_div_2_Template, "ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_div_2_Template");
function ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.item.comment);
  }
}
__name(ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_p_6_Template, "ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_p_6_Template");
function ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "mat-checkbox", 42);
    \u0275\u0275listener("change", /* @__PURE__ */ __name(function ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_Template_mat_checkbox_change_1_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.toggleItemStatus(item_r5));
    }, "ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_Template_mat_checkbox_change_1_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_div_2_Template, 2, 2, "div", 43);
    \u0275\u0275elementStart(3, "div", 44)(4, "h3", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_p_6_Template, 2, 1, "p", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 47)(8, "span", 48);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 49)(11, "mat-icon");
    \u0275\u0275text(12, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-menu", null, 1)(15, "button", 50);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_Template_button_click_15_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.editItem(item_r5));
    }, "ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_Template_button_click_15_listener"));
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 14);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_Template_button_click_19_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.deleteItem(item_r5));
    }, "ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_Template_button_click_19_listener"));
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const itemMenu_r6 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("checked", false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.item.img);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.item.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.item.comment);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Quantity: ", item_r5.count);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", itemMenu_r6);
  }
}
__name(ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_Template, "ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_Template");
function ListDetailComponent_div_0_div_27_div_39_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_1_Template, 1, 2, "div", 37);
    \u0275\u0275elementStart(2, "div", 38);
    \u0275\u0275template(3, ListDetailComponent_div_0_div_27_div_39_div_6_div_1_div_3_Template, 23, 6, "div", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", group_r3.color);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r3.items);
  }
}
__name(ListDetailComponent_div_0_div_27_div_39_div_6_div_1_Template, "ListDetailComponent_div_0_div_27_div_39_div_6_div_1_Template");
function ListDetailComponent_div_0_div_27_div_39_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, ListDetailComponent_div_0_div_27_div_39_div_6_div_1_Template, 4, 2, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.itemsToBuyGroups);
  }
}
__name(ListDetailComponent_div_0_div_27_div_39_div_6_Template, "ListDetailComponent_div_0_div_27_div_39_div_6_Template");
function ListDetailComponent_div_0_div_27_div_39_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "mat-icon", 55);
    \u0275\u0275text(2, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No items yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Add your first item to get started.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 56)(8, "mat-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Add First Item ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c03))("queryParams", \u0275\u0275pureFunction1(3, _c13, ctx_r1.list.id));
  }
}
__name(ListDetailComponent_div_0_div_27_div_39_div_7_Template, "ListDetailComponent_div_0_div_27_div_39_div_7_Template");
function ListDetailComponent_div_0_div_27_div_39_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "mat-icon", 55);
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "All items completed!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Great job! You've completed all items in this list.");
    \u0275\u0275elementEnd()();
  }
}
__name(ListDetailComponent_div_0_div_27_div_39_div_8_Template, "ListDetailComponent_div_0_div_27_div_39_div_8_Template");
function ListDetailComponent_div_0_div_27_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "h2");
    \u0275\u0275text(3, "Items to Buy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ListDetailComponent_div_0_div_27_div_39_div_6_Template, 2, 1, "div", 32)(7, ListDetailComponent_div_0_div_27_div_39_div_7_Template, 11, 5, "div", 33)(8, ListDetailComponent_div_0_div_27_div_39_div_8_Template, 7, 0, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.itemsToBuyList.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.itemsToBuyList.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.itemsToBuyList.length === 0 && ctx_r1.itemsBoughtList.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.itemsToBuyList.length === 0 && ctx_r1.itemsBoughtList.length > 0);
  }
}
__name(ListDetailComponent_div_0_div_27_div_39_Template, "ListDetailComponent_div_0_div_27_div_39_Template");
function ListDetailComponent_div_0_div_27_div_40_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 40);
  }
  if (rf & 2) {
    const group_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background-color", group_r7.color);
  }
}
__name(ListDetailComponent_div_0_div_27_div_40_div_7_div_1_Template, "ListDetailComponent_div_0_div_27_div_40_div_7_div_1_Template");
function ListDetailComponent_div_0_div_27_div_40_div_7_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "img", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r9.item.img, \u0275\u0275sanitizeUrl)("alt", item_r9.item.name);
  }
}
__name(ListDetailComponent_div_0_div_27_div_40_div_7_div_3_div_2_Template, "ListDetailComponent_div_0_div_27_div_40_div_7_div_3_div_2_Template");
function ListDetailComponent_div_0_div_27_div_40_div_7_div_3_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r9.item.comment);
  }
}
__name(ListDetailComponent_div_0_div_27_div_40_div_7_div_3_p_6_Template, "ListDetailComponent_div_0_div_27_div_40_div_7_div_3_p_6_Template");
function ListDetailComponent_div_0_div_27_div_40_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "mat-checkbox", 42);
    \u0275\u0275listener("change", /* @__PURE__ */ __name(function ListDetailComponent_div_0_div_27_div_40_div_7_div_3_Template_mat_checkbox_change_1_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleItemStatus(item_r9));
    }, "ListDetailComponent_div_0_div_27_div_40_div_7_div_3_Template_mat_checkbox_change_1_listener"));
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ListDetailComponent_div_0_div_27_div_40_div_7_div_3_div_2_Template, 2, 2, "div", 43);
    \u0275\u0275elementStart(3, "div", 44)(4, "h3", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ListDetailComponent_div_0_div_27_div_40_div_7_div_3_p_6_Template, 2, 1, "p", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 47)(8, "span", 62);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 49)(11, "mat-icon");
    \u0275\u0275text(12, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-menu", null, 1)(15, "button", 50);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ListDetailComponent_div_0_div_27_div_40_div_7_div_3_Template_button_click_15_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.editItem(item_r9));
    }, "ListDetailComponent_div_0_div_27_div_40_div_7_div_3_Template_button_click_15_listener"));
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 14);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ListDetailComponent_div_0_div_27_div_40_div_7_div_3_Template_button_click_19_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.deleteItem(item_r9));
    }, "ListDetailComponent_div_0_div_27_div_40_div_7_div_3_Template_button_click_19_listener"));
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const itemMenu_r10 = \u0275\u0275reference(14);
    \u0275\u0275advance();
    \u0275\u0275property("checked", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r9.item.img);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.item.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r9.item.comment);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Quantity: ", item_r9.count);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", itemMenu_r10);
  }
}
__name(ListDetailComponent_div_0_div_27_div_40_div_7_div_3_Template, "ListDetailComponent_div_0_div_27_div_40_div_7_div_3_Template");
function ListDetailComponent_div_0_div_27_div_40_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, ListDetailComponent_div_0_div_27_div_40_div_7_div_1_Template, 1, 2, "div", 37);
    \u0275\u0275elementStart(2, "div", 38);
    \u0275\u0275template(3, ListDetailComponent_div_0_div_27_div_40_div_7_div_3_Template, 23, 6, "div", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", group_r7.color);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r7.items);
  }
}
__name(ListDetailComponent_div_0_div_27_div_40_div_7_Template, "ListDetailComponent_div_0_div_27_div_40_div_7_Template");
function ListDetailComponent_div_0_div_27_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "h2");
    \u0275\u0275text(3, "Completed Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275template(7, ListDetailComponent_div_0_div_27_div_40_div_7_Template, 4, 2, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.itemsBoughtList.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.itemsBoughtGroups);
  }
}
__name(ListDetailComponent_div_0_div_27_div_40_Template, "ListDetailComponent_div_0_div_27_div_40_Template");
function ListDetailComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, ListDetailComponent_div_0_div_27_div_1_Template, 2, 2, "div", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "mat-card", 20)(4, "mat-card-content")(5, "div", 21)(6, "mat-icon", 22);
    \u0275\u0275text(7, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Total Items");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "mat-card", 20)(13, "mat-card-content")(14, "div", 21)(15, "mat-icon", 23);
    \u0275\u0275text(16, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "To Buy");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "mat-card", 20)(22, "mat-card-content")(23, "div", 21)(24, "mat-icon", 24);
    \u0275\u0275text(25, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h3");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, "Completed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "mat-card", 20)(31, "mat-card-content")(32, "div", 21)(33, "mat-icon", 25);
    \u0275\u0275text(34, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h3");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p");
    \u0275\u0275text(38, "Progress");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(39, ListDetailComponent_div_0_div_27_div_39_Template, 9, 4, "div", 26)(40, ListDetailComponent_div_0_div_27_div_40_Template, 8, 2, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.list.img);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.list.items.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.itemsToBuy);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.itemsBought);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.completionRate, "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.itemsToBuyList.length > 0 || ctx_r1.itemsBoughtList.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.itemsBoughtList.length > 0);
  }
}
__name(ListDetailComponent_div_0_div_27_Template, "ListDetailComponent_div_0_div_27_Template");
function ListDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-toolbar", 5)(2, "button", 6);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ListDetailComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    }, "ListDetailComponent_div_0_Template_button_click_2_listener"));
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7)(6, "h1", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ListDetailComponent_div_0_p_8_Template, 2, 1, "p", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "span", 10);
    \u0275\u0275elementStart(10, "button", 11)(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add Item ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 12)(15, "mat-icon");
    \u0275\u0275text(16, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-menu", null, 0)(19, "button", 13)(20, "mat-icon");
    \u0275\u0275text(21, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Edit List ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 14);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function ListDetailComponent_div_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteList());
    }, "ListDetailComponent_div_0_Template_button_click_23_listener"));
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Delete List ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, ListDetailComponent_div_0_div_27_Template, 41, 7, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listMenu_r11 = \u0275\u0275reference(18);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.list == null ? null : ctx_r1.list.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.list == null ? null : ctx_r1.list.comment);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c03))("queryParams", \u0275\u0275pureFunction1(8, _c13, ctx_r1.list == null ? null : ctx_r1.list.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("matMenuTriggerFor", listMenu_r11);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c22, ctx_r1.list == null ? null : ctx_r1.list.id));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.list);
  }
}
__name(ListDetailComponent_div_0_Template, "ListDetailComponent_div_0_Template");
function ListDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "mat-spinner", 65);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading list details...");
    \u0275\u0275elementEnd()();
  }
}
__name(ListDetailComponent_div_1_Template, "ListDetailComponent_div_1_Template");
var _ListDetailComponent = class _ListDetailComponent {
  constructor() {
    this.list = null;
    this.loading = true;
    this.destroy$ = new Subject();
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.apiItemService = inject(ItemService);
    this.apiListService = inject(ListService);
    this.snackBar = inject(MatSnackBar);
  }
  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (params["id"]) {
        this.loadList(params["id"]);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadList(id) {
    this.loading = true;
    this.apiListService.getListById(id).subscribe({
      next: /* @__PURE__ */ __name((list) => {
        this.list = list;
        this.loading = false;
      }, "next"),
      error: /* @__PURE__ */ __name((error) => {
        console.error("Error loading list:", error);
        this.snackBar.open("Error loading list", "Close", { duration: 3e3 });
        this.loading = false;
      }, "error")
    });
  }
  get itemsToBuy() {
    return this.list?.items.filter((item) => item.status === "to_buy").length || 0;
  }
  get itemsBought() {
    return this.list?.items.filter((item) => item.status === "bought").length || 0;
  }
  get completionRate() {
    if (!this.list || this.list.items.length === 0)
      return 0;
    return Math.round(this.itemsBought / this.list.items.length * 100);
  }
  get itemsToBuyList() {
    return this.sortItemsByColor(this.list?.items.filter((item) => item.status === "to_buy") || []);
  }
  get itemsBoughtList() {
    return this.sortItemsByColor(this.list?.items.filter((item) => item.status === "bought") || []);
  }
  get itemsToBuyGroups() {
    return this.groupItemsByColor(this.itemsToBuyList);
  }
  get itemsBoughtGroups() {
    return this.groupItemsByColor(this.itemsBoughtList);
  }
  sortItemsByColor(items) {
    return items.sort((a, b) => {
      const colorA = a.color || "";
      const colorB = b.color || "";
      if (!colorA && colorB)
        return 1;
      if (colorA && !colorB)
        return -1;
      if (!colorA && !colorB)
        return 0;
      return colorA.localeCompare(colorB);
    });
  }
  groupItemsByColor(items) {
    const groups = [];
    let currentGroup = null;
    items.forEach((item) => {
      const color = item.color || null;
      if (!currentGroup || currentGroup.color !== color) {
        currentGroup = { color, items: [] };
        groups.push(currentGroup);
      }
      currentGroup.items.push(item);
    });
    return groups;
  }
  toggleItemStatus(item) {
    const newStatus = item.status === ItemStatus.Bought ? ItemStatus.ToBuy : ItemStatus.Bought;
    this.apiItemService.updateItem(item.id, { status: newStatus }).subscribe({
      next: /* @__PURE__ */ __name((updatedItem) => {
        if (this.list && updatedItem) {
          const index = this.list.items.findIndex((i) => i.id === item.id);
          if (index !== -1) {
            this.list.items[index] = updatedItem;
          }
        }
        this.snackBar.open(`Item marked as ${item.status === ItemStatus.Bought ? "bought" : "to buy"}`, "Close", { duration: 2e3 });
      }, "next"),
      error: /* @__PURE__ */ __name((error) => {
        console.error("Error updating item:", error);
        this.snackBar.open("Error updating item", "Close", { duration: 3e3 });
      }, "error")
    });
  }
  editItem(item) {
    this.router.navigate(["/items", item.id, "edit"]);
  }
  deleteItem(item) {
    if (confirm(`Are you sure you want to delete "${item.item.name}"?`)) {
      this.apiItemService.deleteItem(item.id).subscribe({
        next: /* @__PURE__ */ __name(() => {
          if (this.list) {
            this.list.items = this.list.items.filter((i) => i.id !== item.id);
          }
          this.snackBar.open("Item deleted successfully", "Close", { duration: 2e3 });
        }, "next"),
        error: /* @__PURE__ */ __name((error) => {
          console.error("Error deleting item:", error);
          this.snackBar.open("Error deleting item", "Close", { duration: 3e3 });
        }, "error")
      });
    }
  }
  deleteList() {
    if (!this.list)
      return;
    if (confirm(`Are you sure you want to delete "${this.list.name}"?`)) {
      this.apiListService.deleteList(this.list.id).subscribe({
        next: /* @__PURE__ */ __name(() => {
          this.snackBar.open("List deleted successfully", "Close", { duration: 2e3 });
          this.router.navigate(["/dashboard"]);
        }, "next"),
        error: /* @__PURE__ */ __name((error) => {
          console.error("Error deleting list:", error);
          this.snackBar.open("Error deleting list", "Close", { duration: 3e3 });
        }, "error")
      });
    }
  }
  goBack() {
    this.router.navigate(["/dashboard"]);
  }
};
__name(_ListDetailComponent, "ListDetailComponent");
_ListDetailComponent.\u0275fac = /* @__PURE__ */ __name(function ListDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListDetailComponent)();
}, "ListDetailComponent_Factory");
_ListDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListDetailComponent, selectors: [["app-list-detail"]], decls: 2, vars: 2, consts: [["listMenu", "matMenu"], ["itemMenu", "matMenu"], ["class", "list-detail-container", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [1, "list-detail-container"], [1, "list-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "list-header-info"], [1, "list-title"], ["class", "list-subtitle", 4, "ngIf"], [1, "spacer"], ["mat-button", "", 3, "routerLink", "queryParams"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 1, "delete-button", 3, "click"], ["class", "list-content", 4, "ngIf"], [1, "list-subtitle"], [1, "list-content"], ["class", "list-hero", 4, "ngIf"], [1, "list-stats"], [1, "stat-card"], [1, "stat-content"], [1, "stat-icon"], [1, "stat-icon", "to-do"], [1, "stat-icon", "done"], [1, "stat-icon", "progress"], ["class", "items-section", 4, "ngIf"], [1, "list-hero"], [1, "list-image", 3, "src", "alt"], [1, "items-section"], [1, "section-header"], [1, "item-count-badge"], ["class", "items-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "items-grid"], ["class", "color-group", 4, "ngFor", "ngForOf"], [1, "color-group"], ["class", "color-bar", 3, "background-color", 4, "ngIf"], [1, "group-items"], ["class", "item-row", 4, "ngFor", "ngForOf"], [1, "color-bar"], [1, "item-row"], [1, "item-checkbox", 3, "change", "checked"], ["class", "item-image", 4, "ngIf"], [1, "item-info"], [1, "item-name"], ["class", "item-comment", 4, "ngIf"], [1, "item-details"], [1, "item-quantity"], ["mat-icon-button", "", 1, "item-menu-button", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "item-image"], [3, "src", "alt"], [1, "item-comment"], [1, "empty-state"], [1, "empty-icon"], ["mat-raised-button", "", "color", "primary", 3, "routerLink", "queryParams"], [1, "item-count-badge", "completed"], ["class", "item-row done", 4, "ngFor", "ngForOf"], [1, "item-row", "done"], [1, "item-name", "bought-text"], ["class", "item-comment bought-text", 4, "ngIf"], [1, "item-quantity", "bought-text"], [1, "item-comment", "bought-text"], [1, "loading-container"], ["diameter", "50"]], template: /* @__PURE__ */ __name(function ListDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ListDetailComponent_div_0_Template, 28, 12, "div", 2)(1, ListDetailComponent_div_1_Template, 4, 0, "div", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
  }
}, "ListDetailComponent_Template"), dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatButtonModule,
  MatButton,
  MatIconButton,
  MatIconModule,
  MatIcon,
  MatChipsModule,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatCheckboxModule,
  MatCheckbox,
  MatToolbarModule,
  MatToolbar,
  RouterModule,
  RouterLink
], styles: ["\n\n.list-detail-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #fafafa;\n}\n.list-toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background-color: white;\n  color: #333;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.list-header-info[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 16px;\n}\n.list-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.list-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.7;\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.list-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.list-hero[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.list-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n}\n.list-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 12px;\n  overflow-x: auto;\n  margin-bottom: 32px;\n  padding-bottom: 8px;\n}\n.list-stats[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.list-stats[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 2px;\n}\n.list-stats[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 2px;\n}\n.list-stats[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  flex: 1 0 auto;\n  min-width: 140px;\n  transition: min-width 0.3s ease;\n}\n.stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #1976d2;\n}\n.stat-icon.to-do[_ngcontent-%COMP%] {\n  color: #f57c00;\n}\n.stat-icon.done[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.stat-icon.progress[_ngcontent-%COMP%] {\n  color: #9c27b0;\n}\n.stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0;\n}\n.stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.7;\n  margin: 0;\n  white-space: nowrap;\n}\n@media (max-width: 480px) {\n  .stat-card[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n  .stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .stat-content[_ngcontent-%COMP%] {\n    gap: 2px;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    font-size: 24px;\n    width: 24px;\n    height: 24px;\n  }\n  .stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.items-section[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0;\n  flex: 1;\n}\n.item-count-badge[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 14px;\n  font-weight: 600;\n  min-width: 24px;\n  text-align: center;\n}\n.item-count-badge.completed[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n.items-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.color-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  position: relative;\n}\n.color-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  background-color: currentColor;\n  border-radius: 4px;\n  flex-shrink: 0;\n  margin-right: 12px;\n}\n.group-items[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background-color: white;\n  border-radius: 12px;\n  border: 1px solid #e0e0e0;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.item-row[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.item-row.done[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  background-color: #f5f5f5;\n}\n.item-row.done[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.bought-text[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #999;\n}\n.item-checkbox[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.item-image[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.item-info[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 0;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.item-comment[_ngcontent-%COMP%] {\n  font-size: 15px;\n  opacity: 0.7;\n  margin: 0;\n}\n.item-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n  justify-content: flex-end;\n}\n.item-quantity[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  white-space: nowrap;\n}\n.item-menu-button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  opacity: 0.3;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  opacity: 0.7;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  gap: 16px;\n}\n.delete-button[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n@media (max-width: 768px) {\n  .list-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .list-stats[_ngcontent-%COMP%] {\n    gap: 8px;\n    margin-bottom: 24px;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .items-grid[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .item-row[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 12px;\n  }\n  .item-details[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 8px;\n  }\n  .item-info[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .item-quantity[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=list-detail.component.css.map */"] });
var ListDetailComponent = _ListDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListDetailComponent, [{
    type: Component,
    args: [{ selector: "app-list-detail", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatChipsModule,
      MatMenuModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      MatToolbarModule,
      RouterModule
    ], template: `    <div class="list-detail-container" *ngIf="!loading">
      <mat-toolbar class="list-toolbar">
        <button mat-icon-button (click)="goBack()">
          <mat-icon>arrow_back</mat-icon>
        </button>
        
        <div class="list-header-info">
          <h1 class="list-title">{{ list?.name }}</h1>
          <p class="list-subtitle" *ngIf="list?.comment">{{ list?.comment }}</p>
        </div>
        
        <span class="spacer"></span>
        
        <button mat-button [routerLink]="['/items/new']" [queryParams]="{listId: list?.id}">
          <mat-icon>add</mat-icon>
          Add Item
        </button>
        
        <button mat-icon-button [matMenuTriggerFor]="listMenu">
          <mat-icon>more_vert</mat-icon>
        </button>
        
        <mat-menu #listMenu="matMenu">
          <button mat-menu-item [routerLink]="['/lists', list?.id, 'edit']">
            <mat-icon>edit</mat-icon>
            Edit List
          </button>
          <button mat-menu-item (click)="deleteList()" class="delete-button">
            <mat-icon>delete</mat-icon>
            Delete List
          </button>
        </mat-menu>
      </mat-toolbar>

      <div class="list-content" *ngIf="list">
        <div class="list-hero" *ngIf="list.img">
          <img [src]="list.img" [alt]="list.name" class="list-image">
        </div>

        <div class="list-stats">
          <mat-card class="stat-card">
            <mat-card-content>
              <div class="stat-content">
                <mat-icon class="stat-icon">assignment</mat-icon>
                <h3>{{ list.items.length }}</h3>
                <p>Total Items</p>
              </div>
            </mat-card-content>
          </mat-card>

          <mat-card class="stat-card">
            <mat-card-content>
              <div class="stat-content">
                <mat-icon class="stat-icon to-do">shopping_cart</mat-icon>
                <h3>{{ itemsToBuy }}</h3>
                <p>To Buy</p>
              </div>
            </mat-card-content>
          </mat-card>

          <mat-card class="stat-card">
            <mat-card-content>
              <div class="stat-content">
                <mat-icon class="stat-icon done">done_all</mat-icon>
                <h3>{{ itemsBought }}</h3>
                <p>Completed</p>
              </div>
            </mat-card-content>
          </mat-card>

          <mat-card class="stat-card">
            <mat-card-content>
              <div class="stat-content">
                <mat-icon class="stat-icon progress">percent</mat-icon>
                <h3>{{ completionRate }}%</h3>
                <p>Progress</p>
              </div>
            </mat-card-content>
          </mat-card>
        </div>

        <!-- Items To Buy Section -->
        <div class="items-section" *ngIf="itemsToBuyList.length > 0 || itemsBoughtList.length === 0">
          <div class="section-header">
            <h2>Items to Buy</h2>
            <span class="item-count-badge">{{ itemsToBuyList.length }}</span>
          </div>

          <div class="items-grid" *ngIf="itemsToBuyList.length > 0">
            <div class="color-group" *ngFor="let group of itemsToBuyGroups">
              <div class="color-bar" *ngIf="group.color" [style.background-color]="group.color"></div>
              <div class="group-items">
                <div class="item-row" *ngFor="let item of group.items">
                  <mat-checkbox
                    [checked]="false"
                    (change)="toggleItemStatus(item)"
                    class="item-checkbox">
                  </mat-checkbox>

                  <div class="item-image" *ngIf="item.item.img">
                    <img [src]="item.item.img" [alt]="item.item.name">
                  </div>

                  <div class="item-info">
                    <h3 class="item-name">{{ item.item.name }}</h3>
                    <p class="item-comment" *ngIf="item.item.comment">{{ item.item.comment }}</p>
                  </div>

                  <div class="item-details">
                    <span class="item-quantity">Quantity: {{ item.count }}</span>
                  </div>

                  <button mat-icon-button [matMenuTriggerFor]="itemMenu" class="item-menu-button">
                    <mat-icon>more_vert</mat-icon>
                  </button>

                  <mat-menu #itemMenu="matMenu">
                    <button mat-menu-item (click)="editItem(item)">
                      <mat-icon>edit</mat-icon>
                      Edit
                    </button>
                    <button mat-menu-item (click)="deleteItem(item)" class="delete-button">
                      <mat-icon>delete</mat-icon>
                      Delete
                    </button>
                  </mat-menu>
                </div>
              </div>
            </div>
          </div>

          <div class="empty-state" *ngIf="itemsToBuyList.length === 0 && itemsBoughtList.length === 0">
            <mat-icon class="empty-icon">assignment</mat-icon>
            <h3>No items yet</h3>
            <p>Add your first item to get started.</p>
            <button mat-raised-button color="primary" [routerLink]="['/items/new']" [queryParams]="{listId: list.id}">
              <mat-icon>add</mat-icon>
              Add First Item
            </button>
          </div>

          <div class="empty-state" *ngIf="itemsToBuyList.length === 0 && itemsBoughtList.length > 0">
            <mat-icon class="empty-icon">done_all</mat-icon>
            <h3>All items completed!</h3>
            <p>Great job! You've completed all items in this list.</p>
          </div>
        </div>

        <!-- Completed Items Section -->
        <div class="items-section" *ngIf="itemsBoughtList.length > 0">
          <div class="section-header">
            <h2>Completed Items</h2>
            <span class="item-count-badge completed">{{ itemsBoughtList.length }}</span>
          </div>

          <div class="items-grid">
            <div class="color-group" *ngFor="let group of itemsBoughtGroups">
              <div class="color-bar" *ngIf="group.color" [style.background-color]="group.color"></div>
              <div class="group-items">
                <div class="item-row done" *ngFor="let item of group.items">
                  <mat-checkbox
                    [checked]="true"
                    (change)="toggleItemStatus(item)"
                    class="item-checkbox">
                  </mat-checkbox>

                  <div class="item-image" *ngIf="item.item.img">
                    <img [src]="item.item.img" [alt]="item.item.name">
                  </div>

                  <div class="item-info">
                    <h3 class="item-name bought-text">{{ item.item.name }}</h3>
                    <p class="item-comment bought-text" *ngIf="item.item.comment">{{ item.item.comment }}</p>
                  </div>

                  <div class="item-details">
                    <span class="item-quantity bought-text">Quantity: {{ item.count }}</span>
                  </div>

                  <button mat-icon-button [matMenuTriggerFor]="itemMenu" class="item-menu-button">
                    <mat-icon>more_vert</mat-icon>
                  </button>

                  <mat-menu #itemMenu="matMenu">
                    <button mat-menu-item (click)="editItem(item)">
                      <mat-icon>edit</mat-icon>
                      Edit
                    </button>
                    <button mat-menu-item (click)="deleteItem(item)" class="delete-button">
                      <mat-icon>delete</mat-icon>
                      Delete
                    </button>
                  </mat-menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="loading-container" *ngIf="loading">
      <mat-spinner diameter="50"></mat-spinner>
      <p>Loading list details...</p>
    </div>
`, styles: ["/* src/app/components/list-detail/list-detail.component.scss */\n.list-detail-container {\n  min-height: 100vh;\n  background-color: #fafafa;\n}\n.list-toolbar {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background-color: white;\n  color: #333;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.list-header-info {\n  flex: 1;\n  margin-left: 16px;\n}\n.list-title {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n.list-subtitle {\n  font-size: 14px;\n  opacity: 0.7;\n  margin: 0;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.list-content {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.list-hero {\n  margin-bottom: 24px;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.list-image {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n}\n.list-stats {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 12px;\n  overflow-x: auto;\n  margin-bottom: 32px;\n  padding-bottom: 8px;\n}\n.list-stats::-webkit-scrollbar {\n  height: 4px;\n}\n.list-stats::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 2px;\n}\n.list-stats::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 2px;\n}\n.list-stats::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.stat-card {\n  border-radius: 8px;\n  flex: 1 0 auto;\n  min-width: 140px;\n  transition: min-width 0.3s ease;\n}\n.stat-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.stat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #1976d2;\n}\n.stat-icon.to-do {\n  color: #f57c00;\n}\n.stat-icon.done {\n  color: #4caf50;\n}\n.stat-icon.progress {\n  color: #9c27b0;\n}\n.stat-content h3 {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0;\n}\n.stat-content p {\n  font-size: 14px;\n  opacity: 0.7;\n  margin: 0;\n  white-space: nowrap;\n}\n@media (max-width: 480px) {\n  .stat-card {\n    min-width: 80px;\n  }\n  .stat-content p {\n    display: none;\n  }\n  .stat-content {\n    gap: 2px;\n  }\n  .stat-icon {\n    font-size: 24px;\n    width: 24px;\n    height: 24px;\n  }\n  .stat-content h3 {\n    font-size: 16px;\n  }\n}\n.items-section {\n  background-color: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.section-header h2 {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0;\n  flex: 1;\n}\n.item-count-badge {\n  background-color: #1976d2;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 14px;\n  font-weight: 600;\n  min-width: 24px;\n  text-align: center;\n}\n.item-count-badge.completed {\n  background-color: #4caf50;\n}\n.items-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.color-group {\n  display: flex;\n  gap: 0;\n  position: relative;\n}\n.color-bar {\n  width: 4px;\n  background-color: currentColor;\n  border-radius: 4px;\n  flex-shrink: 0;\n  margin-right: 12px;\n}\n.group-items {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.item-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  background-color: white;\n  border-radius: 12px;\n  border: 1px solid #e0e0e0;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.item-row:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.item-row.done {\n  opacity: 0.6;\n  background-color: #f5f5f5;\n}\n.item-row.done:hover {\n  transform: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.bought-text {\n  text-decoration: line-through;\n  color: #999;\n}\n.item-checkbox {\n  flex-shrink: 0;\n}\n.item-image {\n  width: 56px;\n  height: 56px;\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.item-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.item-info {\n  flex: 2;\n  min-width: 0;\n}\n.item-name {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.item-comment {\n  font-size: 15px;\n  opacity: 0.7;\n  margin: 0;\n}\n.item-details {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n  justify-content: flex-end;\n}\n.item-quantity {\n  font-size: 14px;\n  color: #666;\n  white-space: nowrap;\n}\n.item-menu-button {\n  flex-shrink: 0;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px;\n}\n.empty-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  opacity: 0.3;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  margin: 0 0 8px 0;\n  font-size: 20px;\n}\n.empty-state p {\n  margin: 0 0 24px 0;\n  opacity: 0.7;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  gap: 16px;\n}\n.delete-button {\n  color: #f44336;\n}\n@media (max-width: 768px) {\n  .list-content {\n    padding: 16px;\n  }\n  .list-stats {\n    gap: 8px;\n    margin-bottom: 24px;\n  }\n  .section-header {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .items-grid {\n    gap: 12px;\n  }\n  .item-row {\n    padding: 12px;\n    gap: 12px;\n  }\n  .item-details {\n    flex-direction: row;\n    gap: 8px;\n  }\n  .item-info {\n    flex: 1;\n  }\n  .item-quantity {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=list-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListDetailComponent, { className: "ListDetailComponent", filePath: "src/app/components/list-detail/list-detail.component.ts", lineNumber: 43 });
})();
export {
  ListDetailComponent
};
//# sourceMappingURL=chunk-OKNWNEIX.js.map
