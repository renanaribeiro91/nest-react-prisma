import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { baseUrl } from '../shared/consts/baseUrl';

@Injectable()
export class CustomHttpService {
  constructor(private readonly httpService: HttpService,) {}

  async request<T = any>(config: any): Promise<any> {
    const baseConfig = {
      ...config,
      headers: config.headers,
      baseURL: baseUrl,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.request<T>(
          baseConfig
        )
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
