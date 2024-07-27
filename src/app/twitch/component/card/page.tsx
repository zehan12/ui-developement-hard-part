"use client";
import "./style.css";
import { useEffect, useRef } from "react";

export default function Page() {
    const text =
        "But in a much more real sense, I have no idea what I'm doing.";
    const subtitleRef: any = useRef(null);

    useEffect(() => {
        if (subtitleRef.current) {
            subtitleRef.current.innerHTML = "";

            text.split(" ").forEach((word, index) => {
                const span = document.createElement("span");
                span.innerHTML = `${word} `;
                span.classList.add("card-subtitle-word");
                span.style.transitionDelay = `${index * 40}ms`;
                subtitleRef.current.appendChild(span);
            });
        }
    }, [text]);

    return (
        <section className="w-full h-screen flex justify-center items-center bg-black/90">
            <div className="card">
                <div className="card-content">
                    <h3 className="card-title">
                        I know exactly what I'm doing
                    </h3>
                    <h4 ref={subtitleRef} className="card-subtitle"></h4>
                </div>
                <i className="fa-solid fa-hat-witch card-icon"></i>
            </div>
        </section>
    );
}
