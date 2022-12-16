import { useContext, useState } from "react";
import { createContext } from "react";
import { IProduct } from "../models/ProductModels";

interface IProductProvider {
    children: any
}
export interface ProductContextType {
    product: IProduct
    products: IProduct[]
    featured: IProduct[]
    flashsale: IProduct[]
    getProduct: (articleNumber?: string) => void
    getProducts: () => void
    getFeatured: (take?: number) => void
    getFlashsale: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => {return useContext(ProductContext)}

export const ProductProvider: React.FC<IProductProvider> = ({children}) => {
    const baseUrl: string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: IProduct = { tag: '', articleNumber: '', name: '', description: '', category: '', price: 0, imageName: '' } 
    const [product, setProduct] = useState<IProduct>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<IProduct[]>([])
    const [featured, setFeatured] = useState<IProduct[]>([])
    const [flashsale, setFlashsale] = useState<IProduct[]>([])
    
    
    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
        
    }
    
    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take:number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
            url += `/${take}`
           
        const res = await fetch(url)
        setFeatured(await res.json())
    }


    const getFlashsale = async (take:number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
            url += `/${take}`
           
        const res = await fetch(url)
        setFlashsale(await res.json())
    }





   

    return <ProductContext.Provider value={{product, products, featured, flashsale, getProduct, getProducts, getFeatured, getFlashsale}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider