import React from "react";
import "react-s-alert/dist/s-alert-default.css";
import toast, { Toaster } from "react-hot-toast";
import { validationsMessages } from "../../constants";

const commonToasts = {
  errorToast,
  successToast,
};
export default commonToasts;

function errorToast(data) {
  toast.error(data, {
    duration: 3000,
    position: validationsMessages.TOASTS_POSITION,
    className: "toast-div-address",
  });
}

function successToast(data) {
  toast.success(data, {
    duration: 3000,
    position: validationsMessages.TOASTS_POSITION,
    className: "toast-div-address",
  });
}
