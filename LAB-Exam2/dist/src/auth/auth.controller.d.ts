import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateAuthDto): Promise<CreateAuthDto & import("src/auth/entities/auth.entity").LAB>;
    login(loginDto: LoginDto): Promise<string>;
}
