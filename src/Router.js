import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { Header } from "./compornents/Header";
import { Footer } from "./compornents/Footer";
import { PageNotFound } from "./pages/PageNotFound";
const Router = () => {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path={routes.home} element={<Home />}></Route>
        <Route path={routes.detail} element={<Detail />}></Route>
        <Route path={routes.search} element={<Search />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>

      <Footer />
    </HashRouter>
  );
};

export default Router;
