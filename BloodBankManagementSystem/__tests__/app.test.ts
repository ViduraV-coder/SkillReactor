import request from "supertest";

import app from "../src/app";

describe("Test app.ts", () => {
  test("wrong URL", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual("Make sure the URL is correct");
  });

});