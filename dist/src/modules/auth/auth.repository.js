"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const bcryptjs_1 = require("bcryptjs");
let AuthRepository = class AuthRepository extends typeorm_1.Repository {
    async signup(signupDto) {
        const { username, email, password } = signupDto;
        const user = new user_entity_1.User();
        user.username = username;
        user.email = email;
        const salt = await bcryptjs_1.genSalt(10);
        user.password = await bcryptjs_1.hash(password, salt);
        await user.save();
    }
};
AuthRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], AuthRepository);
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map