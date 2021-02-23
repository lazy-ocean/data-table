import _ from "lodash";
import axios from "axios";

export enum Source {
  UAT = "UAT",
  PROD = "PROD",
  DEV = "DEV",
}

export enum DataType {
  STRING = "STRING",
  NUMERIC = "NUMERIC",
  DATE = "DATE",
  TIMESTAMP = "TIMESTAMP",
  LIST = "LIST",
}

export interface Data {
  RN: number;
  IS_ACTIVE: boolean;
  ID: string;
  DESCRIPTION: string;
  SOURCE_ID: number;
  SOURCE_NM: Source;
  CLIENT_ID: number;
  CLIENT_NM: string;
  ACTIVATION_DT: Date;
  TERMINATION_DT: Date;
  VALUE_1: number;
  VALUE_2: number;
  VALUE_3: number;
  UPDATED_BY: string;
  UPDATE_TIMESTAMP: Date;
}

export interface Config {
  field: string;
  headerName: string;
  sortable: boolean;
  id: number;
  width: number;
  label: string;
  type: DataType;
}

const DATA_URL = "https://run.mocky.io/v3/6f15e3ad-bf04-4940-9b81-0f14fac8ebf2";
const CONFIG_URL =
  "https://run.mocky.io/v3/9700b81e-1edd-49b8-8160-736b24a989a7";

const formatDate = (dateString: string) => new Date(dateString.slice(0, -7));

export const getRows = async (): Promise<Data[]> => {
  const response = await axios.get(DATA_URL);
  return response.data.items.map((item: any) => ({
    ...item,
    id: item.ID,
    UPDATE_TIMESTAMP: formatDate(item.UPDATE_TIMESTAMP),
  }));
};

export const getColumns = async (): Promise<Config[]> => {
  const response = await axios.get(CONFIG_URL);
  return Object.keys(response.data.config).reduce((acc: Array<any>, key) => {
    const { label } = response.data.config[key];
    const data = {
      ...response.data.config[key],
      field: key,
      headerName: label,
      sortable: true,
      id: _.uniqueId(),
    };
    acc.push(data);
    return acc;
  }, []);
};
