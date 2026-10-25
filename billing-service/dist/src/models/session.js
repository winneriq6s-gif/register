"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionService = exports.SessionService = void 0;
// session module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class SessionService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("session");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("session is disabled");
            return null;
        }
        this.logger.info("Executing session", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.SessionService = SessionService;
exports.sessionService = new SessionService();

// pr-230 touch

// unique change for PR 222
