import {
    Module,
    VuexModule,
    Mutation,
    Action,
    getModule
} from "vuex-module-decorators";
import axios from "axios";
import store from "../../index";
import { apiKey, makeUrl } from "@/conf";

interface WeatherData {
    name: string;
    temp: number;
    pressure: number;
}

@Module({ dynamic: true, store, name: "WeatherModule", namespaced: true })
class WeatherModule extends VuexModule {
    //state
    public weatherData: WeatherData | null = null;

    @Mutation
    public setRes(payload: any): void {
        this.weatherData = payload;
    }

    //actionでreturnした値が,commitで指定したMutationに引数として渡されてMutationが実行される
    @Action({ commit: "setRes" })
    public async getWeather(payload: string): Promise<WeatherData> {
        //const url = makeUrl(payload);
        const p = payload;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${apiKey}&lang=ja&units=metric`;
        const res: any = await axios.get(url);
        console.log(res);
        return {
            name: res.data.name,
            temp: res.data.main.temp,
            pressure: res.data.main.pressure
        };
    }
}

export default getModule(WeatherModule);
