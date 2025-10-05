import {
  AuthService
} from "./chunk-DTVRW2I7.js";
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
} from "./chunk-SAHT5VQE.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  NgIf,
  Router,
  __async,
  __name,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-376M5ZWK.js";

// src/app/components/login/login.component.ts
function LoginComponent_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Signing you in...");
    \u0275\u0275elementEnd()();
  }
}
__name(LoginComponent_div_8_div_13_Template, "LoginComponent_div_8_div_13_Template");
function LoginComponent_div_8_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon", 12);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const authState_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(authState_r3.error);
  }
}
__name(LoginComponent_div_8_div_14_Template, "LoginComponent_div_8_div_14_Template");
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 4);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function LoginComponent_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signInWithGoogle());
    }, "LoginComponent_div_8_Template_button_click_1_listener"));
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Continue with Google ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function LoginComponent_div_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signInWithGitHub());
    }, "LoginComponent_div_8_Template_button_click_5_listener"));
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Continue with GitHub ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275listener("click", /* @__PURE__ */ __name(function LoginComponent_div_8_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signInWithApple());
    }, "LoginComponent_div_8_Template_button_click_9_listener"));
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "phone_iphone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Continue with Apple ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, LoginComponent_div_8_div_13_Template, 4, 0, "div", 7)(14, LoginComponent_div_8_div_14_Template, 5, 1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const authState_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("disabled", authState_r3.loading);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", authState_r3.loading);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", authState_r3.loading);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", authState_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", authState_r3.error);
  }
}
__name(LoginComponent_div_8_Template, "LoginComponent_div_8_Template");
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
__name(_LoginComponent, "LoginComponent");
_LoginComponent.\u0275fac = /* @__PURE__ */ __name(function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)();
}, "LoginComponent_Factory");
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 10, vars: 3, consts: [[1, "login-container"], [1, "login-card"], ["class", "login-buttons", 4, "ngIf"], [1, "login-buttons"], ["mat-raised-button", "", "color", "primary", 1, "social-button", "google-button", 3, "click", "disabled"], ["mat-raised-button", "", "color", "accent", 1, "social-button", "github-button", 3, "click", "disabled"], ["mat-raised-button", "", 1, "social-button", "apple-button", 3, "click", "disabled"], ["class", "loading-spinner", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "loading-spinner"], ["diameter", "30"], [1, "error-message"], ["color", "warn"]], template: /* @__PURE__ */ __name(function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4, "Welcome to Listok");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-card-subtitle");
    \u0275\u0275text(6, "Sign in to manage your lists");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-card-content");
    \u0275\u0275template(8, LoginComponent_div_8_Template, 15, 5, "div", 2);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 1, ctx.authState$));
  }
}, "LoginComponent_Template"), dependencies: [CommonModule, NgIf, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, MatButtonModule, MatButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, AsyncPipe], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.login-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  padding: 24px;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n}\nmat-card-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\nmat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.7;\n}\n.login-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.social-button[_ngcontent-%COMP%] {\n  height: 48px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 8px;\n  text-transform: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.google-button[_ngcontent-%COMP%] {\n  background-color: #4285f4;\n  color: white;\n}\n.github-button[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: white;\n}\n.apple-button[_ngcontent-%COMP%] {\n  background-color: #000;\n  color: white;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  background-color: #ffebee;\n  border-radius: 8px;\n  color: #c62828;\n}\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 20px;\n  }\n  .social-button[_ngcontent-%COMP%] {\n    height: 44px;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule
    ], template: `
    <div class="login-container">
      <mat-card class="login-card">
        <mat-card-header>
          <mat-card-title>Welcome to Listok</mat-card-title>
          <mat-card-subtitle>Sign in to manage your lists</mat-card-subtitle>
        </mat-card-header>
        
        <mat-card-content>
          <div class="login-buttons" *ngIf="(authState$ | async) as authState">
            <button 
              mat-raised-button 
              color="primary" 
              class="social-button google-button"
              [disabled]="authState.loading"
              (click)="signInWithGoogle()">
              <mat-icon>account_circle</mat-icon>
              Continue with Google
            </button>
            
            <button 
              mat-raised-button 
              color="accent" 
              class="social-button github-button"
              [disabled]="authState.loading"
              (click)="signInWithGitHub()">
              <mat-icon>code</mat-icon>
              Continue with GitHub
            </button>
            
            <button 
              mat-raised-button 
              class="social-button apple-button"
              [disabled]="authState.loading"
              (click)="signInWithApple()">
              <mat-icon>phone_iphone</mat-icon>
              Continue with Apple
            </button>
            
            <div class="loading-spinner" *ngIf="authState.loading">
              <mat-spinner diameter="30"></mat-spinner>
              <p>Signing you in...</p>
            </div>
            
            <div class="error-message" *ngIf="authState.error">
              <mat-icon color="warn">error</mat-icon>
              <p>{{ authState.error }}</p>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:scss;1fffc5c9c87b1f122dd77fe4ff79eaebcd6479f700949448ea1f49ca093a15a5;/home/runner/work/listok-bolt/listok-bolt/src/app/components/login/login.component.ts */\n.login-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.login-card {\n  max-width: 400px;\n  width: 100%;\n  padding: 24px;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n}\nmat-card-header {\n  text-align: center;\n  margin-bottom: 24px;\n}\nmat-card-title {\n  font-size: 28px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\nmat-card-subtitle {\n  font-size: 16px;\n  opacity: 0.7;\n}\n.login-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.social-button {\n  height: 48px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 8px;\n  text-transform: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.google-button {\n  background-color: #4285f4;\n  color: white;\n}\n.github-button {\n  background-color: #333;\n  color: white;\n}\n.apple-button {\n  background-color: #000;\n  color: white;\n}\n.loading-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 20px;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  background-color: #ffebee;\n  border-radius: 8px;\n  color: #c62828;\n}\n@media (max-width: 480px) {\n  .login-card {\n    margin: 0;\n    padding: 20px;\n  }\n  .social-button {\n    height: 44px;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/components/login/login.component.ts", lineNumber: 173 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-ASQ2JG6J.js.map
