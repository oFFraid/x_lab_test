import { useContext, useMemo } from 'react'

import { SideBarContext, SideBarContextProps } from './SideBarContext'

export const useSideBar = (): Required<SideBarContextProps> & {
    toggle: () => void
} => {
    const { isOpen = false, setOpen = () => {} } = useContext(SideBarContext)

    const toggle = useMemo(() => {
        return () => setOpen(!isOpen)
    }, [isOpen, setOpen])

    return {
        isOpen,
        setOpen,
        toggle,
    }
}
