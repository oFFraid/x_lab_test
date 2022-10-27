export interface AddressDataInterface {
    city_type_full?: string
    city?: string
    street_type_full?: string
    street?: string
    house_type_full?: string
    house?: string
}

export interface SuggestionInterface {
    data: AddressDataInterface
    unrestricted_value: string
    value: string
}

export interface AddressResponseInterface {
    suggestions: SuggestionInterface[]
}
