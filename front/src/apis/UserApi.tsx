import { axiosInstance, axiosLoginInstance } from "./AxiosInstance";

export const LoginRequest = async (id: string, password: string) => {
  const res = await axiosLoginInstance.post("/user/login", {
    id,
    password,
  });
  return res.data;
};

export const CurrentUserGet = async () => {
  const res = await axiosInstance.get("/user/current");
  return res.data;
};

export const ModifyUserInfo = async (
  email: string,
  id: string,
  password: string,
  age: string,
  address: string,
  car_owned: boolean,
  elec_car_owned: boolean,
) => {
  const res = await axiosInstance.put("/user", {
    email,
    id,
    password,
    age,
    address,
    car_owned,
    elec_car_owned,
  });
  return res.data;
};