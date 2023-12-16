import React, { Fragment } from "react";
import FoodItem from "./Item";

const Items = () => {
  const Medicines = [
    { id: "1", medicine: "Atorvastatin", discription: "which treats high cholesterol.", price: 120 },
    { id: "2", medicine: "Levothyroxine", discription: "which treats hypothyroidism.", price: 800 },
    { id: "3", medicine: "Metformin", discription: "which treats type 2 diabetes.", price: 400 },
    { id: "4", medicine: "Lisinopril", discription: "which is an ACE inhibitor for high blood pressure.", price: 600 },
    { id: "5", medicine: "Amlodipine", discription: "which is a calcium channel blocker for high blood pressure.", price: 1450 },
  ];
  const meals = Medicines.map((item) => (
    <FoodItem
      key={item.id}
      id={item.id}
      medicine={item.medicine}
      discription={item.discription}
      price={item.price}
    />
  ));

  return <Fragment>{meals}</Fragment>;
};

export default Items;
