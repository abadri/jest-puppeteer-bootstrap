describe('LinkedIn job search', () => {
  beforeAll(async () => {
    await page.goto('https://www.linkedin.com');
  });

  it('Should load LinkedIn page', async () => {
    await expect(page).toMatch('LinkedIn');
  });
});