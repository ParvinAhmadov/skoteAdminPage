import axios from "axios";

export class UserService {
  async getUsers(payload) {
    try {
      const searchParams = new URLSearchParams();
      if (payload.companyName) {
        searchParams.append("companyName", payload.companyName);
      }
      const baseURL = new URL("http://localhost:3002/joblist");
      baseURL.search = searchParams.toString();
      const response = await axios({
        url: baseURL.toString(),
        method: "GET",
      });
      return response.data; 
    } catch (error) {
      console.error("Network request failed", error);
      throw error;
    }
  }
}
