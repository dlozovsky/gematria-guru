import type { Metadata } from "next";
import NextModuleLayout from "@/components/NextModuleLayout";

export const metadata: Metadata = {
  title: "Hebrew Alphabet and Numerical Values — Module 2",
  description: "Master all 22 Hebrew letters and their gematria values. Includes standard values, final letter forms, and practice examples.",
  openGraph: { title: "Hebrew Alphabet as Numbers", url: "https://gematriaguru.com/learning/hebrew-alphabet" },
};

const letters = [
  ["א","Aleph","A",1,1],["ב","Bet","B/V",2,2],["ג","Gimel","G",3,3],["ד","Dalet","D",4,4],["ה","He","H",5,5],["ו","Vav","V",6,6],["ז","Zayin","Z",7,7],["ח","Chet","Ch",8,8],["ט","Tet","T",9,9],["י","Yod","Y",10,10],["כ","Kaf","K",20,11],["ל","Lamed","L",30,12],["מ","Mem","M",40,13],["נ","Nun","N",50,14],["ס","Samech","S",60,15],["ע","Ayin","silent",70,16],["פ","Pe","P/F",80,17],["צ","Tsadi","Ts",90,18],["ק","Qof","Q",100,19],["ר","Resh","R",200,20],["ש","Shin","Sh",300,21],["ת","Tav","T",400,22],
];

const finals = [["ך","Final Kaf",20,500],["ם","Final Mem",40,600],["ן","Final Nun",50,700],["ף","Final Pe",80,800],["ץ","Final Tsadi",90,900]];

export default function HebrewAlphabetModulePage() {
  return (
    <NextModuleLayout
      title="The Hebrew Alphabet as Numbers"
      description="Master all 22 Hebrew letters and their numerical values in gematria."
      prevModule={{ title: "Introduction to Gematria", href: "/learning/intro" }}
      nextModule={{ title: "Gematria Systems Overview", href: "/learning/systems" }}
    >
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">The 22 Hebrew Letters</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-muted"><th className="text-left px-3 py-2 font-medium">Letter</th><th className="text-left px-3 py-2 font-medium">Name</th><th className="text-left px-3 py-2 font-medium">Sound</th><th className="text-left px-3 py-2 font-medium">Standard</th><th className="text-left px-3 py-2 font-medium">Ordinal</th></tr></thead>
            <tbody>
              {letters.map(([l,n,s,std,ord]) => (
                <tr key={String(l)} className="border-t border-border hover:bg-muted/30">
                  <td className="px-3 py-2 text-2xl">{l}</td>
                  <td className="px-3 py-2 font-medium">{n}</td>
                  <td className="px-3 py-2 text-muted-foreground">{s}</td>
                  <td className="px-3 py-2 font-mono">{std}</td>
                  <td className="px-3 py-2 font-mono text-muted-foreground">{ord}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Final (Sofit) Letters</h2>
        <p className="text-muted-foreground text-sm mb-4">Five Hebrew letters have alternate forms at the end of a word. In Mispar Gadol, these receive higher values.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-muted"><th className="text-left px-3 py-2 font-medium">Letter</th><th className="text-left px-3 py-2 font-medium">Name</th><th className="text-left px-3 py-2 font-medium">Standard</th><th className="text-left px-3 py-2 font-medium">Gadol</th></tr></thead>
            <tbody>
              {finals.map(([l,n,s,g]) => (
                <tr key={String(l)} className="border-t border-border">
                  <td className="px-3 py-2 text-2xl">{l}</td><td className="px-3 py-2">{n}</td>
                  <td className="px-3 py-2 font-mono">{s}</td><td className="px-3 py-2 font-mono font-semibold text-primary">{g}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Practice Examples</h2>
        <div className="space-y-3 text-sm">
          {[["אמת (Emet — Truth): 441","א(1) + מ(40) + ת(400) = 441. Note: 441 = 21², a perfect square."],["שלום (Shalom — Peace): 376","ש(300) + ל(30) + ו(6) + ם(40) = 376"],["חיים (Chaim — Life): 68","ח(8) + י(10) + י(10) + ם(40) = 68"]].map(([title,detail]) => (
            <div key={String(title)} className="bg-muted/50 rounded-lg p-4">
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </NextModuleLayout>
  );
}
