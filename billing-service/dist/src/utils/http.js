"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpService = exports.HttpService = void 0;
// http module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class HttpService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("http");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("http is disabled");
            return null;
        }
        this.logger.info("Executing http", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.HttpService = HttpService;
exports.httpService = new HttpService();

// pr-243 touch

// unique change for PR 235
