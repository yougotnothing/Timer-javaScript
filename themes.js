let themes = document.getElementById("themes");
let lightTheme = document.getElementById("whiteTheme");
let darkTheme = document.getElementById("darkTheme");
let blueTheme = document.getElementById("blueTheme");
let greenTheme = document.getElementById("greenTheme");
let violetTheme = document.getElementById("violetTheme");

const themeContainer = {
    "light": {
        "--back-color": "#FFFAFA",
        "--font-color": "#1E1E1E",
        "--button-color": "#B5B8B1",
    },
    "dark": {
        "--back-color": "#2d2d2d",
        "--font-color": "#cdcdcd",
        "--button-color": "#6f6f6f",
    },
    "blue": {
        "--back-color": "#1D334A",
        "--font-color": "#3F888F",
        "--button-color": "#A6CAF0",
    },
    "green": {
        "--back-color": "#2F4538",
        "--font-color": "#6DAE81",
        "--button-color": "#999950",
    },
    "violet": {
        "--back-color": "#46394B",
        "--font-color": "#B565A7",
        "--button-color": "#C8A2C8",       
    }
}

function applyTheme(name) {
    const chosenTheme = themeContainer[name];
    const changeElement = document.documentElement;

    for(let key in chosenTheme) {
        changeElement.style.setProperty(key, chosenTheme[key])
    }
}

themes.addEventListener("change", function() {
    const themeSelect = themes.value;
    applyTheme(themeSelect);
});

applyTheme("dark")