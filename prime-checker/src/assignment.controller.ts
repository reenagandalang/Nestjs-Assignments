import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
  @Get('prime/:number')
  checkPrime(@Param('number') number: string): { isPrime: boolean } {
    const num = parseInt(number);

    if (isNaN(num) || num <= 1) {
      return { isPrime: false };
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return { isPrime: false };
      }
    }
    
    return { isPrime: true };
  }
}
