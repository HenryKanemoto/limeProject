import { Dispatch, MouseEvent, SetStateAction } from "react";
import optionType from "../types/OptionType";

export default function changeVersionHandler(
    event:  MouseEvent<HTMLButtonElement>, 
    option: optionType, 
    setProductVersion: Dispatch<SetStateAction<"PC" | "PS4" | "XBOX">>,
) 
    {
    event.preventDefault();
    if (option.version === "PC" || option.version === "PS4" || option.version === "XBOX") {
        setProductVersion(option.version);
    }
}