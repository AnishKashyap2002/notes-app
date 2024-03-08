import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

const EditNote = ({ handleUpdateNote, handleDeleteNote, notes }) => {
    const { id } = useParams();
    let oldTitle = "";
    let oldDesc = "";
    notes.map((note) => {
        if (note.id == id) {
            oldTitle = note.title;
            oldDesc = note.description;
        }
    });

    const [title, setTitle] = useState(oldTitle);
    const [desc, setDesc] = useState(oldDesc);
    const navigate = useNavigate();

    const handleDelete = () => {
        handleDeleteNote(id);
        setTitle("");
        setDesc("");
        navigate("/");
        toast.error("Note Deleted");
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (title && desc) {
            handleUpdateNote({
                id,
                title,
                description: desc,
                date: new Date().toLocaleString(),
            });
            setTitle("");
            setDesc("");
            navigate("/");
            toast.success("Note Updated :)");
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

                <div className="flex  justify-center items-center  ml-2">
                    <p
                        className="rounded-2xl text-4xl bg-orange-400 px-4 py-2 mr-5
                    cursor-pointer"
                        onClick={handleDelete}
                    >
                        <AiFillDelete />
                    </p>

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
                        Edit Note
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

export default EditNote;
