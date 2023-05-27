/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from "axios";
import { request } from "../adapters/RequisicaoAdapter";
import headersEndpoints from "../consts/headerEnponit";
import { User } from '../pages/home/interfaces';

const headers: AxiosRequestConfig["headers"] = {
  ...headersEndpoints,
};

class UserService {
  static async createUser(data: any): Promise<any> {

    const requestOptions= {
      url: "/users",
      method: "POST",
      headers,
      data
    }


    return request(requestOptions).then((response) => {
      return response.data;
    });
  }

  static async findUser(): Promise<User[] | []> {

    const requestOptions: { url: string, method: string; headers: any } = {
      url:'/users',
      method: 'GET',
      headers,
    };

    return request(requestOptions).then((response) => {
      return response.data;
    });
  }

  static async findUserByName(nameFilter: any): Promise<User[] | []> {

    const requestOptions: { url: string; method: string; headers: any } = {
      url:`/users?name=${nameFilter}`,
      method: 'GET',
      headers,
    };

    return request(requestOptions).then((response) => {
      return response.data;
    });
  }

  static async updateUser(id: any,data:any): Promise<string> {

    const requestOptions= {
      url: `/users/${id}`,
      method: "PUT",
      headers,
      data
    }

    return request(requestOptions).then((response) => {
      return response.data;
    });
  }

  static async deleteUser(id: any): Promise<string> {

    const requestOptions= {
      url: `/users/${id}`,
      method: "DELETE",
      headers,
    }
    return request(requestOptions).then((response) => {
      return response.data;
    });
  }
}

export default UserService;
