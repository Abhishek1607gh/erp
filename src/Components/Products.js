import axios from 'axios';
import { useEffect, useState } from 'react';
import './Product.css';
function Products() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')
    useEffect(() => {
        axios.get('http://localhost:3000/products')
        .then(res => {
            setData(res.data)
        })
        .catch(er => console.log(er));
    })
    const handleSubmit =(event) => {
        event.preventDefault();
        const id = data[data.length -1].id +1;
        axios.post('http://localhost:3000/products', {id: id , name, category, stock, price})
        .then(res => 
            console.log(res)
    )
        .catch(er => console.log(er))
    }
    return(
        <div className="container">
            <div className='form-co ntainer'>
            <form className="form" onSubmit={handleSubmit}>
            <div className='text-box'><input type="text" placeholder='Product Name' onChange={e => setName(e.target.value)}/></div>
            <div className='text-box'>  <input type="text" placeholder='Category' onChange={e => setCategory(e.target.value)}/></div>
            <div className='text-box'>  <input type="text" placeholder='Stock Quantity'onChange={e => setStock(e.target.value)}/></div>
            <div className='text-box'>   <input type="text"  placeholder='Price'onChange={e => setPrice(e.target.value)}/></div>
            <button>
                Submit
            </button>
            </form>
            </div>
            <div className='table-container'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Stock Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    data.map((product, index) =>(
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                   }
                </tbody> 
            </table>
            </div>
        </div>
        
    );
    }
    
    export default Products;