import React from "react";
import { BusinessContainer, BusinessGrid } from "../../styles/businessStyles";
import BusinessCardWrapper from "../businessCard";
import { Typography, Grid } from "@mui/material";
import PaginationOutlined from "../pagination";
import {Link} from "react-router-dom";
import PlugButton from "../button";


export default function Businesses() {
  return (
    <BusinessContainer>
        <Grid container xs={12} sm={12} md={12} sx={{marginBottom:"30px", display:"flex", justifyContent:"space-between"}}>
                <Grid item xs={12} sm={6} md={9}>
                    <Typography variant="h4">
                      Explore Businesses Around you 
                    </Typography>
                    <Typography variant="body1">
                      Connect with business and find out what services they offer
                    </Typography>
                </Grid >
                <Grid item xs={12} sm={6} md={3}>
                    <Link to="/business/add">
                        <PlugButton title={"Add Business"}/>
                    </Link>
                </Grid>
            </Grid>

        <BusinessGrid container spacing={{sm:1, md:2}}  columns={{xs:4 ,sm:8, md:12}}>
          {businesses.map(business => (
            <BusinessCardWrapper key={business.id} business={business} />
          ))}
        </BusinessGrid>
        <PaginationOutlined />
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