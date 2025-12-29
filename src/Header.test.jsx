import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { BrowserRouter } from "react-router-dom";
import { expect, it } from "vitest";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  //   const loginButton = screen.getByText("Login")

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //regex below one
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
