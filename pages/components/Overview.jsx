import Typewriter from "typewriter-effect";
import Video from "../../public/assets/video.mp4";
import Card from "./Card";
import { cards } from "../data/cardData";

function Overview() {
    return (
        <section className='flex flex-col'>
            <div className='relative'>
                <video
                    style={{ width: "100%", height: "100%" }}
                    autoPlay
                    muted
                    loop>
                    <source src={Video} type='video/mp4' />
                </video>
                <div className='typed absolute text-slate-100 top-36 left-36 flex gap-x-5 text-8xl'>
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
            <div className='self-center flex gap-x-36 mt-10' id='overview'>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        frontTitle={card.frontTitle}
                        frontImage={card.frontImage}
                        backDescription={card.backDescription}
                    />
                ))}
            </div>
        </section>
    );
}

export default Overview;
