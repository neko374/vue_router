import Vue from 'vue'
import Vuex from 'vuex'
import {select} from "./select"
import {score} from "./score"
import {user} from "./user"
import {collect} from "./collect"
import {my1} from "./my1"
import {my2} from "./my2"
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    select,
    score,
    user,
    collect,
    my1,
    my2
  }
})
