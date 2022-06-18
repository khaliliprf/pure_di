import powerRepository from "./power.repository";

export default new (class PowerService {
  constructor(private powerRepo) {}
  supplyPower(watts: number) {
    console.log(`Supplying ${watts} worth of power  `);
  }
})(powerRepository);
