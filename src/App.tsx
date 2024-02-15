import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBids, selectAsks } from "./features/orderBook/orderBookSlice";
import { startWebSocketConnection } from "./features/orderBook/orderBookThunks";
import { AppDispatch } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(startWebSocketConnection());
  }, [dispatch]);

  const bids = useSelector(selectBids).slice(0, 15);
  const asks = useSelector(selectAsks).slice(0, 15);

  return (
    <div className="dark min-h-screen w-full py-12 flex justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto text-white">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Count</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bids.map((bid, index) => (
                  <TableRow key={index}>
                    <TableCell>{bid.count}</TableCell>
                    <TableCell>{bid.amount}</TableCell>
                    <TableCell>{bid.total}</TableCell>
                    <TableCell className="text-right">{bid.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Count</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {asks.map((ask, index) => (
                  <TableRow key={index}>
                    <TableCell>{ask.count}</TableCell>
                    <TableCell>{ask.amount}</TableCell>
                    <TableCell>{ask.total}</TableCell>
                    <TableCell className="text-right">{ask.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
