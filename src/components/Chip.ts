import React from "react";

const { createElement: h } = React;

interface Chip {
  id: string;
  labelText: string;
}

export default function Chip({ id, labelText }: Chip) {
  return h(
    "div",
    {
      className: "chip",
    },
    h(
      "label",
      null,
      h("input", {
        type: "checkbox",
        id,
      }),
      h("span", null, labelText)
    )
  );
}
