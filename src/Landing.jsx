import { useState } from "react";
import "./Landing.css"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { createNote } from "./api"; 




const Landing = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const [text, setText] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!text.trim()) return; // Prevent empty submissions

        console.log("User Input:", text); // Debugging log

        const newNote = await createNote(text); // API call
        if (newNote) {
            alert("Note Created Successfully!"); // Temporary feedback
            setText(""); // Clear input field after successful submission
        }
    };

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
        
        <div className="content">
            <h1 className="notes-title2">CREATE</h1>
            
            <form onSubmit={handleOnSubmit}>
                <input 
                type="text"
                placeholder="WHATS ON YOUR MIND?" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <button
                type="submit"
                >
                    CREATE
                </button>
                
            </form>
        </div>
        </>
    );
}

export default Landing