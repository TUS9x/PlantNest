import Context from './Context'
import { useContext } from 'react'

export const useStore = () =>{
    const [productState, dispatchProduct] = useContext(Context)
    return [productState, dispatchProduct]
}