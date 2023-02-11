import React, { useEffect, useState } from "react";
import Header from "./header";
import Home from "./home";
import Checkout from "./checkout";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import { auth } from "./firebase";
import { useStateValue } from "./stateprovider";
import Payment from "./payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./orders";
// Note, stripe password is 10 letters long

const promise = loadStripe(
  "pk_test_51MJHI1CkeE3wG5GFwSpACUMeKWabJ4WKXoU3jEsbFBUqgFi0E916i89SZ438T6tWfITwYxybzFEeCGaDtKhvAkoQ00JihqGf7U"
);

function App() {
  const [{}, dispatch] = useStateValue();
  console.log("record");
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/login"
          element={
            <div>
              {/* <Header /> */}
              <Login />
              {/* <Login /> */}
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
        <Route
          path="/payment"
          element={
            <div>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </div>
          }
        />
        <Route
          path="/orders"
          element={
            <div>
              <Header />
              <Orders />
            </div>
          }
        />
        <Route
          path="/Fakazon"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
