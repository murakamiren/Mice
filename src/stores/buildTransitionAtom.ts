import { atom } from "recoil";

export const buildTransitionAtom = atom<number>({
	key: "buildTransitionAtom",
	default: 1,
});
