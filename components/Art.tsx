export function WeaponArt({ kind = "rifle" }: { kind?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      role="img"
      aria-label={`Original ${kind} concept illustration; not an in-game model`}
      className="weapon-art"
    >
      <defs>
        <linearGradient id={`metal-${kind}`} x2="0.4" y2="1">
          <stop stopColor="#879595" />
          <stop offset=".45" stopColor="#354347" />
          <stop offset="1" stopColor="#151e22" />
        </linearGradient>
      </defs>
      <g
        transform="translate(30 15) rotate(-12 170 90)"
        fill={`url(#metal-${kind})`}
        stroke="#91a5a5"
        strokeWidth="2"
      >
        {kind === "lightning" ? (
          <>
            <path d="M70 115L265 45l8 16-195 70z" />
            <path
              d="M246 48l30-28 14 25 30-10-26 46-20-19-22 11z"
              fill="#a6dfff"
              stroke="#70dbe6"
            />
            <path
              d="M285 10l-12 23 18 4-5 25"
              fill="none"
              stroke="#edfaff"
              strokeWidth="4"
            />
            <path d="M78 112l36-13 6 16-36 13z" fill="#ee9255" />
          </>
        ) : kind === "blackhole" ? (
          <>
            <ellipse
              cx="170"
              cy="85"
              rx="85"
              ry="55"
              fill="#090a10"
              stroke="#bb99ff"
              strokeWidth="5"
            />
            <ellipse
              cx="170"
              cy="85"
              rx="120"
              ry="17"
              fill="none"
              stroke="#b9a0ff"
              strokeWidth="6"
              transform="rotate(-25 170 85)"
            />
            <circle
              cx="170"
              cy="85"
              r="36"
              fill="#000"
              stroke="#563d8f"
              strokeWidth="8"
            />
          </>
        ) : kind === "hammer" ? (
          <>
            <path d="M155 45h22v125h-22z" />
            <path d="M95 15h140v55H95z" />
            <path d="M104 24h122v12H104z" fill="#c2c8c5" />
            <path d="M155 120h22v50h-22z" fill="#e76c3e" />
          </>
        ) : kind === "chainsaw" ? (
          <>
            <path
              d="M120 48h174q35 25 0 50H120z"
              fill="#9ca6a0"
              strokeDasharray="5 4"
              strokeWidth="6"
            />
            <path d="M38 52h115v70H38z" fill="#d87835" />
            <path
              d="M55 52V29h59v23M35 65H15v45h23"
              fill="none"
              strokeWidth="8"
            />
            <path
              d="M167 73h110"
              fill="none"
              stroke="#3e4848"
              strokeWidth="8"
            />
          </>
        ) : (
          <>
            <path d="M38 80h75v37l-75 22-17-16z" />
            <path d="M100 66h126v54H100z" />
            <path d="M130 115h29l-8 48h-30z" />
            <path d="M170 117h32l10 35h-39z" />
            {kind === "rocket" ? (
              <>
                <path d="M76 54h234v55H76z" />
                <path d="M302 47l35 35-35 35z" fill="#d8ba65" />
              </>
            ) : kind === "gravity" ? (
              <>
                <path d="M218 65l65-25 14 12-40 32 40 32-14 14-65-25z" />
                <circle cx="218" cy="88" r="25" fill="#6be3e9" />
              </>
            ) : (
              <>
                <path d="M212 77h106v20H212z" />
                {kind === "minigun" ? (
                  <path d="M210 62h110v48H210zM225 70h110M225 101h110" />
                ) : null}
                {kind === "rifle" ? (
                  <path d="M132 42h83v15h-83zM151 57v10M200 57v10" />
                ) : null}
                {kind === "flame" ? (
                  <>
                    <rect
                      x="83"
                      y="118"
                      width="28"
                      height="43"
                      rx="8"
                      fill="#d27638"
                    />
                    <path
                      d="M319 70q50 10 8 32q15-18-8-32"
                      fill="#ff9d40"
                      stroke="#ffc46e"
                    />
                  </>
                ) : null}
              </>
            )}
            <path d="M113 77h78v9h-78z" fill="#9ba7a4" />
            <path d="M202 73h11v35h-11z" fill="#f27749" />
          </>
        )}
      </g>
    </svg>
  );
}
export function Dummy({
  color = "#f3b335",
  transform,
}: {
  color?: string;
  transform?: string;
}) {
  return (
    <g transform={transform} stroke="#172229" strokeWidth="3">
      <path d="M-24-38h48v58h-48z" fill={color} />
      <rect x="-19" y="-78" width="38" height="35" rx="5" fill="#d9e0cb" />
      <path d="M-43-34h16v55h-16zM27-34h16v55H27z" fill="#d9e0cb" />
      <path d="M-23 24h20v60h-20zM3 24h20v60H3z" fill="#557b83" />
      <path d="M-10-62h3m14 0h3" stroke="#101717" strokeWidth="4" />
      <path d="M-7-51h14" stroke="#101717" strokeWidth="2" />
      <path d="M-15-29h30v16h-30z" fill="#222c2b" />
      <path d="M-10-21h20" stroke={color} />
    </g>
  );
}
export function LabArt() {
  return (
    <svg
      viewBox="0 0 900 650"
      className="lab-art"
      aria-label="Original stylized physics laboratory artwork, not a gameplay screenshot"
      role="img"
    >
      <defs>
        <linearGradient id="room" x2="0" y2="1">
          <stop stopColor="#172c32" />
          <stop offset="1" stopColor="#090e12" />
        </linearGradient>
        <radialGradient id="blast">
          <stop stopColor="#ffecc2" />
          <stop offset=".2" stopColor="#ffb634" />
          <stop offset=".55" stopColor="#f36922" stopOpacity=".8" />
          <stop offset="1" stopColor="#f36922" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <path d="M0 0h900v650H0z" fill="url(#room)" />
      <g stroke="#355159" fill="none">
        <path d="M0 0l260 140h420L900 0M260 140v280L0 650M680 140v280l220 230M260 420h420M0 560h900M0 490h900M130 650l240-230M450 650V420M790 650L570 420" />
        {[310, 390, 470, 550, 630].map((x) => (
          <path key={x} d={`M${x} 140v280`} />
        ))}
      </g>
      <g fill="#78f0f1">
        <path d="M286 160h5v226h-5zM652 160h5v226h-5z" filter="url(#glow)" />
        <path d="M286 160h3v226h-3zM652 160h3v226h-3zM340 110h260v4H340z" />
      </g>
      <g fill="#1c3037" stroke="#5c7175" strokeWidth="2">
        <path d="M310 260h100v160H310z" />
        <path d="M320 273h80v51h-80z" fill="#0c1b1e" />
        <path d="M735 360l92-20v105l-92 30z" />
        <path d="M736 360l-40-30 90-19 41 29z" />
        <path d="M696 330v103l39 42V360z" />
      </g>
      <path
        d="M329 291h18l9 17 13-29 10 18h12"
        fill="none"
        stroke="#6ae6d5"
        strokeWidth="3"
      />
      <ellipse cx="480" cy="461" rx="175" ry="30" fill="#04090b" opacity=".7" />
      <circle
        cx="610"
        cy="390"
        r="137"
        fill="url(#blast)"
        className="blast-glow"
      />
      <g className="floating-dummy">
        <Dummy transform="translate(485 310) rotate(24) scale(1.65)" />
      </g>
      <Dummy
        transform="translate(710 415) rotate(74) scale(.8)"
        color="#d67853"
      />
      <g fill="#edac5a">
        <path d="M550 290l11-22 9 17zM670 310l18-11 8 20zM597 485l9-16 16 4zM375 444l13-7 9 19zM701 240l8-11 9 8z" />
      </g>
      <path d="M345 460l-70 20 13 63 71-24z" fill="#8e6440" stroke="#c38c54" />
      <g stroke="#f3c473" strokeWidth="3">
        <path d="M615 354l35-34M618 400l62 7M578 415l-14 52M651 375l63-17" />
      </g>
      <text
        x="325"
        y="206"
        fill="#8ba2a3"
        fontSize="13"
        fontFamily="monospace"
        letterSpacing="5"
      >
        PHYSICS TEST CHAMBER
      </text>
    </svg>
  );
}
