import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly apiKey;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = configService.get('apiKey');
  }

  validateApiKey(apiKey: string) {
    return this.apiKey === apiKey;
  }
}
