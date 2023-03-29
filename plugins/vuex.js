import { createStore } from "vuex";

const store = createStore({
    state: {

        data: [{ id: 0, name: '길동홍' }]

    },
    gutters:{},
    mutations:{getData(state,obj){state.data = (obj)}},
    actions: {
    async getData({ commit }) {
        const {data:resData} = await useFetch('/api');
        
        commit('getData',resData._rawValue.work)
    }
}
})
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store)
})