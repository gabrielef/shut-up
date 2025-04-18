const shutUpLogLevel = process.env.SHUT_UP_LOG_LEVEL || "error";
const shutUpAvailableLogLevels = ["trace", "debug", "info", "log", "warn", "error"];

//save original functions
const originalConsole = {
  debug: console.debug,
  info: console.info,
  log: console.log,
  warn: console.warn,
  error: console.error,
  table: console.table,
  time: console.time,
  timeEnd: console.timeEnd,
  timeLog: console.timeLog,
  trace: console.trace
};

function restoreConsole() {
  Object.keys(originalConsole).forEach(key => {
    console[key] = originalConsole[key];
  });
}

function shutUp(level) {
  //restore all original functions
  restoreConsole();

  switch (level) {
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
}

function setLogLevel(level) {
  if (!shutUpAvailableLogLevels.includes(level)) {
    throw new Error(`ShutUp: Invalid log level. Must be one of: ${shutUpAvailableLogLevels.join(", ")}`);
  }
  shutUp(level);
}

shutUp(shutUpLogLevel);

module.exports = {
  setLogLevel
};