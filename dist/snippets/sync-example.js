class SampleList extends Component {
  state = {
    samples: []
  };

  onClick = () => {
    this.setState({
      samples: getSamples()
    });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.samples.map(sample => {
            <li key={sample.name}>
              <Sample {...sample} />
            </li>;
          })}
        </ul>
        <Button onClick={this.onClick}>See More</Button>
      </>
    );
  }
}

// Test

test("samples are populated after click", () => {
  const wrapper = mount(<SampleList />);
  const wrapper.find(Button).simulate('click');
  expect(wrapper.find(Sample).length).toBe(4);
});
