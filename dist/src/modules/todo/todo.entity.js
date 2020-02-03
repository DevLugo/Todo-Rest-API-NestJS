"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../users/user.entity");
const class_validator_1 = require("class-validator");
let Todo = class Todo extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Todo.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'varchar', length: 250, nullable: false }),
    __metadata("design:type", String)
], Todo.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', default: 'ACTIVE', length: 8 }),
    __metadata("design:type", String)
], Todo.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Todo.prototype, "done", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        name: 'create_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Todo.prototype, "createAt", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        name: 'update_at',
        onUpdate: 'CURRENT_TIMESTAMP',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Todo.prototype, "updateAt", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.todos, { nullable: false }),
    __metadata("design:type", user_entity_1.User)
], Todo.prototype, "user", void 0);
Todo = __decorate([
    typeorm_1.Entity('todos')
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.entity.js.map