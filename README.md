# Weather Dashboard

This is a weather dashboard that allows users to see the maximum temperature for the next 6 hours in Taiwan cities. The project is built with Next.js utilizing Server Side Rendering (SSR) and styled with TailwindCSS. The weather data is fetched from the Central Weather Administration's (CWA) Open Data Platform API. Specifically, we're using the CWA Open Data Platform API to retrieve up-to-date weather information for accurate forecasts.

## Demo

![Weather Dashboard](./imgs/index.png)

![Hover](./imgs/hover_effect.png)

## Usage

1. Clone the repository

```bash
git clone https://github.com/hibana2077/weather_dashboard.git
```

2. Run Docker Compose

```bash
cd weather_dashboard/src/
sudo docker-compose up
```

3. Open your browser and go to `http://localhost:8080`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.