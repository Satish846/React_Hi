// import { test } from "vitest";
import { describe, expect, test } from "vitest";
import Contact from "./components/Contact";
import { render, screen } from "@testing-library/react";

//describe is used for grouping the testcases
describe("Contact Us Page Component", () => {
  test("Contact component should render correctly", () => {
    // Test implementation will go here
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  //Instead of test we can write as "it"
  it("Should load button inside Contact component", () => {
    // Test implementation will go here
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input inside Contact component", () => {
    // Test implementation will go here
    render(<Contact />);

    const input = screen.getByPlaceholderText("Enter your name");

    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input boxes on contact component", () => {
    render(<Contact />);

    //Quering
    const inputBoxes = screen.getAllByRole("textbox");

    console.log(inputBoxes);
    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
