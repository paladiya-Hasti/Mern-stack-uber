import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Userlogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.get("http://localhost:5000/users/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error during logout:", error.message);
      });
    } else {
      navigate("/login"); // Redirect to login if there's no token
    }
  }, [token, navigate]);

  return <div>Logging out...</div>;
};

export default Userlogout;
