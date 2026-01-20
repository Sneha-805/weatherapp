🌦️ WeatherApp — React Weather Application

A simple, responsive weather web application built using React.js that displays real-time weather information for any city using the OpenWeatherMap API.

🚀 Live Demo

🔗 https://weatherapp-umber-chi.vercel.app/

(Update link if required)

📌 Project Overview

WeatherApp allows users to quickly check current weather conditions by entering a city name.
The application fetches live data from an external API and displays it in a clean and user-friendly interface.

✨ Features

✔ Search weather by city name
✔ Displays current temperature and weather condition
✔ Shows humidity and wind speed
✔ Handles invalid city input gracefully
✔ Responsive UI for all screen sizes

🛠️ Tech Stack
Technology	Usage
React.js	Frontend framework
Vite	Fast build tool
JavaScript (ES6+)	Application logic
HTML & CSS	UI structure and styling
OpenWeatherMap API	Real-time weather data
⚙️ Installation & Setup

Follow these steps to run the project locally:

🔹 1. Clone the Repository
git clone https://github.com/Sneha-805/weatherapp.git

🔹 2. Navigate to Project Directory
cd weatherapp

🔹 3. Install Dependencies
npm install

🔹 4. Configure API Key

Create a .env file in the root directory and add:

VITE_WEATHER_API_KEY=your_openweather_api_key

🔹 5. Start the Development Server
npm run dev


➡️ Open http://localhost:5173
 in your browser.

🧠 How the Application Works

User enters a city name

Application sends a request to OpenWeatherMap API

Weather data is fetched in real time

Results are displayed in a structured UI

Errors are shown for invalid inputs

📂 Project Structure
weatherapp/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .env
├── package.json
└── vite.config.js

🎯 Key Learnings

API integration using REST

Asynchronous data handling

React component-based architecture

Environment variable management

Frontend deployment workflow

🔮 Future Enhancements

📍 Auto-detect user location

🌙 Dark / Light mode

⏱️ Hourly & weekly forecast

📊 Weather charts & visualization

🤝 Contributing

Contributions are welcome!
Feel free to fork the repository, create a new branch, and submit a pull request.

📝 License

This project is licensed under the MIT License.

👩‍💻 Author

Sneha Mudda
🔗 GitHub: https://github.com/Sneha-805

⭐ If you like this project, consider giving it a star on GitHub!
