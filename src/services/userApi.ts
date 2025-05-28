import axios from "axios";

// Use the same base URL as the app
const BASE_URL = "https://escalefacil.shop";
// ||
// process.env.BASE_URL

export interface UserRegistrationData {
  name: string;
  surname: string;
  document: string;
  email: string;
  password: string;
  birthday: string;
  phone: string;
  gender: string;
  cep?: string;
  address?: string;
  address_number?: string;
  city?: string;
  district?: string;
  send_email: boolean;
}

export async function registerUser(user: UserRegistrationData) {
  const formData = new FormData();
  formData.append("name", user.name);
  formData.append("surname", user.surname);
  formData.append("document", user.document);
  formData.append("email", user.email);
  formData.append("password", user.password);
  formData.append("birthday", user.birthday);
  formData.append("phone", user.phone);
  formData.append("gender", user.gender);
  formData.append("cep", user.cep ?? "");
  formData.append("address", user.address ?? "");
  formData.append("address_number", user.address_number ?? "");
  formData.append("city", user.city ?? "");
  formData.append("district", user.district ?? "");
  formData.append("send_email", user.send_email ? "true" : "false");

  const requestConfig = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/users/`,
      formData,
      requestConfig
    );
    console.log("registerUser: response.data", response.data);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as any;
    console.log(axiosError.response?.data ?? axiosError);
    return { error: axiosError.response?.data ?? axiosError.message };
  }
}

export async function loginUser(email: string, password: string) {
  try {
    console.log("Tentando fazer login com:", email);
    const response = await axios.post(`${BASE_URL}/auth/`, {
      email: email,
      password: password,
    });
    console.log("Resposta do login:", response.data);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as any;
    console.log(
      "Erro no login:",
      axiosError.response?.data ?? axiosError.message
    );
    return { error: axiosError.response?.data ?? axiosError.message };
  }
}

export async function resendEmail(email: string) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/resend/activation`, {
      email,
    });
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as any;
    console.log(axiosError.response?.data ?? axiosError);
    return { error: axiosError.response?.data ?? axiosError.message };
  }
}

export interface EnterpriseBranch {
  id: number;
  name: string;
}

export interface CompanyCreationData {
  name: string;
  scale: number;
  category: number;
  image: string;
}

export async function getEnterpriseBranches(): Promise<EnterpriseBranch[]> {
  try {
    const response = await axios.get(`${BASE_URL}/enterprises/branches`);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as any;
    console.log(axiosError.response?.data ?? axiosError);
    throw new Error(
      axiosError.response?.data?.message ?? "Erro ao carregar categorias"
    );
  }
}

export async function createCompany(
  token: string,
  companyData: CompanyCreationData
) {
  const formData = new FormData();
  formData.append("name", companyData.name);
  formData.append("scala", companyData.scale.toString());
  formData.append("category", companyData.category.toString());
  formData.append("image", companyData.image);

  const requestConfig = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/enterprises/`,
      formData,
      requestConfig
    );
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as any;
    console.log(axiosError.response?.data ?? axiosError);
    return { error: axiosError.response?.data ?? axiosError.message };
  }
}
