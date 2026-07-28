import { expect, test, describe, vi, afterEach } from "vitest";
import { getUsers } from "./get-users";
import { AppConnectionError } from "@/services/exceptions/app-connection-error";
import { regularList } from "@/test/mocks/user-mock";

describe("getUsers", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  test("should return users", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(regularList),
      }),
    );

    const users = await getUsers();
    expect(users).toEqual(regularList);
  });

  test("should throw an error if the request fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
      }),
    );

    await expect(getUsers()).rejects.toThrow(AppConnectionError);
  });
});
