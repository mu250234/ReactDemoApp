import React from "react";

import * as S from "./styles";

import SidebarItem from "../../CommonComponents/SidebarItem";
import Folder from "../../Img/folder.svg";
import Settings from "../../Img/settings.svg";
import TaskFill from "../../Img/task.png";

import { Link } from "react-router-dom";

import { Box, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";
import ExpandSidebarItem from "../../CommonComponents/ExpandSidebarItem";
import Header from "../../Components/Header/header";
import UserList from "../../Components/UserList";

const CategoriePage: React.FC = () => {
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <SidebarItem
              icon={TaskFill}
              name={t("Overview")}
              isActive={false}
            ></SidebarItem>
          </Link>
          <ExpandSidebarItem icon={Folder} name={t("Users")}></ExpandSidebarItem>
          <SidebarItem
            icon={Settings}
            name={t("Settings")}
            
            isActive={false}
          ></SidebarItem>
        </S.Tabs>
      </S.Sidebar>
      <S.Main>
        <UserList />
      </S.Main>
    </S.Page>
    </>
  );
};

export default CategoriePage;
