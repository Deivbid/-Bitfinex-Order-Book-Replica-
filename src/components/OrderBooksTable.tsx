import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderBookEntry } from "@/features/orderBook/orderBookSlice";

interface OrderBookTableProps {
  title: string;
  entries: OrderBookEntry[];
  isBid?: boolean;
}

export const OrderBookTable: React.FC<OrderBookTableProps> = ({
  entries,
  isBid,
}) => {
  return (
    <div className={`flex flex-col rounded-lg border`}>
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
          {!entries || entries.length === 0 ? (
            <TableRow>
              <TableCell>Loading...</TableCell>
            </TableRow>
          ) : (
            entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.count}</TableCell>
                <TableCell>{entry.amount}</TableCell>
                <TableCell>{entry.total}</TableCell>
                <TableCell className="text-right">{entry.price}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
