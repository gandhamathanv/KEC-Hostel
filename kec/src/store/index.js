/* eslint-disable */
import { createStore } from "vuex";

export default createStore({
    strict: true,
    state: {
        token: null,
        user: null,
        viewer: null,
        viewer: null,
        isUserLoggedIn: false,
    },
    getters: {},
    mutations: {
        setToken(state, token) {
            state.token = token;
            if (state.token) {
                state.isUserLoggedIn = true;
            } else {
                state.isUserLoggedIn = false;
            }
        },
        setUser(state, user) {
            state.user = user;
        },
        setViewer(state, viewer) {
            state.viewer = viewer;
        },
    },
    actions: {
        setToken({ commit }, token) {
            commit("setToken", token);
        },
        setUser({ commit }, user) {
            commit("setUser", user);
        },
        setViewer({ commit }, viewer) {
            commit("setViewer", viewer);
        },
    },
    modules: {},
});