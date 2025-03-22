import React, {useState, useContext} from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import { Link } from "react-router-dom";
import AuthContext, {AuthType} from "../../Contexts/authContext";
import NuudayButton from "../../CommonComponents/CustomeButton/nuuday.button";
import { Box } from "@mui/material";


const Login: React.FC = ()=>{
    const {setUserData} = useContext(AuthContext) as AuthType;
    const [email, setEmail] =  useState("");

    function handleLogin(){
        localStorage.setItem('@Project:email', email);
        setUserData({email})


    }

    

    function handleEmail(event: React.ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }

    return(    
        <S.Page>
            <S.LeftSide>
                
            </S.LeftSide>
            <S.RightSide>
                <S.Title>Welcome </S.Title>
                <S.Subtitle>Please, insert your informations to access your tasks.</S.Subtitle>
                <S.FieldName >User name</S.FieldName>
                <S.InputField value={email} id="email" onChange={handleEmail} placeholder="User name"></S.InputField>
                <S.FieldName>Password</S.FieldName>
                <S.InputField placeholder="Insert your password" type="password"></S.InputField>
                
                <Link to="/">
                <Box sx={{ mt: 2 }} onClick={handleLogin}>
                    <NuudayButton label='Sign in' color='cool'/>
                    </Box>
                </Link>
               
            </S.RightSide>
        </S.Page>
    )
};

export default Login;