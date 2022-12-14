import { useMediaQuery } from '@react-hook/media-query'

import breakpointsConfig from '../../config/breakpointsConfig'

export default function useBreakpoint(
    breakPoint: keyof typeof breakpointsConfig
) {
    return useMediaQuery(`(${breakpointsConfig[breakPoint]})`)
}
