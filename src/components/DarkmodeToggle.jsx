// DarkModeToggle.js
import { useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => {
            // Toggle dark mode state
            const newDarkMode = !prevDarkMode;

            // Toggle 'dark' class on the html element
            document.documentElement.classList.toggle('dark', newDarkMode);

            return newDarkMode;
        });
    };

    return (
        <button onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
