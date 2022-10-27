import { useMediaQuery } from '@react-hook/media-query'
import breakpointsConfig from '../../config/breakpointsConfig'

export default (breakPoint: keyof typeof breakpointsConfig) => {
    return useMediaQuery(`(${breakpointsConfig[breakPoint]})`)
}
