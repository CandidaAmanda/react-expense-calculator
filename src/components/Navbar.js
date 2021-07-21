

const  Navbar= () => {
    return (  
        <nav className="navbar">
            <h1>Expense Calculator</h1>
            <div className="links">
                <a href="/home" className="navLink">Home</a>
                <a href="/add" className="navLink" style ={{
                    
                    backgroundColor:"#f1356d",
                    borderRadius: "8px"

                }}>Add Expense</a>

            </div>
        </nav>

    
    );
}
 
export default Navbar;<br></br>