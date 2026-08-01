export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export function validateContactInput(input: any): { isValid: boolean; errors?: string[]; data?: ContactInput } {
  const errors: string[] = [];

  let { name, email, message } = input || {};

  name = typeof name === 'string' ? name.trim() : '';
  email = typeof email === 'string' ? email.trim() : '';
  message = typeof message === 'string' ? message.trim() : '';

  if (!name) {
    errors.push('Name is required.');
  }

  if (!email) {
    errors.push('Email is required.');
  } else {
    // General standard email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Please provide a valid email address.');
    }
  }

  if (!message) {
    errors.push('Message is required.');
  } else {
    if (message.length < 10) {
      errors.push('Message must be at least 10 characters long.');
    }
    if (message.length > 1000) {
      errors.push('Message cannot exceed 1000 characters.');
    }
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    data: { name, email, message }
  };
}
