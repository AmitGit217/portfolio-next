import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
function HomePage() {
    return (
        <div className='bg-stone-800  font-sanss'>
            <Header />
            <Overview />
        </div>
    );
}

export default HomePage;
