import React from "react";
import Input from "./Input";
import { examples } from "../consts/examples";
const SearchPage = () => {
    return (
        <div className=" flex items-center flex-col justify-around w-full">
            <Input />
            <div>
                <h2>Примеры запросов</h2>
                <div className="flex gap-x-4 gap-y-2 flex-wrap">
                    {examples.map((el) => (
                        <div>
                            <div className=" rounded-md bg-gray-400 bg-opacity-80 bg-opacity-5 shadow-md shadow-light-red inline-block text-md px-2">{el}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
