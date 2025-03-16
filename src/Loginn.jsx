import "./Loginn.css"
import { useState } from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Loginn(){
    const particlesInit = useCallback(async (engine) => {
            await loadSlim(engine);
        }, []);
    
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
    
        const handleOnSubmit = (e) => {
            e.preventDefault();
            console.log("User Input: ", text);
        }
    
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
                <h1 className="notes-title2">LOGIN</h1>
                
                <form onSubmit={handleOnSubmit}>
                    <input 
                    type="text"
                    placeholder="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                    type="text"
                    placeholder="email" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                    type="login"
                    >
                        LOGIN
                    </button>
                    
                </form>
            </div>
            </>
        );
    }

export default Loginn