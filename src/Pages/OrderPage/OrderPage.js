import React from "react";
import { Stack, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import OrderTab from "./OrderTab";

const OrderPage = () => {
  return (
    <div>
      <Grid style={{ padding: "1rem" }}>
        <Stack direction="row" justifyContent="end">
          <Link to="/add-orders" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="primary">
              Add Orders
            </Button>
          </Link>
        </Stack>
        <OrderTab />
        {/* table below <OrderReport /> */}
      </Grid>
    </div>
  );
};

export default OrderPage;
