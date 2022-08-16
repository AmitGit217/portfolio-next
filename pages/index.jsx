import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
function HomePage() {
    return (
        <div className='bg-stone-800  font-sans  h-full pt-3 pb-10'>
            <Header />
            <Overview />
        </div>
    );
}

export default HomePage;
