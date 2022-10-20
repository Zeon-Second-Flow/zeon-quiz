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
    name: "websocket",
    initialState,
    reducers: {
        setSocketRoom(state, payload) {
            state.room = payload.payload;
        },
        setSocketUsers(state, payload) {
            state.users = payload.payload;
        },
        resetWebsocket(state) {
            state.socket.emit("leave");
            state.socket.disconnect();
            state.socket.connect();
            state.room = 0;
        },
    },
});

export const {setSocketRoom, setSocketUsers, resetWebsocket} =
  websocketSlice.actions;
export const {reducer} = websocketSlice;
