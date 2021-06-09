import axios from "../axios.config";
import { CancelToken } from "axios";

const getCompetition = async (signal: CancelToken) => {
  try {
    const response = await axios.get("/competitions/?plan=TIER_ONE", { cancelToken: signal });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default { getCompetition };
