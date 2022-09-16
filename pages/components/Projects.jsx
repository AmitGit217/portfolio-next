import Card from "./Card";
import { cards } from "../data/cardData";

function Projects() {
    return (
        <div
            className='self-center flex  flex-wrap m-auto items-center  justify-center gap-x-36  mt-48 sm:flex-col sm:gap-y-5'
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
    );
}

export default Projects;
