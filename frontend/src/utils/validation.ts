export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  // This regex allows for various phone number formats including international
  const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
  return phoneRegex.test(phoneNumber);
};