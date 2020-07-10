import api from "./services/api";

import { createInputLabel } from "./form/label";
import {
  newTextInput,
  newBooleanInput,
  newCheckboxInput,
  newEmailInput,
  newHiddenInput,
  newSelectInput,
  newTextArea,
} from "./form/input";

async function getStatus() {
  try {
    // const response = await api.get(`/assembleia`);
    const response = await api.get(`/colaborador`);

    const fields = Object.values(response.data.fields);
    const results = response.data.result;

    if (fields) {
      const app = document.getElementById("app");
      const createform = document.createElement("form");
      createform.setAttribute("id", "formCreator");
      createform.setAttribute("action", "");
      createform.setAttribute("method", "post");
      app.appendChild(createform);
    }

    fieldCreate(fields);
    fieldResults(results);
    // fieldErrors(erros);
  } catch (error) {
    console.error(`Alguma coisa aconteceu: `, error);
  }
}

getStatus();

function fieldCreate(fields) {
  const form = document.getElementById("formCreator");

  fields.map((field) => {
    if (field.label && field.type !== "hidden") {
      const label = createInputLabel(field.label, field.name);
      form.appendChild(label);
    }

    if (field.type) {
      switch (field.type) {
        case "text":
          form.appendChild(newTextInput(field));
          break;

        case "email":
          form.appendChild(newEmailInput(field));
          break;

        case "textarea":
          form.appendChild(newTextArea(field));
          break;

        case "select":
          form.appendChild(newSelectInput(field));
          break;

        case "checkbox":
          form.appendChild(newCheckboxInput(field));
          break;

        case "boolean":
          form.appendChild(newBooleanInput(field));
          break;

        case "hidden":
          form.appendChild(newHiddenInput(field));
          break;

        default:
          break;
      }
    }
  });
}

function fieldResults(results) {
  Object.keys(results).forEach((key) => {
    console.log(`${key} - ${results[key]}`);
    const input = document.getElementById(`${key}`);

    if (input) {
      if (input.tagName === "SELECT") {
        console.log(input.options);

        for (var i = 0; input.options; i++) {
          console.log("option", input.options[i].value);
          if (input.options[i].value === results[key]) {
            input.selectedIndex = i;
          }
        }
      }

      input.setAttribute("value", results[key]);
    }
  });
}
