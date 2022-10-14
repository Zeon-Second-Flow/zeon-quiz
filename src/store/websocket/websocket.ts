import {createSlice} from "@reduxjs/toolkit";
import {io} from "socket.io-client";


const initialState = {
    socket: io("http://localhost:3333", {
        transports: ["websocket", "polling"],
    }),
    room: 0,
    users: [],
};

const websocketSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setSocketRoom(state, payload) {
            state.room = payload.payload;
        },
        setSocketUsers(state, payload) {
            state.users = payload.payload;
        }
    },
});

export const {setSocketRoom, setSocketUsers} = websocketSlice.actions;
/* eslint-disable import/prefer-default-export */
export const {reducer} =  websocketSlice;

