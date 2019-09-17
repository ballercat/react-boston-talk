import { getSamples } from "service";

class SampleList extends Component {
  defaultProps = {
    getSamples(options, cb) {
      getSamples(options).then(cb);
    }
  };

  // Get some stuff from our async service and re-render when done
  onClick = () =>
    this.props.getSamples(
      {
        /* options */
      },
      samples => {
        this.setState({ samples });
      }
    );

  render() {
    /* render samples here */
  }
}

// test.js
test("my async widget", () => {
  const getStuff = jest.fn((_unused, cb) => cb(["hello", "world"]));
  const wrapper = shallow(<SampleList getSamples={geSamples} />);
  wrapper.find(Button).simulate("click");
  expect(wrapper.find(Sample).length).toBe(4);
});
