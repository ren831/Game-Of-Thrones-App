import React, { useState } from "react";

function FormList({ addNewCharacter }) {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newItem) => addNewCharacter(newItem));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={hadleChange}
          type="text"
          name="firstName"
          placeholder="first-Name"
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
