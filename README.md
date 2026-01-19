📌 WeatherApp — React Weather Application

A simple and responsive weather web application built with React.js that fetches and displays real-time weather information for any city using the OpenWeatherMap API. 🌍⛅

🔗 Live Demo

👉 https://weatherapp-umber-chi.vercel.app/

(Replace this with your deployed link if different)

📋 Overview

WeatherApp allows users to search for a city and see its current weather details such as:

🌡️ Temperature

☀️ Weather condition

💧 Humidity

💨 Wind speed

The app is built with a clean UI and makes API calls to OpenWeatherMap to retrieve live data based on user input.

🚀 Features

✨ Key Features

Search weather by city name

Displays current temperature & weather condition

Clean and responsive UI

Built with React and modern web development practices

🛠️ Technologies Used
Technology	Purpose
React.js	Frontend UI development
Vite	Frontend build tool
OpenWeatherMap API	Fetch weather data
HTML / CSS	Markup & styling
JavaScript	Application logic
📦 Getting Started
🔹 Prerequisites

Make sure you have the following installed on your system:

Node.js (recommended latest LTS)

npm or yarn

🔹 Installation

Clone the repository

git clone https://github.com/Sneha-805/weatherapp.git


Navigate into project directory

cd weatherapp


Install dependencies

npm install


Add your API Key

Create a .env file in the project root

Add your OpenWeatherMap API key:

VITE_WEATHER_API_KEY=your_api_key_here


Start the development server

npm run dev


Open in browser
Go to http://localhost:5173 to see the app running locally.

🧠 How It Works

User enters a city name in the search input

App makes a request to the OpenWeatherMap API

Displays weather data such as temperature, weather description, humidity, and wind speed

Handles errors for invalid city names

You can explore similar project structures in other React weather apps as examples.

🤝 Contributing

This is my personal project, but contributions are welcome!
Feel free to open an issue or submit a pull request with improvements or bug fixes.

📌 Project Structure

Here’s a quick look at how the project is structured:

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

📝 Notes

Make sure to never expose your API key publicly. Use a .env file and .gitignore to protect it.

You can enhance the app by adding features like:

Auto-fetch weather for current location

Hourly forecast

Dark/light theme

🪪 License

This project is licensed under the MIT License — feel free to use and modify.
