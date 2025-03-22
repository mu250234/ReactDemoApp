import React, { useState } from "react";
import * as S from "./styles"
import { Link } from "react-router-dom";

interface CategorieItemProps{
    name:string;
    color:string;
}

const CategorieItem:React.FC<CategorieItemProps> =({name,color})=>{
const [active, setActive] = useState(false);
function handleActivate(){
    setActive(!active);
}
    return(
        <Link  to={"/categorie/"+name} style={{ textDecoration: 'none' }} >
            <S.Categorie isActive={active} onClick={handleActivate}>
                
                <S.ListName>{name}</S.ListName>
            </S.Categorie>
        </Link>
)};

export default CategorieItem;