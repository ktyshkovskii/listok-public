import {
  AuthService
} from "./chunk-DTVRW2I7.js";
import {
  Configuration
} from "./chunk-3ZBWVIZK.js";
import {
  CommonModule,
  Component,
  Router,
  RouterOutlet,
  __name,
  bootstrapApplication,
  inject,
  map,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-376M5ZWK.js";

// src/app/guards/auth.guard.ts
var authGuard = /* @__PURE__ */ __name(() => {
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
}, "authGuard");

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "login",
    loadComponent: /* @__PURE__ */ __name(() => import("./chunk-ASQ2JG6J.js").then((m) => m.LoginComponent), "loadComponent")
  },
  {
    path: "dashboard",
    loadComponent: /* @__PURE__ */ __name(() => import("./chunk-TRI6FF5Y.js").then((m) => m.DashboardComponent), "loadComponent"),
    canActivate: [authGuard]
  },
  {
    path: "lists/new",
    loadComponent: /* @__PURE__ */ __name(() => import("./chunk-PGOC6PYL.js").then((m) => m.ListCreateComponent), "loadComponent"),
    canActivate: [authGuard]
  },
  {
    path: "lists/:id",
    loadComponent: /* @__PURE__ */ __name(() => import("./chunk-OKNWNEIX.js").then((m) => m.ListDetailComponent), "loadComponent"),
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
    OAuth2: /* @__PURE__ */ __name(() => localStorage.getItem("authToken") || void 0, "OAuth2")
  }
});
var _App = class _App {
};
__name(_App, "App");
_App.\u0275fac = /* @__PURE__ */ __name(function App_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _App)();
}, "App_Factory");
_App.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: /* @__PURE__ */ __name(function App_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, "App_Template"), dependencies: [CommonModule, RouterOutlet], encapsulation: 2 });
var App = _App;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [CommonModule, RouterOutlet],
      template: `
      <router-outlet></router-outlet>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/main.ts", lineNumber: 26 });
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
