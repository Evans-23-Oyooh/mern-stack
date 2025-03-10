import { MouseEventHandler } from "react";

export interface CustormButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
    textStyles?:string;
    rightIcon?: string;
    isDisabled?: boolean;
}
export interface SearchManufacturerProps{
  manufacture:string;  
  setManufacturer:(manufacturer:string) =>void;
}
export interface CarProps{
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders : number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: number;
  year: number;
}