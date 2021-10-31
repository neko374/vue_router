export const score = {
    state: {
        scorelist: [
            { orderId: 1, cash: 210, score: 435, time: "21/10/1 08:00" },
            { orderId: 2, cash: 200, score: 44, time: "21/10/1 08:00" },
            { orderId: 3, cash: 220, score: 45, time: "21/10/1 08:00" },
            { orderId: 4, cash: 230, score: 40, time: "21/10/1 08:00" },
            { orderId: 5, cash: 240, score: 48, time: "21/10/1 08:00" },
        ],
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        totalScore(state) {
            return state.scorelist.reduce((pre, item) => pre + item.score, 0)
        },
        totalCash(state) {
            return state.scorelist.reduce((pre, item) => pre + item.cash, 0)
        }
    },
}
