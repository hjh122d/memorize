import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import data from "../data/data";

const { persistAtom } = recoilPersist();

export default atom({
  key: "list",
  default: data,
  effects_UNSTABLE: [persistAtom],
});
