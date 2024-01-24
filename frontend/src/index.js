import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./assests/styles/bootstrap.custom.css";
import "./assests/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Homescreen from "./screens/Homescreen";
import ProductScreen from "./screens/productScreen";
import CartScreesn from "./screens/CartScreesn";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from './screens/RegisterScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Homescreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreesn />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
