import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
   const renderList = products.map((product)=>{
    const {id,title,image,price,category} =product;
    return(
        <div className="four column wide" key={id} style={{width:"23%",margin:"1%"}}>
            <Link to={`/product/${id}`}>
        <div className="ui link card">
            <div className="card">
                <div className="image">
                 <img src={image} alt={title} height={200} width={200}/>
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ { price }</div>
                    <div className="meta">$ { category }</div>
                </div>
            </div>
        </div>
        </Link>
    </div>
    );
   })
    return (
    <>{renderList}</>
    );
};

export default ProductComponent;