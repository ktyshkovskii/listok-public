import {
  AuthService
} from "./chunk-2YIU6XNI.js";
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
  MatIconModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UKVI6I6H.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  Router,
  __async,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QBW5PNTK.js";

// src/app/components/login/login.component.ts
function LoginComponent_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Signing you in...");
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_Conditional_8_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon", 9);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const authState_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(authState_r3.error);
  }
}
function LoginComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 3);
    \u0275\u0275listener("click", function LoginComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signInWithGoogle());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Continue with Google ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function LoginComponent_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signInWithGitHub());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Continue with GitHub ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function LoginComponent_Conditional_8_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signInWithApple());
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "phone_iphone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Continue with Apple ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, LoginComponent_Conditional_8_Conditional_13_Template, 4, 0, "div", 6);
    \u0275\u0275conditionalCreate(14, LoginComponent_Conditional_8_Conditional_14_Template, 5, 1, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const authState_r3 = ctx;
    \u0275\u0275advance();
    \u0275\u0275property("disabled", authState_r3.loading);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", authState_r3.loading);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", authState_r3.loading);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(authState_r3.loading ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(authState_r3.error ? 14 : -1);
  }
}
var _LoginComponent = class _LoginComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.authState$ = this.authService.authState$;
  }
  ngOnInit() {
    this.authState$.subscribe((state) => {
      if (state.user && !state.loading) {
        this.router.navigate(["/dashboard"]);
      }
    });
  }
  signInWithGoogle() {
    return __async(this, null, function* () {
      yield this.authService.signInWithGoogle();
    });
  }
  signInWithGitHub() {
    return __async(this, null, function* () {
      yield this.authService.signInWithGitHub();
    });
  }
  signInWithApple() {
    return __async(this, null, function* () {
      yield this.authService.signInWithApple();
    });
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)();
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["ng-component"]], decls: 10, vars: 3, consts: [[1, "login-container"], [1, "login-card"], [1, "login-buttons"], ["mat-raised-button", "", "color", "primary", 1, "social-button", "google-button", 3, "click", "disabled"], ["mat-raised-button", "", "color", "accent", 1, "social-button", "github-button", 3, "click", "disabled"], ["mat-raised-button", "", 1, "social-button", "apple-button", 3, "click", "disabled"], [1, "loading-spinner"], [1, "error-message"], ["diameter", "30"], ["color", "warn"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Welcome to Listok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-card-subtitle");
    \u0275\u0275text(6, "Sign in to manage your lists");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-card-content");
    \u0275\u0275conditionalCreate(8, LoginComponent_Conditional_8_Template, 15, 5, "div", 2);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance(8);
    \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(9, 1, ctx.authState$)) ? 8 : -1, tmp_0_0);
  }
}, dependencies: [
  CommonModule,
  MatCardModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatButtonModule,
  MatButton,
  MatIconModule,
  MatIcon,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  AsyncPipe
], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.login-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  padding: 24px;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n}\nmat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\nmat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.7;\n}\n.login-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.social-button[_ngcontent-%COMP%] {\n  height: 48px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 8px;\n  text-transform: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.google-button[_ngcontent-%COMP%] {\n  background-color: #4285f4;\n  color: white;\n}\n.github-button[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: white;\n}\n.apple-button[_ngcontent-%COMP%] {\n  background-color: #000;\n  color: white;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  background-color: #ffebee;\n  border-radius: 8px;\n  color: #c62828;\n}\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 20px;\n  }\n  .social-button[_ngcontent-%COMP%] {\n    height: 44px;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule
    ], template: '<div class="login-container">\n  <mat-card class="login-card">\n    <mat-card-header>\n      <mat-card-title>Welcome to Listok</mat-card-title>\n      <mat-card-subtitle>Sign in to manage your lists</mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n      @if ((authState$ | async); as authState) {\n        <div class="login-buttons">\n          <button mat-raised-button color="primary" class="social-button google-button"\n                  [disabled]="authState.loading"\n                  (click)="signInWithGoogle()">\n            <mat-icon>account_circle</mat-icon>\n            Continue with Google\n          </button>\n          <button mat-raised-button color="accent" class="social-button github-button"\n                  [disabled]="authState.loading"\n                  (click)="signInWithGitHub()">\n            <mat-icon>code</mat-icon>\n            Continue with GitHub\n          </button>\n          <button mat-raised-button class="social-button apple-button"\n                  [disabled]="authState.loading"\n                  (click)="signInWithApple()">\n            <mat-icon>phone_iphone</mat-icon>\n            Continue with Apple\n          </button>\n          @if (authState.loading) {\n            <div class="loading-spinner">\n              <mat-spinner diameter="30"/>\n              <p>Signing you in...</p>\n            </div>\n          }\n          @if (authState.error) {\n            <div class="error-message">\n              <mat-icon color="warn">error</mat-icon>\n              <p>{{ authState.error }}</p>\n            </div>\n          }\n        </div>\n      }\n    </mat-card-content>\n  </mat-card>\n</div>\n', styles: ["/* src/app/components/login/login.component.scss */\n.login-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.login-card {\n  max-width: 400px;\n  width: 100%;\n  padding: 24px;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n}\nmat-card-header {\n  text-align: center;\n  margin-bottom: 24px;\n}\nmat-card-title {\n  font-size: 28px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\nmat-card-subtitle {\n  font-size: 16px;\n  opacity: 0.7;\n}\n.login-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.social-button {\n  height: 48px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 8px;\n  text-transform: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.google-button {\n  background-color: #4285f4;\n  color: white;\n}\n.github-button {\n  background-color: #333;\n  color: white;\n}\n.apple-button {\n  background-color: #000;\n  color: white;\n}\n.loading-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  background-color: #ffebee;\n  border-radius: 8px;\n  color: #c62828;\n}\n@media (max-width: 480px) {\n  .login-card {\n    margin: 0;\n    padding: 20px;\n  }\n  .social-button {\n    height: 44px;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/components/login/login.component.ts", lineNumber: 23 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-NE4RK2XJ.js.map
