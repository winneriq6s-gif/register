"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = exports.ProductService = void 0;
// product module for billing-service
const logger_1 = require("../utils/logger");
const DEFAULT_CONFIG = {
    enabled: true,
    timeout: 5000,
    retries: 3,
};
class ProductService {
    config;
    logger;
    constructor(config = {}) {
        this.config = { ...DEFAULT_CONFIG, ...config };
        this.logger = new logger_1.LoggerService("product");
    }
    async execute(input) {
        if (!this.config.enabled) {
            this.logger.warn("product is disabled");
            return null;
        }
        this.logger.info("Executing product", { input });
        await new Promise((resolve) => setTimeout(resolve, 10));
        return { ok: true, data: input };
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.ProductService = ProductService;
exports.productService = new ProductService();

// pr-240 touch

// unique change for PR 232
