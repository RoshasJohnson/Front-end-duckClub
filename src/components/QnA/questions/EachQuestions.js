import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import SideBar from "../../homepage/SideBar";
import "./eachQuesitonAndanswer.css";
import { Link } from "react-router-dom";
import Answers from "../answers/Answers";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import OneQuestion from "./OneQuestion";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

function EachQuestions() {
  const location = useLocation();
  const loading = useSelector((state) => state.fetchQuestions.loading);
  const data = location.state;
  console.log(data);
  return (
    <div className="homepage">
      {loading &&  <Spinner animation="border" />}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={3}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={8}>
            <OneQuestion />
            <Answers />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default EachQuestions;
