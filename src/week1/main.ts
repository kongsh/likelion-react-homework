import React from "react";
import { App } from "./components/App";
import ReactDom from "react-dom/client";

const root = document.getElementById("react");

if (!root) {
  alert("문서에 #react 요소가 존재하지 않습니다.");
} else {
  ReactDom.createRoot(root).render(React.createElement(App));
}
