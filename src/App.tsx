import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import { MainRoutes, PublicRoutes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {MainRoutes.map(
            (item) =>
              !item.isDisable && (
                <Route
                  index={false}
                  caseSensitive={false}
                  path={item.path}
                  element={item.element}
                />
              ),
          )}
        </Route>
        {PublicRoutes.map(
          (item) =>
            !item.isDisable && (
              <Route
                index={false}
                caseSensitive={false}
                path={item.path}
                element={item.element}
              />
            ),
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
