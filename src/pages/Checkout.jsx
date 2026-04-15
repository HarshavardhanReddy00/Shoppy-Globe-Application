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
    <></>
  );
};

export default Checkout;