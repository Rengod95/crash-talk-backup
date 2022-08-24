import axios from "axios";
import GV from "./global_variables";

const requester = (function () {
  axios.defaults.allowEI03 = true;
  axios.defaults.withCredentials = true;

  return {
    postUserData: async (header, data, ENDPOINT) => {
      const response = await axios({
        url: ENDPOINT,
        method: "POST",
        mode: "cors",
        headers: { header },
        ContentType: "application/json",
        data: {
          ...data,
        },
      });
      return response;
    },

    joinRoomRequest: async (header, user, room_url) => {
      const response = await axios.get(room_url, {
        headers: header,
        auth: user,
      });
      return response;
    },

    getExistent: async (header, inputData, ENDPOINT) => {
      const response = await axios.get(ENDPOINT, {
        headers: { header },
        ContentType: "application/json",
        data: inputData,
      });

      return response;
    },
  };
})();

export default requester;
