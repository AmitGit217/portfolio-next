import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import Image from "next/image";
import { Button, Link } from "@mui/material";
import github from "../../public/assets/github.svg";

function Card({ frontTitle, frontImage, backDescription, projectLink }) {
    const [isFlipped, setFlip] = useState(false);
    const handleClick = () => setFlip(!isFlipped);
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <div className='card bg-black p-5 rounded-md flex flex-col items-center justify-evenly max-w-xs  h-96 border-solid border-2 border-slate-600'>
                <Image
                    src={frontImage}
                    alt='front image'
                    width={"230"}
                    height={"40"}
                />
                <h3 className=' font-sans'>{frontTitle}</h3>
                <Button
                    variant='contained'
                    onClick={handleClick}
                    className='bg-black text-slate-100 p-3 rounded-xl  px-16 hover:bg-zinc-900 transition'>
                    Flip
                </Button>
            </div>
            <div className='card bg-white p-5 rounded-md flex flex-col items-center gap-y-3  max-w-xs h-96 justify-around border-solid border-2 border-slate-600'>
                <p className=' font-sans text-center'> {backDescription}</p>
                <Link href={projectLink} target='_blank'>
                    <Image
                        className=' hover:opacity-75 transition'
                        src={github}
                        alt='github'
                        width={"75"}
                        height={"75"}
                    />
                </Link>
                <Button
                    variant='contained'
                    onClick={handleClick}
                    className='bg-black text-slate-100 p-3 rounded-xl  px-16 hover:bg-zinc-900 transition'>
                    Flip
                </Button>
            </div>
        </ReactCardFlip>
    );
}

export default Card;
