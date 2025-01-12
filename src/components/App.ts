import React, { Fragment } from "react";
import Switch from "./Switch";
import Chip from "./Chip";

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
    }),
    Chip({
      id: "chip-1",
      labelText: "텍스트",
    }),
    Chip({
      id: "chip-2",
      labelText: "모두의 인기 콘텐츠",
    })
  );
}
