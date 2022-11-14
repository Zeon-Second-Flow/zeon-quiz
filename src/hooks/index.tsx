import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

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

export const useUnsavedChangesWarning = (message: string) => {
	const [isDirty, setDirty] = useState(false);

	useEffect(() => {
		//Detecting browser closing
		window.onbeforeunload = isDirty && (() => message);
		return () => {
			window.onbeforeunload = null;
		};
	}, [isDirty]);

	return [() => setDirty(true), () => setDirty(false)];
};
