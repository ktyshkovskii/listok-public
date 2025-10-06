import {
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-WUIUSMQ3.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  ListService,
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatSuffix,
  MatToolbar,
  MatToolbarModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-M4AMQKTQ.js";
import "./chunk-KYZXPXLL.js";
import {
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UNOES5P2.js";
import {
  Component,
  Router,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3DPZ4J24.js";

// src/app/components/list-create/list-create.component.ts
function ListCreateComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function ListCreateComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 6);
  }
}
function ListCreateComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " List name is required ");
    \u0275\u0275elementEnd();
  }
}
function ListCreateComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " List name must be at least 2 characters long ");
    \u0275\u0275elementEnd();
  }
}
function ListCreateComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid URL ");
    \u0275\u0275elementEnd();
  }
}
function ListCreateComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h4");
    \u0275\u0275text(2, "Image Preview:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.imagePreviewUrl, \u0275\u0275sanitizeUrl)("alt", (tmp_2_0 = ctx_r0.listForm.get("name")) == null ? null : tmp_2_0.value);
  }
}
function ListCreateComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function ListCreateComponent_For_53_Template_div_click_0_listener() {
      const image_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectImage(image_r3.url));
    })("keydown.enter", function ListCreateComponent_For_53_Template_div_keydown_enter_0_listener() {
      const image_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectImage(image_r3.url));
    });
    \u0275\u0275element(1, "img", 24);
    \u0275\u0275elementStart(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const image_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ((tmp_10_0 = ctx_r0.listForm.get("img")) == null ? null : tmp_10_0.value) === image_r3.url);
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r3.url, \u0275\u0275sanitizeUrl)("alt", image_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(image_r3.name);
  }
}
function ListCreateComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "add");
    \u0275\u0275elementEnd();
  }
}
function ListCreateComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 6);
  }
}
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
        next: (createdList) => {
          this.snackBar.open("List created successfully!", "Close", {
            duration: 3e3
          });
          this.router.navigate(["/lists", createdList.id]);
        },
        error: (error) => {
          console.error("Error creating list:", error);
          this.snackBar.open("Error creating list. Please try again.", "Close", {
            duration: 5e3
          });
          this.isSubmitting = false;
        }
      });
    }
  }
  goBack() {
    this.router.navigate(["/dashboard"]);
  }
};
_ListCreateComponent.\u0275fac = function ListCreateComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCreateComponent)();
};
_ListCreateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCreateComponent, selectors: [["ng-component"]], decls: 61, vars: 16, consts: [[1, "create-list-container"], [1, "create-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "toolbar-title"], [1, "spacer"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "20"], [1, "create-content"], [1, "create-card"], [1, "list-form", 3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "name", "placeholder", "Enter list name", "maxlength", "100"], ["matSuffix", ""], ["align", "end"], ["matInput", "", "formControlName", "comment", "placeholder", "Add a description for your list", "rows", "3", "maxlength", "500"], ["matInput", "", "formControlName", "img", "placeholder", "https://example.com/image.jpg", "type", "url"], [1, "image-preview"], [1, "suggested-images"], [1, "image-grid"], ["tabindex", "0", 1, "image-option", 3, "selected"], [1, "action-buttons"], ["mat-button", "", 3, "click", "disabled"], [1, "preview-image", 3, "src", "alt"], ["tabindex", "0", 1, "image-option", 3, "click", "keydown.enter"], [3, "src", "alt"], [1, "image-label"]], template: function ListCreateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-toolbar", 1)(2, "button", 2);
    \u0275\u0275listener("click", function ListCreateComponent_Template_button_click_2_listener() {
      return ctx.goBack();
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "Create New List");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "span", 4);
    \u0275\u0275elementStart(8, "button", 5);
    \u0275\u0275listener("click", function ListCreateComponent_Template_button_click_8_listener() {
      return ctx.createList();
    });
    \u0275\u0275conditionalCreate(9, ListCreateComponent_Conditional_9_Template, 2, 0, "mat-icon");
    \u0275\u0275conditionalCreate(10, ListCreateComponent_Conditional_10_Template, 1, 0, "mat-spinner", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7)(13, "mat-card", 8)(14, "mat-card-header")(15, "mat-card-title");
    \u0275\u0275text(16, "List Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-card-subtitle");
    \u0275\u0275text(18, "Fill in the information for your new list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-card-content")(20, "form", 9)(21, "mat-form-field", 10)(22, "mat-label");
    \u0275\u0275text(23, "List Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 11);
    \u0275\u0275elementStart(25, "mat-icon", 12);
    \u0275\u0275text(26, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, ListCreateComponent_Conditional_27_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(28, ListCreateComponent_Conditional_28_Template, 2, 0, "mat-error");
    \u0275\u0275elementStart(29, "mat-hint", 13);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-form-field", 10)(32, "mat-label");
    \u0275\u0275text(33, "Description (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "textarea", 14);
    \u0275\u0275text(35, "            ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-icon", 12);
    \u0275\u0275text(37, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-hint", 13);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "mat-form-field", 10)(41, "mat-label");
    \u0275\u0275text(42, "Image URL (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 15);
    \u0275\u0275elementStart(44, "mat-icon", 12);
    \u0275\u0275text(45, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(46, ListCreateComponent_Conditional_46_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, ListCreateComponent_Conditional_47_Template, 4, 2, "div", 16);
    \u0275\u0275elementStart(48, "div", 17)(49, "h4");
    \u0275\u0275text(50, "Or choose from suggested images:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 18);
    \u0275\u0275repeaterCreate(52, ListCreateComponent_For_53_Template, 4, 5, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(54, "div", 20)(55, "button", 21);
    \u0275\u0275listener("click", function ListCreateComponent_Template_button_click_55_listener() {
      return ctx.goBack();
    });
    \u0275\u0275text(56, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 5);
    \u0275\u0275listener("click", function ListCreateComponent_Template_button_click_57_listener() {
      return ctx.createList();
    });
    \u0275\u0275conditionalCreate(58, ListCreateComponent_Conditional_58_Template, 2, 0, "mat-icon");
    \u0275\u0275conditionalCreate(59, ListCreateComponent_Conditional_59_Template, 1, 0, "mat-spinner", 6);
    \u0275\u0275text(60);
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
    \u0275\u0275conditional(!ctx.isSubmitting ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isSubmitting ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Creating..." : "Create List", " ");
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx.listForm);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_5_0 = ctx.listForm.get("name")) == null ? null : tmp_5_0.hasError("required")) ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx.listForm.get("name")) == null ? null : tmp_6_0.hasError("minlength")) ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ((tmp_7_0 = ctx.listForm.get("name")) == null ? null : tmp_7_0.value == null ? null : tmp_7_0.value.length) || 0, "/100");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ((tmp_8_0 = ctx.listForm.get("comment")) == null ? null : tmp_8_0.value == null ? null : tmp_8_0.value.length) || 0, "/500");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_9_0 = ctx.listForm.get("img")) == null ? null : tmp_9_0.hasError("pattern")) ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.imagePreviewUrl ? 47 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.suggestedImages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.isSubmitting);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.listForm.valid || ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isSubmitting ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isSubmitting ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Creating List..." : "Create List", " ");
  }
}, dependencies: [
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
    args: [{ standalone: true, imports: [
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
      @if (!isSubmitting) {
        <mat-icon>save</mat-icon>
      }
      @if (isSubmitting) {
        <mat-spinner diameter="20"></mat-spinner>
      }
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
            @if (listForm.get('name')?.hasError('required')) {
              <mat-error>
                List name is required
              </mat-error>
            }
            @if (listForm.get('name')?.hasError('minlength')) {
              <mat-error>
                List name must be at least 2 characters long
              </mat-error>
            }
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
            @if (listForm.get('img')?.hasError('pattern')) {
              <mat-error>
                Please enter a valid URL
              </mat-error>
            }
          </mat-form-field>

          @if (imagePreviewUrl) {
            <div class="image-preview">
              <h4>Image Preview:</h4>
              <img [src]="imagePreviewUrl" [alt]="listForm.get('name')?.value" class="preview-image">
            </div>
          }

          <div class="suggested-images">
            <h4>Or choose from suggested images:</h4>
            <div class="image-grid">
              @for (image of suggestedImages; track image) {
                <div
                  class="image-option"
                  [class.selected]="listForm.get('img')?.value === image.url"
                  (click)="selectImage(image.url)"
                  (keydown.enter)="selectImage(image.url)"
                  tabindex="0">
                  <img [src]="image.url" [alt]="image.name">
                  <span class="image-label">{{ image.name }}</span>
                </div>
              }
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
        @if (!isSubmitting) {
          <mat-icon>add</mat-icon>
        }
        @if (isSubmitting) {
          <mat-spinner diameter="20"></mat-spinner>
        }
        {{ isSubmitting ? 'Creating List...' : 'Create List' }}
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/components/list-create/list-create.component.scss */\n.create-list-container {\n  min-height: 100vh;\n  background-color: #fafafa;\n}\n.create-toolbar {\n  background-color: white;\n  color: #333;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.toolbar-title {\n  font-size: 20px;\n  font-weight: 600;\n  margin-left: 16px;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.create-content {\n  padding: 24px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.create-card {\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-bottom: 24px;\n}\n.list-form {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 16px;\n}\n.full-width {\n  width: 100%;\n}\n.image-preview {\n  margin-top: 16px;\n}\n.image-preview h4 {\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.preview-image {\n  width: 100%;\n  max-width: 400px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.suggested-images {\n  margin-top: 24px;\n}\n.suggested-images h4 {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.image-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.image-option {\n  cursor: pointer;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n  border: 2px solid transparent;\n}\n.image-option:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.image-option.selected {\n  border-color: #1976d2;\n  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);\n}\n.image-option img {\n  width: 100%;\n  height: 100px;\n  object-fit: cover;\n}\n.image-label {\n  display: block;\n  padding: 8px;\n  font-size: 12px;\n  text-align: center;\n  background-color: white;\n  border-top: 1px solid #eee;\n}\n.action-buttons {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 16px 0;\n}\n@media (max-width: 768px) {\n  .create-content {\n    padding: 16px;\n  }\n  .toolbar-title {\n    font-size: 18px;\n  }\n  .image-grid {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: 8px;\n  }\n  .action-buttons {\n    flex-direction: column-reverse;\n  }\n  .action-buttons button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=list-create.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCreateComponent, { className: "ListCreateComponent", filePath: "src/app/components/list-create/list-create.component.ts", lineNumber: 30 });
})();
export {
  ListCreateComponent
};
//# sourceMappingURL=chunk-KS6QXR4X.js.map
