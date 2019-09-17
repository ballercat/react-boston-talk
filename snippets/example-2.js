test("assertions after done() callback - 1", done => {
  setTimeout(() => {
    done();
    setTimeout(() => {
      // should always fail
      expect(1 + 2).toBe(2);
    });
  });
});

test("assertions after done() callback - 2", done => {
  // This should fail
  expect.hasAssertions();
  setTimeout(() => {
    done();
  });
});
