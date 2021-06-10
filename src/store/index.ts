import { configureStore } from "@reduxjs/toolkit";

import leaguesRedurers from "./Leagues/leaguesSlice";
import searchReducers from "./Search/searchSlice";

const store = configureStore({
  reducer: {
    leagues: leaguesRedurers,
    search: searchReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
