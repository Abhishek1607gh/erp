import "./Dashboard.css";
function Dashboard() {
    return(
    <div  className="container">
        <div className="box-container"> 
            <div className="box">
            <h3>
                Products
            </h3>
            </div>

            <div className="box">
            <h3>
                Orders
            </h3>
            </div>
        </div>
        <div className="button-container">
            <button >
                <a href="/Products"> Products</a>
            </button>
            <button>
                <a href="/Orders"> Orders</a>
            </button>
        </div>
    </div>

    );
}

export default Dashboard;