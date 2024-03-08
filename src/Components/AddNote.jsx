import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-hot-toast";

const AddNote = ({ handleAddNote }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (title && desc) {
            handleAddNote({
                id: uuidV4(),
                title,
                description: desc,
                date: new Date().toLocaleString(),
            });
            setTitle("");
            setDesc("");
            navigate("/");
            toast.success("Note Added :)");
        } else {
            alert("All fields are mandatory");
        }
    };

    return (
        <div className="">
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
            mt-3 
            flex justify-between items-center min-w-[200px]"
            >
                <Link to="/">
                    <p
                        className={`mr-3 font-bold text-[14px] text-2xl sm:text-3xl rounded-2xl bg-slate-500 p-4 cursor-pointer `}
                    >
                        <IoIosArrowBack />
                    </p>
                </Link>

                <div className="flex flex-col justify-end items-end ml-2">
                    <p
                        className="mr-3 font-bold text-[14px] sm:text-xl rounded-2xl bg-slate-500 p-4 cursor-pointer"
                        onClick={handleClick}
                    >
                        Save
                    </p>
                </div>
            </motion.div>
            <div className="mx-6 my-4">
                <form
                    className="flex
                 flex-col mt-10 text-white"
                >
                    <div className="font-bold text-[30px] text-right ">
                        Add Note
                    </div>
                    <motion.div
                        initial={{
                            x: "-100%",
                        }}
                        whileInView={{
                            x: 0,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.6,
                        }}
                    >
                        <label className="flex flex-col mt-4">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                name="title"
                                placeholder="Title"
                                className="text-3xl  border-b-white
                        w-full bg-transparent border-transparent  border-2
                        outline-none px-4 py-2
                        "
                            />
                        </label>
                        <label className="flex flex-col mt-4">
                            <textarea
                                rows={7}
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                type="text"
                                name="description"
                                placeholder="Define note...."
                                className="text-3xl 
                        w-full bg-transparent 
                        outline-none px-4 py-2
                        "
                            />
                        </label>
                    </motion.div>
                </form>
            </div>
        </div>
    );
};

export default AddNote;
