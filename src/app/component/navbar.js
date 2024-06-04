import Link from 'next/link';

const Navbar = () => {
    const neonGreenStyle = {
        backgroundColor: '#479f78',
        padding: '1rem',
        height: '60px'
    };

    return (
        <nav style={neonGreenStyle} className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    NextApp
                </div>
                <div>
                    <Link href="/" className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                        Home
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
