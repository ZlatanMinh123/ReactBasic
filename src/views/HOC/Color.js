import React from "react";
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor();
    //component Home sẽ nhận tất cả các props từ App, component cha trực tiếp của nó.
    return (props) => (
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} />
        </div>
    );
};
export default Color;
