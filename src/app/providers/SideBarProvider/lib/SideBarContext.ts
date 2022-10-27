import {createContext} from 'react';


export interface SideBarContextProps {
    isOpen: boolean;
    setOpen: (v: boolean) => void;
}

export const SideBarContext = createContext<SideBarContextProps>({
    isOpen: false,
    setOpen: () => {
    }
});

