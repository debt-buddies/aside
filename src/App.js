import React, { lazy, Suspense } from "react";
import "./App.scss";

const Header = lazy(() => import("HomeApp/Header"));

function App() {
  return (
    <div className="aside">
      <Suspense fallback={<div>loading header...</div>}>
        <Header subtitle="for aside" />
      </Suspense>
      <div className="mainContent">Ini Aside</div>
    </div>
  );
}

export default App;
