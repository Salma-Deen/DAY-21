/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import jsonData from "./Products.json"

const Card = ({ onAddToCart, onRemoveFromCart, isInCart, }) => {
    console.log(jsonData);
    return (
        <>
            <div className="py-5">
                <div className="container overflow-hidden px-5">
                    <div className="row ">
                        {
                            jsonData.map(product => {
                                return (
                                    <>
                                        <div className="col-sm-6  col-md-4  col-lg-3  gy-5 my-3 g-sm-4 g-md-3 ">
                                            <div className="card h-100 justify-content-center"  >
                                                <div >
                                                    {product.isSale &&
                                                        (<div className="badge bg-dark text-white position-absolute" style={{ top: "10px", left: "10px", }}>Sale
                                                        </div>)}
                                                    <img src={product.image} className="card-img-top" alt="title" />
                                                </div>
                                                <div className="card-body p-4 d-flex flex-column  text-center ">
                                                    <h5 className="fw-bolder   text-center ">{product.title}</h5>
                                                    <div style={{ color: "#FFBF00" }}>
                                                        {product.isStar && (<i className="fa-solid fa-star"></i>
                                                        )}
                                                        {product.isStar && (<i className="fa-solid fa-star"></i>
                                                        )}
                                                        {product.isStar && (<i className="fa-solid fa-star"></i>
                                                        )}
                                                        {product.isStar && (<i className="fa-solid fa-star"></i>
                                                        )}
                                                        {product.isStar && (<i className="fa-solid fa-star"></i>
                                                        )}
                                                    </div>
                                                    <p className="card-text fs-6 mt-2 ">
                                                        <div>
                                                            {product.priceMute ?
                                                                (<>
                                                                    <span className="text-muted text-decoration-line-through">{product.mute}</span><span>&nbsp;{product.price}</span>
                                                                </>) : (<span>{product.price}</span>)}
                                                        </div>
                                                    </p>
                                                </div>
                                                {isInCart(product) ? (
                                                    <button
                                                        className="btn text-center fs-6 btn btn-outline-dark mx-4 my-2"
                                                        onClick={() => onRemoveFromCart(product)}
                                                    >
                                                        Remove from Cart
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="btn text-center fs-6 btn btn-outline-dark mx-4 my-2"
                                                        onClick={() => onAddToCart(product)}
                                                    >
                                                        Add to Cart
                                                    </button>
                                                )}
                                               </div>
                                        </div >
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </>
    );
};

export default Card;

