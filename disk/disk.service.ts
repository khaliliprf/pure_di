import powerService from "../power/power.service";

export default new (class DiskService {
  constructor(private powerService) {}
  getData() {
    console.log("Drawing 20 watts of powe from Power Service");
    this.powerService.supplyPower(20);
    return "data!";
  }
})(powerService);
