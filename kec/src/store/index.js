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
            localStorage.setItem("jwt", token);
            if (!state.token) {
                state.isUserLoggedIn = false;
            } else {
                state.isUserLoggedIn = true;
            }
        },
        setUser(state, data) {
            state.user = data;
        },
        setViewer(state, data) {
            state.viewer = data;
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
        setUser({ commit }, data) {
            commit("setUser", data);
        },
        setViewer({ commit }, data) {
            commit("setViewer", data);
        },
        setStaff({ commit }, data) {
            commit("setStaff", data);
        },
    },
    modules: {},
});