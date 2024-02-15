import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBids,
  selectAsks,
  OrderBookState,
} from "./features/orderBook/orderBookSlice";
import { startWebSocketConnection } from "./features/orderBook/orderBookThunks";
import { OrderBookTable } from "@/components/OrderBooksTable";
import { AppDispatch } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(startWebSocketConnection());
  }, [dispatch]);

  const selectTopBids = useCallback(
    (state: { orderBook: OrderBookState }) => selectBids(state).slice(0, 15),
    []
  );
  const selectTopAsks = useCallback(
    (state: { orderBook: OrderBookState }) => selectAsks(state).slice(0, 15),
    []
  );

  const bids = useSelector(selectTopBids);
  const asks = useSelector(selectTopAsks);

  return (
    <div className="dark min-h-screen w-full py-12 flex justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto text-white">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <h1>Bids</h1>
          <h1>Asks</h1>
          <OrderBookTable title="Bids" entries={bids} isBid />
          <OrderBookTable title="Asks" entries={asks} />
        </div>
      </div>
    </div>
  );
}

export default App;
