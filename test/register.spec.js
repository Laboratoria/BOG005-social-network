import { register } from "../src/components/register.js";

jest.mock("../src/lib/index.js", () => ({
  auth: jest.fn(() =>
    // función jest.fn crea una función para jest
    ({ auth: "TEST" })
  ),

  createUserWithEmailAndPassword: jest.fn((auth, email, password) => {
    if (!email || !password) {
      throw new Error("ERROR");
    }
    Promise.resolve({ user: "admin" });
  }),
}));

describe("Test for the register function", () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="root"></div>';
    window.history.pushState(
      {}, // estado vacio
      "/register", // title
      window.location.origin + "/register" // URL + (Ruta)
    );
  });

  beforeEach(() => {
    document.getElementById("root").innerHTML = "";
    document.getElementById("root").appendChild(register());
  });

  it("should render register correctly", () => {
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it("should go back home when clicking back button", () => {
    document.getElementById("ButtonRegresar").click();
    expect(window.location.pathname).toBe("/");
  });
});