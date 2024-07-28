export const Hero = () => {
    return (
        <section className="bg-[#9146FF] h-[calc(100vh-9rem)] flex items-center justify-center">
            <h1 className="flex flex-wrap justify-center gap-10 text-[11rem] text-white font-medium leading-[1] pb-20">
                <span className="animate-twitch-text-jump delay-0">We</span>
                <span className="animate-twitch-text-jump delay-100">
                    saved
                </span>
                <span className="animate-twitch-text-jump delay-200">you</span>
                <span className="animate-twitch-text-jump delay-300">a</span>
                <span className="animate-twitch-text-jump delay-400">seat</span>
                <span className="animate-twitch-text-jump delay-500">in</span>
                <span className="animate-twitch-text-jump delay-600">chat</span>
                <img
                    className="w-40 h-40 animate-twitch-text-jump delay-700 mr-24"
                    src={"https://www.twitch.tv/p/company-assets/emotes/hi.png"}
                />
            </h1>
        </section>
    );
};
