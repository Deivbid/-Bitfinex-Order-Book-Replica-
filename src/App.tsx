import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

function App() {
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
                <TableRow>
                  <TableCell>0.000001</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">1.000000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.000002</TableCell>
                  <TableCell>2000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">2.000000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.000003</TableCell>
                  <TableCell>3000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">3.000000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.000004</TableCell>
                  <TableCell>4000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">4.000000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.000005</TableCell>
                  <TableCell>5000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">5.000000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.000005</TableCell>
                  <TableCell>5000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">5.000000</TableCell>
                </TableRow>
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
                <TableRow>
                  <TableCell>0.000001</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">1.000000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.000002</TableCell>
                  <TableCell>2000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">2.000000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.000003</TableCell>
                  <TableCell>3000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">3.000000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.000004</TableCell>
                  <TableCell>4000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">4.000000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.000005</TableCell>
                  <TableCell>5000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">5.000000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>0.000001</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell>1000.000000</TableCell>
                  <TableCell className="text-right">1.000000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
