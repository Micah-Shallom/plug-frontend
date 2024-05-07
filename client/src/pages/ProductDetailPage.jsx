import { useParams } from "react-router-dom";
import { productData } from "../data/product";
import ProductShow from "../components/productShow";

export const ProductDetailPage = () => {
    const {id} =  useParams();
    console.log(id)

    const product = productData.find((prod) => prod.id === parseInt(id));

    return (
        <ProductShow product={product}/>
    );
};