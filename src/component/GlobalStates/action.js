import { SORT_LOW_TO_HIGHT,SORT_HIGHT_TO_LOW,SORT_PRODUCTS_NAME,SEARCH_PRODUCTS} from './constants'

export const sortLowToHight =(payload) =>({
            type: SORT_LOW_TO_HIGHT,
            payload
            })
export const sortHightToLow =(payload) =>({
    type: SORT_HIGHT_TO_LOW,
    payload
    })
export const sortProductName =(payload) =>({
    type: SORT_PRODUCTS_NAME,
    payload
    })
    export const searchProducts =(payload) =>({
        type: SEARCH_PRODUCTS,
        payload
        })
    
