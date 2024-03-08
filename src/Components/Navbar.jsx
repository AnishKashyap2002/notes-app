import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { GiCrossedBones } from "react-icons/gi";

const Navbar = ({ searchText, handleChange }) => {
    const [search, setSearch] = useState(false);
    return (
        <motion.div
            initial={{
                y: "-100%",
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                delay: 1,
                type: "spring",
                duration: 0.75,
            }}
            className=" text-white px-4 py-2 
            mt-4
            flex justify-between items-center min-w-[200px]"
        >
            <p
                className={`font-bold
                 text-xl sm:text-3xl cursor-pointer ${search ? "hidden" : ""} `}
            >
                Notes
            </p>
            <motion.div
                className={`${search ? "block" : "hidden"}
                w-full
            `}
                initial={{
                    x: "-100%",
                }}
                whileInView={{
                    x: 0,
                }}
            >
                <label>
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => handleChange(e.target.value)}
                        className="rounded-2xl bg-slate-500 
                     py-2 px-4 w-full placeholder:font-medium"
                        placeholder="Search notes..."
                    />
                </label>
            </motion.div>
            <div className="flex flex-col justify-end items-end ml-2">
                <p
                    className="mr-3 font-bold text-[14px] sm:text-xl rounded-2xl bg-slate-500 p-4 cursor-pointer"
                    onClick={() => setSearch(!search)}
                >
                    {search ? <GiCrossedBones /> : <BsSearch />}
                </p>
            </div>
        </motion.div>
    );
};

export default Navbar;
