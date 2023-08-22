"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationsRepository = void 0;
const donations_model_1 = require("../models/donations.model");
const postgresDB_service_1 = require("../services/postgresDB.service");
const sequelize_1 = require("sequelize");
class DonationsRepository {
    constructor() {
        this.db = {};
        this.db = (0, postgresDB_service_1.connect)();
        this.bloodbankmanagementsystem_sql_user_vidura =
            this.db.sequelize.getRepository(donations_model_1.bloodbankmanagementsystem_sql_user_vidura);
    }
    getDonationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.bloodbankmanagementsystem_sql_user_vidura.findAll({
                    where: {
                        id,
                    },
                });
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    getDonationsByHospital(hospital) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.bloodbankmanagementsystem_sql_user_vidura.findAll({
                    where: {
                        hospital,
                    },
                });
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    getDonationsByTime(time) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.bloodbankmanagementsystem_sql_user_vidura.findAll({
                    where: {
                        time,
                    },
                });
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    getDonationsByType(blood_type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.bloodbankmanagementsystem_sql_user_vidura.findAll({
                    where: {
                        blood_type,
                    },
                });
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    updateDonations(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.bloodbankmanagementsystem_sql_user_vidura.update(data, {
                    where: {
                        id,
                    },
                });
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    deleteDonationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.bloodbankmanagementsystem_sql_user_vidura.destroy({
                    where: {
                        id,
                    },
                });
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    deleteDonationsByExpiry(expiry) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.bloodbankmanagementsystem_sql_user_vidura.destroy({
                    where: {
                        expiry: {
                            [sequelize_1.Op.lt]: expiry,
                        },
                    },
                });
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
}
exports.DonationsRepository = DonationsRepository;
//# sourceMappingURL=donations.repositoy.js.map