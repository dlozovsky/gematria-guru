
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const GematriaSystemsOverview = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-6">🔢 English Gematria Systems</h2>
        
        <div className="space-y-8">
          {/* English Ordinal */}
          <div>
            <h3 className="text-xl font-semibold mb-3">1️⃣ English Ordinal Gematria</h3>
            <p className="mb-4">A = 1, B = 2, ..., Z = 26</p>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="font-semibold">Word Example – LOVE</p>
              <ul className="list-none space-y-1">
                <li>L = 12</li>
                <li>O = 15</li>
                <li>V = 22</li>
                <li>E = 5</li>
                <li className="font-bold mt-2">Total: 54</li>
              </ul>
            </div>
          </div>

          {/* Sumerian */}
          <div>
            <h3 className="text-xl font-semibold mb-3">2️⃣ English Sumerian Gematria</h3>
            <p className="mb-4">Take the ordinal value of each letter and multiply it by 6</p>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="font-semibold">LOVE again:</p>
              <ul className="list-none space-y-1">
                <li>L = 12 × 6 = 72</li>
                <li>O = 15 × 6 = 90</li>
                <li>V = 22 × 6 = 132</li>
                <li>E = 5 × 6 = 30</li>
                <li className="font-bold mt-2">Total: 324</li>
              </ul>
            </div>
          </div>

          {/* Pythagorean */}
          <div>
            <h3 className="text-xl font-semibold mb-3">3️⃣ Simple (Pythagorean) Gematria</h3>
            <p className="mb-4">Cycles through 1-9: A=1, B=2, ..., I=9, J=1, K=2, etc.</p>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="font-semibold">LOVE again:</p>
              <ul className="list-none space-y-1">
                <li>L = 3</li>
                <li>O = 6</li>
                <li>V = 4</li>
                <li>E = 5</li>
                <li className="font-bold mt-2">Total: 18</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
