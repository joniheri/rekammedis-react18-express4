import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";

// Pages
import Home from "./views/Pages/Home";
import About from "./views/Pages/About";
import DataPasienFromApi from "./views/Pages/DataPasienFromApi";
import PageNotFound from "./views/Pages/PageNotFound";
import DataTable1 from "./views/Pages/DataTable/DataTable1";
import DataTable2 from "./views/Pages/DataTable/DataTable2";

export default function Routes() {
  return (
    <>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/datatable">
          <Route index element={<DataTable1 />} />
          <Route path="datatable1" element={<DataTable1 />} />
          <Route path="datatable2" element={<DataTable2 />} />
        </Route>
        <Route path="/datapasien" element={<DataPasienFromApi />} />
        <Route path="*" element={<PageNotFound />} />
      </ReactRoutes>
    </>
  );
}
