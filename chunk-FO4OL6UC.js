import {
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-SKNUA3AO.js";
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
} from "./chunk-IFORJCRU.js";
import "./chunk-YF2OPKEM.js";
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
} from "./chunk-UKVI6I6H.js";
import {
  ActivatedRoute,
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
} from "./chunk-QBW5PNTK.js";

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
function ListCreateComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading list...");
    \u0275\u0275elementEnd()();
  }
}
function ListCreateComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " List name is required ");
    \u0275\u0275elementEnd();
  }
}
function ListCreateComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " List name must be at least 2 characters long ");
    \u0275\u0275elementEnd();
  }
}
function ListCreateComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid URL ");
    \u0275\u0275elementEnd();
  }
}
function ListCreateComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h4");
    \u0275\u0275text(2, "Image Preview:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.imagePreviewUrl, \u0275\u0275sanitizeUrl)("alt", (tmp_2_0 = ctx_r0.listForm.get("name")) == null ? null : tmp_2_0.value);
  }
}
function ListCreateComponent_For_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function ListCreateComponent_For_54_Template_div_click_0_listener() {
      const image_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectImage(image_r3.url));
    })("keydown.enter", function ListCreateComponent_For_54_Template_div_keydown_enter_0_listener() {
      const image_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectImage(image_r3.url));
    });
    \u0275\u0275element(1, "img", 26);
    \u0275\u0275elementStart(2, "span", 27);
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
function ListCreateComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.isEditMode ? "save" : "add");
  }
}
function ListCreateComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 6);
  }
}
var _ListCreateComponent = class _ListCreateComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.listService = inject(ListService);
    this.snackBar = inject(MatSnackBar);
    this.isSubmitting = false;
    this.imagePreviewUrl = "";
    this.isEditMode = false;
    this.listId = null;
    this.loading = false;
    this.listForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      comment: [""],
      img: ["", [Validators.pattern(/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i)]]
    });
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
  }
  ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get("id");
    this.isEditMode = !!this.listId;
    this.setupImagePreview();
    if (this.isEditMode && this.listId) {
      this.loadList();
    }
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
  loadList() {
    if (!this.listId)
      return;
    this.loading = true;
    this.listService.getListById(this.listId).subscribe({
      next: (list) => {
        this.listForm.patchValue({
          name: list.name,
          comment: list.comment || "",
          img: list.img || ""
        });
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading list:", error);
        this.snackBar.open("Error loading list", "Close", { duration: 3e3 });
        this.loading = false;
        this.goBack();
      }
    });
  }
  saveList() {
    if (this.listForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const listData = {
        name: this.listForm.value.name.trim(),
        comment: this.listForm.value.comment?.trim() || void 0,
        img: this.listForm.value.img?.trim() || void 0
      };
      if (this.isEditMode && this.listId) {
        this.listService.updateList(this.listId, listData).subscribe({
          next: (updatedList) => {
            this.snackBar.open("List updated successfully!", "Close", {
              duration: 3e3
            });
            this.router.navigate(["/lists", updatedList.id]);
          },
          error: (error) => {
            console.error("Error updating list:", error);
            this.snackBar.open("Error updating list. Please try again.", "Close", {
              duration: 5e3
            });
            this.isSubmitting = false;
          }
        });
      } else {
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
  }
  goBack() {
    if (this.isEditMode && this.listId) {
      this.router.navigate(["/lists", this.listId]);
    } else {
      this.router.navigate(["/dashboard"]);
    }
  }
};
_ListCreateComponent.\u0275fac = function ListCreateComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCreateComponent)();
};
_ListCreateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCreateComponent, selectors: [["ng-component"]], decls: 62, vars: 21, consts: [[1, "create-list-container"], [1, "create-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "toolbar-title"], [1, "spacer"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["diameter", "20"], [1, "create-content"], [1, "create-card"], [1, "loading-container"], [1, "list-form", 3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "name", "placeholder", "Enter list name", "maxlength", "100"], ["matSuffix", ""], ["align", "end"], ["matInput", "", "formControlName", "comment", "placeholder", "Add a description for your list", "rows", "3", "maxlength", "500"], ["matInput", "", "formControlName", "img", "placeholder", "https://example.com/image.jpg", "type", "url"], [1, "image-preview"], [1, "suggested-images"], [1, "image-grid"], ["tabindex", "0", 1, "image-option", 3, "selected"], [1, "action-buttons"], ["mat-button", "", 3, "click", "disabled"], ["diameter", "50"], [1, "preview-image", 3, "src", "alt"], ["tabindex", "0", 1, "image-option", 3, "click", "keydown.enter"], [3, "src", "alt"], [1, "image-label"]], template: function ListCreateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-toolbar", 1)(2, "button", 2);
    \u0275\u0275listener("click", function ListCreateComponent_Template_button_click_2_listener() {
      return ctx.goBack();
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "span", 4);
    \u0275\u0275elementStart(8, "button", 5);
    \u0275\u0275listener("click", function ListCreateComponent_Template_button_click_8_listener() {
      return ctx.saveList();
    });
    \u0275\u0275conditionalCreate(9, ListCreateComponent_Conditional_9_Template, 2, 0, "mat-icon");
    \u0275\u0275conditionalCreate(10, ListCreateComponent_Conditional_10_Template, 1, 0, "mat-spinner", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 7)(13, "mat-card", 8)(14, "mat-card-header")(15, "mat-card-title");
    \u0275\u0275text(16, "List Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-card-subtitle");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-card-content");
    \u0275\u0275conditionalCreate(20, ListCreateComponent_Conditional_20_Template, 4, 0, "div", 9);
    \u0275\u0275elementStart(21, "form", 10)(22, "mat-form-field", 11)(23, "mat-label");
    \u0275\u0275text(24, "List Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 12);
    \u0275\u0275elementStart(26, "mat-icon", 13);
    \u0275\u0275text(27, "list");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, ListCreateComponent_Conditional_28_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(29, ListCreateComponent_Conditional_29_Template, 2, 0, "mat-error");
    \u0275\u0275elementStart(30, "mat-hint", 14);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "mat-form-field", 11)(33, "mat-label");
    \u0275\u0275text(34, "Description (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "textarea", 15);
    \u0275\u0275text(36, "            ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-icon", 13);
    \u0275\u0275text(38, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-hint", 14);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "mat-form-field", 11)(42, "mat-label");
    \u0275\u0275text(43, "Image URL (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 16);
    \u0275\u0275elementStart(45, "mat-icon", 13);
    \u0275\u0275text(46, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, ListCreateComponent_Conditional_47_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, ListCreateComponent_Conditional_48_Template, 4, 2, "div", 17);
    \u0275\u0275elementStart(49, "div", 18)(50, "h4");
    \u0275\u0275text(51, "Or choose from suggested images:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 19);
    \u0275\u0275repeaterCreate(53, ListCreateComponent_For_54_Template, 4, 5, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(55, "div", 21)(56, "button", 22);
    \u0275\u0275listener("click", function ListCreateComponent_Template_button_click_56_listener() {
      return ctx.goBack();
    });
    \u0275\u0275text(57, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 5);
    \u0275\u0275listener("click", function ListCreateComponent_Template_button_click_58_listener() {
      return ctx.saveList();
    });
    \u0275\u0275conditionalCreate(59, ListCreateComponent_Conditional_59_Template, 2, 1, "mat-icon");
    \u0275\u0275conditionalCreate(60, ListCreateComponent_Conditional_60_Template, 1, 0, "mat-spinner", 6);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit List" : "Create New List");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.listForm.valid || ctx.isSubmitting || ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isSubmitting ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isSubmitting ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? ctx.isEditMode ? "Saving..." : "Creating..." : ctx.isEditMode ? "Save Changes" : "Create List", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.isEditMode ? "Update the information for your list" : "Fill in the information for your new list");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", ctx.loading);
    \u0275\u0275property("formGroup", ctx.listForm);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_9_0 = ctx.listForm.get("name")) == null ? null : tmp_9_0.hasError("required")) ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_10_0 = ctx.listForm.get("name")) == null ? null : tmp_10_0.hasError("minlength")) ? 29 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ((tmp_11_0 = ctx.listForm.get("name")) == null ? null : tmp_11_0.value == null ? null : tmp_11_0.value.length) || 0, "/100");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ((tmp_12_0 = ctx.listForm.get("comment")) == null ? null : tmp_12_0.value == null ? null : tmp_12_0.value.length) || 0, "/500");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_13_0 = ctx.listForm.get("img")) == null ? null : tmp_13_0.hasError("pattern")) ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.imagePreviewUrl ? 48 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.suggestedImages);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.isSubmitting || ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.listForm.valid || ctx.isSubmitting || ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isSubmitting ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isSubmitting ? 60 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? ctx.isEditMode ? "Saving List..." : "Creating List..." : ctx.isEditMode ? "Save Changes" : "Create List", " ");
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
], styles: ["\n\n.create-list-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #fafafa;\n}\n.create-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #333;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.toolbar-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin-left: 16px;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.create-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.create-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-bottom: 24px;\n}\n.list-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 16px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.image-preview[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.image-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.suggested-images[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.suggested-images[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.image-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.image-option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n  border: 2px solid transparent;\n}\n.image-option[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.image-option.selected[_ngcontent-%COMP%] {\n  border-color: #1976d2;\n  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);\n}\n.image-option[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  object-fit: cover;\n}\n.image-label[_ngcontent-%COMP%] {\n  display: block;\n  padding: 8px;\n  font-size: 12px;\n  text-align: center;\n  background-color: white;\n  border-top: 1px solid #eee;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 16px 0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 16px;\n  color: #666;\n}\n.list-form.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .create-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .toolbar-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .image-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: 8px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=list-create.component.css.map */"] });
var ListCreateComponent = _ListCreateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListCreateComponent, [{
    type: Component,
    args: [{ imports: [
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

    <span class="toolbar-title">{{ isEditMode ? 'Edit List' : 'Create New List' }}</span>

    <span class="spacer"></span>

    <button
      mat-raised-button
      color="primary"
      [disabled]="!listForm.valid || isSubmitting || loading"
      (click)="saveList()">
      @if (!isSubmitting) {
        <mat-icon>save</mat-icon>
      }
      @if (isSubmitting) {
        <mat-spinner diameter="20" />
      }
      {{ isSubmitting ? (isEditMode ? 'Saving...' : 'Creating...') : (isEditMode ? 'Save Changes' : 'Create List') }}
    </button>
  </mat-toolbar>

  <div class="create-content">
    <mat-card class="create-card">
      <mat-card-header>
        <mat-card-title>List Details</mat-card-title>
        <mat-card-subtitle>{{ isEditMode ? 'Update the information for your list' : 'Fill in the information for your new list' }}</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        @if (loading) {
          <div class="loading-container">
            <mat-spinner diameter="50" />
            <p>Loading list...</p>
          </div>
        }
        <form [formGroup]="listForm" class="list-form" [class.hidden]="loading">
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
      <button mat-button (click)="goBack()" [disabled]="isSubmitting || loading">
        Cancel
      </button>
      <button
        mat-raised-button
        color="primary"
        [disabled]="!listForm.valid || isSubmitting || loading"
        (click)="saveList()">
        @if (!isSubmitting) {
          <mat-icon>{{ isEditMode ? 'save' : 'add' }}</mat-icon>
        }
        @if (isSubmitting) {
          <mat-spinner diameter="20" />
        }
        {{ isSubmitting ? (isEditMode ? 'Saving List...' : 'Creating List...') : (isEditMode ? 'Save Changes' : 'Create List') }}
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/components/list-create/list-create.component.scss */\n.create-list-container {\n  min-height: 100vh;\n  background-color: #fafafa;\n}\n.create-toolbar {\n  background-color: white;\n  color: #333;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.toolbar-title {\n  font-size: 20px;\n  font-weight: 600;\n  margin-left: 16px;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.create-content {\n  padding: 24px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.create-card {\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  margin-bottom: 24px;\n}\n.list-form {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-top: 16px;\n}\n.full-width {\n  width: 100%;\n}\n.image-preview {\n  margin-top: 16px;\n}\n.image-preview h4 {\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.preview-image {\n  width: 100%;\n  max-width: 400px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.suggested-images {\n  margin-top: 24px;\n}\n.suggested-images h4 {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.image-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.image-option {\n  cursor: pointer;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n  border: 2px solid transparent;\n}\n.image-option:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.image-option.selected {\n  border-color: #1976d2;\n  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);\n}\n.image-option img {\n  width: 100%;\n  height: 100px;\n  object-fit: cover;\n}\n.image-label {\n  display: block;\n  padding: 8px;\n  font-size: 12px;\n  text-align: center;\n  background-color: white;\n  border-top: 1px solid #eee;\n}\n.action-buttons {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding: 16px 0;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.loading-container p {\n  margin-top: 16px;\n  font-size: 16px;\n  color: #666;\n}\n.list-form.hidden {\n  display: none;\n}\n@media (max-width: 768px) {\n  .create-content {\n    padding: 16px;\n  }\n  .toolbar-title {\n    font-size: 18px;\n  }\n  .image-grid {\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: 8px;\n  }\n  .action-buttons {\n    flex-direction: column-reverse;\n  }\n  .action-buttons button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=list-create.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCreateComponent, { className: "ListCreateComponent", filePath: "src/app/components/list-create/list-create.component.ts", lineNumber: 29 });
})();
export {
  ListCreateComponent
};
//# sourceMappingURL=chunk-FO4OL6UC.js.map
