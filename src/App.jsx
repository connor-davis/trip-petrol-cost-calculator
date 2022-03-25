import { createSignal } from "solid-js";

function App() {
  let [hasCalculated, setHasCalculated] = createSignal(false);

  let [tripDistance, setTripDistance] = createSignal(0);
  let [petrolCost, setPetrolCost] = createSignal(0);
  let [averagePetrolUsage, setAveragePetrolUsage] = createSignal(0);
  let [tripCost, setTripCost] = createSignal(0);

  let calculateCost = () => {
    let distanceOverOneHundred = tripDistance() / 100;
    let consumptionOfDistance = distanceOverOneHundred * averagePetrolUsage();
    let cost = consumptionOfDistance * petrolCost();

    setTripCost(cost.toFixed(2));
    setHasCalculated(true);
  };

  return (
    <div class="w-screen h-screen flex flex-col justify-center items-center bg-gray-200">
      {!hasCalculated() ? (
        <div class="flex flex-col justify-center space-y-10 w-72 h-96 bg-white rounded-lg shadow-3xl shadow-blue-300 p-4">
          <div class="text-center font-bold text-gray-900">
            Trip Petrol Cost Calculator
          </div>
          <div class="flex flex-col space-y-3">
            <input
              class="w-full h-10 bg-gray-100 rounded-md px-2 outline-none text-gray-900"
              type="text"
              placeholder="Trip distance (km)"
              onChange={(event) => setTripDistance(event.target.value)}
            />
            <input
              class="w-full h-10 bg-gray-100 rounded-md px-2 outline-none text-gray-900"
              type="text"
              placeholder="Petrol Cost (R)"
              onChange={(event) => setPetrolCost(event.target.value)}
            />
            <input
              class="w-full h-10 bg-gray-100 rounded-md px-2 outline-none text-gray-900"
              type="text"
              placeholder="Avg Petrol Usage (km/100km)"
              onChange={(event) => setAveragePetrolUsage(event.target.value)}
            />
          </div>
          <div
            class="self-center w-auto h-auto px-3 py-2 bg-blue-500 text-white rounded-md shadow-lg shadow-blue-500 cursor-pointer"
            onClick={() => calculateCost()}
          >
            Calculate
          </div>
        </div>
      ) : (
        <div class="flex flex-col justify-center space-y-10 w-72 h-96 bg-white rounded-lg shadow-3xl shadow-blue-300 p-4">
          <div class="text-center font-bold text-gray-900">
            Trip Petrol Cost Calculator
          </div>
          <div class="flex flex-col space-y-3">
            <div class="text-center text-gray-900">
              The cost of petrol for this trip will be{" "}
              <span class="text-blue-500">R {tripCost()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
