import { axiosInstance } from './api.config'
import { AddressResponseInterface } from './api.types'

export const apiSearch = async (
    query: string
): Promise<AddressResponseInterface> => {
    return axiosInstance
        .post('suggestions/api/4_1/rs/suggest/address', { query, count: 20 })
        .then((res) => res.data)
}
