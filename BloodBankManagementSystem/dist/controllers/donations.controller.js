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
exports.DonationsController = void 0;
const donations_repositoy_1 = require("../repositories/donations.repositoy");
class DonationsController {
    constructor() {
        this.donationRepository = new donations_repositoy_1.DonationsRepository();
    }
    getDonationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.donationRepository.getDonationById(id);
        });
    }
    getDonationsByHospital(hospital) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.donationRepository.getDonationsByHospital(hospital);
        });
    }
    getDonationsByTime(time) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.donationRepository.getDonationsByTime(time);
        });
    }
    getDonationsByType(blood_type) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.donationRepository.getDonationsByType(blood_type);
        });
    }
    updateDonations(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.donationRepository.updateDonations(id, data);
        });
    }
    deleteDonationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.donationRepository.deleteDonationById(id);
        });
    }
    deleteDonationsByExpiry(expiry) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.donationRepository.deleteDonationsByExpiry(expiry);
        });
    }
}
exports.DonationsController = DonationsController;
//# sourceMappingURL=donations.controller.js.map