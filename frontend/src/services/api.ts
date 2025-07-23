const API_BASE_URL = 'http://localhost:5000/api';

export interface UserData {
  fullName: string;
  phoneNumber: string;
  email: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Array<{ msg: string; param: string }>;
}

export const submitUserData = async (userData: UserData): Promise<ApiResponse<any>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    throw error;
  }
};