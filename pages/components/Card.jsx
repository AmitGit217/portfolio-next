import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import Image from "next/image";

function Card({ frontTitle, frontImage, backDescription }) {
    const [isFlipped, setFlip] = useState(false);
    const handleClick = () => setFlip(!isFlipped);
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <div className='card bg-white p-5 rounded-md flex flex-col items-center gap-y-3 w-80  h-96 justify-center'>
                <Image src={frontImage} alt='' width={"225"} height={"300"} />
                <h3>{frontTitle}</h3>
                <button onClick={handleClick}>Click to flip</button>
            </div>

            <div className='card bg-white p-5 rounded-md flex flex-col items-center gap-y-3 w-80 h-96  justify-center'>
                <Image src={frontImage} alt='' width={"225"} height={"300"} />
                <h3>{frontTitle}</h3>
                <p>{backDescription}</p>
                <button onClick={handleClick}>Click to flip</button>
            </div>
        </ReactCardFlip>
    );
}

export default Card;
