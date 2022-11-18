import { createSlice } from '@reduxjs/toolkit';
import { io } from 'socket.io-client';

// const initialState = {
// 	socket: io('https://lit-sea-75298.herokuapp.com/', {
// 		// socket: io('http://localhost:3333', {
// 		transports: ['websocket', 'polling'],
// 	}),
// 	room: 0,
// 	users: [],
// 	test: {},
// 	title: '',
// };

const initialState = {
	socket: io('http://localhost:3333', {
		// socket: io('http://localhost:3333', {
		transports: ['websocket', 'polling'],
	}),
	room: 0,
	users: [],
	test: {},
	title: '',
};

const websocketSlice = createSlice({
	name: 'websocket',
	initialState,
	reducers: {
		setSocketRoom(state, payload) {
			state.room = payload.payload;
		},
		setSocketUsers(state, payload) {
			state.users = payload.payload;
		},
		setSocketTest(state, payload) {
			state.test = payload.payload;
		},
		setSocketTitle(state, payload) {
			state.title = payload.payload;
		},
		resetWebsocket(state) {
			state.socket.emit('leave');
			state.socket.disconnect();
			state.socket.connect();
			state.room = 0;
		},
	},
});

export const {
	setSocketRoom,
	setSocketUsers,
	setSocketTest,
	setSocketTitle,
	resetWebsocket,
} = websocketSlice.actions;
export const { reducer } = websocketSlice;
