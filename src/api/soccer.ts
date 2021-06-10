import axios from "../axios.config";
import { CancelToken } from "axios";

const getCompetition = async (signal: CancelToken) => {
  try {
    const response = await axios.get("/competitions/?plan=TIER_ONE", { cancelToken: signal });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// https://api.football-data.org/v2/competitions/2013/teams?season=2019 example
const getTeams = async (signal: CancelToken, idLeague: string, season: string) => {
  try {
    const response = await axios.get(`/competitions/${idLeague}/teams?season=${season}`, {
      cancelToken: signal,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default { getCompetition, getTeams };
