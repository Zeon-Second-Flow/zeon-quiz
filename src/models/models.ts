export interface ServerResponse<T> {
    count: number;
    next: null;
    previous: null;
    results: T[];
}

export interface IITem {
    title: string;
    image?: null | string;
    is_active: boolean;
    group: string;
    questions_count: number;
    test_passed: number;
}



export interface IQuestions {
    id: number;
    question: string;
    image: string;
    score: number;
    timer: number;
    test: string;
    correct_answer: string;
    answers: IAnswer[];
}

export interface IAnswer {
    id: number;
    A: string;
    B: string;
    C: string;
    D: string;
}

export interface IProps {
  test: string;
}

export interface ITest {
  id: number;
  question: string;
  image: string;
  score: number;
  timer: number;
  test: string;
  correct_answer: string;
  answers: Answer[];
}

export interface Answer {
  A: string;
  B: string;
  C: string;
  D: string;
}

