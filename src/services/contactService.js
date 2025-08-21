// src/services/contactService.js

const API_BASE_URL = "http://localhost:8080/api";

export const sendContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send request");
    }

    return await response.text(); // ✅ parse plain text
  } catch (error) {
    throw error;
  }
};

