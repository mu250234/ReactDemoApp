import React, {createContext, useState, ReactNode} from "react";
import { CategorieProps, CategorieContextType } from "./categoriesType";

interface ChildrenProps {
    children: React.ReactNode;
  };

export const CategoriesContext = createContext<CategorieContextType|null>(null);

export const CategoriesContextProvider:React.FC<ChildrenProps> = ({children})=>{

    const [categList, setCategList] = useState<CategorieProps[]>([
        {
            id:0,
            name: "Users Overview",
            color: "#afafaf"
        },
        {
            id:1,
            name: "Departments",
            color: "#FF9C9C"
        },
        {   id:2,
            name:"Key templates",
            color: "#FFD79C"
        }
    ])

    return(
        <CategoriesContext.Provider value={{categList}}>
            {children}
        </CategoriesContext.Provider>
    )
};

