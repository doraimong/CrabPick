import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Dropdown, Icon } from "semantic-ui-react";
import "./DropDown.css";

const DropdownTrigger = (searchList: any) => {
  const navigate = useNavigate();
  const goToDetail = (e: any) => {
    console.log("된다");
    // console.log(e.target);
    // navigate(`/detail/${game.game.appId}`);
    navigate("/detail");
  };

  const options: any = [];
  searchList.filteredGameList.map((item: any, i: number) => {
    const url = `https://cdn.cloudflare.steamstatic.com/steam/apps/${item.appId}/capsule_sm_120.jpg?`;
    options.push({
      key: i,
      text: item.name,
      value: item.name,
      image: { avatar: true, src: url },
    });
  });

  const dropDownMenu = [];

  return <Dropdown options={options} className="a"></Dropdown>;
};

export default DropdownTrigger;
