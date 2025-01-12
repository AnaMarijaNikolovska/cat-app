import React, { useEffect } from "react";
import Sound from '../assets/zapsplat_animals_cat_kitten_meow_005_30181.mp3';
import {useLocation} from "react-router-dom";

export default function ClickSound() {
    const sound = new Audio(Sound);
    const location = useLocation();

    useEffect(() => {
        const handleClick = () => {
            sound.currentTime = 0; // Reset the sound to the start for overlapping clicks
            sound.play().catch((error) => {
                console.error("Sound playback error:", error);
            });
        };

        // Add event listener to the document for clicks
        document.addEventListener("click", handleClick);

        // Cleanup to avoid memory leaks
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [sound]);

    useEffect(() => {
        // Play sound whenever location (route) changes
        sound.currentTime = 0; // Reset sound to the start
        sound.play().catch((error) => {
            console.error("Sound playback error:", error);
        });
    }, [location]);

    return null; // This component does not render anything
}
