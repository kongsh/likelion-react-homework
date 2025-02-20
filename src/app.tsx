import { useState } from "react";

import { getUIView } from "./lib/ui-view";
import Nav from "./components/nav";
import { App as WeekOneApp } from "./week1/components/App";
import Cart from "./week5/cart";
import { tm } from "@/utils/tw-merge";
import SearchPage from "./week6";

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
    case "week6": {
      viewElement = <SearchPage />;
      break;
    }
  }
  return viewElement;
};

function App() {
  const [uiView] = useState<string>(getUIView);

  const viewElement = getViewComponent(uiView);

  return (
    <div className={tm("w-auto h-auto mx-auto my-4", "flex flex-col gap-4")}>
      <h1 className="text-3xl font-bold">Homeworks</h1>
      <Nav />

      {viewElement}
    </div>
  );
}

export default App;
