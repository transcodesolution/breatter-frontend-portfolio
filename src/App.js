import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { requestForToken } from "./firebase";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { gapi } from "gapi-script";
import { ApiGetUser } from "./Helpers/Api/ApiData";
import { setUser } from "./Store/Reducers/Userreducer/user";
import { useNavigate } from "react-router-dom";
import countryCodes from 'country-codes-list'
import getSymbolFromCurrency from 'currency-symbol-map'
import axios from "axios";
import { setRate } from "./Store/Reducers/Currencyreducer/currency";

function App() {
  const myCountryCodesObject = countryCodes.customList('countryCallingCode', '{currencyCode}')
  console.log(myCountryCodesObject)
  const user = useSelector((state) => state.user.profile);
  requestForToken();
  const token = useSelector((state) => state.auth.token);
  const toggle = useSelector((state) => state.user.isUpdate);

  const dispatch = useDispatch();
  console.log("token", token)
  const navigate = useNavigate()
  useEffect(() => {
    const initClient = () => {
      // gapi?.client?.init({
      //   clientId:
      //     "816587088072-mlqlvbpig16sa687eddfg2vskoth81eo.apps.googleusercontent.com",
      //   scope: "email profile",
      // });
      window.gapi.client.init({
        clientId:
          "816587088072-mlqlvbpig16sa687eddfg2vskoth81eo.apps.googleusercontent.com",
        scope: "email profile",
        plugin_name: "question answere",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  useEffect(() => {
    console.log("insider")
    try {
      ApiGetUser('/profile').then((response) => {
        console.log(response)
        dispatch(setUser({ data: response?.data?.data }))
      }).catch((error) => {
        if (error?.status == '401' && token) {
          console.log(error)
          localStorage.setItem('persist:auth', '')
          navigate('/')
        }
        // toast.error(error.message)
      })

    } catch (error) {

    }
  }, [toggle])
  useEffect(() => {
    axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${'inr'}.json`)
      .then((res) => {
        let converter = countryCodes.customList('countryCallingCode', '{currencyCode}')[user?.countryCode]
        console.log(converter)
        dispatch(setRate({ rate: res.data['inr'][converter.toLowerCase()], symbol: getSymbolFromCurrency(converter), code: converter }))
        //   console.log(res.data['inr'][countryCodes.customList('countryCallingCode', '{currencyCode}')[user?.countryCode].toLowerCase()]);
        //  console.log(getSymbolFromCurrency(countryCodes.customList('countryCallingCode', '{currencyCode}')[user?.countryCode]))
      })
  }, [user]);

  return (
    <div className="main_wrapper">

      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {!token ? <PublicRoute /> : <PrivateRoute />}
    </div>
  );
}

export default App;
