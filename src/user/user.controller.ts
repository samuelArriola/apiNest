import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() res) {
     this.userService.create(createUserDto)
    .then( dat => {
      res.status(HttpStatus.OK).json({
        "status": true,
        dat
      });
    })
    .catch(err => {

      if(err.errno == 1062){
        return res.status(HttpStatus.FORBIDDEN).json({
          "status": false,
          "Message" : "El correo ya ha sigo registrado, por favor intente con otro"
        });
      }
      res.status(HttpStatus.FORBIDDEN).json({
        "status": false,
          err
      });
    });
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
