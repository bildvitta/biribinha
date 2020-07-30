export default function (element, attributes = {}) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
