import React from "react";
import BusinessCard from "../businessCard";
import { BusinessContainer, BusinessContentContainer } from "../../styles/businessStyles";

export default function Businesses() {
  return (
    <BusinessContainer>
      <BusinessContentContainer>
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </BusinessContentContainer>
    </BusinessContainer>
  );
}

// Sample data for businesses
const businesses = generateBusinessData(20);

function generateBusinessData(count) {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      title: `Business ${i}`,
      description: `Description for Business ${i}`,
      ownerName: `Owner ${i}`,
      ownerAvatar: `/placeholder-user.jpg`,
      ownerInitials: `O${i}`,
    });
  }
  return data;
}
