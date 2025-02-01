import type {Config} from "tailwindcss";

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure this covers all your files
    theme: {
        extend: {
            colors: {
                darkBlue: "#0A192F",
                lightDarkBlue: "#112240",
                textGray: "#8892B0",
                white: "#ffffff",
                'light-darkblue': '#2b4f6b'

            },
        },
    },
    plugins: [],
};

export default config;
