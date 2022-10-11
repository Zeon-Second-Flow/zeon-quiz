export interface ServerResponse<T> {
    count: number;
    next: null;
    previous: null;
    results: T[];
}

export interface Test {
    title: string;
    image: null;
    is_active: boolean;
    group: string;
    questions_count: number;
    test_passed: number;
}