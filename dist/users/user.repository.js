"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const microservices_1 = require("@nestjs/microservices");
class UserRepository extends typeorm_1.Repository {
    async getUserById(id) {
        const found = await this.findOne(id);
        if (!found)
            throw new microservices_1.RpcException(`Product with ID ${id} not found`);
        return found;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map