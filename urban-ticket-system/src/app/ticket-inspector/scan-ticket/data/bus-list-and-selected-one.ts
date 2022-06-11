import { GetBusNumber } from "./get-bus-numbers";

export interface BusListAndSelectedOne {
    availableBuses: GetBusNumber[];
    selectedBus: GetBusNumber;
  }
  