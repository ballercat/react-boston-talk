// A bunch of promises
function promiseExample() {
  let p1 = Promise.resolve()
    .then(() => console.log("one"))
    .then(() => console.log("two"));
  let p2 = Promise.resolve().then(() => console.log("three"));
  let p3 = p1.then(() => console.log("four"));

  return Promise.all([p1, p2, p3]);
}

promiseExample().then(() => console.log("tada!"));
