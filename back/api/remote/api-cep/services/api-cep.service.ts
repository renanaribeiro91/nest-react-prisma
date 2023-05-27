import { Injectable } from '@nestjs/common';
import { CustomHttpService } from '../../../integration/custom-http.service';


@Injectable()
export class ApiService {
  constructor(private readonly httpService: CustomHttpService) {}

  async getAddressByZipcode(zipcode: number): Promise<any> {

    const config = {
      url:`/ws/${zipcode}/json/`,
      method: 'GET',
    };

    return this.httpService.request(config).then((response) => {
      return response;
    });
  }
}
