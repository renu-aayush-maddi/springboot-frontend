import React, { useState } from "react";

const FoodPost = () => {
  const [foodData, setFoodData] = useState({
    title: "",
    imageUrl: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/food/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(foodData),
      });
      const data = await response.text();
      setMessage(data);
      setFoodData({ title: "", imageUrl: "" });
    } catch (error) {
      console.error("Error posting food:", error);
      setMessage("Failed to post food image.");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Post Food Image</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={foodData.title}
          onChange={handleChange}
          placeholder="Food Title"
          required
          style={{ padding: "10px", margin: "10px", width: "300px" }}
        />
        <input
          type="url"
          name="imageUrl"
          value={foodData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          required
          style={{ padding: "10px", margin: "10px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Post Food
        </button>
      </form>
    </div>
  );
};

export default FoodPost;
