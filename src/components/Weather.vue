<template>
    <div>
        <h1>お天気アプリ in Vue + TS</h1>
        <input placeholder="場所" />
        <v-btn v-on:click="handleClick">決定</v-btn>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "@vue/composition-api";
import WeatherModule from "../store/modules/Weather";

interface Reactive {
    place: string;
}

export default defineComponent({
    setup() {
        //data
        //refはプリミティブな値を宣言するときに使う？ プリミティブ: string, boolean, numberなど...
        const placeRef = ref<string>("test");
        //reactiveはオブジェクトを宣言するときに使う？
        const placeReactive = reactive<Reactive>({
            place: ""
        });

        //methods
        const handleClick = async () => {
            await WeatherModule.getWeather("tokyo");
        };

        return {
            placeRef,
            placeReactive,
            handleClick
        };
    }
});
</script>
