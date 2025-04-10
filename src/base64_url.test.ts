import assert from "assert";
import {base64ToBase64Url, base64UrlToBase64} from "./base64_url";

// Note: valid base64 can only have exactly 0, 1, or 2 padding characters
describe("base64Url", () => {
  it("padding 2", () => {
    assert.strictEqual(base64ToBase64Url("AA/+/+=="),"AA_-_-");
    assert.strictEqual(base64UrlToBase64("AA_-_-"),"AA/+/+==");
  });
  it("padding 1", () => {
    assert.strictEqual(base64ToBase64Url("AAA/+/+="),"AAA_-_-");
    assert.strictEqual(base64UrlToBase64("AAA_-_-"),"AAA/+/+=");
  });
  it("no padding", () => {
    assert.strictEqual(base64ToBase64Url("AAAA/+/+"),"AAAA_-_-");
    assert.strictEqual(base64UrlToBase64("AAAA_-_-"),"AAAA/+/+");
  });
  it("invalid message length", () => {
    assert.throws(() => base64ToBase64Url("AAAAA"));
    assert.throws(() => base64UrlToBase64("A"));
  });
});
