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
  questions: IQuestionsData[];
  test: ITest | undefined;
}

export interface ITest {
  description: string;
  group: string;
  image: string;
  is_active: boolean;
  questions_count: number;
  title: string;
  test_passed: number;
}

export interface IQuestionsData {
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
  title: string;
  description: string;
  image: string;
  is_active: boolean;
  group: string;
}

export interface Questions {
  id: number;
  question: string;
  image: string;
  score: number;
  timer: number;
  test: string;
  correct_answer: string;
  answers: IAnswerWrapper;
}

export interface IResponse {
  test: ITest;
  questions: Questions[];
}

export interface IItem {
  name: string;
  points: number;
  nickname: string;
}

export interface IAnswerWrapper {
  0: { [key: string]: string };
}

export interface IQuiz {
  title: string;
  questions: [
    {
      question: string;
      score: number;
      timer: number;
      answers: {
        A: string;
        B: string;
        C: string;
        D: string;
        correct_answer: string;
      };
    }
  ];
}

export interface IPhotoData {
  title: string;
  dataImage: File;
}

export interface IGroup {
  count: number;
  next: null;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  users: number;
  score: number | null;
  tests: number;
}
