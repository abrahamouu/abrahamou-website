const ink = "#1e1e1e";
const paper = "#f5eee9";
const accent = "var(--technical-accent)";

const RoverBody = () => (
  <>
    {[0, 92].flatMap((x) =>
      [18, 94].map((y) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="18"
          height="38"
          rx="3"
          fill={ink}
        />
      )),
    )}
    <rect
      x="13"
      y="10"
      width="84"
      height="130"
      rx="8"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    <rect
      x="29"
      y="39"
      width="52"
      height="65"
      fill={paper}
      stroke={ink}
      strokeWidth="2"
    />
    <path
      d="M41 54H69V89H41Z M55 39V22 M55 104V127"
      fill="none"
      stroke={ink}
      strokeWidth="2"
    />
    <circle cx="35" cy="23" r="5" fill={ink} />
    <circle cx="75" cy="23" r="5" fill={ink} />
    <path d="M39 119H71" stroke={ink} strokeWidth="2" />
  </>
);

const Rovera = () => (
  <>
    <rect
      x="75"
      y="88"
      width="250"
      height="210"
      fill={paper}
      stroke={ink}
      strokeWidth="2"
    />
    <rect
      x="75"
      y="88"
      width="250"
      height="32"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    <text x="89" y="110">
      CONTROL
    </text>
    <circle cx="306" cy="104" r="4" fill={ink} />
    <path d="M95 192H305 M95 140V192" fill="none" stroke={ink} />
    <polyline
      points="95,177 125,177 142,154 165,174 188,148 208,168 233,157 254,170 281,145 305,152"
      fill="none"
      stroke={ink}
      strokeWidth="2"
    />
    <path
      d="M139 211H165V231H185V257H165V277H139V257H119V231H139Z"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    <path
      d="m146 224 6-5 6 5 m-6 40-6-5 m6 5 6-5 m-26-21-5 6 5 6 m40-12 5 6-5 6"
      fill="none"
      stroke={ink}
      strokeWidth="2"
    />
    <path
      d="M217 225H301 M217 244H282 M217 263H293"
      stroke={ink}
      strokeWidth="2"
    />
    <path d="M325 195H420" stroke={ink} strokeWidth="2" strokeDasharray="4 6" />
    <circle
      cx="374"
      cy="195"
      r="15"
      fill={paper}
      stroke={ink}
      strokeWidth="2"
    />
    <path
      d="M366 194Q374 186 382 194 M370 198Q374 194 378 198"
      fill="none"
      stroke={ink}
      strokeWidth="2"
    />
    <circle cx="374" cy="202" r="2" fill={ink} />
    <g transform="translate(425 118)">
      <RoverBody />
    </g>
    <text x="320" y="358" textAnchor="middle">
      WIRELESS / TELEMETRY / CONTROL
    </text>
  </>
);

const Processor = () => (
  <>
    <path d="M89 80H551 M89 75V85 M551 75V85" fill="none" stroke={ink} />
    <text x="320" y="65" textAnchor="middle">
      INSTRUCTION PIPELINE
    </text>
    {[
      ["IF", "FETCH"],
      ["ID", "DECODE"],
      ["EX", "EXECUTE"],
      ["MEM", "MEMORY"],
      ["WB", "WRITE"],
    ].map(([stage, label], index) => {
      const x = 82 + index * 100;
      return (
        <g key={stage}>
          <rect
            x={x}
            y="110"
            width="76"
            height="84"
            fill={index === 2 ? accent : paper}
            stroke={ink}
            strokeWidth="2"
          />
          <text x={x + 38} y="146" textAnchor="middle" fontSize="25">
            {stage}
          </text>
          <text x={x + 38} y="176" textAnchor="middle" fontSize="11">
            {label}
          </text>
          {index < 4 && (
            <path
              d={`M${x + 76} 152h24 m-6-5 6 5-6 5`}
              fill="none"
              stroke={ink}
              strokeWidth="2"
            />
          )}
        </g>
      );
    })}
    <path
      d="M520 194V232H320V194 M314 202l6-8 6 8"
      fill="none"
      stroke={accent}
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <text x="420" y="259" textAnchor="middle" fontSize="12">
      FORWARDING
    </text>
    <path
      d="M92 304H120V280H163V304H206V280H249V304H292V280H335V304H378V280H421V304H464V280H507V304H548"
      fill="none"
      stroke={ink}
      strokeWidth="2"
    />
    <text x="320" y="358" textAnchor="middle">
      VERILOG / 5-STAGE PIPELINE
    </text>
  </>
);

const FilmFrame = ({ filtered = false }) => (
  <>
    <rect width="180" height="180" fill={ink} />
    {[8, 158].flatMap((y) =>
      [12, 45, 78, 111, 144].map((x) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="23"
          height="14"
          fill={paper}
        />
      )),
    )}
    <rect
      x="8"
      y="30"
      width="164"
      height="120"
      fill={filtered ? accent : paper}
    />
    <circle cx="127" cy="61" r="15" fill={filtered ? paper : accent} />
    <path d="M8 150V123L56 72L99 115L122 92L172 138V150Z" fill={ink} />
    <path
      d="M36 116L56 95L76 116"
      fill="none"
      stroke={filtered ? accent : paper}
      strokeWidth="3"
    />
  </>
);

const MovieLab = () => (
  <>
    <g transform="translate(90 90)">
      <FilmFrame />
    </g>
    <g transform="translate(370 90)">
      <FilmFrame filtered />
    </g>
    <text x="180" y="303" textAnchor="middle">
      SOURCE
    </text>
    <text x="460" y="303" textAnchor="middle">
      FILTERED
    </text>
    <text x="320" y="153" textAnchor="middle" fontSize="12">
      FILTER
    </text>
    <path
      d="M286 180H354 M344 171l10 9-10 9"
      fill="none"
      stroke={ink}
      strokeWidth="2"
    />
    <text x="320" y="358" textAnchor="middle">
      YUV → RGB / FRAME PROCESSING
    </text>
  </>
);

const AutonomousRover = () => (
  <>
    <path
      d="M100 295H320V135"
      fill="none"
      stroke={accent}
      strokeWidth="18"
      strokeLinejoin="round"
    />
    <path
      d="M100 295H320V135"
      fill="none"
      stroke={ink}
      strokeWidth="2"
      strokeDasharray="5 7"
      strokeLinejoin="round"
    />
    <path
      d="M320 142L236 45H404Z"
      fill={accent}
      fillOpacity="0.25"
      stroke={ink}
      strokeDasharray="4 6"
    />
    <path
      d="M280 99Q320 62 360 99 M261 77Q320 23 379 77"
      fill="none"
      stroke={ink}
      strokeWidth="2"
    />
    <rect
      x="300"
      y="37"
      width="40"
      height="35"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    <g transform="translate(265 127)">
      <RoverBody />
    </g>
    <path d="M383 164H459 M375 238H459" fill="none" stroke={ink} />
    <text x="470" y="169" fontSize="12">
      SENSE
    </text>
    <text x="470" y="243" fontSize="12">
      FOLLOW
    </text>
    <circle cx="100" cy="295" r="7" fill={ink} />
    <text x="320" y="358" textAnchor="middle">
      SENSING / PATH FOLLOWING
    </text>
  </>
);

const Building = () => (
  <>
    <path
      d="M147 186H230 M410 186H488"
      fill="none"
      stroke={ink}
      strokeWidth="2"
      strokeDasharray="4 5"
    />
    <rect
      x="230"
      y="70"
      width="180"
      height="240"
      fill={paper}
      stroke={ink}
      strokeWidth="2"
    />
    <rect
      x="230"
      y="70"
      width="180"
      height="32"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    <text x="320" y="92" textAnchor="middle">
      BUILDING CONTROL
    </text>
    {Array.from({ length: 9 }, (_, index) => (
      <rect
        key={index}
        x={249 + (index % 3) * 49}
        y={119 + Math.floor(index / 3) * 44}
        width="34"
        height="28"
        fill={index % 3 === 1 || index === 6 ? accent : paper}
        stroke={ink}
        strokeWidth="2"
      />
    ))}
    <path
      d="M300 310V265H340V310 M320 265V310 M218 310H422"
      fill="none"
      stroke={ink}
      strokeWidth="2"
    />
    <path
      d="M114 201V145a10 10 0 0 1 20 0v56a20 20 0 1 1-20 0Z"
      fill={paper}
      stroke={ink}
      strokeWidth="2"
    />
    <circle
      cx="124"
      cy="218"
      r="11"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    <path
      d="M124 208V161 M137 158H147 M137 175H147"
      fill="none"
      stroke={ink}
      strokeWidth="2"
    />
    <path
      d="M498 202V196a24 24 0 1 1 24 0v6Z"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    <path
      d="M499 210H521 M503 217H517 M510 130V118 M548 146l9-9 M472 146l-9-9 M546 172H559"
      fill="none"
      stroke={ink}
      strokeWidth="2"
    />
    <text x="124" y="267" textAnchor="middle">
      HVAC
    </text>
    <text x="510" y="267" textAnchor="middle">
      LIGHTING
    </text>
    <text x="320" y="358" textAnchor="middle">
      SENSORS / AUTOMATION / PYTHON
    </text>
  </>
);

const Website = () => (
  <>
    <rect
      x="100"
      y="62"
      width="410"
      height="255"
      fill={paper}
      stroke={ink}
      strokeWidth="2"
    />
    <rect
      x="100"
      y="62"
      width="410"
      height="29"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    {[115, 129, 143].map((x) => (
      <circle key={x} cx={x} cy="77" r="3" fill={ink} />
    ))}
    <path d="M381 77H419 M433 77H471" stroke={ink} strokeWidth="2" />
    <circle
      cx="164"
      cy="157"
      r="29"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    <circle cx="164" cy="150" r="9" fill={paper} stroke={ink} strokeWidth="2" />
    <path
      d="M148 175V169a16 16 0 0 1 32 0v6"
      fill={paper}
      stroke={ink}
      strokeWidth="2"
    />
    <text x="217" y="143" fontSize="21">
      PORTFOLIO
    </text>
    <path d="M217 162H418 M217 177H364" stroke={ink} strokeWidth="2" />
    <rect x="217" y="190" width="79" height="17" fill={accent} stroke={ink} />
    {[125, 245, 365].map((x, index) => (
      <g key={x}>
        <rect
          x={x}
          y="234"
          width="96"
          height="60"
          fill={index === 1 ? accent : paper}
          stroke={ink}
          strokeWidth="2"
        />
        <path d={`M${x + 12} 250h72 m-72 13h48 m-48 13h62`} stroke={ink} />
      </g>
    ))}
    <rect
      x="464"
      y="181"
      width="81"
      height="157"
      rx="9"
      fill={paper}
      stroke={ink}
      strokeWidth="2"
    />
    <path d="M487 191H522" stroke={ink} strokeWidth="2" />
    <rect x="473" y="203" width="63" height="58" fill={accent} stroke={ink} />
    <circle cx="504" cy="224" r="10" fill={paper} stroke={ink} />
    <path
      d="M484 246H525 M474 277H535 M474 289H516 M474 301H529 M496 326H513"
      stroke={ink}
      strokeWidth="2"
    />
    <text x="320" y="378" textAnchor="middle">
      REACT / RESPONSIVE UI
    </text>
  </>
);

const Chess = () => (
  <>
    <rect x="191" y="31" width="258" height="258" fill={ink} />
    {Array.from({ length: 64 }, (_, index) => {
      const row = Math.floor(index / 8);
      const column = index % 8;
      const piece =
        row === 0
          ? "♜♞♝♛♚♝♞♜"[column]
          : row === 1
            ? "♟"
            : row === 6
              ? "♙"
              : row === 7
                ? "♖♘♗♕♔♗♘♖"[column]
                : null;
      return (
        <g key={index}>
          <rect
            x={192 + column * 32}
            y={32 + row * 32}
            width="32"
            height="32"
            fill={(row + column) % 2 ? accent : paper}
          />
          {piece && (
            <text
              x={208 + column * 32}
              y={57 + row * 32}
              textAnchor="middle"
              fontSize="28"
              fontFamily="Georgia, serif"
              fill={ink}
            >
              {piece}
            </text>
          )}
        </g>
      );
    })}
    <text x="320" y="348" textAnchor="middle">
      EECS 22L / CHESS
    </text>
  </>
);

// Maze layout from EECS118GroupProject; the highlighted route follows open cells.
const mazeRows = [
  "%%%%%%%%%%%%%%%%%%%%%%",
  "% %%        % %      %",
  "%    %%%%%% % %%%%%% %",
  "%%%%%%     P  %      %",
  "%    % %%%%%% %% %%%%%",
  "% %%%% %         %   %",
  "%        %%% %%%   % %",
  "%%%%%%%%%%    %%%%%% %",
  "%.         %%        %",
  "%%%%%%%%%%%%%%%%%%%%%%",
];

const Maze = () => (
  <>
    {mazeRows.flatMap((row, y) =>
      [...row.padEnd(22, "%")].map((cell, x) =>
        cell === "%" ? (
          <rect
            key={`${x}-${y}`}
            x={100 + x * 20}
            y={75 + y * 20}
            width="20"
            height="20"
            fill={ink}
          />
        ) : null,
      ),
    )}
    <polyline
      points="330,145 370,145 370,185 350,185 350,225 310,225 310,245 130,245"
      fill="none"
      stroke={accent}
      strokeWidth="8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <circle
      cx="330"
      cy="145"
      r="7"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    <circle
      cx="130"
      cy="245"
      r="7"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    <text x="320" y="348" textAnchor="middle">
      DFS / BFS / UCS / A*
    </text>
  </>
);

const Database = () => (
  <>
    <g fill="none" stroke={ink} strokeWidth="2">
      <path d="M280 102H360 M450 148V238 M360 282H280" />
      <path d="m352 97 8 5-8 5 M445 230l5 8 5-8 M288 277l-8 5 8 5" />
    </g>
    {[
      { x: 100, y: 58, title: "User", field: "uid / username" },
      { x: 360, y: 58, title: "AgentCreator", field: "uid → User" },
      { x: 360, y: 238, title: "BaseModel", field: "bmid / creator_uid" },
      { x: 100, y: 238, title: "ModelServices", field: "bmid / sid" },
    ].map(({ x, y, title, field }) => (
      <g key={title}>
        <rect
          x={x}
          y={y}
          width="180"
          height="90"
          fill={paper}
          stroke={ink}
          strokeWidth="2"
        />
        <rect
          x={x}
          y={y}
          width="180"
          height="34"
          fill={accent}
          stroke={ink}
          strokeWidth="2"
        />
        <text x={x + 12} y={y + 23} fontSize="17">
          {title}
        </text>
        <text x={x + 12} y={y + 65} fontSize="13">
          {field}
        </text>
      </g>
    ))}
    <text x="320" y="378" textAnchor="middle">
      PYTHON → SQL → MYSQL
    </text>
  </>
);

const Calculator = () => (
  <>
    <rect
      x="207"
      y="28"
      width="226"
      height="310"
      fill={accent}
      stroke={ink}
      strokeWidth="2"
    />
    <rect
      x="222"
      y="44"
      width="196"
      height="58"
      fill={paper}
      stroke={ink}
      strokeWidth="2"
    />
    <text x="402" y="84" textAnchor="end" fontSize="32">
      128
    </text>
    {[
      "√",
      "log",
      "C",
      "÷",
      "7",
      "8",
      "9",
      "×",
      "4",
      "5",
      "6",
      "−",
      "1",
      "2",
      "3",
      "+",
      "±",
      "0",
      ".",
      "=",
    ].map((key, index) => {
      const x = 222 + (index % 4) * 51;
      const y = 116 + Math.floor(index / 4) * 42;
      return (
        <g key={key}>
          <rect
            x={x}
            y={y}
            width="43"
            height="34"
            fill={key === "=" ? ink : paper}
            stroke={ink}
          />
          <text
            x={x + 21.5}
            y={y + 23}
            textAnchor="middle"
            fill={key === "=" ? paper : ink}
            fontSize="16"
          >
            {key}
          </text>
        </g>
      );
    })}
    <text x="320" y="378" textAnchor="middle">
      JAVA / SWING
    </text>
  </>
);

const Poker = () => (
  <>
    <ellipse
      cx="320"
      cy="203"
      rx="235"
      ry="133"
      fill="none"
      stroke={ink}
      strokeWidth="2"
    />
    <ellipse
      cx="320"
      cy="203"
      rx="224"
      ry="122"
      fill="none"
      stroke={ink}
      strokeDasharray="3 5"
    />
    {["10", "J", "Q", "K", "A"].map((rank, index) => (
      <g
        key={rank}
        transform={`translate(${164 + index * 58}, ${112 + Math.abs(2 - index) * 12}) rotate(${(index - 2) * 7}, 40, 60)`}
      >
        <rect
          width="80"
          height="120"
          rx="3"
          fill={index === 4 ? accent : paper}
          stroke={ink}
          strokeWidth="2"
        />
        <text x="10" y="26" fontSize="20">
          {rank}
        </text>
        <text
          x="40"
          y="80"
          textAnchor="middle"
          fontSize="43"
          fontFamily="Georgia, serif"
        >
          ♠
        </text>
      </g>
    ))}
    <text x="320" y="378" textAnchor="middle">
      C / TCP SOCKETS / GTK
    </text>
  </>
);

const illustrations = {
  rovera: Rovera,
  processor: Processor,
  movielab: MovieLab,
  rover: AutonomousRover,
  building: Building,
  website: Website,
  chess: Chess,
  maze: Maze,
  database: Database,
  calculator: Calculator,
  poker: Poker,
};

export const ProjectIllustration = ({ kind }) => {
  const Illustration = illustrations[kind];
  if (!Illustration) return null;
  return (
    <svg
      className="technical-project-illustration"
      viewBox="0 0 640 400"
      aria-hidden="true"
      focusable="false"
      fill={ink}
      fontFamily="var(--font-mono)"
      fontSize="14"
    >
      <rect width="640" height="400" fill={paper} />
      <Illustration />
    </svg>
  );
};
