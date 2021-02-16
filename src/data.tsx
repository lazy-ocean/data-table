const axios = require("axios").default;
const _ = require("lodash");

export const getRows = (): Promise<any> => {
  const promise = axios.get(
    "https://run.mocky.io/v3/6f15e3ad-bf04-4940-9b81-0f14fac8ebf2"
  );
  //const rows = promise.then((response: any) => response.data.items);
  const rows = promise.then((response: any) =>
    response.data.items.reduce((acc: Array<any>, item: any) => {
      let str = item["UPDATE_TIMESTAMP"].slice(0, -7);
      let date = new Date(str);

      let data = {
        ...item,
        id: item["ID"],
        UPDATE_TIMESTAMP: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      };
      acc.push(data);
      return acc;
    }, [])
  );
  return rows;
};

export const getColumns = (): Promise<any> => {
  const promise = axios.get(
    "https://run.mocky.io/v3/9700b81e-1edd-49b8-8160-736b24a989a7"
  );
  //const columns = promise.then((response: any) => response.data.config);
  const columns = promise.then((response: any) =>
    Object.keys(response.data.config).reduce((acc: Array<any>, key) => {
      let label = response.data.config[key].label;
      let data = {
        ...response.data.config[key],
        field: key,
        headerName: label,
        sortable: true,
        id: _.uniqueId(),
      };
      acc.push(data);
      return acc;
    }, [])
  );

  return columns;
};
