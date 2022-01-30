import { atom } from "recoil";
import { partTypeForAtom } from "../types/partTypeForAtom";

export const allValueAtom = atom<number[]>({
	key: "allValueAtom",
	default: [],
});

export const cpuStateAtom = atom<partTypeForAtom>({
	key: "cpuState",
	default: {
		name: "",
		value: 0,
		mark: 0,
		category: "",
	},
});

export const motherboardStateAtom = atom<partTypeForAtom>({
	key: "motherboardStateAtom",
	default: {
		name: "",
		value: 0,
		mark: 0,
		category: "motherboard",
	},
});

export const cpuCoolerStateAtom = atom<partTypeForAtom>({
	key: "cpuCoolerStateAtom",
	default: {
		name: "",
		value: 0,
		mark: 0,
		category: "cpuCooler",
	},
});

export const memoryStateAtom = atom<partTypeForAtom>({
	key: "memoryStateAtom",
	default: {
		name: "",
		value: 0,
		mark: 0,
		category: "memory",
	},
});

export const gpuStateAtom = atom<partTypeForAtom>({
	key: "gpuStateAtom",
	default: {
		name: "",
		value: 0,
		mark: 0,
		category: "gpu",
	},
});

export const powerSupplyStateAtom = atom<partTypeForAtom>({
	key: "powerSupplyStateAtom",
	default: {
		name: "",
		value: 0,
		mark: 0,
		category: "powerSupply",
	},
});

export const storageStateAtom = atom<partTypeForAtom>({
	key: "storageStateAtom",
	default: {
		name: "",
		value: 0,
		mark: 0,
		category: "storage",
	},
});

type forCase = partTypeForAtom & {
	img: string;
};

export const caseStateAtom = atom<forCase>({
	key: "caseStateAtom",
	default: {
		name: "",
		value: 0,
		mark: 0,
		category: "case",
		img: "",
	},
});

export const caseFanStateAtom = atom<partTypeForAtom>({
	key: "caseFanStateAtom",
	default: {
		name: "",
		value: 0,
		mark: 0,
		category: "caseFan",
	},
});

export const osStateAtom = atom<partTypeForAtom>({
	key: "osStateAtom",
	default: {
		name: "",
		value: 0,
		mark: 0,
		category: "os",
	},
});
