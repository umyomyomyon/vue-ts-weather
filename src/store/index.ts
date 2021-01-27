import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store<any>({
    state: { hoge: 0 },
    mutations: {},
    actions: {},
    modules: {},
    // storeがmutation handler以外で変更されたらエラーを出す
    strict: true
});
