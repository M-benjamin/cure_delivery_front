import axios from "axios";
import Keychain from "react-native-keychain";

import { SIGNIN_URL } from "../api";
import { addAlert } from "./alertsActions";

exports.loginUser = (email, password) => {
  return function(dispatch) {
    return axios
      .post(SIGNIN_URL, { email, password })
      .then(response => {
        console.log("response is", response);
        // var { user_id, token } = response.data;
        // Keychain.setGenericPassword(user_id, token)
        //   .then(function() {
        //     dispatch(authUser(user_id));
        //   })
        //   .catch(error => {
        //     dispatch(addAlert("Could not log in."));
        //   });
      })
      .catch(error => {
        dispatch();
      });
  };
};
