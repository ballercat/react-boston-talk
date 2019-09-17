function SampleList(props) {
  return (
    <Query query={getSamplesQuery}>
      {({ data }) => (
        <>
          <ul>
            {data.lists.map(sample => {
              <li key={sample.name}>
                <Sample {...sample} />
              </li>;
            })}
          </ul>
        </>
      )}
    </Query>
  );
}

// test.js

test("samples are populated after click", () => {
  const wrapper = mount(<SampleList />);
  return waitForExpect(() => {
    wrapper.udpate();
    expect(wrapper.find(Sample).length).toBe(4);
  });
});
