import { FaRegStar } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";

const Card = () => {
    return (
        <div className="product-card">
            <a href="#">
                <div className="product-card__image">
                    <div className="image-popup1 ">
                        <img src="https://weiboo-demo.myshopify.com/cdn/shop/files/8_grande.jpg?v=1725790248" alt="" />
                    </div>
                    <div className="image-popup2">
                        <img src="https://weiboo-demo.myshopify.com/cdn/shop/files/5_large.jpg?v=1725790248" alt="" />
                    </div>
                </div>
                <div className="product-card__content">
                    <div className="rating">
                        {[...Array(5)].map((_, index) => (
                            <FaRegStar key={index} />
                        ))}
                    </div>
                    <div className="title">
                        <h2>Bali Underwire Bra</h2>
                    </div>
                    <div className="price">$19.00 $21.00</div>
                </div>
            </a>

            <div className="product-card__quick-action-button">
                <button>
                    <IoAddOutline />
                </button>
            </div>

            <div className="product-card__badge">
                <span className="percent-count">-10%</span>
            </div>
        </div>
    );
};

export default Card;
