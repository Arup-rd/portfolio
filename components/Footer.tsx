"use client"; // Ensure this is a Client Component

import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/app/data";

export const Footer = () => {
    const onClickHandler = (profile) => {
        if (profile.id === 3) {
            window.open("https://www.linkedin.com/in/aruprotondhar", "_blank"); // Open LinkedIn in a new tab
        } else if (profile.id === 1) {
            window.open("https://github.com/Arup-rd", "_blank"); // Open GitHub in a new tab
        } else {
            alert(`Profile ID: ${profile.id}`); // For other profiles
        }
    };

    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>
                <a href="mailto:aruproton.dhar@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
                <div className="flex md:flex-row flex-col justify-between mt-16 w-full h-full">
                    <p className="md:text-base flex text-sm md:font-normal font-light">Copyright © 2024 Arup rd</p>
                    <div className="flex items-center md:gap-6 gap-8">
                        {
                            socialMedia.map(profile => (
                                <div
                                    key={profile.id}
                                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                                    onClick={() => onClickHandler(profile)}
                                >
                                    <img
                                        src={profile.img}
                                        alt='icons'
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
};
