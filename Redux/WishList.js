import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import apiCall from "../APIService/FormApi";
import { cartActions } from "./Storage";

const WishList= () => {
    const [list, setList] = useState([]);
    //const { wishList } = useSelector(state => state.cart);
    const { wishList } = useSelector(state => state.cart);
    const [totalCount,setTotalCount]=useState(0)
    console.log('WishListPage', wishList);
    const dispatch = useDispatch()

    // useEffect(() => {

    //     apiCall.get('/products')
    //         .then((res) => {
    //             console.log('data', res.data)
    //             setList(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])

    const handleClick = (productItem) => {
        // const isContain = products.some((prod) => {
        //     return prod.id == productItem.id
        // })
        // if (isContain) {
        //     dispatch(cartActions.addProductCount(productItem.id));
        // } else {
        //     dispatch(cartActions.addToCart(productItem));
        // }
           
    }
    console.log('wishPage' , wishList)
    return (
        <div style={{ width: '100%' }}>
            <h1>WishList Products</h1>
            <section style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                {
                    wishList?.map((item, index) => {
                        return (<>
                            <div key={item.id} style={{ border: '1px solid #cdcdcd', margin: 2, textAlign: 'center', padding: 10 }}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <img className="productImage" style={{ height: '200px', width: '200px' }} src={item.image} alt={item.title} />
                                <p>₹ {item.price}</p>
                                <button onClick={() => handleClick(item)}>Remove from Wishlist</button>
                                
                                {/* <button>Add to Wishlist</button> */}
                            </div><div style={{ marginRight: '3%' }}></div>
                        </>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default WishList;


