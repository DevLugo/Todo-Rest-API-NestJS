"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class test1575442487467 {
    constructor() {
        this.name = 'test1575442487467';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(25) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `status` varchar(8) NOT NULL DEFAULT 'ACTIVE', `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
    }
}
exports.test1575442487467 = test1575442487467;
//# sourceMappingURL=1575442487467-test.js.map