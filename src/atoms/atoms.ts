import { atom } from "recoil";
import {
	IHeaderBtnsTypeProps,
	INewsParamsProps,
	INewsProps,
	NEW_YORK_TIMES_API_KEYS,
} from "../app.constant";

export const newsListAtom = atom<INewsProps[]>({
	key: "newsListAtom",
	default: [],
});

export const modalAtom = atom<boolean>({
	key: "modal",
	default: false,
});

export const headerBtnsAtom = atom<IHeaderBtnsTypeProps>({
	key: "headerBtns",
	default: {},
});

export const newsParamsAtom = atom<INewsParamsProps>({
	key: "newsParams",
	default: {
		page: "1",
		"api-key": NEW_YORK_TIMES_API_KEYS,
		q: "",
		sort: "newest",
	},
});

export const isSearchAtom = atom<boolean>({
	key: "isSearch",
	default: false,
});
