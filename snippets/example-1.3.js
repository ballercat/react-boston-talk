test("renders cards with correct titles", () => {
  expect.hasAssertions();

  const wrapper = mount(<MyApp {...testProps} />);

  const cards = wrapper.find(Card);

  cards.forEach((card, i) => {
    expect(card.props().title).toBe(`Card ${i}`);
  });

  wrapper.unmount();
});
