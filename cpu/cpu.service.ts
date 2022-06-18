import powerService from "../power/power.service";

export default new (class CpuService {
  constructor(private powerService) {}

  compute(a: number, b: number) {
    console.log(`Drawing 10 watts of power from Power Service`);
    this.powerService.supplyPower(10);
    return a + b;
  }
})(powerService);
