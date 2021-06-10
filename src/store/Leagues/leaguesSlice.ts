import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CancelTokenSource } from "axios";

import api from "../../api/soccer";

export type TLeague = {
  country: string;
  league: string;
  id: string;
};

type TLeagueWithExtraField = TLeague & {
  latestAvalibaleSeason: number;
  isVisible: boolean;
};

type TInitialState = {
  leagues: TLeagueWithExtraField[];
  isFoundDataByFilter: boolean;
  selectedYear: number;
};

export const fetchCompetition = createAsyncThunk(
  "leagues/fetchCompetition",
  async (abortController: CancelTokenSource): Promise<TLeagueWithExtraField[]> => {
    const currentSeason = new Date().getFullYear() - 1;

    const response = await api.getCompetition(abortController.token);
    const data = response.competitions.map((data: any) => {
      const countAvaliableSeasons =
        data.area.name === "World"
          ? data.numberOfAvailableSeasons * 4
          : data.numberOfAvailableSeasons;

      const latestAvalibaleSeason = currentSeason - countAvaliableSeasons;

      return {
        country: data.area.name,
        league: data.name,
        id: data.id,
        latestAvalibaleSeason,
        isVisible: true,
      } as TLeagueWithExtraField;
    });

    return data;
  },
);

const initialState: TInitialState = {
  leagues: [],
  isFoundDataByFilter: true,
  selectedYear: new Date().getFullYear(),
};

export const leaguesSlice = createSlice({
  name: "leagues",
  initialState,
  reducers: {
    onFilterLeaguesBySeason: (state, action: PayloadAction<{ selectedYear: number }>) => {
      state.isFoundDataByFilter = true;
      state.selectedYear = action.payload.selectedYear;

      let countVisibleLeague = state.leagues.length;
      state.leagues.forEach((league, idx) => {
        if (action.payload.selectedYear >= league.latestAvalibaleSeason) {
          state.leagues[idx].isVisible = true;
        } else {
          state.leagues[idx].isVisible = false;
          countVisibleLeague -= 1;
        }

        return league;
      });

      if (!countVisibleLeague) {
        state.isFoundDataByFilter = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompetition.fulfilled, (state, action) => {
      state.leagues = action.payload;
    });
  },
});

export const { onFilterLeaguesBySeason } = leaguesSlice.actions;

export default leaguesSlice.reducer;
