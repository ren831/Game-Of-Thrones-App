import React, { useState } from "react";

function FormList() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    imageUrl: "",
  });

  function hadleChange(e) {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onChange={hadleChange}>
        <input
          onChange={hadleChange}
          type="text"
          name="firstName"
          placeholder="first Name"
        />
        <input
          onChange={hadleChange}
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          onChange={hadleChange}
          type="text"
          name="fullName"
          placeholder="Full Name"
        />
        <input
          onChange={hadleChange}
          type="text"
          name="title"
          placeholder="Title"
        />

        <input
          onChange={hadleChange}
          type="text"
          name="family"
          placeholder="Family"
        />

        <input
          onChange={hadleChange}
          type="text"
          name="imageUrl"
          placeholder="Image Url"
        />
        <button type="submit">Add Character</button>
      </form>
    </div>
  );
}

export default FormList;
