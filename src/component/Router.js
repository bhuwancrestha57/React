import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import MyApp from "../App";
// import Filter from "./projectarray/Filter";
// import DashBoard from "./DashBoard";
// import Header from "./Header";
import { lazy } from "react";
import UserDashBoard from "./UserDashBoard";
import UserFilter from "./UserFilter";
// import AppLayout from "./layout/AppLayout";
import UserApp from "./UserApp";
const Filter = lazy(() => import("../component/projectarray/Filter"));
const DashBoardLayout = lazy(() => import("../layout/DashBoardLayout"));
const Header = lazy(() => import("./Header"));
const MyApp = lazy(() => import("../App"));
const Hooks = lazy(() => import("./Hooks"));
const FilterLayout = lazy(() => import("../layout/FilterLayout"));
const AppLayout = lazy(() => import("../layout/AppLayout"));

const CallbackParent = lazy(() =>
  import("../component/callback/CallbackParent")
);

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<MyApp />} />
        <Route path="user" element={<UserApp />} />
      </Route>
      <Route path="/filter" element={<FilterLayout />}>
        <Route index element={<Filter />} />
        <Route path="user" element={<UserFilter />} />
      </Route>
      <Route path="/hooks" element={<DashBoardLayout />}>
        <Route index element={<Hooks />} />
        <Route path="user" element={<UserDashBoard />} />
      </Route>

      <Route path="/header" element={<Header />} />
      <Route path="/callback" element={<CallbackParent />} />
    </Route>
  )
);
