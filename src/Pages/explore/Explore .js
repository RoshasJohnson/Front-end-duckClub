import React from "react";
import { Box, Grid } from "@mui/material";
import SideBar from "../../components/homepage/SideBar";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import { Col, Container, Row } from "react-bootstrap";

function Explore() {
  return (
    <div className="homepage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={3}>
            <SideBar />
          </Grid>

          <Row sx={9} style={{ marginTop: "10%" }}>
            <Col sx={2}>
              <UserProfileCard />
            </Col>

            <Col sx={2}>
              <UserProfileCard />
            </Col>
          </Row>
        </Grid>
      </Box>
    </div>
  );
}

export default Explore;
