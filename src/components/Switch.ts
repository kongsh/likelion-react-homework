import React from "react";

const { createElement: h } = React;

interface Switch {
  id: string;
  labelText: string;
}

export default function Switch({ id, labelText }: Switch) {
  return h(
    "div",
    {
      className: "switch",
      role: "form",
    },
    h(
      "label",
      null,
      h("span", { className: "sr-only" }, labelText),
      h("input", {
        role: "switch",
        type: "checkbox",
        id,
      })
    )
  );
}
