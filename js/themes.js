const selectElement = document.getElementById('themes');

const themeContainer = {
  "light": {
    "--back-color": "#FFFAFA",
    "--font-color": "#1E1E1E",
    "--button-color": "#B5B8B1",
    "--btn-fcolor": "#1E1E1E"
  },
  "dark": {
    "--back-color": "#2d2d2d",
    "--font-color": "#cdcdcd",
    "--button-color": "#6f6f6f",
    "--btn-fcolor": "#cdcdcd"
  },
  "blue": {
    "--back-color": "#1D334A",
    "--font-color": "#3F888F",
    "--button-color": "#A6CAF0",
    "--btn-fcolor": "#3F888F"
  },
  "green": {
    "--back-color": "#2F4538",
    "--font-color": "#6DAE81",
    "--button-color": "#999950",
    "--btn-fcolor": "#FADFAD"
  },
  "violet": {
    "--back-color": "#46394B",
    "--font-color": "#B565A7",
    "--button-color": "#C8A2C8",
    "--btn-fcolor": "#B565A7"
  }
};

function applyTheme(name) {
  const chosenTheme = themeContainer[name];
  const changeElement = document.documentElement;

  for (let key in chosenTheme) {
   changeElement.style.setProperty(key, chosenTheme[key]);
  }

  localStorage.setItem('saveTheme', name);
}

const savedTheme = localStorage.getItem('saveTheme');

if(savedTheme) {
  applyTheme(savedTheme);
}else{
  applyTheme('dark');
}

selectElement.addEventListener('change', function() {
  const selectedTheme = this.value;
  applyTheme(selectedTheme);
})