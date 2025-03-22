import pino from "pino";

const logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  transport: undefined,
  timestamp: () => {
    const singaporeTime = new Intl.DateTimeFormat('en-SG', {
      timeZone: 'Asia/Singapore',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(new Date());
  
    return `,"timestamp":"${singaporeTime}"`;
  },
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() };
    },
    bindings (bindings) {
      return { pid: bindings.pid }
    }
  }
});

export default logger;

