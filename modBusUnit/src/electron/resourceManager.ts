import osUtils from "os-utils";

const POLLING_INTERVAL = 500;

export function pollResources() {
  setInterval(() => {
    getCpuUsage();
  }, POLLING_INTERVAL);
}

function getCpuUsage() {
  return osUtils.cpuUsage((v: number) => {
    console.log(v);
  });
}
