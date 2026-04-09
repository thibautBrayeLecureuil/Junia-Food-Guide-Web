function Header() {
    return (

        <div className="relative overflow-hidden">
            <div className="h-[350px] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-green/40 to-black/40"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-4 drop-shadow-2xl">
                        JUNIA Food Guide
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Header;