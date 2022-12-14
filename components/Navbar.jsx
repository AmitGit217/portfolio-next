function Navbar() {
    return (
        <nav className='flex   text-slate-100  font-bold text-lg'>
            <a href='#overview'>Overview</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
            <style jsx='true'>{`
                a {
                    cursor: pointer;
                    padding: 1%;
                    padding-right: 3%;
                    padding-left: 1.5%;
                    transition: 0.2s;
                }
                a:hover {
                    background-color: gray;
                }
            `}</style>
        </nav>
    );
}

export default Navbar;
