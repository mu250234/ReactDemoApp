import React from "react";

import { CategoriesContextProvider } from "./Contexts/categoriesContext";

import { AuthProvider } from "./Contexts/authContext";

const ContextProviders:React.FC<any>=({children})=>{
    return(

                <CategoriesContextProvider>
                    <AuthProvider>
                    {children}
                    </AuthProvider>
                </CategoriesContextProvider>

    )
};

export default ContextProviders;