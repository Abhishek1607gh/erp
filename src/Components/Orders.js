import './Orders.css';
import { useEffect,useState,location} from 'react';
import axios from 'axios';
function Orders() {
    const [data, setData] = useState([])
    const [orderId, setOrderId] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [orderDate, setDate] = useState('')
    const [status, setStatus] = useState('')    
    useEffect(() => {
        axios.get('http://localhost:3000/orders')
        .then(res => {
            setData(res.data)
        })
        .catch(er => console.log(er));
    })
    const handleSubmit =(event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/orders', {orderId , customerName, orderDate, status})
        .then(res => {
           location.reload()
    })
}





    return(
        <div className="container">
            <div className='form-container'>
            <form className="form" onSubmit={() => handleSubmit()}>
            <div className='text-box'><input type="text" placeholder='Order ID' onChange={e => setOrderId(e.target.value)}/></div>
            <div className='text-box'> <input type="text" placeholder='Customer Name' onChange={e => setCustomerName(e.target.value)}/></div>
            <div className='text-box'> <input type="date" onChange={e => setDate(e.target.value)}/></div>
            <div className='text-box'> <input type="text" placeholder='Status'onChange={e => setStatus(e.target.value)}/></div>
            <button>
                Submit
            </button>
            </form>
            </div>
            <div className='table-container'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((order,item) => (
                            <tr key={item}>
                                <td>{order.orderId}</td>
                                <td>{order.customerName}</td>
                                <td>{order.orderDate}</td>
                                <td>{order.status}</td>
                                <td>
                                    <button >
                                        edit
                                    </button>
                                    <button >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody> 
            </table>
            </div>
        </div>
    );
    }
 
 export default Orders;