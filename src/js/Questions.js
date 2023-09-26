export default class Questions {
    constructor() {
        this.questions = [
            {
                title: '2 + 2 = ??',
                answers: {a: 4, b: 6, c: 22, d: 5},
                correctAnswer: "a"
            },
            {
                title: '7 X 12 = ??',
                answers: {a: 69, b: 77, c: 82, d: 84},
                correctAnswer: "d"
            },
            {
                title: '50 / 5 = ??',
                answers: {a: 5, b: 10, c: 11, d: 9},
                correctAnswer: "b"
            },
            {
                title: '24 - 4 * 2 = ??',
                answers: {a: 18, b: 16, c: 20, d: 40},
                correctAnswer: "b"
            },
            {
                title: 'Which is greater than 4?',
                answers: {a: 5, b: -6, c: -1/2, d: -25},
                correctAnswer: "a"
            },
            {
                title: 'Which is the smallest?',
                answers: {a: -1, b: -1/2, c: 0, d: 3},
                correctAnswer: "a"
            },
            {
                title: 'What is |-26| ?',
                answers: {a: -26, b: 1, c: 26, d: 0},
                correctAnswer: "c"
            },
            {
                title: 'Multiply: (x – 4)(x + 5) ?',
                answers: {a: 'x2 + 5x - 20', b: 'x2 - 4x - 20', c: 'x2 - x - 20', d: 'x2 + x - 20'},
                correctAnswer: "d"
            },
            {
                title: '3 + 2 X (8 – 3)',
                answers: {a: 25, b: 13, c: 17, d: 24},
                correctAnswer: "b"
            },
            {
                title: '3^2 X ( 4 X 4( 7 - 2 )) / 2',
                answers: {a: 550, b: 720, c: 360, d: 423},
                correctAnswer: "c"
            },
        ];
    }
}