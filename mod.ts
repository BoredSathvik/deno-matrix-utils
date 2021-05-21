type Vector = [number, number, number, number];
type Matrix = [
	[number, number, number, number],
	[number, number, number, number],
	[number, number, number, number],
	[number, number, number, number]
];

const MatrixVectorDot = (A: Matrix, B: Vector): Vector => {
	return A.map((row, i) => row.reduce((acc, _, n) => acc + A[i][n] * B[n], 0)) as Vector;
};
const MatrixDot = (A: Matrix, B: Matrix): Matrix => {
	return A.map((row, i) =>
		B[0].map((_, j) => row.reduce((acc, _, n) => acc + A[i][n] * B[n][j], 0))
	) as Matrix;
};
