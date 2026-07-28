import { expect, test } from "vitest";
import helloWorld from "./hello-word";

test("helloWorld", () => {
  expect(helloWorld()).toEqual("Hello World");
});
