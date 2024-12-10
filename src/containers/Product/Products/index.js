import React from 'react'
import BreadCrumb from '../../../common/Breadcrumb'
import { FaUser } from "react-icons/fa";
import Cards from '../../../common/Cards';

const Products = () => {
  const cardData = [
    {
      title: "Total Products",
      number: "1,200",
      icon: <FaUser />,
      borderColor: "#4CAF50", // Green
    },
    {
      title: "Out of Stock",
      number: "200",
      icon: <FaUser />,
      borderColor: "#FF5722", // Orange
    },
    {
      title: "Sales Today",
      number: "500",
      icon: <FaUser />,
      borderColor: "#2196F3", // Blue
    },
    {
      title: "Pending Orders",
      number: "80",
      icon: <FaUser />,
      borderColor: "#FFC107", // Yellow
    },
  ];

  
  return (
    <div>

      <BreadCrumb/>

      <div className="cards-container">
      {cardData.map((data, index) => (
        <Cards
          key={index}
          title={data.title}
          number={data.number}
          icon={data.icon}
          borderColor={data.borderColor}
        />
      ))}
    </div>

    </div>
  )
}

export default Products