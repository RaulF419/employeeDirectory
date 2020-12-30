import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25&nat=us";

// Export an object with a "search" method that searches the Giphy API for the passed query
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function() {
   return axios.get(BASEURL);
  }
};
