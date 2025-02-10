import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test('renders "Hello World" as a text', () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('render "it is good to see you" as a Text', () => {
    render(<Greeting />);
    const beforeClick = screen.getByText("good to see you", { exact: false });
    expect(beforeClick).toBeInTheDocument();
  });

  test('render "after Click" as a Text', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const AfterClick = screen.getByText("After Click", { exact: false });
    expect(AfterClick).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const beforeClick = screen.queryByText("good to see you", { exact: false });
    expect(beforeClick).toBeNull();
  });
});
