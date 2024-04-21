import React from "react";
import { BusinessCardContainer, BusinessCardContent, BusinessImage, BusinessInfo, BusinessTitle, BusinessDescription } from "../../styles/businessStyles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "@mui/material";

export default function BusinessCard({ business }) {
  return (
    <BusinessCardContainer>
      <BusinessImage alt="Business Photo" src="/placeholder.svg" />
      <BusinessCardContent>
        <BusinessTitle>{business.title}</BusinessTitle>
        <BusinessDescription>{business.description}</BusinessDescription>
        <BusinessInfo>
          <AccountCircleIcon alt={business.ownerName} src={business.ownerAvatar}>
            {business.ownerInitials}
          </AccountCircleIcon>
          <span>{business.ownerName}</span>
        </BusinessInfo>
      </BusinessCardContent>
      <div>
        <Link href="#">
          <a>See business</a>
        </Link>
        <ArrowRightIcon />
      </div>
    </BusinessCardContainer>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
