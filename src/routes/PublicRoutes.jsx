import { useState } from "react";
import Home from "../pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout";

function PublicRoutes() {
  const [activeTab, setActiveTab] = useState("/");
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
}

export default PublicRoutes;
