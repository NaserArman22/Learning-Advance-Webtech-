import { Controller,Get,Patch,Param,Body,Post} from '@nestjs/common';

@Controller('product')
export class ProductController {
    @Get()
    getAll() {
      return [];
    
}
@Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createUser(@Body() user: {}) {
    return user;
  }
@Patch(':id')
  update(@Param('id') id: string, @Body() productUpdate: []) {
    return { id, ...productUpdate };
  }
}
