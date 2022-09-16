import Card from "./Card";
import { cards } from "../data/cardData";

function Projects() {
    return (
        <div>
            <h4 className=' text-slate-100 text-7xl mb-10 text-center mt-52 sm:text-3xl '>
                Projects
            </h4>
            <div
                className='self-center flex  flex-wrap m-auto items-center  justify-center gap-x-36   sm:flex-col sm:gap-y-5'
                id='projects'>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        frontTitle={card.frontTitle}
                        frontImage={card.frontImage}
                        backDescription={card.backDescription}
                        projectLink={card.projectLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
