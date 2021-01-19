export const apiKey = process.env.VUE_APP_API_KEY;
export const makeUrl = (country: string) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&lang=ja&units=metric`;
};
