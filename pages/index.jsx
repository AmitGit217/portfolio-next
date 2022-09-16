import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
function HomePage() {
    return (
        <div className='font-sans  h-full  pb-10'>
            <Header />
            <Overview />
            <Projects />
        </div>
    );
}

export default HomePage;
