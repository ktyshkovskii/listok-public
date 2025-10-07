import {
  AuthService
} from "./chunk-2U2SCJGW.js";
import {
  Configuration
} from "./chunk-KYZXPXLL.js";
import {
  Component,
  Router,
  RouterOutlet,
  bootstrapApplication,
  inject,
  map,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-3DPZ4J24.js";

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.authState$.pipe(map((state) => {
    if (state.user) {
      return true;
    } else {
      router.navigate(["/login"]);
      return false;
    }
  }));
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-HTQ4ZGBB.js").then((m) => m.LoginComponent)
  },
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-QFRSL3GE.js").then((m) => m.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: "lists/new",
    loadComponent: () => import("./chunk-3D7D4VTB.js").then((m) => m.ListCreateComponent),
    canActivate: [authGuard]
  },
  {
    path: "lists/:id/edit",
    loadComponent: () => import("./chunk-3D7D4VTB.js").then((m) => m.ListCreateComponent),
    canActivate: [authGuard]
  },
  {
    path: "lists/:id",
    loadComponent: () => import("./chunk-AXICPKBM.js").then((m) => m.ListDetailComponent),
    canActivate: [authGuard]
  },
  {
    path: "**",
    redirectTo: "/dashboard"
  }
];

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000",
  firebase: {
    apiKey: "your-firebase-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
  }
};

// src/main.ts
var apiConfiguration = new Configuration({
  basePath: environment.apiUrl,
  credentials: {
    OAuth2: () => localStorage.getItem("authToken") || void 0
  }
});
var _App = class _App {
};
_App.\u0275fac = function App_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _App)();
};
_App.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["lok-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], encapsulation: 2 });
var App = _App;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "lok-root",
      imports: [RouterOutlet],
      template: "<router-outlet></router-outlet>"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/main.ts", lineNumber: 22 });
})();
bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: Configuration, useValue: apiConfiguration }
  ]
}).catch((err) => console.error(err));
export {
  App
};
//# sourceMappingURL=main.js.map
