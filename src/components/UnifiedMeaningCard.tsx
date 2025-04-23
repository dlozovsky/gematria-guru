import React, { useState } from "react";
import { detectEntityType, getEntityTemplatedText, getEntityThemeDescription } from "../utils/entityTypeDetector";

type BreakdownItem = {
  system: string;
  value: number;
  reduced: number;
  meaning: string;
  fullMeaning: string;
  highlight?: boolean; // for repeated numbers
};

interface UnifiedMeaningCardProps {
  name: string;
  breakdown: BreakdownItem[];
  summary: string;
}

// Archetype map available to all components in this file
const archetypeMap: Record<string, string> = {
  '1': 'Creator/Leader',
  '2': 'Diplomat/Peacemaker',
  '3': 'Communicator/Artist',
  '4': 'Builder/Organizer',
  '5': 'Adventurer/Change Agent',
  '6': 'Nurturer/Healer',
  '7': 'Seeker/Spiritualist',
  '8': 'Powerhouse/Achiever',
  '9': 'Humanitarian/Completer',
  '11': 'Visionary/Inspirer',
  '22': 'Master Builder',
  '33': 'Master Teacher',
};

// Collapsible section for all full interpretations
const ShowAllFullInterpretations: React.FC<{ breakdown: BreakdownItem[] }> = ({ breakdown }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full my-4">
      <button
        className="flex items-center gap-2 text-blue-700 font-semibold text-sm px-3 py-1 bg-blue-50 hover:bg-blue-100 rounded transition mb-2"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="all-full-interpretations"
      >
        {open ? '🔽 Hide' : '🔍 Show'} All Full Interpretations
      </button>
      {open && (
        <div
          id="all-full-interpretations"
          className="bg-white border border-blue-100 rounded p-4 space-y-4 shadow-sm"
        >
          {breakdown.map((item, idx) => {
            const reducedDisplay = (typeof item.reduced === 'number' && !isNaN(item.reduced)) ? item.reduced : '—';
            const meaningDisplay = archetypeMap?.[item.reduced?.toString()] || item.meaning || 'No traditional interpretation';
            return (
              <div key={item.system} className="">
                <div className="font-semibold text-blue-700 mb-1">{item.system}</div>
                <div className="text-xs text-gray-500 mb-1">{item.value} → {reducedDisplay}</div>
                <div className="text-sm text-gray-800 whitespace-pre-line">{meaningDisplay}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const UnifiedMeaningCard: React.FC<UnifiedMeaningCardProps> = ({
  name,
  breakdown,
  summary,
}) => {
  // Add entity type detection
  const entityType = detectEntityType(name);
  
  // Find which reduced numbers are repeated
  const reducedCounts: Record<number, number> = {};
  breakdown.forEach((item) => {
    reducedCounts[item.reduced] = (reducedCounts[item.reduced] || 0) + 1;
  });
  // Mark breakdown items to highlight if their reduced is repeated
  const breakdownWithHighlight = breakdown.map((item) => ({
    ...item,
    highlight: reducedCounts[item.reduced] > 1,
  }));

  // Find most repeated reduced number for theme highlight
  const repeatedEntries = Object.entries(reducedCounts).filter(([, count]) => count > 1);
  const mostRepeated = repeatedEntries.length > 0 ? repeatedEntries.sort((a, b) => b[1] - a[1])[0] : null;
  // Validate mostRepeated value
  const mostRepeatedNumber = mostRepeated && mostRepeated[0] !== undefined && mostRepeated[0] !== 'undefined' && mostRepeated[0] !== null ? mostRepeated[0] : null;
  const mostRepeatedCount = mostRepeated && mostRepeated[1] !== undefined && mostRepeated[1] !== null ? mostRepeated[1] : null;
  // Optionally, define a mapping from reduced numbers to archetype/traits
  const archetypeMap: Record<string, string> = {
    '1': 'Creator/Leader',
    '2': 'Diplomat/Peacemaker',
    '3': 'Communicator/Artist',
    '4': 'Builder/Organizer',
    '5': 'Adventurer/Change Agent',
    '6': 'Nurturer/Healer',
    '7': 'Seeker/Spiritualist',
    '8': 'Powerhouse/Achiever',
    '9': 'Humanitarian/Completer',
    '11': 'Visionary/Inspirer',
    '22': 'Master Builder',
    '33': 'Master Teacher',
  };
  const themeArchetype = mostRepeatedNumber ? archetypeMap[mostRepeatedNumber] : null;



  // Short summaries for each system (replace with real logic as needed)
  const shortSummaries: Record<string, string> = {
    "English Gematria": "This reduces to 1, symbolizing independence, leadership, and initiative. Reflects a strong initiator and trailblazer energy.",
    "Simple Gematria": "Also reduces to 1, reinforcing themes of self-direction and confidence. Indicates someone who leads with clarity and purpose.",
    "Jewish Gematria": "This reduces to 7, representing spiritual depth and inner reflection. Suggests someone who seeks truth and insight.",
    "Pythagorean Gematria": "Once again reduces to 1, underscoring ambition, drive, and originality. Highlights a pioneering, individualistic spirit.",
    "Greek Isopsephy": "This reduces to 9, associated with wisdom, empathy, and completion. Points to a compassionate and idealistic personality.",
  };
  // Long-form meanings for modal (real instructive content)
  const longMeanings: Record<string, string> = {
    "English Gematria":
      "English Gematria reduces to " + (breakdown.find(b => b.system === "English Gematria")?.reduced ?? "?") +
      ". This highlights qualities of " +
      (archetypeMap[(breakdown.find(b => b.system === "English Gematria")?.reduced ?? '').toString()] || "a unique explorer") +
      ". This system emphasizes independence, leadership, and creative drive. The digital reduction and factor analysis reveal the foundational energies shaping this name.",
    "Simple Gematria":
      "Simple Gematria reduces to " + (breakdown.find(b => b.system === "Simple Gematria")?.reduced ?? "?") +
      ". This reflects " +
      (archetypeMap[(breakdown.find(b => b.system === "Simple Gematria")?.reduced ?? '').toString()] || "a unique explorer") +
      ". This system reinforces themes of self-direction, clarity, and purpose. The numerological breakdown reveals the core motivations and strengths.",
    "Jewish Gematria":
      "Jewish Gematria reduces to " + (breakdown.find(b => b.system === "Jewish Gematria")?.reduced ?? "?") +
      ". This highlights " +
      (archetypeMap[(breakdown.find(b => b.system === "Jewish Gematria")?.reduced ?? '').toString()] || "a unique explorer") +
      ". This system is associated with spiritual depth, tradition, and inner wisdom. The analysis reveals the spiritual path and legacy connected to this name.",
    "Pythagorean Gematria":
      "Pythagorean Gematria reduces to " + (breakdown.find(b => b.system === "Pythagorean Gematria")?.reduced ?? "?") +
      ". This reflects " +
      (archetypeMap[(breakdown.find(b => b.system === "Pythagorean Gematria")?.reduced ?? '').toString()] || "a unique explorer") +
      ". This system underscores ambition, originality, and drive. The reduction and factor analysis point to the pioneering and individualistic spirit of the name.",
    "Greek Isopsephy":
      "Greek Isopsephy reduces to " + (breakdown.find(b => b.system === "Greek Isopsephy")?.reduced ?? "?") +
      ". This points to " +
      (archetypeMap[(breakdown.find(b => b.system === "Greek Isopsephy")?.reduced ?? '').toString()] || "a unique explorer") +
      ". This system is associated with wisdom, empathy, and completion. The numerological analysis reveals a compassionate and idealistic personality.",
  };


  return (
    <div className="bg-gray-50 p-6 px-4 rounded-lg shadow-md max-w-4xl mx-auto mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold mb-3">
        Unified Meaning for <span className="text-primary">{name}</span>
      </h2>
      <hr className="my-4 border-gray-200" />
      <h3 className="text-md font-semibold mt-2 mb-3 text-gray-800">System Interpretations</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {breakdownWithHighlight.map((item, idx) => (
          <div
            key={item.system}
            className="flex flex-col items-start bg-white rounded-lg p-4 border border-gray-200 mb-0 w-full"
          >
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full mb-2 font-semibold cursor-help" title={`About ${item.system} (tooltip coming soon)`}>
              {item.system}
            </span>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-bold text-primary">{item.value}</span>
              <span className="text-gray-500">→</span>
              <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                {item.reduced}
              </span>
              {item.highlight && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-200 text-blue-800 text-xs font-semibold">
                  Repeats
                </span>
              )}
            </div>
            <span className="text-sm text-gray-600 text-left mb-2">
              {shortSummaries[item.system] || item.meaning}
            </span>
          </div>
        ))}
      </div>

      {/* Show All Full Interpretations Collapsible Section */}
      <ShowAllFullInterpretations breakdown={breakdown} />
      <hr className="my-4 border-gray-200" />
      <h3 className="text-md font-semibold mt-2 mb-3 text-gray-800">Summary Insight</h3>
      {/* 🧠 Theme Highlight */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">🧠</span>
        <span className="text-sm text-blue-800 font-semibold">
          {mostRepeatedNumber && mostRepeatedCount ? (
            <>Theme Highlight: The number <span className="font-bold text-blue-900">{mostRepeatedNumber}</span> appears {mostRepeatedCount} times, emphasizing {themeArchetype ? themeArchetype.toLowerCase() : 'its qualities'}.</>
          ) : (
            <>Theme Highlight: <span className="font-bold">No dominant number</span> appears across the reduced results (values vary: {
              Object.keys(reducedCounts).join(', ')
            }).</>
          )}
        </span>
      </div>
      {/* 💡 What This Means for You - Updated with entity type detection */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <h3 className="text-blue-800 font-bold mb-1">💡 What This Means:</h3>
        <p className="text-sm text-gray-800 whitespace-pre-line">
          {mostRepeatedNumber && mostRepeatedCount ? (
            <>
              {getEntityTemplatedText(name, themeArchetype || 'balanced')} — a force associated with 
              {entityType === "name" ? " someone who takes initiative, leads with confidence, and thrives in roles that require independence and drive." : " initiative, leadership, and confident expression."}
            </>
          ) : (
            <>
              {entityType === "name" ? (
                <>This name reflects a <span className="font-bold">Complex Soul</span> — someone whose personality spans multiple traits: {
                  Object.entries(reducedCounts)
                    .map(([num, count]) => {
                      const archetype = archetypeMap[num] || 'Unique/Explorer';
                      return `${archetype}`;
                    })
                    .join(', ')
                }. Rather than one clear archetype, this name points to a layered and multifaceted nature.</>
              ) : (
                <>The word "<span className="font-bold">{name}</span>" embodies <span className="font-bold">Complex Energy</span> — spanning multiple vibrations: {
                  Object.entries(reducedCounts)
                    .map(([num, count]) => {
                      const archetype = archetypeMap[num] || 'Unique/Explorer';
                      return `${archetype}`;
                    })
                    .join(', ')
                }. This reveals a multi-layered meaning that adapts to different contexts.</>
              )}
            </>
          )}
          {summary}
        </p>
      </div>
      <div className="text-blue-800 text-sm italic">
        {mostRepeatedNumber && mostRepeatedCount
          ? <>The repeated presence of <span className="font-bold">{mostRepeatedNumber}</span> across systems highlights a strong <span className="font-bold">{themeArchetype?.toLowerCase()}</span> energy with visionary and action-driven tendencies.</>
          : <>These values span multiple core energies. This suggests {entityType === "name" ? "a person who adapts easily, blends logic and emotion, and draws from many life experiences" : "a concept that adapts to different contexts, blending various energetic qualities"}.</>
        }
      </div>
      {mostRepeated && themeArchetype && (
        <div className="mb-2">
          <span className="text-sm text-blue-700 italic">
            {entityType === "name" 
              ? <>This name strongly reflects a <span className="font-bold">"{themeArchetype}"</span> archetype — someone who embodies these core traits.</>
              : <>The word "<span className="font-bold">{name}</span>" strongly carries the <span className="font-bold">"{themeArchetype}"</span> energy — embodying these core qualities.</>
            }
          </span>
        </div>
      )}
      {!mostRepeated && (
        <div className="mb-2">
          <span className="text-sm text-blue-700 italic">
            {entityType === "name"
              ? <>No single archetype or theme dominates the reduced numbers for this name.</>
              : <>No single energy or theme dominates the numerical vibration of this word.</>
            }
          </span>
        </div>
      )}
      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
        <span className="block font-semibold text-blue-900 mb-1 flex items-center"><span className="mr-2">📘</span>Summary:</span>
        <span className="text-blue-900 italic">{summary}</span>
      </div>
    </div>
  );
};
