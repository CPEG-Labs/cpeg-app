import { memo } from "react";

interface PixelArtProps {
  className?: string;
  type: "hero" | "common" | "uncommon" | "rare" | "epic" | "legendary" | "mythic";
}

// Map characters (each character represents a color index)
// . = empty
// b = black (border)
// w = white
// s = skin
// h = hair/hat
// p = primary (blue)
// c = secondary (orange)
// g = gold/yellow
// r = red

const PALETTE: Record<string, string> = {
  '.': 'transparent',
  'b': '#1e293b',
  'w': '#ffffff',
  's': '#fcd34d',
  'h': '#92400e',
  'p': '#2563eb',
  'c': '#ea580c',
  'g': '#fbbf24',
  'r': '#dc2626',
  'd': '#475569',
  'l': '#34d399',
};

const common = [
  '......bbbb......',
  '....bbssssbb....',
  '...bssbwwbssb...',
  '...bssbbbbssb...',
  '...bssssssssb...',
  '....bbssssbb....',
  '......bbbb......',
  '.....bppppb.....',
  '....bppppppb....',
  '...bpppwppppb...',
  '...bpppppwwpb...',
  '..bbpppppppwbb..',
  '..bbppppppppbb..',
  '...bbbbbbbbbb...',
  '....bd....bd....',
  '...bbbb..bbbb...'
];

const uncommon = [
  '......bbbb......',
  '....bbssssbb....',
  '...bssbwwbssb...',
  '...bssbbbbssb...',
  '...bssssssssb...',
  '....bbssssbb....',
  '......bbbb......',
  '.....blllllb....',
  '....bllllllb....',
  '...blllwllllb...',
  '...bllllllllb...',
  '..bblllllllbb...',
  '..bblllllllbb...',
  '...bbbbbbbbbb...',
  '....bl....bl....',
  '...bbbb..bbbb...'
];

const rare = [
  '......bbbb......',
  '....bbhhhhbb....',
  '...bhhhhhhhhb...',
  '...bhbssssbhb...',
  '...bssbwwbssb...',
  '...bssbbbbssb...',
  '...bssssssssb...',
  '....bbssssbb....',
  '.....bccccb.....',
  '....bccccccb....',
  '...bcccwccccb...',
  '...bcccccwwcb...',
  '..bbcccccccwbb..',
  '..bbccccccccbb..',
  '...bbbbbbbbbb...',
  '...bbbb..bbbb...'
];

const epic = [
  '......bbbb......',
  '....bbddddbb....',
  '...bddgddgddb...',
  '...bdbsddbsdb...',
  '...bddsddssdb...',
  '...bddddddddb...',
  '...bbbbbbbbbb...',
  '.....brrrrb.....',
  '....brrggrrb....',
  '...brrrrrrrrb...',
  '...brrgrrrrrb...',
  '..bbrrrrrrrrbb..',
  '..bbbbbbbbbbbb..',
  '...bdd....ddb...',
  '...bdd....ddb...',
  '...bbbb..bbbb...'
];

const legendary = [
  '......bbbb......',
  '....bbllwwbb....',
  '...bllllwlllb...',
  '...bllbllbllb...',
  '...bllbllbllb...',
  '...bllllllllb...',
  '...bllrrrrllb...',
  '....bbllllbb....',
  '...b..bggb..b...',
  '..bbb.bggb.bbb..',
  '.blbb.bggb.bblb.',
  'bllbbbbggbbbbllb',
  'bllb...bb...bllb',
  '.bb..........bb.',
  '................',
  '................'
];

const mythic = [
  '....bbbbbbbb....',
  '...bggggggggb...',
  '..bgggggggggggb.',
  '.bgggbgggggbgggb',
  'bggggbbgggbbggggb',
  '.bgggbgggggbgggb',
  '..bgggggllgggb..',
  '...bggllllggb...',
  '....bggllggb....',
  '...bgglrrlggb...',
  '..bggllrrllggb..',
  '.bgggggrrggggb..',
  '.bggggggggggb...',
  '..bgggggggggb...',
  '...bbbbbbbbbb...',
  '....bbbb..bbbb..'
];

const hero = [
  '................................',
  '................................',
  '..........bbbbbbbbbb............',
  '........bbssssssssssbb..........',
  '......bbssssssssssssssbb........',
  '.....bssssssssssssssssssb.......',
  '....bsssssbwwwwbbwwwwbsssb......',
  '...bssssssbwwwwbbwwwwbsssb......',
  '...bssssssbbbbbbbbbbbbsssb......',
  '..bssssssssssssssssssssssb......',
  '..bsssssssssbbbbbbsssssssb......',
  '..bssssssssbssssssbssssssb......',
  '..bsssssssssbbbbbbsssssssb......',
  '..bssssssssssssssssssssssb......',
  '...bbssssssssssssssssssbb.......',
  '.....bbbbbbbbbbbbbbbbbb.........',
  '.......bbppppppppppbb...........',
  '......bppppppppppppppb..........',
  '.....bppppppppppppppppb.........',
  '....bppppppppppppppppppb........',
  '...bpppppppwwpppppppppppb.......',
  '..bbppppppwwwwppppwwwwpppbb.....',
  '..bbpppppppwwppppppwwppppbb.....',
  '..bbpppppppppppppppppppppbb.....',
  '...bbbbbbbbbbbbbbbbbbbbbbb......',
  '......bbbbbb....bbbbbb..........',
  '.....bddd..b....bddd..b.........',
  '....bdddd..b....bdddd..b........',
  '...bbbbbbbbb...bbbbbbbbb........',
  '................................',
  '................................',
  '................................'
];

const getGrid = (type: string) => {
  switch (type) {
    case 'hero': return { grid: hero, size: 32 };
    case 'common': return { grid: common, size: 16 };
    case 'uncommon': return { grid: uncommon, size: 16 };
    case 'rare': return { grid: rare, size: 16 };
    case 'epic': return { grid: epic, size: 16 };
    case 'legendary': return { grid: legendary, size: 16 };
    case 'mythic': return { grid: mythic, size: 16 };
    default: return { grid: common, size: 16 };
  }
};

export const PixelArt = memo(({ type, className }: PixelArtProps) => {
  const { grid, size } = getGrid(type);
  const viewBox = `0 0 ${size} ${size}`;

  return (
    <svg 
      viewBox={viewBox} 
      className={className} 
      style={{ shapeRendering: 'crispEdges' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {grid.map((row, y) => 
        Array.from(row).map((char, x) => {
          if (char === '.') return null;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="1.1"
              height="1.1"
              fill={PALETTE[char]}
            />
          );
        })
      )}
    </svg>
  );
});

PixelArt.displayName = "PixelArt";
