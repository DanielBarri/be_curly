// components/HoverModal.tsx
import React from "react";

type HoverModalProps = {
    visible: boolean;
    title: string;
    position: { x: number; y: number };
};

const HoverModal: React.FC<HoverModalProps> = ({
    visible,
    title,
    position,
}) => {
    if (!visible) return null;

    return (
        <div
            className="absolute bg-becurlyBlack text-white px-4 py-2 rounded-lg shadow-lg text-sm"
            style={{
                top: position.y,
                left: position.x,
                transform: "translate(30px, -50%)",
                zIndex: 1000,
            }}>
            {title}
        </div>
    );
};

export default HoverModal;
