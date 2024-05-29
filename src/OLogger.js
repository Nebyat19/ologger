class OLogger {
    static isEnabled = true;
  
    static log(message, ...args) {
      if (OLogger.isEnabled) {
        console.log(message, ...args);
      }
    }
  
    static warn(message, ...args) {
      if (OLogger.isEnabled) {
        console.warn(message, ...args);
      }
    }
  
    static error(message, ...args) {
      if (OLogger.isEnabled) {
        console.error(message, ...args);
      }
    }
  
    static info(message, ...args) {
      if (OLogger.isEnabled) {
        console.info(message, ...args);
      }
    }
  
    static disable() {
      OLogger.isEnabled = false;
    }
  
    static enable() {
      OLogger.isEnabled = true;
    }
  }
  
  if (typeof window !== 'undefined') {
    window.OLogger = OLogger;
  }
  
  export default OLogger;
  