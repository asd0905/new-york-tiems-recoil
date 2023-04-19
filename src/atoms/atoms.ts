import { atom } from "recoil";

interface INewsProps {
    thumbnail_standard: string;
    title: string;
    created_date: string;
}

export const newsListAtom = atom<INewsProps[]>({
    key: 'newsListAtom',
    default: [],
})