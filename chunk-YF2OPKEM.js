import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  Optional,
  SkipSelf,
  __spreadProps,
  __spreadValues,
  delay,
  of,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-QBW5PNTK.js";

// src/generated/api/configuration.ts
var Configuration = class {
  constructor(configurationParameters = {}) {
    this.apiKeys = configurationParameters.apiKeys;
    this.username = configurationParameters.username;
    this.password = configurationParameters.password;
    this.accessToken = configurationParameters.accessToken;
    this.basePath = configurationParameters.basePath;
    this.withCredentials = configurationParameters.withCredentials;
    this.encoder = configurationParameters.encoder;
    if (configurationParameters.encodeParam) {
      this.encodeParam = configurationParameters.encodeParam;
    } else {
      this.encodeParam = (param) => this.defaultEncodeParam(param);
    }
    if (configurationParameters.credentials) {
      this.credentials = configurationParameters.credentials;
    } else {
      this.credentials = {};
    }
    if (!this.credentials["OAuth2"]) {
      this.credentials["OAuth2"] = () => {
        return typeof this.accessToken === "function" ? this.accessToken() : this.accessToken;
      };
    }
  }
  /**
   * Select the correct content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param contentTypes - the array of content types that are available for selection
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderContentType(contentTypes) {
    if (contentTypes.length === 0) {
      return void 0;
    }
    const type = contentTypes.find((x) => this.isJsonMime(x));
    if (type === void 0) {
      return contentTypes[0];
    }
    return type;
  }
  /**
   * Select the correct accept content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param accepts - the array of content types that are available for selection.
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderAccept(accepts) {
    if (accepts.length === 0) {
      return void 0;
    }
    const type = accepts.find((x) => this.isJsonMime(x));
    if (type === void 0) {
      return accepts[0];
    }
    return type;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    const jsonMime = new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i");
    return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === "application/json-patch+json");
  }
  lookupCredential(key) {
    const value = this.credentials[key];
    return typeof value === "function" ? value() : value;
  }
  defaultEncodeParam(param) {
    const value = param.dataFormat === "date-time" && param.value instanceof Date ? param.value.toISOString() : param.value;
    return encodeURIComponent(String(value));
  }
};

// src/generated/api/model/itemStatus.ts
var ItemStatus;
(function(ItemStatus2) {
  ItemStatus2["ToBuy"] = "to_buy";
  ItemStatus2["Bought"] = "bought";
})(ItemStatus || (ItemStatus = {}));

// src/mock/mock-data.ts
var ITEM_APPLES = {
  id: "1-1",
  product: { id: "item-1", name: "Apples", img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg" },
  count: 6,
  groupColor: "#4CAF50",
  status: ItemStatus.ToBuy
};
var ITEM_BANANAS = {
  id: "1-4",
  product: {
    id: "item-8",
    name: "Bananananas",
    img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    comment: "A really looooooooooooong comment"
  },
  count: 6,
  groupColor: "#4CAF50",
  status: ItemStatus.ToBuy
};
var ITEM_BREAD = {
  id: "1-2",
  product: { id: "item-2", name: "Bread", img: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg" },
  count: 2,
  groupColor: "#FF9800",
  status: ItemStatus.Bought
};
var ITEM_MILK = {
  id: "1-3",
  product: {
    id: "item-3",
    name: "Milk",
    img: "https://images.pexels.com/photos/416354/pexels-photo-416354.jpeg",
    comment: "Just a comment"
  },
  count: 1,
  groupColor: "#2196F3",
  status: ItemStatus.ToBuy
};
var ITEM_NOTEBOOKS = {
  id: "2-1",
  product: { id: "item-4", name: "Notebooks", img: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg" },
  count: 3,
  groupColor: "#9C27B0",
  status: ItemStatus.ToBuy
};
var ITEM_PENS = {
  id: "2-2",
  product: { id: "item-5", name: "Pens", img: "https://images.pexels.com/photos/159832/office-supplies-stationery-equipment-159832.jpeg" },
  count: 12,
  groupColor: "#E91E63",
  status: ItemStatus.Bought
};
var ITEM_TILES = {
  id: "3-1",
  product: { id: "item-6", name: "Tiles", img: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg" },
  count: 50,
  groupColor: "#607D8B",
  status: ItemStatus.ToBuy
};
var ITEM_PAINT = {
  id: "3-2",
  product: { id: "item-7", name: "Paint", img: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg" },
  count: 4,
  groupColor: "#795548",
  status: ItemStatus.ToBuy
};
var LIST_GROCERY_SHOPPING = {
  id: "1",
  name: "Grocery Shopping",
  comment: "Weekly grocery list",
  img: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
  items: [ITEM_APPLES, ITEM_BREAD, ITEM_MILK, ITEM_BANANAS]
};
var LIST_OFFICE_SUPPLIES = {
  id: "2",
  name: "Office Supplies",
  comment: "Supplies needed for the home office",
  img: "https://aa-business.co.uk/wp-content/uploads/2019/10/Stationery-Supplies-min-700x553.jpg",
  items: [ITEM_NOTEBOOKS, ITEM_PENS]
};
var LIST_HOME_RENOVATION = {
  id: "3",
  name: "Home Renovation",
  comment: "Materials for bathroom renovation",
  img: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
  items: [ITEM_TILES, ITEM_PAINT]
};
var ALL_ITEMS = [ITEM_APPLES, ITEM_BANANAS, ITEM_BREAD, ITEM_MILK, ITEM_NOTEBOOKS, ITEM_PENS, ITEM_TILES, ITEM_PAINT];
var ALL_LISTS = [LIST_GROCERY_SHOPPING, LIST_OFFICE_SUPPLIES, LIST_HOME_RENOVATION];
var id = function() {
  return Math.random().toString(36).substring(2, 6);
};

// src/generated/api/api/item.service.ts
var _ItemApiService = class _ItemApiService {
  constructor() {
    this.defaultHeaders = new HttpHeaders();
    this.configuration = new Configuration();
  }
  getItem(id2) {
    const item = ALL_ITEMS.find((item2) => item2.id === id2);
    if (item) {
      return of(item);
    } else {
      return throwError(() => ({
        status: 404,
        message: "Item not found"
      }));
    }
  }
  getItems() {
    return of(ALL_ITEMS);
  }
  getListsItems(listId) {
    const items = ALL_LISTS.find((value) => value.id === listId)?.items;
    if (items) {
      return of(items);
    } else {
      return throwError(() => ({
        status: 404,
        message: "List not found"
      }));
    }
  }
  addItemToList(listId, itemFields) {
    const list = ALL_LISTS.find((l) => l.id === listId);
    if (!list) {
      return throwError(() => ({
        status: 404,
        message: "List not found"
      }));
    }
    const newItem = {
      id: id(),
      product: itemFields.product,
      count: itemFields.count || 1,
      groupColor: itemFields.groupColor,
      status: itemFields.status || ItemStatus.ToBuy
    };
    list.items.push(newItem);
    ALL_ITEMS.push(newItem);
    return of(__spreadValues({}, newItem)).pipe(delay(400));
  }
  updateItem(id2, itemData) {
    for (const list of ALL_LISTS) {
      const itemIndex = list.items.findIndex((i) => i.id === id2);
      if (itemIndex !== -1) {
        const data = Object.fromEntries(Object.entries(itemData).filter(([, v]) => v !== void 0));
        const updatedItem = __spreadProps(__spreadValues(__spreadValues({}, list.items[itemIndex]), data), { id: id2 });
        const indexInData = ALL_ITEMS.findIndex((i) => i.id === id2);
        if (indexInData !== -1) {
          ALL_ITEMS[indexInData] = updatedItem;
        }
        list.items[itemIndex] = updatedItem;
        return of(__spreadValues({}, updatedItem)).pipe(delay(400));
      }
    }
    return throwError(() => ({
      status: 404,
      message: "Item not found"
    }));
  }
  deleteItem(id2) {
    for (const list of ALL_LISTS) {
      const itemIndex = list.items.findIndex((i) => i.id === id2);
      if (itemIndex !== -1) {
        const deletedItem = list.items[itemIndex];
        list.items.splice(itemIndex, 1);
        const indexInData = ALL_ITEMS.findIndex((i) => i.id === id2);
        if (indexInData !== -1) {
          ALL_ITEMS.splice(indexInData, 1);
        }
        return of(__spreadValues({}, deletedItem)).pipe(delay(400));
      }
    }
    return throwError(() => ({
      status: 404,
      message: "Item not found"
    }));
  }
};
_ItemApiService.\u0275fac = function ItemApiService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ItemApiService)();
};
_ItemApiService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ItemApiService, factory: _ItemApiService.\u0275fac, providedIn: "root" });
var ItemApiService = _ItemApiService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/generated/api/api/list.service.ts
var _ListApiService = class _ListApiService {
  constructor() {
    this.defaultHeaders = new HttpHeaders();
    this.configuration = new Configuration();
  }
  createList(listData) {
    const newList = {
      id: id(),
      name: listData.name || "",
      comment: listData.comment,
      img: listData.img,
      items: []
    };
    ALL_LISTS.push(newList);
    return of(__spreadValues({}, newList)).pipe(delay(400));
  }
  getList(listId) {
    const list = ALL_LISTS.find((l) => l.id === listId);
    if (list) {
      return of(__spreadValues({}, list)).pipe(delay(400));
    } else {
      return throwError(() => ({
        status: 404,
        message: "Not Found"
      }));
    }
  }
  getLists() {
    return of([...ALL_LISTS]).pipe(delay(500));
  }
  updateList(listId, list) {
    const index = ALL_LISTS.findIndex((l) => l.id === listId);
    if (index === -1) {
      return throwError(() => ({
        status: 404,
        message: "Not Found"
      }));
    }
    const data = Object.fromEntries(Object.entries(list).filter(([, v]) => v !== void 0));
    const updatedList = __spreadProps(__spreadValues(__spreadValues({}, ALL_LISTS[index]), data), { id: listId });
    ALL_LISTS[index] = updatedList;
    return of(__spreadValues({}, updatedList)).pipe(delay(400));
  }
  deleteList(listId) {
    const index = ALL_LISTS.findIndex((l) => l.id === listId);
    if (index === -1) {
      return throwError(() => ({
        status: 404,
        message: "Not Found"
      }));
    }
    const deletedList = ALL_LISTS[index];
    const itemIds = deletedList.items.map((item) => ALL_ITEMS.indexOf(item));
    itemIds.forEach((itemIndex) => ALL_ITEMS.splice(itemIndex, 1));
    ALL_LISTS.splice(index, 1);
    return of(deletedList).pipe(delay(400));
  }
};
_ListApiService.\u0275fac = function ListApiService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListApiService)();
};
_ListApiService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ListApiService, factory: _ListApiService.\u0275fac, providedIn: "root" });
var ListApiService = _ListApiService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/generated/api/encoder.ts
var CustomHttpParameterCodec = class {
  encodeKey(k) {
    return encodeURIComponent(k);
  }
  encodeValue(v) {
    return encodeURIComponent(v);
  }
  decodeKey(k) {
    return decodeURIComponent(k);
  }
  decodeValue(v) {
    return decodeURIComponent(v);
  }
};

// src/generated/api/variables.ts
var BASE_PATH = new InjectionToken("basePath");

// src/generated/api/api/product.service.ts
var _ProductApiService = class _ProductApiService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = "http://localhost:8080/listok/api";
    this.defaultHeaders = new HttpHeaders();
    this.configuration = new Configuration();
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== "string") {
      const firstBasePath = Array.isArray(basePath) ? basePath[0] : void 0;
      if (firstBasePath != void 0) {
        basePath = firstBasePath;
      }
      if (typeof basePath !== "string") {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }
  // @ts-ignore
  addToHttpParams(httpParams, value, key) {
    if (typeof value === "object" && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }
  addToHttpParamsRecursive(httpParams, value, key) {
    if (value == null) {
      return httpParams;
    }
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        value.forEach((elem) => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key, value.toISOString().substring(0, 10));
        } else {
          throw Error("key may not be null if value is Date");
        }
      } else {
        Object.keys(value).forEach((k) => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error("key may not be null if value is not object or array");
    }
    return httpParams;
  }
  createProduct(productFields, observe = "body", reportProgress = false, options) {
    if (productFields === null || productFields === void 0) {
      throw new Error("Required parameter productFields was null or undefined when calling createProduct.");
    }
    let localVarHeaders = this.defaultHeaders;
    let localVarCredential;
    localVarCredential = this.configuration.lookupCredential("OAuth2");
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set("Authorization", "Bearer " + localVarCredential);
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = [
        "application/json",
        "application/problem+json"
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    let localVarHttpContext = options && options.context;
    if (localVarHttpContext === void 0) {
      localVarHttpContext = new HttpContext();
    }
    let localVarTransferCache = options && options.transferCache;
    if (localVarTransferCache === void 0) {
      localVarTransferCache = true;
    }
    const consumes = [
      "application/json"
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/products`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: productFields,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  deleteProduct(productId, observe = "body", reportProgress = false, options) {
    if (productId === null || productId === void 0) {
      throw new Error("Required parameter productId was null or undefined when calling deleteProduct.");
    }
    let localVarHeaders = this.defaultHeaders;
    let localVarCredential;
    localVarCredential = this.configuration.lookupCredential("OAuth2");
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set("Authorization", "Bearer " + localVarCredential);
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = [
        "application/json",
        "application/problem+json"
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    let localVarHttpContext = options && options.context;
    if (localVarHttpContext === void 0) {
      localVarHttpContext = new HttpContext();
    }
    let localVarTransferCache = options && options.transferCache;
    if (localVarTransferCache === void 0) {
      localVarTransferCache = true;
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/products/${this.configuration.encodeParam({ name: "productId", value: productId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid" })}`;
    return this.httpClient.request("delete", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  getProduct(productId, observe = "body", reportProgress = false, options) {
    if (productId === null || productId === void 0) {
      throw new Error("Required parameter productId was null or undefined when calling getProduct.");
    }
    let localVarHeaders = this.defaultHeaders;
    let localVarCredential;
    localVarCredential = this.configuration.lookupCredential("OAuth2");
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set("Authorization", "Bearer " + localVarCredential);
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = [
        "application/json",
        "application/problem+json"
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    let localVarHttpContext = options && options.context;
    if (localVarHttpContext === void 0) {
      localVarHttpContext = new HttpContext();
    }
    let localVarTransferCache = options && options.transferCache;
    if (localVarTransferCache === void 0) {
      localVarTransferCache = true;
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/products/${this.configuration.encodeParam({ name: "productId", value: productId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid" })}`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  getProducts(observe = "body", reportProgress = false, options) {
    let localVarHeaders = this.defaultHeaders;
    let localVarCredential;
    localVarCredential = this.configuration.lookupCredential("OAuth2");
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set("Authorization", "Bearer " + localVarCredential);
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = [
        "application/json",
        "application/problem+json"
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    let localVarHttpContext = options && options.context;
    if (localVarHttpContext === void 0) {
      localVarHttpContext = new HttpContext();
    }
    let localVarTransferCache = options && options.transferCache;
    if (localVarTransferCache === void 0) {
      localVarTransferCache = true;
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/products`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  updateProduct(productId, productFields, observe = "body", reportProgress = false, options) {
    if (productId === null || productId === void 0) {
      throw new Error("Required parameter productId was null or undefined when calling updateProduct.");
    }
    if (productFields === null || productFields === void 0) {
      throw new Error("Required parameter productFields was null or undefined when calling updateProduct.");
    }
    let localVarHeaders = this.defaultHeaders;
    let localVarCredential;
    localVarCredential = this.configuration.lookupCredential("OAuth2");
    if (localVarCredential) {
      localVarHeaders = localVarHeaders.set("Authorization", "Bearer " + localVarCredential);
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = [
        "application/json",
        "application/problem+json"
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    let localVarHttpContext = options && options.context;
    if (localVarHttpContext === void 0) {
      localVarHttpContext = new HttpContext();
    }
    let localVarTransferCache = options && options.transferCache;
    if (localVarTransferCache === void 0) {
      localVarTransferCache = true;
    }
    const consumes = [
      "application/json"
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/products/${this.configuration.encodeParam({ name: "productId", value: productId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: "uuid" })}`;
    return this.httpClient.request("put", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: productFields,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
};
_ProductApiService.\u0275fac = function ProductApiService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProductApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_ProductApiService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductApiService, factory: _ProductApiService.\u0275fac, providedIn: "root" });
var ProductApiService = _ProductApiService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [BASE_PATH]
  }] }, { type: Configuration, decorators: [{
    type: Optional
  }] }], null);
})();

// src/generated/api/api.module.ts
var _ApiModule = class _ApiModule {
  static forRoot(configurationFactory) {
    return {
      ngModule: _ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }]
    };
  }
  constructor(parentModule, http) {
    if (parentModule) {
      throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
    }
    if (!http) {
      throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
    }
  }
};
_ApiModule.\u0275fac = function ApiModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiModule)(\u0275\u0275inject(_ApiModule, 12), \u0275\u0275inject(HttpClient, 8));
};
_ApiModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ApiModule });
_ApiModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var ApiModule = _ApiModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiModule, [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [],
      exports: [],
      providers: []
    }]
  }], () => [{ type: ApiModule, decorators: [{
    type: Optional
  }, {
    type: SkipSelf
  }] }, { type: HttpClient, decorators: [{
    type: Optional
  }] }], null);
})();

export {
  ItemApiService,
  ListApiService,
  Configuration
};
//# sourceMappingURL=chunk-YF2OPKEM.js.map
