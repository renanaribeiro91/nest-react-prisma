import { Injectable } from '@nestjs/common';
import { Address } from '../interfaces/interfaces';
import { ApiService } from '../../remote/api-cep/services/api-cep.service';
import { formatString } from '../ultis/format';
@Injectable()
export class AddressService {
  constructor(private readonly apiService: ApiService) {}

  async getAddressByZipcode(zipCode: number): Promise<Address> {
    try {
      const {cep,logradouro,bairro,uf,localidade} = await this.apiService.getAddressByZipcode(formatString(zipCode));

      return {
        zipcode: formatString(cep),
        neighborhood: bairro,
        street: logradouro,
        state: uf,
        city: localidade,
      };

    } catch (error) {
      throw new Error('Erro ao obter endereço pelo CEP');
    }
  }
}

