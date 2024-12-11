import React, { useEffect, useState } from "react";

const FoodDisplay = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/food");
        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchFoodItems();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Food Gallery</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {foodItems.map((food, index) => {
    console.log(food.image_url); // Log the URL
    return (
        <div key={index} style={{ margin: "20px" }}>
            <img
                src={food.imageUrl}
                alt={food.title}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <p>{food.title}</p>
        </div>
    );
})}

      </div>
    </div>
  );
};

export default FoodDisplay;
