import {
  DexieDataBase
} from "./chunk-APQWPJCM.js";
import {
  BehaviorSubject,
  Injectable,
  __async,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JW7K3KUO.js";

// src/app/services/auth.service.ts
var _AuthService = class _AuthService {
  constructor() {
    this.db = inject(DexieDataBase);
    this._authState = new BehaviorSubject({
      user: null,
      loading: false,
      error: null
    });
    this.authState$ = this._authState.asObservable();
    this.db.cloud.currentUser.subscribe((value) => {
      console.group("currentUser");
      console.log(value);
      if (value.email) {
        this._authState.next({
          user: {
            uid: value.userId || "???",
            displayName: value.name || null,
            email: value.email || null,
            photoURL: null
          },
          loading: false,
          error: null
        });
      }
      console.groupEnd();
    });
  }
  login() {
    return __async(this, null, function* () {
      return this.db.cloud.login().then((value) => {
        console.group("login success");
        console.log(value);
        console.groupEnd();
      }, (error) => {
        console.group("login error");
        console.log(error);
        console.groupEnd();
      });
    });
  }
  signInWithGoogle() {
    return __async(this, null, function* () {
      this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), { loading: true, error: null }));
      try {
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), {
          loading: false,
          error: errorMessage
        }));
      }
    });
  }
  signInWithGitHub() {
    return __async(this, null, function* () {
      this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), { loading: true, error: null }));
      try {
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), {
          loading: false,
          error: errorMessage
        }));
      }
    });
  }
  signInWithApple() {
    return __async(this, null, function* () {
      this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), { loading: true, error: null }));
      try {
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), {
          loading: false,
          error: errorMessage
        }));
      }
    });
  }
  logout() {
    return __async(this, null, function* () {
      this._authState.next(__spreadProps(__spreadValues({}, this._authState.value), { loading: true }));
      try {
        yield this.db.cloud.logout();
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
  }], () => [], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-ODBQ47G7.js.map
