"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiService = exports.ApiService = void 0;
// api module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class ApiService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("api");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("api is disabled");
            return null;
        }
        this.logger.info("Executing api", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.ApiService = ApiService;
exports.apiService = new ApiService();

// pr-237 touch

// unique change for PR 229
