import { ResponseData } from "../../types";

export interface ChartData {
  labels: string[],
  datasets: [
    {
      data: number[]
    }
  ]
}

export interface TemperatureChartProps {
  isVisible: boolean
  isCityFound: boolean
  weatherData: ResponseData | null
  searchedString: string
}
