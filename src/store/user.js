export const user = {
    state: {
        userInfo: "",
    },
    mutations: {
        setFlag(state) {
            state.flag = !state.flag
        },
        setTitle(state, val) {
            state.title = val
        },
    },
    actions: {
        setFlagAction(context) {
            setTimeout(() => {
                //提交mutations
                context.commit("setFlag")
            }, 100)
        },
        setTitleAction(context, val) {
            setTimeout(() => {
                context.commit("setTitle", val)
            }, 100)
        },
    },
}