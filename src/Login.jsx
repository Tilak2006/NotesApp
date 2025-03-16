import { useState } from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


function Login() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const [email, setEmail] = useState("");  // Separate state for email
    const [password, setPassword] = useState("");  // Separate state for password

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
    };

return (
    
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
                <div className="login-formm">
                <form onSubmit={handleOnSubmit}>
                    <h2>LOGIN</h2>
                <input 
                type="text"
                placeholder="email" 
                value={email}
                onChange={(e) => setText(e.target.value)}
                />
                <input 
                type="text"
                placeholder="password" 
                value={password}
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

export default Login;
