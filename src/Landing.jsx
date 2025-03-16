import { useState } from "react";
import "./Landing.css"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";





function Landing(){
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const [text, setText] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("User Input: ", text);
    }

    return(
        <>
        <div className="content">
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
                    Submit
                </button>
                
            </form>
        </div>
        </>
    );
}

export default Landing