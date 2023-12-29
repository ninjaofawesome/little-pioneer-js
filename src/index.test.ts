describe('index page', () => {
    test('hello world title to be present', () => {
        const page =  document.body.innerHTML = `<h1 id="title">Hello World</h1>`;
        expect(page).toMatchSnapshot();
      });
});

