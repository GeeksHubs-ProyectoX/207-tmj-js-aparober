const impares = require('./test01.js');

	test("[ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ]", function () {
		result = impares([ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ])
		expect(result).toBe(5);
	});
	
	test("[ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]", function () {
		result = impares([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ])
		expect(result).toBe(5);
	});

	test("[ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]", function () {
		result = impares([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ])
		expect(result).toBe(-1);
	});

	test("[-10]", function () {
		result = impares([-10])
		expect(result).toBe(-10);
	});
	
	test("[ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ]", function () {
		result = impares([ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ])
		expect(result).toBe(10);
	});

	test("[ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10 ]", function () {
		result = impares([ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10 ])
		expect(result).toBe(1);
	});

	test("[ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10, 10 ]", function () {
		result = impares([ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10, 10 ])
		expect(result).toBe(1);
	});

	test("[ 5, 4, 3, 2, 1, 5, 4, 4, 2, 10, 10 ]", function () {
		result = impares([ 5, 4, 3, 2, 1, 5, 4, 4, 2, 10, 10 ])
		expect(result).toBe(4);
	});

	test("[ 5, 4, 3, 2, 1, 5, 4, 3, 2, 2, 10 ]", function () {
		result = impares([ 5, 4, 3, 2, 1, 5, 4, 3, 2, 2, 10 ])
		expect(result).toBe(2);
	});

	test("[ 5, 4, 3, 2, 1, 7, 4, 3, 2, 10, 10 ]", function () {
		result = impares([ 5, 4, 3, 2, 1, 7, 4, 3, 2, 10, 10 ])
		expect(result).toBe(5);
	});

	test("[ 5, 4, 3, 2, 1, 5, 4, 3, 2, 7, 7 ]", function () {
		result = impares([ 5, 4, 3, 2, 1, 5, 4, 3, 2, 7, 7 ])
		expect(result).toBe(1);
	});

	test("[ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16]", function () {
		result = impares([ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 18, 18])
		expect(result).toBe(1);
	});

	
	test("[ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 16, 16, 20, 20, 16, 20  ]", function () {
		result = impares([ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 16, 16, 20, 20, 16, 20 ]);
		expect(result).toBe(16);
	});

	test("[ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 16, 16, 20, 20, 16, 20, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15 ]", function () {
		result = impares([ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 16, 16, 20, 20, 16, 20, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15 ]);
		expect(result).toBe(16);
	});

	test("[ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 8, 8, 25, 14, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 8, 8, 8, 25, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 16, 16, 20, 20, 16, 20, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15, 8, 8, 8, 25, 14, 8, 8, 8, 25, 14, 8, 8, 8, 25, 14, 8, 8, 8, 25, 14, 8, 8, 8, 25, 14, ]", function () {
		result = impares([ 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 8, 8, 25, 14, 7, 10, 10, 14, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 8, 8, 8, 25, 14, 15, 15, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 1, 2, 3, 4, 5, 8, 7, 10, 10, 14, 14, 15, 16, 16, 16, 20, 20, 16, 20, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15, 5, 8, 7, 10, 10, 14, 14, 15, 8, 8, 8, 25, 14, 8, 8, 8, 25, 14, 8, 8, 8, 25, 14, 8, 8, 8, 25, 14, 8, 8, 8, 25, 14, ]);
		expect(result).toBe(14);
	});