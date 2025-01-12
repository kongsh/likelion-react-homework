import React from "react";

const { createElement: h } = React;

interface Navigation {
  confirmButtonId: string;
  headerText: string;
}

export default function Navigation({ confirmButtonId, headerText }: Navigation) {
  return h(
    "div",
    {
      className: "navigation",
    },
    h(
      "nav",
      null,
      h(
        "button",
        {
          type: "button",
          "aria-label": "뒤로 가기",
        },
        h("img", {
          src: "src/assets/left-angle.svg",
          alt: "뒤로 가기",
        })
      ),
      h("h1", null, headerText),
      h("button", { type: "button", id: confirmButtonId }, "확인")
    )
  );
}
