import { lightGreen } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductApi from "../APIService/ProductsAPI";
import { cartActions } from "./Storage";
import './Style.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
//import ControlPointIcon from '@mui/icons-material/ControlPoint';

const CartPage = () => {
    const dispatch = useDispatch();
    const [localData, setLocalData] = useState([]);
    // const [totalCount, setTotalCount] = useState(0)
    const navigate = useNavigate()




    const { totalItems, data, totalCount } = useSelector(storeObj => {

        return {
            totalItems: storeObj.cart?.products?.length,
            data: storeObj.cart?.products,
            totalCount: storeObj.cart?.totalCount
        }
    })

    useEffect(() => {

    }, [])
    console.log('total count', totalCount)

    // console.log(data.length)
    // console.log('redux data', data)
    const handleRemove = (itemIndex) => {
        dispatch(cartActions.removeFromCart(itemIndex));
    }

    const handleUpdate = (item) => {
        console.log('update', item)
        dispatch(cartActions.addProductCount(item.id));
        // setLocalData([...localData,itemIndex])
        console.log('handle update', localData)
        // dispatch(cartActions.addTotalCount(1))
    }

    const handleMinus = (item) => {

        dispatch(cartActions.decreaseProduct(item.id))
    }
    const handleClear = () => {
        dispatch(cartActions.clearCart())
        dispatch(cartActions.clearTotalCount());
    }

    const handleCheckOut = () => {
        var currentdate = new Date();
        const checkOutData = [{ 'TOTAL PRODUCT': totalCount, 'CheckOut Date&Time': currentdate }, ...data]
        ProductApi.post('/checkOut', checkOutData)
            .then((res) => {
                alert('Successfully Products Check Outed. Thanks for Order...')
                dispatch(cartActions.clearCart());
                dispatch(cartActions.clearTotalCount());

            }).catch((err) => console.log('Error from api', err))
    }

    const handleInput = (e, index) => {
        const count = e.target.value
        dispatch(cartActions.addTotalCount({ count: parseInt(count), index }))

    }

    return (
        <div className="shopContainer">
            <h1 className="cartPagetext">Cart Page</h1>
            <h2>Total Items: {totalCount}</h2>
            <section style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', borderBottom: '1px solid #cdcdcd', textAlign: 'center', padding: 10 }}>
                    <span>S.No</span>
                    <span>Image</span>
                    <span>Title</span>
                    {/* <span>Description</span> */}
                    <span>Price</span>
                    <span>Count</span>
                    <span>Action</span>
                </div>
                {
                    // data.filter((item)=>{
                    //     !item.id.includes(count)
                    //     setCount(item.id)
                    // })
                    data?.map((item, index) => {
                        // if(!item.id.includes(count)){
                        //     setCount(item.id)

                        return (

                            <div key={`item-${index}-${item.id}`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderBottom: '1px solid #cdcdcd', textAlign: 'center', padding: 10 }}>
                                <span>{index + 1}</span>
                                <img src={item.image} alt={item.title} height={40} width='50px' />
                                <span style={{ width: 'auto' }}> <h4 style={{ width: 'auto' }}>{item.product}</h4></span>
                                {/* <p>{item.description}</p> */}
                                <span style={{ width: 'auto' }}><p>₹ {item.price}</p></span>

                                <span styles={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <button className="minusButton" disabled={item.count == 1 ? "true" : false} onClick={() => handleMinus(item)} style={{ padding: 4, fontSize: 20 }}>-</button>
                                    <span>
                                        <input type="number" onChange={(e) => handleInput(e, index)} value={item.count || 1} style={{ padding: 8, width: 30, borderRadius: '4px', textAlign: 'center' }} />
                                    </span>
                                    <button className="plusButton" disabled={totalCount >= 100 ? 'true' : false} onClick={() => handleUpdate(item)} style={{ padding: 4, fontSize: 20 }}>+</button>
                                </span>
                                <button onClick={() => handleRemove(index)}><DeleteIcon /></button>
                            </div>

                        )
                        //  }

                    })
                }
                {
                    data.length > 0 ?
                        <div className="checkOutButtonsDIV">
                            {/* <button className="checkOutButton" onClick={handleCheckOut} disabled={data.length == 0 ? "true" : false} style={{ marginRight: '1%' }}>CheckOut</button>
                    <button className="clearButton" onClick={handleClear} disabled={data.length == 0 ? "true" : false}>Clear</button> */}
                            <Button onClick={handleCheckOut} variant="contained">Check Out</Button>
                            <Button onClick={handleClear} variant="outlined" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        </div> : null}
            </section>
        </div>
    )
}

export default CartPage;




