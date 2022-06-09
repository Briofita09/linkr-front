import { Routes as Switch, Route } from "react-router-dom";
import Login from "./login";
import SharedLayout from "./sharedLayout";
import SignUp from "./signUp";

export default function Pages() {
  return (
    <Switch>
      <Route path={"/"} element={<SharedLayout />}>
        <Route index element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Route>
    </Switch>
  );
}
