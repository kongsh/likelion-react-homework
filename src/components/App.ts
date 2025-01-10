import React, { Fragment } from "react";
import Switch from "./Switch";

const { createElement: h } = React;

export default function App() {
  return h(
    Fragment,
    null,
    Switch({
      id: "switch-1",
      labelText: "switch-1",
    }),
    Switch({
      id: "switch-2",
      labelText: "switch-2",
    })
  );
}
