import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  
  // Endpoint for factorial calculation
  @Get('factorial/:number')
  calculateFactorial(@Param('number', ParseIntPipe) number: number): { factorial: number } {
    // Check if number is a non-negative integer
    if (number < 0) {
      throw new Error('Number must be a non-negative integer');
    }

    // Calculate factorial iteratively to avoid stack overflow in large values
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }

    return { factorial };
  }
}
