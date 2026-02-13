import React, { useEffect, useState } from "react";
import axios from "axios";

function BusPassList() {
  const [passes, setPasses] = useState([]);

  useEffect(() => {
    fetchPasses();
  }, []);

  const fetchPasses = async () => {
    const res = await axios.get("http://localhost:5000/api/buspass");
    setPasses(res.data);
  };

  return (
    <div>
      <h2>Bus Pass Applications</h2>
      {passes.map((pass) => (
        <div key={pass._id}>
          <p>{pass.name} - {pass.status}</p>
        </div>
      ))}
    </div>
  );
}

export default BusPassList;