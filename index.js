switch (process.env.SHUT_UP_LOG_LEVEL || "error") {
  case "trace":
    //show all log levels
    break;
  case "debug":
    console.trace = function () { };
    break;
  case "info":
    console.debug = function () { };
    console.table = function () { };
    console.time = function () { };
    console.timeEnd = function () { };
    console.timeLog = function () { };
    console.trace = function () { };
    break;
  case "log":
    console.debug = function () { };
    console.info = function () { };
    console.table = function () { };
    console.time = function () { };
    console.timeEnd = function () { };
    console.timeLog = function () { };
    console.trace = function () { };
    break;
  case "warn":
    console.debug = function () { };
    console.info = function () { };
    console.log = function () { };
    console.table = function () { };
    console.time = function () { };
    console.timeEnd = function () { };
    console.timeLog = function () { };
    console.trace = function () { };
    break;
  case "error":
    console.debug = function () { };
    console.info = function () { };
    console.log = function () { };
    console.table = function () { };
    console.time = function () { };
    console.timeEnd = function () { };
    console.timeLog = function () { };
    console.trace = function () { };
    console.warn = function () { };
    break;
}
