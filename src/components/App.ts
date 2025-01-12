import React, { Fragment } from "react";
import Switch from "./Switch";
import Chip from "./Chip";
import Profile from "./Profile";
import Navigation from "./Navigation";

const { createElement: h } = React;

export default function App() {
  return h(
    Fragment,
    null,
    Navigation({
      confirmButtonId: "nav-1",
      headerText: "텍스트",
    }),
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
      labelText: "공개 예정",
    }),
    Chip({
      id: "chip-2",
      labelText: "모두의 인기 콘텐츠",
    }),
    Chip({
      id: "chip-3",
      labelText: "TOP 10",
    }),
    Profile({}),
    Profile({
      href: "#",
      userName: "피카츄",
      userImg: "src/assets/pika.webp",
    }),
    Profile({
      href: "#",
      userName: "피카츄",
      userImg: "src/assets/pika.webp",
      edit: true,
    })
  );
}
