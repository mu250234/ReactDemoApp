import React, { ChangeEvent, useEffect, useState } from "react";

import { Box, Grid2, Toolbar } from "@mui/material";
import TableList from "../../CommonComponents/TableList";

import { useCustomerParty, UsersData } from "../../Queries/user.queries";
import NuudayButton from "../../CommonComponents/CustomeButton/nuuday.button";
import QuickSearchToolbar from "../../CommonComponents/Search";

const UserList: React.FC = () => {
  const usersDataQuery = useCustomerParty();
  const [filteredRows, setFilteredRows] = useState<UsersData[]>(usersDataQuery.data??[]);



  const clearSearch = () => {
    setFilteredRows(usersDataQuery.data ?? []);
  };

  useEffect(() => {
   
    usersDataQuery.data && setFilteredRows(usersDataQuery.data);
  }, [usersDataQuery.data]);

  const onSearchChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const searchTerm = event.target.value;
    
    if(searchTerm===''){
      setFilteredRows(usersDataQuery.data ?? []);
      return;
    }
      const filtered = [
        ...filteredRows.filter((item, index) => {
          return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        }),
      ];
      console.warn('filtered',filtered);
      setFilteredRows(filtered);
    
  };

  return (
    <>
      
        <Box sx={{ m: "2rem" }}>
          <Grid2 container spacing={1}>
            <Grid2 size={9}>
              <QuickSearchToolbar
                value=""
                clearSearch={clearSearch}
                onChange={onSearchChange}
              />
            </Grid2>
            <Grid2 size={3}>
              <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box sx={{ ml: "auto" }}>
                  <NuudayButton label="Create user" color="apple" />
                </Box>
              </Toolbar>
            </Grid2>
            
            <Grid2 size={12}>
            {filteredRows && filteredRows.length > 0 && (
              <TableList tableRows={filteredRows} />
            )}
            </Grid2>
            
          </Grid2>
        </Box>
      
    </>
  );
};

export default UserList;
