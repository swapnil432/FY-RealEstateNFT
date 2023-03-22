import React from "react";
import BtnButton from "@/components/common/BtnButton/BtnButton";
import UploadFile from "@/components/common/UploadFiles";
import { Box, Container, Grid, TextField } from "@mui/material";
const UserDetail = () => {
  return (
    <Box>
      <Container sx={{ marginTop: "8rem" }}>
        <h3>User Details</h3>
        <Grid
          container
          sx={{ marginTop: "2rem", width: "100%" }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />

            <UploadFile>Upload Aadhar Card </UploadFile>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Aadhar Card Number"
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
            <UploadFile>Upload your Photo</UploadFile>
          </Grid>
        </Grid>
        <BtnButton color={"primary"}>Submit</BtnButton>
      </Container>
    </Box>
  );
};

export default UserDetail;
