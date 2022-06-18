import cpuService from "./cpu.service";

export default new (class CpuController {
  constructor(public cpuController) {}

  run() {
    return "run";
  }
})(cpuService);
