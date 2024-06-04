switch (process.env.SHUT_UP_LOG_LEVEL || "error") {
  case "trace":
    //show all log levels
    break;
  case "debug":
    console.trace = function () {};
    break;
  case "info":
    console.trace = function () {};
    console.debug = function () {};
    break;
  case "log":
    console.trace = function () {};
    console.debug = function () {};
    console.info = function () {};
    break;
  case "warn":
    console.trace = function () {};
    console.debug = function () {};
    console.info = function () {};
    console.log = function () {};
    break;
  case "error":
    console.trace = function () {};
    console.debug = function () {};
    console.info = function () {};
    console.log = function () {};
    console.warn = function () {};
    break;
}
