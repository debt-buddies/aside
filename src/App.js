import React, { lazy, Suspense, useState } from "react";
import "./App.scss";
import useStore from "HomeApp/hooks/useStore";
import { useStoreSelector } from "HomeApp/hooks/useStoreSelector";

const Header = lazy(() => import("HomeApp/Header"));

function App() {
  const [search, setSearch] = useState("");
  const listTodos = useStoreSelector((state) => state.todos.listTodos);
  const { getDataDetail, changePreview } = useStore();

  const lists = listTodos?.filter((ls) => ls.includes(search));

  const handleClick = (detail) => {
    getDataDetail(detail);
    changePreview("DETAIL");
  };
  return (
    <div className="aside">
      <Suspense fallback={<div>loading header...</div>}>
        <Header title="Daftar list anda" bgColor="white" />
      </Suspense>
      <hr />
      <div className="mainContent">
        {listTodos?.length === 0 ? (
          <div>Belum ada list</div>
        ) : (
          lists.map((ls, i) => (
            <button key={i} className="item" onClick={() => handleClick(ls)}>
              {i + 1}. {ls}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
