import "./Notes.css"
import { useState, useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { getNotes } from './api';

function Notes(){
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes().then(response => setNotes(response.data));
    }, []);

    return(
        <>
        <Particles
                        id="tsparticles"
                        init={particlesInit}
                        options={{
                            background: {
                                color: "#1e1e1e",
                            },
                            particles: {
                                number: {
                                    value: 25,
                                    density: { enable: true, value_area: 800 },
                                },
                                color: { value: "#ffffff" },
                                shape: { type: "circle" },
                                opacity: {
                                    value: 0.5,
                                    random: true,
                                    anim: { enable: true, speed: 3, opacity_min: 0.1 },
                                },
                                size: {
                                    value: 4,
                                    random: true,
                                    anim: { enable: true, speed: 5, size_min: 0.2 },
                                },
                                move: {
                                    enable: true,
                                    speed: 2,
                                    direction: "none",
                                    out_mode: "out",
                                },
                            },
                        }}
                    />
                    <section className="notes-content">
                
                    <div className="notes-container">
    <h1 className="notes-title">MY NOTES</h1>
    {notes.map((note) => (
        <div key={note.id} className="note-card">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="extra-content">
                <p>{note.content}</p>
            </div>
        </div>
    ))}
</div>
            </section>
        
        </>
    );


}
export default Notes