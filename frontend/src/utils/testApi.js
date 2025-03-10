import axios from 'axios';
import { registerAPI, loginAPI } from './ApiRequest.js';


const testApi = async () => {
  const userData = {
    name: "Test User",
    email: "testuser@example.com",
    password: "password123"
  };

  try {
    // Test Registration
    const registerResponse = await axios.post(registerAPI, userData);
    console.log('Registration Response:', registerResponse.data);

    // Test Login
    const loginResponse = await axios.post(loginAPI, {
      email: userData.email,
      password: userData.password
    });
    console.log('Login Response:', loginResponse.data);
  } catch (error) {
    console.error('Error testing API:', error);
  }
};

testApi();
