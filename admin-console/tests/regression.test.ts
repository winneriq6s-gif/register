import { apiService } from "../src/services/api";

describe("regression scenario", () => {
  it("executes successfully", async () => {
    const result = await apiService.execute({ id: 1 });
    expect(result).toEqual({ ok: true, data: { id: 1 } });
  });

  it("returns null when disabled", async () => {
    const { ApiService } = await import("../src/services/api");
    const service = new ApiService({ enabled: false });
    const result = await service.execute({ id: 2 });
    expect(result).toBeNull();
  });

  it("exposes config", async () => {
    const { ApiService } = await import("../src/services/api");
    const service = new ApiService({ timeout: 1000 });
    expect(service.getConfig().timeout).toBe(1000);
  });
});

// pr-050 touch

// pr-050 touch

// unique change for PR 46
