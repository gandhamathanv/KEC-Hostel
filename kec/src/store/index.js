/* eslint-disable */
import { createStore } from "vuex";

export default createStore({
    strict: true,
    state: {
        token: null,
        user: null,
        viewer: null,
        level: null,
        isUserLoggedIn: false,
    },
    getters: {},
    mutations: {
        setToken(state, token) {
            state.token = token;
            if (!state.token) {
                state.isUserLoggedIn = false;
            } else {
                state.isUserLoggedIn = true;
            }
        },
        setStudent(state, data) {
            state.user = data.user;
            state.viewer = "STUDENT";
        },
        setStaff(state, data) {
            state.user = data.user;
            state.level = data.level;
            state.viewer = "STAFF";
        },
    },
    actions: {
        setToken({ commit }, token) {
            commit("setToken", token);
        },
        setStudent({ commit }, data) {
            commit("setStudent", data);
        },
        setStaff({ commit }, data) {
            commit("setStaff", data);
        },
    },
    modules: {},
});