import { changeRoute } from "../../src/lib/router.js";
jest.mock("../../src/auth.js");
jest.mock("../../src/firestore.js");

describe("Root", () => {
  it("Change a register root", () => {
    document.body.innerHTML = '<div id="content"></div>';
    const result = changeRoute("#register");
    expect(result.querySelector(".registerTitle").innerHTML).toBe("Regístrate");
  });
});
