const axios = require("axios").default;

export const getRows = (): Promise<any> => {
  const promise = axios.get(
    "https://run.mocky.io/v3/6f15e3ad-bf04-4940-9b81-0f14fac8ebf2"
  );
  //const rows = promise.then((response: any) => response.data.items);
  const rows = promise.then((response: any) =>
    Object.keys(response.data.items).reduce((acc: Array<any>, key) => {
      let data = {
        ...response.data.items[key],
        id: response.data.items[key]["ID"],
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
      };
      acc.push(data);
      return acc;
    }, [])
  );

  return columns;
};
