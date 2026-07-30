
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const EnglishGematriaTable = () => {
  const ordinalSystem = [
    { letter: "A", value: 1 },
    { letter: "B", value: 2 },
    { letter: "C", value: 3 },
    { letter: "D", value: 4 },
    { letter: "E", value: 5 },
    { letter: "F", value: 6 },
    { letter: "G", value: 7 },
    { letter: "H", value: 8 },
    { letter: "I", value: 9 },
    { letter: "J", value: 10 },
    { letter: "K", value: 11 },
    { letter: "L", value: 12 },
    { letter: "M", value: 13 },
    { letter: "N", value: 14 },
    { letter: "O", value: 15 },
    { letter: "P", value: 16 },
    { letter: "Q", value: 17 },
    { letter: "R", value: 18 },
    { letter: "S", value: 19 },
    { letter: "T", value: 20 },
    { letter: "U", value: 21 },
    { letter: "V", value: 22 },
    { letter: "W", value: 23 },
    { letter: "X", value: 24 },
    { letter: "Y", value: 25 },
    { letter: "Z", value: 26 },
  ];

  const pythagoreanSystem = ordinalSystem.map(item => ({
    ...item,
    pythagoreanValue: ((item.value - 1) % 9) + 1
  }));

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">📊 English Gematria Reference Table</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Letter</TableHead>
                <TableHead>Ordinal</TableHead>
                <TableHead>Pythagorean</TableHead>
                <TableHead>Sumerian (×6)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pythagoreanSystem.map((item) => (
                <TableRow key={item.letter}>
                  <TableCell className="font-medium">{item.letter}</TableCell>
                  <TableCell>{item.value}</TableCell>
                  <TableCell>{item.pythagoreanValue}</TableCell>
                  <TableCell>{item.value * 6}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
