// DISPLAYS ALL OF THE HISTORY OF THE PRODUCTS WHICH INCLUDES THE STATUS IF STOCK-IN OR STOCK-OUT

import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme, Stack, Grid, Button } from "@mui/material";
import ButtonForm from "../Button/ButtonForm";
import { db } from "../../Firebase/utils";
import {
  collection,
  getDocs,
  collectionGroup,
  query,
  getDoc,
  orderBy,
  doc,
  deleteDoc,
  writeBatch,
} from "firebase/firestore";

const History = (props) => {
  const [product, setProduct] = useState([]);

  //fetching the products document
  useEffect(() => {
    let isMounted = true;
    const getProducts = async () => {
      const listProducts = query(
        collectionGroup(db, "history"),
        orderBy("createdDate", "desc")
      );
      const querySnapshot = await getDocs(listProducts);
      const arr = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        arr.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      if (isMounted) {
        setProduct(arr);
      }
    };
    getProducts().catch((err) => {
      if (!isMounted) return;
      console.error("failed to fetch data", err);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  //Displaying the data by columns. The "name" must be a data exactly the same from what was saved in the database
  const columns = [
    {
      name: "docID",
      label: "Document ID",
      options: {
        filter: true,
        sort: true,
        display: false,
      },
    },
    {
      name: "id",
      label: "ID",
      options: {
        filter: true,
        sort: true,
        display: false,
      },
    },
    {
      name: "cat",
      label: "Category",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "prodName",
      label: "Product Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "size",
      label: "Size",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "colorMap",
      label: "Color & Stocks",
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return Object.entries(value).map(([key, value]) => {
            return (
              <p key={key}>
                {key} - {value} pieces
              </p>
            );
          });
        },
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return "₱" + value + ".00";
        },
      },
    },
    {
      name: "supplier",
      label: "Supplier",
      options: {
        filter: true,
        sort: true,
      },
    },
    // {
    //   name: "createdDate",
    //   label: "Date when modified",
    //   options: {
    //     filter: true,
    //     sort: true,
    //     customBodyRender: (value, tableMeta, updateValue) => {
    //       if (value) {
    //         return new Date(value?.seconds * 1000).toLocaleDateString();
    //       } else {
    //         return "";
    //       }
    //     },
    //   },
    // },
    {
      name: "createdDate",
      label: "Month",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return new Date(value.seconds * 1000).toLocaleString("en-us", {
            month: "long",
          });
        },
      },
    },
    {
      name: "createdDate",
      label: "Date",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return new Date(value.seconds * 1000).toLocaleString("en-us", {
            day: "numeric",
          });
        },
      },
    },
    {
      name: "createdDate",
      label: "Year",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return new Date(value.seconds * 1000).toLocaleString("en-us", {
            year: "numeric",
          });
        },
      },
    },

    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Delete",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
              onClick={(e) => {
                try {
                  console.log(tableMeta.rowData[0], tableMeta.rowData[1]);
                  deleteDoc(
                    doc(
                      db,
                      "products",
                      tableMeta.rowData[0],
                      "history",
                      tableMeta.rowData[1]
                    )
                  );
                  console.log("deleted");
                  alert("Deleted");
                  // window.location.reload();
                } catch (err) {
                  console.log(err);
                }
              }}
              color="error"
              variant="outlined"
            >
              Delete
            </Button>
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    selectableRows: "none",
    download: false,
    filterType: "multiselect",
    responsive: "standard",
    // selectableRows: "multiple", // to enable the checkbox when deleting the rows
    // onRowsDelete: (rowsDeleted) => {
    //   const docID = rowsDeleted.data.map((d) => product[d.dataIndex].docID);
    //   const historyId = rowsDeleted.data.map((d) => product[d.dataIndex].id); // array of all ids to to be deleted

    //   deleteInFirestore(docID, historyId);
    // },
  };
  //deleting data in firebase or deleting the order(s)
  async function deleteInFirestore(docID, historyId) {
    try {
      const batch = writeBatch(db);

      historyId.forEach((id) => {
        batch.delete(doc(db, "products", docID, "history", id));
        console.log(docID, "documentID");
        console.log(historyId, "historyID");
      });
      await batch.commit();
      // alert("deleted");
      // window.location.reload();
      console.log("deleted");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Grid style={{ padding: "1rem" }}>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable
            title={"History of the Products"}
            options={options}
            columns={columns}
            data={product}
          />
        </ThemeProvider>
      </Grid>
    </div>
  );
};
export default History;
