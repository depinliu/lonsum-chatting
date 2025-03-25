const restClient = {
  async request(url, method = "GET", body = null, headers = {}) {
    const requestState = { isLoading: true }; // isLoading khusus untuk request ini

    try {
      const options = {
        method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Request failed");
      }

      return { ...this.handleSuccess(data), isLoading: false };
    } catch (error) {
      return { ...this.handleError(error), isLoading: false };
    }
  },

  handleSuccess(data) {
    return {
      isSuccess: true,
      data,
    };
  },

  handleError(error) {
    return {
      isSuccess: false,
      status: error.response ? error.response.status : null,
      statusText: error.response ? error.response.statusText : "Network Error",
      error: error.message || "Unknown Error",
    };
  },

  async get(url, headers = {}) {
    return this.request(url, "GET", null, headers);
  },

  async post(url, body, headers = {}) {
    return this.request(url, "POST", body, headers);
  },

  async put(url, body, headers = {}) {
    return this.request(url, "PUT", body, headers);
  },

  async delete(url, headers = {}) {
    return this.request(url, "DELETE", null, headers);
  },

  // 🔹 Base URL API
  getBaseUrl: (env) =>
    env === "stg"
      ? "https://lsstgarb01.londonsumatra.com"
      : "https://api.londonsumatra.com",

  // 🔹 API functions
  async getProfile(env) {
    const res = await this.get(
      `${this.getBaseUrl(env)}/lonsumapi/api/employee/profile`,
    );
    let data = res.data.data;
    const profile = {
      ...data,
      name: data.emplName,
      title: data.title,
      username: data.loginUser.toLowerCase(),
      department: data.department,
      baCode: data.location.split("-")[0],
      gender: data.gender,
      email: data.email,
      empCode: data.emplCode,
      isHoRo: data.isOfficeLocation,
    };
    return {
      isSuccess: true,
      data: profile,
    };
  },

  async getRoles(env) {
    const res = await this.get(
      `${this.getBaseUrl(env)}/lonsumapi/api/employee/roles`,
    );
    let data = res.data.roles;
    return {
      isSuccess: true,
      data,
    };
  },

  async getEmployeeImage(env, username) {
    const res = await this.get(
      `${this.getBaseUrl(env)}/auth/api/v1/Account/${username}/image`,
    );
    return {
      isSuccess: true,
      data: `data:${res.data.data.contentType};base64,${res.data.data.fileContent}`,
    };
  },
};
