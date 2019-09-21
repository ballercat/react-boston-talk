test("hasAssertions should fail expects in promises", () => {
  expect.hasAssertions();
  // Note that the expect below does not "count" as a failed assertion for this
  // test, but hasAssertions() also does not fail as it should!
  const promise = Promise.resolve();
  promise.then(() => expect(true).toBe(false));

  return promise;
});
