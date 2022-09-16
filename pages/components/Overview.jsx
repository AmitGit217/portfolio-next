import Typewriter from "typewriter-effect";
import ParticlesComponent from "../components/Particles.tsx";

function Overview() {
    return (
        <div id='overview'>
            <div className='flex flex-col'>
                <ParticlesComponent />
                <div className='typed text-slate-100 text-8xl sm:text-5xl ml-10'>
                    I am a{" "}
                    <Typewriter
                        options={{
                            strings: [
                                "developer",
                                "team player",
                                "problem-solver",
                                "code addict",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Overview;
