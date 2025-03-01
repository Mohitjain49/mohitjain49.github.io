export const PORTFOLIO_LINK = "https://mohit-jain.com/";

export const HOME_BACKGROUND = {
    background: { color: "#232323" },
    fpsLimit: 40,
    particles: {
        color: { value: ["rgb(126, 90, 0)", "#0047ABE6", "#FFFFFFE6", "rgb(67, 130, 255)", "globe-green: #4fc20ca8"] },
        move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 0.75,
            straight: false,
        },
        number: {
            density: { enable: true, area: 1200 },
            value: 1000
        },
        opacity: {
            value: { min: 0.1, max: 0.75 },
            animation: { enable: true, speed: 1, sync: false },
        },
        shape: {
            type: "triangle"
        },
        size: {
            value: { min: 2, max: 3 },
        },
    },
    detectRetina: true,
    tRetina: true,
};