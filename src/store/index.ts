import { configureStore } from "@reduxjs/toolkit";
import leaguesRedurers from "./Leagues/leaguesSlice";

const store = configureStore({
  reducer: {
    leagues: leaguesRedurers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
