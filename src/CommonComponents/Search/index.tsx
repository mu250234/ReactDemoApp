import React, { ChangeEvent } from "react";

import { IconButton, TextField } from "@mui/material";
import { Clear, Search } from "@mui/icons-material";


interface QuickSearchToolbarProps {
    clearSearch: () => void;
    onChange: (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value: string;
  }

const QuickSearchToolbar:React.FC <QuickSearchToolbarProps>= ({clearSearch,onChange,value})=>{
    

    

    return (
      <div >
        
        <TextField
          variant="outlined"
          
          onChange={onChange}
          placeholder="Search…"
          
          InputProps={{
            startAdornment: <Search fontSize="small" />,
            endAdornment: (
              <IconButton
                title="Clear"
                aria-label="Clear"
                size="small"
                style={{ visibility: value ? 'visible' : 'hidden' }}
                onClick={clearSearch}
              >
                <Clear fontSize="small" />
              </IconButton>
            ),
          }}
        />
      </div>
    );
};

export default QuickSearchToolbar;