import React, { useState } from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import "./DropDown.css";

const DropdownTrigger = (searchList: any) => {
  const options: any = [];
  searchList.filteredGameList.map((item: any, i: number) => {
    options.push({
      key: i,
      text: item.name,
      // 게임 이미지. 이미지가 별로라 안넣음. 게임 포스터 이미지가 없는듯
      // image: { avartar: true, src: { img } },
    });
  });
  return <Dropdown options={options} />;
};

export default DropdownTrigger;