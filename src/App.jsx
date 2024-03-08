import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    json,
} from "react-router-dom";
import Notes from "./Components/Notes";
import AddNote from "./Components/AddNote";
import EditNote from "./Components/EditNote";
import { Toaster } from "react-hot-toast";

function App() {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    );

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const handleDeleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id != id);
        setNotes(newNotes);
    };
    const handleUpdateNote = (updatedNote) => {
        const newNotes = notes.map((note) => {
            if (note.id == updatedNote.id) {
                updatedNote;
                return updatedNote;
            } else {
                return note;
            }
        });
        setNotes(newNotes);
    };
    const handleAddNote = (note) => {
        setNotes([note, ...notes]);
    };
    useEffect(() => {
        console.log(notes);
    }, [notes]);
    return (
        <div
            className="flex justify-center 
        items-center"
        >
            <Router>
                <div
                    className="relative max-w-[700px] w-full h-screen
                 bg-slate-900"
                >
                    <Routes>
                        <Route
                            path="/"
                            element={<Notes notes={notes} />}
                        />
                        <Route
                            path="/add-note"
                            element={<AddNote handleAddNote={handleAddNote} />}
                        />
                        <Route
                            path="/edit-note/:id"
                            element={
                                <EditNote
                                    notes={notes}
                                    handleDeleteNote={handleDeleteNote}
                                    handleUpdateNote={handleUpdateNote}
                                />
                            }
                        />
                    </Routes>
                </div>
            </Router>
            <Toaster />
        </div>
    );
}

export default App;
