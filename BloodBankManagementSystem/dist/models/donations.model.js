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
exports.bloodbankmanagementsystem_sql_user_vidura = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let bloodbankmanagementsystem_sql_user_vidura = class bloodbankmanagementsystem_sql_user_vidura extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], bloodbankmanagementsystem_sql_user_vidura.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], bloodbankmanagementsystem_sql_user_vidura.prototype, "hospital", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], bloodbankmanagementsystem_sql_user_vidura.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], bloodbankmanagementsystem_sql_user_vidura.prototype, "blood_type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], bloodbankmanagementsystem_sql_user_vidura.prototype, "expiry", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], bloodbankmanagementsystem_sql_user_vidura.prototype, "location", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], bloodbankmanagementsystem_sql_user_vidura.prototype, "donator", void 0);
bloodbankmanagementsystem_sql_user_vidura = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        timestamps: false,
    })
], bloodbankmanagementsystem_sql_user_vidura);
exports.bloodbankmanagementsystem_sql_user_vidura = bloodbankmanagementsystem_sql_user_vidura;
//# sourceMappingURL=donations.model.js.map