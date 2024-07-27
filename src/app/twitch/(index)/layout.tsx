import { Header } from "@/components/twitch/(index)/Header";

export default function Layout({ children }: { children: ChildNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
