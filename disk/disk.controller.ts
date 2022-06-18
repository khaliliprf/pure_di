import diskService from "./disk.service";

export default new (class CpuController {
  constructor(public cpuController) {}

  run() {
    return "run";
  }
})(diskService);
