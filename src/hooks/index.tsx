import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const useClickOutside = (
//     ref: any,
//     setSortModal: (boolean: boolean) => void
// ) => {
//     useEffect(() => {
//         const handler = (event: MouseEvent) => {
//             if (!ref.current?.contains(event.target as Element)) {
//                 setTimeout(() => setSortModal(false), 0);
//             }
//         };
//
//         window.addEventListener("click", handler);
//         return () => window.removeEventListener("click", handler);
//     }, []);
// };

export const useDebounce = (value: string, delay = 300): string => {
	const [debounced, setDebounced] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(handler);
	}, [value, delay]);

	return debounced;
};

export const useAuth = () => {
	const user =
		localStorage.getItem('token') &&
		JSON.parse(localStorage.getItem('token') || '');

	const isStaff = user?.isStaff;

	return { user, isStaff };
};

// export const detectUserLeavingPage = () => {
// 	history.pushState(null, '', window.location.pathname);

// 	const beforeUnloadListener = (event: any) => {
// 		event.preventDefault();
// 		event.returnValue = 'Are you sure you want to reload the page?';
// 	};

// 	const preventBack = (event: any) => {
// 		const r = confirm('You pressed a Back button! Are you sure?!');

// 		if (r == true) {
// 			history.back();
// 		} else {
// 			history.pushState(null, '', window.location.pathname);
// 		}
// 	};

// 	window.addEventListener('popstate', preventBack, false);
// 	window.addEventListener('beforeunload', beforeUnloadListener);

// 	return () => {
// 		window.removeEventListener('beforeunload', beforeUnloadListener);
// 		window.removeEventListener('popstate', preventBack);
// 	};
// };
