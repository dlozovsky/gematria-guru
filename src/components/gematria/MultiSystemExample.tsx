
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const MultiSystemExample = () => {
  const example = [
    { system: "Ordinal", calculation: "D(4) + A(1) + N(14) + I(9) + E(5) + L(12)", total: 45 },
    { system: "Sumerian", calculation: "Same values × 6", total: 270 },
    { system: "Pythagorean", calculation: "D(4) + A(1) + N(5) + I(9) + E(5) + L(3)", total: 27 },
    { system: "Reverse Ordinal (Z=1)", calculation: "D(23) + A(26) + N(13) + I(18) + E(22) + L(15)", total: 117 }
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">🧮 Comparing Systems: "Daniel"</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>System</TableHead>
              <TableHead>Calculation</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {example.map((row) => (
              <TableRow key={row.system}>
                <TableCell className="font-medium">{row.system}</TableCell>
                <TableCell>{row.calculation}</TableCell>
                <TableCell className="text-right">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
