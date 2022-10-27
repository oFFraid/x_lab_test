import {axiosInstance} from "./api.config";

export interface AddressDataInterface {
    city_type_full?: string;
    city?: string;
    street_type_full?: string;
    street?: string;
    house_type_full?: string;
    house?: string
}

export interface SuggestionInterface {
    data: AddressDataInterface;
    unrestricted_value: string;
    value: string;
}

export interface AddressResponseInterface {
    suggestions: SuggestionInterface[]
}

export const apiSearch = async (query: string): Promise<AddressResponseInterface> => {
    return axiosInstance.post('suggestions/api/4_1/rs/suggest/address', {query, count: 20}).then(res => res.data)
}

