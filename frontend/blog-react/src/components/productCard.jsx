import Badge from "./badge";

function ProductCard({productName , price , category }) {
    return (
        <div>
        <Badge text={productName} color={'#f00'} />
        <Badge text={price}  color={'#0f0'}/>
        <Badge text={category} color={'#f0f'} />
        </div>);
}

export default ProductCard;