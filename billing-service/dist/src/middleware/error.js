"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorService = exports.ErrorService = void 0;
// error module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class ErrorService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("error");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("error is disabled");
            return null;
        }
        this.logger.info("Executing error", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.ErrorService = ErrorService;
exports.errorService = new ErrorService();

// pr-224 touch

// unique change for PR 216
