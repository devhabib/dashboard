import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [formData, setFormData] = useState({
    totalEmployee: "Total Employee",
    employeeNum: "500",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form className="form">
      <Input value={formData.totalEmployee} onChange={handleChange} />
      <Input value={formData.employeeNum} onChange={handleChange} />
    </form>
  );
};

export default Form;
