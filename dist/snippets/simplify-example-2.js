function SampleList(props) {
  return (
    <>
      <ul>
        {props.samples.map(sample => {
          <li key={sample.name}>
            <Sample {...sample} />
          </li>;
        })}
      </ul>
      <Button onClick={props.onClick}>See More</Button>
    </>
  );
}

const mapStateToProps = (state, props) => ({ samples: state.samples, ...props });
const mapDispatchToProps = { onClick: actions.getSamples };

export default connect(mapStateToProps, mapDispatchToProps)(SampleList);

// actions.js

export const getSamples = () = (dispatch, getState) => {
  return fetchSamples().then(samples => {
    dispatch({ type: 'FETCHED_SAMPLES', payload: samples });
  });
}

// test.js

test("samples are populated after click", () => {
  const = store = createStore(...);
  return store.dispatch(getSamples()).then(() => {

    expect(store.getState().samples.length).toBe(4);

    const onClickMock = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <SampleList onClick={onClickMock} />
      </Provider>
    );

    wrapper.find(Button).simulate('click');
    expect(onClickMock).toHaveBeenCalled();
    expect(wrapper.find(Sample).length).toBe(4);
  });
});
