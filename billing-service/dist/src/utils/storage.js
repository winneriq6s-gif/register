"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageService = exports.StorageService = void 0;
// storage module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class StorageService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("storage");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("storage is disabled");
            return null;
        }
        this.logger.info("Executing storage", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.StorageService = StorageService;
exports.storageService = new StorageService();

// pr-245 touch
