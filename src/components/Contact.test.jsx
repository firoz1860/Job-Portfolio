import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import emailjs from 'emailjs-com';
import Contact from './Contact';

jest.mock('emailjs-com', () => ({
  __esModule: true,
  default: { sendForm: jest.fn() },
}));

const emailJsConfig = {
  REACT_APP_EMAILJS_SERVICE_ID: 'service_w98q72n',
  REACT_APP_EMAILJS_TEMPLATE_ID: 'template_4u59x2h',
  REACT_APP_EMAILJS_PUBLIC_KEY: 'IxGoeqXhmuZbQcqxf',
};

afterEach(() => {
  Object.keys(emailJsConfig).forEach((key) => delete process.env[key]);
});

test('sends a visitor message through the configured EmailJS service and template', async () => {
  Object.assign(process.env, emailJsConfig);
  emailjs.sendForm.mockResolvedValueOnce({ status: 200 });
  render(<Contact />);

  userEvent.type(screen.getByLabelText(/full name/i), 'Alex Client');
  userEvent.type(screen.getByPlaceholderText('you@example.com'), 'alex@example.com');
  userEvent.type(screen.getByLabelText(/^message$/i), 'I would like to discuss a project.');
  userEvent.click(screen.getByRole('button', { name: /send message/i }));

  await waitFor(() => {
    expect(emailjs.sendForm).toHaveBeenCalledWith(
      'service_w98q72n',
      'template_4u59x2h',
      expect.any(HTMLFormElement),
      'IxGoeqXhmuZbQcqxf'
    );
  });

  expect(await screen.findByText(/thanks for reaching out/i)).toBeInTheDocument();
});
