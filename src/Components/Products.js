import axios from 'axios';
import { useEffect, useState,location} from 'react';
import './Product.css';
function Products() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')
    const [editId,setEditId] = useState(-1)
    const [uname, usetName] = useState('')
    const [ucategory, usetCategory] = useState('')
    const [ustock, usetStock] = useState('')
    const [uprice, usetPrice] = useState('')
    useEffect(() => {
        axios.get('http://localhost:3000/products')
        .then(res => {
            setData(res.data)
        })
        .catch(er => console.log(er));
    })
    const handleSubmit =(event) => {
        event.preventDefault();
        const id = data.length +1;
        axios.post('http://localhost:3000/products', {id: id , name, category, stock, price})
        .then(res => {
           location.reload()
        })
        .catch(er => console.log(er))
    }

    const handleEdit = (id) =>{
        axios.get('http://localhost:3000/products/' +id)
        .then(res => {
            console.log(res.data)
            usetName(res.data.name)
            usetCategory(res.data.category)
            usetStock(res.data.stock)
            usetPrice(res.data.price)
        })
        .catch(er => console.log(er));
        setEditId(id)
    }
    const handleUpdate = () => {
        axios.put('http://localhost:3000/products/' +editId, {id:editId,name: uname, category: ucategory, stock: ustock, price: uprice})
        .then(res => {
            console.log(res);
            setEditId(-1)
        })
        .catch(er => console.log(er))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/products/' +id)
        .then(res => {
            console.log(res);
        })
        .catch(er => console.log(er))
    }
    return(
        <div className="container">
            <div className='form-container'>
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
                        product.id === editId ?
                        <tr key={index}>
                            <td typeof= 'text'>{product.id}</td>
                            <td><input type='text' value={uname} onChange={e => usetName(e.target.value)}/></td>
                            <td><input type='text' value={ucategory} onChange={e => usetCategory(e.target.value)}/></td>
                            <td><input type='text' value={ustock} onChange={e => usetStock(e.target.value)}/></td>
                            <td><input type='text' value={uprice} onChange={e => usetPrice(e.target.value)}/></td>
                            <td>
                                <button onClick={handleUpdate}> Update</button>
                            </td>
                        </tr>
                        :

                        <tr key={index}>
                            <td typeof='text'>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => handleEdit(product.id)}>edit</button>
                                <button onClick={() => handleDelete(product.id)}>delete</button>
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
    
    export default Products;