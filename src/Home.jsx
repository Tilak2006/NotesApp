import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./Home.css"

function Home(){

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);


    return(
        <>
        
            <section className="home-content">
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
                <div className="main-text">
                    <h1>WELCOME <br></br>
                        TO <br></br> </h1>
                        <div className="new-text">
                        <h1>THOUGHTFLOW</h1>
                        </div>
                </div>
            </section>
            <section className="different-content">
                <div className="containertwo">
                    <h2>
                        
                    </h2>
                </div>
            </section>
        </>
    );

}
export default Home