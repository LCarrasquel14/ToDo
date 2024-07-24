import React from "react";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
<<<<<<< HEAD
import ModalComponent from "../Modal/Modal";
import Navigation from "../Navigation/Navigation";
import { options, options2 } from "@/data/menu";

const SideBar = () => {
  return (
    <div className="flex flex-col w-[318px] border p-6">
      <div className="flex flex-row gap-4 justify-between items-center mb-7">
        <Text text="Project" variant="PageTitle" />
        <ModalComponent isOpen={false}>
          <Icon icon="add" size={22} className="cursor-pointer" />
        </ModalComponent>
      </div>
      <div>
        <Navigation
          title="Projects"
          options={options}
          onOptionSelected={() => {}}
        />
        <Navigation
          title="tasks"
          options={options2}
          onOptionSelected={() => {}}
        />
      </div>
=======

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="flex flex-row w-[262px] h-[30px] items-center justify-between">
      <Text text="Projects️" variant="PageTitle" />
      <Icon icon="add" size={20} />
>>>>>>> 7dfd84209c2f2d2b535a220adc241b84cc47b5d4
    </div>
  );
};

export default SideBar;
