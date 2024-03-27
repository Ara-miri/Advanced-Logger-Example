const AdvancedLogger = require("advanced-logger-example");

// Create a logger instance with default settings
const logger = new AdvancedLogger();

// Use the logger to log messages of different severities
logger.info("This is an informational message");
logger.warn("This is a warning message");
logger.error("This is an error message");

// If your logger supports custom configuration, demonstrate that as well
const fileLogger = new AdvancedLogger({
  output: "file",
  filePath: "./logs.txt",
});
fileLogger.info("This message will be logged to a file");
