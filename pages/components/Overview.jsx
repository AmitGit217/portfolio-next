import Typewriter from "typewriter-effect";
import Video from "../../public/video.mp4";

function Overview() {
    return (
        <section id='overview'>
            <div className='relative'>
                <video width='100%' height='100%' autoPlay muted loop>
                    <source src={Video} type='video/mp4' />
                </video>

                <div className='typed absolute text-slate-100 top-5 left-16 inline-block '>
                    I am a{" "}
                    <Typewriter
                        options={{
                            strings: ["developer", "team player"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <style jsx>{`
                .typed div {
                    display: inline;
                }
            `}</style>
        </section>
    );
}

export default Overview;
