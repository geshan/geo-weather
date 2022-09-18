# Weather with Geo Location

This app will guess your city (or latitude and longitute) as provided by Cloudflare's [geolocation](https://developers.cloudflare.com/workers/examples/geolocation-hello-world/) information.

Then it will get the Weather information from API Ninjas [Weather](https://api-ninjas.com/api/weather) API.

## Quick test

You can visit : [https://geo-weather.pages.dev/](https://geo-weather.pages.dev/), it will try it's best to give you the weather of your city.

To check the Geo location magic, put `https://geo-weather.pages.dev/` on [Proximium](https://proxyium.com/) and you should get weather from somewhere in Europe. In my test I got Germany (probably around Berlin as per latitude and longitude).
