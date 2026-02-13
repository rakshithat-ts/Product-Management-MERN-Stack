import React, { useState } from "react";
import axios from "axios";

function BusPassForm() {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    route: "",
    duration: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/buspass", formData);
    alert("Bus Pass Applied Successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="college" placeholder="College" onChange={handleChange} />
      <input name="route" placeholder="Route" onChange={handleChange} />
      <input name="duration" placeholder="Duration" onChange={handleChange} />
      <button type="submit">Apply</button>
    </form>
  );
}

export default BusPassForm;