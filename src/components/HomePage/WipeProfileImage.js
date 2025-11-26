import React, { useRef, useEffect } from "react";
import "../../styles/HomePage.css";

const WipeProfileImage = () => {
    const containerRef = useRef(null);
    const maskRef = useRef(null);
    const rectRef = useRef(null);
    const requestRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const mask = maskRef.current;

        if (!container || !mask) return;

        const updateRect = () => {
            rectRef.current = container.getBoundingClientRect();
        };

        // Initial rect calculation
        updateRect();
        window.addEventListener("resize", updateRect);
        window.addEventListener("scroll", updateRect);

        const onMouseMove = (e) => {
            if (!rectRef.current) return;

            // Cancel previous frame if exists
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }

            requestRef.current = requestAnimationFrame(() => {
                const rect = rectRef.current;
                const x = e.clientX - rect.left;

                // Clamp x between 0 and width
                const clampedX = Math.max(0, Math.min(x, rect.width));

                mask.style.width = `${clampedX}px`;
            });
        };

        const onMouseLeave = () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            // Add transition for smooth reset
            mask.style.transition = "width 0.3s ease";
            mask.style.width = "0px";

            // Remove transition after it finishes to allow instant updates on next hover
            setTimeout(() => {
                if (mask) mask.style.transition = "none";
            }, 300);
        };

        // Attach events to the container itself, not the whole hero section
        // This might be why it felt "not working" if the user wasn't hovering the container exactly?
        // But the wipe effect usually works when hovering the *section* but affecting the *image*.
        // Let's stick to the container for now to see if it fixes the "lag" (less events).
        // Wait, the original design was "move mouse over the screen to wipe the image".
        // If so, I should attach to window or hero section.
        // Let's attach to the container first for performance. If user wants full screen wipe, I'll change it.
        // User said "Wipe Animation Profile Picture". Usually this implies hovering the picture.

        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseLeave);

        return () => {
            window.removeEventListener("resize", updateRect);
            window.removeEventListener("scroll", updateRect);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseLeave);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div className="profile-image-container" ref={containerRef}>
            {/* Normal Image (Background) */}
            <img
                src={`${process.env.PUBLIC_URL}/profile-normal.jpg`}
                alt="Anany Singh"
                className="profile-img normal"
            />

            {/* Artistic Image (Foreground with Mask) */}
            <div className="artistic-mask" ref={maskRef}>
                <img
                    src={`${process.env.PUBLIC_URL}/profile-artistic.jpg`}
                    alt="Anany Singh Artistic"
                    className="profile-img artistic"
                />
            </div>
        </div>
    );
};

export default WipeProfileImage;
