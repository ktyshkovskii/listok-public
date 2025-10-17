import {
  BehaviorSubject,
  Injectable,
  __async,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QBW5PNTK.js";

// src/app/services/auth.service.ts
var _AuthService = class _AuthService {
  constructor() {
    this._authState = new BehaviorSubject({
      user: null,
      loading: false,
      error: null
    });
    this.authState$ = this._authState.asObservable();
  }
  signInWithGoogle() {
    return __async(this, null, function* () {
      this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), { loading: true, error: null }));
      const mockUser = {
        uid: "google-user-123",
        email: "user@gmail.com",
        displayName: "Google User",
        photoURL: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        providerId: "google.com"
      };
      localStorage.setItem("authToken", "google-token-123");
      this._authState.next({ user: mockUser, loading: false, error: null });
    });
  }
  signInWithGitHub() {
    return __async(this, null, function* () {
      this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), { loading: true, error: null }));
      const mockUser = {
        uid: "github-user-123",
        email: "user@github.com",
        displayName: "GitHub User",
        photoURL: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        providerId: "github.com"
      };
      localStorage.setItem("authToken", "github-token-123");
      this._authState.next({ user: mockUser, loading: false, error: null });
    });
  }
  signInWithApple() {
    return __async(this, null, function* () {
      this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), { loading: true, error: null }));
      const mockUser = {
        uid: "apple-user-123",
        email: "user@icloud.com",
        displayName: "Apple User",
        photoURL: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
        providerId: "apple.com"
      };
      localStorage.setItem("authToken", "apple-token-123");
      this._authState.next({ user: mockUser, loading: false, error: null });
    });
  }
  signOut() {
    return __async(this, null, function* () {
      this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), { loading: true }));
      try {
        localStorage.removeItem("authToken");
        this._authState.next({ user: null, loading: false, error: null });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), {
          loading: false,
          error: errorMessage
        }));
      }
    });
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)();
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-XVQ4K3J5.js.map
