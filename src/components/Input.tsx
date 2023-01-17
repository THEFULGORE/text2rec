import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Input = () => {
    return (
        <div className="relative">
            <AiOutlineSearch className=" text-4xl text-black h-10 absolute left-0 p-1" />
            <input type="text" className=" bg-cream rounded-md w-96 h-10 text-black font-sans text-2xl bg pl-10" placeholder="Подобрать фильм" />
        </div>
    );
};

export default Input;
