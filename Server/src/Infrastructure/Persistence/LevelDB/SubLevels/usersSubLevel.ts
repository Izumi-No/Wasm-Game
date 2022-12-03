import { LevelDatabase } from "./../database";

export const usersSubLevel = LevelDatabase.sublevel("users", {
  valueEncoding: "json",
});
