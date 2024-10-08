import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Hadit from "../pages/Hadit";
import Quran from "../pages/Quran";
import Tafsser from "../pages/Tafsser";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="hadit" element={<Hadit />}></Route>
        <Route path="quran" element={<Quran />}></Route>
        <Route path="tafsser" element={<Tafsser />}></Route>
      </Route>
    </>
  )
);
export default router;
