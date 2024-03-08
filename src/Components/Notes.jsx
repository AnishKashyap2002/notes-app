import React, { useState } from "react";
import Navbar from "./Navbar";
import { BiCross } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Note = ({ index, title, description, date, id }) => {
    return (
        <Link to={`/edit-note/${id}`}>
            <motion.div
                initial={{
                    y: "100px",
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: 0.5 * index,
                    duration: 0.75,
                }}
                className=" bg-slate-700 w-full sm:w-[250px] text-white shadow-lg shadow-slate-800 px-4
        py-2 rounded-2xl"
            >
                <h3 className="text-[18px] font-bold">{title}</h3>
                <h3
                    className="mt-4 text-slate-300 text-[14px]
                overflow-hidden truncate max-h-[100px] max-w-[300px]
                "
                >
                    {description}
                </h3>
                <span className="mt-2 font-medium text-[16px]">{date}</span>
            </motion.div>
        </Link>
    );
};

const ShowNotes = ({ notes }) => {
    return (
        <div className="mt-8 px-5 py-4 flex flex-wrap gap-5">
            {notes.map((note, index) => (
                <Note
                    key={index}
                    index={index}
                    {...note}
                />
            ))}
        </div>
    );
};

const Notes = ({ notes }) => {
    const [searchText, setSearchText] = useState("");

    const [filterdNotes, setFilteredNotes] = useState(notes);

    const handleChange = (searchTerm) => {
        setSearchText(searchTerm);
        const newNotes = notes.filter((note) =>
            note.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredNotes(newNotes);
    };
    return (
        <>
            <Navbar
                searchText={searchText}
                handleChange={handleChange}
            />
            <Link to="/add-note">
                <div
                    className="absolute 
                    bottom-20 right-10 bg-slate-500
                    rounded-3xl p-4 cursor-pointer"
                >
                    <p
                        className="text-white
                        text-3xl"
                    >
                        <BiCross />
                    </p>
                </div>
            </Link>
            <ShowNotes notes={filterdNotes} />
        </>
    );
};

export default Notes;
