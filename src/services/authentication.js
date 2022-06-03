import authenticationService from "../api/authentication";
import { AlertService } from "./alertService.js";
import { authErrors } from "../constants/messages/authMessages";
import { store } from "../index.js";
import { setUserRole, logout } from "../reduxActions/auth";

export function register(values, history) {
  var model = {
    name: values.name,
    surname: values.surname,
    email: values.email,
    password: values.password,
  };

  authenticationService
    .registerUser(model)
    .then(
      () => {
        AlertService.successMessage(authErrors.REGISTRATION_SUCCESS);
        history.push("/login");
      },
      (err) => {
        err.response.status === 400
          ? AlertService.errorMessage(
              authErrors.REGISTRATION_FAILED,
              authErrors.REGISTRATION_FAILED_USER_ALREADY_EXIST
            )
          : AlertService.errorMessage(
              authErrors.REGISTRATION_FAILED,
              authErrors.SOMETHING_WENT_WRONG
            );
      }
    )
    .catch(() => {
      AlertService.errorMessage(
        authErrors.REGISTRATION_FAILED,
        authErrors.SOMETHING_WENT_WRONG
      );
    });
}

export function login(values, history) {
  var model = {
    email: values.email,
    password: values.password,
  };

  authenticationService
    .loginUser(model)
    .then(
      (response) => {
        console.log(response.data.token);
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("user", JSON.stringify(response.data));
        store.dispatch(setUserRole());

        history.push("/main");
      },
      (err) => {
        err.response.status === 400
          ? AlertService.errorMessage(
              authErrors.LOGIN_FAILED,
              authErrors.LOGIN_FAILED_USER_ALREADY_EXIST
            )
          : AlertService.errorMessage(
              authErrors.LOGIN_FAILED,
              authErrors.SOMETHING_WENT_WRONG
            );
      }
    )
    .catch(() => {
      AlertService.errorMessage(
        authErrors.LOGIN_FAILED,
        authErrors.SOMETHING_WENT_WRONG
      );
    });
}

export function logoutUser() {
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(""));
}
