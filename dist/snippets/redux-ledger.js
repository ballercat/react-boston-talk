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

const mapStateToProps = state => ({ samples: state.samples });
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
  const ledger = createLedger();
  const = store = createStore(reducer, applyMiddleware(ledger, thunk));

  const wrapper = mount(
    <Provider store={store}>
      <SampleList onClick={onClickMock} />
    </Provider>
  );

  wrapper.find(Button).simulate('click');

  return ledger.resolve().then(() => {
    wrapper.update();
    expect(wrapper.find(Sample).length).toBe(4);
  });
});
