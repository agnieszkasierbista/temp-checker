import { ResponseData } from "../../types";

export interface TemperatureChartProps {
  isVisible: boolean
  isCityFound: boolean
  data: ResponseData,
  searchedString: string
}
