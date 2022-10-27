import {FC, PropsWithChildren, useMemo, useState} from 'react';
import {
    SideBarContext,
} from '../lib/SideBarContext';


const SideBarProvider: FC<PropsWithChildren> = (props) => {
    const {children} = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const defaultProps = useMemo(
        () => ({
            isOpen,
            setOpen: (v: boolean) => setIsOpen(v),
        }),
        [isOpen]
    );

    return (
        <SideBarContext.Provider
            value={defaultProps}
        >
            {children}
        </SideBarContext.Provider>
    );
};

export default SideBarProvider
