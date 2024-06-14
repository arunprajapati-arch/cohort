import { atom, selector } from "recoil";


export const networkAtom =atom({
    key : "networkAtom",
    default  : 51
});

export const jobAtom = atom({
    key : "jobAtom",
    default : 0
});

export const messagingAtom  = atom({
    key : "messagingAtom",
    default : 101
})

export const notificationAtom = atom({
    key : "notificationAtom",
    default : 98
})

export const meSelector = selector({
    key : "profileSelector",
    get : ({get}) => {
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobAtom);
    const messagingAtomCount = get(messagingAtom);
    const notificationAtomCount = get(notificationAtom);
    return networkAtomCount + jobAtomCount + messagingAtomCount + notificationAtomCount
    }
    
})
