import axios from "axios";
import { toast } from "react-toastify";
//base url from .env file
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = 'http://192.168.29.132:80';
//default header for all request
const defaultHeaders = {
  isAuth: true,
  AdditionalParams: {},
  isJsonRequest: true,
  api_key: true,
};
export const ApiPostNoAuth = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + type, userData)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&  
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error?.response?.data);  
        } else {
          reject(error?.response?.data);
        }

      });
  });
};
export const ApiPostNoAuthWithToken = (type, userData, token) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + type, userData, { headers: { authorization: token } })
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error.response.data);
        } else {
          reject(error.response.data);
        }
      });
  });
};
export const ApiGetNoAuth = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + type)
      .then(async (responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        // console.log("responseJsonaaaaaaaaaaaaaaaaaaaaaaaaa", error);
        // if (
        //   error &&
        //   error.hasOwnProperty("response") &&
        //   error.response &&
        //   error.response.hasOwnProperty("data") &&
        //   error.response.data &&
        //   error.response.data.hasOwnProperty("error") &&
        //   error.response.data.error
        // ) {
        //   reject(error.response.data);
        // } else {
        // }
        reject(error);
      });
  });
};
export const ApiGet = (type) => {
  let ext = "/expert";
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + ext + type, getHttpOptions())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response?.data);
        }
      });
  });
};
export const ApiGetUser = (type) => {
  let ext = "/user";
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + ext + type, getHttpOptions())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response?.data);
        }
      });
  });
};
export const ApiPost = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + "/expert" + type, userData, getHttpOptions())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response?.data);
        }
      });
  });
};
export const ApiPostUser = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + "/user" + type, userData, getHttpOptions())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response?.data);
        }
      });
  });
};
export const ApiDelete = (type) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BASE_URL + type,getHttpOptions())
      .then((responseJson) => {
        // resolve(responseJson);
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response?.data);
        }
      });
  });
};
export const ApiPut = (type, userData) => {
  const Id = JSON.parse(localStorage.getItem("userinfo"));
  let ext = "admin";
  return new Promise((resolve, reject) => {
    axios
      .put(BASE_URL + ext + type, userData)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error.response.data);
        } else {
          reject(error.response.data);
        }
      });
  });
};
export const ApiUpload = (type, userData, AdditionalHeader) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + type, userData, {
        ...getHttpOptionsForUpload(),
        ...AdditionalHeader,
      })
      .then((responseJson) => {
        // resolve(responseJson);
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty("response") &&
          error.response &&
          error.response.hasOwnProperty("data") &&
          error.response.data &&
          error.response.data.hasOwnProperty("error") &&
          error.response.data.error
        ) {
          reject(error?.response?.data);
        } else {
          reject(error?.response?.data);
        }
      });
  });
};
export const getHttpOptions = (options = defaultHeaders) => {
  let headers = {};
  let token = localStorage.getItem("persist:auth");
  token = JSON.parse(JSON?.parse(token).token);
  if (options.hasOwnProperty("isAuth") && options.isAuth) {
    headers["Authorization"] = token;
    headers["Cache-Control"] = "no-cache";
  }
  if (options.hasOwnProperty("isJsonRequest") && options.isJsonRequest) {
    headers["Content-Type"] = "application/json";
  }
  if (options.hasOwnProperty("AdditionalParams") && options.AdditionalParams) {
    headers = { ...headers, ...options.AdditionalParams };
  }
  // headers["Access-Control-Allow-Origin"] = "*"
  /* setting appId as default */
  // headers['appid'] = 'hummz';
  return { headers };
};
export const getHttpOptionsForUpload = (options = defaultHeaders) => {
  let headers = {};
  let token = localStorage.getItem("persist:auth");
  token = JSON.parse(JSON.parse(token).token);


  if (options.hasOwnProperty("isAuth") && options.isAuth) {
    headers["Authorization"] = token;
    headers["Cache-Control"] = "no-cache";
  }

  // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  // headers['Access-Control-Allow-Origin'] ='https://checkout.stripe.com'
  if (options.hasOwnProperty("isJsonRequest") && options.isJsonRequest) {
    headers["Content-Type"] = "application/json";
  }

  if (options.hasOwnProperty("AdditionalParams") && options.AdditionalParams) {
    headers = { ...headers, ...options.AdditionalParams };
  }

  // headers["Access-Control-Allow-Origin"] = "*"
  headers["Content-Type"] = "multipart/form-data";

  /* setting appId as default */
  // headers['appid'] = 'hummz';

  return { headers };
};
