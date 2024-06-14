import { atom } from "recoil";
import { selector } from "recoil";

//Atom
export const countAtom = atom({
    key : "countAtom",
    default : 0
})

//Selectors

export const evenSelector = selector({
    key : "evenSelector",
    get : ({get}) => {                          
        const count = get(countAtom);
        return count % 2;
    }
});