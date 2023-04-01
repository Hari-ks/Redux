import { DensityLarge } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductApi from "../APIService/ProductsAPI";
import { cartActions } from "./Storage";
import './Style.css';
import { redirect, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const Products = () => {
    const [list, setList] = useState([]);
    const [rState, setRState] = useState([]);
    const { products } = useSelector(state => state.cart);
    const { wishList } = useSelector(state => state.cart);
    const { totalCount } = useSelector(state => state.cart);
    const { cart } = useSelector(state => state);
    // const [totalCount,setTotalCount]=useState(0)
    console.log('r{roducs', products);
    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {

        ProductApi.get('/products')
            .then((res) => {
                console.log('data', res.data)
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleClick = (productItem) => {
        const isContain = products.some((prod) => {
            return prod.id == productItem.id
        })
        if (isContain) {
            dispatch(cartActions.addProductCount(productItem.id));
        } else {
            dispatch(cartActions.addToCart(productItem));
        }

    }

    const handleAddWishList = (item) => {
        dispatch(cartActions.addWishList(item));
        console.log('wishList', wishList)
        // console.log('cart',cart)
    }
    const hanldeNavigate = () => {
        navigate('/wishlist')

    }
    const isaddwishlist = () => {

    }
    const handleRemoveWishlist=(item)=>{
        dispatch(cartActions.removeWishList(item));
    }

    return (
        <div className="productContainer" style={{ width: '100%' }}>
            <h1 className="ProductText">Products</h1>
            <div><Button onClick={hanldeNavigate} variant="contained">Wish List</Button></div>
            <br />
            <section style={{
                display: 'flex',
                flexDirection: 'row',
            }}>

                {
                    list.map((item, index) => {
                        return (<>
                            <div key={item.id} style={{ border: '1px solid #cdcdcd', margin: 2, textAlign: 'center', padding: 10 }}>
                                <h3 style={{ color: 'chocolate' }}>{item.product}</h3>
                                <p>{item.description}</p>
                                <img className="productImage" style={{ height: '200px', width: '200px' }} src={item.image} alt={item.title} />
                                <p>₹ {item.price}</p>
                                <button disabled={totalCount >= 100 ? 'true' : false} onClick={() => handleClick(item)}>Add to Cart</button>

                                {wishList.find(element =>  element.id == item.id) ? <button onClick={() => handleRemoveWishlist(item.id)}>Remove to Wishlist</button> : <button onClick={() => handleAddWishList(item)}>Add to Wishlist</button>}

                            </div><div style={{ marginRight: '3%' }}></div>
                        </>
                        )
                    })
                }
                <div><Link to='/shop/wishlist'>Wish List</Link></div>
            </section>
        </div>
    )
}

export default Products;

















