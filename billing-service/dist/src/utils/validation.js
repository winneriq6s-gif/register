"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationService = exports.ValidationService = void 0;
// validation module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class ValidationService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("validation");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("validation is disabled");
            return null;
        }
        this.logger.info("Executing validation", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.ValidationService = ValidationService;
exports.validationService = new ValidationService();

// pr-246 touch

// unique change for PR 238
