export const login = async (email, password) => {
  try {
    const response = await fetch("http://bookrc.uz/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Login error:", errorData);
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.token; // Assuming the token is in data.token
  } catch (error) {
    console.error("There was a problem with the login request:", error);
    throw error;
  }
};
