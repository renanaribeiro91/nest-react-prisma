import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import headersEndpoints from "../consts/headerEnponit";
import { endPonit } from "../consts/endponits";

const baseApi: AxiosInstance = axios.create({
  headers: headersEndpoints,
  baseURL: endPonit,
});

const addRequestHeader = (config: AxiosRequestConfig) => {
  const commonHeaders: AxiosRequestConfig["headers"] = {
    ...headersEndpoints,
  };

  return {
    ...config,
    headers: {
      ...commonHeaders,
      ...config.headers,
    },
  };
};

export const request = async (config: AxiosRequestConfig): Promise<AxiosResponse> => {
  try {
    return await baseApi
      .request(addRequestHeader(config));
  } catch (error) {
    return await Promise.reject(error);
  }
};
