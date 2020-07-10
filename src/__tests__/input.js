import { screen, waitFor } from "@testing-library/dom";
import "@testing-library/jest-dom";
import {
  newTextInput,
  newTextArea,
  newEmailInput,
  newSelectInput,
  newCheckboxInput,
  newHiddenInput,
} from "../form/input";
import { check } from "prettier";

describe("rendering the basic Inputs", () => {
  test("Creating a Input", () => {
    const input = newTextInput({ name: "TextInput" });
    expect(input.getAttribute("type")).toBe("text");
    expect(input.getAttribute("name")).toBe("TextInput");
    expect(input.getAttribute("id")).toBe("TextInput");
    expect(input).toHaveValue("");
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
  });

  test("Creating a TextArea Input", () => {
    const textarea = newTextArea({ name: "TextArea" });
    expect(textarea.getAttribute("name")).toBe("TextArea");
    expect(textarea.getAttribute("id")).toBe("TextArea");
    expect(textarea).toHaveValue("");
    expect(textarea).not.toBeRequired();
    expect(textarea).not.toBeDisabled();
  });

  test("Creating a Email Input", () => {
    const input = newEmailInput({ name: "EmailInput" });
    expect(input.getAttribute("type")).toBe("email");
    expect(input.getAttribute("name")).toBe("EmailInput");
    expect(input.getAttribute("id")).toBe("EmailInput");
    expect(input).toHaveValue("");
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
  });

  test("Creating a Select Input", () => {
    const field = {
      name: "Select",
      options: [
        { label: "Select a option...", value: "" },
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
      ],
    };
    const select = newSelectInput(field);
    expect(select.getAttribute("name")).toBe("Select");
    expect(select.getAttribute("id")).toBe("Select");
    expect(select).toHaveValue("");
    expect(select).toHaveDisplayValue("Select a option...");
    expect(select).not.toBeRequired();
    expect(select).not.toBeDisabled();
  });

  test("Creating a Checkboxes Input", () => {
    const field = {
      name: "Checkbox",
      default: [1, 2],
      options: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 },
      ],
    };
    newCheckboxInput(field);

    waitFor(() => {
      const op1 = screen.getByText("Option 1");
      const op2 = screen.getByText("Option 2");
      const op3 = screen.getByText("Option 3");
      expect(op1).toBeChecked();
      expect(op2).toBeChecked();
      expect(op3).not.toBeChecked();
    });
  });

  test("Creating a Hidden Input", () => {
    const input = newHiddenInput({ name: "id" });
    expect(input.getAttribute("type")).toBe("text");
    expect(input.getAttribute("name")).toBe("id");
    expect(input.getAttribute("id")).toBe("id");
    expect(input).toHaveValue("");
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
    expect(input).not.toBeVisible();
  });

  //TODO newBooleanInput
});
