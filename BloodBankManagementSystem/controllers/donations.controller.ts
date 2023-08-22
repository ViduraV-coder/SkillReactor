import { DonationsRepository } from "../repositories/donations.repositoy";

export class DonationsController {
  private readonly donationRepository: DonationsRepository;

  constructor() {
    this.donationRepository = new DonationsRepository();
  }

  async getDonationById(id: number) {
    return await this.donationRepository.getDonationById(id);
  }

  async getDonationsByHospital(hospital: string) {
    return await this.donationRepository.getDonationsByHospital(hospital);
  }

  async getDonationsByTime(time: any) {
    return await this.donationRepository.getDonationsByTime(time);
  }
  async getDonationsByType(blood_type: string) {
    return await this.donationRepository.getDonationsByType(blood_type);
  }

  async updateDonations(id: number, data: any) {
    return await this.donationRepository.updateDonations(id, data);
  }

  async deleteDonationById(id: number) {
    return await this.donationRepository.deleteDonationById(id);
  }

  async deleteDonationsByExpiry(expiry: any) {
    return await this.donationRepository.deleteDonationsByExpiry(expiry);
  }

}
