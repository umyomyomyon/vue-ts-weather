<template>
  <div>
    <h1>お天気アプリ in Vue + TS</h1>
    <input placeholder="場所" />
    <v-btn v-on:click="handleClick">決定</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "@vue/composition-api";

export default defineComponent({
  setup() {
    //data
    //refはプリミティブな値を宣言するときに使う？ プリミティブ: string, boolean, numberなど...
    const placeRef = ref<string>("test");
    //reactiveはオブジェクトを宣言するときに使う？
    const placeReactive = reactive<{ place: string }>({
      place: ""
    });

    //methods
    const handleClick = (): void => {
      console.log("button clicked!");
    };

    return {
      placeRef,
      placeReactive,
      handleClick
    };
  }
});
</script>
