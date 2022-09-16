import Image from "next/image";
import Typewriter from "typewriter-effect";
import ParticlesComponent from "../components/Particles.tsx";

function Overview() {
    return (
        <div id='overview'>
            <div className='flex flex-col'>
                <ParticlesComponent />
                <h2 className='typed text-slate-100 text-8xl sm:text-4xl text-center mb-10 '>
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
                </h2>
                <div className='flex flex-col justify-center items-center gap-y-10'>
                    <h2 className='typed text-slate-100 text-7xl  text-center mt-36 sm:text-3xl mb-10'>
                        Most experienced with
                    </h2>
                    <div className='flex flex-wrap gap-7  max-w-sm justify-center'>
                        <Image
                            src={"/../public/assets/html-5.png"}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={"/../public/assets/css-3.png"}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={"/../public/assets/js.png"}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={"/../public/assets/structure.png"}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={"/../public/assets/nodejs.png"}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            className='rounded-full'
                            src={"/../public/assets/express.png"}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={"/../public/assets/mongodb-icon.png"}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                    </div>
                    <h2 className='typed text-slate-100 text-7xl  text-center mt-36 sm:text-3xl mb-10'>
                        Currently learning
                    </h2>
                    <div className='flex flex-wrap gap-7  max-w-sm justify-center'>
                        <Image
                            className='rounded-full'
                            src={"/../public/assets/query.avif"}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={"/../public/assets/type.png"}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            className='rounded-full'
                            src={"/../public/assets/redux.png"}
                            alt='react'
                            width={"75"}
                            height={"70"}
                        />
                        <Image
                            className='rounded-full'
                            src={"/../public/assets/DP.png"}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Overview;
