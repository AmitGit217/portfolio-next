import Navbar from "./Navbar";
function Header() {
    return (
        <header className='pt-10 bg-gray-800'>
            <h1 className='text-center mt-0 text-slate-100 text-6xl sm:text-4xl'>
                Amit Bar-Gil
            </h1>
            <h2 className='text-center mt-2 text-slate-100 text-3xl tracking-widest mb-10 sm:text-2xl'>
                Full Stack web developer
            </h2>
            <Navbar />
        </header>
    );
}
export default Header;
