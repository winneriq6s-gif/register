"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatService = exports.FormatService = void 0;
// format module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class FormatService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("format");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("format is disabled");
            return null;
        }
        this.logger.info("Executing format", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.FormatService = FormatService;
exports.formatService = new FormatService();

// pr-242 touch

// unique change for PR 234
