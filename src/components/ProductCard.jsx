import ProductCardBtn from "./ProductCardBtn"

function ProductCard({product, handleProductSelect}) {
    return (
        <>
        <article>
            <header>{ product.name }</header>
            <img src={ product.thumbnail } alt={ product.name } />
            <footer><ProductCardBtn productId={product.id} handleProductSelect={handleProductSelect} /></footer>
            </article>
        </>
    )
}


export default ProductCard