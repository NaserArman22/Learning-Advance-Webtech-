import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LAB } from './entities/auth.entity';
export declare class AuthService {
    private readonly labRepo;
    constructor(labRepo: Repository<LAB>);
    create(createAuthDto: CreateAuthDto): Promise<CreateAuthDto & LAB>;
    findAll(): string;
    findOne(email: string): Promise<LAB>;
}
