import classNames from 'clsx'
import { FC } from 'react'

import { AddressDataInterface } from '../../../../api/api.types'
import ClassNameInterface from '../../../types/ClassNameInterface'
import css from './AddressList.module.scss'

const AddressItem: FC<AddressDataInterface & ClassNameInterface> = (props) => {
    const {
        city,
        city_type_full,
        street_type_full,
        street,
        house_type_full,
        house,
        className,
    } = props
    if (!city && !street && !house) {
        return null
    }
    return (
        <div className={classNames(css.addressItem, className)}>
            {city_type_full} {city}
            {city && street && ','} {street_type_full} {street}
            {street && house && ','} {house_type_full} {house}
        </div>
    )
}

export default AddressItem
