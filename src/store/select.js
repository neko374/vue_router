export const select = {
    state: {
        title: "",
        flag: true,
        list: ["1", "2", "3", "4"],
    },
    mutations: {
        setUserInfo(state, val) {
            state.userInfo = val;
        },
        setCollectData(state, item) {
            state.collectData.push(item)
        }
    },
    actions: {
        setUserInfoAction(context, val) {
            context.commit("setUserInfo", val)
        },
        setCollectDataAction(context, item) {
            context.commit("setCollectData", item)
        }
    },
}
