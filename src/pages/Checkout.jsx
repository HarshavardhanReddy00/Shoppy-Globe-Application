import { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email:"",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    const { name, email, address, phone } = form;

    // ✅ Validation check
    if (!name ||!email || !address || !phone) {
      alert("Please fill all the fields!");
      return;
    }

    // ✅ If all fields filled
    alert("Order placed successfully!");
  };

  return (
    <div className="bg-gray-500">
        <div className="p-5 max-w-md mx-auto bg-amber-400">
            <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 w-full mb-3"/>
            
            <input
            type="text"
            name="e-mail"
            placeholder="E-Mail"
            value={form.name}
            onChange={handleChange}
            className="border p-2 w-full mb-3"/>
            
            <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="border p-2 w-full mb-3"
            />
            
            <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="border p-2 w-full mb-3"/>
            
            <button
            onClick={handleOrder}
            className="bg-blue-500 text-white px-4 py-2 rounded">Place Order
            </button>
            </div>
    </div>
    
  );
};

export default Checkout;