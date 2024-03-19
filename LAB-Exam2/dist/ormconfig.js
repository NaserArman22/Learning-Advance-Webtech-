"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_entity_1 = require("./src/auth/entities/auth.entity");
const config = {
    type: 'postgres',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    entities: [auth_entity_1.LAB],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map