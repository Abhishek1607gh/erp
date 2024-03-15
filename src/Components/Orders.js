import './Product.css';
function Orders() {
    return(
        <div className="container">
            <div className='form-container'>
            <form className="form">
            <div className='text-box'><h2>Order ID:</h2><input type="text" /></div>
            <div className='text-box'><h2>Customer Name:</h2>   <input type="text" /></div>
            <div className='text-box'><h2>Order Date:</h2>   <input type="text" /></div>
            <div className='text-box'><h2>Status:</h2>    <input type="text" /></div>
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                </tbody> 
            </table>
            </div>
        </div>
    );
    }
    
    export default Orders;