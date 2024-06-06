import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getMembers = async () => {
  const response = await axios.get(`${API_BASE_URL}/members`);
  return response.data;
};

export const addMember = async (member) => {
  const response = await axios.post(`${API_BASE_URL}/members`, member);
  return response.data;
};

export const getCertificates = async () => {
  const response = await axios.get(`${API_BASE_URL}/certificates`);
  return response.data;
};

export const addCertificate = async (certificate) => {
  const response = await axios.post(
    `${API_BASE_URL}/certificates`,
    certificate
  );
  return response.data;
};

export const getMemberCertificates = async (memberId) => {
  const response = await axios.get(`${API_BASE_URL}/certificates/${memberId}`);
  return response.data;
};
