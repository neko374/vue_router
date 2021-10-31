export const collect = {
    state: {
        collectData: []
    },
    getters: {
        totalCollection(state) {
            return state.collectData.length
        }
    },
}