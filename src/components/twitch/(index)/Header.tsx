import Logo from "../../icons/logo";

export const Header = () => {
    return (
        <header className="bg-[#9146FF] p-8 px-32">
            <nav className="w-full flex items-center gap-4 mx-2 md:mx-auto">
                <div>
                    <Logo.Twitch width={110} height={110} />
                </div>
                <ul className="w-9/12 flex justify-center gap-12 mx-10 text-xl font-semibold">
                    <li>About</li>
                    <li>Stream</li>
                    <li>Watch</li>
                    <li>Company</li>
                    <li>Blog</li>
                </ul>
                <div className="text-white font-semibold text-xl">
                    twitch.tv
                </div>
            </nav>
        </header>
    );
};
