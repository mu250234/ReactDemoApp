import React, { useContext } from "react";
import * as S from "./styles";

import SidebarItem from "../../CommonComponents/SidebarItem";
import Folder from "../../Img/folder.svg";
import Settings from "../../Img/settings.svg";
import TaskFill from "../../Img/taskFill.png";

import AuthContext, { AuthType } from "../../Contexts/authContext";

import { Box, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";
import ExpandSidebarItem from "../../CommonComponents/ExpandSidebarItem";
import Header from "../../Components/Header/header";

const Home: React.FC = () => {
  const { setUserData } = useContext(AuthContext) as AuthType;
  const { t } = useTranslation();

  return (
    <>
    <Header />
    <S.Page>
     
      <S.Sidebar>
      
        <Toolbar sx={{ justifyContent: "flex-start" }}>
          <Box>My Company LTD.</Box>
        </Toolbar>

        <S.Tabs>
          <SidebarItem
            icon={TaskFill}
            name={t("Overview")}
            isActive={true}
          ></SidebarItem>
          <ExpandSidebarItem icon={Folder} name={t("Users")}></ExpandSidebarItem>
          <SidebarItem
            icon={Settings}
            name={t("Settings")}
            isActive={false}
          ></SidebarItem>
        </S.Tabs>
      </S.Sidebar>
      <S.Main></S.Main>
    </S.Page>
    </>
  );
};

export default Home;
