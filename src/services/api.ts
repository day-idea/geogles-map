import apiconfig from "./baseconfig";
import service from "./request";

export const getAreaData = (): Promise<any> => {
  return service.get(apiconfig.URL_BASE + apiconfig.URL_AREA);
};
