import { FC } from 'react'

import { SuggestionInterface } from '../../../../api/api.types'
import List from '../../List/ui/List'
import AddressItem from './AddressItem'
import css from './AddressList.module.scss'

interface AddressListInterface {
    items: SuggestionInterface[]
}

const AddressList: FC<AddressListInterface> = (props) => {
    return (
        <>
            <div className={css.addressListTitle}>Адреса</div>
            <List
                as="div"
                className={css.addressList}
                items={props.items}
                renderItem={({ data }, i) => (
                    <AddressItem {...data} key={`address_list_${i}`} />
                )}
            />
        </>
    )
}
export default AddressList
