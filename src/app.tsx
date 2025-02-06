import { useState } from "react";

import { getUIView } from "./lib/ui-view";
import Nav from "./components/nav";
import { App as WeekOneApp } from "./week1/components/App";
import Cart from "./week5/Cart";

const getViewComponent = (uiView: string) => {
  let viewElement: React.ReactElement | null = null;
  switch (uiView) {
    case "week1": {
      viewElement = <WeekOneApp />;
      break;
    }
    case "week5": {
      viewElement = <Cart />;
      break;
    }
  }
  return viewElement;
};

function App() {
  const [uiView] = useState<string>(getUIView);

  const viewElement = getViewComponent(uiView);

  return (
    <div className="bg-slate-600/20">
      <h1>Homeworks</h1>
      <Nav />

      {viewElement}
    </div>
  );
}

export default App;
