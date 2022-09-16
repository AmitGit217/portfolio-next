import Image from "next/image";
import Typewriter from "typewriter-effect";
import ParticlesComponent from "./Particles.jsx";
import html from "../public/assets/html-5.png";
import css from "../public/assets/css-3.png";
import js from "../public/assets/js.png";
import react from "../public/assets/structure.png";
import node from "../public/assets/nodejs.png";
import express from "../public/assets/express.png";
import mongo from "../public/assets/mongodb-icon.png";
import query from "../public/assets/query.svg";
import types from "../public/assets/type.png";
import redux from "../public/assets/redux.png";
import dp from "../public/assets/DP.png";

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
                            src={html}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={css}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={js}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={react}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={node}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            className='rounded-full'
                            src={express}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={mongo}
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
                            src={query}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            src={types}
                            alt='react'
                            width={"75"}
                            height={"75"}
                        />
                        <Image
                            className='rounded-full'
                            src={redux}
                            alt='react'
                            width={"75"}
                            height={"70"}
                        />
                        <Image
                            className='rounded-full'
                            src={dp}
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
