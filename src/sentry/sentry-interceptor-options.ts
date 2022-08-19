import { HttpException } from '@nestjs/common';

export const sentryInterceptorOptions = {
  filters: [
    {
      type: HttpException,
      filter: (exception: HttpException) => {
        return 500 > exception.getStatus();
      },
    },
  ],
};
