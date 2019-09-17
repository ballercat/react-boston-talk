test("function adds 4", () => {
  const original = [1, 2, 3, 4];
  const results = fn(original);
  results.forEach((result, i) => expect(result).toBe(original[i] + 4));
});
