import { Link, Routes, Route } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineBorderColor } from "react-icons/md";



export default function AdminPage() {
  return (
    <div className="w-full h-screen bg-gray-200 flex p-2">
      <div className="h-full w-[300px] ">
        <Link to="/admin/users" className=" p-2 border flex items-center"><FaUsers className="mr-2"/>Users</Link>
        <Link to="/admin/products" className=" p-2 border flex items-center"><MdProductionQuantityLimits className="mr-2"/>Products</Link>
        <Link to="/admin/orders" className=" p-2 border flex items-center"><MdOutlineBorderColor className="mr-2"/>Orders</Link>
      </div>

      <div className="h-full w-[calc(100vw-300px)] bg-white">
      <Routes path="/">
      <Route path='/users' element={<h1>Users</h1>}/>
      <Route path='/products' element={<h1>Products</h1>}/>
      <Route path='/orders' element={<h1>Orders</h1>}/>
      </Routes>
    </div>
    </div>
  );
}
