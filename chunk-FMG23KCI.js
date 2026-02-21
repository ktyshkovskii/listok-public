import {
  ItemStatus
} from "./chunk-FH5Z5G3K.js";
import {
  BehaviorSubject,
  Injectable,
  Observable,
  Subject,
  Subscription,
  __async,
  __commonJS,
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM,
  catchError,
  combineLatest,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  firstValueFrom,
  from,
  fromEvent,
  inject,
  map,
  merge,
  mergeMap,
  of,
  setClassMetadata,
  share,
  skip,
  startWith,
  switchMap,
  take,
  tap,
  throwError,
  timer,
  ɵɵdefineInjectable
} from "./chunk-6BTNDEJY.js";

// node_modules/dexie/dist/dexie.js
var require_dexie = __commonJS({
  "node_modules/dexie/dist/dexie.js"(exports, module) {
    "use strict";
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.Dexie = factory());
    })(exports, (function() {
      "use strict";
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }
      var __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      function __spreadArray(to2, from3, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from3.length, ar2; i < l; i++) {
          if (ar2 || !(i in from3)) {
            if (!ar2) ar2 = Array.prototype.slice.call(from3, 0, i);
            ar2[i] = from3[i];
          }
        }
        return to2.concat(ar2 || Array.prototype.slice.call(from3));
      }
      var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
      var keys2 = Object.keys;
      var isArray2 = Array.isArray;
      if (typeof Promise !== "undefined" && !_global.Promise) {
        _global.Promise = Promise;
      }
      function extend(obj, extension) {
        if (typeof extension !== "object")
          return obj;
        keys2(extension).forEach(function(key) {
          obj[key] = extension[key];
        });
        return obj;
      }
      var getProto = Object.getPrototypeOf;
      var _hasOwn2 = {}.hasOwnProperty;
      function hasOwn(obj, prop) {
        return _hasOwn2.call(obj, prop);
      }
      function props(proto, extension) {
        if (typeof extension === "function")
          extension = extension(getProto(proto));
        (typeof Reflect === "undefined" ? keys2 : Reflect.ownKeys)(extension).forEach(function(key) {
          setProp(proto, key, extension[key]);
        });
      }
      var defineProperty = Object.defineProperty;
      function setProp(obj, prop, functionOrGetSet, options) {
        defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } : { value: functionOrGetSet, configurable: true, writable: true }, options));
      }
      function derive(Child) {
        return {
          from: function(Parent) {
            Child.prototype = Object.create(Parent.prototype);
            setProp(Child.prototype, "constructor", Child);
            return {
              extend: props.bind(null, Child.prototype)
            };
          }
        };
      }
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      function getPropertyDescriptor(obj, prop) {
        var pd = getOwnPropertyDescriptor(obj, prop);
        var proto;
        return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
      }
      var _slice = [].slice;
      function slice(args2, start, end) {
        return _slice.call(args2, start, end);
      }
      function override(origFunc, overridedFactory) {
        return overridedFactory(origFunc);
      }
      function assert(b) {
        if (!b)
          throw new Error("Assertion Failed");
      }
      function asap$1(fn2) {
        if (_global.setImmediate)
          setImmediate(fn2);
        else
          setTimeout(fn2, 0);
      }
      function arrayToObject(array, extractor) {
        return array.reduce(function(result, item, i) {
          var nameAndValue = extractor(item, i);
          if (nameAndValue)
            result[nameAndValue[0]] = nameAndValue[1];
          return result;
        }, {});
      }
      function getByKeyPath2(obj, keyPath) {
        if (typeof keyPath === "string" && hasOwn(obj, keyPath))
          return obj[keyPath];
        if (!keyPath)
          return obj;
        if (typeof keyPath !== "string") {
          var rv = [];
          for (var i = 0, l = keyPath.length; i < l; ++i) {
            var val = getByKeyPath2(obj, keyPath[i]);
            rv.push(val);
          }
          return rv;
        }
        var period = keyPath.indexOf(".");
        if (period !== -1) {
          var innerObj = obj[keyPath.substr(0, period)];
          return innerObj == null ? void 0 : getByKeyPath2(innerObj, keyPath.substr(period + 1));
        }
        return void 0;
      }
      function setByKeyPath(obj, keyPath, value) {
        if (!obj || keyPath === void 0)
          return;
        if ("isFrozen" in Object && Object.isFrozen(obj))
          return;
        if (typeof keyPath !== "string" && "length" in keyPath) {
          assert(typeof value !== "string" && "length" in value);
          for (var i = 0, l = keyPath.length; i < l; ++i) {
            setByKeyPath(obj, keyPath[i], value[i]);
          }
        } else {
          var period = keyPath.indexOf(".");
          if (period !== -1) {
            var currentKeyPath = keyPath.substr(0, period);
            var remainingKeyPath = keyPath.substr(period + 1);
            if (remainingKeyPath === "")
              if (value === void 0) {
                if (isArray2(obj) && !isNaN(parseInt(currentKeyPath)))
                  obj.splice(currentKeyPath, 1);
                else
                  delete obj[currentKeyPath];
              } else
                obj[currentKeyPath] = value;
            else {
              var innerObj = obj[currentKeyPath];
              if (!innerObj || !hasOwn(obj, currentKeyPath))
                innerObj = obj[currentKeyPath] = {};
              setByKeyPath(innerObj, remainingKeyPath, value);
            }
          } else {
            if (value === void 0) {
              if (isArray2(obj) && !isNaN(parseInt(keyPath)))
                obj.splice(keyPath, 1);
              else
                delete obj[keyPath];
            } else
              obj[keyPath] = value;
          }
        }
      }
      function delByKeyPath(obj, keyPath) {
        if (typeof keyPath === "string")
          setByKeyPath(obj, keyPath, void 0);
        else if ("length" in keyPath)
          [].map.call(keyPath, function(kp) {
            setByKeyPath(obj, kp, void 0);
          });
      }
      function shallowClone(obj) {
        var rv = {};
        for (var m in obj) {
          if (hasOwn(obj, m))
            rv[m] = obj[m];
        }
        return rv;
      }
      var concat = [].concat;
      function flatten(a) {
        return concat.apply([], a);
      }
      var intrinsicTypeNames = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(function(num) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + num + "Array";
        });
      }))).filter(function(t) {
        return _global[t];
      });
      var intrinsicTypes = new Set(intrinsicTypeNames.map(function(t) {
        return _global[t];
      }));
      function cloneSimpleObjectTree(o) {
        var rv = {};
        for (var k in o)
          if (hasOwn(o, k)) {
            var v = o[k];
            rv[k] = !v || typeof v !== "object" || intrinsicTypes.has(v.constructor) ? v : cloneSimpleObjectTree(v);
          }
        return rv;
      }
      function objectIsEmpty(o) {
        for (var k in o)
          if (hasOwn(o, k))
            return false;
        return true;
      }
      var circularRefs = null;
      function deepClone(any2) {
        circularRefs = /* @__PURE__ */ new WeakMap();
        var rv = innerDeepClone(any2);
        circularRefs = null;
        return rv;
      }
      function innerDeepClone(x) {
        if (!x || typeof x !== "object")
          return x;
        var rv = circularRefs.get(x);
        if (rv)
          return rv;
        if (isArray2(x)) {
          rv = [];
          circularRefs.set(x, rv);
          for (var i = 0, l = x.length; i < l; ++i) {
            rv.push(innerDeepClone(x[i]));
          }
        } else if (intrinsicTypes.has(x.constructor)) {
          rv = x;
        } else {
          var proto = getProto(x);
          rv = proto === Object.prototype ? {} : Object.create(proto);
          circularRefs.set(x, rv);
          for (var prop in x) {
            if (hasOwn(x, prop)) {
              rv[prop] = innerDeepClone(x[prop]);
            }
          }
        }
        return rv;
      }
      var toString = {}.toString;
      function toStringTag(o) {
        return toString.call(o).slice(8, -1);
      }
      var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
      var getIteratorOf = typeof iteratorSymbol === "symbol" ? function(x) {
        var i;
        return x != null && (i = x[iteratorSymbol]) && i.apply(x);
      } : function() {
        return null;
      };
      function delArrayItem(a, x) {
        var i = a.indexOf(x);
        if (i >= 0)
          a.splice(i, 1);
        return i >= 0;
      }
      var NO_CHAR_ARRAY = {};
      function getArrayOf(arrayLike) {
        var i, a, x, it2;
        if (arguments.length === 1) {
          if (isArray2(arrayLike))
            return arrayLike.slice();
          if (this === NO_CHAR_ARRAY && typeof arrayLike === "string")
            return [arrayLike];
          if (it2 = getIteratorOf(arrayLike)) {
            a = [];
            while (x = it2.next(), !x.done)
              a.push(x.value);
            return a;
          }
          if (arrayLike == null)
            return [arrayLike];
          i = arrayLike.length;
          if (typeof i === "number") {
            a = new Array(i);
            while (i--)
              a[i] = arrayLike[i];
            return a;
          }
          return [arrayLike];
        }
        i = arguments.length;
        a = new Array(i);
        while (i--)
          a[i] = arguments[i];
        return a;
      }
      var isAsyncFunction = typeof Symbol !== "undefined" ? function(fn2) {
        return fn2[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return false;
      };
      var dexieErrorNames = [
        "Modify",
        "Bulk",
        "OpenFailed",
        "VersionChange",
        "Schema",
        "Upgrade",
        "InvalidTable",
        "MissingAPI",
        "NoSuchDatabase",
        "InvalidArgument",
        "SubTransaction",
        "Unsupported",
        "Internal",
        "DatabaseClosed",
        "PrematureCommit",
        "ForeignAwait"
      ];
      var idbDomErrorNames = [
        "Unknown",
        "Constraint",
        "Data",
        "TransactionInactive",
        "ReadOnly",
        "Version",
        "NotFound",
        "InvalidState",
        "InvalidAccess",
        "Abort",
        "Timeout",
        "QuotaExceeded",
        "Syntax",
        "DataClone"
      ];
      var errorList = dexieErrorNames.concat(idbDomErrorNames);
      var defaultTexts = {
        VersionChanged: "Database version changed by other database connection",
        DatabaseClosed: "Database has been closed",
        Abort: "Transaction aborted",
        TransactionInactive: "Transaction has already completed or failed",
        MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
      };
      function DexieError(name, msg) {
        this.name = name;
        this.message = msg;
      }
      derive(DexieError).from(Error).extend({
        toString: function() {
          return this.name + ": " + this.message;
        }
      });
      function getMultiErrorMessage(msg, failures) {
        return msg + ". Errors: " + Object.keys(failures).map(function(key) {
          return failures[key].toString();
        }).filter(function(v, i, s) {
          return s.indexOf(v) === i;
        }).join("\n");
      }
      function ModifyError(msg, failures, successCount, failedKeys) {
        this.failures = failures;
        this.failedKeys = failedKeys;
        this.successCount = successCount;
        this.message = getMultiErrorMessage(msg, failures);
      }
      derive(ModifyError).from(DexieError);
      function BulkError(msg, failures) {
        this.name = "BulkError";
        this.failures = Object.keys(failures).map(function(pos) {
          return failures[pos];
        });
        this.failuresByPos = failures;
        this.message = getMultiErrorMessage(msg, this.failures);
      }
      derive(BulkError).from(DexieError);
      var errnames = errorList.reduce(function(obj, name) {
        return obj[name] = name + "Error", obj;
      }, {});
      var BaseException = DexieError;
      var exceptions = errorList.reduce(function(obj, name) {
        var fullName = name + "Error";
        function DexieError2(msgOrInner, inner) {
          this.name = fullName;
          if (!msgOrInner) {
            this.message = defaultTexts[name] || fullName;
            this.inner = null;
          } else if (typeof msgOrInner === "string") {
            this.message = "".concat(msgOrInner).concat(!inner ? "" : "\n " + inner);
            this.inner = inner || null;
          } else if (typeof msgOrInner === "object") {
            this.message = "".concat(msgOrInner.name, " ").concat(msgOrInner.message);
            this.inner = msgOrInner;
          }
        }
        derive(DexieError2).from(BaseException);
        obj[name] = DexieError2;
        return obj;
      }, {});
      exceptions.Syntax = SyntaxError;
      exceptions.Type = TypeError;
      exceptions.Range = RangeError;
      var exceptionMap = idbDomErrorNames.reduce(function(obj, name) {
        obj[name + "Error"] = exceptions[name];
        return obj;
      }, {});
      function mapError(domError, message) {
        if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
          return domError;
        var rv = new exceptionMap[domError.name](message || domError.message, domError);
        if ("stack" in domError) {
          setProp(rv, "stack", { get: function() {
            return this.inner.stack;
          } });
        }
        return rv;
      }
      var fullNameExceptions = errorList.reduce(function(obj, name) {
        if (["Syntax", "Type", "Range"].indexOf(name) === -1)
          obj[name + "Error"] = exceptions[name];
        return obj;
      }, {});
      fullNameExceptions.ModifyError = ModifyError;
      fullNameExceptions.DexieError = DexieError;
      fullNameExceptions.BulkError = BulkError;
      function nop2() {
      }
      function mirror(val) {
        return val;
      }
      function pureFunctionChain(f1, f2) {
        if (f1 == null || f1 === mirror)
          return f2;
        return function(val) {
          return f2(f1(val));
        };
      }
      function callBoth(on1, on2) {
        return function() {
          on1.apply(this, arguments);
          on2.apply(this, arguments);
        };
      }
      function hookCreatingChain(f1, f2) {
        if (f1 === nop2)
          return f2;
        return function() {
          var res = f1.apply(this, arguments);
          if (res !== void 0)
            arguments[0] = res;
          var onsuccess = this.onsuccess, onerror = this.onerror;
          this.onsuccess = null;
          this.onerror = null;
          var res2 = f2.apply(this, arguments);
          if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
          if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
          return res2 !== void 0 ? res2 : res;
        };
      }
      function hookDeletingChain(f1, f2) {
        if (f1 === nop2)
          return f2;
        return function() {
          f1.apply(this, arguments);
          var onsuccess = this.onsuccess, onerror = this.onerror;
          this.onsuccess = this.onerror = null;
          f2.apply(this, arguments);
          if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
          if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        };
      }
      function hookUpdatingChain(f1, f2) {
        if (f1 === nop2)
          return f2;
        return function(modifications) {
          var res = f1.apply(this, arguments);
          extend(modifications, res);
          var onsuccess = this.onsuccess, onerror = this.onerror;
          this.onsuccess = null;
          this.onerror = null;
          var res2 = f2.apply(this, arguments);
          if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
          if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
          return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
        };
      }
      function reverseStoppableEventChain(f1, f2) {
        if (f1 === nop2)
          return f2;
        return function() {
          if (f2.apply(this, arguments) === false)
            return false;
          return f1.apply(this, arguments);
        };
      }
      function promisableChain2(f1, f2) {
        if (f1 === nop2)
          return f2;
        return function() {
          var res = f1.apply(this, arguments);
          if (res && typeof res.then === "function") {
            var thiz = this, i = arguments.length, args2 = new Array(i);
            while (i--)
              args2[i] = arguments[i];
            return res.then(function() {
              return f2.apply(thiz, args2);
            });
          }
          return f2.apply(this, arguments);
        };
      }
      var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function setDebug(value, filter2) {
        debug = value;
      }
      var INTERNAL = {};
      var ZONE_ECHO_LIMIT = 100, _a$1 = typeof Promise === "undefined" ? [] : (function() {
        var globalP = Promise.resolve();
        if (typeof crypto === "undefined" || !crypto.subtle)
          return [globalP, getProto(globalP), globalP];
        var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [
          nativeP,
          getProto(nativeP),
          globalP
        ];
      })(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
      var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
      var patchGlobalPromise = !!resolvedGlobalPromise;
      function schedulePhysicalTick() {
        queueMicrotask(physicalTick);
      }
      var asap = function(callback, args2) {
        microtickQueue.push([callback, args2]);
        if (needsNewPhysicalTick) {
          schedulePhysicalTick();
          needsNewPhysicalTick = false;
        }
      };
      var isOutsideMicroTick = true, needsNewPhysicalTick = true, unhandledErrors = [], rejectingErrors = [], rejectionMapper = mirror;
      var globalPSD = {
        id: "global",
        global: true,
        ref: 0,
        unhandleds: [],
        onunhandled: nop2,
        pgp: false,
        env: {},
        finalize: nop2
      };
      var PSD = globalPSD;
      var microtickQueue = [];
      var numScheduledCalls = 0;
      var tickFinalizers = [];
      function DexiePromise(fn2) {
        if (typeof this !== "object")
          throw new TypeError("Promises must be constructed via new");
        this._listeners = [];
        this._lib = false;
        var psd = this._PSD = PSD;
        if (typeof fn2 !== "function") {
          if (fn2 !== INTERNAL)
            throw new TypeError("Not a function");
          this._state = arguments[1];
          this._value = arguments[2];
          if (this._state === false)
            handleRejection(this, this._value);
          return;
        }
        this._state = null;
        this._value = null;
        ++psd.ref;
        executePromiseTask(this, fn2);
      }
      var thenProp = {
        get: function() {
          var psd = PSD, microTaskId = totalEchoes;
          function then(onFulfilled, onRejected) {
            var _this = this;
            var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
            var cleanup = possibleAwait && !decrementExpectedAwaits();
            var rv = new DexiePromise(function(resolve, reject) {
              propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
            });
            if (this._consoleTask)
              rv._consoleTask = this._consoleTask;
            return rv;
          }
          then.prototype = INTERNAL;
          return then;
        },
        set: function(value) {
          setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
            get: function() {
              return value;
            },
            set: thenProp.set
          });
        }
      };
      props(DexiePromise.prototype, {
        then: thenProp,
        _then: function(onFulfilled, onRejected) {
          propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
        },
        catch: function(onRejected) {
          if (arguments.length === 1)
            return this.then(null, onRejected);
          var type2 = arguments[0], handler = arguments[1];
          return typeof type2 === "function" ? this.then(null, function(err) {
            return err instanceof type2 ? handler(err) : PromiseReject(err);
          }) : this.then(null, function(err) {
            return err && err.name === type2 ? handler(err) : PromiseReject(err);
          });
        },
        finally: function(onFinally) {
          return this.then(function(value) {
            return DexiePromise.resolve(onFinally()).then(function() {
              return value;
            });
          }, function(err) {
            return DexiePromise.resolve(onFinally()).then(function() {
              return PromiseReject(err);
            });
          });
        },
        timeout: function(ms, msg) {
          var _this = this;
          return ms < Infinity ? new DexiePromise(function(resolve, reject) {
            var handle = setTimeout(function() {
              return reject(new exceptions.Timeout(msg));
            }, ms);
            _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
          }) : this;
        }
      });
      if (typeof Symbol !== "undefined" && Symbol.toStringTag)
        setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
      globalPSD.env = snapShot();
      function Listener(onFulfilled, onRejected, resolve, reject, zone) {
        this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
        this.onRejected = typeof onRejected === "function" ? onRejected : null;
        this.resolve = resolve;
        this.reject = reject;
        this.psd = zone;
      }
      props(DexiePromise, {
        all: function() {
          var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
          return new DexiePromise(function(resolve, reject) {
            if (values.length === 0)
              resolve([]);
            var remaining = values.length;
            values.forEach(function(a, i) {
              return DexiePromise.resolve(a).then(function(x) {
                values[i] = x;
                if (!--remaining)
                  resolve(values);
              }, reject);
            });
          });
        },
        resolve: function(value) {
          if (value instanceof DexiePromise)
            return value;
          if (value && typeof value.then === "function")
            return new DexiePromise(function(resolve, reject) {
              value.then(resolve, reject);
            });
          var rv = new DexiePromise(INTERNAL, true, value);
          return rv;
        },
        reject: PromiseReject,
        race: function() {
          var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
          return new DexiePromise(function(resolve, reject) {
            values.map(function(value) {
              return DexiePromise.resolve(value).then(resolve, reject);
            });
          });
        },
        PSD: {
          get: function() {
            return PSD;
          },
          set: function(value) {
            return PSD = value;
          }
        },
        totalEchoes: { get: function() {
          return totalEchoes;
        } },
        newPSD: newScope,
        usePSD,
        scheduler: {
          get: function() {
            return asap;
          },
          set: function(value) {
            asap = value;
          }
        },
        rejectionMapper: {
          get: function() {
            return rejectionMapper;
          },
          set: function(value) {
            rejectionMapper = value;
          }
        },
        follow: function(fn2, zoneProps) {
          return new DexiePromise(function(resolve, reject) {
            return newScope(function(resolve2, reject2) {
              var psd = PSD;
              psd.unhandleds = [];
              psd.onunhandled = reject2;
              psd.finalize = callBoth(function() {
                var _this = this;
                run_at_end_of_this_or_next_physical_tick(function() {
                  _this.unhandleds.length === 0 ? resolve2() : reject2(_this.unhandleds[0]);
                });
              }, psd.finalize);
              fn2();
            }, zoneProps, resolve, reject);
          });
        }
      });
      if (NativePromise) {
        if (NativePromise.allSettled)
          setProp(DexiePromise, "allSettled", function() {
            var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function(resolve) {
              if (possiblePromises.length === 0)
                resolve([]);
              var remaining = possiblePromises.length;
              var results = new Array(remaining);
              possiblePromises.forEach(function(p, i) {
                return DexiePromise.resolve(p).then(function(value) {
                  return results[i] = { status: "fulfilled", value };
                }, function(reason) {
                  return results[i] = { status: "rejected", reason };
                }).then(function() {
                  return --remaining || resolve(results);
                });
              });
            });
          });
        if (NativePromise.any && typeof AggregateError !== "undefined")
          setProp(DexiePromise, "any", function() {
            var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function(resolve, reject) {
              if (possiblePromises.length === 0)
                reject(new AggregateError([]));
              var remaining = possiblePromises.length;
              var failures = new Array(remaining);
              possiblePromises.forEach(function(p, i) {
                return DexiePromise.resolve(p).then(function(value) {
                  return resolve(value);
                }, function(failure) {
                  failures[i] = failure;
                  if (!--remaining)
                    reject(new AggregateError(failures));
                });
              });
            });
          });
        if (NativePromise.withResolvers)
          DexiePromise.withResolvers = NativePromise.withResolvers;
      }
      function executePromiseTask(promise, fn2) {
        try {
          fn2(function(value) {
            if (promise._state !== null)
              return;
            if (value === promise)
              throw new TypeError("A promise cannot be resolved with itself.");
            var shouldExecuteTick = promise._lib && beginMicroTickScope();
            if (value && typeof value.then === "function") {
              executePromiseTask(promise, function(resolve, reject) {
                value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
              });
            } else {
              promise._state = true;
              promise._value = value;
              propagateAllListeners(promise);
            }
            if (shouldExecuteTick)
              endMicroTickScope();
          }, handleRejection.bind(null, promise));
        } catch (ex) {
          handleRejection(promise, ex);
        }
      }
      function handleRejection(promise, reason) {
        rejectingErrors.push(reason);
        if (promise._state !== null)
          return;
        var shouldExecuteTick = promise._lib && beginMicroTickScope();
        reason = rejectionMapper(reason);
        promise._state = false;
        promise._value = reason;
        addPossiblyUnhandledError(promise);
        propagateAllListeners(promise);
        if (shouldExecuteTick)
          endMicroTickScope();
      }
      function propagateAllListeners(promise) {
        var listeners = promise._listeners;
        promise._listeners = [];
        for (var i = 0, len = listeners.length; i < len; ++i) {
          propagateToListener(promise, listeners[i]);
        }
        var psd = promise._PSD;
        --psd.ref || psd.finalize();
        if (numScheduledCalls === 0) {
          ++numScheduledCalls;
          asap(function() {
            if (--numScheduledCalls === 0)
              finalizePhysicalTick();
          }, []);
        }
      }
      function propagateToListener(promise, listener) {
        if (promise._state === null) {
          promise._listeners.push(listener);
          return;
        }
        var cb = promise._state ? listener.onFulfilled : listener.onRejected;
        if (cb === null) {
          return (promise._state ? listener.resolve : listener.reject)(promise._value);
        }
        ++listener.psd.ref;
        ++numScheduledCalls;
        asap(callListener, [cb, promise, listener]);
      }
      function callListener(cb, promise, listener) {
        try {
          var ret, value = promise._value;
          if (!promise._state && rejectingErrors.length)
            rejectingErrors = [];
          ret = debug && promise._consoleTask ? promise._consoleTask.run(function() {
            return cb(value);
          }) : cb(value);
          if (!promise._state && rejectingErrors.indexOf(value) === -1) {
            markErrorAsHandled(promise);
          }
          listener.resolve(ret);
        } catch (e) {
          listener.reject(e);
        } finally {
          if (--numScheduledCalls === 0)
            finalizePhysicalTick();
          --listener.psd.ref || listener.psd.finalize();
        }
      }
      function physicalTick() {
        usePSD(globalPSD, function() {
          beginMicroTickScope() && endMicroTickScope();
        });
      }
      function beginMicroTickScope() {
        var wasRootExec = isOutsideMicroTick;
        isOutsideMicroTick = false;
        needsNewPhysicalTick = false;
        return wasRootExec;
      }
      function endMicroTickScope() {
        var callbacks, i, l;
        do {
          while (microtickQueue.length > 0) {
            callbacks = microtickQueue;
            microtickQueue = [];
            l = callbacks.length;
            for (i = 0; i < l; ++i) {
              var item = callbacks[i];
              item[0].apply(null, item[1]);
            }
          }
        } while (microtickQueue.length > 0);
        isOutsideMicroTick = true;
        needsNewPhysicalTick = true;
      }
      function finalizePhysicalTick() {
        var unhandledErrs = unhandledErrors;
        unhandledErrors = [];
        unhandledErrs.forEach(function(p) {
          p._PSD.onunhandled.call(null, p._value, p);
        });
        var finalizers = tickFinalizers.slice(0);
        var i = finalizers.length;
        while (i)
          finalizers[--i]();
      }
      function run_at_end_of_this_or_next_physical_tick(fn2) {
        function finalizer() {
          fn2();
          tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
        }
        tickFinalizers.push(finalizer);
        ++numScheduledCalls;
        asap(function() {
          if (--numScheduledCalls === 0)
            finalizePhysicalTick();
        }, []);
      }
      function addPossiblyUnhandledError(promise) {
        if (!unhandledErrors.some(function(p) {
          return p._value === promise._value;
        }))
          unhandledErrors.push(promise);
      }
      function markErrorAsHandled(promise) {
        var i = unhandledErrors.length;
        while (i)
          if (unhandledErrors[--i]._value === promise._value) {
            unhandledErrors.splice(i, 1);
            return;
          }
      }
      function PromiseReject(reason) {
        return new DexiePromise(INTERNAL, false, reason);
      }
      function wrap(fn2, errorCatcher) {
        var psd = PSD;
        return function() {
          var wasRootExec = beginMicroTickScope(), outerScope = PSD;
          try {
            switchToZone(psd, true);
            return fn2.apply(this, arguments);
          } catch (e) {
            errorCatcher && errorCatcher(e);
          } finally {
            switchToZone(outerScope, false);
            if (wasRootExec)
              endMicroTickScope();
          }
        };
      }
      var task = { awaits: 0, echoes: 0, id: 0 };
      var taskCounter = 0;
      var zoneStack = [];
      var zoneEchoes = 0;
      var totalEchoes = 0;
      var zone_id_counter = 0;
      function newScope(fn2, props2, a1, a2) {
        var parent = PSD, psd = Object.create(parent);
        psd.parent = parent;
        psd.ref = 0;
        psd.global = false;
        psd.id = ++zone_id_counter;
        globalPSD.env;
        psd.env = patchGlobalPromise ? {
          Promise: DexiePromise,
          PromiseProp: { value: DexiePromise, configurable: true, writable: true },
          all: DexiePromise.all,
          race: DexiePromise.race,
          allSettled: DexiePromise.allSettled,
          any: DexiePromise.any,
          resolve: DexiePromise.resolve,
          reject: DexiePromise.reject
        } : {};
        if (props2)
          extend(psd, props2);
        ++parent.ref;
        psd.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        };
        var rv = usePSD(psd, fn2, a1, a2);
        if (psd.ref === 0)
          psd.finalize();
        return rv;
      }
      function incrementExpectedAwaits() {
        if (!task.id)
          task.id = ++taskCounter;
        ++task.awaits;
        task.echoes += ZONE_ECHO_LIMIT;
        return task.id;
      }
      function decrementExpectedAwaits() {
        if (!task.awaits)
          return false;
        if (--task.awaits === 0)
          task.id = 0;
        task.echoes = task.awaits * ZONE_ECHO_LIMIT;
        return true;
      }
      if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
        incrementExpectedAwaits = decrementExpectedAwaits = nop2;
      }
      function onPossibleParallellAsync(possiblePromise) {
        if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
          incrementExpectedAwaits();
          return possiblePromise.then(function(x) {
            decrementExpectedAwaits();
            return x;
          }, function(e) {
            decrementExpectedAwaits();
            return rejection(e);
          });
        }
        return possiblePromise;
      }
      function zoneEnterEcho(targetZone) {
        ++totalEchoes;
        if (!task.echoes || --task.echoes === 0) {
          task.echoes = task.awaits = task.id = 0;
        }
        zoneStack.push(PSD);
        switchToZone(targetZone, true);
      }
      function zoneLeaveEcho() {
        var zone = zoneStack[zoneStack.length - 1];
        zoneStack.pop();
        switchToZone(zone, false);
      }
      function switchToZone(targetZone, bEnteringZone) {
        var currentZone = PSD;
        if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
          queueMicrotask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
        }
        if (targetZone === PSD)
          return;
        PSD = targetZone;
        if (currentZone === globalPSD)
          globalPSD.env = snapShot();
        if (patchGlobalPromise) {
          var GlobalPromise = globalPSD.env.Promise;
          var targetEnv = targetZone.env;
          if (currentZone.global || targetZone.global) {
            Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
            GlobalPromise.all = targetEnv.all;
            GlobalPromise.race = targetEnv.race;
            GlobalPromise.resolve = targetEnv.resolve;
            GlobalPromise.reject = targetEnv.reject;
            if (targetEnv.allSettled)
              GlobalPromise.allSettled = targetEnv.allSettled;
            if (targetEnv.any)
              GlobalPromise.any = targetEnv.any;
          }
        }
      }
      function snapShot() {
        var GlobalPromise = _global.Promise;
        return patchGlobalPromise ? {
          Promise: GlobalPromise,
          PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
          all: GlobalPromise.all,
          race: GlobalPromise.race,
          allSettled: GlobalPromise.allSettled,
          any: GlobalPromise.any,
          resolve: GlobalPromise.resolve,
          reject: GlobalPromise.reject
        } : {};
      }
      function usePSD(psd, fn2, a1, a2, a3) {
        var outerScope = PSD;
        try {
          switchToZone(psd, true);
          return fn2(a1, a2, a3);
        } finally {
          switchToZone(outerScope, false);
        }
      }
      function nativeAwaitCompatibleWrap(fn2, zone, possibleAwait, cleanup) {
        return typeof fn2 !== "function" ? fn2 : function() {
          var outerZone = PSD;
          if (possibleAwait)
            incrementExpectedAwaits();
          switchToZone(zone, true);
          try {
            return fn2.apply(this, arguments);
          } finally {
            switchToZone(outerZone, false);
            if (cleanup)
              queueMicrotask(decrementExpectedAwaits);
          }
        };
      }
      function execInGlobalContext(cb) {
        if (Promise === NativePromise && task.echoes === 0) {
          if (zoneEchoes === 0) {
            cb();
          } else {
            enqueueNativeMicroTask(cb);
          }
        } else {
          setTimeout(cb, 0);
        }
      }
      var rejection = DexiePromise.reject;
      function tempTransaction(db, mode, storeNames, fn2) {
        if (!db.idbdb || !db._state.openComplete && (!PSD.letThrough && !db._vip)) {
          if (db._state.openComplete) {
            return rejection(new exceptions.DatabaseClosed(db._state.dbOpenError));
          }
          if (!db._state.isBeingOpened) {
            if (!db._state.autoOpen)
              return rejection(new exceptions.DatabaseClosed());
            db.open().catch(nop2);
          }
          return db._state.dbReadyPromise.then(function() {
            return tempTransaction(db, mode, storeNames, fn2);
          });
        } else {
          var trans = db._createTransaction(mode, storeNames, db._dbSchema);
          try {
            trans.create();
            db._state.PR1398_maxLoop = 3;
          } catch (ex) {
            if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
              console.warn("Dexie: Need to reopen db");
              db.close({ disableAutoOpen: false });
              return db.open().then(function() {
                return tempTransaction(db, mode, storeNames, fn2);
              });
            }
            return rejection(ex);
          }
          return trans._promise(mode, function(resolve, reject) {
            return newScope(function() {
              PSD.trans = trans;
              return fn2(resolve, reject, trans);
            });
          }).then(function(result) {
            if (mode === "readwrite")
              try {
                trans.idbtrans.commit();
              } catch (_a2) {
              }
            return mode === "readonly" ? result : trans._completion.then(function() {
              return result;
            });
          });
        }
      }
      var DEXIE_VERSION = "4.2.1";
      var maxString = String.fromCharCode(65535);
      var minKey = -Infinity;
      var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
      var STRING_EXPECTED = "String expected.";
      var connections = [];
      var DBNAMES_DB = "__dbnames";
      var READONLY = "readonly";
      var READWRITE = "readwrite";
      function combine(filter1, filter2) {
        return filter1 ? filter2 ? function() {
          return filter1.apply(this, arguments) && filter2.apply(this, arguments);
        } : filter1 : filter2;
      }
      var AnyRange = {
        type: 3,
        lower: -Infinity,
        lowerOpen: false,
        upper: [[]],
        upperOpen: false
      };
      function workaroundForUndefinedPrimKey(keyPath) {
        return typeof keyPath === "string" && !/\./.test(keyPath) ? function(obj) {
          if (obj[keyPath] === void 0 && keyPath in obj) {
            obj = deepClone(obj);
            delete obj[keyPath];
          }
          return obj;
        } : function(obj) {
          return obj;
        };
      }
      function Entity2() {
        throw exceptions.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function cmp2(a, b) {
        try {
          var ta = type(a);
          var tb = type(b);
          if (ta !== tb) {
            if (ta === "Array")
              return 1;
            if (tb === "Array")
              return -1;
            if (ta === "binary")
              return 1;
            if (tb === "binary")
              return -1;
            if (ta === "string")
              return 1;
            if (tb === "string")
              return -1;
            if (ta === "Date")
              return 1;
            if (tb !== "Date")
              return NaN;
            return -1;
          }
          switch (ta) {
            case "number":
            case "Date":
            case "string":
              return a > b ? 1 : a < b ? -1 : 0;
            case "binary": {
              return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
            }
            case "Array":
              return compareArrays(a, b);
          }
        } catch (_a2) {
        }
        return NaN;
      }
      function compareArrays(a, b) {
        var al = a.length;
        var bl = b.length;
        var l = al < bl ? al : bl;
        for (var i = 0; i < l; ++i) {
          var res = cmp2(a[i], b[i]);
          if (res !== 0)
            return res;
        }
        return al === bl ? 0 : al < bl ? -1 : 1;
      }
      function compareUint8Arrays(a, b) {
        var al = a.length;
        var bl = b.length;
        var l = al < bl ? al : bl;
        for (var i = 0; i < l; ++i) {
          if (a[i] !== b[i])
            return a[i] < b[i] ? -1 : 1;
        }
        return al === bl ? 0 : al < bl ? -1 : 1;
      }
      function type(x) {
        var t = typeof x;
        if (t !== "object")
          return t;
        if (ArrayBuffer.isView(x))
          return "binary";
        var tsTag = toStringTag(x);
        return tsTag === "ArrayBuffer" ? "binary" : tsTag;
      }
      function getUint8Array(a) {
        if (a instanceof Uint8Array)
          return a;
        if (ArrayBuffer.isView(a))
          return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        return new Uint8Array(a);
      }
      function builtInDeletionTrigger(table, keys3, res) {
        var yProps = table.schema.yProps;
        if (!yProps)
          return res;
        if (keys3 && res.numFailures > 0)
          keys3 = keys3.filter(function(_, i) {
            return !res.failures[i];
          });
        return Promise.all(yProps.map(function(_a2) {
          var updatesTable = _a2.updatesTable;
          return keys3 ? table.db.table(updatesTable).where("k").anyOf(keys3).delete() : table.db.table(updatesTable).clear();
        })).then(function() {
          return res;
        });
      }
      var PropModification2 = (function() {
        function PropModification3(spec) {
          this["@@propmod"] = spec;
        }
        PropModification3.prototype.execute = function(value) {
          var _a2;
          var spec = this["@@propmod"];
          if (spec.add !== void 0) {
            var term = spec.add;
            if (isArray2(term)) {
              return __spreadArray(__spreadArray([], isArray2(value) ? value : [], true), term, true).sort();
            }
            if (typeof term === "number")
              return (Number(value) || 0) + term;
            if (typeof term === "bigint") {
              try {
                return BigInt(value) + term;
              } catch (_b) {
                return BigInt(0) + term;
              }
            }
            throw new TypeError("Invalid term ".concat(term));
          }
          if (spec.remove !== void 0) {
            var subtrahend_1 = spec.remove;
            if (isArray2(subtrahend_1)) {
              return isArray2(value) ? value.filter(function(item) {
                return !subtrahend_1.includes(item);
              }).sort() : [];
            }
            if (typeof subtrahend_1 === "number")
              return Number(value) - subtrahend_1;
            if (typeof subtrahend_1 === "bigint") {
              try {
                return BigInt(value) - subtrahend_1;
              } catch (_c) {
                return BigInt(0) - subtrahend_1;
              }
            }
            throw new TypeError("Invalid subtrahend ".concat(subtrahend_1));
          }
          var prefixToReplace = (_a2 = spec.replacePrefix) === null || _a2 === void 0 ? void 0 : _a2[0];
          if (prefixToReplace && typeof value === "string" && value.startsWith(prefixToReplace)) {
            return spec.replacePrefix[1] + value.substring(prefixToReplace.length);
          }
          return value;
        };
        return PropModification3;
      })();
      function applyUpdateSpec(obj, changes) {
        var keyPaths = keys2(changes);
        var numKeys = keyPaths.length;
        var anythingModified = false;
        for (var i = 0; i < numKeys; ++i) {
          var keyPath = keyPaths[i];
          var value = changes[keyPath];
          var origValue = getByKeyPath2(obj, keyPath);
          if (value instanceof PropModification2) {
            setByKeyPath(obj, keyPath, value.execute(origValue));
            anythingModified = true;
          } else if (origValue !== value) {
            setByKeyPath(obj, keyPath, value);
            anythingModified = true;
          }
        }
        return anythingModified;
      }
      var Table = (function() {
        function Table2() {
        }
        Table2.prototype._trans = function(mode, fn2, writeLocked) {
          var trans = this._tx || PSD.trans;
          var tableName = this.name;
          var task2 = debug && typeof console !== "undefined" && console.createTask && console.createTask("Dexie: ".concat(mode === "readonly" ? "read" : "write", " ").concat(this.name));
          function checkTableInTransaction(resolve, reject, trans2) {
            if (!trans2.schema[tableName])
              throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
            return fn2(trans2.idbtrans, trans2);
          }
          var wasRootExec = beginMicroTickScope();
          try {
            var p = trans && trans.db._novip === this.db._novip ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function() {
              return trans._promise(mode, checkTableInTransaction, writeLocked);
            }, { trans, transless: PSD.transless || PSD }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
            if (task2) {
              p._consoleTask = task2;
              p = p.catch(function(err) {
                console.trace(err);
                return rejection(err);
              });
            }
            return p;
          } finally {
            if (wasRootExec)
              endMicroTickScope();
          }
        };
        Table2.prototype.get = function(keyOrCrit, cb) {
          var _this = this;
          if (keyOrCrit && keyOrCrit.constructor === Object)
            return this.where(keyOrCrit).first(cb);
          if (keyOrCrit == null)
            return rejection(new exceptions.Type("Invalid argument to Table.get()"));
          return this._trans("readonly", function(trans) {
            return _this.core.get({ trans, key: keyOrCrit }).then(function(res) {
              return _this.hook.reading.fire(res);
            });
          }).then(cb);
        };
        Table2.prototype.where = function(indexOrCrit) {
          if (typeof indexOrCrit === "string")
            return new this.db.WhereClause(this, indexOrCrit);
          if (isArray2(indexOrCrit))
            return new this.db.WhereClause(this, "[".concat(indexOrCrit.join("+"), "]"));
          var keyPaths = keys2(indexOrCrit);
          if (keyPaths.length === 1)
            return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
          var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function(ix) {
            if (ix.compound && keyPaths.every(function(keyPath) {
              return ix.keyPath.indexOf(keyPath) >= 0;
            })) {
              for (var i = 0; i < keyPaths.length; ++i) {
                if (keyPaths.indexOf(ix.keyPath[i]) === -1)
                  return false;
              }
              return true;
            }
            return false;
          }).sort(function(a, b) {
            return a.keyPath.length - b.keyPath.length;
          })[0];
          if (compoundIndex && this.db._maxKey !== maxString) {
            var keyPathsInValidOrder = compoundIndex.keyPath.slice(0, keyPaths.length);
            return this.where(keyPathsInValidOrder).equals(keyPathsInValidOrder.map(function(kp) {
              return indexOrCrit[kp];
            }));
          }
          if (!compoundIndex && debug)
            console.warn("The query ".concat(JSON.stringify(indexOrCrit), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(keyPaths.join("+"), "]"));
          var idxByName = this.schema.idxByName;
          function equals(a, b) {
            return cmp2(a, b) === 0;
          }
          var _a2 = keyPaths.reduce(function(_a3, keyPath) {
            var prevIndex = _a3[0], prevFilterFn = _a3[1];
            var index = idxByName[keyPath];
            var value = indexOrCrit[keyPath];
            return [
              prevIndex || index,
              prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function(x) {
                var prop = getByKeyPath2(x, keyPath);
                return isArray2(prop) && prop.some(function(item) {
                  return equals(value, item);
                });
              } : function(x) {
                return equals(value, getByKeyPath2(x, keyPath));
              }) : prevFilterFn
            ];
          }, [null, null]), idx = _a2[0], filterFunction = _a2[1];
          return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
        };
        Table2.prototype.filter = function(filterFunction) {
          return this.toCollection().and(filterFunction);
        };
        Table2.prototype.count = function(thenShortcut) {
          return this.toCollection().count(thenShortcut);
        };
        Table2.prototype.offset = function(offset) {
          return this.toCollection().offset(offset);
        };
        Table2.prototype.limit = function(numRows) {
          return this.toCollection().limit(numRows);
        };
        Table2.prototype.each = function(callback) {
          return this.toCollection().each(callback);
        };
        Table2.prototype.toArray = function(thenShortcut) {
          return this.toCollection().toArray(thenShortcut);
        };
        Table2.prototype.toCollection = function() {
          return new this.db.Collection(new this.db.WhereClause(this));
        };
        Table2.prototype.orderBy = function(index) {
          return new this.db.Collection(new this.db.WhereClause(this, isArray2(index) ? "[".concat(index.join("+"), "]") : index));
        };
        Table2.prototype.reverse = function() {
          return this.toCollection().reverse();
        };
        Table2.prototype.mapToClass = function(constructor) {
          var _a2 = this, db = _a2.db, tableName = _a2.name;
          this.schema.mappedClass = constructor;
          if (constructor.prototype instanceof Entity2) {
            constructor = (function(_super) {
              __extends(class_1, _super);
              function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
              }
              Object.defineProperty(class_1.prototype, "db", {
                get: function() {
                  return db;
                },
                enumerable: false,
                configurable: true
              });
              class_1.prototype.table = function() {
                return tableName;
              };
              return class_1;
            })(constructor);
          }
          var inheritedProps = /* @__PURE__ */ new Set();
          for (var proto = constructor.prototype; proto; proto = getProto(proto)) {
            Object.getOwnPropertyNames(proto).forEach(function(propName) {
              return inheritedProps.add(propName);
            });
          }
          var readHook = function(obj) {
            if (!obj)
              return obj;
            var res = Object.create(constructor.prototype);
            for (var m in obj)
              if (!inheritedProps.has(m))
                try {
                  res[m] = obj[m];
                } catch (_) {
                }
            return res;
          };
          if (this.schema.readHook) {
            this.hook.reading.unsubscribe(this.schema.readHook);
          }
          this.schema.readHook = readHook;
          this.hook("reading", readHook);
          return constructor;
        };
        Table2.prototype.defineClass = function() {
          function Class(content) {
            extend(this, content);
          }
          return this.mapToClass(Class);
        };
        Table2.prototype.add = function(obj, key) {
          var _this = this;
          var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
          var objToAdd = obj;
          if (keyPath && auto) {
            objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
          }
          return this._trans("readwrite", function(trans) {
            return _this.core.mutate({ trans, type: "add", keys: key != null ? [key] : null, values: [objToAdd] });
          }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
          }).then(function(lastResult) {
            if (keyPath) {
              try {
                setByKeyPath(obj, keyPath, lastResult);
              } catch (_) {
              }
            }
            return lastResult;
          });
        };
        Table2.prototype.upsert = function(key, modifications) {
          var _this = this;
          var keyPath = this.schema.primKey.keyPath;
          return this._trans("readwrite", function(trans) {
            return _this.core.get({ trans, key }).then(function(existing) {
              var obj = existing !== null && existing !== void 0 ? existing : {};
              applyUpdateSpec(obj, modifications);
              if (keyPath)
                setByKeyPath(obj, keyPath, key);
              return _this.core.mutate({
                trans,
                type: "put",
                values: [obj],
                keys: [key],
                upsert: true,
                updates: { keys: [key], changeSpecs: [modifications] }
              }).then(function(res) {
                return res.numFailures ? DexiePromise.reject(res.failures[0]) : !!existing;
              });
            });
          });
        };
        Table2.prototype.update = function(keyOrObject, modifications) {
          if (typeof keyOrObject === "object" && !isArray2(keyOrObject)) {
            var key = getByKeyPath2(keyOrObject, this.schema.primKey.keyPath);
            if (key === void 0)
              return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
            return this.where(":id").equals(key).modify(modifications);
          } else {
            return this.where(":id").equals(keyOrObject).modify(modifications);
          }
        };
        Table2.prototype.put = function(obj, key) {
          var _this = this;
          var _a2 = this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
          var objToAdd = obj;
          if (keyPath && auto) {
            objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
          }
          return this._trans("readwrite", function(trans) {
            return _this.core.mutate({ trans, type: "put", values: [objToAdd], keys: key != null ? [key] : null });
          }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
          }).then(function(lastResult) {
            if (keyPath) {
              try {
                setByKeyPath(obj, keyPath, lastResult);
              } catch (_) {
              }
            }
            return lastResult;
          });
        };
        Table2.prototype.delete = function(key) {
          var _this = this;
          return this._trans("readwrite", function(trans) {
            return _this.core.mutate({ trans, type: "delete", keys: [key] }).then(function(res) {
              return builtInDeletionTrigger(_this, [key], res);
            }).then(function(res) {
              return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
            });
          });
        };
        Table2.prototype.clear = function() {
          var _this = this;
          return this._trans("readwrite", function(trans) {
            return _this.core.mutate({ trans, type: "deleteRange", range: AnyRange }).then(function(res) {
              return builtInDeletionTrigger(_this, null, res);
            });
          }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0;
          });
        };
        Table2.prototype.bulkGet = function(keys3) {
          var _this = this;
          return this._trans("readonly", function(trans) {
            return _this.core.getMany({
              keys: keys3,
              trans
            }).then(function(result) {
              return result.map(function(res) {
                return _this.hook.reading.fire(res);
              });
            });
          });
        };
        Table2.prototype.bulkAdd = function(objects, keysOrOptions, options) {
          var _this = this;
          var keys3 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
          options = options || (keys3 ? void 0 : keysOrOptions);
          var wantResults = options ? options.allKeys : void 0;
          return this._trans("readwrite", function(trans) {
            var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
            if (keyPath && keys3)
              throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (keys3 && keys3.length !== objects.length)
              throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
            return _this.core.mutate({ trans, type: "add", keys: keys3, values: objectsToAdd, wantResults }).then(function(_a3) {
              var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
              var result = wantResults ? results : lastResult;
              if (numFailures === 0)
                return result;
              throw new BulkError("".concat(_this.name, ".bulkAdd(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
            });
          });
        };
        Table2.prototype.bulkPut = function(objects, keysOrOptions, options) {
          var _this = this;
          var keys3 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
          options = options || (keys3 ? void 0 : keysOrOptions);
          var wantResults = options ? options.allKeys : void 0;
          return this._trans("readwrite", function(trans) {
            var _a2 = _this.schema.primKey, auto = _a2.auto, keyPath = _a2.keyPath;
            if (keyPath && keys3)
              throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (keys3 && keys3.length !== objects.length)
              throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
            return _this.core.mutate({ trans, type: "put", keys: keys3, values: objectsToPut, wantResults }).then(function(_a3) {
              var numFailures = _a3.numFailures, results = _a3.results, lastResult = _a3.lastResult, failures = _a3.failures;
              var result = wantResults ? results : lastResult;
              if (numFailures === 0)
                return result;
              throw new BulkError("".concat(_this.name, ".bulkPut(): ").concat(numFailures, " of ").concat(numObjects, " operations failed"), failures);
            });
          });
        };
        Table2.prototype.bulkUpdate = function(keysAndChanges) {
          var _this = this;
          var coreTable = this.core;
          var keys3 = keysAndChanges.map(function(entry) {
            return entry.key;
          });
          var changeSpecs = keysAndChanges.map(function(entry) {
            return entry.changes;
          });
          var offsetMap = [];
          return this._trans("readwrite", function(trans) {
            return coreTable.getMany({ trans, keys: keys3, cache: "clone" }).then(function(objs) {
              var resultKeys = [];
              var resultObjs = [];
              keysAndChanges.forEach(function(_a2, idx) {
                var key = _a2.key, changes = _a2.changes;
                var obj = objs[idx];
                if (obj) {
                  for (var _i = 0, _b = Object.keys(changes); _i < _b.length; _i++) {
                    var keyPath = _b[_i];
                    var value = changes[keyPath];
                    if (keyPath === _this.schema.primKey.keyPath) {
                      if (cmp2(value, key) !== 0) {
                        throw new exceptions.Constraint("Cannot update primary key in bulkUpdate()");
                      }
                    } else {
                      setByKeyPath(obj, keyPath, value);
                    }
                  }
                  offsetMap.push(idx);
                  resultKeys.push(key);
                  resultObjs.push(obj);
                }
              });
              var numEntries = resultKeys.length;
              return coreTable.mutate({
                trans,
                type: "put",
                keys: resultKeys,
                values: resultObjs,
                updates: {
                  keys: keys3,
                  changeSpecs
                }
              }).then(function(_a2) {
                var numFailures = _a2.numFailures, failures = _a2.failures;
                if (numFailures === 0)
                  return numEntries;
                for (var _i = 0, _b = Object.keys(failures); _i < _b.length; _i++) {
                  var offset = _b[_i];
                  var mappedOffset = offsetMap[Number(offset)];
                  if (mappedOffset != null) {
                    var failure = failures[offset];
                    delete failures[offset];
                    failures[mappedOffset] = failure;
                  }
                }
                throw new BulkError("".concat(_this.name, ".bulkUpdate(): ").concat(numFailures, " of ").concat(numEntries, " operations failed"), failures);
              });
            });
          });
        };
        Table2.prototype.bulkDelete = function(keys3) {
          var _this = this;
          var numKeys = keys3.length;
          return this._trans("readwrite", function(trans) {
            return _this.core.mutate({ trans, type: "delete", keys: keys3 }).then(function(res) {
              return builtInDeletionTrigger(_this, keys3, res);
            });
          }).then(function(_a2) {
            var numFailures = _a2.numFailures, lastResult = _a2.lastResult, failures = _a2.failures;
            if (numFailures === 0)
              return lastResult;
            throw new BulkError("".concat(_this.name, ".bulkDelete(): ").concat(numFailures, " of ").concat(numKeys, " operations failed"), failures);
          });
        };
        return Table2;
      })();
      function Events(ctx) {
        var evs = {};
        var rv = function(eventName, subscriber) {
          if (subscriber) {
            var i2 = arguments.length, args2 = new Array(i2 - 1);
            while (--i2)
              args2[i2 - 1] = arguments[i2];
            evs[eventName].subscribe.apply(null, args2);
            return ctx;
          } else if (typeof eventName === "string") {
            return evs[eventName];
          }
        };
        rv.addEventType = add3;
        for (var i = 1, l = arguments.length; i < l; ++i) {
          add3(arguments[i]);
        }
        return rv;
        function add3(eventName, chainFunction, defaultFunction) {
          if (typeof eventName === "object")
            return addConfiguredEvents(eventName);
          if (!chainFunction)
            chainFunction = reverseStoppableEventChain;
          if (!defaultFunction)
            defaultFunction = nop2;
          var context = {
            subscribers: [],
            fire: defaultFunction,
            subscribe: function(cb) {
              if (context.subscribers.indexOf(cb) === -1) {
                context.subscribers.push(cb);
                context.fire = chainFunction(context.fire, cb);
              }
            },
            unsubscribe: function(cb) {
              context.subscribers = context.subscribers.filter(function(fn2) {
                return fn2 !== cb;
              });
              context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
            }
          };
          evs[eventName] = rv[eventName] = context;
          return context;
        }
        function addConfiguredEvents(cfg) {
          keys2(cfg).forEach(function(eventName) {
            var args2 = cfg[eventName];
            if (isArray2(args2)) {
              add3(eventName, cfg[eventName][0], cfg[eventName][1]);
            } else if (args2 === "asap") {
              var context = add3(eventName, mirror, function fire() {
                var i2 = arguments.length, args3 = new Array(i2);
                while (i2--)
                  args3[i2] = arguments[i2];
                context.subscribers.forEach(function(fn2) {
                  asap$1(function fireEvent() {
                    fn2.apply(null, args3);
                  });
                });
              });
            } else
              throw new exceptions.InvalidArgument("Invalid event config");
          });
        }
      }
      function makeClassConstructor(prototype, constructor) {
        derive(constructor).from({ prototype });
        return constructor;
      }
      function createTableConstructor(db) {
        return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
          this.db = db;
          this._tx = trans;
          this.name = name;
          this.schema = tableSchema;
          this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
            "creating": [hookCreatingChain, nop2],
            "reading": [pureFunctionChain, mirror],
            "updating": [hookUpdatingChain, nop2],
            "deleting": [hookDeletingChain, nop2]
          });
        });
      }
      function isPlainKeyRange(ctx, ignoreLimitFilter) {
        return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
      }
      function addFilter(ctx, fn2) {
        ctx.filter = combine(ctx.filter, fn2);
      }
      function addReplayFilter(ctx, factory, isLimitFilter) {
        var curr = ctx.replayFilter;
        ctx.replayFilter = curr ? function() {
          return combine(curr(), factory());
        } : factory;
        ctx.justLimit = isLimitFilter && !curr;
      }
      function addMatchFilter(ctx, fn2) {
        ctx.isMatch = combine(ctx.isMatch, fn2);
      }
      function getIndexOrStore(ctx, coreSchema) {
        if (ctx.isPrimKey)
          return coreSchema.primaryKey;
        var index = coreSchema.getIndexByKeyPath(ctx.index);
        if (!index)
          throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
        return index;
      }
      function openCursor(ctx, coreTable, trans) {
        var index = getIndexOrStore(ctx, coreTable.schema);
        return coreTable.openCursor({
          trans,
          values: !ctx.keysOnly,
          reverse: ctx.dir === "prev",
          unique: !!ctx.unique,
          query: {
            index,
            range: ctx.range
          }
        });
      }
      function iter(ctx, fn2, coreTrans, coreTable) {
        var filter2 = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
        if (!ctx.or) {
          return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter2), fn2, !ctx.keysOnly && ctx.valueMapper);
        } else {
          var set_1 = {};
          var union = function(item, cursor, advance) {
            if (!filter2 || filter2(cursor, advance, function(result) {
              return cursor.stop(result);
            }, function(err) {
              return cursor.fail(err);
            })) {
              var primaryKey = cursor.primaryKey;
              var key = "" + primaryKey;
              if (key === "[object ArrayBuffer]")
                key = "" + new Uint8Array(primaryKey);
              if (!hasOwn(set_1, key)) {
                set_1[key] = true;
                fn2(item, cursor, advance);
              }
            }
          };
          return Promise.all([
            ctx.or._iterate(union, coreTrans),
            iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
          ]);
        }
      }
      function iterate(cursorPromise, filter2, fn2, valueMapper) {
        var mappedFn = valueMapper ? function(x, c, a) {
          return fn2(valueMapper(x), c, a);
        } : fn2;
        var wrappedFn = wrap(mappedFn);
        return cursorPromise.then(function(cursor) {
          if (cursor) {
            return cursor.start(function() {
              var c = function() {
                return cursor.continue();
              };
              if (!filter2 || filter2(cursor, function(advancer) {
                return c = advancer;
              }, function(val) {
                cursor.stop(val);
                c = nop2;
              }, function(e) {
                cursor.fail(e);
                c = nop2;
              }))
                wrappedFn(cursor.value, cursor, function(advancer) {
                  return c = advancer;
                });
              c();
            });
          }
        });
      }
      var Collection = (function() {
        function Collection2() {
        }
        Collection2.prototype._read = function(fn2, cb) {
          var ctx = this._ctx;
          return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn2).then(cb);
        };
        Collection2.prototype._write = function(fn2) {
          var ctx = this._ctx;
          return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn2, "locked");
        };
        Collection2.prototype._addAlgorithm = function(fn2) {
          var ctx = this._ctx;
          ctx.algorithm = combine(ctx.algorithm, fn2);
        };
        Collection2.prototype._iterate = function(fn2, coreTrans) {
          return iter(this._ctx, fn2, coreTrans, this._ctx.table.core);
        };
        Collection2.prototype.clone = function(props2) {
          var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
          if (props2)
            extend(ctx, props2);
          rv._ctx = ctx;
          return rv;
        };
        Collection2.prototype.raw = function() {
          this._ctx.valueMapper = null;
          return this;
        };
        Collection2.prototype.each = function(fn2) {
          var ctx = this._ctx;
          return this._read(function(trans) {
            return iter(ctx, fn2, trans, ctx.table.core);
          });
        };
        Collection2.prototype.count = function(cb) {
          var _this = this;
          return this._read(function(trans) {
            var ctx = _this._ctx;
            var coreTable = ctx.table.core;
            if (isPlainKeyRange(ctx, true)) {
              return coreTable.count({
                trans,
                query: {
                  index: getIndexOrStore(ctx, coreTable.schema),
                  range: ctx.range
                }
              }).then(function(count2) {
                return Math.min(count2, ctx.limit);
              });
            } else {
              var count = 0;
              return iter(ctx, function() {
                ++count;
                return false;
              }, trans, coreTable).then(function() {
                return count;
              });
            }
          }).then(cb);
        };
        Collection2.prototype.sortBy = function(keyPath, cb) {
          var parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
          function getval(obj, i) {
            if (i)
              return getval(obj[parts[i]], i - 1);
            return obj[lastPart];
          }
          var order = this._ctx.dir === "next" ? 1 : -1;
          function sorter(a, b) {
            var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
            return cmp2(aVal, bVal) * order;
          }
          return this.toArray(function(a) {
            return a.sort(sorter);
          }).then(cb);
        };
        Collection2.prototype.toArray = function(cb) {
          var _this = this;
          return this._read(function(trans) {
            var ctx = _this._ctx;
            if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
              var valueMapper_1 = ctx.valueMapper;
              var index = getIndexOrStore(ctx, ctx.table.core.schema);
              return ctx.table.core.query({
                trans,
                limit: ctx.limit,
                values: true,
                query: {
                  index,
                  range: ctx.range
                }
              }).then(function(_a2) {
                var result = _a2.result;
                return valueMapper_1 ? result.map(valueMapper_1) : result;
              });
            } else {
              var a_1 = [];
              return iter(ctx, function(item) {
                return a_1.push(item);
              }, trans, ctx.table.core).then(function() {
                return a_1;
              });
            }
          }, cb);
        };
        Collection2.prototype.offset = function(offset) {
          var ctx = this._ctx;
          if (offset <= 0)
            return this;
          ctx.offset += offset;
          if (isPlainKeyRange(ctx)) {
            addReplayFilter(ctx, function() {
              var offsetLeft = offset;
              return function(cursor, advance) {
                if (offsetLeft === 0)
                  return true;
                if (offsetLeft === 1) {
                  --offsetLeft;
                  return false;
                }
                advance(function() {
                  cursor.advance(offsetLeft);
                  offsetLeft = 0;
                });
                return false;
              };
            });
          } else {
            addReplayFilter(ctx, function() {
              var offsetLeft = offset;
              return function() {
                return --offsetLeft < 0;
              };
            });
          }
          return this;
        };
        Collection2.prototype.limit = function(numRows) {
          this._ctx.limit = Math.min(this._ctx.limit, numRows);
          addReplayFilter(this._ctx, function() {
            var rowsLeft = numRows;
            return function(cursor, advance, resolve) {
              if (--rowsLeft <= 0)
                advance(resolve);
              return rowsLeft >= 0;
            };
          }, true);
          return this;
        };
        Collection2.prototype.until = function(filterFunction, bIncludeStopEntry) {
          addFilter(this._ctx, function(cursor, advance, resolve) {
            if (filterFunction(cursor.value)) {
              advance(resolve);
              return bIncludeStopEntry;
            } else {
              return true;
            }
          });
          return this;
        };
        Collection2.prototype.first = function(cb) {
          return this.limit(1).toArray(function(a) {
            return a[0];
          }).then(cb);
        };
        Collection2.prototype.last = function(cb) {
          return this.reverse().first(cb);
        };
        Collection2.prototype.filter = function(filterFunction) {
          addFilter(this._ctx, function(cursor) {
            return filterFunction(cursor.value);
          });
          addMatchFilter(this._ctx, filterFunction);
          return this;
        };
        Collection2.prototype.and = function(filter2) {
          return this.filter(filter2);
        };
        Collection2.prototype.or = function(indexName) {
          return new this.db.WhereClause(this._ctx.table, indexName, this);
        };
        Collection2.prototype.reverse = function() {
          this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
          if (this._ondirectionchange)
            this._ondirectionchange(this._ctx.dir);
          return this;
        };
        Collection2.prototype.desc = function() {
          return this.reverse();
        };
        Collection2.prototype.eachKey = function(cb) {
          var ctx = this._ctx;
          ctx.keysOnly = !ctx.isMatch;
          return this.each(function(val, cursor) {
            cb(cursor.key, cursor);
          });
        };
        Collection2.prototype.eachUniqueKey = function(cb) {
          this._ctx.unique = "unique";
          return this.eachKey(cb);
        };
        Collection2.prototype.eachPrimaryKey = function(cb) {
          var ctx = this._ctx;
          ctx.keysOnly = !ctx.isMatch;
          return this.each(function(val, cursor) {
            cb(cursor.primaryKey, cursor);
          });
        };
        Collection2.prototype.keys = function(cb) {
          var ctx = this._ctx;
          ctx.keysOnly = !ctx.isMatch;
          var a = [];
          return this.each(function(item, cursor) {
            a.push(cursor.key);
          }).then(function() {
            return a;
          }).then(cb);
        };
        Collection2.prototype.primaryKeys = function(cb) {
          var ctx = this._ctx;
          if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
            return this._read(function(trans) {
              var index = getIndexOrStore(ctx, ctx.table.core.schema);
              return ctx.table.core.query({
                trans,
                values: false,
                limit: ctx.limit,
                query: {
                  index,
                  range: ctx.range
                }
              });
            }).then(function(_a2) {
              var result = _a2.result;
              return result;
            }).then(cb);
          }
          ctx.keysOnly = !ctx.isMatch;
          var a = [];
          return this.each(function(item, cursor) {
            a.push(cursor.primaryKey);
          }).then(function() {
            return a;
          }).then(cb);
        };
        Collection2.prototype.uniqueKeys = function(cb) {
          this._ctx.unique = "unique";
          return this.keys(cb);
        };
        Collection2.prototype.firstKey = function(cb) {
          return this.limit(1).keys(function(a) {
            return a[0];
          }).then(cb);
        };
        Collection2.prototype.lastKey = function(cb) {
          return this.reverse().firstKey(cb);
        };
        Collection2.prototype.distinct = function() {
          var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
          if (!idx || !idx.multi)
            return this;
          var set = {};
          addFilter(this._ctx, function(cursor) {
            var strKey = cursor.primaryKey.toString();
            var found = hasOwn(set, strKey);
            set[strKey] = true;
            return !found;
          });
          return this;
        };
        Collection2.prototype.modify = function(changes) {
          var _this = this;
          var ctx = this._ctx;
          return this._write(function(trans) {
            var modifyer;
            if (typeof changes === "function") {
              modifyer = changes;
            } else {
              modifyer = function(item) {
                return applyUpdateSpec(item, changes);
              };
            }
            var coreTable = ctx.table.core;
            var _a2 = coreTable.schema.primaryKey, outbound = _a2.outbound, extractKey = _a2.extractKey;
            var limit = 200;
            var modifyChunkSize = _this.db._options.modifyChunkSize;
            if (modifyChunkSize) {
              if (typeof modifyChunkSize == "object") {
                limit = modifyChunkSize[coreTable.name] || modifyChunkSize["*"] || 200;
              } else {
                limit = modifyChunkSize;
              }
            }
            var totalFailures = [];
            var successCount = 0;
            var failedKeys = [];
            var applyMutateResult = function(expectedCount, res) {
              var failures = res.failures, numFailures = res.numFailures;
              successCount += expectedCount - numFailures;
              for (var _i = 0, _a3 = keys2(failures); _i < _a3.length; _i++) {
                var pos = _a3[_i];
                totalFailures.push(failures[pos]);
              }
            };
            var isUnconditionalDelete = changes === deleteCallback;
            return _this.clone().primaryKeys().then(function(keys3) {
              var criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || isUnconditionalDelete) && {
                index: ctx.index,
                range: ctx.range
              };
              var nextChunk = function(offset) {
                var count = Math.min(limit, keys3.length - offset);
                var keysInChunk = keys3.slice(offset, offset + count);
                return (isUnconditionalDelete ? Promise.resolve([]) : coreTable.getMany({
                  trans,
                  keys: keysInChunk,
                  cache: "immutable"
                })).then(function(values) {
                  var addValues = [];
                  var putValues = [];
                  var putKeys = outbound ? [] : null;
                  var deleteKeys = isUnconditionalDelete ? keysInChunk : [];
                  if (!isUnconditionalDelete)
                    for (var i = 0; i < count; ++i) {
                      var origValue = values[i];
                      var ctx_1 = {
                        value: deepClone(origValue),
                        primKey: keys3[offset + i]
                      };
                      if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                        if (ctx_1.value == null) {
                          deleteKeys.push(keys3[offset + i]);
                        } else if (!outbound && cmp2(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                          deleteKeys.push(keys3[offset + i]);
                          addValues.push(ctx_1.value);
                        } else {
                          putValues.push(ctx_1.value);
                          if (outbound)
                            putKeys.push(keys3[offset + i]);
                        }
                      }
                    }
                  return Promise.resolve(addValues.length > 0 && coreTable.mutate({ trans, type: "add", values: addValues }).then(function(res) {
                    for (var pos in res.failures) {
                      deleteKeys.splice(parseInt(pos), 1);
                    }
                    applyMutateResult(addValues.length, res);
                  })).then(function() {
                    return (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
                      trans,
                      type: "put",
                      keys: putKeys,
                      values: putValues,
                      criteria,
                      changeSpec: typeof changes !== "function" && changes,
                      isAdditionalChunk: offset > 0
                    }).then(function(res) {
                      return applyMutateResult(putValues.length, res);
                    });
                  }).then(function() {
                    return (deleteKeys.length > 0 || criteria && isUnconditionalDelete) && coreTable.mutate({
                      trans,
                      type: "delete",
                      keys: deleteKeys,
                      criteria,
                      isAdditionalChunk: offset > 0
                    }).then(function(res) {
                      return builtInDeletionTrigger(ctx.table, deleteKeys, res);
                    }).then(function(res) {
                      return applyMutateResult(deleteKeys.length, res);
                    });
                  }).then(function() {
                    return keys3.length > offset + count && nextChunk(offset + limit);
                  });
                });
              };
              return nextChunk(0).then(function() {
                if (totalFailures.length > 0)
                  throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
                return keys3.length;
              });
            });
          });
        };
        Collection2.prototype.delete = function() {
          var ctx = this._ctx, range = ctx.range;
          if (isPlainKeyRange(ctx) && !ctx.table.schema.yProps && (ctx.isPrimKey || range.type === 3)) {
            return this._write(function(trans) {
              var primaryKey = ctx.table.core.schema.primaryKey;
              var coreRange = range;
              return ctx.table.core.count({ trans, query: { index: primaryKey, range: coreRange } }).then(function(count) {
                return ctx.table.core.mutate({ trans, type: "deleteRange", range: coreRange }).then(function(_a2) {
                  var failures = _a2.failures, numFailures = _a2.numFailures;
                  if (numFailures)
                    throw new ModifyError("Could not delete some values", Object.keys(failures).map(function(pos) {
                      return failures[pos];
                    }), count - numFailures);
                  return count - numFailures;
                });
              });
            });
          }
          return this.modify(deleteCallback);
        };
        return Collection2;
      })();
      var deleteCallback = function(value, ctx) {
        return ctx.value = null;
      };
      function createCollectionConstructor(db) {
        return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
          this.db = db;
          var keyRange = AnyRange, error = null;
          if (keyRangeGenerator)
            try {
              keyRange = keyRangeGenerator();
            } catch (ex) {
              error = ex;
            }
          var whereCtx = whereClause._ctx;
          var table = whereCtx.table;
          var readingHook = table.hook.reading.fire;
          this._ctx = {
            table,
            index: whereCtx.index,
            isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
            range: keyRange,
            keysOnly: false,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: true,
            isMatch: null,
            offset: 0,
            limit: Infinity,
            error,
            or: whereCtx.or,
            valueMapper: readingHook !== mirror ? readingHook : null
          };
        });
      }
      function simpleCompare(a, b) {
        return a < b ? -1 : a === b ? 0 : 1;
      }
      function simpleCompareReverse(a, b) {
        return a > b ? -1 : a === b ? 0 : 1;
      }
      function fail(collectionOrWhereClause, err, T) {
        var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
        collection._ctx.error = T ? new T(err) : new TypeError(err);
        return collection;
      }
      function emptyCollection(whereClause) {
        return new whereClause.Collection(whereClause, function() {
          return rangeEqual("");
        }).limit(0);
      }
      function upperFactory(dir) {
        return dir === "next" ? function(s) {
          return s.toUpperCase();
        } : function(s) {
          return s.toLowerCase();
        };
      }
      function lowerFactory(dir) {
        return dir === "next" ? function(s) {
          return s.toLowerCase();
        } : function(s) {
          return s.toUpperCase();
        };
      }
      function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp3, dir) {
        var length3 = Math.min(key.length, lowerNeedle.length);
        var llp = -1;
        for (var i = 0; i < length3; ++i) {
          var lwrKeyChar = lowerKey[i];
          if (lwrKeyChar !== lowerNeedle[i]) {
            if (cmp3(key[i], upperNeedle[i]) < 0)
              return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
            if (cmp3(key[i], lowerNeedle[i]) < 0)
              return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
            if (llp >= 0)
              return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
            return null;
          }
          if (cmp3(key[i], lwrKeyChar) < 0)
            llp = i;
        }
        if (length3 < lowerNeedle.length && dir === "next")
          return key + upperNeedle.substr(key.length);
        if (length3 < key.length && dir === "prev")
          return key.substr(0, upperNeedle.length);
        return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
      }
      function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
        var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
        if (!needles.every(function(s) {
          return typeof s === "string";
        })) {
          return fail(whereClause, STRING_EXPECTED);
        }
        function initDirection(dir) {
          upper = upperFactory(dir);
          lower = lowerFactory(dir);
          compare = dir === "next" ? simpleCompare : simpleCompareReverse;
          var needleBounds = needles.map(function(needle) {
            return { lower: lower(needle), upper: upper(needle) };
          }).sort(function(a, b) {
            return compare(a.lower, b.lower);
          });
          upperNeedles = needleBounds.map(function(nb) {
            return nb.upper;
          });
          lowerNeedles = needleBounds.map(function(nb) {
            return nb.lower;
          });
          direction = dir;
          nextKeySuffix = dir === "next" ? "" : suffix;
        }
        initDirection("next");
        var c = new whereClause.Collection(whereClause, function() {
          return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
        });
        c._ondirectionchange = function(direction2) {
          initDirection(direction2);
        };
        var firstPossibleNeedle = 0;
        c._addAlgorithm(function(cursor, advance, resolve) {
          var key = cursor.key;
          if (typeof key !== "string")
            return false;
          var lowerKey = lower(key);
          if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
            return true;
          } else {
            var lowestPossibleCasing = null;
            for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
              var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
              if (casing === null && lowestPossibleCasing === null)
                firstPossibleNeedle = i + 1;
              else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                lowestPossibleCasing = casing;
              }
            }
            if (lowestPossibleCasing !== null) {
              advance(function() {
                cursor.continue(lowestPossibleCasing + nextKeySuffix);
              });
            } else {
              advance(resolve);
            }
            return false;
          }
        });
        return c;
      }
      function createRange(lower, upper, lowerOpen, upperOpen) {
        return {
          type: 2,
          lower,
          upper,
          lowerOpen,
          upperOpen
        };
      }
      function rangeEqual(value) {
        return {
          type: 1,
          lower: value,
          upper: value
        };
      }
      var WhereClause = (function() {
        function WhereClause2() {
        }
        Object.defineProperty(WhereClause2.prototype, "Collection", {
          get: function() {
            return this._ctx.table.db.Collection;
          },
          enumerable: false,
          configurable: true
        });
        WhereClause2.prototype.between = function(lower, upper, includeLower, includeUpper) {
          includeLower = includeLower !== false;
          includeUpper = includeUpper === true;
          try {
            if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper))
              return emptyCollection(this);
            return new this.Collection(this, function() {
              return createRange(lower, upper, !includeLower, !includeUpper);
            });
          } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
          }
        };
        WhereClause2.prototype.equals = function(value) {
          if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
          return new this.Collection(this, function() {
            return rangeEqual(value);
          });
        };
        WhereClause2.prototype.above = function(value) {
          if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
          return new this.Collection(this, function() {
            return createRange(value, void 0, true);
          });
        };
        WhereClause2.prototype.aboveOrEqual = function(value) {
          if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
          return new this.Collection(this, function() {
            return createRange(value, void 0, false);
          });
        };
        WhereClause2.prototype.below = function(value) {
          if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
          return new this.Collection(this, function() {
            return createRange(void 0, value, false, true);
          });
        };
        WhereClause2.prototype.belowOrEqual = function(value) {
          if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
          return new this.Collection(this, function() {
            return createRange(void 0, value);
          });
        };
        WhereClause2.prototype.startsWith = function(str) {
          if (typeof str !== "string")
            return fail(this, STRING_EXPECTED);
          return this.between(str, str + maxString, true, true);
        };
        WhereClause2.prototype.startsWithIgnoreCase = function(str) {
          if (str === "")
            return this.startsWith(str);
          return addIgnoreCaseAlgorithm(this, function(x, a) {
            return x.indexOf(a[0]) === 0;
          }, [str], maxString);
        };
        WhereClause2.prototype.equalsIgnoreCase = function(str) {
          return addIgnoreCaseAlgorithm(this, function(x, a) {
            return x === a[0];
          }, [str], "");
        };
        WhereClause2.prototype.anyOfIgnoreCase = function() {
          var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
          if (set.length === 0)
            return emptyCollection(this);
          return addIgnoreCaseAlgorithm(this, function(x, a) {
            return a.indexOf(x) !== -1;
          }, set, "");
        };
        WhereClause2.prototype.startsWithAnyOfIgnoreCase = function() {
          var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
          if (set.length === 0)
            return emptyCollection(this);
          return addIgnoreCaseAlgorithm(this, function(x, a) {
            return a.some(function(n) {
              return x.indexOf(n) === 0;
            });
          }, set, maxString);
        };
        WhereClause2.prototype.anyOf = function() {
          var _this = this;
          var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
          var compare = this._cmp;
          try {
            set.sort(compare);
          } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
          }
          if (set.length === 0)
            return emptyCollection(this);
          var c = new this.Collection(this, function() {
            return createRange(set[0], set[set.length - 1]);
          });
          c._ondirectionchange = function(direction) {
            compare = direction === "next" ? _this._ascending : _this._descending;
            set.sort(compare);
          };
          var i = 0;
          c._addAlgorithm(function(cursor, advance, resolve) {
            var key = cursor.key;
            while (compare(key, set[i]) > 0) {
              ++i;
              if (i === set.length) {
                advance(resolve);
                return false;
              }
            }
            if (compare(key, set[i]) === 0) {
              return true;
            } else {
              advance(function() {
                cursor.continue(set[i]);
              });
              return false;
            }
          });
          return c;
        };
        WhereClause2.prototype.notEqual = function(value) {
          return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
        };
        WhereClause2.prototype.noneOf = function() {
          var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
          if (set.length === 0)
            return new this.Collection(this);
          try {
            set.sort(this._ascending);
          } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
          }
          var ranges = set.reduce(function(res, val) {
            return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
          }, null);
          ranges.push([set[set.length - 1], this.db._maxKey]);
          return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
        };
        WhereClause2.prototype.inAnyRange = function(ranges, options) {
          var _this = this;
          var cmp3 = this._cmp, ascending = this._ascending, descending = this._descending, min2 = this._min, max2 = this._max;
          if (ranges.length === 0)
            return emptyCollection(this);
          if (!ranges.every(function(range) {
            return range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0;
          })) {
            return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
          }
          var includeLowers = !options || options.includeLowers !== false;
          var includeUppers = options && options.includeUppers === true;
          function addRange2(ranges2, newRange) {
            var i = 0, l = ranges2.length;
            for (; i < l; ++i) {
              var range = ranges2[i];
              if (cmp3(newRange[0], range[1]) < 0 && cmp3(newRange[1], range[0]) > 0) {
                range[0] = min2(range[0], newRange[0]);
                range[1] = max2(range[1], newRange[1]);
                break;
              }
            }
            if (i === l)
              ranges2.push(newRange);
            return ranges2;
          }
          var sortDirection = ascending;
          function rangeSorter(a, b) {
            return sortDirection(a[0], b[0]);
          }
          var set;
          try {
            set = ranges.reduce(addRange2, []);
            set.sort(rangeSorter);
          } catch (ex) {
            return fail(this, INVALID_KEY_ARGUMENT);
          }
          var rangePos = 0;
          var keyIsBeyondCurrentEntry = includeUppers ? function(key) {
            return ascending(key, set[rangePos][1]) > 0;
          } : function(key) {
            return ascending(key, set[rangePos][1]) >= 0;
          };
          var keyIsBeforeCurrentEntry = includeLowers ? function(key) {
            return descending(key, set[rangePos][0]) > 0;
          } : function(key) {
            return descending(key, set[rangePos][0]) >= 0;
          };
          function keyWithinCurrentRange(key) {
            return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
          }
          var checkKey = keyIsBeyondCurrentEntry;
          var c = new this.Collection(this, function() {
            return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
          });
          c._ondirectionchange = function(direction) {
            if (direction === "next") {
              checkKey = keyIsBeyondCurrentEntry;
              sortDirection = ascending;
            } else {
              checkKey = keyIsBeforeCurrentEntry;
              sortDirection = descending;
            }
            set.sort(rangeSorter);
          };
          c._addAlgorithm(function(cursor, advance, resolve) {
            var key = cursor.key;
            while (checkKey(key)) {
              ++rangePos;
              if (rangePos === set.length) {
                advance(resolve);
                return false;
              }
            }
            if (keyWithinCurrentRange(key)) {
              return true;
            } else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
              return false;
            } else {
              advance(function() {
                if (sortDirection === ascending)
                  cursor.continue(set[rangePos][0]);
                else
                  cursor.continue(set[rangePos][1]);
              });
              return false;
            }
          });
          return c;
        };
        WhereClause2.prototype.startsWithAnyOf = function() {
          var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
          if (!set.every(function(s) {
            return typeof s === "string";
          })) {
            return fail(this, "startsWithAnyOf() only works with strings");
          }
          if (set.length === 0)
            return emptyCollection(this);
          return this.inAnyRange(set.map(function(str) {
            return [str, str + maxString];
          }));
        };
        return WhereClause2;
      })();
      function createWhereClauseConstructor(db) {
        return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
          this.db = db;
          this._ctx = {
            table,
            index: index === ":id" ? null : index,
            or: orCollection
          };
          this._cmp = this._ascending = cmp2;
          this._descending = function(a, b) {
            return cmp2(b, a);
          };
          this._max = function(a, b) {
            return cmp2(a, b) > 0 ? a : b;
          };
          this._min = function(a, b) {
            return cmp2(a, b) < 0 ? a : b;
          };
          this._IDBKeyRange = db._deps.IDBKeyRange;
          if (!this._IDBKeyRange)
            throw new exceptions.MissingAPI();
        });
      }
      function eventRejectHandler(reject) {
        return wrap(function(event) {
          preventDefault(event);
          reject(event.target.error);
          return false;
        });
      }
      function preventDefault(event) {
        if (event.stopPropagation)
          event.stopPropagation();
        if (event.preventDefault)
          event.preventDefault();
      }
      var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
      var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
      var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
      var Transaction2 = (function() {
        function Transaction3() {
        }
        Transaction3.prototype._lock = function() {
          assert(!PSD.global);
          ++this._reculock;
          if (this._reculock === 1 && !PSD.global)
            PSD.lockOwnerFor = this;
          return this;
        };
        Transaction3.prototype._unlock = function() {
          assert(!PSD.global);
          if (--this._reculock === 0) {
            if (!PSD.global)
              PSD.lockOwnerFor = null;
            while (this._blockedFuncs.length > 0 && !this._locked()) {
              var fnAndPSD = this._blockedFuncs.shift();
              try {
                usePSD(fnAndPSD[1], fnAndPSD[0]);
              } catch (e) {
              }
            }
          }
          return this;
        };
        Transaction3.prototype._locked = function() {
          return this._reculock && PSD.lockOwnerFor !== this;
        };
        Transaction3.prototype.create = function(idbtrans) {
          var _this = this;
          if (!this.mode)
            return this;
          var idbdb = this.db.idbdb;
          var dbOpenError = this.db._state.dbOpenError;
          assert(!this.idbtrans);
          if (!idbtrans && !idbdb) {
            switch (dbOpenError && dbOpenError.name) {
              case "DatabaseClosedError":
                throw new exceptions.DatabaseClosed(dbOpenError);
              case "MissingAPIError":
                throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
              default:
                throw new exceptions.OpenFailed(dbOpenError);
            }
          }
          if (!this.active)
            throw new exceptions.TransactionInactive();
          assert(this._completion._state === null);
          idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : idbdb.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }));
          idbtrans.onerror = wrap(function(ev) {
            preventDefault(ev);
            _this._reject(idbtrans.error);
          });
          idbtrans.onabort = wrap(function(ev) {
            preventDefault(ev);
            _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
            _this.active = false;
            _this.on("abort").fire(ev);
          });
          idbtrans.oncomplete = wrap(function() {
            _this.active = false;
            _this._resolve();
            if ("mutatedParts" in idbtrans) {
              globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
            }
          });
          return this;
        };
        Transaction3.prototype._promise = function(mode, fn2, bWriteLock) {
          var _this = this;
          if (mode === "readwrite" && this.mode !== "readwrite")
            return rejection(new exceptions.ReadOnly("Transaction is readonly"));
          if (!this.active)
            return rejection(new exceptions.TransactionInactive());
          if (this._locked()) {
            return new DexiePromise(function(resolve, reject) {
              _this._blockedFuncs.push([function() {
                _this._promise(mode, fn2, bWriteLock).then(resolve, reject);
              }, PSD]);
            });
          } else if (bWriteLock) {
            return newScope(function() {
              var p2 = new DexiePromise(function(resolve, reject) {
                _this._lock();
                var rv = fn2(resolve, reject, _this);
                if (rv && rv.then)
                  rv.then(resolve, reject);
              });
              p2.finally(function() {
                return _this._unlock();
              });
              p2._lib = true;
              return p2;
            });
          } else {
            var p = new DexiePromise(function(resolve, reject) {
              var rv = fn2(resolve, reject, _this);
              if (rv && rv.then)
                rv.then(resolve, reject);
            });
            p._lib = true;
            return p;
          }
        };
        Transaction3.prototype._root = function() {
          return this.parent ? this.parent._root() : this;
        };
        Transaction3.prototype.waitFor = function(promiseLike) {
          var root = this._root();
          var promise = DexiePromise.resolve(promiseLike);
          if (root._waitingFor) {
            root._waitingFor = root._waitingFor.then(function() {
              return promise;
            });
          } else {
            root._waitingFor = promise;
            root._waitingQueue = [];
            var store = root.idbtrans.objectStore(root.storeNames[0]);
            (function spin() {
              ++root._spinCount;
              while (root._waitingQueue.length)
                root._waitingQueue.shift()();
              if (root._waitingFor)
                store.get(-Infinity).onsuccess = spin;
            })();
          }
          var currentWaitPromise = root._waitingFor;
          return new DexiePromise(function(resolve, reject) {
            promise.then(function(res) {
              return root._waitingQueue.push(wrap(resolve.bind(null, res)));
            }, function(err) {
              return root._waitingQueue.push(wrap(reject.bind(null, err)));
            }).finally(function() {
              if (root._waitingFor === currentWaitPromise) {
                root._waitingFor = null;
              }
            });
          });
        };
        Transaction3.prototype.abort = function() {
          if (this.active) {
            this.active = false;
            if (this.idbtrans)
              this.idbtrans.abort();
            this._reject(new exceptions.Abort());
          }
        };
        Transaction3.prototype.table = function(tableName) {
          var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
          if (hasOwn(memoizedTables, tableName))
            return memoizedTables[tableName];
          var tableSchema = this.schema[tableName];
          if (!tableSchema) {
            throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
          }
          var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
          transactionBoundTable.core = this.db.core.table(tableName);
          memoizedTables[tableName] = transactionBoundTable;
          return transactionBoundTable;
        };
        return Transaction3;
      })();
      function createTransactionConstructor(db) {
        return makeClassConstructor(Transaction2.prototype, function Transaction3(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
          var _this = this;
          if (mode !== "readonly")
            storeNames.forEach(function(storeName) {
              var _a2;
              var yProps = (_a2 = dbschema[storeName]) === null || _a2 === void 0 ? void 0 : _a2.yProps;
              if (yProps)
                storeNames = storeNames.concat(yProps.map(function(p) {
                  return p.updatesTable;
                }));
            });
          this.db = db;
          this.mode = mode;
          this.storeNames = storeNames;
          this.schema = dbschema;
          this.chromeTransactionDurability = chromeTransactionDurability;
          this.idbtrans = null;
          this.on = Events(this, "complete", "error", "abort");
          this.parent = parent || null;
          this.active = true;
          this._reculock = 0;
          this._blockedFuncs = [];
          this._resolve = null;
          this._reject = null;
          this._waitingFor = null;
          this._waitingQueue = null;
          this._spinCount = 0;
          this._completion = new DexiePromise(function(resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
          });
          this._completion.then(function() {
            _this.active = false;
            _this.on.complete.fire();
          }, function(e) {
            var wasActive = _this.active;
            _this.active = false;
            _this.on.error.fire(e);
            _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
            return rejection(e);
          });
        });
      }
      function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey, type2) {
        return {
          name,
          keyPath,
          unique,
          multi,
          auto,
          compound,
          src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath),
          type: type2
        };
      }
      function nameFromKeyPath(keyPath) {
        return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
      }
      function createTableSchema(name, primKey, indexes) {
        return {
          name,
          primKey,
          indexes,
          mappedClass: null,
          idxByName: arrayToObject(indexes, function(index) {
            return [index.name, index];
          })
        };
      }
      function safariMultiStoreFix(storeNames) {
        return storeNames.length === 1 ? storeNames[0] : storeNames;
      }
      var getMaxKey = function(IdbKeyRange) {
        try {
          IdbKeyRange.only([[]]);
          getMaxKey = function() {
            return [[]];
          };
          return [[]];
        } catch (e) {
          getMaxKey = function() {
            return maxString;
          };
          return maxString;
        }
      };
      function getKeyExtractor(keyPath) {
        if (keyPath == null) {
          return function() {
            return void 0;
          };
        } else if (typeof keyPath === "string") {
          return getSinglePathKeyExtractor(keyPath);
        } else {
          return function(obj) {
            return getByKeyPath2(obj, keyPath);
          };
        }
      }
      function getSinglePathKeyExtractor(keyPath) {
        var split = keyPath.split(".");
        if (split.length === 1) {
          return function(obj) {
            return obj[keyPath];
          };
        } else {
          return function(obj) {
            return getByKeyPath2(obj, keyPath);
          };
        }
      }
      function arrayify(arrayLike) {
        return [].slice.call(arrayLike);
      }
      var _id_counter = 0;
      function getKeyPathAlias(keyPath) {
        return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : "[".concat(keyPath.join("+"), "]");
      }
      function createDBCore(db, IdbKeyRange, tmpTrans) {
        function extractSchema(db2, trans) {
          var tables2 = arrayify(db2.objectStoreNames);
          return {
            schema: {
              name: db2.name,
              tables: tables2.map(function(table) {
                return trans.objectStore(table);
              }).map(function(store) {
                var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
                var compound = isArray2(keyPath);
                var outbound = keyPath == null;
                var indexByKeyPath = {};
                var result = {
                  name: store.name,
                  primaryKey: {
                    name: null,
                    isPrimaryKey: true,
                    outbound,
                    compound,
                    keyPath,
                    autoIncrement,
                    unique: true,
                    extractKey: getKeyExtractor(keyPath)
                  },
                  indexes: arrayify(store.indexNames).map(function(indexName) {
                    return store.index(indexName);
                  }).map(function(index) {
                    var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath2 = index.keyPath;
                    var compound2 = isArray2(keyPath2);
                    var result2 = {
                      name,
                      compound: compound2,
                      keyPath: keyPath2,
                      unique,
                      multiEntry,
                      extractKey: getKeyExtractor(keyPath2)
                    };
                    indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
                    return result2;
                  }),
                  getIndexByKeyPath: function(keyPath2) {
                    return indexByKeyPath[getKeyPathAlias(keyPath2)];
                  }
                };
                indexByKeyPath[":id"] = result.primaryKey;
                if (keyPath != null) {
                  indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
                }
                return result;
              })
            },
            hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
          };
        }
        function makeIDBKeyRange(range) {
          if (range.type === 3)
            return null;
          if (range.type === 4)
            throw new Error("Cannot convert never type to IDBKeyRange");
          var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
          var idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
          return idbRange;
        }
        function createDbCoreTable(tableSchema) {
          var tableName = tableSchema.name;
          function mutate(_a3) {
            var trans = _a3.trans, type2 = _a3.type, keys3 = _a3.keys, values = _a3.values, range = _a3.range;
            return new Promise(function(resolve, reject) {
              resolve = wrap(resolve);
              var store = trans.objectStore(tableName);
              var outbound = store.keyPath == null;
              var isAddOrPut = type2 === "put" || type2 === "add";
              if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange")
                throw new Error("Invalid operation type: " + type2);
              var length3 = (keys3 || values || { length: 1 }).length;
              if (keys3 && values && keys3.length !== values.length) {
                throw new Error("Given keys array must have same length as given values array.");
              }
              if (length3 === 0)
                return resolve({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              var req;
              var reqs = [];
              var failures = [];
              var numFailures = 0;
              var errorHandler = function(event) {
                ++numFailures;
                preventDefault(event);
              };
              if (type2 === "deleteRange") {
                if (range.type === 4)
                  return resolve({ numFailures, failures, results: [], lastResult: void 0 });
                if (range.type === 3)
                  reqs.push(req = store.clear());
                else
                  reqs.push(req = store.delete(makeIDBKeyRange(range)));
              } else {
                var _a4 = isAddOrPut ? outbound ? [values, keys3] : [values, null] : [keys3, null], args1 = _a4[0], args2 = _a4[1];
                if (isAddOrPut) {
                  for (var i = 0; i < length3; ++i) {
                    reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
                    req.onerror = errorHandler;
                  }
                } else {
                  for (var i = 0; i < length3; ++i) {
                    reqs.push(req = store[type2](args1[i]));
                    req.onerror = errorHandler;
                  }
                }
              }
              var done = function(event) {
                var lastResult = event.target.result;
                reqs.forEach(function(req2, i2) {
                  return req2.error != null && (failures[i2] = req2.error);
                });
                resolve({
                  numFailures,
                  failures,
                  results: type2 === "delete" ? keys3 : reqs.map(function(req2) {
                    return req2.result;
                  }),
                  lastResult
                });
              };
              req.onerror = function(event) {
                errorHandler(event);
                done(event);
              };
              req.onsuccess = done;
            });
          }
          function openCursor2(_a3) {
            var trans = _a3.trans, values = _a3.values, query2 = _a3.query, reverse = _a3.reverse, unique = _a3.unique;
            return new Promise(function(resolve, reject) {
              resolve = wrap(resolve);
              var index = query2.index, range = query2.range;
              var store = trans.objectStore(tableName);
              var source = index.isPrimaryKey ? store : store.index(index.name);
              var direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
              var req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
              req.onerror = eventRejectHandler(reject);
              req.onsuccess = wrap(function(ev) {
                var cursor = req.result;
                if (!cursor) {
                  resolve(null);
                  return;
                }
                cursor.___id = ++_id_counter;
                cursor.done = false;
                var _cursorContinue = cursor.continue.bind(cursor);
                var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                if (_cursorContinuePrimaryKey)
                  _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
                var _cursorAdvance = cursor.advance.bind(cursor);
                var doThrowCursorIsNotStarted = function() {
                  throw new Error("Cursor not started");
                };
                var doThrowCursorIsStopped = function() {
                  throw new Error("Cursor not stopped");
                };
                cursor.trans = trans;
                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
                cursor.fail = wrap(reject);
                cursor.next = function() {
                  var _this = this;
                  var gotOne = 1;
                  return this.start(function() {
                    return gotOne-- ? _this.continue() : _this.stop();
                  }).then(function() {
                    return _this;
                  });
                };
                cursor.start = function(callback) {
                  var iterationPromise = new Promise(function(resolveIteration, rejectIteration) {
                    resolveIteration = wrap(resolveIteration);
                    req.onerror = eventRejectHandler(rejectIteration);
                    cursor.fail = rejectIteration;
                    cursor.stop = function(value) {
                      cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                      resolveIteration(value);
                    };
                  });
                  var guardedCallback = function() {
                    if (req.result) {
                      try {
                        callback();
                      } catch (err) {
                        cursor.fail(err);
                      }
                    } else {
                      cursor.done = true;
                      cursor.start = function() {
                        throw new Error("Cursor behind last entry");
                      };
                      cursor.stop();
                    }
                  };
                  req.onsuccess = wrap(function(ev2) {
                    req.onsuccess = guardedCallback;
                    guardedCallback();
                  });
                  cursor.continue = _cursorContinue;
                  cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                  cursor.advance = _cursorAdvance;
                  guardedCallback();
                  return iterationPromise;
                };
                resolve(cursor);
              }, reject);
            });
          }
          function query(hasGetAll2) {
            return function(request) {
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var trans = request.trans, values = request.values, limit = request.limit, query2 = request.query;
                var nonInfinitLimit = limit === Infinity ? void 0 : limit;
                var index = query2.index, range = query2.range;
                var store = trans.objectStore(tableName);
                var source = index.isPrimaryKey ? store : store.index(index.name);
                var idbKeyRange = makeIDBKeyRange(range);
                if (limit === 0)
                  return resolve({ result: [] });
                if (hasGetAll2) {
                  var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
                  req.onsuccess = function(event) {
                    return resolve({ result: event.target.result });
                  };
                  req.onerror = eventRejectHandler(reject);
                } else {
                  var count_1 = 0;
                  var req_1 = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
                  var result_1 = [];
                  req_1.onsuccess = function(event) {
                    var cursor = req_1.result;
                    if (!cursor)
                      return resolve({ result: result_1 });
                    result_1.push(values ? cursor.value : cursor.primaryKey);
                    if (++count_1 === limit)
                      return resolve({ result: result_1 });
                    cursor.continue();
                  };
                  req_1.onerror = eventRejectHandler(reject);
                }
              });
            };
          }
          return {
            name: tableName,
            schema: tableSchema,
            mutate,
            getMany: function(_a3) {
              var trans = _a3.trans, keys3 = _a3.keys;
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var store = trans.objectStore(tableName);
                var length3 = keys3.length;
                var result = new Array(length3);
                var keyCount = 0;
                var callbackCount = 0;
                var req;
                var successHandler = function(event) {
                  var req2 = event.target;
                  if ((result[req2._pos] = req2.result) != null)
                    ;
                  if (++callbackCount === keyCount)
                    resolve(result);
                };
                var errorHandler = eventRejectHandler(reject);
                for (var i = 0; i < length3; ++i) {
                  var key = keys3[i];
                  if (key != null) {
                    req = store.get(keys3[i]);
                    req._pos = i;
                    req.onsuccess = successHandler;
                    req.onerror = errorHandler;
                    ++keyCount;
                  }
                }
                if (keyCount === 0)
                  resolve(result);
              });
            },
            get: function(_a3) {
              var trans = _a3.trans, key = _a3.key;
              return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var store = trans.objectStore(tableName);
                var req = store.get(key);
                req.onsuccess = function(event) {
                  return resolve(event.target.result);
                };
                req.onerror = eventRejectHandler(reject);
              });
            },
            query: query(hasGetAll),
            openCursor: openCursor2,
            count: function(_a3) {
              var query2 = _a3.query, trans = _a3.trans;
              var index = query2.index, range = query2.range;
              return new Promise(function(resolve, reject) {
                var store = trans.objectStore(tableName);
                var source = index.isPrimaryKey ? store : store.index(index.name);
                var idbKeyRange = makeIDBKeyRange(range);
                var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
                req.onsuccess = wrap(function(ev) {
                  return resolve(ev.target.result);
                });
                req.onerror = eventRejectHandler(reject);
              });
            }
          };
        }
        var _a2 = extractSchema(db, tmpTrans), schema = _a2.schema, hasGetAll = _a2.hasGetAll;
        var tables = schema.tables.map(function(tableSchema) {
          return createDbCoreTable(tableSchema);
        });
        var tableMap = {};
        tables.forEach(function(table) {
          return tableMap[table.name] = table;
        });
        return {
          stack: "dbcore",
          transaction: db.transaction.bind(db),
          table: function(name) {
            var result = tableMap[name];
            if (!result)
              throw new Error("Table '".concat(name, "' not found"));
            return tableMap[name];
          },
          MIN_KEY: -Infinity,
          MAX_KEY: getMaxKey(IdbKeyRange),
          schema
        };
      }
      function createMiddlewareStack(stackImpl, middlewares) {
        return middlewares.reduce(function(down, _a2) {
          var create7 = _a2.create;
          return __assign(__assign({}, down), create7(down));
        }, stackImpl);
      }
      function createMiddlewareStacks(middlewares, idbdb, _a2, tmpTrans) {
        var IDBKeyRange = _a2.IDBKeyRange;
        _a2.indexedDB;
        var dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
        return {
          dbcore
        };
      }
      function generateMiddlewareStacks(db, tmpTrans) {
        var idbdb = tmpTrans.db;
        var stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
        db.core = stacks.dbcore;
        db.tables.forEach(function(table) {
          var tableName = table.name;
          if (db.core.schema.tables.some(function(tbl) {
            return tbl.name === tableName;
          })) {
            table.core = db.core.table(tableName);
            if (db[tableName] instanceof db.Table) {
              db[tableName].core = table.core;
            }
          }
        });
      }
      function setApiOnPlace(db, objs, tableNames, dbschema) {
        tableNames.forEach(function(tableName) {
          var schema = dbschema[tableName];
          objs.forEach(function(obj) {
            var propDesc = getPropertyDescriptor(obj, tableName);
            if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
              if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
                setProp(obj, tableName, {
                  get: function() {
                    return this.table(tableName);
                  },
                  set: function(value) {
                    defineProperty(this, tableName, { value, writable: true, configurable: true, enumerable: true });
                  }
                });
              } else {
                obj[tableName] = new db.Table(tableName, schema);
              }
            }
          });
        });
      }
      function removeTablesApi(db, objs) {
        objs.forEach(function(obj) {
          for (var key in obj) {
            if (obj[key] instanceof db.Table)
              delete obj[key];
          }
        });
      }
      function lowerVersionFirst(a, b) {
        return a._cfg.version - b._cfg.version;
      }
      function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
        var globalSchema = db._dbSchema;
        if (idbUpgradeTrans.objectStoreNames.contains("$meta") && !globalSchema.$meta) {
          globalSchema.$meta = createTableSchema("$meta", parseIndexSyntax("")[0], []);
          db._storeNames.push("$meta");
        }
        var trans = db._createTransaction("readwrite", db._storeNames, globalSchema);
        trans.create(idbUpgradeTrans);
        trans._completion.catch(reject);
        var rejectTransaction = trans._reject.bind(trans);
        var transless = PSD.transless || PSD;
        newScope(function() {
          PSD.trans = trans;
          PSD.transless = transless;
          if (oldVersion === 0) {
            keys2(globalSchema).forEach(function(tableName) {
              createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
            });
            generateMiddlewareStacks(db, idbUpgradeTrans);
            DexiePromise.follow(function() {
              return db.on.populate.fire(trans);
            }).catch(rejectTransaction);
          } else {
            generateMiddlewareStacks(db, idbUpgradeTrans);
            return getExistingVersion(db, trans, oldVersion).then(function(oldVersion2) {
              return updateTablesAndIndexes(db, oldVersion2, trans, idbUpgradeTrans);
            }).catch(rejectTransaction);
          }
        });
      }
      function patchCurrentVersion(db, idbUpgradeTrans) {
        createMissingTables(db._dbSchema, idbUpgradeTrans);
        if (idbUpgradeTrans.db.version % 10 === 0 && !idbUpgradeTrans.objectStoreNames.contains("$meta")) {
          idbUpgradeTrans.db.createObjectStore("$meta").add(Math.ceil(idbUpgradeTrans.db.version / 10 - 1), "version");
        }
        var globalSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
        adjustToExistingIndexNames(db, db._dbSchema, idbUpgradeTrans);
        var diff = getSchemaDiff(globalSchema, db._dbSchema);
        var _loop_1 = function(tableChange2) {
          if (tableChange2.change.length || tableChange2.recreate) {
            console.warn("Unable to patch indexes of table ".concat(tableChange2.name, " because it has changes on the type of index or primary key."));
            return { value: void 0 };
          }
          var store = idbUpgradeTrans.objectStore(tableChange2.name);
          tableChange2.add.forEach(function(idx) {
            if (debug)
              console.debug("Dexie upgrade patch: Creating missing index ".concat(tableChange2.name, ".").concat(idx.src));
            addIndex(store, idx);
          });
        };
        for (var _i = 0, _a2 = diff.change; _i < _a2.length; _i++) {
          var tableChange = _a2[_i];
          var state_1 = _loop_1(tableChange);
          if (typeof state_1 === "object")
            return state_1.value;
        }
      }
      function getExistingVersion(db, trans, oldVersion) {
        if (trans.storeNames.includes("$meta")) {
          return trans.table("$meta").get("version").then(function(metaVersion) {
            return metaVersion != null ? metaVersion : oldVersion;
          });
        } else {
          return DexiePromise.resolve(oldVersion);
        }
      }
      function updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans) {
        var queue = [];
        var versions = db._versions;
        var globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
        var versToRun = versions.filter(function(v) {
          return v._cfg.version >= oldVersion;
        });
        if (versToRun.length === 0) {
          return DexiePromise.resolve();
        }
        versToRun.forEach(function(version) {
          queue.push(function() {
            var oldSchema = globalSchema;
            var newSchema = version._cfg.dbschema;
            adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
            adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
            globalSchema = db._dbSchema = newSchema;
            var diff = getSchemaDiff(oldSchema, newSchema);
            diff.add.forEach(function(tuple) {
              createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
            });
            diff.change.forEach(function(change) {
              if (change.recreate) {
                throw new exceptions.Upgrade("Not yet support for changing primary key");
              } else {
                var store_1 = idbUpgradeTrans.objectStore(change.name);
                change.add.forEach(function(idx) {
                  return addIndex(store_1, idx);
                });
                change.change.forEach(function(idx) {
                  store_1.deleteIndex(idx.name);
                  addIndex(store_1, idx);
                });
                change.del.forEach(function(idxName) {
                  return store_1.deleteIndex(idxName);
                });
              }
            });
            var contentUpgrade = version._cfg.contentUpgrade;
            if (contentUpgrade && version._cfg.version > oldVersion) {
              generateMiddlewareStacks(db, idbUpgradeTrans);
              trans._memoizedTables = {};
              var upgradeSchema_1 = shallowClone(newSchema);
              diff.del.forEach(function(table) {
                upgradeSchema_1[table] = oldSchema[table];
              });
              removeTablesApi(db, [db.Transaction.prototype]);
              setApiOnPlace(db, [db.Transaction.prototype], keys2(upgradeSchema_1), upgradeSchema_1);
              trans.schema = upgradeSchema_1;
              var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
              if (contentUpgradeIsAsync_1) {
                incrementExpectedAwaits();
              }
              var returnValue_1;
              var promiseFollowed = DexiePromise.follow(function() {
                returnValue_1 = contentUpgrade(trans);
                if (returnValue_1) {
                  if (contentUpgradeIsAsync_1) {
                    var decrementor = decrementExpectedAwaits.bind(null, null);
                    returnValue_1.then(decrementor, decrementor);
                  }
                }
              });
              return returnValue_1 && typeof returnValue_1.then === "function" ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function() {
                return returnValue_1;
              });
            }
          });
          queue.push(function(idbtrans) {
            var newSchema = version._cfg.dbschema;
            deleteRemovedTables(newSchema, idbtrans);
            removeTablesApi(db, [db.Transaction.prototype]);
            setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
            trans.schema = db._dbSchema;
          });
          queue.push(function(idbtrans) {
            if (db.idbdb.objectStoreNames.contains("$meta")) {
              if (Math.ceil(db.idbdb.version / 10) === version._cfg.version) {
                db.idbdb.deleteObjectStore("$meta");
                delete db._dbSchema.$meta;
                db._storeNames = db._storeNames.filter(function(name) {
                  return name !== "$meta";
                });
              } else {
                idbtrans.objectStore("$meta").put(version._cfg.version, "version");
              }
            }
          });
        });
        function runQueue() {
          return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
        }
        return runQueue().then(function() {
          createMissingTables(globalSchema, idbUpgradeTrans);
        });
      }
      function getSchemaDiff(oldSchema, newSchema) {
        var diff = {
          del: [],
          add: [],
          change: []
        };
        var table;
        for (table in oldSchema) {
          if (!newSchema[table])
            diff.del.push(table);
        }
        for (table in newSchema) {
          var oldDef = oldSchema[table], newDef = newSchema[table];
          if (!oldDef) {
            diff.add.push([table, newDef]);
          } else {
            var change = {
              name: table,
              def: newDef,
              recreate: false,
              del: [],
              add: [],
              change: []
            };
            if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto) {
              change.recreate = true;
              diff.change.push(change);
            } else {
              var oldIndexes = oldDef.idxByName;
              var newIndexes = newDef.idxByName;
              var idxName = void 0;
              for (idxName in oldIndexes) {
                if (!newIndexes[idxName])
                  change.del.push(idxName);
              }
              for (idxName in newIndexes) {
                var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                if (!oldIdx)
                  change.add.push(newIdx);
                else if (oldIdx.src !== newIdx.src)
                  change.change.push(newIdx);
              }
              if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                diff.change.push(change);
              }
            }
          }
        }
        return diff;
      }
      function createTable(idbtrans, tableName, primKey, indexes) {
        var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
        indexes.forEach(function(idx) {
          return addIndex(store, idx);
        });
        return store;
      }
      function createMissingTables(newSchema, idbtrans) {
        keys2(newSchema).forEach(function(tableName) {
          if (!idbtrans.db.objectStoreNames.contains(tableName)) {
            if (debug)
              console.debug("Dexie: Creating missing table", tableName);
            createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
          }
        });
      }
      function deleteRemovedTables(newSchema, idbtrans) {
        [].slice.call(idbtrans.db.objectStoreNames).forEach(function(storeName) {
          return newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName);
        });
      }
      function addIndex(store, idx) {
        store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
      }
      function buildGlobalSchema(db, idbdb, tmpTrans) {
        var globalSchema = {};
        var dbStoreNames = slice(idbdb.objectStoreNames, 0);
        dbStoreNames.forEach(function(storeName) {
          var store = tmpTrans.objectStore(storeName);
          var keyPath = store.keyPath;
          var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", true, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
          var indexes = [];
          for (var j = 0; j < store.indexNames.length; ++j) {
            var idbindex = store.index(store.indexNames[j]);
            keyPath = idbindex.keyPath;
            var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
            indexes.push(index);
          }
          globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
        });
        return globalSchema;
      }
      function readGlobalSchema(db, idbdb, tmpTrans) {
        db.verno = idbdb.version / 10;
        var globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
        db._storeNames = slice(idbdb.objectStoreNames, 0);
        setApiOnPlace(db, [db._allTables], keys2(globalSchema), globalSchema);
      }
      function verifyInstalledSchema(db, tmpTrans) {
        var installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
        var diff = getSchemaDiff(installedSchema, db._dbSchema);
        return !(diff.add.length || diff.change.some(function(ch) {
          return ch.add.length || ch.change.length;
        }));
      }
      function adjustToExistingIndexNames(db, schema, idbtrans) {
        var storeNames = idbtrans.db.objectStoreNames;
        for (var i = 0; i < storeNames.length; ++i) {
          var storeName = storeNames[i];
          var store = idbtrans.objectStore(storeName);
          db._hasGetAll = "getAll" in store;
          for (var j = 0; j < store.indexNames.length; ++j) {
            var indexName = store.indexNames[j];
            var keyPath = store.index(indexName).keyPath;
            var dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
            if (schema[storeName]) {
              var indexSpec = schema[storeName].idxByName[dexieName];
              if (indexSpec) {
                indexSpec.name = indexName;
                delete schema[storeName].idxByName[dexieName];
                schema[storeName].idxByName[indexName] = indexSpec;
              }
            }
          }
        }
        if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
          db._hasGetAll = false;
        }
      }
      function parseIndexSyntax(primKeyAndIndexes) {
        return primKeyAndIndexes.split(",").map(function(index, indexNum) {
          var _a2;
          var typeSplit = index.split(":");
          var type2 = (_a2 = typeSplit[1]) === null || _a2 === void 0 ? void 0 : _a2.trim();
          index = typeSplit[0].trim();
          var name = index.replace(/([&*]|\+\+)/g, "");
          var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
          return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray2(keyPath), indexNum === 0, type2);
        });
      }
      var Version = (function() {
        function Version2() {
        }
        Version2.prototype._createTableSchema = function(name, primKey, indexes) {
          return createTableSchema(name, primKey, indexes);
        };
        Version2.prototype._parseIndexSyntax = function(primKeyAndIndexes) {
          return parseIndexSyntax(primKeyAndIndexes);
        };
        Version2.prototype._parseStoresSpec = function(stores, outSchema) {
          var _this = this;
          keys2(stores).forEach(function(tableName) {
            if (stores[tableName] !== null) {
              var indexes = _this._parseIndexSyntax(stores[tableName]);
              var primKey = indexes.shift();
              if (!primKey) {
                throw new exceptions.Schema("Invalid schema for table " + tableName + ": " + stores[tableName]);
              }
              primKey.unique = true;
              if (primKey.multi)
                throw new exceptions.Schema("Primary key cannot be multiEntry*");
              indexes.forEach(function(idx) {
                if (idx.auto)
                  throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                if (!idx.keyPath)
                  throw new exceptions.Schema("Index must have a name and cannot be an empty string");
              });
              var tblSchema = _this._createTableSchema(tableName, primKey, indexes);
              outSchema[tableName] = tblSchema;
            }
          });
        };
        Version2.prototype.stores = function(stores) {
          var db = this.db;
          this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
          var versions = db._versions;
          var storesSpec = {};
          var dbschema = {};
          versions.forEach(function(version) {
            extend(storesSpec, version._cfg.storesSource);
            dbschema = version._cfg.dbschema = {};
            version._parseStoresSpec(storesSpec, dbschema);
          });
          db._dbSchema = dbschema;
          removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
          setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys2(dbschema), dbschema);
          db._storeNames = keys2(dbschema);
          return this;
        };
        Version2.prototype.upgrade = function(upgradeFunction) {
          this._cfg.contentUpgrade = promisableChain2(this._cfg.contentUpgrade || nop2, upgradeFunction);
          return this;
        };
        return Version2;
      })();
      function createVersionConstructor(db) {
        return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
          this.db = db;
          this._cfg = {
            version: versionNumber,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
          };
        });
      }
      function getDbNamesTable(indexedDB2, IDBKeyRange) {
        var dbNamesDB = indexedDB2["_dbNamesDB"];
        if (!dbNamesDB) {
          dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
            addons: [],
            indexedDB: indexedDB2,
            IDBKeyRange
          });
          dbNamesDB.version(1).stores({ dbnames: "name" });
        }
        return dbNamesDB.table("dbnames");
      }
      function hasDatabasesNative(indexedDB2) {
        return indexedDB2 && typeof indexedDB2.databases === "function";
      }
      function getDatabaseNames(_a2) {
        var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
        return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(function(infos) {
          return infos.map(function(info) {
            return info.name;
          }).filter(function(name) {
            return name !== DBNAMES_DB;
          });
        }) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
      }
      function _onDatabaseCreated(_a2, name) {
        var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
        !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({ name }).catch(nop2);
      }
      function _onDatabaseDeleted(_a2, name) {
        var indexedDB2 = _a2.indexedDB, IDBKeyRange = _a2.IDBKeyRange;
        !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop2);
      }
      function vip(fn2) {
        return newScope(function() {
          PSD.letThrough = true;
          return fn2();
        });
      }
      function idbReady() {
        var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
        if (!isSafari || !indexedDB.databases)
          return Promise.resolve();
        var intervalId;
        return new Promise(function(resolve) {
          var tryIdb = function() {
            return indexedDB.databases().finally(resolve);
          };
          intervalId = setInterval(tryIdb, 100);
          tryIdb();
        }).finally(function() {
          return clearInterval(intervalId);
        });
      }
      var _a;
      function isEmptyRange(node) {
        return !("from" in node);
      }
      var RangeSet2 = function(fromOrTree, to2) {
        if (this) {
          extend(this, arguments.length ? { d: 1, from: fromOrTree, to: arguments.length > 1 ? to2 : fromOrTree } : { d: 0 });
        } else {
          var rv = new RangeSet2();
          if (fromOrTree && "d" in fromOrTree) {
            extend(rv, fromOrTree);
          }
          return rv;
        }
      };
      props(RangeSet2.prototype, (_a = {
        add: function(rangeSet) {
          mergeRanges2(this, rangeSet);
          return this;
        },
        addKey: function(key) {
          addRange(this, key, key);
          return this;
        },
        addKeys: function(keys3) {
          var _this = this;
          keys3.forEach(function(key) {
            return addRange(_this, key, key);
          });
          return this;
        },
        hasKey: function(key) {
          var node = getRangeSetIterator(this).next(key).value;
          return node && cmp2(node.from, key) <= 0 && cmp2(node.to, key) >= 0;
        }
      }, _a[iteratorSymbol] = function() {
        return getRangeSetIterator(this);
      }, _a));
      function addRange(target, from3, to2) {
        var diff = cmp2(from3, to2);
        if (isNaN(diff))
          return;
        if (diff > 0)
          throw RangeError();
        if (isEmptyRange(target))
          return extend(target, { from: from3, to: to2, d: 1 });
        var left = target.l;
        var right = target.r;
        if (cmp2(to2, target.from) < 0) {
          left ? addRange(left, from3, to2) : target.l = { from: from3, to: to2, d: 1, l: null, r: null };
          return rebalance(target);
        }
        if (cmp2(from3, target.to) > 0) {
          right ? addRange(right, from3, to2) : target.r = { from: from3, to: to2, d: 1, l: null, r: null };
          return rebalance(target);
        }
        if (cmp2(from3, target.from) < 0) {
          target.from = from3;
          target.l = null;
          target.d = right ? right.d + 1 : 1;
        }
        if (cmp2(to2, target.to) > 0) {
          target.to = to2;
          target.r = null;
          target.d = target.l ? target.l.d + 1 : 1;
        }
        var rightWasCutOff = !target.r;
        if (left && !target.l) {
          mergeRanges2(target, left);
        }
        if (right && rightWasCutOff) {
          mergeRanges2(target, right);
        }
      }
      function mergeRanges2(target, newSet) {
        function _addRangeSet(target2, _a2) {
          var from3 = _a2.from, to2 = _a2.to, l = _a2.l, r = _a2.r;
          addRange(target2, from3, to2);
          if (l)
            _addRangeSet(target2, l);
          if (r)
            _addRangeSet(target2, r);
        }
        if (!isEmptyRange(newSet))
          _addRangeSet(target, newSet);
      }
      function rangesOverlap2(rangeSet1, rangeSet2) {
        var i1 = getRangeSetIterator(rangeSet2);
        var nextResult1 = i1.next();
        if (nextResult1.done)
          return false;
        var a = nextResult1.value;
        var i2 = getRangeSetIterator(rangeSet1);
        var nextResult2 = i2.next(a.from);
        var b = nextResult2.value;
        while (!nextResult1.done && !nextResult2.done) {
          if (cmp2(b.from, a.to) <= 0 && cmp2(b.to, a.from) >= 0)
            return true;
          cmp2(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
        }
        return false;
      }
      function getRangeSetIterator(node) {
        var state = isEmptyRange(node) ? null : { s: 0, n: node };
        return {
          next: function(key) {
            var keyProvided = arguments.length > 0;
            while (state) {
              switch (state.s) {
                case 0:
                  state.s = 1;
                  if (keyProvided) {
                    while (state.n.l && cmp2(key, state.n.from) < 0)
                      state = { up: state, n: state.n.l, s: 1 };
                  } else {
                    while (state.n.l)
                      state = { up: state, n: state.n.l, s: 1 };
                  }
                case 1:
                  state.s = 2;
                  if (!keyProvided || cmp2(key, state.n.to) <= 0)
                    return { value: state.n, done: false };
                case 2:
                  if (state.n.r) {
                    state.s = 3;
                    state = { up: state, n: state.n.r, s: 0 };
                    continue;
                  }
                case 3:
                  state = state.up;
              }
            }
            return { done: true };
          }
        };
      }
      function rebalance(target) {
        var _a2, _b;
        var diff = (((_a2 = target.r) === null || _a2 === void 0 ? void 0 : _a2.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
        var r = diff > 1 ? "r" : diff < -1 ? "l" : "";
        if (r) {
          var l = r === "r" ? "l" : "r";
          var rootClone = __assign({}, target);
          var oldRootRight = target[r];
          target.from = oldRootRight.from;
          target.to = oldRootRight.to;
          target[r] = oldRootRight[r];
          rootClone[r] = oldRootRight[l];
          target[l] = rootClone;
          rootClone.d = computeDepth(rootClone);
        }
        target.d = computeDepth(target);
      }
      function computeDepth(_a2) {
        var r = _a2.r, l = _a2.l;
        return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
      }
      function extendObservabilitySet(target, newSet) {
        keys2(newSet).forEach(function(part) {
          if (target[part])
            mergeRanges2(target[part], newSet[part]);
          else
            target[part] = cloneSimpleObjectTree(newSet[part]);
        });
        return target;
      }
      function obsSetsOverlap(os1, os2) {
        return os1.all || os2.all || Object.keys(os1).some(function(key) {
          return os2[key] && rangesOverlap2(os2[key], os1[key]);
        });
      }
      var cache = {};
      var unsignaledParts = {};
      var isTaskEnqueued = false;
      function signalSubscribersLazily(part, optimistic) {
        extendObservabilitySet(unsignaledParts, part);
        if (!isTaskEnqueued) {
          isTaskEnqueued = true;
          setTimeout(function() {
            isTaskEnqueued = false;
            var parts = unsignaledParts;
            unsignaledParts = {};
            signalSubscribersNow(parts, false);
          }, 0);
        }
      }
      function signalSubscribersNow(updatedParts, deleteAffectedCacheEntries) {
        if (deleteAffectedCacheEntries === void 0) {
          deleteAffectedCacheEntries = false;
        }
        var queriesToSignal = /* @__PURE__ */ new Set();
        if (updatedParts.all) {
          for (var _i = 0, _a2 = Object.values(cache); _i < _a2.length; _i++) {
            var tblCache = _a2[_i];
            collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
          }
        } else {
          for (var key in updatedParts) {
            var parts = /^idb\:\/\/(.*)\/(.*)\//.exec(key);
            if (parts) {
              var dbName = parts[1], tableName = parts[2];
              var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
              if (tblCache)
                collectTableSubscribers(tblCache, updatedParts, queriesToSignal, deleteAffectedCacheEntries);
            }
          }
        }
        queriesToSignal.forEach(function(requery) {
          return requery();
        });
      }
      function collectTableSubscribers(tblCache, updatedParts, outQueriesToSignal, deleteAffectedCacheEntries) {
        var updatedEntryLists = [];
        for (var _i = 0, _a2 = Object.entries(tblCache.queries.query); _i < _a2.length; _i++) {
          var _b = _a2[_i], indexName = _b[0], entries = _b[1];
          var filteredEntries = [];
          for (var _c = 0, entries_1 = entries; _c < entries_1.length; _c++) {
            var entry = entries_1[_c];
            if (obsSetsOverlap(updatedParts, entry.obsSet)) {
              entry.subscribers.forEach(function(requery) {
                return outQueriesToSignal.add(requery);
              });
            } else if (deleteAffectedCacheEntries) {
              filteredEntries.push(entry);
            }
          }
          if (deleteAffectedCacheEntries)
            updatedEntryLists.push([indexName, filteredEntries]);
        }
        if (deleteAffectedCacheEntries) {
          for (var _d = 0, updatedEntryLists_1 = updatedEntryLists; _d < updatedEntryLists_1.length; _d++) {
            var _e2 = updatedEntryLists_1[_d], indexName = _e2[0], filteredEntries = _e2[1];
            tblCache.queries.query[indexName] = filteredEntries;
          }
        }
      }
      function dexieOpen(db) {
        var state = db._state;
        var indexedDB2 = db._deps.indexedDB;
        if (state.isBeingOpened || db.idbdb)
          return state.dbReadyPromise.then(function() {
            return state.dbOpenError ? rejection(state.dbOpenError) : db;
          });
        state.isBeingOpened = true;
        state.dbOpenError = null;
        state.openComplete = false;
        var openCanceller = state.openCanceller;
        var nativeVerToOpen = Math.round(db.verno * 10);
        var schemaPatchMode = false;
        function throwIfCancelled() {
          if (state.openCanceller !== openCanceller)
            throw new exceptions.DatabaseClosed("db.open() was cancelled");
        }
        var resolveDbReady = state.dbReadyResolve, upgradeTransaction = null, wasCreated = false;
        var tryOpenDB = function() {
          return new DexiePromise(function(resolve, reject) {
            throwIfCancelled();
            if (!indexedDB2)
              throw new exceptions.MissingAPI();
            var dbName = db.name;
            var req = state.autoSchema || !nativeVerToOpen ? indexedDB2.open(dbName) : indexedDB2.open(dbName, nativeVerToOpen);
            if (!req)
              throw new exceptions.MissingAPI();
            req.onerror = eventRejectHandler(reject);
            req.onblocked = wrap(db._fireOnBlocked);
            req.onupgradeneeded = wrap(function(e) {
              upgradeTransaction = req.transaction;
              if (state.autoSchema && !db._options.allowEmptyDB) {
                req.onerror = preventDefault;
                upgradeTransaction.abort();
                req.result.close();
                var delreq = indexedDB2.deleteDatabase(dbName);
                delreq.onsuccess = delreq.onerror = wrap(function() {
                  reject(new exceptions.NoSuchDatabase("Database ".concat(dbName, " doesnt exist")));
                });
              } else {
                upgradeTransaction.onerror = eventRejectHandler(reject);
                var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
                wasCreated = oldVer < 1;
                db.idbdb = req.result;
                if (schemaPatchMode) {
                  patchCurrentVersion(db, upgradeTransaction);
                }
                runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
              }
            }, reject);
            req.onsuccess = wrap(function() {
              upgradeTransaction = null;
              var idbdb = db.idbdb = req.result;
              var objectStoreNames = slice(idbdb.objectStoreNames);
              if (objectStoreNames.length > 0)
                try {
                  var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
                  if (state.autoSchema)
                    readGlobalSchema(db, idbdb, tmpTrans);
                  else {
                    adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
                    if (!verifyInstalledSchema(db, tmpTrans) && !schemaPatchMode) {
                      console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.");
                      idbdb.close();
                      nativeVerToOpen = idbdb.version + 1;
                      schemaPatchMode = true;
                      return resolve(tryOpenDB());
                    }
                  }
                  generateMiddlewareStacks(db, tmpTrans);
                } catch (e) {
                }
              connections.push(db);
              idbdb.onversionchange = wrap(function(ev) {
                state.vcFired = true;
                db.on("versionchange").fire(ev);
              });
              idbdb.onclose = wrap(function() {
                db.close({ disableAutoOpen: false });
              });
              if (wasCreated)
                _onDatabaseCreated(db._deps, dbName);
              resolve();
            }, reject);
          }).catch(function(err) {
            switch (err === null || err === void 0 ? void 0 : err.name) {
              case "UnknownError":
                if (state.PR1398_maxLoop > 0) {
                  state.PR1398_maxLoop--;
                  console.warn("Dexie: Workaround for Chrome UnknownError on open()");
                  return tryOpenDB();
                }
                break;
              case "VersionError":
                if (nativeVerToOpen > 0) {
                  nativeVerToOpen = 0;
                  return tryOpenDB();
                }
                break;
            }
            return DexiePromise.reject(err);
          });
        };
        return DexiePromise.race([
          openCanceller,
          (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(tryOpenDB)
        ]).then(function() {
          throwIfCancelled();
          state.onReadyBeingFired = [];
          return DexiePromise.resolve(vip(function() {
            return db.on.ready.fire(db.vip);
          })).then(function fireRemainders() {
            if (state.onReadyBeingFired.length > 0) {
              var remainders_1 = state.onReadyBeingFired.reduce(promisableChain2, nop2);
              state.onReadyBeingFired = [];
              return DexiePromise.resolve(vip(function() {
                return remainders_1(db.vip);
              })).then(fireRemainders);
            }
          });
        }).finally(function() {
          if (state.openCanceller === openCanceller) {
            state.onReadyBeingFired = null;
            state.isBeingOpened = false;
          }
        }).catch(function(err) {
          state.dbOpenError = err;
          try {
            upgradeTransaction && upgradeTransaction.abort();
          } catch (_a2) {
          }
          if (openCanceller === state.openCanceller) {
            db._close();
          }
          return rejection(err);
        }).finally(function() {
          state.openComplete = true;
          resolveDbReady();
        }).then(function() {
          if (wasCreated) {
            var everything_1 = {};
            db.tables.forEach(function(table) {
              table.schema.indexes.forEach(function(idx) {
                if (idx.name)
                  everything_1["idb://".concat(db.name, "/").concat(table.name, "/").concat(idx.name)] = new RangeSet2(-Infinity, [[[]]]);
              });
              everything_1["idb://".concat(db.name, "/").concat(table.name, "/")] = everything_1["idb://".concat(db.name, "/").concat(table.name, "/:dels")] = new RangeSet2(-Infinity, [[[]]]);
            });
            globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME).fire(everything_1);
            signalSubscribersNow(everything_1, true);
          }
          return db;
        });
      }
      function awaitIterator(iterator) {
        var callNext = function(result) {
          return iterator.next(result);
        }, doThrow = function(error) {
          return iterator.throw(error);
        }, onSuccess = step(callNext), onError = step(doThrow);
        function step(getNext) {
          return function(val) {
            var next = getNext(val), value = next.value;
            return next.done ? value : !value || typeof value.then !== "function" ? isArray2(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
          };
        }
        return step(callNext)();
      }
      function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
        var i = arguments.length;
        if (i < 2)
          throw new exceptions.InvalidArgument("Too few arguments");
        var args2 = new Array(i - 1);
        while (--i)
          args2[i - 1] = arguments[i];
        scopeFunc = args2.pop();
        var tables = flatten(args2);
        return [mode, tables, scopeFunc];
      }
      function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
        return DexiePromise.resolve().then(function() {
          var transless = PSD.transless || PSD;
          var trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
          trans.explicit = true;
          var zoneProps = {
            trans,
            transless
          };
          if (parentTransaction) {
            trans.idbtrans = parentTransaction.idbtrans;
          } else {
            try {
              trans.create();
              trans.idbtrans._explicit = true;
              db._state.PR1398_maxLoop = 3;
            } catch (ex) {
              if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
                console.warn("Dexie: Need to reopen db");
                db.close({ disableAutoOpen: false });
                return db.open().then(function() {
                  return enterTransactionScope(db, mode, storeNames, null, scopeFunc);
                });
              }
              return rejection(ex);
            }
          }
          var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
          if (scopeFuncIsAsync) {
            incrementExpectedAwaits();
          }
          var returnValue;
          var promiseFollowed = DexiePromise.follow(function() {
            returnValue = scopeFunc.call(trans, trans);
            if (returnValue) {
              if (scopeFuncIsAsync) {
                var decrementor = decrementExpectedAwaits.bind(null, null);
                returnValue.then(decrementor, decrementor);
              } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
                returnValue = awaitIterator(returnValue);
              }
            }
          }, zoneProps);
          return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(function(x) {
            return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : promiseFollowed.then(function() {
            return returnValue;
          })).then(function(x) {
            if (parentTransaction)
              trans._resolve();
            return trans._completion.then(function() {
              return x;
            });
          }).catch(function(e) {
            trans._reject(e);
            return rejection(e);
          });
        });
      }
      function pad(a, value, count) {
        var result = isArray2(a) ? a.slice() : [a];
        for (var i = 0; i < count; ++i)
          result.push(value);
        return result;
      }
      function createVirtualIndexMiddleware(down) {
        return __assign(__assign({}, down), { table: function(tableName) {
          var table = down.table(tableName);
          var schema = table.schema;
          var indexLookup = {};
          var allVirtualIndexes = [];
          function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
            var keyPathAlias = getKeyPathAlias(keyPath);
            var indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
            var keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
            var isVirtual = keyTail > 0;
            var virtualIndex = __assign(__assign({}, lowLevelIndex), { name: isVirtual ? "".concat(keyPathAlias, "(virtual-from:").concat(lowLevelIndex.name, ")") : lowLevelIndex.name, lowLevelIndex, isVirtual, keyTail, keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
            indexList.push(virtualIndex);
            if (!virtualIndex.isPrimaryKey) {
              allVirtualIndexes.push(virtualIndex);
            }
            if (keyLength > 1) {
              var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
              addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
            }
            indexList.sort(function(a, b) {
              return a.keyTail - b.keyTail;
            });
            return virtualIndex;
          }
          var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
          indexLookup[":id"] = [primaryKey];
          for (var _i = 0, _a2 = schema.indexes; _i < _a2.length; _i++) {
            var index = _a2[_i];
            addVirtualIndexes(index.keyPath, 0, index);
          }
          function findBestIndex(keyPath) {
            var result2 = indexLookup[getKeyPathAlias(keyPath)];
            return result2 && result2[0];
          }
          function translateRange(range, keyTail) {
            return {
              type: range.type === 1 ? 2 : range.type,
              lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
              lowerOpen: true,
              upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
              upperOpen: true
            };
          }
          function translateRequest(req) {
            var index2 = req.query.index;
            return index2.isVirtual ? __assign(__assign({}, req), { query: {
              index: index2.lowLevelIndex,
              range: translateRange(req.query.range, index2.keyTail)
            } }) : req;
          }
          var result = __assign(__assign({}, table), { schema: __assign(__assign({}, schema), { primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: function(req) {
            return table.count(translateRequest(req));
          }, query: function(req) {
            return table.query(translateRequest(req));
          }, openCursor: function(req) {
            var _a3 = req.query.index, keyTail = _a3.keyTail, isVirtual = _a3.isVirtual, keyLength = _a3.keyLength;
            if (!isVirtual)
              return table.openCursor(req);
            function createVirtualCursor(cursor) {
              function _continue(key) {
                key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
              }
              var virtualCursor = Object.create(cursor, {
                continue: { value: _continue },
                continuePrimaryKey: {
                  value: function(key, primaryKey2) {
                    cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                  }
                },
                primaryKey: {
                  get: function() {
                    return cursor.primaryKey;
                  }
                },
                key: {
                  get: function() {
                    var key = cursor.key;
                    return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                  }
                },
                value: {
                  get: function() {
                    return cursor.value;
                  }
                }
              });
              return virtualCursor;
            }
            return table.openCursor(translateRequest(req)).then(function(cursor) {
              return cursor && createVirtualCursor(cursor);
            });
          } });
          return result;
        } });
      }
      var virtualIndexMiddleware = {
        stack: "dbcore",
        name: "VirtualIndexMiddleware",
        level: 1,
        create: createVirtualIndexMiddleware
      };
      function getObjectDiff(a, b, rv, prfx) {
        rv = rv || {};
        prfx = prfx || "";
        keys2(a).forEach(function(prop) {
          if (!hasOwn(b, prop)) {
            rv[prfx + prop] = void 0;
          } else {
            var ap = a[prop], bp = b[prop];
            if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
              var apTypeName = toStringTag(ap);
              var bpTypeName = toStringTag(bp);
              if (apTypeName !== bpTypeName) {
                rv[prfx + prop] = b[prop];
              } else if (apTypeName === "Object") {
                getObjectDiff(ap, bp, rv, prfx + prop + ".");
              } else if (ap !== bp) {
                rv[prfx + prop] = b[prop];
              }
            } else if (ap !== bp)
              rv[prfx + prop] = b[prop];
          }
        });
        keys2(b).forEach(function(prop) {
          if (!hasOwn(a, prop)) {
            rv[prfx + prop] = b[prop];
          }
        });
        return rv;
      }
      function getEffectiveKeys(primaryKey, req) {
        if (req.type === "delete")
          return req.keys;
        return req.keys || req.values.map(primaryKey.extractKey);
      }
      var hooksMiddleware = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: function(downCore) {
          return __assign(__assign({}, downCore), { table: function(tableName) {
            var downTable = downCore.table(tableName);
            var primaryKey = downTable.schema.primaryKey;
            var tableMiddleware = __assign(__assign({}, downTable), { mutate: function(req) {
              var dxTrans = PSD.trans;
              var _a2 = dxTrans.table(tableName).hook, deleting = _a2.deleting, creating = _a2.creating, updating = _a2.updating;
              switch (req.type) {
                case "add":
                  if (creating.fire === nop2)
                    break;
                  return dxTrans._promise("readwrite", function() {
                    return addPutOrDelete(req);
                  }, true);
                case "put":
                  if (creating.fire === nop2 && updating.fire === nop2)
                    break;
                  return dxTrans._promise("readwrite", function() {
                    return addPutOrDelete(req);
                  }, true);
                case "delete":
                  if (deleting.fire === nop2)
                    break;
                  return dxTrans._promise("readwrite", function() {
                    return addPutOrDelete(req);
                  }, true);
                case "deleteRange":
                  if (deleting.fire === nop2)
                    break;
                  return dxTrans._promise("readwrite", function() {
                    return deleteRange(req);
                  }, true);
              }
              return downTable.mutate(req);
              function addPutOrDelete(req2) {
                var dxTrans2 = PSD.trans;
                var keys3 = req2.keys || getEffectiveKeys(primaryKey, req2);
                if (!keys3)
                  throw new Error("Keys missing");
                req2 = req2.type === "add" || req2.type === "put" ? __assign(__assign({}, req2), { keys: keys3 }) : __assign({}, req2);
                if (req2.type !== "delete")
                  req2.values = __spreadArray([], req2.values, true);
                if (req2.keys)
                  req2.keys = __spreadArray([], req2.keys, true);
                return getExistingValues(downTable, req2, keys3).then(function(existingValues) {
                  var contexts = keys3.map(function(key, i) {
                    var existingValue = existingValues[i];
                    var ctx = { onerror: null, onsuccess: null };
                    if (req2.type === "delete") {
                      deleting.fire.call(ctx, key, existingValue, dxTrans2);
                    } else if (req2.type === "add" || existingValue === void 0) {
                      var generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                      if (key == null && generatedPrimaryKey != null) {
                        key = generatedPrimaryKey;
                        req2.keys[i] = key;
                        if (!primaryKey.outbound) {
                          setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                        }
                      }
                    } else {
                      var objectDiff = getObjectDiff(existingValue, req2.values[i]);
                      var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                      if (additionalChanges_1) {
                        var requestedValue_1 = req2.values[i];
                        Object.keys(additionalChanges_1).forEach(function(keyPath) {
                          if (hasOwn(requestedValue_1, keyPath)) {
                            requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                          } else {
                            setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                          }
                        });
                      }
                    }
                    return ctx;
                  });
                  return downTable.mutate(req2).then(function(_a3) {
                    var failures = _a3.failures, results = _a3.results, numFailures = _a3.numFailures, lastResult = _a3.lastResult;
                    for (var i = 0; i < keys3.length; ++i) {
                      var primKey = results ? results[i] : keys3[i];
                      var ctx = contexts[i];
                      if (primKey == null) {
                        ctx.onerror && ctx.onerror(failures[i]);
                      } else {
                        ctx.onsuccess && ctx.onsuccess(
                          req2.type === "put" && existingValues[i] ? req2.values[i] : primKey
                        );
                      }
                    }
                    return { failures, results, numFailures, lastResult };
                  }).catch(function(error) {
                    contexts.forEach(function(ctx) {
                      return ctx.onerror && ctx.onerror(error);
                    });
                    return Promise.reject(error);
                  });
                });
              }
              function deleteRange(req2) {
                return deleteNextChunk(req2.trans, req2.range, 1e4);
              }
              function deleteNextChunk(trans, range, limit) {
                return downTable.query({ trans, values: false, query: { index: primaryKey, range }, limit }).then(function(_a3) {
                  var result = _a3.result;
                  return addPutOrDelete({ type: "delete", keys: result, trans }).then(function(res) {
                    if (res.numFailures > 0)
                      return Promise.reject(res.failures[0]);
                    if (result.length < limit) {
                      return { failures: [], numFailures: 0, lastResult: void 0 };
                    } else {
                      return deleteNextChunk(trans, __assign(__assign({}, range), { lower: result[result.length - 1], lowerOpen: true }), limit);
                    }
                  });
                });
              }
            } });
            return tableMiddleware;
          } });
        }
      };
      function getExistingValues(table, req, effectiveKeys) {
        return req.type === "add" ? Promise.resolve([]) : table.getMany({ trans: req.trans, keys: effectiveKeys, cache: "immutable" });
      }
      function getFromTransactionCache(keys3, cache2, clone) {
        try {
          if (!cache2)
            return null;
          if (cache2.keys.length < keys3.length)
            return null;
          var result = [];
          for (var i = 0, j = 0; i < cache2.keys.length && j < keys3.length; ++i) {
            if (cmp2(cache2.keys[i], keys3[j]) !== 0)
              continue;
            result.push(clone ? deepClone(cache2.values[i]) : cache2.values[i]);
            ++j;
          }
          return result.length === keys3.length ? result : null;
        } catch (_a2) {
          return null;
        }
      }
      var cacheExistingValuesMiddleware = {
        stack: "dbcore",
        level: -1,
        create: function(core) {
          return {
            table: function(tableName) {
              var table = core.table(tableName);
              return __assign(__assign({}, table), { getMany: function(req) {
                if (!req.cache) {
                  return table.getMany(req);
                }
                var cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
                if (cachedResult) {
                  return DexiePromise.resolve(cachedResult);
                }
                return table.getMany(req).then(function(res) {
                  req.trans["_cache"] = {
                    keys: req.keys,
                    values: req.cache === "clone" ? deepClone(res) : res
                  };
                  return res;
                });
              }, mutate: function(req) {
                if (req.type !== "add")
                  req.trans["_cache"] = null;
                return table.mutate(req);
              } });
            }
          };
        }
      };
      function isCachableContext(ctx, table) {
        return ctx.trans.mode === "readonly" && !!ctx.subscr && !ctx.trans.explicit && ctx.trans.db._options.cache !== "disabled" && !table.schema.primaryKey.outbound;
      }
      function isCachableRequest(type2, req) {
        switch (type2) {
          case "query":
            return req.values && !req.unique;
          case "get":
            return false;
          case "getMany":
            return false;
          case "count":
            return false;
          case "openCursor":
            return false;
        }
      }
      var observabilityMiddleware = {
        stack: "dbcore",
        level: 0,
        name: "Observability",
        create: function(core) {
          var dbName = core.schema.name;
          var FULL_RANGE = new RangeSet2(core.MIN_KEY, core.MAX_KEY);
          return __assign(__assign({}, core), { transaction: function(stores, mode, options) {
            if (PSD.subscr && mode !== "readonly") {
              throw new exceptions.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(PSD.querier));
            }
            return core.transaction(stores, mode, options);
          }, table: function(tableName) {
            var table = core.table(tableName);
            var schema = table.schema;
            var primaryKey = schema.primaryKey, indexes = schema.indexes;
            var extractKey = primaryKey.extractKey, outbound = primaryKey.outbound;
            var indexesWithAutoIncPK = primaryKey.autoIncrement && indexes.filter(function(index) {
              return index.compound && index.keyPath.includes(primaryKey.keyPath);
            });
            var tableClone = __assign(__assign({}, table), { mutate: function(req) {
              var _a2, _b;
              var trans = req.trans;
              var mutatedParts = req.mutatedParts || (req.mutatedParts = {});
              var getRangeSet = function(indexName) {
                var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
                return mutatedParts[part] || (mutatedParts[part] = new RangeSet2());
              };
              var pkRangeSet = getRangeSet("");
              var delsRangeSet = getRangeSet(":dels");
              var type2 = req.type;
              var _c = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [getEffectiveKeys(primaryKey, req).filter(function(id2) {
                return id2;
              }), req.values] : [], keys3 = _c[0], newObjs = _c[1];
              var oldCache = req.trans["_cache"];
              if (isArray2(keys3)) {
                pkRangeSet.addKeys(keys3);
                var oldObjs = type2 === "delete" || keys3.length === newObjs.length ? getFromTransactionCache(keys3, oldCache) : null;
                if (!oldObjs) {
                  delsRangeSet.addKeys(keys3);
                }
                if (oldObjs || newObjs) {
                  trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                }
              } else if (keys3) {
                var range = {
                  from: (_a2 = keys3.lower) !== null && _a2 !== void 0 ? _a2 : core.MIN_KEY,
                  to: (_b = keys3.upper) !== null && _b !== void 0 ? _b : core.MAX_KEY
                };
                delsRangeSet.add(range);
                pkRangeSet.add(range);
              } else {
                pkRangeSet.add(FULL_RANGE);
                delsRangeSet.add(FULL_RANGE);
                schema.indexes.forEach(function(idx) {
                  return getRangeSet(idx.name).add(FULL_RANGE);
                });
              }
              return table.mutate(req).then(function(res) {
                if (keys3 && (req.type === "add" || req.type === "put")) {
                  pkRangeSet.addKeys(res.results);
                  if (indexesWithAutoIncPK) {
                    indexesWithAutoIncPK.forEach(function(idx) {
                      var idxVals = req.values.map(function(v) {
                        return idx.extractKey(v);
                      });
                      var pkPos = idx.keyPath.findIndex(function(prop) {
                        return prop === primaryKey.keyPath;
                      });
                      for (var i = 0, len = res.results.length; i < len; ++i) {
                        idxVals[i][pkPos] = res.results[i];
                      }
                      getRangeSet(idx.name).addKeys(idxVals);
                    });
                  }
                }
                trans.mutatedParts = extendObservabilitySet(trans.mutatedParts || {}, mutatedParts);
                return res;
              });
            } });
            var getRange = function(_a2) {
              var _b, _c;
              var _d = _a2.query, index = _d.index, range = _d.range;
              return [
                index,
                new RangeSet2((_b = range.lower) !== null && _b !== void 0 ? _b : core.MIN_KEY, (_c = range.upper) !== null && _c !== void 0 ? _c : core.MAX_KEY)
              ];
            };
            var readSubscribers = {
              get: function(req) {
                return [primaryKey, new RangeSet2(req.key)];
              },
              getMany: function(req) {
                return [primaryKey, new RangeSet2().addKeys(req.keys)];
              },
              count: getRange,
              query: getRange,
              openCursor: getRange
            };
            keys2(readSubscribers).forEach(function(method) {
              tableClone[method] = function(req) {
                var subscr = PSD.subscr;
                var isLiveQuery = !!subscr;
                var cachable = isCachableContext(PSD, table) && isCachableRequest(method, req);
                var obsSet = cachable ? req.obsSet = {} : subscr;
                if (isLiveQuery) {
                  var getRangeSet = function(indexName) {
                    var part = "idb://".concat(dbName, "/").concat(tableName, "/").concat(indexName);
                    return obsSet[part] || (obsSet[part] = new RangeSet2());
                  };
                  var pkRangeSet_1 = getRangeSet("");
                  var delsRangeSet_1 = getRangeSet(":dels");
                  var _a2 = readSubscribers[method](req), queriedIndex = _a2[0], queriedRanges = _a2[1];
                  if (method === "query" && queriedIndex.isPrimaryKey && !req.values) {
                    delsRangeSet_1.add(queriedRanges);
                  } else {
                    getRangeSet(queriedIndex.name || "").add(queriedRanges);
                  }
                  if (!queriedIndex.isPrimaryKey) {
                    if (method === "count") {
                      delsRangeSet_1.add(FULL_RANGE);
                    } else {
                      var keysPromise_1 = method === "query" && outbound && req.values && table.query(__assign(__assign({}, req), { values: false }));
                      return table[method].apply(this, arguments).then(function(res) {
                        if (method === "query") {
                          if (outbound && req.values) {
                            return keysPromise_1.then(function(_a3) {
                              var resultingKeys = _a3.result;
                              pkRangeSet_1.addKeys(resultingKeys);
                              return res;
                            });
                          }
                          var pKeys = req.values ? res.result.map(extractKey) : res.result;
                          if (req.values) {
                            pkRangeSet_1.addKeys(pKeys);
                          } else {
                            delsRangeSet_1.addKeys(pKeys);
                          }
                        } else if (method === "openCursor") {
                          var cursor_1 = res;
                          var wantValues_1 = req.values;
                          return cursor_1 && Object.create(cursor_1, {
                            key: {
                              get: function() {
                                delsRangeSet_1.addKey(cursor_1.primaryKey);
                                return cursor_1.key;
                              }
                            },
                            primaryKey: {
                              get: function() {
                                var pkey = cursor_1.primaryKey;
                                delsRangeSet_1.addKey(pkey);
                                return pkey;
                              }
                            },
                            value: {
                              get: function() {
                                wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey);
                                return cursor_1.value;
                              }
                            }
                          });
                        }
                        return res;
                      });
                    }
                  }
                }
                return table[method].apply(this, arguments);
              };
            });
            return tableClone;
          } });
        }
      };
      function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
        function addAffectedIndex(ix) {
          var rangeSet = getRangeSet(ix.name || "");
          function extractKey(obj) {
            return obj != null ? ix.extractKey(obj) : null;
          }
          var addKeyOrKeys = function(key) {
            return ix.multiEntry && isArray2(key) ? key.forEach(function(key2) {
              return rangeSet.addKey(key2);
            }) : rangeSet.addKey(key);
          };
          (oldObjs || newObjs).forEach(function(_, i) {
            var oldKey = oldObjs && extractKey(oldObjs[i]);
            var newKey = newObjs && extractKey(newObjs[i]);
            if (cmp2(oldKey, newKey) !== 0) {
              if (oldKey != null)
                addKeyOrKeys(oldKey);
              if (newKey != null)
                addKeyOrKeys(newKey);
            }
          });
        }
        schema.indexes.forEach(addAffectedIndex);
      }
      function adjustOptimisticFromFailures(tblCache, req, res) {
        if (res.numFailures === 0)
          return req;
        if (req.type === "deleteRange") {
          return null;
        }
        var numBulkOps = req.keys ? req.keys.length : "values" in req && req.values ? req.values.length : 1;
        if (res.numFailures === numBulkOps) {
          return null;
        }
        var clone = __assign({}, req);
        if (isArray2(clone.keys)) {
          clone.keys = clone.keys.filter(function(_, i) {
            return !(i in res.failures);
          });
        }
        if ("values" in clone && isArray2(clone.values)) {
          clone.values = clone.values.filter(function(_, i) {
            return !(i in res.failures);
          });
        }
        return clone;
      }
      function isAboveLower(key, range) {
        return range.lower === void 0 ? true : range.lowerOpen ? cmp2(key, range.lower) > 0 : cmp2(key, range.lower) >= 0;
      }
      function isBelowUpper(key, range) {
        return range.upper === void 0 ? true : range.upperOpen ? cmp2(key, range.upper) < 0 : cmp2(key, range.upper) <= 0;
      }
      function isWithinRange(key, range) {
        return isAboveLower(key, range) && isBelowUpper(key, range);
      }
      function applyOptimisticOps(result, req, ops, table, cacheEntry, immutable) {
        if (!ops || ops.length === 0)
          return result;
        var index = req.query.index;
        var multiEntry = index.multiEntry;
        var queryRange = req.query.range;
        var primaryKey = table.schema.primaryKey;
        var extractPrimKey = primaryKey.extractKey;
        var extractIndex = index.extractKey;
        var extractLowLevelIndex = (index.lowLevelIndex || index).extractKey;
        var finalResult = ops.reduce(function(result2, op) {
          var modifedResult = result2;
          var includedValues = [];
          if (op.type === "add" || op.type === "put") {
            var includedPKs = new RangeSet2();
            for (var i = op.values.length - 1; i >= 0; --i) {
              var value = op.values[i];
              var pk = extractPrimKey(value);
              if (includedPKs.hasKey(pk))
                continue;
              var key = extractIndex(value);
              if (multiEntry && isArray2(key) ? key.some(function(k) {
                return isWithinRange(k, queryRange);
              }) : isWithinRange(key, queryRange)) {
                includedPKs.addKey(pk);
                includedValues.push(value);
              }
            }
          }
          switch (op.type) {
            case "add": {
              var existingKeys_1 = new RangeSet2().addKeys(req.values ? result2.map(function(v) {
                return extractPrimKey(v);
              }) : result2);
              modifedResult = result2.concat(req.values ? includedValues.filter(function(v) {
                var key2 = extractPrimKey(v);
                if (existingKeys_1.hasKey(key2))
                  return false;
                existingKeys_1.addKey(key2);
                return true;
              }) : includedValues.map(function(v) {
                return extractPrimKey(v);
              }).filter(function(k) {
                if (existingKeys_1.hasKey(k))
                  return false;
                existingKeys_1.addKey(k);
                return true;
              }));
              break;
            }
            case "put": {
              var keySet_1 = new RangeSet2().addKeys(op.values.map(function(v) {
                return extractPrimKey(v);
              }));
              modifedResult = result2.filter(
                function(item) {
                  return !keySet_1.hasKey(req.values ? extractPrimKey(item) : item);
                }
              ).concat(
                req.values ? includedValues : includedValues.map(function(v) {
                  return extractPrimKey(v);
                })
              );
              break;
            }
            case "delete":
              var keysToDelete_1 = new RangeSet2().addKeys(op.keys);
              modifedResult = result2.filter(function(item) {
                return !keysToDelete_1.hasKey(req.values ? extractPrimKey(item) : item);
              });
              break;
            case "deleteRange":
              var range_1 = op.range;
              modifedResult = result2.filter(function(item) {
                return !isWithinRange(extractPrimKey(item), range_1);
              });
              break;
          }
          return modifedResult;
        }, result);
        if (finalResult === result)
          return result;
        finalResult.sort(function(a, b) {
          return cmp2(extractLowLevelIndex(a), extractLowLevelIndex(b)) || cmp2(extractPrimKey(a), extractPrimKey(b));
        });
        if (req.limit && req.limit < Infinity) {
          if (finalResult.length > req.limit) {
            finalResult.length = req.limit;
          } else if (result.length === req.limit && finalResult.length < req.limit) {
            cacheEntry.dirty = true;
          }
        }
        return immutable ? Object.freeze(finalResult) : finalResult;
      }
      function areRangesEqual(r1, r2) {
        return cmp2(r1.lower, r2.lower) === 0 && cmp2(r1.upper, r2.upper) === 0 && !!r1.lowerOpen === !!r2.lowerOpen && !!r1.upperOpen === !!r2.upperOpen;
      }
      function compareLowers(lower1, lower2, lowerOpen1, lowerOpen2) {
        if (lower1 === void 0)
          return lower2 !== void 0 ? -1 : 0;
        if (lower2 === void 0)
          return 1;
        var c = cmp2(lower1, lower2);
        if (c === 0) {
          if (lowerOpen1 && lowerOpen2)
            return 0;
          if (lowerOpen1)
            return 1;
          if (lowerOpen2)
            return -1;
        }
        return c;
      }
      function compareUppers(upper1, upper2, upperOpen1, upperOpen2) {
        if (upper1 === void 0)
          return upper2 !== void 0 ? 1 : 0;
        if (upper2 === void 0)
          return -1;
        var c = cmp2(upper1, upper2);
        if (c === 0) {
          if (upperOpen1 && upperOpen2)
            return 0;
          if (upperOpen1)
            return -1;
          if (upperOpen2)
            return 1;
        }
        return c;
      }
      function isSuperRange(r1, r2) {
        return compareLowers(r1.lower, r2.lower, r1.lowerOpen, r2.lowerOpen) <= 0 && compareUppers(r1.upper, r2.upper, r1.upperOpen, r2.upperOpen) >= 0;
      }
      function findCompatibleQuery(dbName, tableName, type2, req) {
        var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
        if (!tblCache)
          return [];
        var queries = tblCache.queries[type2];
        if (!queries)
          return [null, false, tblCache, null];
        var indexName = req.query ? req.query.index.name : null;
        var entries = queries[indexName || ""];
        if (!entries)
          return [null, false, tblCache, null];
        switch (type2) {
          case "query":
            var equalEntry = entries.find(function(entry) {
              return entry.req.limit === req.limit && entry.req.values === req.values && areRangesEqual(entry.req.query.range, req.query.range);
            });
            if (equalEntry)
              return [
                equalEntry,
                true,
                tblCache,
                entries
              ];
            var superEntry = entries.find(function(entry) {
              var limit = "limit" in entry.req ? entry.req.limit : Infinity;
              return limit >= req.limit && (req.values ? entry.req.values : true) && isSuperRange(entry.req.query.range, req.query.range);
            });
            return [superEntry, false, tblCache, entries];
          case "count":
            var countQuery = entries.find(function(entry) {
              return areRangesEqual(entry.req.query.range, req.query.range);
            });
            return [countQuery, !!countQuery, tblCache, entries];
        }
      }
      function subscribeToCacheEntry(cacheEntry, container, requery, signal) {
        cacheEntry.subscribers.add(requery);
        signal.addEventListener("abort", function() {
          cacheEntry.subscribers.delete(requery);
          if (cacheEntry.subscribers.size === 0) {
            enqueForDeletion(cacheEntry, container);
          }
        });
      }
      function enqueForDeletion(cacheEntry, container) {
        setTimeout(function() {
          if (cacheEntry.subscribers.size === 0) {
            delArrayItem(container, cacheEntry);
          }
        }, 3e3);
      }
      var cacheMiddleware = {
        stack: "dbcore",
        level: 0,
        name: "Cache",
        create: function(core) {
          var dbName = core.schema.name;
          var coreMW = __assign(__assign({}, core), { transaction: function(stores, mode, options) {
            var idbtrans = core.transaction(stores, mode, options);
            if (mode === "readwrite") {
              var ac_1 = new AbortController();
              var signal = ac_1.signal;
              var endTransaction = function(wasCommitted) {
                return function() {
                  ac_1.abort();
                  if (mode === "readwrite") {
                    var affectedSubscribers_1 = /* @__PURE__ */ new Set();
                    for (var _i = 0, stores_1 = stores; _i < stores_1.length; _i++) {
                      var storeName = stores_1[_i];
                      var tblCache = cache["idb://".concat(dbName, "/").concat(storeName)];
                      if (tblCache) {
                        var table = core.table(storeName);
                        var ops = tblCache.optimisticOps.filter(function(op) {
                          return op.trans === idbtrans;
                        });
                        if (idbtrans._explicit && wasCommitted && idbtrans.mutatedParts) {
                          for (var _a2 = 0, _b = Object.values(tblCache.queries.query); _a2 < _b.length; _a2++) {
                            var entries = _b[_a2];
                            for (var _c = 0, _d = entries.slice(); _c < _d.length; _c++) {
                              var entry = _d[_c];
                              if (obsSetsOverlap(entry.obsSet, idbtrans.mutatedParts)) {
                                delArrayItem(entries, entry);
                                entry.subscribers.forEach(function(requery) {
                                  return affectedSubscribers_1.add(requery);
                                });
                              }
                            }
                          }
                        } else if (ops.length > 0) {
                          tblCache.optimisticOps = tblCache.optimisticOps.filter(function(op) {
                            return op.trans !== idbtrans;
                          });
                          for (var _e2 = 0, _f = Object.values(tblCache.queries.query); _e2 < _f.length; _e2++) {
                            var entries = _f[_e2];
                            for (var _g = 0, _h = entries.slice(); _g < _h.length; _g++) {
                              var entry = _h[_g];
                              if (entry.res != null && idbtrans.mutatedParts) {
                                if (wasCommitted && !entry.dirty) {
                                  var freezeResults = Object.isFrozen(entry.res);
                                  var modRes = applyOptimisticOps(entry.res, entry.req, ops, table, entry, freezeResults);
                                  if (entry.dirty) {
                                    delArrayItem(entries, entry);
                                    entry.subscribers.forEach(function(requery) {
                                      return affectedSubscribers_1.add(requery);
                                    });
                                  } else if (modRes !== entry.res) {
                                    entry.res = modRes;
                                    entry.promise = DexiePromise.resolve({ result: modRes });
                                  }
                                } else {
                                  if (entry.dirty) {
                                    delArrayItem(entries, entry);
                                  }
                                  entry.subscribers.forEach(function(requery) {
                                    return affectedSubscribers_1.add(requery);
                                  });
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    affectedSubscribers_1.forEach(function(requery) {
                      return requery();
                    });
                  }
                };
              };
              idbtrans.addEventListener("abort", endTransaction(false), {
                signal
              });
              idbtrans.addEventListener("error", endTransaction(false), {
                signal
              });
              idbtrans.addEventListener("complete", endTransaction(true), {
                signal
              });
            }
            return idbtrans;
          }, table: function(tableName) {
            var downTable = core.table(tableName);
            var primKey = downTable.schema.primaryKey;
            var tableMW = __assign(__assign({}, downTable), { mutate: function(req) {
              var trans = PSD.trans;
              if (primKey.outbound || trans.db._options.cache === "disabled" || trans.explicit || trans.idbtrans.mode !== "readwrite") {
                return downTable.mutate(req);
              }
              var tblCache = cache["idb://".concat(dbName, "/").concat(tableName)];
              if (!tblCache)
                return downTable.mutate(req);
              var promise = downTable.mutate(req);
              if ((req.type === "add" || req.type === "put") && (req.values.length >= 50 || getEffectiveKeys(primKey, req).some(function(key) {
                return key == null;
              }))) {
                promise.then(function(res) {
                  var reqWithResolvedKeys = __assign(__assign({}, req), { values: req.values.map(function(value, i) {
                    var _a2;
                    if (res.failures[i])
                      return value;
                    var valueWithKey = ((_a2 = primKey.keyPath) === null || _a2 === void 0 ? void 0 : _a2.includes(".")) ? deepClone(value) : __assign({}, value);
                    setByKeyPath(valueWithKey, primKey.keyPath, res.results[i]);
                    return valueWithKey;
                  }) });
                  var adjustedReq = adjustOptimisticFromFailures(tblCache, reqWithResolvedKeys, res);
                  tblCache.optimisticOps.push(adjustedReq);
                  queueMicrotask(function() {
                    return req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                  });
                });
              } else {
                tblCache.optimisticOps.push(req);
                req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                promise.then(function(res) {
                  if (res.numFailures > 0) {
                    delArrayItem(tblCache.optimisticOps, req);
                    var adjustedReq = adjustOptimisticFromFailures(tblCache, req, res);
                    if (adjustedReq) {
                      tblCache.optimisticOps.push(adjustedReq);
                    }
                    req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                  }
                });
                promise.catch(function() {
                  delArrayItem(tblCache.optimisticOps, req);
                  req.mutatedParts && signalSubscribersLazily(req.mutatedParts);
                });
              }
              return promise;
            }, query: function(req) {
              var _a2;
              if (!isCachableContext(PSD, downTable) || !isCachableRequest("query", req))
                return downTable.query(req);
              var freezeResults = ((_a2 = PSD.trans) === null || _a2 === void 0 ? void 0 : _a2.db._options.cache) === "immutable";
              var _b = PSD, requery = _b.requery, signal = _b.signal;
              var _c = findCompatibleQuery(dbName, tableName, "query", req), cacheEntry = _c[0], exactMatch = _c[1], tblCache = _c[2], container = _c[3];
              if (cacheEntry && exactMatch) {
                cacheEntry.obsSet = req.obsSet;
              } else {
                var promise = downTable.query(req).then(function(res) {
                  var result = res.result;
                  if (cacheEntry)
                    cacheEntry.res = result;
                  if (freezeResults) {
                    for (var i = 0, l = result.length; i < l; ++i) {
                      Object.freeze(result[i]);
                    }
                    Object.freeze(result);
                  } else {
                    res.result = deepClone(result);
                  }
                  return res;
                }).catch(function(error) {
                  if (container && cacheEntry)
                    delArrayItem(container, cacheEntry);
                  return Promise.reject(error);
                });
                cacheEntry = {
                  obsSet: req.obsSet,
                  promise,
                  subscribers: /* @__PURE__ */ new Set(),
                  type: "query",
                  req,
                  dirty: false
                };
                if (container) {
                  container.push(cacheEntry);
                } else {
                  container = [cacheEntry];
                  if (!tblCache) {
                    tblCache = cache["idb://".concat(dbName, "/").concat(tableName)] = {
                      queries: {
                        query: {},
                        count: {}
                      },
                      objs: /* @__PURE__ */ new Map(),
                      optimisticOps: [],
                      unsignaledParts: {}
                    };
                  }
                  tblCache.queries.query[req.query.index.name || ""] = container;
                }
              }
              subscribeToCacheEntry(cacheEntry, container, requery, signal);
              return cacheEntry.promise.then(function(res) {
                return {
                  result: applyOptimisticOps(res.result, req, tblCache === null || tblCache === void 0 ? void 0 : tblCache.optimisticOps, downTable, cacheEntry, freezeResults)
                };
              });
            } });
            return tableMW;
          } });
          return coreMW;
        }
      };
      function vipify(target, vipDb) {
        return new Proxy(target, {
          get: function(target2, prop, receiver) {
            if (prop === "db")
              return vipDb;
            return Reflect.get(target2, prop, receiver);
          }
        });
      }
      var Dexie$1 = (function() {
        function Dexie3(name, options) {
          var _this = this;
          this._middlewares = {};
          this.verno = 0;
          var deps = Dexie3.dependencies;
          this._options = options = __assign({
            addons: Dexie3.addons,
            autoOpen: true,
            indexedDB: deps.indexedDB,
            IDBKeyRange: deps.IDBKeyRange,
            cache: "cloned"
          }, options);
          this._deps = {
            indexedDB: options.indexedDB,
            IDBKeyRange: options.IDBKeyRange
          };
          var addons = options.addons;
          this._dbSchema = {};
          this._versions = [];
          this._storeNames = [];
          this._allTables = {};
          this.idbdb = null;
          this._novip = this;
          var state = {
            dbOpenError: null,
            isBeingOpened: false,
            onReadyBeingFired: null,
            openComplete: false,
            dbReadyResolve: nop2,
            dbReadyPromise: null,
            cancelOpen: nop2,
            openCanceller: null,
            autoSchema: true,
            PR1398_maxLoop: 3,
            autoOpen: options.autoOpen
          };
          state.dbReadyPromise = new DexiePromise(function(resolve) {
            state.dbReadyResolve = resolve;
          });
          state.openCanceller = new DexiePromise(function(_, reject) {
            state.cancelOpen = reject;
          });
          this._state = state;
          this.name = name;
          this.on = Events(this, "populate", "blocked", "versionchange", "close", { ready: [promisableChain2, nop2] });
          this.once = function(event, callback) {
            var fn2 = function() {
              var args2 = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args2[_i] = arguments[_i];
              }
              _this.on(event).unsubscribe(fn2);
              callback.apply(_this, args2);
            };
            return _this.on(event, fn2);
          };
          this.on.ready.subscribe = override(this.on.ready.subscribe, function(subscribe) {
            return function(subscriber, bSticky) {
              Dexie3.vip(function() {
                var state2 = _this._state;
                if (state2.openComplete) {
                  if (!state2.dbOpenError)
                    DexiePromise.resolve().then(subscriber);
                  if (bSticky)
                    subscribe(subscriber);
                } else if (state2.onReadyBeingFired) {
                  state2.onReadyBeingFired.push(subscriber);
                  if (bSticky)
                    subscribe(subscriber);
                } else {
                  subscribe(subscriber);
                  var db_1 = _this;
                  if (!bSticky)
                    subscribe(function unsubscribe() {
                      db_1.on.ready.unsubscribe(subscriber);
                      db_1.on.ready.unsubscribe(unsubscribe);
                    });
                }
              });
            };
          });
          this.Collection = createCollectionConstructor(this);
          this.Table = createTableConstructor(this);
          this.Transaction = createTransactionConstructor(this);
          this.Version = createVersionConstructor(this);
          this.WhereClause = createWhereClauseConstructor(this);
          this.on("versionchange", function(ev) {
            if (ev.newVersion > 0)
              console.warn("Another connection wants to upgrade database '".concat(_this.name, "'. Closing db now to resume the upgrade."));
            else
              console.warn("Another connection wants to delete database '".concat(_this.name, "'. Closing db now to resume the delete request."));
            _this.close({ disableAutoOpen: false });
          });
          this.on("blocked", function(ev) {
            if (!ev.newVersion || ev.newVersion < ev.oldVersion)
              console.warn("Dexie.delete('".concat(_this.name, "') was blocked"));
            else
              console.warn("Upgrade '".concat(_this.name, "' blocked by other connection holding version ").concat(ev.oldVersion / 10));
          });
          this._maxKey = getMaxKey(options.IDBKeyRange);
          this._createTransaction = function(mode, storeNames, dbschema, parentTransaction) {
            return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction);
          };
          this._fireOnBlocked = function(ev) {
            _this.on("blocked").fire(ev);
            connections.filter(function(c) {
              return c.name === _this.name && c !== _this && !c._state.vcFired;
            }).map(function(c) {
              return c.on("versionchange").fire(ev);
            });
          };
          this.use(cacheExistingValuesMiddleware);
          this.use(cacheMiddleware);
          this.use(observabilityMiddleware);
          this.use(virtualIndexMiddleware);
          this.use(hooksMiddleware);
          var vipDB = new Proxy(this, {
            get: function(_, prop, receiver) {
              if (prop === "_vip")
                return true;
              if (prop === "table")
                return function(tableName) {
                  return vipify(_this.table(tableName), vipDB);
                };
              var rv = Reflect.get(_, prop, receiver);
              if (rv instanceof Table)
                return vipify(rv, vipDB);
              if (prop === "tables")
                return rv.map(function(t) {
                  return vipify(t, vipDB);
                });
              if (prop === "_createTransaction")
                return function() {
                  var tx = rv.apply(this, arguments);
                  return vipify(tx, vipDB);
                };
              return rv;
            }
          });
          this.vip = vipDB;
          addons.forEach(function(addon) {
            return addon(_this);
          });
        }
        Dexie3.prototype.version = function(versionNumber) {
          if (isNaN(versionNumber) || versionNumber < 0.1)
            throw new exceptions.Type("Given version is not a positive number");
          versionNumber = Math.round(versionNumber * 10) / 10;
          if (this.idbdb || this._state.isBeingOpened)
            throw new exceptions.Schema("Cannot add version when database is open");
          this.verno = Math.max(this.verno, versionNumber);
          var versions = this._versions;
          var versionInstance = versions.filter(function(v) {
            return v._cfg.version === versionNumber;
          })[0];
          if (versionInstance)
            return versionInstance;
          versionInstance = new this.Version(versionNumber);
          versions.push(versionInstance);
          versions.sort(lowerVersionFirst);
          versionInstance.stores({});
          this._state.autoSchema = false;
          return versionInstance;
        };
        Dexie3.prototype._whenReady = function(fn2) {
          var _this = this;
          return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn2() : new DexiePromise(function(resolve, reject) {
            if (_this._state.openComplete) {
              return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
            }
            if (!_this._state.isBeingOpened) {
              if (!_this._state.autoOpen) {
                reject(new exceptions.DatabaseClosed());
                return;
              }
              _this.open().catch(nop2);
            }
            _this._state.dbReadyPromise.then(resolve, reject);
          }).then(fn2);
        };
        Dexie3.prototype.use = function(_a2) {
          var stack = _a2.stack, create7 = _a2.create, level = _a2.level, name = _a2.name;
          if (name)
            this.unuse({ stack, name });
          var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
          middlewares.push({ stack, create: create7, level: level == null ? 10 : level, name });
          middlewares.sort(function(a, b) {
            return a.level - b.level;
          });
          return this;
        };
        Dexie3.prototype.unuse = function(_a2) {
          var stack = _a2.stack, name = _a2.name, create7 = _a2.create;
          if (stack && this._middlewares[stack]) {
            this._middlewares[stack] = this._middlewares[stack].filter(function(mw) {
              return create7 ? mw.create !== create7 : name ? mw.name !== name : false;
            });
          }
          return this;
        };
        Dexie3.prototype.open = function() {
          var _this = this;
          return usePSD(
            globalPSD,
            function() {
              return dexieOpen(_this);
            }
          );
        };
        Dexie3.prototype._close = function() {
          this.on.close.fire(new CustomEvent("close"));
          var state = this._state;
          var idx = connections.indexOf(this);
          if (idx >= 0)
            connections.splice(idx, 1);
          if (this.idbdb) {
            try {
              this.idbdb.close();
            } catch (e) {
            }
            this.idbdb = null;
          }
          if (!state.isBeingOpened) {
            state.dbReadyPromise = new DexiePromise(function(resolve) {
              state.dbReadyResolve = resolve;
            });
            state.openCanceller = new DexiePromise(function(_, reject) {
              state.cancelOpen = reject;
            });
          }
        };
        Dexie3.prototype.close = function(_a2) {
          var _b = _a2 === void 0 ? { disableAutoOpen: true } : _a2, disableAutoOpen = _b.disableAutoOpen;
          var state = this._state;
          if (disableAutoOpen) {
            if (state.isBeingOpened) {
              state.cancelOpen(new exceptions.DatabaseClosed());
            }
            this._close();
            state.autoOpen = false;
            state.dbOpenError = new exceptions.DatabaseClosed();
          } else {
            this._close();
            state.autoOpen = this._options.autoOpen || state.isBeingOpened;
            state.openComplete = false;
            state.dbOpenError = null;
          }
        };
        Dexie3.prototype.delete = function(closeOptions) {
          var _this = this;
          if (closeOptions === void 0) {
            closeOptions = { disableAutoOpen: true };
          }
          var hasInvalidArguments = arguments.length > 0 && typeof arguments[0] !== "object";
          var state = this._state;
          return new DexiePromise(function(resolve, reject) {
            var doDelete = function() {
              _this.close(closeOptions);
              var req = _this._deps.indexedDB.deleteDatabase(_this.name);
              req.onsuccess = wrap(function() {
                _onDatabaseDeleted(_this._deps, _this.name);
                resolve();
              });
              req.onerror = eventRejectHandler(reject);
              req.onblocked = _this._fireOnBlocked;
            };
            if (hasInvalidArguments)
              throw new exceptions.InvalidArgument("Invalid closeOptions argument to db.delete()");
            if (state.isBeingOpened) {
              state.dbReadyPromise.then(doDelete);
            } else {
              doDelete();
            }
          });
        };
        Dexie3.prototype.backendDB = function() {
          return this.idbdb;
        };
        Dexie3.prototype.isOpen = function() {
          return this.idbdb !== null;
        };
        Dexie3.prototype.hasBeenClosed = function() {
          var dbOpenError = this._state.dbOpenError;
          return dbOpenError && dbOpenError.name === "DatabaseClosed";
        };
        Dexie3.prototype.hasFailed = function() {
          return this._state.dbOpenError !== null;
        };
        Dexie3.prototype.dynamicallyOpened = function() {
          return this._state.autoSchema;
        };
        Object.defineProperty(Dexie3.prototype, "tables", {
          get: function() {
            var _this = this;
            return keys2(this._allTables).map(function(name) {
              return _this._allTables[name];
            });
          },
          enumerable: false,
          configurable: true
        });
        Dexie3.prototype.transaction = function() {
          var args2 = extractTransactionArgs.apply(this, arguments);
          return this._transaction.apply(this, args2);
        };
        Dexie3.prototype._transaction = function(mode, tables, scopeFunc) {
          var _this = this;
          var parentTransaction = PSD.trans;
          if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1)
            parentTransaction = null;
          var onlyIfCompatible = mode.indexOf("?") !== -1;
          mode = mode.replace("!", "").replace("?", "");
          var idbMode, storeNames;
          try {
            storeNames = tables.map(function(table) {
              var storeName = table instanceof _this.Table ? table.name : table;
              if (typeof storeName !== "string")
                throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
              return storeName;
            });
            if (mode == "r" || mode === READONLY)
              idbMode = READONLY;
            else if (mode == "rw" || mode == READWRITE)
              idbMode = READWRITE;
            else
              throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
            if (parentTransaction) {
              if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
                if (onlyIfCompatible) {
                  parentTransaction = null;
                } else
                  throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              }
              if (parentTransaction) {
                storeNames.forEach(function(storeName) {
                  if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                    if (onlyIfCompatible) {
                      parentTransaction = null;
                    } else
                      throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
                  }
                });
              }
              if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
                parentTransaction = null;
              }
            }
          } catch (e) {
            return parentTransaction ? parentTransaction._promise(null, function(_, reject) {
              reject(e);
            }) : rejection(e);
          }
          var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
          return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function() {
            return _this._whenReady(enterTransaction);
          }) : this._whenReady(enterTransaction);
        };
        Dexie3.prototype.table = function(tableName) {
          if (!hasOwn(this._allTables, tableName)) {
            throw new exceptions.InvalidTable("Table ".concat(tableName, " does not exist"));
          }
          return this._allTables[tableName];
        };
        return Dexie3;
      })();
      var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
      var Observable3 = (function() {
        function Observable4(subscribe) {
          this._subscribe = subscribe;
        }
        Observable4.prototype.subscribe = function(x, error, complete) {
          return this._subscribe(!x || typeof x === "function" ? { next: x, error, complete } : x);
        };
        Observable4.prototype[symbolObservable] = function() {
          return this;
        };
        return Observable4;
      })();
      var domDeps;
      try {
        domDeps = {
          indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
          IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
        };
      } catch (e) {
        domDeps = { indexedDB: null, IDBKeyRange: null };
      }
      function liveQuery2(querier) {
        var hasValue = false;
        var currentValue;
        var observable = new Observable3(function(observer) {
          var scopeFuncIsAsync = isAsyncFunction(querier);
          function execute(ctx) {
            var wasRootExec = beginMicroTickScope();
            try {
              if (scopeFuncIsAsync) {
                incrementExpectedAwaits();
              }
              var rv = newScope(querier, ctx);
              if (scopeFuncIsAsync) {
                rv = rv.finally(decrementExpectedAwaits);
              }
              return rv;
            } finally {
              wasRootExec && endMicroTickScope();
            }
          }
          var closed = false;
          var abortController;
          var accumMuts = {};
          var currentObs = {};
          var subscription = {
            get closed() {
              return closed;
            },
            unsubscribe: function() {
              if (closed)
                return;
              closed = true;
              if (abortController)
                abortController.abort();
              if (startedListening)
                globalEvents.storagemutated.unsubscribe(mutationListener);
            }
          };
          observer.start && observer.start(subscription);
          var startedListening = false;
          var doQuery = function() {
            return execInGlobalContext(_doQuery);
          };
          function shouldNotify() {
            return obsSetsOverlap(currentObs, accumMuts);
          }
          var mutationListener = function(parts) {
            extendObservabilitySet(accumMuts, parts);
            if (shouldNotify()) {
              doQuery();
            }
          };
          var _doQuery = function() {
            if (closed || !domDeps.indexedDB) {
              return;
            }
            accumMuts = {};
            var subscr = {};
            if (abortController)
              abortController.abort();
            abortController = new AbortController();
            var ctx = {
              subscr,
              signal: abortController.signal,
              requery: doQuery,
              querier,
              trans: null
            };
            var ret = execute(ctx);
            Promise.resolve(ret).then(function(result) {
              hasValue = true;
              currentValue = result;
              if (closed || ctx.signal.aborted) {
                return;
              }
              accumMuts = {};
              currentObs = subscr;
              if (!objectIsEmpty(currentObs) && !startedListening) {
                globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
                startedListening = true;
              }
              execInGlobalContext(function() {
                return !closed && observer.next && observer.next(result);
              });
            }, function(err) {
              hasValue = false;
              if (!["DatabaseClosedError", "AbortError"].includes(err === null || err === void 0 ? void 0 : err.name)) {
                if (!closed)
                  execInGlobalContext(function() {
                    if (closed)
                      return;
                    observer.error && observer.error(err);
                  });
              }
            });
          };
          setTimeout(doQuery, 0);
          return subscription;
        });
        observable.hasValue = function() {
          return hasValue;
        };
        observable.getValue = function() {
          return currentValue;
        };
        return observable;
      }
      var Dexie2 = Dexie$1;
      props(Dexie2, __assign(__assign({}, fullNameExceptions), {
        delete: function(databaseName) {
          var db = new Dexie2(databaseName, { addons: [] });
          return db.delete();
        },
        exists: function(name) {
          return new Dexie2(name, { addons: [] }).open().then(function(db) {
            db.close();
            return true;
          }).catch("NoSuchDatabaseError", function() {
            return false;
          });
        },
        getDatabaseNames: function(cb) {
          try {
            return getDatabaseNames(Dexie2.dependencies).then(cb);
          } catch (_a2) {
            return rejection(new exceptions.MissingAPI());
          }
        },
        defineClass: function() {
          function Class(content) {
            extend(this, content);
          }
          return Class;
        },
        ignoreTransaction: function(scopeFunc) {
          return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
        },
        vip,
        async: function(generatorFn) {
          return function() {
            try {
              var rv = awaitIterator(generatorFn.apply(this, arguments));
              if (!rv || typeof rv.then !== "function")
                return DexiePromise.resolve(rv);
              return rv;
            } catch (e) {
              return rejection(e);
            }
          };
        },
        spawn: function(generatorFn, args2, thiz) {
          try {
            var rv = awaitIterator(generatorFn.apply(thiz, args2 || []));
            if (!rv || typeof rv.then !== "function")
              return DexiePromise.resolve(rv);
            return rv;
          } catch (e) {
            return rejection(e);
          }
        },
        currentTransaction: {
          get: function() {
            return PSD.trans || null;
          }
        },
        waitFor: function(promiseOrFunction, optionalTimeout) {
          var promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie2.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
          return PSD.trans ? PSD.trans.waitFor(promise) : promise;
        },
        Promise: DexiePromise,
        debug: {
          get: function() {
            return debug;
          },
          set: function(value) {
            setDebug(value);
          }
        },
        derive,
        extend,
        props,
        override,
        Events,
        on: globalEvents,
        liveQuery: liveQuery2,
        extendObservabilitySet,
        getByKeyPath: getByKeyPath2,
        setByKeyPath,
        delByKeyPath,
        shallowClone,
        deepClone,
        getObjectDiff,
        cmp: cmp2,
        asap: asap$1,
        minKey,
        addons: [],
        connections,
        errnames,
        dependencies: domDeps,
        cache,
        semVer: DEXIE_VERSION,
        version: DEXIE_VERSION.split(".").map(function(n) {
          return parseInt(n);
        }).reduce(function(p, c, i) {
          return p + c / Math.pow(10, i * 2);
        })
      }));
      Dexie2.maxKey = getMaxKey(Dexie2.dependencies.IDBKeyRange);
      if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(updatedParts) {
          if (!propagatingLocally) {
            var event_1;
            event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
              detail: updatedParts
            });
            propagatingLocally = true;
            dispatchEvent(event_1);
            propagatingLocally = false;
          }
        });
        addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function(_a2) {
          var detail = _a2.detail;
          if (!propagatingLocally) {
            propagateLocally(detail);
          }
        });
      }
      function propagateLocally(updateParts) {
        var wasMe = propagatingLocally;
        try {
          propagatingLocally = true;
          globalEvents.storagemutated.fire(updateParts);
          signalSubscribersNow(updateParts, true);
        } finally {
          propagatingLocally = wasMe;
        }
      }
      var propagatingLocally = false;
      var bc;
      var createBC = function() {
      };
      if (typeof BroadcastChannel !== "undefined") {
        createBC = function() {
          bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
          bc.onmessage = function(ev) {
            return ev.data && propagateLocally(ev.data);
          };
        };
        createBC();
        if (typeof bc.unref === "function") {
          bc.unref();
        }
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(changedParts) {
          if (!propagatingLocally) {
            bc.postMessage(changedParts);
          }
        });
      }
      if (typeof addEventListener !== "undefined") {
        addEventListener("pagehide", function(event) {
          if (!Dexie$1.disableBfCache && event.persisted) {
            if (debug)
              console.debug("Dexie: handling persisted pagehide");
            bc === null || bc === void 0 ? void 0 : bc.close();
            for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
              var db = connections_1[_i];
              db.close({ disableAutoOpen: false });
            }
          }
        });
        addEventListener("pageshow", function(event) {
          if (!Dexie$1.disableBfCache && event.persisted) {
            if (debug)
              console.debug("Dexie: handling persisted pageshow");
            createBC();
            propagateLocally({ all: new RangeSet2(-Infinity, [[]]) });
          }
        });
      }
      function add2(value) {
        return new PropModification2({ add: value });
      }
      function remove2(value) {
        return new PropModification2({ remove: value });
      }
      function replacePrefix2(a, b) {
        return new PropModification2({ replacePrefix: [a, b] });
      }
      DexiePromise.rejectionMapper = mapError;
      setDebug(debug);
      var namedExports = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        Dexie: Dexie$1,
        liveQuery: liveQuery2,
        Entity: Entity2,
        cmp: cmp2,
        PropModification: PropModification2,
        replacePrefix: replacePrefix2,
        add: add2,
        remove: remove2,
        "default": Dexie$1,
        RangeSet: RangeSet2,
        mergeRanges: mergeRanges2,
        rangesOverlap: rangesOverlap2
      });
      __assign(Dexie$1, namedExports, { default: Dexie$1 });
      return Dexie$1;
    }));
  }
});

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:3000",
  publicDexieCloudDbUrl: "https://zbsjlei7i.dexie.cloud"
};

// node_modules/dexie/import-wrapper.mjs
var import_dexie = __toESM(require_dexie(), 1);
var DexieSymbol = Symbol.for("Dexie");
var Dexie = globalThis[DexieSymbol] || (globalThis[DexieSymbol] = import_dexie.default);
if (import_dexie.default.semVer !== Dexie.semVer) {
  throw new Error(`Two different versions of Dexie loaded in the same app: ${import_dexie.default.semVer} and ${Dexie.semVer}`);
}
var {
  liveQuery,
  mergeRanges,
  rangesOverlap,
  RangeSet,
  cmp,
  Entity,
  PropModification,
  replacePrefix,
  add,
  remove,
  DexieYProvider
} = Dexie;
var import_wrapper_default = Dexie;

// src/app/database/dexie/data-mapper.service.ts
var _DataMapperService = class _DataMapperService {
  mapProductFromDB(product) {
    return {
      id: product.id,
      name: product.name,
      comment: product.comment || null,
      imageId: product.imageId || null
    };
  }
  mapItemFromDB(item, product) {
    return {
      id: item.id,
      status: this.toItemStatus(item.status),
      groupColor: item.groupColor || null,
      count: item.count,
      product: this.mapProductFromDB(product)
    };
  }
  mapListFromDB(list, items) {
    return {
      id: list.id,
      name: list.name,
      comment: list.comment || null,
      imageId: list.imageId || null,
      items
    };
  }
  toItemStatus(value) {
    return Object.values(ItemStatus).includes(value) ? value : ItemStatus.ToBuy;
  }
  mapItemToDBUpdate(item) {
    return {
      count: item.count || void 0,
      status: item.status || void 0,
      groupColor: item.groupColor || void 0
    };
  }
};
_DataMapperService.\u0275fac = function DataMapperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DataMapperService)();
};
_DataMapperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataMapperService, factory: _DataMapperService.\u0275fac, providedIn: "root" });
var DataMapperService = _DataMapperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataMapperService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// node_modules/lib0/math.js
var floor = Math.floor;
var abs = Math.abs;
var min = (a, b) => a < b ? a : b;
var max = (a, b) => a > b ? a : b;
var isNaN2 = Number.isNaN;
var isNegativeZero = (n) => n !== 0 ? n < 0 : 1 / n < 0;

// node_modules/lib0/binary.js
var BIT1 = 1;
var BIT2 = 2;
var BIT3 = 4;
var BIT4 = 8;
var BIT6 = 32;
var BIT7 = 64;
var BIT8 = 128;
var BIT18 = 1 << 17;
var BIT19 = 1 << 18;
var BIT20 = 1 << 19;
var BIT21 = 1 << 20;
var BIT22 = 1 << 21;
var BIT23 = 1 << 22;
var BIT24 = 1 << 23;
var BIT25 = 1 << 24;
var BIT26 = 1 << 25;
var BIT27 = 1 << 26;
var BIT28 = 1 << 27;
var BIT29 = 1 << 28;
var BIT30 = 1 << 29;
var BIT31 = 1 << 30;
var BIT32 = 1 << 31;
var BITS5 = 31;
var BITS6 = 63;
var BITS7 = 127;
var BITS17 = BIT18 - 1;
var BITS18 = BIT19 - 1;
var BITS19 = BIT20 - 1;
var BITS20 = BIT21 - 1;
var BITS21 = BIT22 - 1;
var BITS22 = BIT23 - 1;
var BITS23 = BIT24 - 1;
var BITS24 = BIT25 - 1;
var BITS25 = BIT26 - 1;
var BITS26 = BIT27 - 1;
var BITS27 = BIT28 - 1;
var BITS28 = BIT29 - 1;
var BITS29 = BIT30 - 1;
var BITS30 = BIT31 - 1;
var BITS31 = 2147483647;

// node_modules/lib0/number.js
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
var LOWEST_INT32 = 1 << 31;
var isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
var isNaN3 = Number.isNaN;
var parseInt2 = Number.parseInt;

// node_modules/lib0/set.js
var create = () => /* @__PURE__ */ new Set();

// node_modules/lib0/array.js
var last = (arr) => arr[arr.length - 1];
var appendTo = (dest, src) => {
  for (let i = 0; i < src.length; i++) {
    dest.push(src[i]);
  }
};
var from2 = Array.from;
var isArray = Array.isArray;

// node_modules/lib0/string.js
var fromCharCode = String.fromCharCode;
var fromCodePoint = String.fromCodePoint;
var MAX_UTF16_CHARACTER = fromCharCode(65535);
var toLowerCase = (s) => s.toLowerCase();
var trimLeftRegex = /^\s*/g;
var trimLeft = (s) => s.replace(trimLeftRegex, "");
var fromCamelCaseRegex = /([A-Z])/g;
var fromCamelCase = (s, separator) => trimLeft(s.replace(fromCamelCaseRegex, (match) => `${separator}${toLowerCase(match)}`));
var _encodeUtf8Polyfill = (str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  const buf = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buf[i] = /** @type {number} */
    encodedString.codePointAt(i);
  }
  return buf;
};
var utf8TextEncoder = (
  /** @type {TextEncoder} */
  typeof TextEncoder !== "undefined" ? new TextEncoder() : null
);
var _encodeUtf8Native = (str) => utf8TextEncoder.encode(str);
var encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
var utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) {
  utf8TextDecoder = null;
}

// node_modules/lib0/encoding.js
var Encoder = class {
  constructor() {
    this.cpos = 0;
    this.cbuf = new Uint8Array(100);
    this.bufs = [];
  }
};
var createEncoder = () => new Encoder();
var length = (encoder) => {
  let len = encoder.cpos;
  for (let i = 0; i < encoder.bufs.length; i++) {
    len += encoder.bufs[i].length;
  }
  return len;
};
var toUint8Array = (encoder) => {
  const uint8arr = new Uint8Array(length(encoder));
  let curPos = 0;
  for (let i = 0; i < encoder.bufs.length; i++) {
    const d = encoder.bufs[i];
    uint8arr.set(d, curPos);
    curPos += d.length;
  }
  uint8arr.set(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
  return uint8arr;
};
var verifyLen = (encoder, len) => {
  const bufferLen = encoder.cbuf.length;
  if (bufferLen - encoder.cpos < len) {
    encoder.bufs.push(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos));
    encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
    encoder.cpos = 0;
  }
};
var write = (encoder, num) => {
  const bufferLen = encoder.cbuf.length;
  if (encoder.cpos === bufferLen) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(bufferLen * 2);
    encoder.cpos = 0;
  }
  encoder.cbuf[encoder.cpos++] = num;
};
var writeUint8 = write;
var writeVarUint = (encoder, num) => {
  while (num > BITS7) {
    write(encoder, BIT8 | BITS7 & num);
    num = floor(num / 128);
  }
  write(encoder, BITS7 & num);
};
var writeVarInt = (encoder, num) => {
  const isNegative = isNegativeZero(num);
  if (isNegative) {
    num = -num;
  }
  write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
  num = floor(num / 64);
  while (num > 0) {
    write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
    num = floor(num / 128);
  }
};
var _strBuffer = new Uint8Array(3e4);
var _maxStrBSize = _strBuffer.length / 3;
var _writeVarStringNative = (encoder, str) => {
  if (str.length < _maxStrBSize) {
    const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
    writeVarUint(encoder, written);
    for (let i = 0; i < written; i++) {
      write(encoder, _strBuffer[i]);
    }
  } else {
    writeVarUint8Array(encoder, encodeUtf8(str));
  }
};
var _writeVarStringPolyfill = (encoder, str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    write(
      encoder,
      /** @type {number} */
      encodedString.codePointAt(i)
    );
  }
};
var writeVarString = utf8TextEncoder && /** @type {any} */
utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
var writeBinaryEncoder = (encoder, append2) => writeUint8Array(encoder, toUint8Array(append2));
var writeUint8Array = (encoder, uint8Array) => {
  const bufferLen = encoder.cbuf.length;
  const cpos = encoder.cpos;
  const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
  const rightCopyLen = uint8Array.length - leftCopyLen;
  encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
  encoder.cpos += leftCopyLen;
  if (rightCopyLen > 0) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
    encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
    encoder.cpos = rightCopyLen;
  }
};
var writeVarUint8Array = (encoder, uint8Array) => {
  writeVarUint(encoder, uint8Array.byteLength);
  writeUint8Array(encoder, uint8Array);
};
var writeOnDataView = (encoder, len) => {
  verifyLen(encoder, len);
  const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
  encoder.cpos += len;
  return dview;
};
var writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
var writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
var writeBigInt64 = (encoder, num) => (
  /** @type {any} */
  writeOnDataView(encoder, 8).setBigInt64(0, num, false)
);
var writeBigUint64 = (encoder, num) => (
  /** @type {any} */
  writeOnDataView(encoder, 8).setBigUint64(0, num, false)
);
var floatTestBed = new DataView(new ArrayBuffer(4));
var isFloat32 = (num) => {
  floatTestBed.setFloat32(0, num);
  return floatTestBed.getFloat32(0) === num;
};
var writeAny = (encoder, data) => {
  switch (typeof data) {
    case "string":
      write(encoder, 119);
      writeVarString(encoder, data);
      break;
    case "number":
      if (isInteger(data) && abs(data) <= BITS31) {
        write(encoder, 125);
        writeVarInt(encoder, data);
      } else if (isFloat32(data)) {
        write(encoder, 124);
        writeFloat32(encoder, data);
      } else {
        write(encoder, 123);
        writeFloat64(encoder, data);
      }
      break;
    case "bigint":
      write(encoder, 122);
      writeBigInt64(encoder, data);
      break;
    case "object":
      if (data === null) {
        write(encoder, 126);
      } else if (isArray(data)) {
        write(encoder, 117);
        writeVarUint(encoder, data.length);
        for (let i = 0; i < data.length; i++) {
          writeAny(encoder, data[i]);
        }
      } else if (data instanceof Uint8Array) {
        write(encoder, 116);
        writeVarUint8Array(encoder, data);
      } else {
        write(encoder, 118);
        const keys2 = Object.keys(data);
        writeVarUint(encoder, keys2.length);
        for (let i = 0; i < keys2.length; i++) {
          const key = keys2[i];
          writeVarString(encoder, key);
          writeAny(encoder, data[key]);
        }
      }
      break;
    case "boolean":
      write(encoder, data ? 120 : 121);
      break;
    default:
      write(encoder, 127);
  }
};
var RleEncoder = class extends Encoder {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(writer) {
    super();
    this.w = writer;
    this.s = null;
    this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      if (this.count > 0) {
        writeVarUint(this, this.count - 1);
      }
      this.count = 1;
      this.w(this, v);
      this.s = v;
    }
  }
};
var flushUintOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
var UintOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      flushUintOptRleEncoder(this);
      this.count = 1;
      this.s = v;
    }
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    flushUintOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
};
var flushIntDiffOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
    writeVarInt(encoder.encoder, encodedDiff);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
var IntDiffOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.diff === v - this.s) {
      this.s = v;
      this.count++;
    } else {
      flushIntDiffOptRleEncoder(this);
      this.count = 1;
      this.diff = v - this.s;
      this.s = v;
    }
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    flushIntDiffOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
};
var StringEncoder = class {
  constructor() {
    this.sarr = [];
    this.s = "";
    this.lensE = new UintOptRleEncoder();
  }
  /**
   * @param {string} string
   */
  write(string) {
    this.s += string;
    if (this.s.length > 19) {
      this.sarr.push(this.s);
      this.s = "";
    }
    this.lensE.write(string.length);
  }
  toUint8Array() {
    const encoder = new Encoder();
    this.sarr.push(this.s);
    this.s = "";
    writeVarString(encoder, this.sarr.join(""));
    writeUint8Array(encoder, this.lensE.toUint8Array());
    return toUint8Array(encoder);
  }
};

// node_modules/lib0/error.js
var create2 = (s) => new Error(s);
var methodUnimplemented = () => {
  throw create2("Method unimplemented");
};
var unexpectedCase = () => {
  throw create2("Unexpected case");
};

// node_modules/lib0/decoding.js
var errorUnexpectedEndOfArray = create2("Unexpected end of array");
var errorIntegerOutOfRange = create2("Integer out of Range");
var Decoder = class {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(uint8Array) {
    this.arr = uint8Array;
    this.pos = 0;
  }
};
var createDecoder = (uint8Array) => new Decoder(uint8Array);
var hasContent = (decoder) => decoder.pos !== decoder.arr.length;
var readUint8Array = (decoder, len) => {
  const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
  decoder.pos += len;
  return view;
};
var readVarUint8Array = (decoder) => readUint8Array(decoder, readVarUint(decoder));
var readUint8 = (decoder) => decoder.arr[decoder.pos++];
var readVarUint = (decoder) => {
  let num = 0;
  let mult = 1;
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    const r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
var readVarInt = (decoder) => {
  let r = decoder.arr[decoder.pos++];
  let num = r & BITS6;
  let mult = 64;
  const sign = (r & BIT7) > 0 ? -1 : 1;
  if ((r & BIT8) === 0) {
    return sign * num;
  }
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return sign * num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
var _readVarStringPolyfill = (decoder) => {
  let remainingLen = readVarUint(decoder);
  if (remainingLen === 0) {
    return "";
  } else {
    let encodedString = String.fromCodePoint(readUint8(decoder));
    if (--remainingLen < 100) {
      while (remainingLen--) {
        encodedString += String.fromCodePoint(readUint8(decoder));
      }
    } else {
      while (remainingLen > 0) {
        const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
        const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
        decoder.pos += nextLen;
        encodedString += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          bytes
        );
        remainingLen -= nextLen;
      }
    }
    return decodeURIComponent(escape(encodedString));
  }
};
var _readVarStringNative = (decoder) => (
  /** @type any */
  utf8TextDecoder.decode(readVarUint8Array(decoder))
);
var readVarString = utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;
var readFromDataView = (decoder, len) => {
  const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
  decoder.pos += len;
  return dv;
};
var readFloat32 = (decoder) => readFromDataView(decoder, 4).getFloat32(0, false);
var readFloat64 = (decoder) => readFromDataView(decoder, 8).getFloat64(0, false);
var readBigInt64 = (decoder) => (
  /** @type {any} */
  readFromDataView(decoder, 8).getBigInt64(0, false)
);
var readBigUint64 = (decoder) => (
  /** @type {any} */
  readFromDataView(decoder, 8).getBigUint64(0, false)
);
var readAnyLookupTable = [
  (decoder) => void 0,
  // CASE 127: undefined
  (decoder) => null,
  // CASE 126: null
  readVarInt,
  // CASE 125: integer
  readFloat32,
  // CASE 124: float32
  readFloat64,
  // CASE 123: float64
  readBigInt64,
  // CASE 122: bigint
  (decoder) => false,
  // CASE 121: boolean (false)
  (decoder) => true,
  // CASE 120: boolean (true)
  readVarString,
  // CASE 119: string
  (decoder) => {
    const len = readVarUint(decoder);
    const obj = {};
    for (let i = 0; i < len; i++) {
      const key = readVarString(decoder);
      obj[key] = readAny(decoder);
    }
    return obj;
  },
  (decoder) => {
    const len = readVarUint(decoder);
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(readAny(decoder));
    }
    return arr;
  },
  readVarUint8Array
  // CASE 116: Uint8Array
];
var readAny = (decoder) => readAnyLookupTable[127 - readUint8(decoder)](decoder);
var RleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(uint8Array, reader) {
    super(uint8Array);
    this.reader = reader;
    this.s = null;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = this.reader(this);
      if (hasContent(this)) {
        this.count = readVarUint(this) + 1;
      } else {
        this.count = -1;
      }
    }
    this.count--;
    return (
      /** @type {T} */
      this.s
    );
  }
};
var UintOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = readVarInt(this);
      const isNegative = isNegativeZero(this.s);
      this.count = 1;
      if (isNegative) {
        this.s = -this.s;
        this.count = readVarUint(this) + 2;
      }
    }
    this.count--;
    return (
      /** @type {number} */
      this.s
    );
  }
};
var IntDiffOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const diff = readVarInt(this);
      const hasCount = diff & 1;
      this.diff = floor(diff / 2);
      this.count = 1;
      if (hasCount) {
        this.count = readVarUint(this) + 2;
      }
    }
    this.s += this.diff;
    this.count--;
    return this.s;
  }
};
var StringDecoder = class {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    this.decoder = new UintOptRleDecoder(uint8Array);
    this.str = readVarString(this.decoder);
    this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const end = this.spos + this.decoder.read();
    const res = this.str.slice(this.spos, end);
    this.spos = end;
    return res;
  }
};

// node_modules/lib0/map.js
var create3 = () => /* @__PURE__ */ new Map();
var copy = (m) => {
  const r = create3();
  m.forEach((v, k) => {
    r.set(k, v);
  });
  return r;
};
var setIfUndefined = (map3, key, createT) => {
  let set = map3.get(key);
  if (set === void 0) {
    map3.set(key, set = createT());
  }
  return set;
};
var map2 = (m, f) => {
  const res = [];
  for (const [key, value] of m) {
    res.push(f(value, key));
  }
  return res;
};
var any = (m, f) => {
  for (const [key, value] of m) {
    if (f(value, key)) {
      return true;
    }
  }
  return false;
};

// node_modules/lib0/observable.js
var ObservableV2 = class {
  constructor() {
    this._observers = create3();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(name, f) {
    setIfUndefined(
      this._observers,
      /** @type {string} */
      name,
      create
    ).add(f);
    return f;
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  once(name, f) {
    const _f = (...args2) => {
      this.off(
        name,
        /** @type {any} */
        _f
      );
      f(...args2);
    };
    this.on(
      name,
      /** @type {any} */
      _f
    );
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */
  emit(name, args2) {
    return from2((this._observers.get(name) || create3()).values()).forEach((f) => f(...args2));
  }
  destroy() {
    this._observers = create3();
  }
};
var Observable2 = class {
  constructor() {
    this._observers = create3();
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  on(name, f) {
    setIfUndefined(this._observers, name, create).add(f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  once(name, f) {
    const _f = (...args2) => {
      this.off(name, _f);
      f(...args2);
    };
    this.on(name, _f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @param {N} name The event name.
   * @param {Array<any>} args The arguments that are applied to the event listener.
   */
  emit(name, args2) {
    return from2((this._observers.get(name) || create3()).values()).forEach((f) => f(...args2));
  }
  destroy() {
    this._observers = create3();
  }
};

// node_modules/lib0/webcrypto.js
var subtle = crypto.subtle;
var getRandomValues = crypto.getRandomValues.bind(crypto);

// node_modules/lib0/random.js
var uint32 = () => getRandomValues(new Uint32Array(1))[0];
var uuidv4Template = "10000000-1000-4000-8000" + -1e11;
var uuidv4 = () => uuidv4Template.replace(
  /[018]/g,
  /** @param {number} c */
  (c) => (c ^ uint32() & 15 >> c / 4).toString(16)
);

// node_modules/lib0/time.js
var getUnixTime = Date.now;

// node_modules/lib0/promise.js
var create4 = (f) => (
  /** @type {Promise<T>} */
  new Promise(f)
);
var all = Promise.all.bind(Promise);

// node_modules/lib0/conditions.js
var undefinedToNull = (v) => v === void 0 ? null : v;

// node_modules/lib0/storage.js
var VarStoragePolyfill = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(key, newValue) {
    this.map.set(key, newValue);
  }
  /**
   * @param {string} key
   */
  getItem(key) {
    return this.map.get(key);
  }
};
var _localStorage = new VarStoragePolyfill();
var usePolyfill = true;
try {
  if (typeof localStorage !== "undefined" && localStorage) {
    _localStorage = localStorage;
    usePolyfill = false;
  }
} catch (e) {
}
var varStorage = _localStorage;

// node_modules/lib0/object.js
var assign = Object.assign;
var keys = Object.keys;
var forEach = (obj, f) => {
  for (const key in obj) {
    f(obj[key], key);
  }
};
var length2 = (obj) => keys(obj).length;
var size = (obj) => keys(obj).length;
var isEmpty = (obj) => {
  for (const _k in obj) {
    return false;
  }
  return true;
};
var every = (obj, f) => {
  for (const key in obj) {
    if (!f(obj[key], key)) {
      return false;
    }
  }
  return true;
};
var hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
var equalFlat = (a, b) => a === b || size(a) === size(b) && every(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && b[key] === val);
var freeze = Object.freeze;
var deepFreeze = (o) => {
  for (const key in o) {
    const c = o[key];
    if (typeof c === "object" || typeof c === "function") {
      deepFreeze(o[key]);
    }
  }
  return freeze(o);
};

// node_modules/lib0/traits.js
var EqualityTraitSymbol = Symbol("Equality");

// node_modules/lib0/function.js
var callAll = (fs, args2, i = 0) => {
  try {
    for (; i < fs.length; i++) {
      fs[i](...args2);
    }
  } finally {
    if (i < fs.length) {
      callAll(fs, args2, i + 1);
    }
  }
};
var equalityDeep = (a, b) => {
  if (a === b) {
    return true;
  }
  if (a == null || b == null || a.constructor !== b.constructor) {
    return false;
  }
  if (a[EqualityTraitSymbol] != null) {
    return a[EqualityTraitSymbol](b);
  }
  switch (a.constructor) {
    case ArrayBuffer:
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    // eslint-disable-next-line no-fallthrough
    case Uint8Array: {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      break;
    }
    case Set: {
      if (a.size !== b.size) {
        return false;
      }
      for (const value of a) {
        if (!b.has(value)) {
          return false;
        }
      }
      break;
    }
    case Map: {
      if (a.size !== b.size) {
        return false;
      }
      for (const key of a.keys()) {
        if (!b.has(key) || !equalityDeep(a.get(key), b.get(key))) {
          return false;
        }
      }
      break;
    }
    case Object:
      if (length2(a) !== length2(b)) {
        return false;
      }
      for (const key in a) {
        if (!hasProperty(a, key) || !equalityDeep(a[key], b[key])) {
          return false;
        }
      }
      break;
    case Array:
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!equalityDeep(a[i], b[i])) {
          return false;
        }
      }
      break;
    default:
      return false;
  }
  return true;
};
var isOneOf = (value, options) => options.includes(value);

// node_modules/lib0/environment.js
var isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
var isMac = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
var params;
var args = [];
var computeParams = () => {
  if (params === void 0) {
    if (isNode) {
      params = create3();
      const pargs = process.argv;
      let currParamName = null;
      for (let i = 0; i < pargs.length; i++) {
        const parg = pargs[i];
        if (parg[0] === "-") {
          if (currParamName !== null) {
            params.set(currParamName, "");
          }
          currParamName = parg;
        } else {
          if (currParamName !== null) {
            params.set(currParamName, parg);
            currParamName = null;
          } else {
            args.push(parg);
          }
        }
      }
      if (currParamName !== null) {
        params.set(currParamName, "");
      }
    } else if (typeof location === "object") {
      params = create3();
      (location.search || "?").slice(1).split("&").forEach((kv) => {
        if (kv.length !== 0) {
          const [key, value] = kv.split("=");
          params.set(`--${fromCamelCase(key, "-")}`, value);
          params.set(`-${fromCamelCase(key, "-")}`, value);
        }
      });
    } else {
      params = create3();
    }
  }
  return params;
};
var hasParam = (name) => computeParams().has(name);
var getVariable = (name) => isNode ? undefinedToNull(process.env[name.toUpperCase().replaceAll("-", "_")]) : undefinedToNull(varStorage.getItem(name));
var hasConf = (name) => hasParam("--" + name) || getVariable(name) !== null;
var production = hasConf("production");
var forceColor = isNode && isOneOf(process.env.FORCE_COLOR, ["true", "1", "2"]);
var supportsColor = forceColor || !hasParam("--no-colors") && // @todo deprecate --no-colors
!hasConf("no-color") && (!isNode || process.stdout.isTTY) && (!isNode || hasParam("--color") || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));

// node_modules/lib0/pair.js
var Pair = class {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
};
var create5 = (left, right) => new Pair(left, right);

// node_modules/lib0/dom.js
var doc = (
  /** @type {Document} */
  typeof document !== "undefined" ? document : {}
);
var domParser = (
  /** @type {DOMParser} */
  typeof DOMParser !== "undefined" ? new DOMParser() : null
);
var mapToStyleString = (m) => map2(m, (value, key) => `${key}:${value};`).join("");
var ELEMENT_NODE = doc.ELEMENT_NODE;
var TEXT_NODE = doc.TEXT_NODE;
var CDATA_SECTION_NODE = doc.CDATA_SECTION_NODE;
var COMMENT_NODE = doc.COMMENT_NODE;
var DOCUMENT_NODE = doc.DOCUMENT_NODE;
var DOCUMENT_TYPE_NODE = doc.DOCUMENT_TYPE_NODE;
var DOCUMENT_FRAGMENT_NODE = doc.DOCUMENT_FRAGMENT_NODE;

// node_modules/lib0/symbol.js
var create6 = Symbol;

// node_modules/lib0/logging.common.js
var BOLD = create6();
var UNBOLD = create6();
var BLUE = create6();
var GREY = create6();
var GREEN = create6();
var RED = create6();
var PURPLE = create6();
var ORANGE = create6();
var UNCOLOR = create6();
var computeNoColorLoggingArgs = (args2) => {
  if (args2.length === 1 && args2[0]?.constructor === Function) {
    args2 = /** @type {Array<string|Symbol|Object|number>} */
    /** @type {[function]} */
    args2[0]();
  }
  const strBuilder = [];
  const logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (arg === void 0) {
      break;
    } else if (arg.constructor === String || arg.constructor === Number) {
      strBuilder.push(arg);
    } else if (arg.constructor === Object) {
      break;
    }
  }
  if (i > 0) {
    logArgs.push(strBuilder.join(""));
  }
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
var lastLoggingTime = getUnixTime();

// node_modules/lib0/logging.js
var _browserStyleMap = {
  [BOLD]: create5("font-weight", "bold"),
  [UNBOLD]: create5("font-weight", "normal"),
  [BLUE]: create5("color", "blue"),
  [GREEN]: create5("color", "green"),
  [GREY]: create5("color", "grey"),
  [RED]: create5("color", "red"),
  [PURPLE]: create5("color", "purple"),
  [ORANGE]: create5("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [UNCOLOR]: create5("color", "black")
};
var computeBrowserLoggingArgs = (args2) => {
  if (args2.length === 1 && args2[0]?.constructor === Function) {
    args2 = /** @type {Array<string|Symbol|Object|number>} */
    /** @type {[function]} */
    args2[0]();
  }
  const strBuilder = [];
  const styles = [];
  const currentStyle = create3();
  let logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    const style = _browserStyleMap[arg];
    if (style !== void 0) {
      currentStyle.set(style.left, style.right);
    } else {
      if (arg === void 0) {
        break;
      }
      if (arg.constructor === String || arg.constructor === Number) {
        const style2 = mapToStyleString(currentStyle);
        if (i > 0 || style2.length > 0) {
          strBuilder.push("%c" + arg);
          styles.push(style2);
        } else {
          strBuilder.push(arg);
        }
      } else {
        break;
      }
    }
  }
  if (i > 0) {
    logArgs = styles;
    logArgs.unshift(strBuilder.join(""));
  }
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
var computeLoggingArgs = supportsColor ? computeBrowserLoggingArgs : computeNoColorLoggingArgs;
var print = (...args2) => {
  console.log(...computeLoggingArgs(args2));
  vconsoles.forEach((vc) => vc.print(args2));
};
var warn = (...args2) => {
  console.warn(...computeLoggingArgs(args2));
  args2.unshift(ORANGE);
  vconsoles.forEach((vc) => vc.print(args2));
};
var vconsoles = create();

// node_modules/lib0/iterator.js
var createIterator = (next) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next
});
var iteratorFilter = (iterator, filter2) => createIterator(() => {
  let res;
  do {
    res = iterator.next();
  } while (!res.done && !filter2(res.value));
  return res;
});
var iteratorMap = (iterator, fmap) => createIterator(() => {
  const { done, value } = iterator.next();
  return { done, value: done ? void 0 : fmap(value) };
});

// node_modules/yjs/dist/yjs.mjs
var DeleteItem = class {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(clock, len) {
    this.clock = clock;
    this.len = len;
  }
};
var DeleteSet = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
};
var iterateDeletedStructs = (transaction, ds, f) => ds.clients.forEach((deletes, clientid) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    transaction.doc.store.clients.get(clientid)
  );
  if (structs != null) {
    const lastStruct = structs[structs.length - 1];
    const clockState = lastStruct.id.clock + lastStruct.length;
    for (let i = 0, del = deletes[i]; i < deletes.length && del.clock < clockState; del = deletes[++i]) {
      iterateStructs(transaction, structs, del.clock, del.len, f);
    }
  }
});
var findIndexDS = (dis, clock) => {
  let left = 0;
  let right = dis.length - 1;
  while (left <= right) {
    const midindex = floor((left + right) / 2);
    const mid = dis[midindex];
    const midclock = mid.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.len) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
  }
  return null;
};
var isDeleted = (ds, id2) => {
  const dis = ds.clients.get(id2.client);
  return dis !== void 0 && findIndexDS(dis, id2.clock) !== null;
};
var sortAndMergeDeleteSet = (ds) => {
  ds.clients.forEach((dels) => {
    dels.sort((a, b) => a.clock - b.clock);
    let i, j;
    for (i = 1, j = 1; i < dels.length; i++) {
      const left = dels[j - 1];
      const right = dels[i];
      if (left.clock + left.len >= right.clock) {
        left.len = max(left.len, right.clock + right.len - left.clock);
      } else {
        if (j < i) {
          dels[j] = right;
        }
        j++;
      }
    }
    dels.length = j;
  });
};
var mergeDeleteSets = (dss) => {
  const merged = new DeleteSet();
  for (let dssI = 0; dssI < dss.length; dssI++) {
    dss[dssI].clients.forEach((delsLeft, client) => {
      if (!merged.clients.has(client)) {
        const dels = delsLeft.slice();
        for (let i = dssI + 1; i < dss.length; i++) {
          appendTo(dels, dss[i].clients.get(client) || []);
        }
        merged.clients.set(client, dels);
      }
    });
  }
  sortAndMergeDeleteSet(merged);
  return merged;
};
var addToDeleteSet = (ds, client, clock, length3) => {
  setIfUndefined(ds.clients, client, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new DeleteItem(clock, length3));
};
var createDeleteSet = () => new DeleteSet();
var writeDeleteSet = (encoder, ds) => {
  writeVarUint(encoder.restEncoder, ds.clients.size);
  from2(ds.clients.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, dsitems]) => {
    encoder.resetDsCurVal();
    writeVarUint(encoder.restEncoder, client);
    const len = dsitems.length;
    writeVarUint(encoder.restEncoder, len);
    for (let i = 0; i < len; i++) {
      const item = dsitems[i];
      encoder.writeDsClock(item.clock);
      encoder.writeDsLen(item.len);
    }
  });
};
var readDeleteSet = (decoder) => {
  const ds = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    if (numberOfDeletes > 0) {
      const dsField = setIfUndefined(ds.clients, client, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let i2 = 0; i2 < numberOfDeletes; i2++) {
        dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
      }
    }
  }
  return ds;
};
var readAndApplyDeleteSet = (decoder, transaction, store) => {
  const unappliedDS = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    const structs = store.clients.get(client) || [];
    const state = getState(store, client);
    for (let i2 = 0; i2 < numberOfDeletes; i2++) {
      const clock = decoder.readDsClock();
      const clockEnd = clock + decoder.readDsLen();
      if (clock < state) {
        if (state < clockEnd) {
          addToDeleteSet(unappliedDS, client, state, clockEnd - state);
        }
        let index = findIndexSS(structs, clock);
        let struct = structs[index];
        if (!struct.deleted && struct.id.clock < clock) {
          structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
          index++;
        }
        while (index < structs.length) {
          struct = structs[index++];
          if (struct.id.clock < clockEnd) {
            if (!struct.deleted) {
              if (clockEnd < struct.id.clock + struct.length) {
                structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
              }
              struct.delete(transaction);
            }
          } else {
            break;
          }
        }
      } else {
        addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
      }
    }
  }
  if (unappliedDS.clients.size > 0) {
    const ds = new UpdateEncoderV2();
    writeVarUint(ds.restEncoder, 0);
    writeDeleteSet(ds, unappliedDS);
    return ds.toUint8Array();
  }
  return null;
};
var generateNewClientId = uint32;
var Doc = class _Doc extends ObservableV2 {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
    super();
    this.gc = gc;
    this.gcFilter = gcFilter;
    this.clientID = generateNewClientId();
    this.guid = guid;
    this.collectionid = collectionid;
    this.share = /* @__PURE__ */ new Map();
    this.store = new StructStore();
    this._transaction = null;
    this._transactionCleanups = [];
    this.subdocs = /* @__PURE__ */ new Set();
    this._item = null;
    this.shouldLoad = shouldLoad;
    this.autoLoad = autoLoad;
    this.meta = meta;
    this.isLoaded = false;
    this.isSynced = false;
    this.isDestroyed = false;
    this.whenLoaded = create4((resolve) => {
      this.on("load", () => {
        this.isLoaded = true;
        resolve(this);
      });
    });
    const provideSyncedPromise = () => create4((resolve) => {
      const eventHandler = (isSynced) => {
        if (isSynced === void 0 || isSynced === true) {
          this.off("sync", eventHandler);
          resolve();
        }
      };
      this.on("sync", eventHandler);
    });
    this.on("sync", (isSynced) => {
      if (isSynced === false && this.isSynced) {
        this.whenSynced = provideSyncedPromise();
      }
      this.isSynced = isSynced === void 0 || isSynced === true;
      if (this.isSynced && !this.isLoaded) {
        this.emit("load", [this]);
      }
    });
    this.whenSynced = provideSyncedPromise();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const item = this._item;
    if (item !== null && !this.shouldLoad) {
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          transaction.subdocsLoaded.add(this);
        },
        null,
        true
      );
    }
    this.shouldLoad = true;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(from2(this.subdocs).map((doc2) => doc2.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(f, origin = null) {
    return transact(this, f, origin);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(name, TypeConstructor = (
    /** @type {any} */
    AbstractType
  )) {
    const type = setIfUndefined(this.share, name, () => {
      const t = new TypeConstructor();
      t._integrate(this, null);
      return t;
    });
    const Constr = type.constructor;
    if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
      if (Constr === AbstractType) {
        const t = new TypeConstructor();
        t._map = type._map;
        type._map.forEach(
          /** @param {Item?} n */
          (n) => {
            for (; n !== null; n = n.left) {
              n.parent = t;
            }
          }
        );
        t._start = type._start;
        for (let n = t._start; n !== null; n = n.right) {
          n.parent = t;
        }
        t._length = type._length;
        this.share.set(name, t);
        t._integrate(this, null);
        return (
          /** @type {InstanceType<Type>} */
          t
        );
      } else {
        throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
      }
    }
    return (
      /** @type {InstanceType<Type>} */
      type
    );
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(name = "") {
    return (
      /** @type {YArray<T>} */
      this.get(name, YArray)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(name = "") {
    return this.get(name, YText);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(name = "") {
    return (
      /** @type {YMap<T>} */
      this.get(name, YMap)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */
  getXmlElement(name = "") {
    return (
      /** @type {YXmlElement<{[key:string]:string}>} */
      this.get(name, YXmlElement)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(name = "") {
    return this.get(name, YXmlFragment);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const doc2 = {};
    this.share.forEach((value, key) => {
      doc2[key] = value.toJSON();
    });
    return doc2;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    this.isDestroyed = true;
    from2(this.subdocs).forEach((subdoc) => subdoc.destroy());
    const item = this._item;
    if (item !== null) {
      this._item = null;
      const content = (
        /** @type {ContentDoc} */
        item.content
      );
      content.doc = new _Doc(__spreadProps(__spreadValues({ guid: this.guid }, content.opts), { shouldLoad: false }));
      content.doc._item = item;
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          const doc2 = content.doc;
          if (!item.deleted) {
            transaction.subdocsAdded.add(doc2);
          }
          transaction.subdocsRemoved.add(this);
        },
        null,
        true
      );
    }
    this.emit("destroyed", [true]);
    this.emit("destroy", [this]);
    super.destroy();
  }
};
var DSDecoderV2 = class {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.dsCurrVal = 0;
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    this.dsCurrVal += readVarUint(this.restDecoder);
    return this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const diff = readVarUint(this.restDecoder) + 1;
    this.dsCurrVal += diff;
    return diff;
  }
};
var UpdateDecoderV2 = class extends DSDecoderV2 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    super(decoder);
    this.keys = [];
    readVarUint(decoder);
    this.keyClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.clientDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.leftClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.rightClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.infoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.stringDecoder = new StringDecoder(readVarUint8Array(decoder));
    this.parentInfoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.typeRefDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.lenDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return readVarUint8Array(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const keyClock = this.keyClockDecoder.read();
    if (keyClock < this.keys.length) {
      return this.keys[keyClock];
    } else {
      const key = this.stringDecoder.read();
      this.keys.push(key);
      return key;
    }
  }
};
var DSEncoderV1 = class {
  constructor() {
    this.restEncoder = createEncoder();
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    writeVarUint(this.restEncoder, clock);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    writeVarUint(this.restEncoder, len);
  }
};
var UpdateEncoderV1 = class extends DSEncoderV1 {
  /**
   * @param {ID} id
   */
  writeLeftID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(client) {
    writeVarUint(this.restEncoder, client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    writeUint8(this.restEncoder, info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    writeVarString(this.restEncoder, s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    writeVarUint(this.restEncoder, isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    writeVarUint(this.restEncoder, info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    writeVarUint(this.restEncoder, len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * @param {any} embed
   */
  writeJSON(embed) {
    writeVarString(this.restEncoder, JSON.stringify(embed));
  }
  /**
   * @param {string} key
   */
  writeKey(key) {
    writeVarString(this.restEncoder, key);
  }
};
var DSEncoderV2 = class {
  constructor() {
    this.restEncoder = createEncoder();
    this.dsCurrVal = 0;
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    const diff = clock - this.dsCurrVal;
    this.dsCurrVal = clock;
    writeVarUint(this.restEncoder, diff);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    if (len === 0) {
      unexpectedCase();
    }
    writeVarUint(this.restEncoder, len - 1);
    this.dsCurrVal += len;
  }
};
var UpdateEncoderV2 = class extends DSEncoderV2 {
  constructor() {
    super();
    this.keyMap = /* @__PURE__ */ new Map();
    this.keyClock = 0;
    this.keyClockEncoder = new IntDiffOptRleEncoder();
    this.clientEncoder = new UintOptRleEncoder();
    this.leftClockEncoder = new IntDiffOptRleEncoder();
    this.rightClockEncoder = new IntDiffOptRleEncoder();
    this.infoEncoder = new RleEncoder(writeUint8);
    this.stringEncoder = new StringEncoder();
    this.parentInfoEncoder = new RleEncoder(writeUint8);
    this.typeRefEncoder = new UintOptRleEncoder();
    this.lenEncoder = new UintOptRleEncoder();
  }
  toUint8Array() {
    const encoder = createEncoder();
    writeVarUint(encoder, 0);
    writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
    writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
    writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
    writeUint8Array(encoder, toUint8Array(this.restEncoder));
    return toUint8Array(encoder);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(id2) {
    this.clientEncoder.write(id2.client);
    this.leftClockEncoder.write(id2.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id2) {
    this.clientEncoder.write(id2.client);
    this.rightClockEncoder.write(id2.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(client) {
    this.clientEncoder.write(client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    this.infoEncoder.write(info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    this.stringEncoder.write(s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    this.parentInfoEncoder.write(isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    this.typeRefEncoder.write(info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    this.lenEncoder.write(len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(embed) {
    writeAny(this.restEncoder, embed);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(key) {
    const clock = this.keyMap.get(key);
    if (clock === void 0) {
      this.keyClockEncoder.write(this.keyClock++);
      this.stringEncoder.write(key);
    } else {
      this.keyClockEncoder.write(clock);
    }
  }
};
var writeStructs = (encoder, structs, client, clock) => {
  clock = max(clock, structs[0].id.clock);
  const startNewStructs = findIndexSS(structs, clock);
  writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
  encoder.writeClient(client);
  writeVarUint(encoder.restEncoder, clock);
  const firstStruct = structs[startNewStructs];
  firstStruct.write(encoder, clock - firstStruct.id.clock);
  for (let i = startNewStructs + 1; i < structs.length; i++) {
    structs[i].write(encoder, 0);
  }
};
var writeClientsStructs = (encoder, store, _sm) => {
  const sm = /* @__PURE__ */ new Map();
  _sm.forEach((clock, client) => {
    if (getState(store, client) > clock) {
      sm.set(client, clock);
    }
  });
  getStateVector(store).forEach((_clock, client) => {
    if (!_sm.has(client)) {
      sm.set(client, 0);
    }
  });
  writeVarUint(encoder.restEncoder, sm.size);
  from2(sm.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeStructs(
      encoder,
      /** @type {Array<GC|Item>} */
      store.clients.get(client),
      client,
      clock
    );
  });
};
var readClientsStructRefs = (decoder, doc2) => {
  const clientRefs = create3();
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const refs = new Array(numberOfStructs);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    clientRefs.set(client, { i: 0, refs });
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      switch (BITS5 & info) {
        case 0: {
          const len = decoder.readLen();
          refs[i2] = new GC(createID(client, clock), len);
          clock += len;
          break;
        }
        case 10: {
          const len = readVarUint(decoder.restDecoder);
          refs[i2] = new Skip(createID(client, clock), len);
          clock += len;
          break;
        }
        default: {
          const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
          const struct = new Item(
            createID(client, clock),
            null,
            // left
            (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
            // origin
            null,
            // right
            (info & BIT7) === BIT7 ? decoder.readRightID() : null,
            // right origin
            cantCopyParentInfo ? decoder.readParentInfo() ? doc2.get(decoder.readString()) : decoder.readLeftID() : null,
            // parent
            cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
            // parentSub
            readItemContent(decoder, info)
            // item content
          );
          refs[i2] = struct;
          clock += struct.length;
        }
      }
    }
  }
  return clientRefs;
};
var integrateStructs = (transaction, store, clientsStructRefs) => {
  const stack = [];
  let clientsStructRefsIds = from2(clientsStructRefs.keys()).sort((a, b) => a - b);
  if (clientsStructRefsIds.length === 0) {
    return null;
  }
  const getNextStructTarget = () => {
    if (clientsStructRefsIds.length === 0) {
      return null;
    }
    let nextStructsTarget = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1])
    );
    while (nextStructsTarget.refs.length === nextStructsTarget.i) {
      clientsStructRefsIds.pop();
      if (clientsStructRefsIds.length > 0) {
        nextStructsTarget = /** @type {{i:number,refs:Array<GC|Item>}} */
        clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
      } else {
        return null;
      }
    }
    return nextStructsTarget;
  };
  let curStructsTarget = getNextStructTarget();
  if (curStructsTarget === null) {
    return null;
  }
  const restStructs = new StructStore();
  const missingSV = /* @__PURE__ */ new Map();
  const updateMissingSv = (client, clock) => {
    const mclock = missingSV.get(client);
    if (mclock == null || mclock > clock) {
      missingSV.set(client, clock);
    }
  };
  let stackHead = (
    /** @type {any} */
    curStructsTarget.refs[
      /** @type {any} */
      curStructsTarget.i++
    ]
  );
  const state = /* @__PURE__ */ new Map();
  const addStackToRestSS = () => {
    for (const item of stack) {
      const client = item.id.client;
      const inapplicableItems = clientsStructRefs.get(client);
      if (inapplicableItems) {
        inapplicableItems.i--;
        restStructs.clients.set(client, inapplicableItems.refs.slice(inapplicableItems.i));
        clientsStructRefs.delete(client);
        inapplicableItems.i = 0;
        inapplicableItems.refs = [];
      } else {
        restStructs.clients.set(client, [item]);
      }
      clientsStructRefsIds = clientsStructRefsIds.filter((c) => c !== client);
    }
    stack.length = 0;
  };
  while (true) {
    if (stackHead.constructor !== Skip) {
      const localClock = setIfUndefined(state, stackHead.id.client, () => getState(store, stackHead.id.client));
      const offset = localClock - stackHead.id.clock;
      if (offset < 0) {
        stack.push(stackHead);
        updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
        addStackToRestSS();
      } else {
        const missing = stackHead.getMissing(transaction, store);
        if (missing !== null) {
          stack.push(stackHead);
          const structRefs = clientsStructRefs.get(
            /** @type {number} */
            missing
          ) || { refs: [], i: 0 };
          if (structRefs.refs.length === structRefs.i) {
            updateMissingSv(
              /** @type {number} */
              missing,
              getState(store, missing)
            );
            addStackToRestSS();
          } else {
            stackHead = structRefs.refs[structRefs.i++];
            continue;
          }
        } else if (offset === 0 || offset < stackHead.length) {
          stackHead.integrate(transaction, offset);
          state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
        }
      }
    }
    if (stack.length > 0) {
      stackHead = /** @type {GC|Item} */
      stack.pop();
    } else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) {
      stackHead = /** @type {GC|Item} */
      curStructsTarget.refs[curStructsTarget.i++];
    } else {
      curStructsTarget = getNextStructTarget();
      if (curStructsTarget === null) {
        break;
      } else {
        stackHead = /** @type {GC|Item} */
        curStructsTarget.refs[curStructsTarget.i++];
      }
    }
  }
  if (restStructs.clients.size > 0) {
    const encoder = new UpdateEncoderV2();
    writeClientsStructs(encoder, restStructs, /* @__PURE__ */ new Map());
    writeVarUint(encoder.restEncoder, 0);
    return { missing: missingSV, update: encoder.toUint8Array() };
  }
  return null;
};
var writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
var readUpdateV2 = (decoder, ydoc, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder)) => transact(ydoc, (transaction) => {
  transaction.local = false;
  let retry = false;
  const doc2 = transaction.doc;
  const store = doc2.store;
  const ss = readClientsStructRefs(structDecoder, doc2);
  const restStructs = integrateStructs(transaction, store, ss);
  const pending = store.pendingStructs;
  if (pending) {
    for (const [client, clock] of pending.missing) {
      if (clock < getState(store, client)) {
        retry = true;
        break;
      }
    }
    if (restStructs) {
      for (const [client, clock] of restStructs.missing) {
        const mclock = pending.missing.get(client);
        if (mclock == null || mclock > clock) {
          pending.missing.set(client, clock);
        }
      }
      pending.update = mergeUpdatesV2([pending.update, restStructs.update]);
    }
  } else {
    store.pendingStructs = restStructs;
  }
  const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
  if (store.pendingDs) {
    const pendingDSUpdate = new UpdateDecoderV2(createDecoder(store.pendingDs));
    readVarUint(pendingDSUpdate.restDecoder);
    const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
    if (dsRest && dsRest2) {
      store.pendingDs = mergeUpdatesV2([dsRest, dsRest2]);
    } else {
      store.pendingDs = dsRest || dsRest2;
    }
  } else {
    store.pendingDs = dsRest;
  }
  if (retry) {
    const update = (
      /** @type {{update: Uint8Array}} */
      store.pendingStructs.update
    );
    store.pendingStructs = null;
    applyUpdateV2(transaction.doc, update);
  }
}, transactionOrigin, false);
var applyUpdateV2 = (ydoc, update, transactionOrigin, YDecoder = UpdateDecoderV2) => {
  const decoder = createDecoder(update);
  readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
};
var EventHandler = class {
  constructor() {
    this.l = [];
  }
};
var createEventHandler = () => new EventHandler();
var addEventHandlerListener = (eventHandler, f) => eventHandler.l.push(f);
var removeEventHandlerListener = (eventHandler, f) => {
  const l = eventHandler.l;
  const len = l.length;
  eventHandler.l = l.filter((g) => f !== g);
  if (len === eventHandler.l.length) {
    console.error("[yjs] Tried to remove event handler that doesn't exist.");
  }
};
var callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
var ID = class {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(client, clock) {
    this.client = client;
    this.clock = clock;
  }
};
var compareIDs = (a, b) => a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
var createID = (client, clock) => new ID(client, clock);
var findRootTypeKey = (type) => {
  for (const [key, value] of type.doc.share.entries()) {
    if (value === type) {
      return key;
    }
  }
  throw unexpectedCase();
};
var Snapshot = class {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(ds, sv) {
    this.ds = ds;
    this.sv = sv;
  }
};
var createSnapshot = (ds, sm) => new Snapshot(ds, sm);
var emptySnapshot = createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
var isVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
var splitSnapshotAffectedStructs = (transaction, snapshot) => {
  const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create);
  const store = transaction.doc.store;
  if (!meta.has(snapshot)) {
    snapshot.sv.forEach((clock, client) => {
      if (clock < getState(store, client)) {
        getItemCleanStart(transaction, createID(client, clock));
      }
    });
    iterateDeletedStructs(transaction, snapshot.ds, (_item) => {
    });
    meta.add(snapshot);
  }
};
var StructStore = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
    this.pendingStructs = null;
    this.pendingDs = null;
  }
};
var getStateVector = (store) => {
  const sm = /* @__PURE__ */ new Map();
  store.clients.forEach((structs, client) => {
    const struct = structs[structs.length - 1];
    sm.set(client, struct.id.clock + struct.length);
  });
  return sm;
};
var getState = (store, client) => {
  const structs = store.clients.get(client);
  if (structs === void 0) {
    return 0;
  }
  const lastStruct = structs[structs.length - 1];
  return lastStruct.id.clock + lastStruct.length;
};
var addStruct = (store, struct) => {
  let structs = store.clients.get(struct.id.client);
  if (structs === void 0) {
    structs = [];
    store.clients.set(struct.id.client, structs);
  } else {
    const lastStruct = structs[structs.length - 1];
    if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
      throw unexpectedCase();
    }
  }
  structs.push(struct);
};
var findIndexSS = (structs, clock) => {
  let left = 0;
  let right = structs.length - 1;
  let mid = structs[right];
  let midclock = mid.id.clock;
  if (midclock === clock) {
    return right;
  }
  let midindex = floor(clock / (midclock + mid.length - 1) * right);
  while (left <= right) {
    mid = structs[midindex];
    midclock = mid.id.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.length) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
    midindex = floor((left + right) / 2);
  }
  throw unexpectedCase();
};
var find = (store, id2) => {
  const structs = store.clients.get(id2.client);
  return structs[findIndexSS(structs, id2.clock)];
};
var getItem = (
  /** @type {function(StructStore,ID):Item} */
  find
);
var findIndexCleanStart = (transaction, structs, clock) => {
  const index = findIndexSS(structs, clock);
  const struct = structs[index];
  if (struct.id.clock < clock && struct instanceof Item) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
    return index + 1;
  }
  return index;
};
var getItemCleanStart = (transaction, id2) => {
  const structs = (
    /** @type {Array<Item>} */
    transaction.doc.store.clients.get(id2.client)
  );
  return structs[findIndexCleanStart(transaction, structs, id2.clock)];
};
var getItemCleanEnd = (transaction, store, id2) => {
  const structs = store.clients.get(id2.client);
  const index = findIndexSS(structs, id2.clock);
  const struct = structs[index];
  if (id2.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, id2.clock - struct.id.clock + 1));
  }
  return struct;
};
var replaceStruct = (store, struct, newStruct) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    store.clients.get(struct.id.client)
  );
  structs[findIndexSS(structs, struct.id.clock)] = newStruct;
};
var iterateStructs = (transaction, structs, clockStart, len, f) => {
  if (len === 0) {
    return;
  }
  const clockEnd = clockStart + len;
  let index = findIndexCleanStart(transaction, structs, clockStart);
  let struct;
  do {
    struct = structs[index++];
    if (clockEnd < struct.id.clock + struct.length) {
      findIndexCleanStart(transaction, structs, clockEnd);
    }
    f(struct);
  } while (index < structs.length && structs[index].id.clock < clockEnd);
};
var Transaction = class {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(doc2, origin, local) {
    this.doc = doc2;
    this.deleteSet = new DeleteSet();
    this.beforeState = getStateVector(doc2.store);
    this.afterState = /* @__PURE__ */ new Map();
    this.changed = /* @__PURE__ */ new Map();
    this.changedParentTypes = /* @__PURE__ */ new Map();
    this._mergeStructs = [];
    this.origin = origin;
    this.meta = /* @__PURE__ */ new Map();
    this.local = local;
    this.subdocsAdded = /* @__PURE__ */ new Set();
    this.subdocsRemoved = /* @__PURE__ */ new Set();
    this.subdocsLoaded = /* @__PURE__ */ new Set();
    this._needFormattingCleanup = false;
  }
};
var writeUpdateMessageFromTransaction = (encoder, transaction) => {
  if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) {
    return false;
  }
  sortAndMergeDeleteSet(transaction.deleteSet);
  writeStructsFromTransaction(encoder, transaction);
  writeDeleteSet(encoder, transaction.deleteSet);
  return true;
};
var addChangedTypeToTransaction = (transaction, type, parentSub) => {
  const item = type._item;
  if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
    setIfUndefined(transaction.changed, type, create).add(parentSub);
  }
};
var tryToMergeWithLefts = (structs, pos) => {
  let right = structs[pos];
  let left = structs[pos - 1];
  let i = pos;
  for (; i > 0; right = left, left = structs[--i - 1]) {
    if (left.deleted === right.deleted && left.constructor === right.constructor) {
      if (left.mergeWith(right)) {
        if (right instanceof Item && right.parentSub !== null && /** @type {AbstractType<any>} */
        right.parent._map.get(right.parentSub) === right) {
          right.parent._map.set(
            right.parentSub,
            /** @type {Item} */
            left
          );
        }
        continue;
      }
    }
    break;
  }
  const merged = pos - i;
  if (merged) {
    structs.splice(pos + 1 - merged, merged);
  }
  return merged;
};
var tryGcDeleteSet = (ds, store, gcFilter) => {
  for (const [client, deleteItems] of ds.clients.entries()) {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const endDeleteItemClock = deleteItem.clock + deleteItem.len;
      for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
        const struct2 = structs[si];
        if (deleteItem.clock + deleteItem.len <= struct2.id.clock) {
          break;
        }
        if (struct2 instanceof Item && struct2.deleted && !struct2.keep && gcFilter(struct2)) {
          struct2.gc(store, false);
        }
      }
    }
  }
};
var tryMergeDeleteSet = (ds, store) => {
  ds.clients.forEach((deleteItems, client) => {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
      for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si]) {
        si -= 1 + tryToMergeWithLefts(structs, si);
      }
    }
  });
};
var cleanupTransactions = (transactionCleanups, i) => {
  if (i < transactionCleanups.length) {
    const transaction = transactionCleanups[i];
    const doc2 = transaction.doc;
    const store = doc2.store;
    const ds = transaction.deleteSet;
    const mergeStructs = transaction._mergeStructs;
    try {
      sortAndMergeDeleteSet(ds);
      transaction.afterState = getStateVector(transaction.doc.store);
      doc2.emit("beforeObserverCalls", [transaction, doc2]);
      const fs = [];
      transaction.changed.forEach(
        (subs, itemtype) => fs.push(() => {
          if (itemtype._item === null || !itemtype._item.deleted) {
            itemtype._callObserver(transaction, subs);
          }
        })
      );
      fs.push(() => {
        transaction.changedParentTypes.forEach((events, type) => {
          if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
            events = events.filter(
              (event) => event.target._item === null || !event.target._item.deleted
            );
            events.forEach((event) => {
              event.currentTarget = type;
              event._path = null;
            });
            events.sort((event1, event2) => event1.path.length - event2.path.length);
            callEventHandlerListeners(type._dEH, events, transaction);
          }
        });
      });
      fs.push(() => doc2.emit("afterTransaction", [transaction, doc2]));
      callAll(fs, []);
      if (transaction._needFormattingCleanup) {
        cleanupYTextAfterTransaction(transaction);
      }
    } finally {
      if (doc2.gc) {
        tryGcDeleteSet(ds, store, doc2.gcFilter);
      }
      tryMergeDeleteSet(ds, store);
      transaction.afterState.forEach((clock, client) => {
        const beforeClock = transaction.beforeState.get(client) || 0;
        if (beforeClock !== clock) {
          const structs = (
            /** @type {Array<GC|Item>} */
            store.clients.get(client)
          );
          const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
          for (let i2 = structs.length - 1; i2 >= firstChangePos; ) {
            i2 -= 1 + tryToMergeWithLefts(structs, i2);
          }
        }
      });
      for (let i2 = mergeStructs.length - 1; i2 >= 0; i2--) {
        const { client, clock } = mergeStructs[i2].id;
        const structs = (
          /** @type {Array<GC|Item>} */
          store.clients.get(client)
        );
        const replacedStructPos = findIndexSS(structs, clock);
        if (replacedStructPos + 1 < structs.length) {
          if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) {
            continue;
          }
        }
        if (replacedStructPos > 0) {
          tryToMergeWithLefts(structs, replacedStructPos);
        }
      }
      if (!transaction.local && transaction.afterState.get(doc2.clientID) !== transaction.beforeState.get(doc2.clientID)) {
        print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
        doc2.clientID = generateNewClientId();
      }
      doc2.emit("afterTransactionCleanup", [transaction, doc2]);
      if (doc2._observers.has("update")) {
        const encoder = new UpdateEncoderV1();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("update", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      if (doc2._observers.has("updateV2")) {
        const encoder = new UpdateEncoderV2();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("updateV2", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
      if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
        subdocsAdded.forEach((subdoc) => {
          subdoc.clientID = doc2.clientID;
          if (subdoc.collectionid == null) {
            subdoc.collectionid = doc2.collectionid;
          }
          doc2.subdocs.add(subdoc);
        });
        subdocsRemoved.forEach((subdoc) => doc2.subdocs.delete(subdoc));
        doc2.emit("subdocs", [{ loaded: subdocsLoaded, added: subdocsAdded, removed: subdocsRemoved }, doc2, transaction]);
        subdocsRemoved.forEach((subdoc) => subdoc.destroy());
      }
      if (transactionCleanups.length <= i + 1) {
        doc2._transactionCleanups = [];
        doc2.emit("afterAllTransactions", [doc2, transactionCleanups]);
      } else {
        cleanupTransactions(transactionCleanups, i + 1);
      }
    }
  }
};
var transact = (doc2, f, origin = null, local = true) => {
  const transactionCleanups = doc2._transactionCleanups;
  let initialCall = false;
  let result = null;
  if (doc2._transaction === null) {
    initialCall = true;
    doc2._transaction = new Transaction(doc2, origin, local);
    transactionCleanups.push(doc2._transaction);
    if (transactionCleanups.length === 1) {
      doc2.emit("beforeAllTransactions", [doc2]);
    }
    doc2.emit("beforeTransaction", [doc2._transaction, doc2]);
  }
  try {
    result = f(doc2._transaction);
  } finally {
    if (initialCall) {
      const finishCleanup = doc2._transaction === transactionCleanups[0];
      doc2._transaction = null;
      if (finishCleanup) {
        cleanupTransactions(transactionCleanups, 0);
      }
    }
  }
  return result;
};
function* lazyStructReaderGenerator(decoder) {
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      if (info === 10) {
        const len = readVarUint(decoder.restDecoder);
        yield new Skip(createID(client, clock), len);
        clock += len;
      } else if ((BITS5 & info) !== 0) {
        const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
        const struct = new Item(
          createID(client, clock),
          null,
          // left
          (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
          // origin
          null,
          // right
          (info & BIT7) === BIT7 ? decoder.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null,
          // parent
          cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
          // parentSub
          readItemContent(decoder, info)
          // item content
        );
        yield struct;
        clock += struct.length;
      } else {
        const len = decoder.readLen();
        yield new GC(createID(client, clock), len);
        clock += len;
      }
    }
  }
}
var LazyStructReader = class {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(decoder, filterSkips) {
    this.gen = lazyStructReaderGenerator(decoder);
    this.curr = null;
    this.done = false;
    this.filterSkips = filterSkips;
    this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do {
      this.curr = this.gen.next().value || null;
    } while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
    return this.curr;
  }
};
var LazyStructWriter = class {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(encoder) {
    this.currClient = 0;
    this.startClock = 0;
    this.written = 0;
    this.encoder = encoder;
    this.clientStructs = [];
  }
};
var encodeStateVectorFromUpdateV2 = (update, YEncoder = DSEncoderV2, YDecoder = UpdateDecoderV2) => {
  const encoder = new YEncoder();
  const updateDecoder = new LazyStructReader(new YDecoder(createDecoder(update)), false);
  let curr = updateDecoder.curr;
  if (curr !== null) {
    let size2 = 0;
    let currClient = curr.id.client;
    let stopCounting = curr.id.clock !== 0;
    let currClock = stopCounting ? 0 : curr.id.clock + curr.length;
    for (; curr !== null; curr = updateDecoder.next()) {
      if (currClient !== curr.id.client) {
        if (currClock !== 0) {
          size2++;
          writeVarUint(encoder.restEncoder, currClient);
          writeVarUint(encoder.restEncoder, currClock);
        }
        currClient = curr.id.client;
        currClock = 0;
        stopCounting = curr.id.clock !== 0;
      }
      if (curr.constructor === Skip) {
        stopCounting = true;
      }
      if (!stopCounting) {
        currClock = curr.id.clock + curr.length;
      }
    }
    if (currClock !== 0) {
      size2++;
      writeVarUint(encoder.restEncoder, currClient);
      writeVarUint(encoder.restEncoder, currClock);
    }
    const enc = createEncoder();
    writeVarUint(enc, size2);
    writeBinaryEncoder(enc, encoder.restEncoder);
    encoder.restEncoder = enc;
    return encoder.toUint8Array();
  } else {
    writeVarUint(encoder.restEncoder, 0);
    return encoder.toUint8Array();
  }
};
var sliceStruct = (left, diff) => {
  if (left.constructor === GC) {
    const { client, clock } = left.id;
    return new GC(createID(client, clock + diff), left.length - diff);
  } else if (left.constructor === Skip) {
    const { client, clock } = left.id;
    return new Skip(createID(client, clock + diff), left.length - diff);
  } else {
    const leftItem = (
      /** @type {Item} */
      left
    );
    const { client, clock } = leftItem.id;
    return new Item(
      createID(client, clock + diff),
      null,
      createID(client, clock + diff - 1),
      null,
      leftItem.rightOrigin,
      leftItem.parent,
      leftItem.parentSub,
      leftItem.content.splice(diff)
    );
  }
};
var mergeUpdatesV2 = (updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  if (updates.length === 1) {
    return updates[0];
  }
  const updateDecoders = updates.map((update) => new YDecoder(createDecoder(update)));
  let lazyStructDecoders = updateDecoders.map((decoder) => new LazyStructReader(decoder, true));
  let currWrite = null;
  const updateEncoder = new YEncoder();
  const lazyStructEncoder = new LazyStructWriter(updateEncoder);
  while (true) {
    lazyStructDecoders = lazyStructDecoders.filter((dec) => dec.curr !== null);
    lazyStructDecoders.sort(
      /** @type {function(any,any):number} */
      (dec1, dec2) => {
        if (dec1.curr.id.client === dec2.curr.id.client) {
          const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
          if (clockDiff === 0) {
            return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1;
          } else {
            return clockDiff;
          }
        } else {
          return dec2.curr.id.client - dec1.curr.id.client;
        }
      }
    );
    if (lazyStructDecoders.length === 0) {
      break;
    }
    const currDecoder = lazyStructDecoders[0];
    const firstClient = (
      /** @type {Item | GC} */
      currDecoder.curr.id.client
    );
    if (currWrite !== null) {
      let curr = (
        /** @type {Item | GC | null} */
        currDecoder.curr
      );
      let iterated = false;
      while (curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client) {
        curr = currDecoder.next();
        iterated = true;
      }
      if (curr === null || // current decoder is empty
      curr.id.client !== firstClient || // check whether there is another decoder that has has updates from `firstClient`
      iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length) {
        continue;
      }
      if (firstClient !== currWrite.struct.id.client) {
        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
        currWrite = { struct: curr, offset: 0 };
        currDecoder.next();
      } else {
        if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
          if (currWrite.struct.constructor === Skip) {
            currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
          } else {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
            const struct = new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff);
            currWrite = { struct, offset: 0 };
          }
        } else {
          const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
          if (diff > 0) {
            if (currWrite.struct.constructor === Skip) {
              currWrite.struct.length -= diff;
            } else {
              curr = sliceStruct(curr, diff);
            }
          }
          if (!currWrite.struct.mergeWith(
            /** @type {any} */
            curr
          )) {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            currWrite = { struct: curr, offset: 0 };
            currDecoder.next();
          }
        }
      }
    } else {
      currWrite = { struct: (
        /** @type {Item | GC} */
        currDecoder.curr
      ), offset: 0 };
      currDecoder.next();
    }
    for (let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()) {
      writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
      currWrite = { struct: next, offset: 0 };
    }
  }
  if (currWrite !== null) {
    writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
    currWrite = null;
  }
  finishLazyStructWriting(lazyStructEncoder);
  const dss = updateDecoders.map((decoder) => readDeleteSet(decoder));
  const ds = mergeDeleteSets(dss);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
var flushLazyStructWriter = (lazyWriter) => {
  if (lazyWriter.written > 0) {
    lazyWriter.clientStructs.push({ written: lazyWriter.written, restEncoder: toUint8Array(lazyWriter.encoder.restEncoder) });
    lazyWriter.encoder.restEncoder = createEncoder();
    lazyWriter.written = 0;
  }
};
var writeStructToLazyStructWriter = (lazyWriter, struct, offset) => {
  if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) {
    flushLazyStructWriter(lazyWriter);
  }
  if (lazyWriter.written === 0) {
    lazyWriter.currClient = struct.id.client;
    lazyWriter.encoder.writeClient(struct.id.client);
    writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
  }
  struct.write(lazyWriter.encoder, offset);
  lazyWriter.written++;
};
var finishLazyStructWriting = (lazyWriter) => {
  flushLazyStructWriter(lazyWriter);
  const restEncoder = lazyWriter.encoder.restEncoder;
  writeVarUint(restEncoder, lazyWriter.clientStructs.length);
  for (let i = 0; i < lazyWriter.clientStructs.length; i++) {
    const partStructs = lazyWriter.clientStructs[i];
    writeVarUint(restEncoder, partStructs.written);
    writeUint8Array(restEncoder, partStructs.restEncoder);
  }
};
var errorComputeChanges = "You must not compute changes after the event-handler fired.";
var YEvent = class {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(target, transaction) {
    this.target = target;
    this.currentTarget = target;
    this.transaction = transaction;
    this._changes = null;
    this._keys = null;
    this._delta = null;
    this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = getPathTo(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(struct) {
    return isDeleted(this.transaction.deleteSet, struct.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create2(errorComputeChanges);
      }
      const keys2 = /* @__PURE__ */ new Map();
      const target = this.target;
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      changed.forEach((key) => {
        if (key !== null) {
          const item = (
            /** @type {Item} */
            target._map.get(key)
          );
          let action;
          let oldValue;
          if (this.adds(item)) {
            let prev = item.left;
            while (prev !== null && this.adds(prev)) {
              prev = prev.left;
            }
            if (this.deletes(item)) {
              if (prev !== null && this.deletes(prev)) {
                action = "delete";
                oldValue = last(prev.content.getContent());
              } else {
                return;
              }
            } else {
              if (prev !== null && this.deletes(prev)) {
                action = "update";
                oldValue = last(prev.content.getContent());
              } else {
                action = "add";
                oldValue = void 0;
              }
            }
          } else {
            if (this.deletes(item)) {
              action = "delete";
              oldValue = last(
                /** @type {Item} */
                item.content.getContent()
              );
            } else {
              return;
            }
          }
          keys2.set(key, { action, oldValue });
        }
      });
      this._keys = keys2;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(struct) {
    return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let changes = this._changes;
    if (changes === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create2(errorComputeChanges);
      }
      const target = this.target;
      const added = create();
      const deleted = create();
      const delta = [];
      changes = {
        added,
        deleted,
        delta,
        keys: this.keys
      };
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      if (changed.has(null)) {
        let lastOp = null;
        const packOp = () => {
          if (lastOp) {
            delta.push(lastOp);
          }
        };
        for (let item = target._start; item !== null; item = item.right) {
          if (item.deleted) {
            if (this.deletes(item) && !this.adds(item)) {
              if (lastOp === null || lastOp.delete === void 0) {
                packOp();
                lastOp = { delete: 0 };
              }
              lastOp.delete += item.length;
              deleted.add(item);
            }
          } else {
            if (this.adds(item)) {
              if (lastOp === null || lastOp.insert === void 0) {
                packOp();
                lastOp = { insert: [] };
              }
              lastOp.insert = lastOp.insert.concat(item.content.getContent());
              added.add(item);
            } else {
              if (lastOp === null || lastOp.retain === void 0) {
                packOp();
                lastOp = { retain: 0 };
              }
              lastOp.retain += item.length;
            }
          }
        }
        if (lastOp !== null && lastOp.retain === void 0) {
          packOp();
        }
      }
      this._changes = changes;
    }
    return (
      /** @type {any} */
      changes
    );
  }
};
var getPathTo = (parent, child) => {
  const path = [];
  while (child._item !== null && child !== parent) {
    if (child._item.parentSub !== null) {
      path.unshift(child._item.parentSub);
    } else {
      let i = 0;
      let c = (
        /** @type {AbstractType<any>} */
        child._item.parent._start
      );
      while (c !== child._item && c !== null) {
        if (!c.deleted && c.countable) {
          i += c.length;
        }
        c = c.right;
      }
      path.unshift(i);
    }
    child = /** @type {AbstractType<any>} */
    child._item.parent;
  }
  return path;
};
var warnPrematureAccess = () => {
  warn("Invalid access: Add Yjs type to a document before reading data.");
};
var maxSearchMarker = 80;
var globalSearchMarkerTimestamp = 0;
var ArraySearchMarker = class {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(p, index) {
    p.marker = true;
    this.p = p;
    this.index = index;
    this.timestamp = globalSearchMarkerTimestamp++;
  }
};
var refreshMarkerTimestamp = (marker) => {
  marker.timestamp = globalSearchMarkerTimestamp++;
};
var overwriteMarker = (marker, p, index) => {
  marker.p.marker = false;
  marker.p = p;
  p.marker = true;
  marker.index = index;
  marker.timestamp = globalSearchMarkerTimestamp++;
};
var markPosition = (searchMarker, p, index) => {
  if (searchMarker.length >= maxSearchMarker) {
    const marker = searchMarker.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
    overwriteMarker(marker, p, index);
    return marker;
  } else {
    const pm = new ArraySearchMarker(p, index);
    searchMarker.push(pm);
    return pm;
  }
};
var findMarker = (yarray, index) => {
  if (yarray._start === null || index === 0 || yarray._searchMarker === null) {
    return null;
  }
  const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b) => abs(index - a.index) < abs(index - b.index) ? a : b);
  let p = yarray._start;
  let pindex = 0;
  if (marker !== null) {
    p = marker.p;
    pindex = marker.index;
    refreshMarkerTimestamp(marker);
  }
  while (p.right !== null && pindex < index) {
    if (!p.deleted && p.countable) {
      if (index < pindex + p.length) {
        break;
      }
      pindex += p.length;
    }
    p = p.right;
  }
  while (p.left !== null && pindex > index) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  while (p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  if (marker !== null && abs(marker.index - pindex) < /** @type {YText|YArray<any>} */
  p.parent.length / maxSearchMarker) {
    overwriteMarker(marker, p, pindex);
    return marker;
  } else {
    return markPosition(yarray._searchMarker, p, pindex);
  }
};
var updateMarkerChanges = (searchMarker, index, len) => {
  for (let i = searchMarker.length - 1; i >= 0; i--) {
    const m = searchMarker[i];
    if (len > 0) {
      let p = m.p;
      p.marker = false;
      while (p && (p.deleted || !p.countable)) {
        p = p.left;
        if (p && !p.deleted && p.countable) {
          m.index -= p.length;
        }
      }
      if (p === null || p.marker === true) {
        searchMarker.splice(i, 1);
        continue;
      }
      m.p = p;
      p.marker = true;
    }
    if (index < m.index || len > 0 && index === m.index) {
      m.index = max(index, m.index + len);
    }
  }
};
var callTypeObservers = (type, transaction, event) => {
  const changedType = type;
  const changedParentTypes = transaction.changedParentTypes;
  while (true) {
    setIfUndefined(changedParentTypes, type, () => []).push(event);
    if (type._item === null) {
      break;
    }
    type = /** @type {AbstractType<any>} */
    type._item.parent;
  }
  callEventHandlerListeners(changedType._eH, event, transaction);
};
var AbstractType = class {
  constructor() {
    this._item = null;
    this._map = /* @__PURE__ */ new Map();
    this._start = null;
    this.doc = null;
    this._length = 0;
    this._eH = createEventHandler();
    this._dEH = createEventHandler();
    this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(y, item) {
    this.doc = y;
    this._item = item;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw methodUnimplemented();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw methodUnimplemented();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(_encoder) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let n = this._start;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, _parentSubs) {
    if (!transaction.local && this._searchMarker) {
      this._searchMarker.length = 0;
    }
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(f) {
    addEventHandlerListener(this._eH, f);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(f) {
    addEventHandlerListener(this._dEH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(f) {
    removeEventHandlerListener(this._eH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(f) {
    removeEventHandlerListener(this._dEH, f);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
};
var typeListSlice = (type, start, end) => {
  type.doc ?? warnPrematureAccess();
  if (start < 0) {
    start = type._length + start;
  }
  if (end < 0) {
    end = type._length + end;
  }
  let len = end - start;
  const cs = [];
  let n = type._start;
  while (n !== null && len > 0) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      if (c.length <= start) {
        start -= c.length;
      } else {
        for (let i = start; i < c.length && len > 0; i++) {
          cs.push(c[i]);
          len--;
        }
        start = 0;
      }
    }
    n = n.right;
  }
  return cs;
};
var typeListToArray = (type) => {
  type.doc ?? warnPrematureAccess();
  const cs = [];
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        cs.push(c[i]);
      }
    }
    n = n.right;
  }
  return cs;
};
var typeListForEach = (type, f) => {
  let index = 0;
  let n = type._start;
  type.doc ?? warnPrematureAccess();
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        f(c[i], index++, type);
      }
    }
    n = n.right;
  }
};
var typeListMap = (type, f) => {
  const result = [];
  typeListForEach(type, (c, i) => {
    result.push(f(c, i, type));
  });
  return result;
};
var typeListCreateIterator = (type) => {
  let n = type._start;
  let currentContent = null;
  let currentContentIndex = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (currentContent === null) {
        while (n !== null && n.deleted) {
          n = n.right;
        }
        if (n === null) {
          return {
            done: true,
            value: void 0
          };
        }
        currentContent = n.content.getContent();
        currentContentIndex = 0;
        n = n.right;
      }
      const value = currentContent[currentContentIndex++];
      if (currentContent.length <= currentContentIndex) {
        currentContent = null;
      }
      return {
        done: false,
        value
      };
    }
  };
};
var typeListGet = (type, index) => {
  type.doc ?? warnPrematureAccess();
  const marker = findMarker(type, index);
  let n = type._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        return n.content.getContent()[index];
      }
      index -= n.length;
    }
  }
};
var typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
  let left = referenceItem;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const store = doc2.store;
  const right = referenceItem === null ? parent._start : referenceItem.right;
  let jsonContent = [];
  const packJsonContent = () => {
    if (jsonContent.length > 0) {
      left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
      left.integrate(transaction, 0);
      jsonContent = [];
    }
  };
  content.forEach((c) => {
    if (c === null) {
      jsonContent.push(c);
    } else {
      switch (c.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          jsonContent.push(c);
          break;
        default:
          packJsonContent();
          switch (c.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(
                /** @type {Uint8Array} */
                c
              )));
              left.integrate(transaction, 0);
              break;
            case Doc:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(
                /** @type {Doc} */
                c
              ));
              left.integrate(transaction, 0);
              break;
            default:
              if (c instanceof AbstractType) {
                left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
                left.integrate(transaction, 0);
              } else {
                throw new Error("Unexpected content type in insert operation");
              }
          }
      }
    }
  });
  packJsonContent();
};
var lengthExceeded = () => create2("Length exceeded!");
var typeListInsertGenerics = (transaction, parent, index, content) => {
  if (index > parent._length) {
    throw lengthExceeded();
  }
  if (index === 0) {
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, index, content.length);
    }
    return typeListInsertGenericsAfter(transaction, parent, null, content);
  }
  const startIndex = index;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
    if (index === 0) {
      n = n.prev;
      index += n && n.countable && !n.deleted ? n.length : 0;
    }
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index <= n.length) {
        if (index < n.length) {
          getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
        }
        break;
      }
      index -= n.length;
    }
  }
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, startIndex, content.length);
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
var typeListPushGenerics = (transaction, parent, content) => {
  const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, { index: 0, p: parent._start });
  let n = marker.p;
  if (n) {
    while (n.right) {
      n = n.right;
    }
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
var typeListDelete = (transaction, parent, index, length3) => {
  if (length3 === 0) {
    return;
  }
  const startIndex = index;
  const startLength = length3;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null && index > 0; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
      }
      index -= n.length;
    }
  }
  while (length3 > 0 && n !== null) {
    if (!n.deleted) {
      if (length3 < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length3));
      }
      n.delete(transaction);
      length3 -= n.length;
    }
    n = n.right;
  }
  if (length3 > 0) {
    throw lengthExceeded();
  }
  if (parent._searchMarker) {
    updateMarkerChanges(
      parent._searchMarker,
      startIndex,
      -startLength + length3
      /* in case we remove the above exception */
    );
  }
};
var typeMapDelete = (transaction, parent, key) => {
  const c = parent._map.get(key);
  if (c !== void 0) {
    c.delete(transaction);
  }
};
var typeMapSet = (transaction, parent, key, value) => {
  const left = parent._map.get(key) || null;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  let content;
  if (value == null) {
    content = new ContentAny([value]);
  } else {
    switch (value.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        content = new ContentAny([value]);
        break;
      case Uint8Array:
        content = new ContentBinary(
          /** @type {Uint8Array} */
          value
        );
        break;
      case Doc:
        content = new ContentDoc(
          /** @type {Doc} */
          value
        );
        break;
      default:
        if (value instanceof AbstractType) {
          content = new ContentType(value);
        } else {
          throw new Error("Unexpected content type");
        }
    }
  }
  new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
};
var typeMapGet = (parent, key) => {
  parent.doc ?? warnPrematureAccess();
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
};
var typeMapGetAll = (parent) => {
  const res = {};
  parent.doc ?? warnPrematureAccess();
  parent._map.forEach((value, key) => {
    if (!value.deleted) {
      res[key] = value.content.getContent()[value.length - 1];
    }
  });
  return res;
};
var typeMapHas = (parent, key) => {
  parent.doc ?? warnPrematureAccess();
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted;
};
var typeMapGetAllSnapshot = (parent, snapshot) => {
  const res = {};
  parent._map.forEach((value, key) => {
    let v = value;
    while (v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0))) {
      v = v.left;
    }
    if (v !== null && isVisible(v, snapshot)) {
      res[key] = v.content.getContent()[v.length - 1];
    }
  });
  return res;
};
var createMapIterator = (type) => {
  type.doc ?? warnPrematureAccess();
  return iteratorFilter(
    type._map.entries(),
    /** @param {any} entry */
    (entry) => !entry[1].deleted
  );
};
var YArrayEvent = class extends YEvent {
};
var YArray = class _YArray extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
    this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(items) {
    const a = new _YArray();
    a.push(items);
    return a;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new _YArray();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const arr = new _YArray();
    arr.insert(0, this.toArray().map(
      (el) => el instanceof AbstractType ? (
        /** @type {typeof el} */
        el.clone()
      ) : el
    ));
    return arr;
  }
  get length() {
    this.doc ?? warnPrematureAccess();
    return this._length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(
          transaction,
          this,
          index,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListPushGenerics(
          transaction,
          this,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.push(...content);
    }
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(index, length3 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length3);
      });
    } else {
      this._prelimContent.splice(index, length3);
    }
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((c) => c instanceof AbstractType ? c.toJSON() : c);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(f) {
    return typeListMap(
      this,
      /** @type {any} */
      f
    );
  }
  /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return typeListCreateIterator(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YArrayRefID);
  }
};
var readYArray = (_decoder) => new YArray();
var YMapEvent = class extends YEvent {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(ymap, transaction, subs) {
    super(ymap, transaction);
    this.keysChanged = subs;
  }
};
var YMap = class _YMap extends AbstractType {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(entries) {
    super();
    this._prelimContent = null;
    if (entries === void 0) {
      this._prelimContent = /* @__PURE__ */ new Map();
    } else {
      this._prelimContent = new Map(entries);
    }
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this._prelimContent.forEach((value, key) => {
      this.set(key, value);
    });
    this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new _YMap();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const map3 = new _YMap();
    this.forEach((value, key) => {
      map3.set(key, value instanceof AbstractType ? (
        /** @type {typeof value} */
        value.clone()
      ) : value);
    });
    return map3;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    this.doc ?? warnPrematureAccess();
    const map3 = {};
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        const v = item.content.getContent()[item.length - 1];
        map3[key] = v instanceof AbstractType ? v.toJSON() : v;
      }
    });
    return map3;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...createMapIterator(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return iteratorMap(
      createMapIterator(this),
      /** @param {any} v */
      (v) => v[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return iteratorMap(
      createMapIterator(this),
      /** @param {any} v */
      (v) => v[1].content.getContent()[v[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return iteratorMap(
      createMapIterator(this),
      /** @param {any} v */
      (v) => (
        /** @type {any} */
        [v[0], v[1].content.getContent()[v[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    this.doc ?? warnPrematureAccess();
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        f(item.content.getContent()[item.length - 1], key, this);
      }
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(key) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, key);
      });
    } else {
      this._prelimContent.delete(key);
    }
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(key, value) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(
          transaction,
          this,
          key,
          /** @type {any} */
          value
        );
      });
    } else {
      this._prelimContent.set(key, value);
    }
    return value;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(key) {
    return (
      /** @type {any} */
      typeMapGet(this, key)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(key) {
    return typeMapHas(this, key);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        this.forEach(function(_value, key, map3) {
          typeMapDelete(transaction, map3, key);
        });
      });
    } else {
      this._prelimContent.clear();
    }
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YMapRefID);
  }
};
var readYMap = (_decoder) => new YMap();
var equalAttrs = (a, b) => a === b || typeof a === "object" && typeof b === "object" && a && b && equalFlat(a, b);
var ItemTextListPosition = class {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(left, right, index, currentAttributes) {
    this.left = left;
    this.right = right;
    this.index = index;
    this.currentAttributes = currentAttributes;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    if (this.right === null) {
      unexpectedCase();
    }
    switch (this.right.content.constructor) {
      case ContentFormat:
        if (!this.right.deleted) {
          updateCurrentAttributes(
            this.currentAttributes,
            /** @type {ContentFormat} */
            this.right.content
          );
        }
        break;
      default:
        if (!this.right.deleted) {
          this.index += this.right.length;
        }
        break;
    }
    this.left = this.right;
    this.right = this.right.right;
  }
};
var findNextPosition = (transaction, pos, count) => {
  while (pos.right !== null && count > 0) {
    switch (pos.right.content.constructor) {
      case ContentFormat:
        if (!pos.right.deleted) {
          updateCurrentAttributes(
            pos.currentAttributes,
            /** @type {ContentFormat} */
            pos.right.content
          );
        }
        break;
      default:
        if (!pos.right.deleted) {
          if (count < pos.right.length) {
            getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
          }
          pos.index += pos.right.length;
          count -= pos.right.length;
        }
        break;
    }
    pos.left = pos.right;
    pos.right = pos.right.right;
  }
  return pos;
};
var findPosition = (transaction, parent, index, useSearchMarker) => {
  const currentAttributes = /* @__PURE__ */ new Map();
  const marker = useSearchMarker ? findMarker(parent, index) : null;
  if (marker) {
    const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
    return findNextPosition(transaction, pos, index - marker.index);
  } else {
    const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
    return findNextPosition(transaction, pos, index);
  }
};
var insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
  while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(
    negatedAttributes.get(
      /** @type {ContentFormat} */
      currPos.right.content.key
    ),
    /** @type {ContentFormat} */
    currPos.right.content.value
  ))) {
    if (!currPos.right.deleted) {
      negatedAttributes.delete(
        /** @type {ContentFormat} */
        currPos.right.content.key
      );
    }
    currPos.forward();
  }
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  negatedAttributes.forEach((val, key) => {
    const left = currPos.left;
    const right = currPos.right;
    const nextFormat = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
    nextFormat.integrate(transaction, 0);
    currPos.right = nextFormat;
    currPos.forward();
  });
};
var updateCurrentAttributes = (currentAttributes, format) => {
  const { key, value } = format;
  if (value === null) {
    currentAttributes.delete(key);
  } else {
    currentAttributes.set(key, value);
  }
};
var minimizeAttributeChanges = (currPos, attributes) => {
  while (true) {
    if (currPos.right === null) {
      break;
    } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(
      attributes[
        /** @type {ContentFormat} */
        currPos.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      currPos.right.content.value
    )) ;
    else {
      break;
    }
    currPos.forward();
  }
};
var insertAttributes = (transaction, parent, currPos, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const negatedAttributes = /* @__PURE__ */ new Map();
  for (const key in attributes) {
    const val = attributes[key];
    const currentVal = currPos.currentAttributes.get(key) ?? null;
    if (!equalAttrs(currentVal, val)) {
      negatedAttributes.set(key, currentVal);
      const { left, right } = currPos;
      currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
      currPos.right.integrate(transaction, 0);
      currPos.forward();
    }
  }
  return negatedAttributes;
};
var insertText = (transaction, parent, currPos, text2, attributes) => {
  currPos.currentAttributes.forEach((_val, key) => {
    if (attributes[key] === void 0) {
      attributes[key] = null;
    }
  });
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  const content = text2.constructor === String ? new ContentString(
    /** @type {string} */
    text2
  ) : text2 instanceof AbstractType ? new ContentType(text2) : new ContentEmbed(text2);
  let { left, right, index } = currPos;
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
  }
  right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
  right.integrate(transaction, 0);
  currPos.right = right;
  currPos.index = index;
  currPos.forward();
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
var formatText = (transaction, parent, currPos, length3, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  iterationLoop: while (currPos.right !== null && (length3 > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
    if (!currPos.right.deleted) {
      switch (currPos.right.content.constructor) {
        case ContentFormat: {
          const { key, value } = (
            /** @type {ContentFormat} */
            currPos.right.content
          );
          const attr = attributes[key];
          if (attr !== void 0) {
            if (equalAttrs(attr, value)) {
              negatedAttributes.delete(key);
            } else {
              if (length3 === 0) {
                break iterationLoop;
              }
              negatedAttributes.set(key, value);
            }
            currPos.right.delete(transaction);
          } else {
            currPos.currentAttributes.set(key, value);
          }
          break;
        }
        default:
          if (length3 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
          }
          length3 -= currPos.right.length;
          break;
      }
    }
    currPos.forward();
  }
  if (length3 > 0) {
    let newlines = "";
    for (; length3 > 0; length3--) {
      newlines += "\n";
    }
    currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
    currPos.right.integrate(transaction, 0);
    currPos.forward();
  }
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
var cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
  let end = start;
  const endFormats = create3();
  while (end && (!end.countable || end.deleted)) {
    if (!end.deleted && end.content.constructor === ContentFormat) {
      const cf = (
        /** @type {ContentFormat} */
        end.content
      );
      endFormats.set(cf.key, cf);
    }
    end = end.right;
  }
  let cleanups = 0;
  let reachedCurr = false;
  while (start !== end) {
    if (curr === start) {
      reachedCurr = true;
    }
    if (!start.deleted) {
      const content = start.content;
      switch (content.constructor) {
        case ContentFormat: {
          const { key, value } = (
            /** @type {ContentFormat} */
            content
          );
          const startAttrValue = startAttributes.get(key) ?? null;
          if (endFormats.get(key) !== content || startAttrValue === value) {
            start.delete(transaction);
            cleanups++;
            if (!reachedCurr && (currAttributes.get(key) ?? null) === value && startAttrValue !== value) {
              if (startAttrValue === null) {
                currAttributes.delete(key);
              } else {
                currAttributes.set(key, startAttrValue);
              }
            }
          }
          if (!reachedCurr && !start.deleted) {
            updateCurrentAttributes(
              currAttributes,
              /** @type {ContentFormat} */
              content
            );
          }
          break;
        }
      }
    }
    start = /** @type {Item} */
    start.right;
  }
  return cleanups;
};
var cleanupContextlessFormattingGap = (transaction, item) => {
  while (item && item.right && (item.right.deleted || !item.right.countable)) {
    item = item.right;
  }
  const attrs = /* @__PURE__ */ new Set();
  while (item && (item.deleted || !item.countable)) {
    if (!item.deleted && item.content.constructor === ContentFormat) {
      const key = (
        /** @type {ContentFormat} */
        item.content.key
      );
      if (attrs.has(key)) {
        item.delete(transaction);
      } else {
        attrs.add(key);
      }
    }
    item = item.left;
  }
};
var cleanupYTextFormatting = (type) => {
  let res = 0;
  transact(
    /** @type {Doc} */
    type.doc,
    (transaction) => {
      let start = (
        /** @type {Item} */
        type._start
      );
      let end = type._start;
      let startAttributes = create3();
      const currentAttributes = copy(startAttributes);
      while (end) {
        if (end.deleted === false) {
          switch (end.content.constructor) {
            case ContentFormat:
              updateCurrentAttributes(
                currentAttributes,
                /** @type {ContentFormat} */
                end.content
              );
              break;
            default:
              res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
              startAttributes = copy(currentAttributes);
              start = end;
              break;
          }
        }
        end = end.right;
      }
    }
  );
  return res;
};
var cleanupYTextAfterTransaction = (transaction) => {
  const needFullCleanup = /* @__PURE__ */ new Set();
  const doc2 = transaction.doc;
  for (const [client, afterClock] of transaction.afterState.entries()) {
    const clock = transaction.beforeState.get(client) || 0;
    if (afterClock === clock) {
      continue;
    }
    iterateStructs(
      transaction,
      /** @type {Array<Item|GC>} */
      doc2.store.clients.get(client),
      clock,
      afterClock,
      (item) => {
        if (!item.deleted && /** @type {Item} */
        item.content.constructor === ContentFormat && item.constructor !== GC) {
          needFullCleanup.add(
            /** @type {any} */
            item.parent
          );
        }
      }
    );
  }
  transact(doc2, (t) => {
    iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
      if (item instanceof GC || !/** @type {YText} */
      item.parent._hasFormatting || needFullCleanup.has(
        /** @type {YText} */
        item.parent
      )) {
        return;
      }
      const parent = (
        /** @type {YText} */
        item.parent
      );
      if (item.content.constructor === ContentFormat) {
        needFullCleanup.add(parent);
      } else {
        cleanupContextlessFormattingGap(t, item);
      }
    });
    for (const yText of needFullCleanup) {
      cleanupYTextFormatting(yText);
    }
  });
};
var deleteText = (transaction, currPos, length3) => {
  const startLength = length3;
  const startAttrs = copy(currPos.currentAttributes);
  const start = currPos.right;
  while (length3 > 0 && currPos.right !== null) {
    if (currPos.right.deleted === false) {
      switch (currPos.right.content.constructor) {
        case ContentType:
        case ContentEmbed:
        case ContentString:
          if (length3 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
          }
          length3 -= currPos.right.length;
          currPos.right.delete(transaction);
          break;
      }
    }
    currPos.forward();
  }
  if (start) {
    cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
  }
  const parent = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (currPos.left || currPos.right).parent
  );
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length3);
  }
  return currPos;
};
var YTextEvent = class extends YEvent {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(ytext, transaction, subs) {
    super(ytext, transaction);
    this.childListChanged = false;
    this.keysChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.keysChanged.add(sub);
      }
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const changes = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = changes;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const y = (
        /** @type {Doc} */
        this.target.doc
      );
      const delta = [];
      transact(y, (transaction) => {
        const currentAttributes = /* @__PURE__ */ new Map();
        const oldAttributes = /* @__PURE__ */ new Map();
        let item = this.target._start;
        let action = null;
        const attributes = {};
        let insert = "";
        let retain = 0;
        let deleteLen = 0;
        const addOp = () => {
          if (action !== null) {
            let op = null;
            switch (action) {
              case "delete":
                if (deleteLen > 0) {
                  op = { delete: deleteLen };
                }
                deleteLen = 0;
                break;
              case "insert":
                if (typeof insert === "object" || insert.length > 0) {
                  op = { insert };
                  if (currentAttributes.size > 0) {
                    op.attributes = {};
                    currentAttributes.forEach((value, key) => {
                      if (value !== null) {
                        op.attributes[key] = value;
                      }
                    });
                  }
                }
                insert = "";
                break;
              case "retain":
                if (retain > 0) {
                  op = { retain };
                  if (!isEmpty(attributes)) {
                    op.attributes = assign({}, attributes);
                  }
                }
                retain = 0;
                break;
            }
            if (op) delta.push(op);
            action = null;
          }
        };
        while (item !== null) {
          switch (item.content.constructor) {
            case ContentType:
            case ContentEmbed:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  addOp();
                  action = "insert";
                  insert = item.content.getContent()[0];
                  addOp();
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += 1;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += 1;
              }
              break;
            case ContentString:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  if (action !== "insert") {
                    addOp();
                    action = "insert";
                  }
                  insert += /** @type {ContentString} */
                  item.content.str;
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += item.length;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += item.length;
              }
              break;
            case ContentFormat: {
              const { key, value } = (
                /** @type {ContentFormat} */
                item.content
              );
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  const curVal = currentAttributes.get(key) ?? null;
                  if (!equalAttrs(curVal, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (equalAttrs(value, oldAttributes.get(key) ?? null)) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (value !== null) {
                    item.delete(transaction);
                  }
                }
              } else if (this.deletes(item)) {
                oldAttributes.set(key, value);
                const curVal = currentAttributes.get(key) ?? null;
                if (!equalAttrs(curVal, value)) {
                  if (action === "retain") {
                    addOp();
                  }
                  attributes[key] = curVal;
                }
              } else if (!item.deleted) {
                oldAttributes.set(key, value);
                const attr = attributes[key];
                if (attr !== void 0) {
                  if (!equalAttrs(attr, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (value === null) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (attr !== null) {
                    item.delete(transaction);
                  }
                }
              }
              if (!item.deleted) {
                if (action === "insert") {
                  addOp();
                }
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  item.content
                );
              }
              break;
            }
          }
          item = item.right;
        }
        addOp();
        while (delta.length > 0) {
          const lastOp = delta[delta.length - 1];
          if (lastOp.retain !== void 0 && lastOp.attributes === void 0) {
            delta.pop();
          } else {
            break;
          }
        }
      });
      this._delta = delta;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
};
var YText = class _YText extends AbstractType {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(string) {
    super();
    this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
    this._searchMarker = [];
    this._hasFormatting = false;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    this.doc ?? warnPrematureAccess();
    return this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    try {
      this._pending.forEach((f) => f());
    } catch (e) {
      console.error(e);
    }
    this._pending = null;
  }
  _copy() {
    return new _YText();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const text2 = new _YText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    const event = new YTextEvent(this, transaction, parentSubs);
    callTypeObservers(this, transaction, event);
    if (!transaction.local && this._hasFormatting) {
      transaction._needFormattingCleanup = true;
    }
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    this.doc ?? warnPrematureAccess();
    let str = "";
    let n = this._start;
    while (n !== null) {
      if (!n.deleted && n.countable && n.content.constructor === ContentString) {
        str += /** @type {ContentString} */
        n.content.str;
      }
      n = n.right;
    }
    return str;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {Array<any>} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(delta, { sanitize = true } = {}) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
        for (let i = 0; i < delta.length; i++) {
          const op = delta[i];
          if (op.insert !== void 0) {
            const ins = !sanitize && typeof op.insert === "string" && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
            if (typeof ins !== "string" || ins.length > 0) {
              insertText(transaction, this, currPos, ins, op.attributes || {});
            }
          } else if (op.retain !== void 0) {
            formatText(transaction, this, currPos, op.retain, op.attributes || {});
          } else if (op.delete !== void 0) {
            deleteText(transaction, currPos, op.delete);
          }
        }
      });
    } else {
      this._pending.push(() => this.applyDelta(delta));
    }
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(snapshot, prevSnapshot, computeYChange) {
    this.doc ?? warnPrematureAccess();
    const ops = [];
    const currentAttributes = /* @__PURE__ */ new Map();
    const doc2 = (
      /** @type {Doc} */
      this.doc
    );
    let str = "";
    let n = this._start;
    function packStr() {
      if (str.length > 0) {
        const attributes = {};
        let addAttributes = false;
        currentAttributes.forEach((value, key) => {
          addAttributes = true;
          attributes[key] = value;
        });
        const op = { insert: str };
        if (addAttributes) {
          op.attributes = attributes;
        }
        ops.push(op);
        str = "";
      }
    }
    const computeDelta = () => {
      while (n !== null) {
        if (isVisible(n, snapshot) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) {
          switch (n.content.constructor) {
            case ContentString: {
              const cur = currentAttributes.get("ychange");
              if (snapshot !== void 0 && !isVisible(n, snapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "removed") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n.id) : { type: "removed" });
                }
              } else if (prevSnapshot !== void 0 && !isVisible(n, prevSnapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "added") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("added", n.id) : { type: "added" });
                }
              } else if (cur !== void 0) {
                packStr();
                currentAttributes.delete("ychange");
              }
              str += /** @type {ContentString} */
              n.content.str;
              break;
            }
            case ContentType:
            case ContentEmbed: {
              packStr();
              const op = {
                insert: n.content.getContent()[0]
              };
              if (currentAttributes.size > 0) {
                const attrs = (
                  /** @type {Object<string,any>} */
                  {}
                );
                op.attributes = attrs;
                currentAttributes.forEach((value, key) => {
                  attrs[key] = value;
                });
              }
              ops.push(op);
              break;
            }
            case ContentFormat:
              if (isVisible(n, snapshot)) {
                packStr();
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  n.content
                );
              }
              break;
          }
        }
        n = n.right;
      }
      packStr();
    };
    if (snapshot || prevSnapshot) {
      transact(doc2, (transaction) => {
        if (snapshot) {
          splitSnapshotAffectedStructs(transaction, snapshot);
        }
        if (prevSnapshot) {
          splitSnapshotAffectedStructs(transaction, prevSnapshot);
        }
        computeDelta();
      }, "cleanup");
    } else {
      computeDelta();
    }
    return ops;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(index, text2, attributes) {
    if (text2.length <= 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, !attributes);
        if (!attributes) {
          attributes = {};
          pos.currentAttributes.forEach((v, k) => {
            attributes[k] = v;
          });
        }
        insertText(transaction, this, pos, text2, attributes);
      });
    } else {
      this._pending.push(() => this.insert(index, text2, attributes));
    }
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(index, embed, attributes) {
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, !attributes);
        insertText(transaction, this, pos, embed, attributes || {});
      });
    } else {
      this._pending.push(() => this.insertEmbed(index, embed, attributes || {}));
    }
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(index, length3) {
    if (length3 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        deleteText(transaction, findPosition(transaction, this, index, true), length3);
      });
    } else {
      this._pending.push(() => this.delete(index, length3));
    }
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(index, length3, attributes) {
    if (length3 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, false);
        if (pos.right === null) {
          return;
        }
        formatText(transaction, this, pos, length3, attributes);
      });
    } else {
      this._pending.push(() => this.format(index, length3, attributes));
    }
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._pending.push(() => this.removeAttribute(attributeName));
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._pending.push(() => this.setAttribute(attributeName, attributeValue));
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return typeMapGetAll(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YTextRefID);
  }
};
var readYText = (_decoder) => new YText();
var YXmlTreeWalker = class {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(root, f = () => true) {
    this._filter = f;
    this._root = root;
    this._currentNode = /** @type {Item} */
    root._start;
    this._firstCall = true;
    root.doc ?? warnPrematureAccess();
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let n = this._currentNode;
    let type = n && n.content && /** @type {any} */
    n.content.type;
    if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) {
      do {
        type = /** @type {any} */
        n.content.type;
        if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
          n = type._start;
        } else {
          while (n !== null) {
            const nxt = n.next;
            if (nxt !== null) {
              n = nxt;
              break;
            } else if (n.parent === this._root) {
              n = null;
            } else {
              n = /** @type {AbstractType<any>} */
              n.parent._item;
            }
          }
        }
      } while (n !== null && (n.deleted || !this._filter(
        /** @type {ContentType} */
        n.content.type
      )));
    }
    this._firstCall = false;
    if (n === null) {
      return { value: void 0, done: true };
    }
    this._currentNode = n;
    return { value: (
      /** @type {any} */
      n.content.type
    ), done: false };
  }
};
var YXmlFragment = class _YXmlFragment extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const first = this._first;
    return first ? first.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  _copy() {
    return new _YXmlFragment();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const el = new _YXmlFragment();
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  get length() {
    this.doc ?? warnPrematureAccess();
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(filter2) {
    return new YXmlTreeWalker(this, filter2);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(query) {
    query = query.toUpperCase();
    const iterator = new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query);
    const next = iterator.next();
    if (next.done) {
      return null;
    } else {
      return next.value;
    }
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(query) {
    query = query.toUpperCase();
    return from2(new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return typeListMap(this, (xml) => xml.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const fragment = _document.createDocumentFragment();
    if (binding !== void 0) {
      binding._createAssociation(fragment, this);
    }
    typeListForEach(this, (xmlType) => {
      fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
    });
    return fragment;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(transaction, this, index, content);
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(ref, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
        typeListInsertGenericsAfter(transaction, this, refItem, content);
      });
    } else {
      const pc = (
        /** @type {Array<any>} */
        this._prelimContent
      );
      const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
      if (index === 0 && ref !== null) {
        throw create2("Reference item not found");
      }
      pc.splice(index, 0, ...content);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(index, length3 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length3);
      });
    } else {
      this._prelimContent.splice(index, length3);
    }
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(content) {
    this.insert(this.length, content);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlFragmentRefID);
  }
};
var readYXmlFragment = (_decoder) => new YXmlFragment();
var YXmlElement = class _YXmlElement extends YXmlFragment {
  constructor(nodeName = "UNDEFINED") {
    super();
    this.nodeName = nodeName;
    this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((value, key) => {
      this.setAttribute(key, value);
    });
    this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new _YXmlElement(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const el = new _YXmlElement(this.nodeName);
    const attrs = this.getAttributes();
    forEach(attrs, (value, key) => {
      if (typeof value === "string") {
        el.setAttribute(key, value);
      }
    });
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const attrs = this.getAttributes();
    const stringBuilder = [];
    const keys2 = [];
    for (const key in attrs) {
      keys2.push(key);
    }
    keys2.sort();
    const keysLen = keys2.length;
    for (let i = 0; i < keysLen; i++) {
      const key = keys2[i];
      stringBuilder.push(key + '="' + attrs[key] + '"');
    }
    const nodeName = this.nodeName.toLocaleLowerCase();
    const attrsString = stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : "";
    return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._prelimAttrs.delete(attributeName);
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._prelimAttrs.set(attributeName, attributeValue);
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapHas(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(snapshot) {
    return (
      /** @type {any} */
      snapshot ? typeMapGetAllSnapshot(this, snapshot) : typeMapGetAll(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const dom = _document.createElement(this.nodeName);
    const attrs = this.getAttributes();
    for (const key in attrs) {
      const value = attrs[key];
      if (typeof value === "string") {
        dom.setAttribute(key, value);
      }
    }
    typeListForEach(this, (yxml) => {
      dom.appendChild(yxml.toDOM(_document, hooks, binding));
    });
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlElementRefID);
    encoder.writeKey(this.nodeName);
  }
};
var readYXmlElement = (decoder) => new YXmlElement(decoder.readKey());
var YXmlEvent = class extends YEvent {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with which the
   *                                  change was created.
   */
  constructor(target, subs, transaction) {
    super(target, transaction);
    this.childListChanged = false;
    this.attributesChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.attributesChanged.add(sub);
      }
    });
  }
};
var YXmlHook = class _YXmlHook extends YMap {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(hookName) {
    super();
    this.hookName = hookName;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new _YXmlHook(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const el = new _YXmlHook(this.hookName);
    this.forEach((value, key) => {
      el.set(key, value);
    });
    return el;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const hook = hooks[this.hookName];
    let dom;
    if (hook !== void 0) {
      dom = hook.createDom(this);
    } else {
      dom = document.createElement(this.hookName);
    }
    dom.setAttribute("data-yjs-hook", this.hookName);
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlHookRefID);
    encoder.writeKey(this.hookName);
  }
};
var readYXmlHook = (decoder) => new YXmlHook(decoder.readKey());
var YXmlText = class _YXmlText extends YText {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  _copy() {
    return new _YXmlText();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const text2 = new _YXmlText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks, binding) {
    const dom = _document.createTextNode(this.toString());
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  toString() {
    return this.toDelta().map((delta) => {
      const nestedNodes = [];
      for (const nodeName in delta.attributes) {
        const attrs = [];
        for (const key in delta.attributes[nodeName]) {
          attrs.push({ key, value: delta.attributes[nodeName][key] });
        }
        attrs.sort((a, b) => a.key < b.key ? -1 : 1);
        nestedNodes.push({ nodeName, attrs });
      }
      nestedNodes.sort((a, b) => a.nodeName < b.nodeName ? -1 : 1);
      let str = "";
      for (let i = 0; i < nestedNodes.length; i++) {
        const node = nestedNodes[i];
        str += `<${node.nodeName}`;
        for (let j = 0; j < node.attrs.length; j++) {
          const attr = node.attrs[j];
          str += ` ${attr.key}="${attr.value}"`;
        }
        str += ">";
      }
      str += delta.insert;
      for (let i = nestedNodes.length - 1; i >= 0; i--) {
        str += `</${nestedNodes[i].nodeName}>`;
      }
      return str;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlTextRefID);
  }
};
var readYXmlText = (decoder) => new YXmlText();
var AbstractStruct = class {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(id2, length3) {
    this.id = id2;
    this.length = length3;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw methodUnimplemented();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} whether this merged with right
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(encoder, offset, encodingRef) {
    throw methodUnimplemented();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    throw methodUnimplemented();
  }
};
var structGCRefNumber = 0;
var GC = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.length -= offset;
    }
    addStruct(transaction.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structGCRefNumber);
    encoder.writeLen(this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
var ContentBinary = class _ContentBinary {
  /**
   * @param {Uint8Array} content
   */
  constructor(content) {
    this.content = content;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new _ContentBinary(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
};
var readContentBinary = (decoder) => new ContentBinary(decoder.readBuf());
var ContentDeleted = class _ContentDeleted {
  /**
   * @param {number} len
   */
  constructor(len) {
    this.len = len;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new _ContentDeleted(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(offset) {
    const right = new _ContentDeleted(this.len - offset);
    this.len = offset;
    return right;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.len += right.len;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
    item.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeLen(this.len - offset);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
};
var readContentDeleted = (decoder) => new ContentDeleted(decoder.readLen());
var createDocFromOpts = (guid, opts) => new Doc(__spreadProps(__spreadValues({ guid }, opts), { shouldLoad: opts.shouldLoad || opts.autoLoad || false }));
var ContentDoc = class _ContentDoc {
  /**
   * @param {Doc} doc
   */
  constructor(doc2) {
    if (doc2._item) {
      console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
    }
    this.doc = doc2;
    const opts = {};
    this.opts = opts;
    if (!doc2.gc) {
      opts.gc = false;
    }
    if (doc2.autoLoad) {
      opts.autoLoad = true;
    }
    if (doc2.meta !== null) {
      opts.meta = doc2.meta;
    }
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new _ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.doc._item = item;
    transaction.subdocsAdded.add(this.doc);
    if (this.doc.shouldLoad) {
      transaction.subdocsLoaded.add(this.doc);
    }
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (transaction.subdocsAdded.has(this.doc)) {
      transaction.subdocsAdded.delete(this.doc);
    } else {
      transaction.subdocsRemoved.add(this.doc);
    }
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(this.doc.guid);
    encoder.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
};
var readContentDoc = (decoder) => new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
var ContentEmbed = class _ContentEmbed {
  /**
   * @param {Object} embed
   */
  constructor(embed) {
    this.embed = embed;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new _ContentEmbed(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
};
var readContentEmbed = (decoder) => new ContentEmbed(decoder.readJSON());
var ContentFormat = class _ContentFormat {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new _ContentFormat(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(_offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(_right) {
    return false;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(_transaction, item) {
    const p = (
      /** @type {YText} */
      item.parent
    );
    p._searchMarker = null;
    p._hasFormatting = true;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeKey(this.key);
    encoder.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
};
var readContentFormat = (decoder) => new ContentFormat(decoder.readKey(), decoder.readJSON());
var ContentJSON = class _ContentJSON {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new _ContentJSON(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(offset) {
    const right = new _ContentJSON(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeString(c === void 0 ? "undefined" : JSON.stringify(c));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
};
var readContentJSON = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    const c = decoder.readString();
    if (c === "undefined") {
      cs.push(void 0);
    } else {
      cs.push(JSON.parse(c));
    }
  }
  return new ContentJSON(cs);
};
var isDevMode = getVariable("node_env") === "development";
var ContentAny = class _ContentAny {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
    isDevMode && deepFreeze(arr);
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new _ContentAny(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(offset) {
    const right = new _ContentAny(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeAny(c);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
};
var readContentAny = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    cs.push(decoder.readAny());
  }
  return new ContentAny(cs);
};
var ContentString = class _ContentString {
  /**
   * @param {string} str
   */
  constructor(str) {
    this.str = str;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new _ContentString(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(offset) {
    const right = new _ContentString(this.str.slice(offset));
    this.str = this.str.slice(0, offset);
    const firstCharCode = this.str.charCodeAt(offset - 1);
    if (firstCharCode >= 55296 && firstCharCode <= 56319) {
      this.str = this.str.slice(0, offset - 1) + "\uFFFD";
      right.str = "\uFFFD" + right.str.slice(1);
    }
    return right;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.str += right.str;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
};
var readContentString = (decoder) => new ContentString(decoder.readString());
var typeRefs = [
  readYArray,
  readYMap,
  readYText,
  readYXmlElement,
  readYXmlFragment,
  readYXmlHook,
  readYXmlText
];
var YArrayRefID = 0;
var YMapRefID = 1;
var YTextRefID = 2;
var YXmlElementRefID = 3;
var YXmlFragmentRefID = 4;
var YXmlHookRefID = 5;
var YXmlTextRefID = 6;
var ContentType = class _ContentType {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(type) {
    this.type = type;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new _ContentType(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.type._integrate(transaction.doc, item);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    let item = this.type._start;
    while (item !== null) {
      if (!item.deleted) {
        item.delete(transaction);
      } else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) {
        transaction._mergeStructs.push(item);
      }
      item = item.right;
    }
    this.type._map.forEach((item2) => {
      if (!item2.deleted) {
        item2.delete(transaction);
      } else if (item2.id.clock < (transaction.beforeState.get(item2.id.client) || 0)) {
        transaction._mergeStructs.push(item2);
      }
    });
    transaction.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
    let item = this.type._start;
    while (item !== null) {
      item.gc(store, true);
      item = item.right;
    }
    this.type._start = null;
    this.type._map.forEach(
      /** @param {Item | null} item */
      (item2) => {
        while (item2 !== null) {
          item2.gc(store, true);
          item2 = item2.left;
        }
      }
    );
    this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    this.type._write(encoder);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
};
var readContentType = (decoder) => new ContentType(typeRefs[decoder.readTypeRef()](decoder));
var splitItem = (transaction, leftItem, diff) => {
  const { client, clock } = leftItem.id;
  const rightItem = new Item(
    createID(client, clock + diff),
    leftItem,
    createID(client, clock + diff - 1),
    leftItem.right,
    leftItem.rightOrigin,
    leftItem.parent,
    leftItem.parentSub,
    leftItem.content.splice(diff)
  );
  if (leftItem.deleted) {
    rightItem.markDeleted();
  }
  if (leftItem.keep) {
    rightItem.keep = true;
  }
  if (leftItem.redone !== null) {
    rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
  }
  leftItem.right = rightItem;
  if (rightItem.right !== null) {
    rightItem.right.left = rightItem;
  }
  transaction._mergeStructs.push(rightItem);
  if (rightItem.parentSub !== null && rightItem.right === null) {
    rightItem.parent._map.set(rightItem.parentSub, rightItem);
  }
  leftItem.length = diff;
  return rightItem;
};
var Item = class _Item extends AbstractStruct {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(id2, left, origin, right, rightOrigin, parent, parentSub, content) {
    super(id2, content.getLength());
    this.origin = origin;
    this.left = left;
    this.right = right;
    this.rightOrigin = rightOrigin;
    this.parent = parent;
    this.parentSub = parentSub;
    this.redone = null;
    this.content = content;
    this.info = this.content.isCountable() ? BIT2 : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(isMarked) {
    if ((this.info & BIT4) > 0 !== isMarked) {
      this.info ^= BIT4;
    }
  }
  get marker() {
    return (this.info & BIT4) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & BIT1) > 0;
  }
  set keep(doKeep) {
    if (this.keep !== doKeep) {
      this.info ^= BIT1;
    }
  }
  get countable() {
    return (this.info & BIT2) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & BIT3) > 0;
  }
  set deleted(doDelete) {
    if (this.deleted !== doDelete) {
      this.info ^= BIT3;
    }
  }
  markDeleted() {
    this.info |= BIT3;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) {
      return this.origin.client;
    }
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) {
      return this.rightOrigin.client;
    }
    if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) {
      return this.parent.client;
    }
    if (this.origin) {
      this.left = getItemCleanEnd(transaction, store, this.origin);
      this.origin = this.left.lastId;
    }
    if (this.rightOrigin) {
      this.right = getItemCleanStart(transaction, this.rightOrigin);
      this.rightOrigin = this.right.id;
    }
    if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
      this.parent = null;
    } else if (!this.parent) {
      if (this.left && this.left.constructor === _Item) {
        this.parent = this.left.parent;
        this.parentSub = this.left.parentSub;
      } else if (this.right && this.right.constructor === _Item) {
        this.parent = this.right.parent;
        this.parentSub = this.right.parentSub;
      }
    } else if (this.parent.constructor === ID) {
      const parentItem = getItem(store, this.parent);
      if (parentItem.constructor === GC) {
        this.parent = null;
      } else {
        this.parent = /** @type {ContentType} */
        parentItem.content.type;
      }
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
      this.origin = this.left.lastId;
      this.content = this.content.splice(offset);
      this.length -= offset;
    }
    if (this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let left = this.left;
        let o;
        if (left !== null) {
          o = left.right;
        } else if (this.parentSub !== null) {
          o = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (o !== null && o.left !== null) {
            o = o.left;
          }
        } else {
          o = /** @type {AbstractType<any>} */
          this.parent._start;
        }
        const conflictingItems = /* @__PURE__ */ new Set();
        const itemsBeforeOrigin = /* @__PURE__ */ new Set();
        while (o !== null && o !== this.right) {
          itemsBeforeOrigin.add(o);
          conflictingItems.add(o);
          if (compareIDs(this.origin, o.origin)) {
            if (o.id.client < this.id.client) {
              left = o;
              conflictingItems.clear();
            } else if (compareIDs(this.rightOrigin, o.rightOrigin)) {
              break;
            }
          } else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
            if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
              left = o;
              conflictingItems.clear();
            }
          } else {
            break;
          }
          o = o.right;
        }
        this.left = left;
      }
      if (this.left !== null) {
        const right = this.left.right;
        this.right = right;
        this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null) {
          r = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (r !== null && r.left !== null) {
            r = r.left;
          }
        } else {
          r = /** @type {AbstractType<any>} */
          this.parent._start;
          this.parent._start = this;
        }
        this.right = r;
      }
      if (this.right !== null) {
        this.right.left = this;
      } else if (this.parentSub !== null) {
        this.parent._map.set(this.parentSub, this);
        if (this.left !== null) {
          this.left.delete(transaction);
        }
      }
      if (this.parentSub === null && this.countable && !this.deleted) {
        this.parent._length += this.length;
      }
      addStruct(transaction.doc.store, this);
      this.content.integrate(transaction, this);
      addChangedTypeToTransaction(
        transaction,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      );
      if (
        /** @type {AbstractType<any>} */
        this.parent._item !== null && /** @type {AbstractType<any>} */
        this.parent._item.deleted || this.parentSub !== null && this.right !== null
      ) {
        this.delete(transaction);
      }
    } else {
      new GC(this.id, this.length).integrate(transaction, 0);
    }
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let n = this.right;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let n = this.left;
    while (n !== null && n.deleted) {
      n = n.left;
    }
    return n;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
      const searchMarker = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      if (searchMarker) {
        searchMarker.forEach((marker) => {
          if (marker.p === right) {
            marker.p = this;
            if (!this.deleted && this.countable) {
              marker.index -= this.length;
            }
          }
        });
      }
      if (right.keep) {
        this.keep = true;
      }
      this.right = right.right;
      if (this.right !== null) {
        this.right.left = this;
      }
      this.length += right.length;
      return true;
    }
    return false;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (!this.deleted) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (this.countable && this.parentSub === null) {
        parent._length -= this.length;
      }
      this.markDeleted();
      addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
      addChangedTypeToTransaction(transaction, parent, this.parentSub);
      this.content.delete(transaction);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(store, parentGCd) {
    if (!this.deleted) {
      throw unexpectedCase();
    }
    this.content.gc(store);
    if (parentGCd) {
      replaceStruct(store, this, new GC(this.id, this.length));
    } else {
      this.content = new ContentDeleted(this.length);
    }
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(encoder, offset) {
    const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
    const rightOrigin = this.rightOrigin;
    const parentSub = this.parentSub;
    const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | // origin is defined
    (rightOrigin === null ? 0 : BIT7) | // right origin is defined
    (parentSub === null ? 0 : BIT6);
    encoder.writeInfo(info);
    if (origin !== null) {
      encoder.writeLeftID(origin);
    }
    if (rightOrigin !== null) {
      encoder.writeRightID(rightOrigin);
    }
    if (origin === null && rightOrigin === null) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (parent._item !== void 0) {
        const parentItem = parent._item;
        if (parentItem === null) {
          const ykey = findRootTypeKey(parent);
          encoder.writeParentInfo(true);
          encoder.writeString(ykey);
        } else {
          encoder.writeParentInfo(false);
          encoder.writeLeftID(parentItem.id);
        }
      } else if (parent.constructor === String) {
        encoder.writeParentInfo(true);
        encoder.writeString(parent);
      } else if (parent.constructor === ID) {
        encoder.writeParentInfo(false);
        encoder.writeLeftID(parent);
      } else {
        unexpectedCase();
      }
      if (parentSub !== null) {
        encoder.writeString(parentSub);
      }
    }
    this.content.write(encoder, offset);
  }
};
var readItemContent = (decoder, info) => contentRefs[info & BITS5](decoder);
var contentRefs = [
  () => {
    unexpectedCase();
  },
  // GC is not ItemContent
  readContentDeleted,
  // 1
  readContentJSON,
  // 2
  readContentBinary,
  // 3
  readContentString,
  // 4
  readContentEmbed,
  // 5
  readContentFormat,
  // 6
  readContentType,
  // 7
  readContentAny,
  // 8
  readContentDoc,
  // 9
  () => {
    unexpectedCase();
  }
  // 10 - Skip is not ItemContent
];
var structSkipRefNumber = 10;
var Skip = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    unexpectedCase();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structSkipRefNumber);
    writeVarUint(encoder.restEncoder, this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
var glo = (
  /** @type {any} */
  typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {}
);
var importIdentifier = "__ $YJS$ __";
if (glo[importIdentifier] === true) {
  console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
}
glo[importIdentifier] = true;

// node_modules/y-dexie/dist/y-dexie.js
var _hasOwn = {}.hasOwnProperty;
var docRegistry = new FinalizationRegistry(({ cache, key }) => {
  delete cache[key];
});
function getDocCache(db) {
  var _a;
  var _b;
  return (_a = (_b = db._novip)["_docCache"]) !== null && _a !== void 0 ? _a : _b["_docCache"] = {
    cache: {},
    get size() {
      return Object.keys(this.cache).length;
    },
    find(table, primaryKey, ydocProp) {
      const cacheKey = getYDocCacheKey(table, primaryKey, ydocProp);
      const docRef = this.cache[cacheKey];
      return docRef ? docRef.deref() : void 0;
    },
    add(doc2) {
      var _a2;
      const { parentTable, parentId, parentProp } = doc2.meta;
      if (!parentTable || !parentProp || parentId == null)
        throw new Error(`Missing Dexie-related metadata in Y.Doc`);
      const cacheKey = getYDocCacheKey(parentTable, parentId, parentProp);
      const existingDoc = (_a2 = this.cache[cacheKey]) === null || _a2 === void 0 ? void 0 : _a2.deref();
      if (existingDoc) {
        docRegistry.unregister(existingDoc);
      }
      this.cache[cacheKey] = new WeakRef(doc2);
      docRegistry.register(doc2, { cache: this.cache, key: cacheKey }, doc2);
    },
    delete(doc2) {
      docRegistry.unregister(doc2);
      const cacheKey = getYDocCacheKey(doc2.meta.parentTable, doc2.meta.parentId, doc2.meta.parentProp);
      const cacheEntry = this.cache[cacheKey];
      if ((cacheEntry === null || cacheEntry === void 0 ? void 0 : cacheEntry.deref()) === doc2) {
        delete this.cache[cacheKey];
      }
    }
  };
}
var destroyedDocs = /* @__PURE__ */ new WeakSet();
function throwIfDestroyed(doc2) {
  if (destroyedDocs.has(doc2))
    throw new Error(`Y.Doc ${doc2.meta.parentId} has been destroyed`);
}
function getYDocCacheKey(table, primaryKey, ydocProp) {
  return `${table}[${primaryKey}].${ydocProp}`;
}
function getOrCreateDocument(db, docCache, tableName, prop, updatesTable, id2) {
  let doc2 = docCache.find(tableName, id2, prop);
  if (doc2)
    return doc2;
  doc2 = new Doc({
    meta: {
      db,
      updatesTable,
      parentProp: prop,
      parentTable: tableName,
      parentId: id2
    }
  });
  docCache.add(doc2);
  doc2.on("destroy", () => {
    destroyedDocs.add(doc2);
    docCache.delete(doc2);
  });
  return doc2;
}
var { getByKeyPath } = Dexie;
var currentUpdateRow = null;
function setCurrentUpdateRow(row) {
  currentUpdateRow = row;
}
function observeYDocUpdates(provider, doc2, db, parentTableName, updatesTableName, parentId) {
  let lastUpdateId = 0;
  let initial = true;
  const subscription = liveQuery(() => {
    throwIfDestroyed(doc2);
    const updatesTable = db.table(updatesTableName);
    return Promise.all([
      (lastUpdateId > 0 ? updatesTable.where("i").between(lastUpdateId, Infinity, false).toArray().then((updates) => updates.filter((update) => cmp(update.k, parentId) === 0)) : updatesTable.where({ k: parentId }).toArray()).then((updates) => {
        return updates;
      }),
      db.table(parentTableName).where(":id").equals(parentId).toArray()
      // Why not just count() or get()? Because of cache only works with toArray() currently (optimization)
    ]);
  }).subscribe(([updates, parentRow]) => {
    if (updates.length > 0)
      lastUpdateId = updates[updates.length - 1].i;
    if (parentRow.length === 0) {
      doc2.destroy();
      return;
    }
    throwIfDestroyed(doc2);
    if (updates.length > 0) {
      transact(doc2, () => {
        updates.forEach((update) => {
          try {
            setCurrentUpdateRow(update);
            applyUpdateV2(doc2, update.u);
          } finally {
            setCurrentUpdateRow(null);
          }
        });
      }, provider, false);
    }
    if (initial) {
      initial = false;
      doc2.emit("load", [doc2]);
    }
  }, (error) => {
    provider.on("error").fire(error);
  });
  const onUpdate = (update, origin) => {
    if (origin === provider)
      return;
    db.table(updatesTableName).add({
      k: parentId,
      u: update,
      f: 1
      // Flag as local update (to be included when syncing)
    }).then((i) => {
      if (i === lastUpdateId - 1)
        ++lastUpdateId;
    }).catch((error) => {
      provider.on("error").fire(error);
    });
  };
  const stopObserving = () => {
    subscription.unsubscribe();
    doc2.off("updateV2", onUpdate);
    doc2.off("destroy", stopObserving);
  };
  doc2.on("updateV2", onUpdate);
  doc2.on("destroy", stopObserving);
  return stopObserving;
}
function nop() {
}
function promisableChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function() {
    var res = f1.apply(this, arguments);
    if (res && typeof res.then === "function") {
      var thiz = this, i = arguments.length, args2 = new Array(i);
      while (i--)
        args2[i] = arguments[i];
      return res.then(function() {
        return f2.apply(thiz, args2);
      });
    }
    return f2.apply(this, arguments);
  };
}
function nonStoppableEventChain(f1, f2) {
  if (f1 === nop)
    return f2;
  return function() {
    f1.apply(this, arguments);
    f2.apply(this, arguments);
  };
}
var wm = /* @__PURE__ */ new WeakMap();
function createEvents() {
  return Dexie.Events(null, "load", "sync", "error");
}
var DexieYProvider2 = class _DexieYProvider {
  static getOrCreateDocument(db, table, prop, id2) {
    var _a, _b;
    const docCache = getDocCache(db);
    const updatesTable = (_b = (_a = db.table(table).schema.yProps) === null || _a === void 0 ? void 0 : _a.find((p) => p.prop === prop)) === null || _b === void 0 ? void 0 : _b.updatesTable;
    if (!updatesTable) {
      throw new Error(`Updates table for ${table}.${prop} not found`);
    }
    return getOrCreateDocument(db, docCache, table, prop, updatesTable, id2);
  }
  static load(doc2, options) {
    var _a;
    let p = wm.get(doc2);
    if (p) {
      ++p.refCount;
      if ((options === null || options === void 0 ? void 0 : options.gracePeriod) != null && p.graceTimeout < options.gracePeriod) {
        p.graceTimeout = options.gracePeriod;
      }
      if (p.graceTimer) {
        clearTimeout(p.graceTimer);
        p.graceTimer = null;
      }
    } else {
      p = new _DexieYProvider(doc2);
      p.graceTimeout = (_a = options === null || options === void 0 ? void 0 : options.gracePeriod) !== null && _a !== void 0 ? _a : -1;
      wm.set(doc2, p);
    }
    return p;
  }
  static release(doc2) {
    if (!doc2 || destroyedDocs.has(doc2))
      return;
    const p = wm.get(doc2);
    if (p) {
      if (--p.refCount <= 0) {
        if (p.graceTimeout < 0) {
          p._release();
        } else if (!p.graceTimer) {
          p.graceTimer = setTimeout(
            () => {
              p.graceTimer = null;
              if (p.refCount === 0) {
                p._release();
              }
            },
            p.graceTimeout
            // Grace period to optimize for unload/reload scenarios
          );
        }
      }
    } else {
      doc2.destroy();
    }
  }
  _release() {
    if (!this.doc)
      return;
    Promise.resolve(_DexieYProvider.on("beforeunload").fire(this)).finally(() => {
      var _a;
      if (this.refCount === 0) {
        (_a = this.doc) === null || _a === void 0 ? void 0 : _a.destroy();
      }
    });
  }
  static for(doc2) {
    return wm.get(doc2);
  }
  static get currentUpdateRow() {
    return currentUpdateRow;
  }
  // Use a getter to avoid unhandled rejections when no one bothers about it.
  get whenLoaded() {
    if (!this._whenLoaded) {
      this._whenLoaded = new Promise((resolve, reject) => {
        if (!this.doc) {
          reject(new Error("No Y.Doc associated with this provider"));
          return;
        }
        if (this.doc.isLoaded)
          resolve();
        else if (this._error)
          reject(this._error);
        else if (destroyedDocs.has(this.doc)) {
          reject(new Dexie.AbortError("Document was destroyed before loaded"));
        } else {
          this.on("load", resolve);
          this.on("error", reject);
          this.doc.on("destroy", () => reject(new Dexie.AbortError("Document was destroyed before loaded")));
        }
      });
    }
    return this._whenLoaded;
  }
  // Use a getter to avoid unhandled rejections when no one bothers about it.
  get whenSynced() {
    if (!this._whenSynced) {
      this._whenSynced = new Promise((resolve, reject) => {
        if (!this.doc) {
          reject(new Error("No Y.Doc associated with this provider"));
          return;
        }
        if (this.doc.isSynced)
          resolve();
        else if (this._error)
          reject(this._error);
        else if (destroyedDocs.has(this.doc)) {
          reject(new Dexie.AbortError("Document was destroyed before synced"));
        } else {
          this.on("sync", resolve);
          this.on("error", reject);
          this.doc.on("destroy", () => reject(new Dexie.AbortError("Document was destroyed before synced")));
        }
      });
    }
    return this._whenSynced;
  }
  constructor(doc2) {
    this.refCount = 1;
    this.cleanupHandlers = [];
    this.graceTimeout = -1;
    this.doc = null;
    this.destroyed = false;
    this.on = createEvents();
    this.doc = doc2;
    this.off = (name, f) => {
      var _a;
      return (_a = this.on[name]) === null || _a === void 0 ? void 0 : _a.unsubscribe(f);
    };
    if ("dispose" in Symbol) {
      this[Symbol.dispose] = () => _DexieYProvider.release(doc2);
    }
    doc2.on("load", () => this.on("load").fire());
    doc2.on("sync", (sync) => sync !== false && this.on("sync").fire());
    doc2.on("destroy", this.destroy.bind(this));
    this.on("error", (error) => {
      this._error = error;
    });
    const { db, parentTable, parentId, updatesTable } = doc2.meta || {};
    if (!db || !parentTable || !updatesTable) {
      throw new Error(`Missing Dexie-related metadata in Y.Doc. Documents need to be obtained through Y.Doc properties from dexie queries.`);
    }
    if (!db.table(parentTable) || !db.table(updatesTable)) {
      throw new Error(`Table ${parentTable} or ${updatesTable} not found in db`);
    }
    throwIfDestroyed(doc2);
    this.stopObserving = observeYDocUpdates(this, doc2, db, parentTable, updatesTable, parentId);
    _DexieYProvider.on("new").fire(this);
  }
  destroy() {
    var _a, _b, _c;
    console.debug(`Y.Doc ${(_b = (_a = this.doc) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.parentId} was destroyed`);
    wm.delete(this.doc);
    this.doc = null;
    this.destroyed = true;
    this.refCount = 0;
    (_c = this.stopObserving) === null || _c === void 0 ? void 0 : _c.call(this);
    this.on = createEvents();
    this.cleanupHandlers.forEach((cleanup) => cleanup());
  }
  addCleanupHandler(cleanupHandler) {
    this.cleanupHandlers.push(typeof cleanupHandler === "function" ? cleanupHandler : () => cleanupHandler.unsubscribe());
  }
};
DexieYProvider2.on = Dexie.Events(null, {
  new: [nonStoppableEventChain],
  beforeunload: [promisableChain]
});
DexieYProvider2.getDocCache = getDocCache;
if (Dexie["DexieYProvider"]) {
  DexieYProvider2 = Dexie["DexieYProvider"] || DexieYProvider2;
} else {
  Dexie["DexieYProvider"] = DexieYProvider2;
}

// node_modules/y-protocols/awareness.js
var outdatedTimeout = 3e4;
var Awareness = class extends Observable2 {
  /**
   * @param {Y.Doc} doc
   */
  constructor(doc2) {
    super();
    this.doc = doc2;
    this.clientID = doc2.clientID;
    this.states = /* @__PURE__ */ new Map();
    this.meta = /* @__PURE__ */ new Map();
    this._checkInterval = /** @type {any} */
    setInterval(() => {
      const now = getUnixTime();
      if (this.getLocalState() !== null && outdatedTimeout / 2 <= now - /** @type {{lastUpdated:number}} */
      this.meta.get(this.clientID).lastUpdated) {
        this.setLocalState(this.getLocalState());
      }
      const remove2 = [];
      this.meta.forEach((meta, clientid) => {
        if (clientid !== this.clientID && outdatedTimeout <= now - meta.lastUpdated && this.states.has(clientid)) {
          remove2.push(clientid);
        }
      });
      if (remove2.length > 0) {
        removeAwarenessStates(this, remove2, "timeout");
      }
    }, floor(outdatedTimeout / 10));
    doc2.on("destroy", () => {
      this.destroy();
    });
    this.setLocalState({});
  }
  destroy() {
    this.emit("destroy", [this]);
    this.setLocalState(null);
    super.destroy();
    clearInterval(this._checkInterval);
  }
  /**
   * @return {Object<string,any>|null}
   */
  getLocalState() {
    return this.states.get(this.clientID) || null;
  }
  /**
   * @param {Object<string,any>|null} state
   */
  setLocalState(state) {
    const clientID = this.clientID;
    const currLocalMeta = this.meta.get(clientID);
    const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
    const prevState = this.states.get(clientID);
    if (state === null) {
      this.states.delete(clientID);
    } else {
      this.states.set(clientID, state);
    }
    this.meta.set(clientID, {
      clock,
      lastUpdated: getUnixTime()
    });
    const added = [];
    const updated = [];
    const filteredUpdated = [];
    const removed = [];
    if (state === null) {
      removed.push(clientID);
    } else if (prevState == null) {
      if (state != null) {
        added.push(clientID);
      }
    } else {
      updated.push(clientID);
      if (!equalityDeep(prevState, state)) {
        filteredUpdated.push(clientID);
      }
    }
    if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
      this.emit("change", [{ added, updated: filteredUpdated, removed }, "local"]);
    }
    this.emit("update", [{ added, updated, removed }, "local"]);
  }
  /**
   * @param {string} field
   * @param {any} value
   */
  setLocalStateField(field, value) {
    const state = this.getLocalState();
    if (state !== null) {
      this.setLocalState(__spreadProps(__spreadValues({}, state), {
        [field]: value
      }));
    }
  }
  /**
   * @return {Map<number,Object<string,any>>}
   */
  getStates() {
    return this.states;
  }
};
var removeAwarenessStates = (awareness, clients, origin) => {
  const removed = [];
  for (let i = 0; i < clients.length; i++) {
    const clientID = clients[i];
    if (awareness.states.has(clientID)) {
      awareness.states.delete(clientID);
      if (clientID === awareness.clientID) {
        const curMeta = (
          /** @type {MetaClientState} */
          awareness.meta.get(clientID)
        );
        awareness.meta.set(clientID, {
          clock: curMeta.clock + 1,
          lastUpdated: getUnixTime()
        });
      }
      removed.push(clientID);
    }
  }
  if (removed.length > 0) {
    awareness.emit("change", [{ added: [], updated: [], removed }, origin]);
    awareness.emit("update", [{ added: [], updated: [], removed }, origin]);
  }
};
var encodeAwarenessUpdate = (awareness, clients, states = awareness.states) => {
  const len = clients.length;
  const encoder = createEncoder();
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    const clientID = clients[i];
    const state = states.get(clientID) || null;
    const clock = (
      /** @type {MetaClientState} */
      awareness.meta.get(clientID).clock
    );
    writeVarUint(encoder, clientID);
    writeVarUint(encoder, clock);
    writeVarString(encoder, JSON.stringify(state));
  }
  return toUint8Array(encoder);
};
var applyAwarenessUpdate = (awareness, update, origin) => {
  const decoder = createDecoder(update);
  const timestamp = getUnixTime();
  const added = [];
  const updated = [];
  const filteredUpdated = [];
  const removed = [];
  const len = readVarUint(decoder);
  for (let i = 0; i < len; i++) {
    const clientID = readVarUint(decoder);
    let clock = readVarUint(decoder);
    const state = JSON.parse(readVarString(decoder));
    const clientMeta = awareness.meta.get(clientID);
    const prevState = awareness.states.get(clientID);
    const currClock = clientMeta === void 0 ? 0 : clientMeta.clock;
    if (currClock < clock || currClock === clock && state === null && awareness.states.has(clientID)) {
      if (state === null) {
        if (clientID === awareness.clientID && awareness.getLocalState() != null) {
          clock++;
        } else {
          awareness.states.delete(clientID);
        }
      } else {
        awareness.states.set(clientID, state);
      }
      awareness.meta.set(clientID, {
        clock,
        lastUpdated: timestamp
      });
      if (clientMeta === void 0 && state !== null) {
        added.push(clientID);
      } else if (clientMeta !== void 0 && state === null) {
        removed.push(clientID);
      } else if (state !== null) {
        if (!equalityDeep(state, prevState)) {
          filteredUpdated.push(clientID);
        }
        updated.push(clientID);
      }
    }
  }
  if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
    awareness.emit("change", [{
      added,
      updated: filteredUpdated,
      removed
    }, origin]);
  }
  if (added.length > 0 || updated.length > 0 || removed.length > 0) {
    awareness.emit("update", [{
      added,
      updated,
      removed
    }, origin]);
  }
};

// node_modules/dexie-cloud-addon/dist/modern/dexie-cloud-addon.min.js
function Z(e, t, n, r) {
  return new (n || (n = Promise))((function(o, s) {
    function i(e2) {
      try {
        l(r.next(e2));
      } catch (e3) {
        s(e3);
      }
    }
    function a(e2) {
      try {
        l(r.throw(e2));
      } catch (e3) {
        s(e3);
      }
    }
    function l(e2) {
      var t2;
      e2.done ? o(e2.value) : (t2 = e2.value, t2 instanceof n ? t2 : new n((function(e3) {
        e3(t2);
      }))).then(i, a);
    }
    l((r = r.apply(e, t || [])).next());
  }));
}
function X(e) {
  var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && "number" == typeof e.length) return { next: function() {
    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
  } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Q(e) {
  return this instanceof Q ? (this.v = e, this) : new Q(e);
}
function ee(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r, o = n.apply(e, t || []), s = [];
  return r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function i(e2) {
    o[e2] && (r[e2] = function(t2) {
      return new Promise((function(n2, r2) {
        s.push([e2, t2, n2, r2]) > 1 || a(e2, t2);
      }));
    });
  }
  function a(e2, t2) {
    try {
      !(function(e3) {
        e3.value instanceof Q ? Promise.resolve(e3.value.v).then(l, c) : u(s[0][2], e3);
      })(o[e2](t2));
    } catch (e3) {
      u(s[0][3], e3);
    }
  }
  function l(e2) {
    a("next", e2);
  }
  function c(e2) {
    a("throw", e2);
  }
  function u(e2, t2) {
    e2(t2), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function te(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t, n = e[Symbol.asyncIterator];
  return n ? n.call(e) : (e = X(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function r(n2) {
    t[n2] = e[n2] && function(t2) {
      return new Promise((function(r2, o) {
        (function(e2, t3, n3, r3) {
          Promise.resolve(r3).then((function(t4) {
            e2({ value: t4, done: n3 });
          }), t3);
        })(r2, o, (t2 = e[n2](t2)).done, t2.value);
      }));
    };
  }
}
var ne = {}.hasOwnProperty;
function re(e, t, n) {
  if (e && void 0 !== t && (!("isFrozen" in Object) || !Object.isFrozen(e))) if ("string" != typeof t && "length" in t) {
    !(function(e2) {
      if (!e2) throw new Error("Assertion Failed");
    })("string" != typeof n && "length" in n);
    for (var r = 0, o = t.length; r < o; ++r) re(e, t[r], n[r]);
  } else {
    var s = t.indexOf(".");
    if (-1 !== s) {
      var i = t.substr(0, s), a = t.substr(s + 1);
      if ("" === a) void 0 === n ? Array.isArray(e) ? isNaN(parseInt(i)) || e.splice(parseInt(i), 1) : delete e[i] : e[i] = n;
      else {
        var l = e[i];
        l && (function(e2, t2) {
          return ne.call(e2, t2);
        })(e, i) || (l = e[i] = {}), re(l, a, n);
      }
    } else void 0 === n ? Array.isArray(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
  }
}
var oe = "undefined" != typeof self && "undefined" != typeof crypto ? (e, t = crypto.getRandomValues.bind(crypto)) => {
  const n = new Uint8Array(e);
  return t(n), self.btoa(String.fromCharCode.apply(null, n));
} : "undefined" != typeof Buffer ? (e, t = se) => {
  const n = Buffer.alloc(e);
  return t(n), n.toString("base64");
} : () => {
  throw new Error("No implementation of randomString was found");
};
function se(e) {
  for (let t = 0; t < e.length; ++t) e[t] = Math.floor(256 * Math.random());
}
function ie(e) {
  return "string" == typeof e || !!(Array.isArray(e) && e.some(((e2) => ie(e2))) && e.every(ae));
}
function ae(e) {
  return "string" == typeof e || "number" == typeof e || Array.isArray(e) && e.every(ae);
}
function le(e, t, n) {
  const r = e[t] || (e[t] = {}), o = n.keys.map(((e2) => "string" == typeof e2 ? e2 : JSON.stringify(e2)));
  switch (n.type) {
    case "insert":
    case "upsert":
      o.forEach(((e2, t2) => {
        r[e2] = { type: "ups", val: n.values[t2] };
      }));
      break;
    case "update":
    case "modify":
      o.forEach(((e2, t2) => {
        const o2 = "update" === n.type ? n.changeSpecs[t2] : n.changeSpec, s = r[e2];
        if (s) switch (s.type) {
          case "ups":
            for (const [e3, t3] of Object.entries(o2)) re(s.val, e3, t3);
            break;
          case "del":
            break;
          case "upd":
            Object.assign(s.mod, o2);
        }
        else r[e2] = { type: "upd", mod: o2 };
      }));
      break;
    case "delete":
      o.forEach(((e2) => {
        r[e2] = { type: "del" };
      }));
  }
  return e;
}
function ce(e, t) {
  for (const { table: n, muts: r } of t) for (const t2 of r) le(e, n, t2);
}
function ue(e) {
  return ee(this, arguments, (function* () {
    var t, n, r, o;
    let s = 0, i = new Uint8Array(4), a = 0, l = [], c = 0;
    try {
      for (var u, d = true, f = te(e); !(t = (u = yield Q(f.next())).done); d = true) {
        o = u.value, d = false;
        const e2 = o, t2 = new DataView(e2.buffer, e2.byteOffset, e2.byteLength);
        let n2 = 0;
        for (; n2 < e2.byteLength; ) switch (s) {
          case 0:
            if (n2 + 4 > e2.byteLength) {
              for (const t3 of e2.slice(n2)) {
                if (4 === a) break;
                i[a++] = t3, ++n2;
              }
              if (a < 4) break;
            } else if (a > 0 && a < 4) for (const t3 of e2.slice(n2, n2 + 4 - a)) i[a++] = t3, ++n2;
          case 1:
            c = 4 === a ? new DataView(i.buffer, 0, 4).getUint32(0, false) : t2.getUint32(n2, false), a ? a = 0 : n2 += 4;
          case 2:
            if (n2 >= e2.byteLength) {
              s = 2;
              break;
            }
            if (n2 + c > e2.byteLength) l.push(e2.slice(n2)), c -= e2.byteLength - n2, s = 2, n2 = e2.byteLength;
            else {
              if (l.length > 0) {
                const t3 = new Uint8Array(l.reduce(((e3, t4) => e3 + t4.byteLength), c));
                let r2 = 0;
                for (const e3 of l) t3.set(e3, r2), r2 += e3.byteLength;
                t3.set(e2.slice(n2, n2 + c), r2), l = [], yield yield Q(t3);
              } else yield yield Q(e2.slice(n2, n2 + c));
              n2 += c, s = 0;
            }
        }
      }
    } catch (e2) {
      n = { error: e2 };
    } finally {
      try {
        d || t || !(r = f.return) || (yield Q(r.call(f)));
      } finally {
        if (n) throw n.error;
      }
    }
  }));
}
var de = false;
function fe(e, t) {
  return Z(this, void 0, void 0, (function* () {
    try {
      const n = yield navigator.serviceWorker.ready;
      if ("push" === t && n.sync && (yield n.sync.register(`dexie-cloud:${e.name}`)), !n.active) throw new Error("Failed to trigger sync - there's no active service worker");
      return void n.active.postMessage({ type: "dexie-cloud-sync", dbName: e.name, purpose: t });
    } catch (e2) {
      de || (de = true);
    }
  }));
}
function pe(e, t) {
  e.cloud.usingServiceWorker ? fe(e, t) : e.localSyncEvent.next({ purpose: t });
}
var ye = "fromBase64" in Uint8Array;
var he = "toBase64" in Uint8Array.prototype;
var ve = "undefined" != typeof Buffer ? (e) => Buffer.from(e, "base64") : ye ? (e) => Uint8Array.fromBase64(e) : (e) => {
  const t = atob(e), n = t.length, r = new Uint8Array(n);
  for (var o = 0; o < n; o++) r[o] = t.charCodeAt(o);
  return r;
};
var me = "undefined" != typeof Buffer ? (e) => ArrayBuffer.isView(e) ? Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64") : Buffer.from(e).toString("base64") : he ? (e) => (ArrayBuffer.isView(e) ? e : new Uint8Array(e)).toBase64() : (e) => {
  const t = ArrayBuffer.isView(e) ? e : new Uint8Array(e), n = [];
  for (let e2 = 0, r = t.length; e2 < r; e2 += 4096) {
    const r2 = t.subarray(e2, e2 + 4096);
    n.push(String.fromCharCode.apply(null, r2));
  }
  return btoa(n.join(""));
};
var be = class extends Error {
  constructor({ title: e, message: t, messageCode: n, messageParams: r }) {
    super(t), this.name = "TokenErrorResponseError", this.title = e, this.messageCode = n, this.messageParams = r;
  }
};
function ge(t, n) {
  return new Promise(((r, o) => {
    const s = Object.assign(Object.assign({ submitLabel: "Submit", cancelLabel: "Cancel" }, n), { onSubmit: (e) => {
      t.next(void 0), r(e);
    }, onCancel: () => {
      t.next(void 0), o(new import_wrapper_default.AbortError("User cancelled"));
    } });
    t.next(s);
  }));
}
function _e(e, t, ...n) {
  return ge(e, { type: "message-alert", title: t, alerts: n, fields: {}, submitLabel: "OK", cancelLabel: null });
}
function we(e, t, n) {
  return Z(this, void 0, void 0, (function* () {
    let r = n || "";
    for (; !r || !/^[\w-+.]+@([\w-]+\.)+[\w-]{2,10}(\sas\s[\w-+.]+@([\w-]+\.)+[\w-]{2,10})?$/.test(r); ) r = (yield ge(e, { type: "email", title: t, alerts: r ? [{ type: "error", messageCode: "INVALID_EMAIL", message: "Please enter a valid email address", messageParams: {} }] : [], fields: { email: { type: "email", placeholder: "you@somedomain.com" } } })).email;
    return r;
  }));
}
function ke(e, t, n) {
  return Z(this, void 0, void 0, (function* () {
    const r = [{ type: "info", messageCode: "OTP_SENT", message: "A One-Time password has been sent to {email}", messageParams: { email: t } }];
    n && r.push(n);
    const { otp: o } = yield ge(e, { type: "otp", title: "Enter OTP", alerts: r, fields: { otp: { type: "otp", label: "OTP", placeholder: "Paste OTP here" } } });
    return o;
  }));
}
function Se(e) {
  return Z(this, void 0, void 0, (function* () {
    var t, n, r;
    const o = yield e.getCurrentUser(), { accessToken: s, accessTokenExpiration: i, refreshToken: a, refreshTokenExpiration: l, claims: c } = o;
    if (!s) return null;
    if ((null !== (t = null == i ? void 0 : i.getTime()) && void 0 !== t ? t : 1 / 0) > Date.now() && "ok" === ((null === (n = o.license) || void 0 === n ? void 0 : n.status) || "ok")) return o;
    if (!a) throw new Error("Refresh token missing");
    if ((null !== (r = null == l ? void 0 : l.getTime()) && void 0 !== r ? r : 1 / 0) <= Date.now()) throw new Error("Refresh token has expired");
    const u = yield Ie(e.cloud.options.databaseUrl, o);
    return yield e.table("$logins").update(c.sub, { accessToken: u.accessToken, accessTokenExpiration: u.accessTokenExpiration, claims: u.claims, license: u.license, data: u.data }), u;
  }));
}
function xe(t, n, r, o, s) {
  return Z(this, void 0, void 0, (function* () {
    return n.accessToken && n.accessTokenExpiration.getTime() > Date.now() ? n : n.refreshToken && (!n.refreshTokenExpiration || n.refreshTokenExpiration.getTime() > Date.now()) ? yield Ie(t, n) : yield (function(t2, n2, r2, o2) {
      return Z(this, void 0, void 0, (function* () {
        if (!crypto.subtle) throw "undefined" != typeof location && "http:" === location.protocol ? new Error("Dexie Cloud Addon needs to use WebCrypto, but your browser has disabled it due to being served from an insecure location. Please serve it from https or http://localhost:<port> (See https://stackoverflow.com/questions/46670556/how-to-enable-crypto-subtle-for-unsecure-origins-in-chrome/46671627#46671627)") : new Error("This browser does not support WebCrypto.");
        const { privateKey: s2, publicKey: i } = yield crypto.subtle.generateKey({ name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: { name: "SHA-256" } }, false, ["sign", "verify"]);
        if (!s2 || !i) throw new Error("Could not generate RSA keypair");
        t2.nonExportablePrivateKey = s2;
        const a = (function(e) {
          const t3 = me(e);
          return (function(e2) {
            let t4 = "-----BEGIN PUBLIC KEY-----\n";
            for (; e2.length > 0; ) t4 += e2.substring(0, 64) + "\n", e2 = e2.substring(64);
            return t4 += "-----END PUBLIC KEY-----", t4;
          })(t3);
        })(yield crypto.subtle.exportKey("spki", i));
        t2.publicKey = i;
        try {
          const e = yield n2({ public_key: a, hints: o2 });
          if ("error" === e.type) throw new be(e);
          if ("tokens" !== e.type) throw new Error(`Unexpected response type from token endpoint: ${e.type}`);
          return t2.accessToken = e.accessToken, t2.accessTokenExpiration = new Date(e.accessTokenExpiration), t2.refreshToken = e.refreshToken, e.refreshTokenExpiration && (t2.refreshTokenExpiration = new Date(e.refreshTokenExpiration)), t2.userId = e.claims.sub, t2.email = e.claims.email, t2.name = e.claims.name, t2.claims = e.claims, t2.license = { type: e.userType, status: e.claims.license || "ok" }, t2.data = e.data, null != e.evalDaysLeft && (t2.license.evalDaysLeft = e.evalDaysLeft), null != e.userValidUntil && (t2.license.validUntil = new Date(e.userValidUntil)), e.alerts && e.alerts.length > 0 && (yield ge(r2, { type: "message-alert", title: "Authentication Alert", fields: {}, alerts: e.alerts })), t2;
        } catch (t3) {
          if (t3 instanceof be) throw yield _e(r2, t3.title, { type: "error", messageCode: t3.messageCode, message: t3.message, messageParams: {} }), t3;
          let n3 = "We're having a problem authenticating right now.";
          if (t3 instanceof TypeError) {
            n3 = void 0 !== typeof navigator && !navigator.onLine ? "You seem to be offline. Please connect to the internet and try again." : import_wrapper_default.debug || "undefined" != typeof location && ("localhost" === location.hostname || "127.0.0.1" === location.hostname) ? `Could not connect to server. Please verify that your origin '${location.origin}' is whitelisted using \`npx dexie-cloud whitelist\`` : "Could not connect to server. Please verify the connection.", yield _e(r2, "Authentication Failed", { type: "error", messageCode: "GENERIC_ERROR", message: n3, messageParams: {} }).catch((() => {
            }));
          }
          throw t3;
        }
      }));
    })(n, r, o, s);
  }));
}
function Ie(e, t) {
  return Z(this, void 0, void 0, (function* () {
    if (!t.refreshToken) throw new Error("Cannot refresh token - refresh token is missing.");
    if (!t.nonExportablePrivateKey) throw new Error("login.nonExportablePrivateKey is missing - cannot sign refresh token without a private key.");
    const n = Date.now(), r = "RSASSA-PKCS1-v1_5", o = new TextEncoder().encode(t.refreshToken + n), s = yield crypto.subtle.sign(r, t.nonExportablePrivateKey, o), i = me(s), a = { grant_type: "refresh_token", refresh_token: t.refreshToken, scopes: ["ACCESS_DB"], signature: i, signing_algorithm: r, time_stamp: n }, l = yield fetch(`${e}/token`, { body: JSON.stringify(a), method: "post", headers: { "Content-Type": "application/json" }, mode: "cors" });
    if (200 !== l.status) throw new Error(`RefreshToken: Status ${l.status} from ${e}/token`);
    const c = yield l.json();
    if ("error" === c.type) throw new be(c);
    return t.accessToken = c.accessToken, t.accessTokenExpiration = c.accessTokenExpiration ? new Date(c.accessTokenExpiration) : void 0, t.claims = c.claims, t.license = { type: c.userType, status: c.claims.license || "ok" }, null != c.evalDaysLeft && (t.license.evalDaysLeft = c.evalDaysLeft), null != c.userValidUntil && (t.license.validUntil = new Date(c.userValidUntil)), c.data && (t.data = c.data), t;
  }));
}
var Oe = /* @__PURE__ */ new WeakMap();
var Ee = class _Ee {
  constructor(e, t) {
    Oe.set(this, e), Object.assign(this, t);
  }
  static load(e, t) {
    return e.table("$logins").get(t).then(((n) => new _Ee(e, n || { userId: t, claims: { sub: t }, lastLogin: /* @__PURE__ */ new Date(0) })));
  }
  save() {
    return Z(this, void 0, void 0, (function* () {
      Oe.get(this).table("$logins").put(this);
    }));
  }
};
var Ce = { userId: "unauthorized", name: "Unauthorized", claims: { sub: "unauthorized" }, lastLogin: /* @__PURE__ */ new Date(0) };
try {
  Object.freeze(Ce), Object.freeze(Ce.claims);
} catch (e) {
}
function je(e, t) {
  return firstValueFrom(from(e).pipe(filter(t)));
}
function Te(e) {
  return Z(this, void 0, void 0, (function* () {
    const t = yield Ue(e);
    if (t) {
      if (!(yield (function(e2, t2, n) {
        return Z(this, void 0, void 0, (function* () {
          const r = [{ type: "warning", messageCode: "LOGOUT_CONFIRMATION", message: "{numUnsyncedChanges} unsynced changes will get lost!\n                Logout anyway?", messageParams: { currentUserId: t2, numUnsyncedChanges: n.toString() } }];
          return yield ge(e2, { type: "logout-confirmation", title: "Confirm Logout", alerts: r, fields: {}, submitLabel: "Confirm logout", cancelLabel: "Cancel" }).then((() => true)).catch((() => false));
        }));
      })(e.cloud.userInteraction, e.cloud.currentUserId, t))) throw new Error("User cancelled logout due to unsynced changes");
      yield Ue(e, { deleteUnsyncedData: true });
    }
  }));
}
function Ue(e) {
  return Z(this, arguments, void 0, (function* (e2, { deleteUnsyncedData: t = false } = {}) {
    const [n, r] = yield e2.dx.transaction("rw", e2.dx.tables, ((n2) => Z(this, void 0, void 0, (function* () {
      const r2 = n2.idbtrans;
      r2.disableChangeTracking = true, r2.disableAccessControl = true;
      const o = n2.storeNames.filter(((e3) => e3.endsWith("_mutations"))), s = (yield Promise.all(o.map(((e3) => n2.table(e3).count())))).reduce(((e3, t2) => e3 + t2), 0);
      if (s > 0 && !t) return [s, false];
      e2.$syncState.delete("syncState");
      for (const t2 of e2.dx.tables) "$jobs" !== t2.name && "$syncState" !== t2.name && t2.clear();
      return [s, true];
    }))));
    return r && (yield je(e2.cloud.currentUser, ((e3) => e3.userId === Ce.userId)), yield e2.cloud.sync({ purpose: "pull", wait: true })), n;
  }));
}
var Ae = class extends Error {
  constructor(e, t) {
    super(t || `${e.status} ${e.statusText}`), this.httpStatus = e.status;
  }
  get name() {
    return "HttpError";
  }
};
function Pe(e, ...t) {
  globalThis.console[e](...t);
}
function $e(e, t) {
  return Z(this, void 0, void 0, (function* () {
    var n;
    const r = yield e.getCurrentUser(), o = r.userId;
    if (r.isLoggedIn && (!t || !t.email && !t.userId)) {
      if ("ok" === ((null === (n = r.license) || void 0 === n ? void 0 : n.status) || "ok") && r.accessToken && (!r.accessTokenExpiration || r.accessTokenExpiration.getTime() > Date.now())) return false;
      if (r.refreshToken && (!r.refreshTokenExpiration || r.refreshTokenExpiration.getTime() > Date.now())) return yield Se(e), false;
    }
    const s = new Ee(e, { claims: {}, lastLogin: /* @__PURE__ */ new Date(0) });
    return yield xe(e.cloud.options.databaseUrl, s, e.cloud.options.fetchTokens || (function(e2) {
      const { userInteraction: t2 } = e2.cloud;
      return function(n2) {
        return Z(this, arguments, void 0, (function* ({ public_key: n3, hints: r2 }) {
          var o2;
          let s2;
          const i = null === (o2 = e2.cloud.options) || void 0 === o2 ? void 0 : o2.databaseUrl;
          if (!i) throw new Error("No database URL given.");
          if ("demo" === (null == r2 ? void 0 : r2.grant_type)) s2 = { demo_user: yield we(t2, "Enter a demo user email", (null == r2 ? void 0 : r2.email) || (null == r2 ? void 0 : r2.userId)), grant_type: "demo", scopes: ["ACCESS_DB"], public_key: n3 };
          else if ((null == r2 ? void 0 : r2.otpId) && r2.otp) s2 = { grant_type: "otp", otp_id: r2.otpId, otp: r2.otp, scopes: ["ACCESS_DB"], public_key: n3 };
          else {
            const e3 = yield we(t2, "Enter email address", null == r2 ? void 0 : r2.email);
            s2 = /@demo.local$/.test(e3) ? { demo_user: e3, grant_type: "demo", scopes: ["ACCESS_DB"], public_key: n3 } : { email: e3, grant_type: "otp", scopes: ["ACCESS_DB"] };
          }
          const a = yield fetch(`${i}/token`, { body: JSON.stringify(s2), method: "post", headers: { "Content-Type": "application/json", mode: "cors" } });
          if (200 !== a.status) {
            const e3 = yield a.text();
            throw yield _e(t2, "Token request failed", { type: "error", messageCode: "GENERIC_ERROR", message: e3, messageParams: {} }).catch((() => {
            })), new Ae(a, e3);
          }
          const l = yield a.json();
          if ("tokens" === l.type || "error" === l.type) return l;
          if ("otp" === s2.grant_type && "email" in s2) {
            if ("otp-sent" !== l.type) throw new Error(`Unexpected response from ${i}/token`);
            const e3 = yield ke(t2, s2.email), r3 = Object.assign(Object.assign({}, s2), { otp: e3 || "", otp_id: l.otp_id, public_key: n3 });
            let o3 = yield fetch(`${i}/token`, { body: JSON.stringify(r3), method: "post", headers: { "Content-Type": "application/json" }, mode: "cors" });
            for (; 401 === o3.status; ) {
              const e4 = yield o3.text();
              r3.otp = yield ke(t2, s2.email, { type: "error", messageCode: "INVALID_OTP", message: e4, messageParams: {} }), o3 = yield fetch(`${i}/token`, { body: JSON.stringify(r3), method: "post", headers: { "Content-Type": "application/json" }, mode: "cors" });
            }
            if (200 !== o3.status) {
              const e4 = yield o3.text();
              throw new Ae(o3, e4);
            }
            return yield o3.json();
          }
          throw new Error(`Unexpected response from ${i}/token`);
        }));
      };
    })(e), e.cloud.userInteraction, t), o !== Ce.userId && s.userId !== o && (yield Te(e)), yield (function(e2, t2) {
      return Z(this, void 0, void 0, (function* () {
        const n2 = e2.table("$logins");
        yield e2.transaction("rw", n2, ((e3) => Z(this, void 0, void 0, (function* () {
          const e4 = yield n2.toArray();
          yield Promise.all(e4.filter(((e5) => e5.userId !== t2.userId && e5.isLoggedIn)).map(((e5) => (e5.isLoggedIn = false, n2.put(e5))))), t2.isLoggedIn = true, t2.lastLogin = /* @__PURE__ */ new Date();
          try {
            yield t2.save();
          } catch (e5) {
            try {
              "DataCloneError" === e5.name && (Pe("debug", "Login context property names:", Object.keys(t2)), Pe("debug", "Login context property names:", Object.keys(t2)), Pe("debug", "Login context:", t2), Pe("debug", "Login context JSON:", JSON.stringify(t2)));
            } catch (e6) {
            }
            throw e5;
          }
        })))), yield je(e2.cloud.currentUser, ((e3) => e3.userId === t2.userId));
      }));
    })(e, s), pe(e, "pull"), s.userId !== o;
  }));
}
var De = {};
var Le = "undefined" != typeof self && self.document && "undefined" != typeof navigator && navigator.serviceWorker;
Le && Le.ready.then(((e) => De.registration = e)), "undefined" != typeof self && "clients" in self && !self.document && addEventListener("message", ((e) => {
  var t, n;
  (null === (n = null === (t = e.data) || void 0 === t ? void 0 : t.type) || void 0 === n ? void 0 : n.startsWith("sw-broadcast-")) && [...self.clients.matchAll({ includeUncontrolled: true })].forEach(((t2) => {
    var n2;
    return t2.id !== (null === (n2 = e.source) || void 0 === n2 ? void 0 : n2.id) && t2.postMessage(e.data);
  }));
}));
var Re = class {
  constructor(e) {
    this.name = e;
  }
  subscribe(e) {
    if (!Le) return () => {
    };
    const t = (t2) => {
      var n;
      (null === (n = t2.data) || void 0 === n ? void 0 : n.type) === `sw-broadcast-${this.name}` && e(t2.data.message);
    };
    return Le.addEventListener("message", t), () => Le.removeEventListener("message", t);
  }
  postMessage(e) {
    var t;
    "object" == typeof self.clients ? [...self.clients.matchAll({ includeUncontrolled: true })].forEach(((t2) => t2.postMessage({ type: `sw-broadcast-${this.name}`, message: e }))) : De.registration && (null === (t = De.registration.active) || void 0 === t || t.postMessage({ type: `sw-broadcast-${this.name}`, message: e }));
  }
};
var Ne = globalThis["lbc-events"] || (globalThis["lbc-events"] = /* @__PURE__ */ new Map());
var Be = class extends Observable {
  constructor(e) {
    const t = "undefined" == typeof BroadcastChannel ? new Re(e) : new BroadcastChannel(e);
    super(((n) => {
      function r(e2) {
        n.next(e2.detail);
      }
      function o(e2) {
        n.next(e2.data);
      }
      let s;
      !(function(e2, t2) {
        Ne.has(e2) ? Ne.get(e2).push(t2) : Ne.set(e2, [t2]);
      })(`lbc-${e}`, r);
      try {
        t instanceof Re ? s = t.subscribe(((e2) => n.next(e2))) : t.addEventListener("message", o);
      } catch (e2) {
      }
      return () => {
        !(function(e2, t2) {
          const n2 = Ne.get(e2);
          if (n2) {
            const e3 = n2.indexOf(t2);
            -1 !== e3 && n2.splice(e3, 1);
          }
        })(`lbc-${e}`, r), t instanceof Re ? s() : t.removeEventListener("message", o);
      };
    })), this.name = e, this.bc = t;
  }
  next(e) {
    this.bc.postMessage(e);
    !(function(e2) {
      const t = Ne.get(e2.type);
      t && t.forEach(((t2) => {
        try {
          t2(e2);
        } catch (e3) {
        }
      }));
    })(new CustomEvent(`lbc-${this.name}`, { detail: e }));
  }
};
function Me(e) {
  return Z(this, arguments, void 0, (function* ({ realms: e2, inviteRealms: t }) {
    const n = JSON.stringify([...e2.map(((e3) => ({ realmId: e3, accepted: true }))), ...t.map(((e3) => ({ realmId: e3, accepted: false })))].sort(((e3, t2) => e3.realmId < t2.realmId ? -1 : e3.realmId > t2.realmId ? 1 : 0))), r = new TextEncoder().encode(n), o = yield crypto.subtle.digest("SHA-1", r);
    return me(o);
  }));
}
function We(e) {
  return Object.entries(e.cloud.schema || {}).filter((([, { markedForSync: e2 }]) => e2)).map((([t]) => e.tables.filter((({ name: e2 }) => e2 === t))[0])).filter(((e2) => e2));
}
function Fe(e) {
  return `$${e}_mutations`;
}
function Ke(e) {
  var t;
  const n = null === (t = /^\$(.*)_mutations$/.exec(e)) || void 0 === t ? void 0 : t[1];
  if (!n) throw new Error(`Given mutationTable ${e} is not correct`);
  return n;
}
var Ve = [].concat;
function He(e) {
  return Ve.apply([], e);
}
function ze(e, t) {
  return Z(this, arguments, void 0, (function* (e2, t2, { since: n = {}, limit: r = 1 / 0 } = {}) {
    const o = yield Promise.all(e2.map(((e3) => Z(this, void 0, void 0, (function* () {
      const t3 = Ke(e3.name), o2 = n[t3];
      let s2 = o2 ? e3.where("rev").above(o2) : e3;
      r < 1 / 0 && (s2 = s2.limit(r));
      let i2 = yield s2.toArray();
      i2 = (function(e4) {
        return e4 = e4.map(((e5) => {
          if ("modify" === e5.type && null === e5.criteria.index) {
            const t4 = Object.assign(Object.assign({}, e5), { criteria: void 0, changeSpec: void 0, type: "update", keys: e5.keys, changeSpecs: [e5.changeSpec] });
            return delete t4.criteria, delete t4.changeSpec, t4;
          }
          return e5;
        })), e4;
      })(i2), i2 = (function(e4) {
        const t4 = /* @__PURE__ */ new Map();
        for (const n2 of e4) if ("update" === n2.type) {
          if (1 !== n2.keys.length || 1 !== n2.changeSpecs.length) continue;
          const e5 = "" + n2.keys[0], r2 = n2.changeSpecs[0];
          if (Object.values(r2).some(((e6) => "object" == typeof e6 && e6 && "@@propmod" in e6))) continue;
          let o3 = t4.get(e5);
          o3 ? o3.push({ txid: n2.txid, updateSpec: r2 }) : t4.set(e5, [{ txid: n2.txid, updateSpec: r2 }]);
        }
        return e4 = e4.filter(((e5) => {
          if ("update" !== e5.type) return true;
          if (1 !== e5.keys.length || 1 !== e5.changeSpecs.length) return true;
          const n2 = new Set(Object.keys(e5.changeSpecs[0])), r2 = "" + e5.keys[0], o3 = t4.get(r2);
          for (let t5 = o3.length - 1; t5 >= 0; --t5) {
            const { txid: r3, updateSpec: s3 } = o3[t5];
            if (r3 === e5.txid) break;
            for (const e6 of Object.keys(s3)) n2.delete(e6);
          }
          return 0 !== n2.size;
        })), e4;
      })(i2);
      return i2.map(((e4) => ({ table: t3, mut: e4 })));
    }))))), s = He(o).sort(((e3, t3) => e3.mut.txid === t3.mut.txid ? e3.mut.opNo - t3.mut.opNo : e3.mut.ts - t3.mut.ts)), i = [];
    let a = null, l = null;
    for (const { table: e3, mut: t3 } of s) a && a.table === e3 && l === t3.txid ? a.muts.push(t3) : (a = { table: e3, muts: [t3] }, l = t3.txid, i.push(a));
    return i;
  }));
}
function qe(e) {
  const t = new Uint8Array(e);
  if ("undefined" != typeof crypto) crypto.getRandomValues(t);
  else for (let n = 0; n < e; n++) t[n] = Math.floor(256 * Math.random());
  if ("undefined" != typeof Buffer && Buffer.from) return Buffer.from(t).toString("base64");
  if ("undefined" != typeof btoa) return btoa(String.fromCharCode.apply(null, t));
  throw new Error("No btoa or Buffer available");
}
var { toString: Je } = {};
var Ge = { replace: function(e) {
  const t = Object.keys(e);
  let n = null;
  for (let e2 = 0, r2 = t.length; e2 < r2; ++e2) "$" === t[e2][0] && (n = n || [], n.push(t[e2]));
  if (!n) return e;
  const r = __spreadValues({}, e);
  for (const e2 of n) delete r[e2];
  for (const t2 of n) r["$" + t2] = e[t2];
  return r;
} };
function Ye(...e) {
  const t = e.reduce(((e2, t2) => __spreadValues(__spreadValues({}, e2), t2)), e.reduce(((e2, t2) => __spreadValues(__spreadValues({}, t2), e2)), {})), n = /* @__PURE__ */ new WeakMap();
  return { stringify(e2, r, o) {
    const s = JSON.stringify(e2, (function(e3) {
      const o2 = this[e3], s2 = (function(e4) {
        const r2 = typeof e4;
        switch (typeof e4) {
          case "object":
          case "function": {
            if (null === e4) return null;
            const r3 = Object.getPrototypeOf(e4);
            if (!r3) return Ge;
            let s3 = n.get(r3);
            if (void 0 !== s3) return s3;
            const i = (o3 = e4, Je.call(o3).slice(8, -1)), a = Object.entries(t).find((([t2, n2]) => {
              var r4, o4;
              return null !== (o4 = null === (r4 = null == n2 ? void 0 : n2.test) || void 0 === r4 ? void 0 : r4.call(n2, e4, i)) && void 0 !== o4 ? o4 : t2 === i;
            }));
            return s3 = null == a ? void 0 : a[1], s3 || (s3 = Array.isArray(e4) ? null : "function" == typeof e4 ? t.function || null : Ge), n.set(r3, s3), s3;
          }
          default:
            return t[r2];
        }
        var o3;
      })(o2);
      return s2 ? s2.replace(o2, r, t) : o2;
    }), o);
    return s;
  }, parse(e2, n2) {
    const r = [];
    return JSON.parse(e2, (function(e3, o) {
      const s = null == o ? void 0 : o.$t;
      if (s) {
        const e4 = t[s];
        o = e4 ? e4.revive(o, n2, t) : o;
      }
      let i = r[r.length - 1];
      if (i && i[0] === o) {
        o = __spreadValues({}, o);
        for (const e4 of i[1]) delete o[e4];
        for (const [e4, t2] of Object.entries(i[2])) o[e4] = t2;
        r.pop();
      }
      if (void 0 === o || "$" === e3[0] && "$t" !== e3) {
        let t2, n3;
        i = r[r.length - 1], i && i[0] === this ? (t2 = i[1], n3 = i[2]) : r.push([this, t2 = [], n3 = {}]), "$" === e3[0] && "$t" !== e3 ? (t2.push(e3), n3[e3.substr(1)] = o) : n3[e3] = void 0;
      }
      return o;
    }));
  } };
}
var Ze = { Blob: { test: (e, t) => "Blob" === t, replace: (e, t) => {
  const n = t.length;
  return t.push(e), { $t: "Blob", mimeType: e.type, i: n };
}, revive: ({ i: e, mimeType: t }, n) => new Blob([n[e]], { type: t }) } };
var Xe = { number: { replace: (e) => {
  switch (true) {
    case isNaN(e):
      return { $t: "number", v: "NaN" };
    case e === 1 / 0:
      return { $t: "number", v: "Infinity" };
    case e === -1 / 0:
      return { $t: "number", v: "-Infinity" };
    default:
      return e;
  }
}, revive: ({ v: e }) => Number(e) } };
var Qe = { bigint: { replace: (e) => ({ $t: "bigint", v: "" + e }), revive: (e) => BigInt(e.v) } };
var et = { Date: { replace: (e) => ({ $t: "Date", v: isNaN(e.getTime()) ? "NaN" : e.toISOString() }), revive: ({ v: e }) => new Date("NaN" === e ? NaN : Date.parse(e)) } };
var tt = { Set: { replace: (e) => ({ $t: "Set", v: Array.from(e.entries()) }), revive: ({ v: e }) => new Set(e) } };
var nt = { Map: { replace: (e) => ({ $t: "Map", v: Array.from(e.entries()) }), revive: ({ v: e }) => new Map(e) } };
var rt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : void 0;
var ot = ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "DataView", "BigInt64Array", "BigUint64Array"].reduce(((e, t) => __spreadProps(__spreadValues({}, e), { [t]: { replace: (e2, n, r) => ({ $t: t, v: r.ArrayBuffer.replace(0 === e2.byteOffset && e2.byteLength === e2.buffer.byteLength ? e2.buffer : e2.buffer.slice(e2.byteOffset, e2.byteOffset + e2.byteLength), n, r).v }), revive: ({ v: e2 }, n, r) => {
  const o = rt[t];
  return o && new o(r.ArrayBuffer.revive({ v: e2 }, n, r));
} } })), {});
function st(e) {
  return (function(e2) {
    for (var t = "", n = 0, r = e2.length; n < r; n++) t += lt[e2[n]];
    return t;
  })(me(e));
}
function it(e) {
  return ve((function(e2) {
    if ("string" != typeof e2) throw new Error("invalid decoder input: " + e2);
    for (var t = "", n = 0, r = e2.length; n < r; n++) t += at[e2[n]];
    return t;
  })(e));
}
var at = { "-": "=", 0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J", A: "K", B: "L", C: "M", D: "N", E: "O", F: "P", G: "Q", H: "R", I: "S", J: "T", K: "U", L: "V", M: "W", N: "X", O: "Y", P: "Z", Q: "a", R: "b", S: "c", T: "d", U: "e", V: "f", W: "g", X: "h", Y: "i", Z: "j", _: "k", a: "l", b: "m", c: "n", d: "o", e: "p", f: "q", g: "r", h: "s", i: "t", j: "u", k: "v", l: "w", m: "x", n: "y", o: "z", p: "0", q: "1", r: "2", s: "3", t: "4", u: "5", v: "6", w: "7", x: "8", y: "9", z: "+", "|": "/" };
var lt = {};
for (const e of Object.keys(at)) lt[at[e]] = e;
var ct = { ArrayBuffer: { replace: (e) => ({ $t: "ArrayBuffer", v: st(e) }), revive: ({ v: e }) => {
  const t = it(e);
  return t.buffer.byteLength === t.byteLength ? t.buffer : t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
} } };
var ut = class {
  constructor(e, t) {
    this.buf = e, this.type = t;
  }
};
function dt(e) {
  const t = new XMLHttpRequest();
  if (t.overrideMimeType("text/plain; charset=x-user-defined"), t.open("GET", URL.createObjectURL(e), false), t.send(), 200 !== t.status && 0 !== t.status) throw new Error("Bad Blob access: " + t.status);
  return t.responseText;
}
function ft(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; ++n) t[n] = e.charCodeAt(n);
  return t.buffer;
}
var pt = { Blob: { test: (e, t) => "Blob" === t || e instanceof ut, replace: (e) => ({ $t: "Blob", v: me(e instanceof ut ? e.buf : ft(dt(e))), type: e.type }), revive: ({ type: e, v: t }) => {
  const n = ve(t);
  return void 0 !== typeof Blob ? new Blob([n]) : new ut(n.buffer, e);
} } };
var yt = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, Xe), Qe), et), tt), nt), ot), ct), pt);
function ht(e) {
  return new Promise(((t, n) => {
    const r = new FileReader();
    r.onabort = (e2) => n(new Error("file read aborted")), r.onerror = (e2) => n(e2.target.error), r.onload = (e2) => t(e2.target.result), r.readAsArrayBuffer(e);
  }));
}
var vt = { undefined: { replace: () => ({ $t: "undefined" }), revive: () => {
} } };
var mt = { File: { test: (e, t) => "File" === t, replace: (e) => ({ $t: "File", v: me(ft(dt(e))), type: e.type, name: e.name, lastModified: new Date(e.lastModified).toISOString() }), revive: ({ type: e, v: t, name: n, lastModified: r }) => {
  const o = ve(t);
  return new File([o], n, { type: e, lastModified: new Date(r).getTime() });
} } };
var bt = "function" == typeof BigInt && "bigint" == typeof BigInt(0);
var gt = class {
  toString() {
    return this.v;
  }
  constructor(e) {
    this.v = e;
  }
};
var _t = bt ? {} : { bigint: { test: (e) => e instanceof gt, replace: (e) => Object.assign({ $t: "bigint" }, e), revive: ({ v: e }) => new gt(e) } };
var wt = Object.assign(Object.assign(Object.assign(Object.assign({}, vt), _t), mt), { PropModification: { test: (e) => e instanceof PropModification, replace: (e) => Object.assign({ $t: "PropModification" }, e["@@propmod"]), revive: (e) => {
  var n = (function(e2, t) {
    var n2 = {};
    for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n2[r] = e2[r]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e2); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[o]) && (n2[r[o]] = e2[r[o]]);
    }
    return n2;
  })(e, ["$t"]);
  return new PropModification(n);
} } });
var kt = Ye(yt, wt);
var St = (function(...e) {
  const t = Ye(yt, Ze, ...e);
  return { toBinary(e2) {
    const [t2, n] = this.stringify(e2), r = new ArrayBuffer(4);
    return new DataView(r).setUint32(0, t2.size), new Blob([r, t2, n]);
  }, stringify(e2) {
    const n = [], r = t.stringify(e2, n), o = new Blob(n.map(((e3) => {
      const t2 = new ArrayBuffer(4);
      return new DataView(t2).setUint32(0, "byteLength" in e3 ? e3.byteLength : e3.size), new Blob([t2, e3]);
    })));
    return [o, r];
  }, parse(e2, n) {
    return __async(this, null, function* () {
      let r = 0;
      const o = [], s = yield ht(n), i = new DataView(s);
      for (; r < s.byteLength; ) {
        const e3 = i.getUint32(r);
        r += 4;
        const t2 = s.slice(r, r + e3);
        r += e3, o.push(t2);
      }
      return t.parse(e2, o);
    });
  }, fromBinary(e2) {
    return __async(this, null, function* () {
      const t2 = new DataView(yield ht(e2.slice(0, 4))).getUint32(0), n = e2.slice(4, t2 + 4), r = yield (function(e3) {
        return new Promise(((t3, n2) => {
          const r2 = new FileReader();
          r2.onabort = (e4) => n2(new Error("file read aborted")), r2.onerror = (e4) => n2(e4.target.error), r2.onload = (e4) => t3(e4.target.result), r2.readAsText(e3);
        }));
      })(e2.slice(t2 + 4));
      return yield this.parse(r, n);
    });
  } };
})(wt);
function xt(t, n, r) {
  const o = [];
  for (let s of r) {
    const { table: r2, muts: i } = s, a = t.tables.find(((e) => e.name === r2));
    if (!a) throw new Error(`Internal error: table ${r2} not found in DBCore schema`);
    const { primaryKey: l } = a;
    let c = s;
    i.forEach(((t2, r3) => {
      const o2 = !l.outbound && ("upsert" === t2.type || "insert" === t2.type);
      t2.keys.forEach(((t3, i2) => {
        if (Array.isArray(t3)) {
          c === s && (c = It(s, o2));
          const e = c.muts[r3], n2 = JSON.stringify(t3);
          e.keys[i2] = n2;
        } else if ("#" === t3[0]) {
          c === s && (c = It(s, o2));
          const a2 = c.muts[r3];
          if (!n.isLoggedIn) throw new Error("Internal error: Cannot sync private IDs before authenticated");
          const u = `${t3}:${n.userId}`;
          a2.keys[i2] = u, o2 && import_wrapper_default.setByKeyPath(a2.values[i2], l.keyPath, u);
        }
      }));
    })), o.push(c);
  }
  return o;
}
function It(e, t) {
  return Object.assign(Object.assign({}, e), { muts: t ? e.muts.map(((e2) => "insert" !== e2.type && "upsert" !== e2.type || !e2.values ? Object.assign(Object.assign({}, e2), { keys: e2.keys.slice() }) : Object.assign(Object.assign({}, e2), { keys: e2.keys.slice(), values: e2.values.slice() }))) : e.muts.map(((e2) => Object.assign(Object.assign({}, e2), { keys: e2.keys.slice() }))) });
}
var Ot = /* @__PURE__ */ new WeakMap();
function Et(e) {
  return Z(this, void 0, void 0, (function* () {
    var t, n;
    const r = (null !== (n = null === (t = Ot.get(e)) || void 0 === t ? void 0 : t.getTime()) && void 0 !== n ? n : 0) - Date.now();
    r > 0 && (yield new Promise(((e2) => setTimeout(e2, r))));
  }));
}
function Ct(e, t, n, r, o, s, i, a, l) {
  return Z(this, void 0, void 0, (function* () {
    const c = { Accept: "application/json, application/x-bison, application/x-bison-stream", "Content-Type": "application/tson" }, u = yield Se(o), d = null == u ? void 0 : u.accessToken;
    d && (c.Authorization = `Bearer ${d}`);
    const f = { v: 2, dbID: null == n ? void 0 : n.remoteDbId, clientIdentity: a, schema: i || {}, lastPull: n ? { serverRevision: n.serverRevision, yServerRevision: n.yServerRevision, realms: n.realms, inviteRealms: n.inviteRealms } : void 0, baseRevs: r, changes: xt(o.dx.core.schema, l, e), y: t, dxcv: o.cloud.version };
    o.syncStateChangedEvent.next({ phase: "pushing" });
    const p = kt.stringify(f), y = yield fetch(`${s}/sync`, { method: "post", headers: c, credentials: "include", body: p });
    if (o.syncStateChangedEvent.next({ phase: "pulling" }), (function(e2, t2) {
      const n2 = t2.headers.get("Ratelimit-Limit"), r2 = t2.headers.get("Ratelimit-Remaining"), o2 = t2.headers.get("Ratelimit-Reset");
      if (n2 && r2 && o2) {
        const t3 = Number(n2), s2 = Math.max(0, Number(r2)), i2 = Number(o2);
        if (s2 < t3 / 2) {
          const t4 = Math.ceil(i2 / (s2 + 1));
          Ot.set(e2, new Date(Date.now() + 1e3 * t4));
        } else Ot.delete(e2);
      }
    })(o, y), !y.ok) throw new Ae(y);
    if ("application/x-bison" === y.headers.get("content-type")) return St.fromBinary(yield y.blob());
    {
      const e2 = yield y.text();
      return kt.parse(e2);
    }
  }));
}
function jt(t) {
  if (null == t ? void 0 : t.cancelled) throw new import_wrapper_default.AbortError("Operation was cancelled");
}
var Tt = false;
function Ut(e, t, n, r) {
  return Z(this, void 0, void 0, (function* () {
    yield e.$baseRevs.bulkPut(Object.keys(t).filter(((e2) => t[e2].markedForSync)).map(((e2) => ({ tableName: e2, clientRev: (n[e2] || 0) + 1, serverRev: r })))), yield e.$baseRevs.where("tableName").noneOf(Object.keys(t).filter(((e2) => t[e2].markedForSync))).delete();
  }));
}
function At(e, t = {}) {
  for (const { table: n, muts: r } of e) {
    const e2 = r.length > 0 ? r[r.length - 1].rev : null;
    t[n] = e2 || t[n] || 0;
  }
  return t;
}
function Pt(t, r, o) {
  return Z(this, void 0, void 0, (function* () {
    const s = yield t.bulkGet(r), i = [], a = [];
    r.forEach(((r2, l) => {
      const c = s[l];
      if (c) {
        for (const [s2, i2] of Object.entries(o[l])) if (s2 === t.schema.primKey.keyPath) {
          if (0 !== cmp(i2, r2)) throw new Error("Cannot change primary key");
        } else import_wrapper_default.setByKeyPath(c, s2, i2);
        i.push(r2), a.push(c);
      }
    })), yield null == t.schema.primKey.keyPath ? t.bulkPut(a, i) : t.bulkPut(a);
  }));
}
function $t(t, n) {
  return Z(this, void 0, void 0, (function* () {
    for (const { table: r, muts: o } of t) {
      if (!n.dx._allTables[r]) continue;
      const t2 = n.table(r), { primaryKey: s } = t2.core.schema, i = (e) => {
        switch (e[0]) {
          case "[":
            if (e.endsWith("]")) try {
              return JSON.parse(e);
            } catch (e2) {
            }
            return e;
          case "#":
            return e.endsWith(":" + n.cloud.currentUserId) ? e.substr(0, e.length - n.cloud.currentUserId.length - 1) : e;
          default:
            return e;
        }
      };
      for (const n2 of o) {
        const r2 = n2.keys.map(i);
        switch (n2.type) {
          case "insert":
            s.outbound ? yield t2.bulkAdd(n2.values, r2) : (r2.forEach(((t3, r3) => {
              import_wrapper_default.setByKeyPath(n2.values[r3], s.keyPath, t3);
            })), yield t2.bulkAdd(n2.values));
            break;
          case "upsert":
            s.outbound ? yield t2.bulkPut(n2.values, r2) : (r2.forEach(((t3, r3) => {
              import_wrapper_default.setByKeyPath(n2.values[r3], s.keyPath, t3);
            })), yield t2.bulkPut(n2.values));
            break;
          case "modify":
            1 === r2.length ? yield t2.update(r2[0], n2.changeSpec) : yield t2.where(":id").anyOf(r2).modify(n2.changeSpec);
            break;
          case "update":
            yield Pt(t2, r2, n2.changeSpecs);
            break;
          case "delete":
            yield t2.bulkDelete(r2);
        }
      }
    }
  }));
}
"undefined" != typeof self && "undefined" != typeof navigator && (Tt = navigator.onLine, self.addEventListener("online", (() => Tt = true)), self.addEventListener("offline", (() => Tt = false)));
var Dt = "dexie-cloud-syncer";
function Lt(e, t) {
  return e.where("i").between(t, 1 / 0, true).toArray();
}
function Rt(e, t, n) {
  var r, o, s;
  if (!e.dx._allTables[t]) return;
  const i = null === (s = null === (o = null === (r = e.table(t)) || void 0 === r ? void 0 : r.schema.yProps) || void 0 === o ? void 0 : o.find(((e2) => e2.prop === n))) || void 0 === s ? void 0 : s.updatesTable;
  return i && e.dx._allTables[i] ? e.table(i) : void 0;
}
function Nt(e, t) {
  return Z(this, void 0, void 0, (function* () {
    var r;
    const o = {};
    let s, i = false;
    for (const a of e) try {
      switch (a.type) {
        case "u-s": {
          const e2 = Rt(t, a.table, a.prop);
          if (e2) {
            const t2 = { k: a.k, u: a.u };
            a.r && (t2.r = a.r, s = a.r), o[e2.name] = yield e2.add(t2);
          }
          break;
        }
        case "u-ack": {
          const e2 = Rt(t, a.table, a.prop);
          e2 && (yield t.transaction("rw", e2, ((t2) => Z(this, void 0, void 0, (function* () {
            let n = yield t2.table(e2.name).get(Dt);
            yield t2.table(e2.name).put(Object.assign(Object.assign({}, n || { i: Dt }), { unsentFrom: Math.max((null == n ? void 0 : n.unsentFrom) || 1, a.i + 1) }));
          })))));
          break;
        }
        case "u-reject": {
          const e2 = Rt(t, a.table, a.prop);
          if (!e2) break;
          const o2 = null === (r = yield e2.get(a.i)) || void 0 === r ? void 0 : r.k;
          if (null != o2) {
            yield t.transaction("rw", e2, ((t2) => (t2.idbtrans._rejecting_y_ypdate = true, e2.where("i").aboveOrEqual(a.i).filter(((e3) => 0 === cmp(e3.k, o2) && 1 == (1 & (e3.f || 0)))).delete())));
            const r2 = DexieYProvider2.getDocCache(t.dx).find(a.table, o2, a.prop);
            r2 && r2.destroy();
          }
          break;
        }
        case "in-sync": {
          const e2 = DexieYProvider2.getDocCache(t.dx).find(a.table, a.k, a.prop);
          e2 && !e2.isSynced && e2.emit("sync", [true, e2]);
          break;
        }
        case "y-complete-sync-done":
          s = a.yServerRev;
          break;
        case "outdated-server-rev":
          i = true;
      }
    } catch (e2) {
    }
    return { receivedUntils: o, resyncNeeded: i, yServerRevision: s };
  }));
}
var Bt = 1;
var Mt = 2;
var Wt = 3;
function Ft(t, n, r) {
  return Z(this, arguments, void 0, (function* (t2, n2, { yDownloadedRealms: r2, realms: o }) {
    if (r2 && o && o.every(((e) => "*" === r2[e]))) return;
    const s = yield Se(t2), i = { "Content-Type": "application/json", Accept: "application/octet-stream" };
    s && (i.Authorization = `Bearer ${s.accessToken}`);
    const a = yield fetch(`${n2}/y/download`, { body: kt.stringify({ downloadedRealms: r2 || {} }), method: "POST", headers: i, credentials: "include" });
    if (!a.ok) throw new Error(`Failed to download Yjs documents from server. Status: ${a.status}`);
    yield (function(e, ...t3) {
      return __async(this, null, function* () {
        var n3, r3, o2;
        let s2 = e();
        for (let e2 = 0; e2 < t3.length; e2++) s2 = t3[e2](s2);
        try {
          for (var i2, a2 = true, l = te(s2); !(n3 = (i2 = yield l.next()).done); a2 = true) i2.value, a2 = false;
        } catch (e2) {
          r3 = { error: e2 };
        } finally {
          try {
            a2 || n3 || !(o2 = l.return) || (yield o2.call(l));
          } finally {
            if (r3) throw r3.error;
          }
        }
      });
    })(/* @__PURE__ */ (function(e) {
      return function() {
        return ee(this, arguments, (function* () {
          if (!e.body) throw new Error("Response body is not readable");
          const t3 = e.body.getReader();
          try {
            for (; ; ) {
              const { done: e2, value: n3 } = yield Q(t3.read());
              if (e2) return yield Q(void 0);
              yield yield Q(n3);
            }
          } finally {
            t3.releaseLock();
          }
        }));
      };
    })(a), ue, (function(r3) {
      return ee(this, arguments, (function* () {
        var o2, s2, i2, a2;
        let l = null, c = null, u = null, h = [];
        function b(e) {
          return Z(this, void 0, void 0, (function* () {
            const r4 = h[h.length - 1];
            if (h.length > 0) {
              if (!l || !c || !u) throw new Error(`Protocol error from ${n2}/y/download`);
              const e2 = Rt(t2, c, u);
              e2 && (yield e2.bulkAdd(h)), h = [];
            }
            l && (c && u && r4 || e) && (yield t2.$syncState.update("syncState", ((t3) => {
              const n3 = t3.yDownloadedRealms || {};
              n3[l] = e ? "*" : { tbl: c, prop: u, key: r4.k }, t3.yDownloadedRealms = n3;
            })));
          }));
        }
        try {
          try {
            for (var g, _ = true, w = te(r3); !(o2 = (g = yield Q(w.next())).done); _ = true) {
              a2 = g.value, _ = false;
              const e = new Decoder(a2);
              for (; hasContent(e); ) switch (readUint8(e)) {
                case Bt:
                  yield Q(b(true)), l = readVarString(e);
                  break;
                case Mt:
                  yield Q(b(false)), c = readVarString(e), u = readVarString(e);
                  break;
                case Wt: {
                  const t3 = readAny(e), n3 = readVarUint8Array(e);
                  h.push({ k: t3, u: n3 });
                  break;
                }
              }
              yield Q(b(false));
            }
          } catch (e) {
            s2 = { error: e };
          } finally {
            try {
              _ || o2 || !(i2 = w.return) || (yield Q(i2.call(w)));
            } finally {
              if (s2) throw s2.error;
            }
          }
          yield Q(b(true));
        } catch (t3) {
          throw t3 instanceof import_wrapper_default.DexieError || (yield Q(b(false))), t3;
        }
      }));
    }));
  }));
}
var Kt = "currentSyncWorker";
function Vt(e, t, n, r) {
  return Ht(e, t, n, r).then(((t2) => ((null == r ? void 0 : r.justCheckIfNeeded) || e.syncStateChangedEvent.next({ phase: "in-sync" }), t2))).catch(((o) => Z(this, void 0, void 0, (function* () {
    return (null == r ? void 0 : r.justCheckIfNeeded) ? Promise.reject(o) : Tt && (null == r ? void 0 : r.retryImmediatelyOnFetchError) && "TypeError" === (null == o ? void 0 : o.name) && /fetch/.test(null == o ? void 0 : o.message) ? (e.syncStateChangedEvent.next({ phase: "error", error: o }), yield new Promise(((e2) => setTimeout(e2, 500))), yield Vt(e, t, n, Object.assign(Object.assign({}, r), { retryImmediatelyOnFetchError: false }))) : (yield e.$syncState.update("syncState", { timestamp: /* @__PURE__ */ new Date(), error: "" + o }), e.syncStateChangedEvent.next({ phase: Tt ? "error" : "offline", error: new Error("" + (null == o ? void 0 : o.message) || o) }), Promise.reject(o));
  }))));
}
function Ht(e, t, n) {
  return Z(this, arguments, void 0, (function* (e2, t2, n2, { isInitialSync: r, cancelToken: o, justCheckIfNeeded: s, purpose: i } = { isInitialSync: false }) {
    var a;
    if (!(null === (a = e2.cloud.options) || void 0 === a ? void 0 : a.databaseUrl)) throw new Error("Internal error: sync must not be called when no databaseUrl is configured");
    const { databaseUrl: l } = t2, c = yield e2.getCurrentUser(), u = c.isLoggedIn ? We(e2) : [], d = u.map(((t3) => e2.table(Fe(t3.name)))), f = yield e2.getPersistedSyncState(), p = c.isLoggedIn, y = p ? (function(e3, t3) {
      const n3 = (null == t3 ? void 0 : t3.syncedTables) || [];
      return We(e3).filter(((e4) => !n3.includes(e4.name)));
    })(e2, f) : [];
    jt(o);
    const h = y.length > 0;
    if (h) {
      if (s) return true;
      yield e2.transaction("rw", y, ((e3) => Z(this, void 0, void 0, (function* () {
        e3.idbtrans.disableChangeTracking = true, e3.idbtrans.disableAccessControl = true, yield (function(e4, t3, n3) {
          return Z(this, void 0, void 0, (function* () {
            const r2 = new Set(n3 || []);
            for (const n4 of e4) "members" === n4.name ? yield n4.toCollection().modify(((e5) => {
              r2.has(e5.realmId) || e5.userId && e5.userId !== Ce.userId || (e5.userId = t3.userId);
            })) : "roles" === n4.name || ("realms" === n4.name ? yield n4.toCollection().modify(((e5) => {
              r2.has(e5.realmId) || void 0 !== e5.owner && e5.owner !== Ce.userId || (e5.owner = t3.userId);
            })) : yield n4.toCollection().modify(((e5) => {
              e5.realmId && r2.has(e5.realmId) || (e5.owner && e5.owner !== Ce.userId || (e5.owner = t3.userId), e5.realmId && e5.realmId !== Ce.userId || (e5.realmId = t3.userId));
            })));
          }));
        })(y, c, null == f ? void 0 : f.realms);
      })))), jt(o);
    }
    const [v, m, b, { yMessages: g, lastUpdateIds: _ }] = yield e2.transaction("r", e2.tables, (() => Z(this, void 0, void 0, (function* () {
      const t3 = yield e2.getPersistedSyncState();
      let r2 = yield e2.$baseRevs.toArray();
      r2 = r2.filter(((e3) => u.some(((t4) => t4.name === e3.tableName))));
      let s2 = yield ze(d, e2);
      const i2 = yield (function(e3, t4) {
        return Z(this, void 0, void 0, (function* () {
          const n3 = [], r3 = {};
          for (const o2 of t4) if (o2.schema.yProps) for (const t5 of o2.schema.yProps) {
            const s3 = e3.table(t5.updatesTable), i3 = yield s3.get(Dt), a2 = (null == i3 ? void 0 : i3.unsentFrom) || 1, l2 = (null == i3 ? void 0 : i3.receivedUntil) || 0, c2 = Math.min(a2, l2 + 1), u2 = yield Lt(s3, c2);
            u2.length > 0 && (r3[s3.name] = u2[u2.length - 1].i);
            const d2 = {};
            for (const e4 of u2) {
              const t6 = 1 == (1 & (e4.f || 0));
              if (t6 && e4.i < a2) continue;
              const n4 = JSON.stringify(e4.k) + "/" + t6;
              let r4 = d2[n4];
              r4 ? (r4.u.push(e4.u), r4.i = Math.max(e4.i, r4.i)) : (d2[n4] = r4 = { i: e4.i, k: e4.k, isLocal: t6, u: [] }, r4.u.push(e4.u));
            }
            for (const { k: e4, isLocal: r4, u: s4, i: i4 } of Object.values(d2)) {
              const a3 = 1 === s4.length ? s4[0] : mergeUpdatesV2(s4);
              if (r4) n3.push({ type: "u-c", table: o2.name, prop: t5.prop, k: e4, u: a3, i: i4 });
              else {
                const r5 = encodeStateVectorFromUpdateV2(a3);
                n3.push({ type: "sv", table: o2.name, prop: t5.prop, k: e4, sv: r5 });
              }
            }
          }
          return { yMessages: n3, lastUpdateIds: r3 };
        }));
      })(e2, u);
      if (jt(o), h) {
        const e3 = [...(null == f ? void 0 : f.realms) || [], ...(null == f ? void 0 : f.inviteRealms) || []], a2 = yield (function(e4, t4, n3, r3) {
          return Z(this, void 0, void 0, (function* () {
            const o2 = `upload-${qe(8)}`;
            if (t4.isLoggedIn && e4.length > 0) {
              const s3 = new Set(r3 || []);
              return (yield Promise.all(e4.map(((e5) => Z(this, void 0, void 0, (function* () {
                const { extractKey: r4 } = e5.core.schema.primaryKey;
                if (!r4) return { table: e5.name, muts: [] };
                const i3 = n3[e5.name], a3 = (null == i3 ? void 0 : i3.generatedGlobalId) ? e5.filter(((e6) => {
                  return r4(e6), !s3.has(e6.realmId || "") && (t5 = r4(e6), !(n4 = null == i3 ? void 0 : i3.idPrefix) || "string" == typeof t5 && t5.startsWith(n4));
                  var t5, n4;
                })) : e5.filter(((e6) => {
                  const t5 = r4(e6);
                  return !s3.has(e6.realmId || "") && ie(t5);
                })), l2 = yield a3.toArray();
                if (l2.length > 0) {
                  const n4 = { type: "upsert", values: l2, keys: l2.map(r4), userId: t4.userId, txid: o2 };
                  return { table: e5.name, muts: [n4] };
                }
                return { table: e5.name, muts: [] };
              })))))).filter(((e5) => e5.muts.length > 0));
            }
            return [];
          }));
        })(y, c, n2, e3);
        return jt(o), s2 = s2.concat(a2), [s2, t3, r2, i2];
      }
      return [s2, t3, r2, i2];
    })))), w = v.some(((e3) => e3.muts.some(((e4) => e4.keys.length > 0)))) || g.some(((e3) => "u-c" === e3.type));
    if (s) return w;
    if ("push" === i && !w) return false;
    const k = At(v, null == m ? void 0 : m.latestRevisions), S = (null == m ? void 0 : m.clientIdentity) || oe(16);
    jt(o);
    const x = yield Ct(v, g, m, b, e2, l, n2, S, c), { done: I, newSyncState: O } = yield e2.transaction("rw", e2.tables, ((t3) => Z(this, void 0, void 0, (function* () {
      t3.idbtrans.disableChangeTracking = true, t3.idbtrans.disableAccessControl = true;
      for (const e3 of Object.keys(n2)) x.schema[e3] && (n2[e3] = x.schema[e3]);
      yield e2.$syncState.put(n2, "schema");
      const r2 = yield ze(d, e2, { since: k });
      for (const t4 of d) {
        const n3 = Ke(t4.name);
        if (r2.some(((e3) => e3.table === n3 && e3.muts.length > 0))) {
          if (k[n3]) {
            const r3 = k[n3] || 0;
            yield Promise.all([t4.where("rev").belowOrEqual(r3).delete(), e2.$baseRevs.where(":id").between([n3, -1 / 0], [n3, r3 + 1], true, true).reverse().offset(1).delete()]);
          }
        } else yield Promise.all([t4.clear(), e2.$baseRevs.where({ tableName: n3 }).delete()]);
      }
      At(r2, k), yield Ut(e2, n2, k, x.serverRevision);
      const o2 = yield e2.getPersistedSyncState();
      yield (function(e3, t4, n3) {
        return Z(this, void 0, void 0, (function* () {
          const r3 = /* @__PURE__ */ new Set(), o3 = /* @__PURE__ */ new Set(), s3 = n3 ? n3.realms : [], i3 = n3 ? n3.inviteRealms : [], a2 = new Set(t4.realms), l2 = new Set(t4.realms.concat(t4.inviteRealms));
          for (const e4 of s3) a2.has(e4) || (o3.add(e4), l2.has(e4) || r3.add(e4));
          for (const e4 of i3.concat(s3)) l2.has(e4) || r3.add(e4);
          if (r3.size > 0 || o3.size > 0) {
            const t5 = We(e3);
            for (const e4 of t5) {
              let t6 = ["realms", "members", "roles"].includes(e4.name) ? r3 : o3;
              0 !== t6.size && (e4.schema.indexes.some(((e5) => "realmId" === e5.keyPath || Array.isArray(e5.keyPath) && "realmId" === e5.keyPath[0])) ? yield e4.where("realmId").anyOf([...t6]).delete() : yield e4.filter(((e5) => !!(null == e5 ? void 0 : e5.realmId) && t6.has(e5.realmId))).delete());
            }
          }
          if (o3.size > 0 && (null == n3 ? void 0 : n3.yDownloadedRealms)) for (const e4 of o3) delete n3.yDownloadedRealms[e4];
        }));
      })(e2, x, o2);
      const s2 = o2 || { syncedTables: [], latestRevisions: {}, realms: [], inviteRealms: [], clientIdentity: S };
      p && (s2.syncedTables = u.map(((e3) => e3.name)).concat(y.map(((e3) => e3.name)))), s2.latestRevisions = k, s2.remoteDbId = x.dbId, s2.initiallySynced = true, s2.realms = x.realms, s2.inviteRealms = x.inviteRealms, s2.serverRevision = x.serverRevision, s2.yServerRevision = x.serverRevision, s2.timestamp = /* @__PURE__ */ new Date(), delete s2.error;
      const i2 = zt(x.changes, r2);
      if (yield $t(i2, e2), x.yMessages) {
        const { receivedUntils: t4, resyncNeeded: n3, yServerRevision: r3 } = yield Nt(x.yMessages, e2);
        r3 && (s2.yServerRevision = r3), yield (function(e3, t5, n4) {
          return Z(this, void 0, void 0, (function* () {
            var r4, o3, s3, i3, a2;
            const l2 = {};
            for (const [t6, n5] of Object.entries(e3)) null !== (r4 = l2[t6]) && void 0 !== r4 || (l2[t6] = {}), l2[t6].unsentFrom = n5 + 1;
            for (const [e4, n5] of Object.entries(t5)) null !== (o3 = l2[e4]) && void 0 !== o3 || (l2[e4] = {}), l2[e4].receivedUntil = n5;
            const c2 = Object.values(n4.dx._dbSchema).filter(((e4) => e4.yProps)).map(((e4) => e4.yProps.map(((e5) => e5.updatesTable)))).flat();
            for (const e4 of c2) {
              const t6 = l2[e4], r5 = null !== (s3 = null == t6 ? void 0 : t6.unsentFrom) && void 0 !== s3 ? s3 : 1, o4 = null !== (a2 = null !== (i3 = null == t6 ? void 0 : t6.receivedUntil) && void 0 !== i3 ? i3 : (yield n4.table(e4).where("i").between(1, 1 / 0).reverse().limit(1).primaryKeys())[0]) && void 0 !== a2 ? a2 : 0;
              yield n4.transaction("rw", e4, (() => Z(this, void 0, void 0, (function* () {
                const t7 = yield n4.table(e4).get(Dt);
                t7 ? (t7.unsentFrom = Math.max(r5, t7.unsentFrom || 1), t7.receivedUntil = Math.max(o4, t7.receivedUntil || 0), yield n4.table(e4).put(t7)) : yield n4.table(e4).add({ i: Dt, unsentFrom: r5, receivedUntil: o4 });
              }))));
            }
          }));
        })(_, t4, e2), n3 && (s2.yDownloadedRealms = {});
      }
      return e2.$syncState.put(s2, "syncState"), { done: 0 === r2.length, newSyncState: s2 };
    }))));
    if (!I) return yield Et(e2), yield Ht(e2, t2, n2, { isInitialSync: r, cancelToken: o });
    const E = Object.values(n2).some(((e3) => {
      var t3;
      return null === (t3 = e3.yProps) || void 0 === t3 ? void 0 : t3.length;
    })), C = !!x.yMessages;
    if (E && C) try {
      yield Ft(e2, l, O);
    } catch (e3) {
    }
    return e2.syncCompleteEvent.next(), false;
  }));
}
function zt(e, t) {
  const n = {};
  ce(n, e);
  const r = {};
  return ce(r, t), (function(e2, t2) {
    var n2, r2, o;
    for (const [s, i] of Object.entries(t2)) for (const [t3, a] of Object.entries(i)) switch (a.type) {
      case "ups":
        {
          const r3 = null === (n2 = e2[s]) || void 0 === n2 ? void 0 : n2[t3];
          if (r3) switch (r3.type) {
            case "ups":
            case "upd":
              delete e2[s][t3];
          }
        }
        break;
      case "del":
        null === (r2 = e2[s]) || void 0 === r2 || delete r2[t3];
        break;
      case "upd": {
        const n3 = null === (o = e2[s]) || void 0 === o ? void 0 : o[t3];
        if (n3) switch (n3.type) {
          case "ups":
            for (const [e3, t4] of Object.entries(a.mod)) re(n3.val, e3, t4);
            break;
          case "del":
            break;
          case "upd":
            for (const e3 of Object.keys(a.mod)) delete n3.mod[e3];
        }
        break;
      }
    }
  })(n, r), (function(e2, t2 = "") {
    t2 || (t2 = oe(16));
    const n2 = {};
    for (const [t3, r3] of Object.entries(e2)) for (const [e3, o] of Object.entries(r3)) {
      const r4 = n2[t3] || (n2[t3] = {});
      (r4[o.type] || (r4[o.type] = [])).push(Object.assign({ key: e3 }, o));
    }
    const r2 = [];
    for (const [e3, o] of Object.entries(n2)) {
      const n3 = { table: e3, muts: [] };
      for (const [e4, r3] of Object.entries(o)) switch (e4) {
        case "ups": {
          const e5 = { type: "upsert", keys: r3.map(((e6) => e6.key)), values: r3.map(((e6) => e6.val)), txid: t2 };
          n3.muts.push(e5);
          break;
        }
        case "upd": {
          const e5 = { type: "update", keys: r3.map(((e6) => e6.key)), changeSpecs: r3.map(((e6) => e6.mod)), txid: t2 };
          n3.muts.push(e5);
          break;
        }
        case "del": {
          const e5 = { type: "delete", keys: r3.map(((e6) => e6.key)), txid: t2 };
          n3.muts.push(e5);
          break;
        }
      }
      r2.push(n3);
    }
    return r2;
  })(n);
}
var qt = 10;
var Jt = 1e4;
var Gt = 1e3;
function Yt(t) {
  const n = [], r = new BehaviorSubject(true), o = new BehaviorSubject(null);
  let s = false, i = new Array(qt).fill(0);
  return o.subscribe((() => Z(this, void 0, void 0, (function* () {
    if (!s && n.length > 0) {
      s = true, i.shift(), i.push(Date.now()), r.next(false);
      try {
        yield (function() {
          return Z(this, void 0, void 0, (function* () {
            for (var r2, o2, s2, i2, a, l; n.length > 0; ) {
              const c = n.shift();
              try {
                yield firstValueFrom(t.cloud.syncState.pipe(filter((({ phase: e }) => "in-sync" === e || "error" === e))));
                const n2 = t.cloud.persistedSyncState.value;
                if (!c) continue;
                switch (c.type) {
                  case "token-expired":
                    const u = t.cloud.currentUser.value, d = yield Ie(t.cloud.options.databaseUrl, u);
                    yield t.table("$logins").update(u.userId, { accessToken: d.accessToken, accessTokenExpiration: d.accessTokenExpiration, claims: d.claims, license: d.license, data: d.data });
                    break;
                  case "realm-added":
                    (null === (r2 = null == n2 ? void 0 : n2.realms) || void 0 === r2 ? void 0 : r2.includes(c.realm)) || (null === (o2 = null == n2 ? void 0 : n2.inviteRealms) || void 0 === o2 ? void 0 : o2.includes(c.realm)) || (yield t.cloud.sync({ purpose: "pull", wait: true }));
                    break;
                  case "realm-accepted":
                    (null === (s2 = null == n2 ? void 0 : n2.realms) || void 0 === s2 ? void 0 : s2.includes(c.realm)) || (yield t.cloud.sync({ purpose: "pull", wait: true }));
                    break;
                  case "realm-removed":
                    ((null === (i2 = null == n2 ? void 0 : n2.realms) || void 0 === i2 ? void 0 : i2.includes(c.realm)) || (null === (a = null == n2 ? void 0 : n2.inviteRealms) || void 0 === a ? void 0 : a.includes(c.realm))) && (yield t.cloud.sync({ purpose: "pull", wait: true }));
                    break;
                  case "realms-changed":
                    yield t.cloud.sync({ purpose: "pull", wait: true });
                    break;
                  case "changes":
                    if ("error" === (null === (l = t.cloud.syncState.value) || void 0 === l ? void 0 : l.phase)) {
                      pe(t, "pull");
                      break;
                    }
                    yield t.transaction("rw", t.dx.tables, ((n3) => Z(this, void 0, void 0, (function* () {
                      n3.idbtrans.disableChangeTracking = true, n3.idbtrans.disableAccessControl = true;
                      const [r3, o3, s3] = yield Promise.all([t.getSchema(), t.getPersistedSyncState(), t.getCurrentUser()]);
                      if (!o3 || !r3 || !s3) return;
                      if (c.baseRev !== o3.serverRevision) return void ("string" != typeof c.baseRev || "bigint" != typeof o3.serverRevision && "object" != typeof o3.serverRevision || pe(t, "pull"));
                      if ((yield import_wrapper_default.waitFor(Me(o3))) !== c.realmSetHash) return void pe(t, "pull");
                      let i3 = [];
                      if (s3.isLoggedIn) {
                        const e = We(t).map(((e2) => t.table(Fe(e2.name))));
                        i3 = yield ze(e, t);
                      }
                      if (c.changes.length > 0) {
                        const e = zt(c.changes, i3);
                        yield $t(e, t);
                      }
                      o3.latestRevisions = At(i3, o3.latestRevisions), o3.serverRevision = c.newRev, yield Ut(t, r3, o3.latestRevisions, c.newRev), yield t.$syncState.put(o3, "syncState");
                    }))));
                }
              } catch (e) {
              }
            }
          }));
        })();
      } finally {
        i[i.length - 1] - i[0] < Jt && (yield new Promise(((e) => setTimeout(e, Gt)))), s = false, r.next(true);
      }
    }
  })))), { enqueue: function(e) {
    n.push(e), o.next(null);
  }, readyToServe: r };
}
var Zt = /* @__PURE__ */ new WeakMap();
var Xt = { members: "@id, [userId+realmId], [email+realmId], realmId", roles: "[realmId+name]", realms: "@realmId", $jobs: "", $syncState: "", $baseRevs: "[tableName+clientRev]", $logins: "claims.sub, lastLogin" };
var Qt = 0;
function en(e) {
  "vip" in e && (e = e.vip);
  let t = Zt.get(e.cloud);
  if (!t) {
    const n = new Subject();
    let r = new Be(`syncstatechanged-${e.name}`), o = new Be(`synccomplete-${e.name}`);
    n.id = ++Qt;
    let s = false;
    t = { get name() {
      return e.name;
    }, close: () => e.close(), transaction: e.transaction.bind(e), table: e.table.bind(e), get tables() {
      return e.tables;
    }, cloud: e.cloud, get $jobs() {
      return e.table("$jobs");
    }, get $syncState() {
      return e.table("$syncState");
    }, get $baseRevs() {
      return e.table("$baseRevs");
    }, get $logins() {
      return e.table("$logins");
    }, get realms() {
      return e.realms;
    }, get members() {
      return e.members;
    }, get roles() {
      return e.roles;
    }, get initiallySynced() {
      return s;
    }, localSyncEvent: n, get syncStateChangedEvent() {
      return r;
    }, get syncCompleteEvent() {
      return o;
    }, dx: e };
    const i = { getCurrentUser: () => t.$logins.toArray().then(((e2) => e2.find(((e3) => e3.isLoggedIn)) || Ce)), getPersistedSyncState: () => t.$syncState.get("syncState"), getSchema: () => t.$syncState.get("schema").then(((e2) => {
      if (e2) for (const r2 of t.tables) r2.schema.primKey && r2.schema.primKey.keyPath && e2[r2.name] && (e2[r2.name].primaryKey = "string" == typeof (n2 = r2.schema.primKey.keyPath) ? n2 : n2 ? "[" + [].join.call(n2, "+") + "]" : "");
      var n2;
      return e2;
    })), getOptions: () => t.$syncState.get("options"), setInitiallySynced(e2) {
      s = e2;
    }, reconfigure() {
      r = new Be(`syncstatechanged-${e.name}`), o = new Be(`synccomplete-${e.name}`);
    } };
    Object.assign(t, i), t.messageConsumer = Yt(t), t.messageProducer = new Subject(), Zt.set(e.cloud, t);
  }
  return t;
}
var tn = "undefined" != typeof InstallTrigger;
var nn = "undefined" != typeof navigator && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\/|Edge\//.test(navigator.userAgent);
var rn = nn ? [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] : NaN;
var on = nn && rn <= 605 || tn;
var sn = "undefined" != typeof self && "clients" in self && !self.document;
var { toString: an } = {};
function ln(e) {
  return an.call(e).slice(8, -1);
}
function cn(e, t) {
  var n;
  return "delete" === t.type ? t.keys : (null === (n = t.keys) || void 0 === n ? void 0 : n.slice()) || t.values.map(e.extractKey);
}
var un = /b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|y|z/i;
var dn = 0;
function fn(e, t) {
  const n = new Uint8Array(18), r = new Uint8Array(n.buffer, 0, 6), o = Date.now();
  dn >= o ? ++dn : dn = o, r[0] = dn / 1099511627776, r[1] = dn / 4294967296, r[2] = dn / 16777216, r[3] = dn / 65536, r[4] = dn / 256, r[5] = dn;
  const s = new Uint8Array(n.buffer, 6);
  crypto.getRandomValues(s);
  return e + st(new Uint8Array(n.buffer)) + (t || "");
}
function pn(t) {
  return { stack: "dbcore", name: "idGenerationMiddleware", level: 1, create: (n) => Object.assign(Object.assign({}, n), { table: (r) => {
    const o = n.table(r);
    return Object.assign(Object.assign({}, o), { mutate: (n2) => {
      var s, i;
      const a = n2.trans;
      if ("versionchange" === a.mode && (a.disableChangeTracking = true, a.disableAccessControl = true), a.disableChangeTracking) return o.mutate(n2);
      if ("add" === n2.type || "put" === n2.type) {
        const a2 = null === (s = t.cloud.schema) || void 0 === s ? void 0 : s[r];
        if (null == a2 ? void 0 : a2.generatedGlobalId) {
          if ((null === (i = t.cloud.options) || void 0 === i ? void 0 : i.databaseUrl) && !t.initiallySynced) {
            const e = cn(o.schema.primaryKey, n2);
            return o.getMany({ keys: e, trans: n2.trans, cache: "immutable" }).then(((t2) => {
              if (t2.length < e.length) throw new Error("Unable to create new objects without an initial sync having been performed.");
              return o.mutate(n2);
            }));
          }
          return (function(n3, s2) {
            let i2 = null;
            const a3 = cn(o.schema.primaryKey, n3);
            return a3.forEach(((l, c) => {
              if (void 0 === l) {
                const r2 = n3.values[c].realmId || t.cloud.currentUserId, l2 = r2.substr(r2.length - 3);
                a3[c] = fn(s2, l2), o.schema.primaryKey.outbound || (i2 || (i2 = n3.values.slice()), i2[c] = import_wrapper_default.deepClone(i2[c]), import_wrapper_default.setByKeyPath(i2[c], o.schema.primaryKey.keyPath, a3[c]));
              } else if ("string" != typeof l || !l.startsWith(s2) && !l.startsWith("#" + s2)) throw new import_wrapper_default.ConstraintError(`The ID "${l}" is not valid for table "${r}". Primary '@' keys requires the key to be prefixed with "${s2}" (or "#${s2}).
If you want to generate IDs programmatically, remove '@' from the schema to get rid of this constraint. Dexie Cloud supports custom IDs as long as they are random and globally unique.`);
            })), o.mutate(Object.assign(Object.assign({}, n3), { keys: a3, values: i2 || n3.values }));
          })(n2, a2.idPrefix);
        }
        if (null == a2 ? void 0 : a2.markedForSync) {
          cn(o.schema.primaryKey, n2).forEach(((t2, n3) => {
            if (!ie(t2)) {
              const n4 = Array.isArray(t2) ? t2.map(ln).join(",") : ln(t2);
              throw new import_wrapper_default.ConstraintError(`Invalid primary key type ${n4} for table ${r}. Tables marked for sync has primary keys of type string or Array of string (and optional numbers)`);
            }
          }));
        }
      }
      return o.mutate(n2);
    } });
  } }) };
}
var yn = 0;
function hn(e, t) {
  return function(n) {
    const { readers: r, writers: o } = n.trans[t] || (n.trans[t] = { writers: [], readers: [] }), s = o.length, i = (s > 0 ? o[s - 1].then((() => e(n)), (() => e(n))) : e(n)).finally((() => {
      r.splice(r.indexOf(i));
    }));
    return r.push(i), i;
  };
}
function vn(e, t) {
  return function(n) {
    const { readers: r, writers: o } = n.trans[t] || (n.trans[t] = { writers: [], readers: [] });
    let s = (o.length > 0 ? o[o.length - 1].then((() => e(n)), (() => e(n))) : r.length > 0 ? (i = r, new Promise(((e2) => {
      0 === i.length && e2([]);
      let t2 = i.length;
      const n2 = new Array(t2);
      i.forEach(((r2, o2) => Promise.resolve(r2).then(((e3) => n2[o2] = { status: "fulfilled", value: e3 }), ((e3) => n2[o2] = { status: "rejected", reason: e3 })).then((() => --t2 || e2(n2)))));
    }))).then((() => e(n))) : e(n)).finally((() => {
      o.shift();
    }));
    var i;
    return o.push(s), s;
  };
}
var mn = new BehaviorSubject(/* @__PURE__ */ new Set());
function bn(e) {
  var t, n, r, o;
  return (null === (t = e.cloud.options) || void 0 === t ? void 0 : t.disableEagerSync) || "ok" !== (null === (r = null === (n = e.cloud.currentUser.value) || void 0 === n ? void 0 : n.license) || void 0 === r ? void 0 : r.status) || !(null === (o = e.cloud.options) || void 0 === o ? void 0 : o.databaseUrl);
}
function gn({ currentUserObservable: e, db: t }) {
  return { stack: "dbcore", name: "MutationTrackingMiddleware", level: 1, create: (n) => {
    const o = new Set(n.schema.tables.map(((e2) => e2.name))), s = n.schema.tables.filter(((e2) => !/^\$/.test(e2.name))), i = /* @__PURE__ */ new Map();
    for (const e2 of s) {
      const t2 = `$${e2.name}_mutations`;
      o.has(t2) && i.set(e2.name, n.table(t2));
    }
    return Object.assign(Object.assign({}, n), { transaction: (r, o2) => {
      let s2;
      if ("readwrite" === o2) {
        const e2 = r.filter(((e3) => {
          var n2, r2;
          return null === (r2 = null === (n2 = t.cloud.schema) || void 0 === n2 ? void 0 : n2[e3]) || void 0 === r2 ? void 0 : r2.markedForSync;
        })).map(((e3) => Fe(e3)));
        s2 = n.transaction([...r, ...e2], o2);
      } else s2 = n.transaction(r, o2);
      if ("readwrite" === o2) {
        s2.txid = qe(16), s2.opCount = 0, s2.currentUser = e.value, mn.value.add(s2), mn.next(mn.value);
        const n2 = () => {
          s2.removeEventListener("complete", r2), s2.removeEventListener("error", n2), s2.removeEventListener("abort", n2), mn.value.delete(s2), mn.next(mn.value);
        }, r2 = () => {
          s2.mutationsAdded && !bn(t) && pe(t, "push"), n2();
        };
        s2.addEventListener("complete", r2), s2.addEventListener("error", n2), s2.addEventListener("abort", n2);
      }
      return s2;
    }, table: (e2) => {
      const o2 = n.table(e2);
      if (/^\$/.test(e2)) return e2.endsWith("_mutations") ? Object.assign(Object.assign({}, o2), { mutate: (e3) => ("add" !== e3.type && "put" !== e3.type || (e3.trans.mutationsAdded = true), o2.mutate(e3)) }) : "$logins" === e2 ? Object.assign(Object.assign({}, o2), { mutate: (e3) => o2.mutate(e3).then(((t2) => (e3.trans.mutationsAdded = true, t2))).catch(((e4) => Promise.reject(e4))) }) : o2;
      const { schema: s2 } = o2, a = i.get(e2);
      return a ? (function(e3) {
        const t2 = "$lock" + ++yn;
        return Object.assign(Object.assign({}, e3), { count: hn(e3.count, t2), get: hn(e3.get, t2), getMany: hn(e3.getMany, t2), openCursor: hn(e3.openCursor, t2), query: hn(e3.query, t2), mutate: vn(e3.mutate, t2) });
      })(Object.assign(Object.assign({}, o2), { mutate: (n2) => {
        var r, i2, a2;
        const c = n2.trans;
        return c.txid ? c.disableChangeTracking ? o2.mutate(n2) : (null === (i2 = null === (r = t.cloud.schema) || void 0 === r ? void 0 : r[e2]) || void 0 === i2 ? void 0 : i2.markedForSync) && (null === (a2 = c.currentUser) || void 0 === a2 ? void 0 : a2.isLoggedIn) ? "deleteRange" === n2.type ? o2.query({ query: { range: n2.range, index: s2.primaryKey }, trans: n2.trans, values: false }).then(((e3) => l({ type: "delete", keys: e3.result, trans: n2.trans, criteria: { index: null, range: n2.range } }))) : l(n2) : o2.mutate(n2) : o2.mutate(n2);
      } })) : o2;
      function l(n2) {
        var i2, l2;
        const c = n2.trans, u = null === (l2 = null === (i2 = t.cloud.options) || void 0 === i2 ? void 0 : i2.unsyncedProperties) || void 0 === l2 ? void 0 : l2[e2], { txid: d, currentUser: { userId: f } } = c, { type: p } = n2, y = ++c.opCount;
        function h(e3) {
          if (!u) return e3;
          let t2 = e3;
          for (const n3 of Object.keys(e3)) u.some(((e4) => n3 === e4 || n3.startsWith(e4 + "."))) && (t2 === e3 && (t2 = Object.assign({}, e3)), delete t2[n3]);
          return t2;
        }
        return o2.mutate(n2).then(((e3) => {
          var t2;
          const { numFailures: o3, failures: i3 } = e3;
          let l3 = "delete" === p ? n2.keys : e3.results, v = "values" in n2 ? n2.values : [], m = "changeSpec" in n2 ? n2.changeSpec : void 0, b = "updates" in n2 ? n2.updates : void 0, g = !(!b || !("upsert" in n2)) && n2.upsert;
          if (o3 && (l3 = l3.filter(((e4, t3) => !i3[t3])), v = v.filter(((e4, t3) => !i3[t3]))), u) {
            if (v = v.map(((e4) => {
              const t3 = Object.assign({}, e4);
              for (const e5 of u) delete t3[e5];
              return t3;
            })), m && (m = h(m), 0 === Object.keys(m).length)) return e3;
            if (b) {
              let e4 = b.changeSpecs.map(h), t3 = { keys: [], changeSpecs: [] };
              const n3 = new RangeSet();
              let o4 = false;
              if (!g) {
                for (let r = 0, s3 = e4.length; r < s3; ++r) Object.keys(e4[r]).length > 0 ? (t3.keys.push(b.keys[r]), t3.changeSpecs.push(e4[r]), n3.addKey(b.keys[r])) : o4 = true;
                if (b = t3, o4) {
                  let e5 = [], t4 = [];
                  for (let r = 0, o5 = l3.length; r < o5; ++r) n3.hasKey(l3[r]) && (e5.push(l3[r]), t4.push(v[r]));
                  l3 = e5, v = t4;
                }
              }
            }
          }
          const _ = Date.now();
          let w = "criteria" in n2 && n2.criteria ? Object.assign(Object.assign({}, n2.criteria), { index: n2.criteria.index === s2.primaryKey.keyPath ? null : n2.criteria.index }) : void 0;
          if (u && (null == w ? void 0 : w.index)) {
            const e4 = null === (t2 = s2.indexes.find(((e5) => e5.name === w.index))) || void 0 === t2 ? void 0 : t2.keyPath;
            (e4 ? "string" == typeof e4 ? [e4] : e4 : []).some(((e5) => null == u ? void 0 : u.includes(e5))) && (w = void 0);
          }
          const k = "delete" === n2.type ? { type: "delete", ts: _, opNo: y, keys: l3, criteria: w, txid: d, userId: f } : "add" === n2.type ? { type: "insert", ts: _, opNo: y, keys: l3, txid: d, userId: f, values: v } : g ? { type: "upsert", ts: _, opNo: y, keys: l3, values: v, changeSpecs: b.changeSpecs.filter(((e4, t3) => !i3[t3])), txid: d, userId: f } : w && m ? { type: "modify", ts: _, opNo: y, keys: l3, criteria: w, changeSpec: m, txid: d, userId: f } : m ? { type: "update", ts: _, opNo: y, keys: l3, changeSpecs: l3.map((() => m)), txid: d, userId: f } : b ? { type: "update", ts: _, opNo: y, keys: b.keys, changeSpecs: b.changeSpecs, txid: d, userId: f } : { type: "upsert", ts: _, opNo: y, keys: l3, values: v, txid: d, userId: f };
          return "isAdditionalChunk" in n2 && n2.isAdditionalChunk && (k.isAdditionalChunk = true), l3.length > 0 || w ? a.mutate({ type: "add", trans: c, values: [k] }).then((() => (c.mutationsAdded = true, e3))) : e3;
        }));
      }
    } });
  } };
}
function _n(e, t) {
  return function(n, r) {
    var o;
    const s = Object.assign(Object.assign({}, Xt), n);
    Object.keys(Xt).forEach(((e2) => {
      const t2 = s[e2];
      if (null == t2) throw new Error(`Cannot delete table ${e2} as it is needed for access control of Dexie Cloud`);
      if (!n[e2]) return;
      const r2 = t2.split(",").map(((e3) => e3.trim())), o2 = Xt[e2].split(",").map(((e3) => e3.trim())), i2 = new Set(r2.map(((e3) => e3.replace(/([&*]|\+\+)/g, ""))));
      if (r2[0] !== o2[0]) throw new Error(`Cannot override primary key of table ${e2}. Please declare it as {${e2}: ${JSON.stringify(Xt[e2])}`);
      for (let t3 = 1; t3 < o2.length; ++t3) {
        const n2 = o2[t3];
        i2.has(n2.replace(/([&*]|\+\+)/g, "")) || (s[e2] += `,${n2}`);
      }
    }));
    const i = t.cloud.schema || (t.cloud.schema = {}), a = /* @__PURE__ */ new Set();
    Object.keys(s).forEach(((e2) => {
      const t2 = s[e2], n2 = i[e2] || (i[e2] = {});
      null != t2 ? (/^\@/.test(t2) && (s[e2] = s[e2].substr(1), n2.generatedGlobalId = true, n2.idPrefix = (function(e3, t3) {
        let n3 = e3[0].toLocaleLowerCase();
        for (let t4 = 1, o3 = e3.length; t4 < o3 && n3.length < 3; ++t4) (un.test(e3[t4]) || (r2 = e3[t4]) >= "A" && r2 <= "Z") && (n3 += e3[t4].toLowerCase());
        for (var r2, o2, s2; t3.has(n3); ) {
          if (/\d/g.test(n3)) {
            if (n3 = n3.substr(0, n3.length - 1) + (n3[n3.length - 1] + 1), !(n3.length > 3)) continue;
            n3 = n3.substr(0, 3);
          } else if (n3.length < 3) {
            n3 += "2";
            continue;
          }
          let e4 = 1, r3 = n3;
          for (; t3.has(r3) && e4 < 8; ) o2 = n3, r3 = (1 & (s2 = e4) ? o2[0].toUpperCase() : o2[0].toLowerCase()) + (2 & s2 ? o2[1].toUpperCase() : o2[1].toLowerCase()) + (4 & s2 ? o2[2].toUpperCase() : o2[2].toLowerCase()), ++e4;
          if (e4 < 8) n3 = r3;
          else {
            let e5 = n3.charCodeAt(2) + 1 & 127;
            n3 = n3.substr(0, 2) + String.fromCharCode(e5);
          }
        }
        return n3;
      })(e2, a), a.add(n2.idPrefix)), /^\$/.test(e2) || (s[`$${e2}_mutations`] = "++rev", n2.markedForSync = true), n2.deleted && (n2.deleted = false)) : (n2.deleted = true, n2.markedForSync = false, s[`$${e2}_mutations`] = null);
    }));
    const l = e.call(this, s, r);
    for (const [e2, t2] of Object.entries(r)) if (null === (o = t2.yProps) || void 0 === o ? void 0 : o.length) {
      const n2 = i[e2];
      n2 && (n2.yProps = t2.yProps.map(((e3) => e3.prop)));
    }
    return l;
  };
}
function wn(e, t, n) {
  return "undefined" != typeof navigator && navigator.locks ? navigator.locks.request(e.name + "|" + t, (() => n())) : n();
}
var kn = new BehaviorSubject(true);
var Sn = new BehaviorSubject(true);
kn.pipe(switchMap(((e) => e ? of(true) : of(false).pipe(delay(2e4)))), distinctUntilChanged()).subscribe(Sn);
var xn = "undefined" != typeof document ? fromEvent(document, "visibilitychange") : of({});
var In = xn.pipe(filter((() => "hidden" === document.visibilityState)));
var On = xn.pipe(filter((() => "visible" === document.visibilityState)));
var En = "undefined" != typeof window ? merge(On, fromEvent(window, "mousedown"), fromEvent(window, "mousemove"), fromEvent(window, "keydown"), fromEvent(window, "wheel"), fromEvent(window, "touchmove")) : of({});
"undefined" != typeof document && merge(of(true), In, En).pipe(map((() => "visible" === document.visibilityState)), tap(((e) => {
  kn.value !== e && kn.next(e);
})), switchMap(((e) => e ? of(0).pipe(delay(16e4), tap((() => kn.next(false)))) : of(0)))).subscribe((() => {
}));
var Cn = class extends Error {
  constructor() {
    super(...arguments), this.name = "TokenExpiredError";
  }
};
var jn = /* @__PURE__ */ new WeakMap();
var Tn = /* @__PURE__ */ new WeakMap();
function Un(e) {
  let t = Tn.get(e);
  return t || (t = new Subject(), Tn.set(e, t)), t;
}
var An = class extends Observable {
  constructor(e, t, n, r, o, s, i, a) {
    super(((l) => new $n(e, t, n, r, o, a, l, s, i)));
  }
};
var Pn = 0;
var $n = class extends Subscription {
  constructor(e, t, n, r, o, s, i, a, l) {
    super((() => this.teardown())), this.id = ++Pn, this.subscriptions = /* @__PURE__ */ new Set(), this.reconnecting = false, this.db = e, this.databaseUrl = e.cloud.options.databaseUrl, this.rev = t, this.yrev = n, this.realmSetHash = r, this.clientIdentity = o, this.user = s, this.subscriber = i, this.lastUserActivity = /* @__PURE__ */ new Date(), this.messageProducer = a, this.webSocketStatus = l, this.connect();
  }
  teardown() {
    this.disconnect();
  }
  disconnect() {
    if (this.webSocketStatus.next("disconnected"), this.pinger && (clearInterval(this.pinger), this.pinger = null), this.ws) try {
      this.ws.close();
    } catch (e) {
    }
    this.ws = null;
    for (const e of this.subscriptions) e.unsubscribe();
    this.subscriptions.clear();
  }
  reconnect() {
    if (!this.reconnecting) {
      this.reconnecting = true;
      try {
        this.disconnect();
      } catch (e) {
      }
      this.connect().catch((() => {
      })).then((() => this.reconnecting = false));
    }
  }
  connect() {
    return Z(this, void 0, void 0, (function* () {
      if (this.lastServerActivity = /* @__PURE__ */ new Date(), this.pauseUntil && this.pauseUntil > /* @__PURE__ */ new Date()) return;
      if (this.ws) throw new Error("Called connect() when a connection is already open");
      if (!this.databaseUrl) throw new Error("Cannot connect without a database URL");
      if (this.closed) return;
      const e = this.user.accessTokenExpiration;
      if (e && e < /* @__PURE__ */ new Date()) return void this.subscriber.error(new Cn());
      this.webSocketStatus.next("connecting"), this.pinger = setInterval((() => Z(this, void 0, void 0, (function* () {
        if (this.closed) this.teardown();
        else if (this.ws) try {
          this.ws.send(JSON.stringify({ type: "ping" })), setTimeout((() => {
            this.pinger && (this.closed ? this.teardown() : this.lastServerActivity < new Date(Date.now() - 2e4) && this.reconnect());
          }), 2e4);
        } catch (e2) {
          this.reconnect();
        }
        else this.reconnect();
      }))), 3e4);
      const t = new URL(this.databaseUrl);
      t.protocol = "http:" === t.protocol ? "ws" : "wss";
      const n = new URLSearchParams();
      if (this.subscriber.closed) return;
      n.set("v", "2"), this.rev && n.set("rev", this.rev), this.yrev && n.set("yrev", this.yrev), n.set("realmsHash", this.realmSetHash), n.set("clientId", this.clientIdentity), n.set("dxcv", this.db.cloud.version), this.user.accessToken && n.set("token", this.user.accessToken);
      const r = this.ws = new WebSocket(`${t}/changes?${n}`);
      r.binaryType = "arraybuffer", r.onclose = (e2) => {
        this.pinger && this.reconnect();
      }, r.onmessage = (e2) => {
        if (this.pinger) {
          this.lastServerActivity = /* @__PURE__ */ new Date();
          try {
            const t2 = "string" == typeof e2.data ? kt.parse(e2.data) : (function(e3) {
              const t3 = new Decoder(e3), n2 = readVarString(t3);
              if ("outdated-server-rev" === n2) return { type: n2 };
              if ("y-complete-sync-done" === n2) return { type: n2, yServerRev: readVarString(t3) };
              const r2 = readVarString(t3), o = readVarString(t3);
              switch (n2) {
                case "u-ack":
                case "u-reject":
                  return { type: n2, table: r2, prop: o, i: Number(readBigUint64(t3)) };
                default: {
                  const e4 = readAny(t3);
                  switch (n2) {
                    case "in-sync":
                    case "doc-close":
                      return { type: n2, table: r2, prop: o, k: e4 };
                    case "aware":
                      return { type: n2, table: r2, prop: o, k: e4, u: readVarUint8Array(t3) };
                    case "doc-open":
                      return { type: n2, table: r2, prop: o, k: e4, serverRev: readAny(t3), sv: readAny(t3) };
                    case "sv":
                      return { type: n2, table: r2, prop: o, k: e4, sv: readVarUint8Array(t3) };
                    case "u-c":
                      return { type: n2, table: r2, prop: o, k: e4, u: readVarUint8Array(t3), i: Number(readBigUint64(t3)) };
                    case "u-s":
                      return { type: n2, table: r2, prop: o, k: e4, u: readVarUint8Array(t3), r: t3.pos < t3.arr.length && readVarString(t3) || void 0 };
                    default:
                      throw new TypeError(`Unknown message type: ${n2}`);
                  }
                }
              }
            })(new Uint8Array(e2.data));
            if ("error" === t2.type) throw new Error(`Error message from dexie-cloud: ${t2.error}`);
            if ("aware" === t2.type) {
              const e3 = DexieYProvider2.getDocCache(this.db.dx).find(t2.table, t2.k, t2.prop);
              if (e3) {
                const n2 = ((e4) => jn.get(e4))(e3);
                n2 && applyAwarenessUpdate(n2, t2.u, "server");
              }
            } else if ("pong" === t2.type) ;
            else if ("doc-open" === t2.type) {
              const e3 = DexieYProvider2.getDocCache(this.db.dx).find(t2.table, t2.k, t2.prop);
              e3 && Un(e3).next();
            } else "u-ack" === t2.type || "u-reject" === t2.type || "u-s" === t2.type || "in-sync" === t2.type || "outdated-server-rev" === t2.type || "y-complete-sync-done" === t2.type ? Nt([t2], this.db).then(((e3) => Z(this, [e3], void 0, (function* ({ resyncNeeded: e4, yServerRevision: n2, receivedUntils: r2 }) {
              if (n2 && (yield this.db.$syncState.update("syncState", { yServerRevision: n2 })), "u-s" === t2.type && r2) {
                const e5 = Rt(this.db, t2.table, t2.prop);
                if (e5) {
                  const t3 = r2[e5.name];
                  t3 && (yield e5.update(Dt, { receivedUntil: t3 }));
                }
              }
              e4 && (yield this.db.cloud.sync({ purpose: "pull", wait: true }));
            })))) : this.subscriber.next(t2);
          } catch (e3) {
            this.subscriber.error(e3);
          }
        }
      };
      try {
        let e2 = false;
        yield new Promise(((t2, n2) => {
          r.onopen = (n3) => {
            e2 = true, t2(null);
          }, r.onerror = (t3) => {
            if (e2) this.reconnect();
            else {
              const e3 = t3.error || new Error("WebSocket Error");
              this.subscriber.error(e3), this.webSocketStatus.next("error"), n2(e3);
            }
          };
        })), this.subscriptions.add(this.messageProducer.subscribe(((e3) => {
          var t2, n2;
          this.closed || ("ready" === e3.type && "connected" !== this.webSocketStatus.value && this.webSocketStatus.next("connected"), "ready" === e3.type ? (this.rev = e3.rev, null === (t2 = this.ws) || void 0 === t2 || t2.send(kt.stringify(e3))) : null === (n2 = this.ws) || void 0 === n2 || n2.send((function(e4) {
            const t3 = new Encoder();
            switch (writeVarString(t3, e4.type), "table" in e4 && writeVarString(t3, e4.table), "prop" in e4 && writeVarString(t3, e4.prop), e4.type) {
              case "u-ack":
              case "u-reject":
                writeBigUint64(t3, BigInt(e4.i));
                break;
              case "outdated-server-rev":
                break;
              case "y-complete-sync-done":
                writeVarString(t3, e4.yServerRev);
                break;
              default:
                switch (writeAny(t3, e4.k), e4.type) {
                  case "aware":
                    writeVarUint8Array(t3, e4.u);
                    break;
                  case "doc-open":
                    writeAny(t3, e4.serverRev), writeAny(t3, e4.sv);
                    break;
                  case "doc-close":
                    break;
                  case "sv":
                    writeVarUint8Array(t3, e4.sv);
                    break;
                  case "u-c":
                    writeVarUint8Array(t3, e4.u), writeBigUint64(t3, BigInt(e4.i));
                    break;
                  case "u-s":
                    writeVarUint8Array(t3, e4.u), writeVarString(t3, e4.r || "");
                }
            }
            return toUint8Array(t3);
          })(e3)));
        }))), this.user.isLoggedIn && !bn(this.db) && this.subscriptions.add((function(e3) {
          const t2 = He(e3.tables.filter(((t3) => {
            var n2, r2;
            return (null === (r2 = null === (n2 = e3.cloud.schema) || void 0 === n2 ? void 0 : n2[t3.name]) || void 0 === r2 ? void 0 : r2.markedForSync) && t3.schema.yProps;
          })).map(((e4) => e4.schema.yProps.map(((t3) => ({ table: e4.name, ydocProp: t3.prop, updatesTable: t3.updatesTable }))))));
          return merge(...t2.map((({ table: t3, ydocProp: n2, updatesTable: r2 }) => {
            const s = e3.table(r2);
            return from(s.get(Dt)).pipe(switchMap(((e4) => {
              let r3 = (null == e4 ? void 0 : e4.unsentFrom) || 1;
              return from(liveQuery((() => Z(this, void 0, void 0, (function* () {
                return (yield Lt(s, r3)).filter(((e5) => e5.f && 1 & e5.f)).map(((e5) => ({ type: "u-c", table: t3, prop: n2, k: e5.k, u: e5.u, i: e5.i })));
              }))))).pipe(tap(((e5) => {
                e5.length > 0 && (r3 = e5.at(-1).i + 1);
              })));
            })));
          }))).pipe(mergeMap(((e4) => e4)));
        })(this.db).subscribe(this.db.messageProducer));
      } catch (e2) {
        this.pauseUntil = new Date(Date.now() + 6e4);
      }
    }));
  }
};
var Dn = class extends Error {
  constructor(e) {
    super("expired" === e ? "License expired" : "deactivated" === e ? "User deactivated" : "Invalid license"), this.name = "InvalidLicenseError", e && (this.license = e);
  }
};
function Ln(e) {
  return Z(this, void 0, void 0, (function* () {
    var e2;
    yield (e2 = 3e3, new Promise(((t) => setTimeout(t, e2)))), yield firstValueFrom(En);
  }));
}
function Rn(e) {
  return Z(this, void 0, void 0, (function* () {
    var t;
    return !(!(null === (t = e.cloud.options) || void 0 === t ? void 0 : t.databaseUrl) || !e.cloud.schema) && (yield Vt(e, e.cloud.options, e.cloud.schema, { justCheckIfNeeded: true }));
  }));
}
var Nn = /* @__PURE__ */ new WeakMap();
function Bn(e, t, n, r) {
  const o = Nn.get(e);
  if (o) {
    if (o.pull || "push" === (null == r ? void 0 : r.purpose)) return o.promise;
    {
      let s2 = false;
      const i = e.cloud.syncState.subscribe(((e2) => {
        "pulling" === e2.phase && (s2 = true);
      }));
      return o.promise.then((() => {
        i.unsubscribe();
      })).catch(((e2) => (i.unsubscribe(), Promise.reject(e2)))).then((() => {
        if (!s2) return Bn(e, t, n, r);
      }));
    }
  }
  const s = (function() {
    return Z(this, void 0, void 0, (function* () {
      try {
        yield Et(e), yield wn(e, Kt, (() => Vt(e, t, n, r))), Nn.delete(e);
      } catch (t2) {
        throw Nn.delete(e), t2;
      }
    }));
  })();
  return Nn.set(e, { promise: s, pull: "push" !== (null == r ? void 0 : r.purpose) }), s;
}
var Mn = 1e3;
function Wn(e, t, n) {
  let r = null, o = { cancelled: false }, s = 0, i = 0;
  function a(r2 = 1) {
    setTimeout((() => {
      const f = l ? "pull" : "push";
      i = Date.now(), Bn(e, t, n, { cancelToken: o, retryImmediatelyOnFetchError: true, purpose: f }).then((() => {
        if (o.cancelled) d();
        else if (l || c) return l = false, c = false, a();
        u = false, s = 0, i = 0;
      })).catch(((e2) => {
        if (o.cancelled) d(), u = false, s = 0, i = 0;
        else if (r2 < 5) {
          const e3 = [0, 20, 40, 300, 900][r2] * Mn;
          s = Date.now() + e3, i = 0, setTimeout((() => a(r2 + 1)), e3);
        } else u = false, s = 0, i = 0;
      }));
    }), 0);
  }
  let l = false, c = false, u = false;
  const d = () => {
    o.cancelled = true, r && r.unsubscribe();
  };
  return { start: () => {
    r = e.localSyncEvent.subscribe((({ purpose: e2 }) => {
      ((e3) => {
        o.cancelled || ("pull" === e3 && (l = true), "push" === e3 && (c = true), u ? s || i > 0 && Date.now() : (u = true, a()));
      })(e2 || "pull");
    }));
  }, stop: d };
}
function Fn(e, t) {
  if (e && t && t.unsyncedTables) for (const n of t.unsyncedTables) e[n] && (e[n].markedForSync = false);
}
var Kn;
var Vn;
var Hn;
var zn;
var qn;
var Jn = {};
var Gn = [];
var Yn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Zn(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Xn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Qn(e, t, n) {
  var r, o, s, i = {};
  for (s in t) "key" == s ? r = t[s] : "ref" == s ? o = t[s] : i[s] = t[s];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? Kn.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps) for (s in e.defaultProps) void 0 === i[s] && (i[s] = e.defaultProps[s]);
  return er(e, i, r, o, null);
}
function er(e, t, n, r, o) {
  var s = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o ? ++Hn : o };
  return null == o && null != Vn.vnode && Vn.vnode(s), s;
}
function tr(e) {
  return e.children;
}
function nr(e, t) {
  this.props = e, this.context = t;
}
function rr(e, t) {
  if (null == t) return e.__ ? rr(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
  return "function" == typeof e.type ? rr(e) : null;
}
function or(e) {
  var t, n;
  if (null != (e = e.__) && null != e.__c) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return or(e);
  }
}
function sr(e) {
  (!e.__d && (e.__d = true) && zn.push(e) && !ir.__r++ || qn !== Vn.debounceRendering) && ((qn = Vn.debounceRendering) || setTimeout)(ir);
}
function ir() {
  for (var e; ir.__r = zn.length; ) e = zn.sort((function(e2, t) {
    return e2.__v.__b - t.__v.__b;
  })), zn = [], e.some((function(e2) {
    var t, n, r, o, s, i;
    e2.__d && (s = (o = (t = e2).__v).__e, (i = t.__P) && (n = [], (r = Zn({}, o)).__v = o.__v + 1, yr(i, o, r, t.__n, void 0 !== i.ownerSVGElement, null != o.__h ? [s] : null, n, null == s ? rr(o) : s, o.__h), hr(n, o), o.__e != s && or(o)));
  }));
}
function ar(e, t, n, r, o, s, i, a, l, c) {
  var u, d, f, p, y, h, v, m = r && r.__k || Gn, b = m.length;
  for (n.__k = [], u = 0; u < t.length; u++) if (null != (p = n.__k[u] = null == (p = t[u]) || "boolean" == typeof p ? null : "string" == typeof p || "number" == typeof p || "bigint" == typeof p ? er(null, p, null, null, p) : Array.isArray(p) ? er(tr, { children: p }, null, null, null) : p.__b > 0 ? er(p.type, p.props, p.key, null, p.__v) : p)) {
    if (p.__ = n, p.__b = n.__b + 1, null === (f = m[u]) || f && p.key == f.key && p.type === f.type) m[u] = void 0;
    else for (d = 0; d < b; d++) {
      if ((f = m[d]) && p.key == f.key && p.type === f.type) {
        m[d] = void 0;
        break;
      }
      f = null;
    }
    yr(e, p, f = f || Jn, o, s, i, a, l, c), y = p.__e, (d = p.ref) && f.ref != d && (v || (v = []), f.ref && v.push(f.ref, null, p), v.push(d, p.__c || y, p)), null != y ? (null == h && (h = y), "function" == typeof p.type && p.__k === f.__k ? p.__d = l = lr(p, l, e) : l = cr(e, p, f, m, y, l), "function" == typeof n.type && (n.__d = l)) : l && f.__e == l && l.parentNode != e && (l = rr(f));
  }
  for (n.__e = h, u = b; u--; ) null != m[u] && ("function" == typeof n.type && null != m[u].__e && m[u].__e == n.__d && (n.__d = rr(r, u + 1)), br(m[u], m[u]));
  if (v) for (u = 0; u < v.length; u++) mr(v[u], v[++u], v[++u]);
}
function lr(e, t, n) {
  for (var r, o = e.__k, s = 0; o && s < o.length; s++) (r = o[s]) && (r.__ = e, t = "function" == typeof r.type ? lr(r, t, n) : cr(n, r, r, o, r.__e, t));
  return t;
}
function cr(e, t, n, r, o, s) {
  var i, a, l;
  if (void 0 !== t.__d) i = t.__d, t.__d = void 0;
  else if (null == n || o != s || null == o.parentNode) e: if (null == s || s.parentNode !== e) e.appendChild(o), i = null;
  else {
    for (a = s, l = 0; (a = a.nextSibling) && l < r.length; l += 2) if (a == o) break e;
    e.insertBefore(o, s), i = s;
  }
  return void 0 !== i ? i : o.nextSibling;
}
function ur(e, t, n) {
  "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || Yn.test(t) ? n : n + "px";
}
function dr(e, t, n, r, o) {
  var s;
  e: if ("style" === t) if ("string" == typeof n) e.style.cssText = n;
  else {
    if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) n && t in n || ur(e.style, t, "");
    if (n) for (t in n) r && n[t] === r[t] || ur(e.style, t, n[t]);
  }
  else if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? r || e.addEventListener(t, s ? pr : fr, s) : e.removeEventListener(t, s ? pr : fr, s);
  else if ("dangerouslySetInnerHTML" !== t) {
    if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
      e[t] = null == n ? "" : n;
      break e;
    } catch (e2) {
    }
    "function" == typeof n || (null != n && (false !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t));
  }
}
function fr(e) {
  this.l[e.type + false](Vn.event ? Vn.event(e) : e);
}
function pr(e) {
  this.l[e.type + true](Vn.event ? Vn.event(e) : e);
}
function yr(e, t, n, r, o, s, i, a, l) {
  var c, u, d, f, p, y, h, v, m, b, g, _, w, k = t.type;
  if (void 0 !== t.constructor) return null;
  null != n.__h && (l = n.__h, a = t.__e = n.__e, t.__h = null, s = [a]), (c = Vn.__b) && c(t);
  try {
    e: if ("function" == typeof k) {
      if (v = t.props, m = (c = k.contextType) && r[c.__c], b = c ? m ? m.props.value : c.__ : r, n.__c ? h = (u = t.__c = n.__c).__ = u.__E : ("prototype" in k && k.prototype.render ? t.__c = u = new k(v, b) : (t.__c = u = new nr(v, b), u.constructor = k, u.render = gr), m && m.sub(u), u.props = v, u.state || (u.state = {}), u.context = b, u.__n = r, d = u.__d = true, u.__h = []), null == u.__s && (u.__s = u.state), null != k.getDerivedStateFromProps && (u.__s == u.state && (u.__s = Zn({}, u.__s)), Zn(u.__s, k.getDerivedStateFromProps(v, u.__s))), f = u.props, p = u.state, d) null == k.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(), null != u.componentDidMount && u.__h.push(u.componentDidMount);
      else {
        if (null == k.getDerivedStateFromProps && v !== f && null != u.componentWillReceiveProps && u.componentWillReceiveProps(v, b), !u.__e && null != u.shouldComponentUpdate && false === u.shouldComponentUpdate(v, u.__s, b) || t.__v === n.__v) {
          u.props = v, u.state = u.__s, t.__v !== n.__v && (u.__d = false), u.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e2) {
            e2 && (e2.__ = t);
          })), u.__h.length && i.push(u);
          break e;
        }
        null != u.componentWillUpdate && u.componentWillUpdate(v, u.__s, b), null != u.componentDidUpdate && u.__h.push((function() {
          u.componentDidUpdate(f, p, y);
        }));
      }
      if (u.context = b, u.props = v, u.__v = t, u.__P = e, g = Vn.__r, _ = 0, "prototype" in k && k.prototype.render) u.state = u.__s, u.__d = false, g && g(t), c = u.render(u.props, u.state, u.context);
      else do {
        u.__d = false, g && g(t), c = u.render(u.props, u.state, u.context), u.state = u.__s;
      } while (u.__d && ++_ < 25);
      u.state = u.__s, null != u.getChildContext && (r = Zn(Zn({}, r), u.getChildContext())), d || null == u.getSnapshotBeforeUpdate || (y = u.getSnapshotBeforeUpdate(f, p)), w = null != c && c.type === tr && null == c.key ? c.props.children : c, ar(e, Array.isArray(w) ? w : [w], t, n, r, o, s, i, a, l), u.base = t.__e, t.__h = null, u.__h.length && i.push(u), h && (u.__E = u.__ = null), u.__e = false;
    } else null == s && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = vr(n.__e, t, n, r, o, s, i, l);
    (c = Vn.diffed) && c(t);
  } catch (e2) {
    t.__v = null, (l || null != s) && (t.__e = a, t.__h = !!l, s[s.indexOf(a)] = null), Vn.__e(e2, t, n);
  }
}
function hr(e, t) {
  Vn.__c && Vn.__c(t, e), e.some((function(t2) {
    try {
      e = t2.__h, t2.__h = [], e.some((function(e2) {
        e2.call(t2);
      }));
    } catch (e2) {
      Vn.__e(e2, t2.__v);
    }
  }));
}
function vr(e, t, n, r, o, s, i, a) {
  var l, c, u, d = n.props, f = t.props, p = t.type, y = 0;
  if ("svg" === p && (o = true), null != s) {
    for (; y < s.length; y++) if ((l = s[y]) && "setAttribute" in l == !!p && (p ? l.localName === p : 3 === l.nodeType)) {
      e = l, s[y] = null;
      break;
    }
  }
  if (null == e) {
    if (null === p) return document.createTextNode(f);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, f.is && f), s = null, a = false;
  }
  if (null === p) d === f || a && e.data === f || (e.data = f);
  else {
    if (s = s && Kn.call(e.childNodes), c = (d = n.props || Jn).dangerouslySetInnerHTML, u = f.dangerouslySetInnerHTML, !a) {
      if (null != s) for (d = {}, y = 0; y < e.attributes.length; y++) d[e.attributes[y].name] = e.attributes[y].value;
      (u || c) && (u && (c && u.__html == c.__html || u.__html === e.innerHTML) || (e.innerHTML = u && u.__html || ""));
    }
    if ((function(e2, t2, n2, r2, o2) {
      var s2;
      for (s2 in n2) "children" === s2 || "key" === s2 || s2 in t2 || dr(e2, s2, null, n2[s2], r2);
      for (s2 in t2) o2 && "function" != typeof t2[s2] || "children" === s2 || "key" === s2 || "value" === s2 || "checked" === s2 || n2[s2] === t2[s2] || dr(e2, s2, t2[s2], n2[s2], r2);
    })(e, f, d, o, a), u) t.__k = [];
    else if (y = t.props.children, ar(e, Array.isArray(y) ? y : [y], t, n, r, o && "foreignObject" !== p, s, i, s ? s[0] : n.__k && rr(n, 0), a), null != s) for (y = s.length; y--; ) null != s[y] && Xn(s[y]);
    a || ("value" in f && void 0 !== (y = f.value) && (y !== e.value || "progress" === p && !y || "option" === p && y !== d.value) && dr(e, "value", y, d.value, false), "checked" in f && void 0 !== (y = f.checked) && y !== e.checked && dr(e, "checked", y, d.checked, false));
  }
  return e;
}
function mr(e, t, n) {
  try {
    "function" == typeof e ? e(t) : e.current = t;
  } catch (e2) {
    Vn.__e(e2, n);
  }
}
function br(e, t, n) {
  var r, o;
  if (Vn.unmount && Vn.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || mr(r, null, t)), null != (r = e.__c)) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (e2) {
      Vn.__e(e2, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && br(r[o], t, "function" != typeof e.type);
  n || null == e.__e || Xn(e.__e), e.__e = e.__d = void 0;
}
function gr(e, t, n) {
  return this.constructor(e, n);
}
function _r(e, t, n) {
  var r, o, s;
  Vn.__ && Vn.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, s = [], yr(t, e = (!r && n || t).__k = Qn(tr, null, [e]), o || Jn, Jn, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? Kn.call(t.childNodes) : null, s, !r && n ? n : o ? o.__e : t.firstChild, r), hr(s, e);
}
Kn = Gn.slice, Vn = { __e: function(e, t, n, r) {
  for (var o, s, i; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((s = o.constructor) && null != s.getDerivedStateFromError && (o.setState(s.getDerivedStateFromError(e)), i = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), i = o.__d), i) return o.__E = o;
  } catch (t2) {
    e = t2;
  }
  throw e;
} }, Hn = 0, nr.prototype.setState = function(e, t) {
  var n;
  n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Zn({}, this.state), "function" == typeof e && (e = e(Zn({}, n), this.props)), e && Zn(n, e), null != e && this.__v && (t && this.__h.push(t), sr(this));
}, nr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = true, e && this.__h.push(e), sr(this));
}, nr.prototype.render = tr, zn = [], ir.__r = 0;
var wr = { Error: { color: "red" }, Alert: { error: { color: "red", fontWeight: "bold" }, warning: { color: "#f80", fontWeight: "bold" }, info: { color: "black" } }, Darken: { position: "fixed", top: 0, left: 0, opacity: 0.5, backgroundColor: "#000", width: "100vw", height: "100vh", zIndex: 150, webkitBackdropFilter: "blur(2px)", backdropFilter: "blur(2px)" }, DialogOuter: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 150, alignItems: "center", display: "flex", justifyContent: "center", padding: "16px", boxSizing: "border-box" }, DialogInner: { position: "relative", color: "#222", backgroundColor: "#fff", padding: "24px", marginBottom: "2em", maxWidth: "400px", width: "100%", maxHeight: "90%", overflowY: "auto", border: "3px solid #3d3d5d", borderRadius: "8px", boxShadow: "0 0 80px 10px #666", fontFamily: "sans-serif", boxSizing: "border-box" }, Input: { height: "35px", width: "100%", maxWidth: "100%", borderColor: "#ccf4", outline: "none", fontSize: "16px", padding: "8px", boxSizing: "border-box" }, Button: { padding: "10px 20px", margin: "0 4px", border: "1px solid #d1d5db", borderRadius: "6px", backgroundColor: "#ffffff", cursor: "pointer", fontSize: "14px", fontWeight: "500", color: "#374151", transition: "all 0.2s ease" }, PrimaryButton: { padding: "10px 20px", margin: "0 4px", border: "1px solid #3b82f6", borderRadius: "6px", backgroundColor: "#3b82f6", color: "white", cursor: "pointer", fontSize: "14px", fontWeight: "500", transition: "all 0.2s ease" }, ButtonsDiv: { display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "24px", paddingTop: "20px" }, Label: { display: "block", marginBottom: "12px", fontSize: "14px", fontWeight: "500", color: "#333" }, WindowHeader: { margin: "0 0 20px 0", fontSize: "18px", fontWeight: "600", color: "#333", borderBottom: "1px solid #eee", paddingBottom: "10px" } };
function kr({ children: e, className: t }) {
  return Qn("div", { className: `dexie-dialog ${t || ""}` }, Qn("div", { style: wr.Darken }), Qn("div", { style: wr.DialogOuter }, Qn("div", { style: wr.DialogInner }, e)));
}
var Sr;
var xr;
var Ir;
var Or;
var Er = 0;
var Cr = [];
var jr = [];
var Tr = Vn.__b;
var Ur = Vn.__r;
var Ar = Vn.diffed;
var Pr = Vn.__c;
var $r = Vn.unmount;
function Dr(e, t) {
  Vn.__h && Vn.__h(xr, e, Er || t), Er = 0;
  var n = xr.__H || (xr.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: jr }), n.__[e];
}
function Lr(e) {
  return Er = 1, (function(e2, t, n) {
    var r = Dr(Sr++, 2);
    if (r.t = e2, !r.__c && (r.__ = [n ? n(t) : Kr(void 0, t), function(e3) {
      var t2 = r.__N ? r.__N[0] : r.__[0], n2 = r.t(t2, e3);
      t2 !== n2 && (r.__N = [n2, r.__[1]], r.__c.setState({}));
    }], r.__c = xr, !xr.u)) {
      xr.u = true;
      var o = xr.shouldComponentUpdate;
      xr.shouldComponentUpdate = function(e3, t2, n2) {
        if (!r.__c.__H) return true;
        var s = r.__c.__H.__.filter((function(e4) {
          return e4.__c;
        }));
        if (s.every((function(e4) {
          return !e4.__N;
        }))) return !o || o.call(this, e3, t2, n2);
        var i = false;
        return s.forEach((function(e4) {
          if (e4.__N) {
            var t3 = e4.__[0];
            e4.__ = e4.__N, e4.__N = void 0, t3 !== e4.__[0] && (i = true);
          }
        })), !!i && (!o || o.call(this, e3, t2, n2));
      };
    }
    return r.__N || r.__;
  })(Kr, e);
}
function Rr(e) {
  return Er = 5, (function(e2, t) {
    var n = Dr(Sr++, 7);
    return Fr(n.__H, t) ? (n.__V = e2(), n.i = t, n.__h = e2, n.__V) : n.__;
  })((function() {
    return { current: e };
  }), []);
}
function Nr() {
  for (var e; e = Cr.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Mr), e.__H.__h.forEach(Wr), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], Vn.__e(t, e.__v);
  }
}
Vn.__b = function(e) {
  xr = null, Tr && Tr(e);
}, Vn.__r = function(e) {
  Ur && Ur(e), Sr = 0;
  var t = (xr = e.__c).__H;
  t && (Ir === xr ? (t.__h = [], xr.__h = [], t.__.forEach((function(e2) {
    e2.__N && (e2.__ = e2.__N), e2.__V = jr, e2.__N = e2.i = void 0;
  }))) : (t.__h.forEach(Mr), t.__h.forEach(Wr), t.__h = [])), Ir = xr;
}, Vn.diffed = function(e) {
  Ar && Ar(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (1 !== Cr.push(t) && Or === Vn.requestAnimationFrame || ((Or = Vn.requestAnimationFrame) || function(e2) {
    var t2, n = function() {
      clearTimeout(r), Br && cancelAnimationFrame(t2), setTimeout(e2);
    }, r = setTimeout(n, 100);
    Br && (t2 = requestAnimationFrame(n));
  })(Nr)), t.__H.__.forEach((function(e2) {
    e2.i && (e2.__H = e2.i), e2.__V !== jr && (e2.__ = e2.__V), e2.i = void 0, e2.__V = jr;
  }))), Ir = xr = null;
}, Vn.__c = function(e, t) {
  t.some((function(e2) {
    try {
      e2.__h.forEach(Mr), e2.__h = e2.__h.filter((function(e3) {
        return !e3.__ || Wr(e3);
      }));
    } catch (n) {
      t.some((function(e3) {
        e3.__h && (e3.__h = []);
      })), t = [], Vn.__e(n, e2.__v);
    }
  })), Pr && Pr(e, t);
}, Vn.unmount = function(e) {
  $r && $r(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach((function(e2) {
    try {
      Mr(e2);
    } catch (e3) {
      t = e3;
    }
  })), t && Vn.__e(t, n.__v));
};
var Br = "function" == typeof requestAnimationFrame;
function Mr(e) {
  var t = xr, n = e.__c;
  "function" == typeof n && (e.__c = void 0, n()), xr = t;
}
function Wr(e) {
  var t = xr;
  e.__c = e.__(), xr = t;
}
function Fr(e, t) {
  return !e || e.length !== t.length || t.some((function(t2, n) {
    return t2 !== e[n];
  }));
}
function Kr(e, t) {
  return "function" == typeof t ? t(e) : t;
}
function Vr({ message: e, messageCode: t, messageParams: n }) {
  return e.replace(/\{\w+\}/gi, ((e2) => n[e2.substring(1, e2.length - 1)]));
}
function Hr({ title: e, type: t, alerts: n, fields: r, submitLabel: o, cancelLabel: s, onCancel: i, onSubmit: a }) {
  const [l, c] = Lr({}), u = Rr(null);
  return (function(e2, t2) {
    var n2 = Dr(Sr++, 4);
    !Vn.__s && Fr(n2.__H, t2) && (n2.__ = e2, n2.i = t2, xr.__h.push(n2));
  })((() => {
    var e2;
    return null === (e2 = u.current) || void 0 === e2 ? void 0 : e2.focus();
  }), []), Qn(kr, { className: "dxc-login-dlg" }, Qn(tr, null, Qn("h3", { style: wr.WindowHeader }, e), n.map(((e2) => Qn("p", { style: wr.Alert[e2.type] }, Vr(e2)))), Qn("form", { onSubmit: (e2) => {
    e2.preventDefault(), a(l);
  } }, Object.entries(r).map((([e2, { type: t2, label: n2, placeholder: r2 }], o2) => Qn("label", { style: wr.Label, key: o2 }, n2 ? `${n2}: ` : "", Qn("input", { ref: 0 === o2 ? u : void 0, type: t2, name: e2, autoComplete: "on", style: wr.Input, autoFocus: true, placeholder: r2, value: l[e2] || "", onInput: (n3) => {
    var r3;
    const o3 = (function(e3, t3) {
      switch (e3) {
        case "email":
          return t3.toLowerCase();
        case "otp":
          return t3.toUpperCase();
        default:
          return t3;
      }
    })(t2, null === (r3 = n3.target) || void 0 === r3 ? void 0 : r3.value);
    let s2 = Object.assign(Object.assign({}, l), { [e2]: o3 });
    c(s2), "otp" === t2 && 8 === (null == o3 ? void 0 : o3.trim().length) && a(s2);
  } })))))), Qn("div", { style: wr.ButtonsDiv }, Qn(tr, null, Qn("button", { type: "submit", style: wr.PrimaryButton, onClick: () => a(l) }, o), s && Qn("button", { style: wr.Button, onClick: i }, s))));
}
var zr = class extends nr {
  constructor(e) {
    super(e), this.observer = (e2) => this.setState({ userInteraction: e2 }), this.state = { userInteraction: void 0 };
  }
  componentDidMount() {
    this.subscription = from(this.props.db.cloud.userInteraction).subscribe(this.observer);
  }
  componentWillUnmount() {
    this.subscription && (this.subscription.unsubscribe(), delete this.subscription);
  }
  render(e, { userInteraction: t }) {
    return t ? Qn(Hr, Object.assign({}, t)) : null;
  }
};
function qr(e) {
  const t = /* @__PURE__ */ new WeakMap();
  return (n) => {
    let r = t.get(n);
    return r || (r = e(n), t.set(n, r)), r;
  };
}
var Jr = qr(((e) => new BehaviorSubject(Ce)));
function Gr(e, t) {
  let n = t, r = from(e).pipe(map(((e2) => n = e2)), share({ resetOnRefCountZero: () => timer(1e3) }));
  const o = new Observable(((e2) => {
    let t2 = false;
    const o2 = r.subscribe({ next(n2) {
      t2 = true, e2.next(n2);
    }, error(t3) {
      e2.error(t3);
    }, complete() {
      e2.complete();
    } });
    return t2 || o2.closed || e2.next(n), o2;
  }));
  return o.getValue = () => n, o;
}
var Yr = qr(((e) => Gr(liveQuery((() => e.roles.where({ realmId: "rlm-public" }).toArray().then(((e2) => {
  const t = {};
  for (const n of e2.slice().sort(((e3, t2) => (e3.sortOrder || 0) - (t2.sortOrder || 0)))) t[n.name] = n;
  return t;
})))), {})));
var Zr = qr(((e) => Gr(Jr(e._novip).pipe(switchMap(((t) => liveQuery((() => e.transaction("r", "realms", "members", (() => Promise.all([e.members.where({ userId: t.userId }).toArray(), e.realms.toArray(), t.userId]).then((([e2, t2, n]) => ({ selfMembers: e2, realms: t2, userId: n })))))))))), { selfMembers: [], realms: [], get userId() {
  return e.cloud.currentUserId;
} })));
function Xr(...e) {
  if (0 === e.length) return {};
  const t = e.reduce(((e2, t2) => {
    const n = Object.assign({}, e2);
    for (const [e3, r] of Object.entries(t2)) if (e3 in n && n[e3]) {
      if ("*" === n[e3]) continue;
      if ("*" === r) n[e3] = "*";
      else if (Array.isArray(r) && Array.isArray(n[e3])) {
        const t3 = n, o = t3[e3];
        t3[e3] = [.../* @__PURE__ */ new Set([...o, ...r])];
      } else if ("object" == typeof r && r && "object" == typeof n[e3]) {
        const t3 = n[e3];
        for (const [e4, n2] of Object.entries(r)) "*" !== t3[e4] && ("*" === n2 ? t3[e4] = "*" : Array.isArray(t3[e4]) && Array.isArray(n2) && (t3[e4] = [.../* @__PURE__ */ new Set([...t3[e4], ...n2])]));
      }
    } else n[e3] = t2[e3];
    return n;
  }));
  return t;
}
var Qr = qr(((e) => (function(e2, t) {
  let n;
  const r = e2.pipe(map(((e3) => n = t(e3))));
  return r.getValue = () => void 0 !== n ? n : n = t(e2.getValue()), r;
})(Gr(combineLatest([Zr(e._novip), Yr(e._novip)]).pipe(map((([{ selfMembers: e2, realms: t, userId: n }, r]) => ({ selfMembers: e2, realms: t, userId: n, globalRoles: r })))), { selfMembers: [], realms: [], userId: Ce.userId, globalRoles: {} }), (({ selfMembers: e2, realms: t, userId: n, globalRoles: r }) => {
  const o = t.map(((t2) => {
    const o2 = e2.filter(((e3) => e3.realmId === t2.realmId)), s = o2.map(((e3) => e3.permissions)).filter(((e3) => e3)), i = He(o2.map(((e3) => e3.roles)).filter(((e3) => e3))).map(((e3) => r[e3])).filter(((e3) => e3)).map(((e3) => e3.permissions));
    return Object.assign(Object.assign({}, t2), { permissions: t2.owner === n ? { manage: "*" } : Xr(...s, ...i) });
  })).reduce(((e3, t2) => Object.assign(Object.assign({}, e3), { [t2.realmId]: t2 })), { [n]: { realmId: n, owner: n, name: n, permissions: { manage: "*" } } });
  return o;
}))));
var eo = class {
  constructor(e, t, n) {
    this.permissions = e || {}, this.tableName = t, this.isOwner = n;
  }
  add(...e) {
    var t;
    return "*" === this.permissions.manage || (!!(null === (t = this.permissions.manage) || void 0 === t ? void 0 : t.includes(this.tableName)) || ("*" === this.permissions.add || !!e.every(((e2) => {
      var t2;
      return null === (t2 = this.permissions.add) || void 0 === t2 ? void 0 : t2.includes(e2);
    }))));
  }
  update(...e) {
    var t, n;
    if (this.isOwner || "*" === this.permissions.manage) return true;
    if (null === (t = this.permissions.manage) || void 0 === t ? void 0 : t.includes(this.tableName)) return true;
    if ("*" === this.permissions.update) return e.every(((e2) => "owner" !== e2));
    const r = null === (n = this.permissions.update) || void 0 === n ? void 0 : n[this.tableName];
    return "*" === r ? e.every(((e2) => "owner" !== e2)) : e.every(((e2) => null == r ? void 0 : r.some(((t2) => t2 === e2 || "*" === t2 && "owner" !== e2))));
  }
  delete() {
    var e;
    return !(!this.isOwner && "*" !== this.permissions.manage) || !!(null === (e = this.permissions.manage) || void 0 === e ? void 0 : e.includes(this.tableName));
  }
};
var to = qr(((e) => {
  const t = Jr(e._novip).pipe(switchMap(((t2) => liveQuery((() => e.members.where({ email: t2.email || "" }).toArray()))))), n = Qr(e._novip), r = Zr(e._novip);
  return Gr(combineLatest([t, r, n]).pipe(map((([t2, n2, r2]) => {
    const o = (e2, t3) => Object.assign(Object.assign({}, e2), { [t3.id]: Object.assign(Object.assign({}, t3), { realm: r2[t3.realmId] }) }), s = t2.reduce(o, {}), i = n2.selfMembers.reduce(o, s);
    return Object.values(i).filter(((e2) => !e2.accepted)).map(((t3) => Object.assign(Object.assign({}, t3), { accept() {
      return Z(this, void 0, void 0, (function* () {
        yield e.members.update(t3.id, { accepted: /* @__PURE__ */ new Date() });
      }));
    }, reject() {
      return Z(this, void 0, void 0, (function* () {
        yield e.members.update(t3.id, { rejected: /* @__PURE__ */ new Date() });
      }));
    } })));
  }))), []);
}));
function no(e) {
  return (t) => {
    var r;
    const o = t.doc;
    if (!o) throw new Error("Internal error: DexieYProvider.createYHandler called without a doc. This is unexpected.");
    const { parentTable: s } = o.meta || {};
    if (!(null === (r = e.cloud.schema) || void 0 === r ? void 0 : r[s].markedForSync)) return;
    let i;
    Object.defineProperty(t, "awareness", { get: () => i || (i = (function(e2, t2, r2) {
      const { parentTable: o2, parentId: s2, parentProp: i2, updatesTable: a } = t2.meta, l = new Awareness(t2), c = Un(t2);
      return l.on("update", (({ added: n, updated: s3, removed: a2 }, c2) => {
        const u = n.concat(s3).concat(a2), d = e2.cloud.currentUser.value;
        if ("server" !== c2 && d.isLoggedIn && !bn(e2)) {
          const n2 = encodeAwarenessUpdate(l, u);
          e2.messageProducer.next({ type: "aware", table: o2, prop: i2, k: t2.meta.parentId, u: n2 }), r2.destroyed && e2.messageProducer.next({ type: "doc-close", table: o2, prop: i2, k: t2.meta.parentId });
        }
      })), l.on("destroy", (() => {
        removeAwarenessStates(l, [t2.clientID], "provider destroyed");
      })), (() => {
        Z(this, void 0, void 0, (function* () {
          if (r2.destroyed) return;
          let t3 = false, l2 = 1;
          const u = combineLatest([e2.cloud.webSocketStatus, c.pipe(startWith(null))]).subscribe((([n]) => {
            if (r2.destroyed) return;
            t3 = "connected" === n;
            const o3 = e2.cloud.currentUser.value;
            "connected" === n && o3.isLoggedIn && !bn(e2) && (++l2, d().catch(((e3) => {
            })));
          }));
          function d() {
            return Z(this, void 0, void 0, (function* () {
              const c2 = l2, u2 = e2.table(a), d2 = e2.$syncState, [f, p] = yield e2.transaction("r", d2, u2, (() => Z(this, void 0, void 0, (function* () {
                const e3 = yield u2.get(Dt), t4 = yield d2.get("syncState");
                return [(null == e3 ? void 0 : e3.receivedUntil) || 0, (null == t4 ? void 0 : t4.yServerRevision) || (null == t4 ? void 0 : t4.serverRevision)];
              }))));
              if (r2.destroyed || l2 !== c2 || !t3) return;
              const y = { type: "doc-open", table: o2, prop: i2, k: s2, serverRev: p }, h = yield u2.where("i").between(f, 1 / 0, false).filter(((e3) => 0 === cmp(e3.k, s2) && 0 == (1 & (e3.f || 0)))).toArray();
              if (!r2.destroyed && l2 === c2 && t3) {
                if (h.length > 0) {
                  const e3 = mergeUpdatesV2(h.map(((e4) => e4.u))), t4 = encodeStateVectorFromUpdateV2(e3);
                  y.sv = t4;
                }
                e2.messageProducer.next(y);
              }
            }));
          }
          r2.addCleanupHandler(u);
        }));
      })(), l;
    })(e, o, t), jn.set(o, i), i) });
  };
}
var ao = co("tx");
var lo = co("unload");
function co(e) {
  let t = null, n = false, r = /* @__PURE__ */ new Map();
  return { name: e, run() {
    return Z(this, void 0, void 0, (function* () {
      !n && r.size > 0 && (n = true, t && (yield t.catch((() => {
      }))), setTimeout((() => {
        n = false;
        const e2 = r;
        r = /* @__PURE__ */ new Map(), t = (function(e3) {
          return Z(this, void 0, void 0, (function* () {
            for (const { db: t2, parentId: n2, triggers: r2, parentTable: o, prop: s } of e3.values()) {
              const e4 = DexieYProvider2.getOrCreateDocument(t2, o, s, n2);
              try {
                const t3 = DexieYProvider2.load(e4);
                yield t3.whenLoaded;
                for (const t4 of r2) yield t4(e4, n2);
              } catch (e5) {
                null == e5 || e5.name;
              } finally {
                DexieYProvider2.release(e4);
              }
            }
          }));
        })(e2).finally((() => {
          t = null;
        }));
      }), 0));
    }));
  }, enqueue(e2, t2, n2, o, s) {
    const i = `${e2.name}:${t2}:${n2}:${o}`;
    let a = r.get(i);
    a || (a = { db: e2, parentTable: t2, parentId: n2, prop: o, triggers: /* @__PURE__ */ new Set() }, r.set(i, a)), a.triggers.add(s);
  } };
}
var yo = { nameSuffix: true };
function ho(t) {
  const n = t.name, r = Jr(t), s = [];
  let i = false, a = null;
  t.on("ready", ((t2) => Z(this, void 0, void 0, (function* () {
    try {
      yield (function(t3) {
        return Z(this, void 0, void 0, (function* () {
          var n2, d2, f, p, y, h, v;
          l = false;
          const m = en(t3);
          "undefined" != typeof window && "undefined" != typeof document && ((null === (n2 = m.cloud.options) || void 0 === n2 ? void 0 : n2.customLoginGui) || s.push((function(e) {
            let t4 = false;
            const n3 = document.createElement("div");
            return document.body ? (document.body.appendChild(n3), _r(Qn(zr, { db: e.vip }), n3)) : addEventListener("DOMContentLoaded", (() => {
              t4 || (document.body.appendChild(n3), _r(Qn(zr, { db: e.vip }), n3));
            })), { unsubscribe() {
              try {
                n3.remove();
              } catch (e2) {
              }
              t4 = true;
            }, get closed() {
              return t4;
            } };
          })(t3))), m.cloud.isServiceWorkerDB || s.push((function(e) {
            let t4 = e.cloud.webSocketStatus.value;
            const n3 = e.cloud.webSocketStatus.pipe(switchMap(((e2) => {
              const n4 = t4;
              t4 = e2;
              const r2 = of(e2);
              switch (e2) {
                case "disconnected":
                  return kn.value ? r2.pipe(debounceTime(500)) : r2;
                case "connecting":
                  return "not-started" === n4 || "error" === n4 ? r2 : r2.pipe(debounceTime(4e3));
                default:
                  return r2;
              }
            })));
            return combineLatest([n3, e.syncStateChangedEvent.pipe(startWith({ phase: "initial" })), Jr(e.dx._novip), Sn]).pipe(map((([t5, n4, r2, o]) => {
              var s2;
              if ((null === (s2 = r2.license) || void 0 === s2 ? void 0 : s2.status) && "ok" !== r2.license.status) return { phase: "offline", status: "offline", license: r2.license.status };
              let { phase: i2, error: a2, progress: l2 } = n4, c2 = t5;
              return "error" === i2 && (c2 = "error"), "not-started" === t5 && ("pushing" !== i2 && "pulling" !== i2 || (c2 = "connecting")), "error" !== e.cloud.syncState.value.phase || "pushing" !== n4.phase && "pulling" !== n4.phase || (c2 = "connecting"), o || (c2 = "disconnected"), { phase: i2, error: a2, progress: l2, status: Tt ? c2 : "offline", license: "ok" };
            })));
          })(m).subscribe(t3.cloud.syncState)), s.push(m.syncCompleteEvent.subscribe(u)), m.tables.every(((e) => e.core)) || (function() {
            throw new import_wrapper_default.SchemaError("Version increment needed to allow dexie-cloud change tracking");
          })();
          const _ = "serviceWorker" in navigator ? yield navigator.serviceWorker.getRegistrations() : [], [w, S] = yield m.transaction("rw", m.$syncState, (() => Z(this, void 0, void 0, (function* () {
            var e, t4;
            const { options: n3, schema: r2 } = m.cloud, [o, s2, a2] = yield Promise.all([m.getOptions(), m.getSchema(), m.getPersistedSyncState()]);
            if (i) {
              if (!o || JSON.stringify(o) !== JSON.stringify(n3)) {
                if (!n3) throw new Error("Internal error");
                const e2 = Object.assign({}, n3);
                delete e2.fetchTokens, delete e2.awarenessProtocol, yield m.$syncState.put(e2, "options");
              }
            } else m.cloud.options = o || null;
            if ((null === (e = m.cloud.options) || void 0 === e ? void 0 : e.tryUseServiceWorker) && "serviceWorker" in navigator && _.length > 0 && !on ? m.cloud.usingServiceWorker = true : ((null === (t4 = m.cloud.options) || void 0 === t4 ? void 0 : t4.tryUseServiceWorker) && m.cloud.isServiceWorkerDB, m.cloud.usingServiceWorker = false), Fn(r2, m.cloud.options), Fn(s2, m.cloud.options), r2) {
              if (!s2 || JSON.stringify(s2) !== JSON.stringify(r2)) {
                const e2 = s2 || {};
                for (const [t5, n4] of Object.entries(r2)) {
                  const r3 = e2[t5];
                  r3 ? (r3.markedForSync = n4.markedForSync, n4.deleted = r3.deleted, r3.generatedGlobalId = n4.generatedGlobalId) : e2[t5] = Object.assign({}, n4);
                }
                yield m.$syncState.put(e2, "schema"), Object.assign(r2, e2);
              }
            } else m.cloud.schema = s2 || null;
            return [null == a2 ? void 0 : a2.initiallySynced, null == a2 ? void 0 : a2.realms];
          }))));
          if (w && m.setInitiallySynced(true), (function(t4) {
            var n3, r2;
            for (const o of t4.tables) if (null === (r2 = null === (n3 = t4.cloud.schema) || void 0 === n3 ? void 0 : n3[o.name]) || void 0 === r2 ? void 0 : r2.markedForSync) {
              if (o.schema.primKey.auto) throw new import_wrapper_default.SchemaError(`Table ${o.name} is both autoIncremented and synced. Use db.cloud.configure({unsyncedTables: [${JSON.stringify(o.name)}]}) to blacklist it from sync`);
              if (!o.schema.primKey.keyPath) throw new import_wrapper_default.SchemaError(`Table ${o.name} cannot be both synced and outbound. Use db.cloud.configure({unsyncedTables: [${JSON.stringify(o.name)}]}) to blacklist it from sync`);
            }
          })(m), c(), !m.cloud.isServiceWorkerDB) {
            s.push(liveQuery((() => m.getCurrentUser())).subscribe(r)), s.push(liveQuery((() => m.getPersistedSyncState())).subscribe(m.cloud.persistedSyncState)), yield firstValueFrom(combineLatest([r.pipe(skip(1), take(1)), m.cloud.persistedSyncState.pipe(skip(1), take(1))]));
            const e = no(m);
            DexieYProvider2.on.new.subscribe(e), m.dx.once("close", (() => {
              DexieYProvider2.on.new.unsubscribe(e);
            }));
          }
          let E = false;
          const C = yield m.getCurrentUser(), j = null === (d2 = m.cloud.options) || void 0 === d2 ? void 0 : d2.requireAuth;
          j && (m.cloud.isServiceWorkerDB ? yield firstValueFrom(r.pipe(filter(((e) => !!e.isLoggedIn)), take(1))) : "object" == typeof j ? (!C.isLoggedIn || j.userId && C.userId !== j.userId || j.email && C.email !== j.email) && (E = yield $e(m, j)) : C.isLoggedIn || (E = yield $e(m))), !C.isLoggedIn || S && S.includes(C.userId) || (E = true), a && a.stop(), a = null, c();
          const T = (null === (f = m.cloud.options) || void 0 === f ? void 0 : f.databaseUrl) && (!w || E);
          T && (yield (function(e, t4, n3) {
            return Z(this, void 0, void 0, (function* () {
              yield wn(e, Kt, (() => Vt(e, t4, n3, { isInitialSync: true })));
            }));
          })(m, m.cloud.options, m.cloud.schema), m.setInitiallySynced(true)), c(), m.cloud.usingServiceWorker && (null === (p = m.cloud.options) || void 0 === p ? void 0 : p.databaseUrl) ? (T || fe(m, "push").catch((() => {
          })), (function(e) {
            return Z(this, void 0, void 0, (function* () {
              var t4;
              try {
                const { periodicSync: n3 } = yield navigator.serviceWorker.ready;
                if (n3) try {
                  yield n3.register(`dexie-cloud:${e.name}`, null === (t4 = e.cloud.options) || void 0 === t4 ? void 0 : t4.periodicSync);
                } catch (e2) {
                }
              } catch (e2) {
              }
            }));
          })(m).catch((() => {
          }))) : (null === (y = m.cloud.options) || void 0 === y ? void 0 : y.databaseUrl) && m.cloud.schema && !m.cloud.isServiceWorkerDB && (a = Wn(m, m.cloud.options, m.cloud.schema), a.start(), T || pe(m, "push")), c(), m.cloud.isServiceWorkerDB || s.push(fromEvent(self, "online").subscribe((() => {
            m.syncStateChangedEvent.next({ phase: "not-in-sync" }), bn(m) || pe(m, "push");
          })), fromEvent(self, "offline").subscribe((() => {
            m.syncStateChangedEvent.next({ phase: "offline" });
          }))), !(null === (h = m.cloud.options) || void 0 === h ? void 0 : h.databaseUrl) || (null === (v = m.cloud.options) || void 0 === v ? void 0 : v.disableWebSocket) || sn || s.push((function(e) {
            var t4;
            if (!(null === (t4 = e.cloud.options) || void 0 === t4 ? void 0 : t4.databaseUrl)) throw new Error("No database URL to connect WebSocket to");
            const n3 = e.messageConsumer.readyToServe.pipe(filter(((e2) => e2)), switchMap((() => e.getPersistedSyncState())), filter(((e2) => e2 && e2.serverRevision)), switchMap(((e2) => Z(this, void 0, void 0, (function* () {
              return { type: "ready", rev: e2.serverRevision, realmSetHash: yield Me(e2) };
            }))))), r2 = merge(n3, e.messageProducer);
            return (function t5() {
              return e.cloud.persistedSyncState.pipe(filter(((e2) => null == e2 ? void 0 : e2.serverRevision)), take(1), switchMap(((t6) => e.cloud.currentUser.pipe(map(((e2) => [e2, t6]))))), switchMap((([e2, t6]) => Sn.pipe(map(((n4) => [n4 ? e2 : null, t6]))))), switchMap((([t6, n4]) => (null == t6 ? void 0 : t6.isLoggedIn) && !(null == n4 ? void 0 : n4.realms.includes(t6.userId)) ? e.cloud.persistedSyncState.pipe(filter(((e2) => (null == e2 ? void 0 : e2.realms.includes(t6.userId)) || false)), take(1), map(((e2) => [t6, e2]))) : new BehaviorSubject([t6, n4]))), switchMap(((e2) => Z(this, [e2], void 0, (function* ([e3, t6]) {
                return [e3, yield Me(t6)];
              })))), distinctUntilChanged((([e2, t6], [n4, r3]) => e2 === n4 && t6 === r3)), switchMap((([n4, o]) => {
                var s2;
                return (null === (s2 = e.cloud.persistedSyncState) || void 0 === s2 ? void 0 : s2.value) ? n4 ? new An(e, e.cloud.persistedSyncState.value.serverRevision, e.cloud.persistedSyncState.value.yServerRevision, o, e.cloud.persistedSyncState.value.clientIdentity, r2, e.cloud.webSocketStatus, n4) : from([]) : t5();
              })), catchError(((n4) => "TokenExpiredError" === (null == n4 ? void 0 : n4.name) ? of(true).pipe(switchMap((() => Z(this, void 0, void 0, (function* () {
                const t6 = yield e.getCurrentUser(), n5 = yield Ie(e.cloud.options.databaseUrl, t6);
                yield e.table("$logins").update(t6.userId, { accessToken: n5.accessToken, accessTokenExpiration: n5.accessTokenExpiration, claims: n5.claims, license: n5.license, data: n5.data });
              })))), switchMap((() => t5()))) : throwError((() => n4)))), catchError(((n4) => (e.cloud.webSocketStatus.next("error"), n4 instanceof Dn ? throwError((() => n4)) : from(Ln()).pipe(switchMap((() => t5())))))));
            })().subscribe({ next: (t5) => {
              t5 && e.messageConsumer.enqueue(t5);
            }, error: (e2) => {
            }, complete: () => {
            } });
          })(m));
        }));
      })(t2);
    } catch (e) {
    }
  }))), true);
  let l = false;
  function c() {
    if (l) throw new import_wrapper_default.DatabaseClosedError();
  }
  t.once("close", (() => {
    s.forEach(((e) => e.unsubscribe())), s.splice(0, s.length), l = true, a && a.stop(), a = null, r.next(Ce);
  }));
  const u = new Subject();
  var d;
  t.cloud = { version: "4.2.2", options: Object.assign({}, yo), schema: null, get currentUserId() {
    return r.value.userId || Ce.userId;
  }, currentUser: r, syncState: new BehaviorSubject({ phase: "initial", status: "not-started" }), events: { syncComplete: u }, persistedSyncState: new BehaviorSubject(void 0), userInteraction: new BehaviorSubject(void 0), webSocketStatus: new BehaviorSubject("not-started"), login(e) {
    return Z(this, void 0, void 0, (function* () {
      const n2 = en(t);
      yield n2.cloud.sync(), yield $e(n2, e);
    }));
  }, invites: to(t), roles: Yr(t), configure(e) {
    e = t.cloud.options = Object.assign(Object.assign({}, t.cloud.options), e), i = true, e.databaseUrl && e.nameSuffix && (t.name = `${n}-${(function(e2) {
      const t2 = new URL(e2);
      return "/" === t2.pathname ? t2.hostname.split(".")[0] : t2.pathname.split("/")[1];
    })(e.databaseUrl)}`, en(t).reconfigure()), Fn(t.cloud.schema, t.cloud.options);
  }, logout() {
    return Z(this, arguments, void 0, (function* ({ force: e } = {}) {
      e ? yield Ue(en(t), { deleteUnsyncedData: true }) : yield Te(en(t));
    }));
  }, sync() {
    return Z(this, arguments, void 0, (function* ({ wait: e, purpose: n2 } = { wait: true, purpose: "push" }) {
      var r2;
      void 0 === e && (e = true);
      const s2 = en(t);
      if ("ok" !== ((null === (r2 = s2.cloud.currentUser.value.license) || void 0 === r2 ? void 0 : r2.status) || "ok") && (yield Se(s2)), "pull" === n2) {
        const t2 = s2.cloud.persistedSyncState.value;
        if (pe(s2, n2), e) {
          const e2 = yield firstValueFrom(s2.cloud.persistedSyncState.pipe(filter(((e3) => null != (null == e3 ? void 0 : e3.timestamp) && (!t2 || e3.timestamp > t2.timestamp)))));
          if (null == e2 ? void 0 : e2.error) throw new Error("Sync error: " + e2.error);
        }
      } else if (yield Rn(s2)) {
        const t2 = s2.cloud.persistedSyncState.value;
        pe(s2, n2), e && (yield firstValueFrom(from(liveQuery((() => Z(this, void 0, void 0, (function* () {
          const e2 = yield Rn(s2), n3 = yield s2.getPersistedSyncState();
          if ((null == n3 ? void 0 : n3.timestamp) !== (null == t2 ? void 0 : t2.timestamp) && (null == n3 ? void 0 : n3.error)) throw new Error("Sync error: " + n3.error);
          return e2;
        }))))).pipe(filter(((e2) => !e2)))));
      }
    }));
  }, permissions: (e, n2) => (function(e2, t2, n3) {
    if (!t2) throw new TypeError("Cannot check permissions of undefined or null. A Dexie Cloud object with realmId and owner expected.");
    const { owner: r2, realmId: o } = t2;
    if (!n3) {
      if ("function" != typeof t2.table) throw new TypeError("Missing 'table' argument to permissions and table could not be extracted from entity");
      n3 = t2.table();
    }
    const s2 = Qr(e2), i2 = (t3) => {
      const s3 = t3[o || e2.cloud.currentUserId];
      return s3 ? new eo(s3.permissions, n3, void 0 === o || o === e2.cloud.currentUserId || r2 === e2.cloud.currentUserId) : new eo({}, n3, !r2 || r2 === e2.cloud.currentUserId);
    }, a2 = s2.pipe(map(i2));
    return a2.getValue = () => i2(s2.getValue()), a2;
  })(t._novip, e, n2) }, t.Version.prototype._parseStoresSpec = import_wrapper_default.override(t.Version.prototype._parseStoresSpec, ((e) => _n(e, t))), t.Table.prototype.newId = function({ colocateWith: e } = {}) {
    const n2 = e && e.substr(e.length - 3);
    return fn(t.cloud.schema[this.name].idPrefix || "", n2);
  }, t.Table.prototype.idPrefix = function() {
    var e, t2;
    return (null === (t2 = null === (e = this.db.cloud.schema) || void 0 === e ? void 0 : e[this.name]) || void 0 === t2 ? void 0 : t2.idPrefix) || "";
  }, t.use(gn({ currentUserObservable: t.cloud.currentUser, db: en(t) })), t.use((d = en(t), { stack: "dbcore", name: "implicitPropSetterMiddleware", level: 1, create: (e) => Object.assign(Object.assign({}, e), { table: (t2) => {
    const n2 = e.table(t2);
    return Object.assign(Object.assign({}, n2), { mutate: (e2) => {
      var r2, o, s2, i2, a2, l2;
      const c2 = e2.trans;
      if (c2.disableChangeTracking) return n2.mutate(e2);
      const u2 = null !== (o = null === (r2 = c2.currentUser) || void 0 === r2 ? void 0 : r2.userId) && void 0 !== o ? o : Ce.userId;
      if ((null === (i2 = null === (s2 = d.cloud.schema) || void 0 === s2 ? void 0 : s2[t2]) || void 0 === i2 ? void 0 : i2.markedForSync) && ("add" === e2.type || "put" === e2.type)) {
        if ("members" === t2) for (const t3 of e2.values) "string" == typeof t3.email && (t3.email = t3.email.trim().toLowerCase());
        for (const t3 of e2.values) {
          t3.owner || (t3.owner = u2), t3.realmId || (t3.realmId = u2);
          const r3 = null === (l2 = (a2 = n2.schema.primaryKey).extractKey) || void 0 === l2 ? void 0 : l2.call(a2, t3);
          "string" == typeof r3 && "#" === r3[0] && "put" === e2.type && (delete e2.criteria, delete e2.changeSpec, delete e2.updates, t3.$ts = Date.now());
        }
      }
      return n2.mutate(e2);
    } });
  } }) })), t.use(pn(en(t)));
}
ho.version = "4.2.2", import_wrapper_default.Cloud = ho;

// src/app/database/dexie/dexie-data-base.service.ts
var _DexieDataBase = class _DexieDataBase extends import_wrapper_default {
  constructor() {
    super("AppDatabase", {
      addons: [ho]
    });
    this.dataMapper = inject(DataMapperService);
    this.isDbOpen = false;
    this.error = null;
    this.version(1).stores({
      products: "@id, &name",
      items: "@id, productId, listId, groupColor, status",
      lists: "@id, &name",
      images: "@id, &name, updatedAt",
      imageUploadQueue: "imageId"
    });
    this.products = this.table("products");
    this.items = this.table("items");
    this.lists = this.table("lists");
    this.images = this.table("images");
    this.imageUploadQueue = this.table("imageUploadQueue");
    this.cloud.configure({
      databaseUrl: environment.publicDexieCloudDbUrl,
      requireAuth: false,
      customLoginGui: false,
      unsyncedTables: ["images"]
    });
    this.open().then(() => this.isDbOpen = true).catch((e) => this.error = e.message);
  }
  getState() {
    return {
      isDbOpen: this.isDbOpen,
      error: this.error
    };
  }
  createItemInList(listId, item) {
    return from(this.transaction("rw", this.lists, this.items, this.products, () => __async(this, null, function* () {
      const list = yield this.lists.get(listId);
      if (!list || !list.id) {
        throw new Error(`Could not find list with id ${listId}`);
      }
      const _a = item, { product } = _a, _item = __objRest(_a, ["product"]);
      const productDB = yield this.products.where("name").equalsIgnoreCase(product.name).first();
      let productId;
      if (productDB && productDB.id) {
        productId = productDB.id;
      } else {
        const newProductDB = {
          name: product.name,
          imageId: product.imageId || void 0,
          comment: product.comment || void 0
        };
        productId = yield this.products.add(newProductDB);
      }
      const itemDB = __spreadProps(__spreadValues({}, _item), {
        productId,
        listId: list.id,
        groupColor: _item.groupColor || void 0
      });
      return this.items.add(itemDB);
    })));
  }
  updateItem(id2, item) {
    const _item = this.dataMapper.mapItemToDBUpdate(item);
    return from(this.items.update(id2, _item));
  }
  deleteItem(id2) {
    return from(this.items.delete(id2));
  }
  createList(listData) {
    return from(this.transaction("rw", this.lists, () => __async(this, null, function* () {
      const list = {
        name: listData.name,
        comment: listData.comment || void 0,
        imageId: listData.imageId || void 0
      };
      return this.lists.add(list);
    })));
  }
  //TODO: replace this eager loading with simple queries and lazy loading
  getAllLists() {
    return from(liveQuery(() => this.transaction("r", this.lists, this.items, this.products, () => __async(this, null, function* () {
      const [lists, itemDBs, products] = yield Promise.all([
        this.lists.toArray(),
        this.items.toArray(),
        this.products.toArray()
      ]);
      const productMap = new Map(products.map((p) => [p.id, p]));
      const itemsByList = /* @__PURE__ */ new Map();
      for (const itemDB of itemDBs) {
        const productDB = productMap.get(itemDB.productId);
        if (!productDB) {
          throw new Error(`Product ${itemDB.productId} not found`);
        }
        const item = this.dataMapper.mapItemFromDB(itemDB, productDB);
        if (!itemsByList.has(itemDB.listId)) {
          itemsByList.set(itemDB.listId, []);
        }
        itemsByList.get(itemDB.listId).push(item);
      }
      return lists.map((listDB) => {
        const items = itemsByList.get(listDB.id) ?? [];
        return this.dataMapper.mapListFromDB(listDB, items);
      });
    }))));
  }
  getListById(id2) {
    return from(liveQuery(() => this.transaction("r", this.lists, this.items, this.products, () => __async(this, null, function* () {
      const listDB = yield this.lists.get(id2);
      if (!listDB) {
        throw new Error(`List ${id2} not found`);
      }
      const itemsDB = yield this.items.where("listId").equals(id2).toArray();
      const productIds = [...new Set(itemsDB.map((i) => i.productId))];
      const products = yield this.products.bulkGet(productIds);
      console.log(`Loaded list ${id2} from DB:`, products);
      const itemsWithProduct = itemsDB.map((itemDB) => {
        const productDB = products.find((p) => p?.id === itemDB.productId);
        return this.dataMapper.mapItemFromDB(itemDB, productDB);
      });
      const list = this.dataMapper.mapListFromDB(listDB, itemsWithProduct);
      console.log("Loaded list from DB:", list);
      return list;
    }))));
  }
  updateList(id2, listData) {
    return from(this.transaction("rw", this.lists, () => __async(this, null, function* () {
      const list = {
        name: listData.name,
        comment: listData.comment || void 0,
        imageId: listData.imageId || void 0
      };
      return this.lists.update(id2, list);
    })));
  }
  deleteList(id2) {
    return from(this.lists.delete(id2));
  }
  createImage(image) {
    return __async(this, null, function* () {
      const imageDB = {
        data: image,
        updatedAt: (/* @__PURE__ */ new Date()).getTime()
      };
      return this.images.add(imageDB);
    });
  }
  createImage$(image) {
    return from(this.createImage(image));
  }
  getImageById(imageId) {
    return __async(this, null, function* () {
      const imageDB = yield this.images.get(imageId);
      if (!imageDB) {
        throw new Error(`Image with id ${imageId} not found`);
      }
      return imageDB?.data;
    });
  }
};
_DexieDataBase.\u0275fac = function DexieDataBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DexieDataBase)();
};
_DexieDataBase.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DexieDataBase, factory: _DexieDataBase.\u0275fac, providedIn: "root" });
var DexieDataBase = _DexieDataBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DexieDataBase, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  environment,
  DexieDataBase
};
/*! Bundled license information:

dexie/dist/dexie.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=chunk-FMG23KCI.js.map
