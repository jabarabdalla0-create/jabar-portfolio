const Bg = ({ id, a, b }) => (
  <>
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={a} />
        <stop offset="1" stopColor={b} />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill={`url(#${id})`} />
  </>
);
const S = (p) => (
  <svg
    viewBox="0 0 400 300"
    preserveAspectRatio="xMidYMid slice"
    role="img"
    aria-hidden="true"
    {...p}
  />
);

const Coffee = () => (
  <S>
    <Bg id="gc" a="#2a1308" b="#7a3b1a" />
    <circle cx="320" cy="60" r="90" fill="#f0a35e" opacity=".12" />
    <path
      d="M150 90q-14-22 0-44M200 95q-14-26 0-52M250 90q-14-22 0-44"
      stroke="#f5e6d3"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      opacity=".5"
    />
    <path d="M120 130h160v70a80 62 0 0 1-160 0z" fill="#f5e6d3" />
    <path
      d="M280 145h22a30 30 0 0 1 0 60h-28"
      stroke="#f5e6d3"
      strokeWidth="14"
      fill="none"
    />
    <ellipse cx="200" cy="130" rx="80" ry="14" fill="#5a2b12" />
    <ellipse cx="200" cy="130" rx="64" ry="9" fill="#8a4a24" />
    <ellipse cx="200" cy="262" rx="130" ry="14" fill="#f5e6d3" opacity=".9" />
  </S>
);

const Estate = () => (
  <S>
    <Bg id="ge" a="#0b1a3d" b="#3B82F6" />
    <path
      d="M0 230l70-80 60 60 80-110 90 100 100-70v170H0z"
      fill="#0a1430"
      opacity=".55"
    />
    {[
      [40, 150, 70, 120],
      [120, 110, 80, 160],
      [210, 140, 60, 130],
      [280, 90, 90, 180],
    ].map(([x, y, w, h], i) => (
      <g key={i}>
        <rect
          x={x}
          y={y}
          width={w}
          height={h}
          fill="#0d1530"
          stroke="#9cc0ff"
          strokeOpacity=".35"
        />
        {Array.from({ length: Math.floor(h / 28) }).map((_, r) =>
          Array.from({ length: Math.floor(w / 22) }).map((_, c) => (
            <rect
              key={r + "-" + c}
              x={x + 8 + c * 22}
              y={y + 10 + r * 28}
              width="10"
              height="14"
              fill={(r + c + i) % 3 ? "#ffd98a" : "#27375f"}
            />
          )),
        )}
      </g>
    ))}
    <rect x="0" y="270" width="400" height="30" fill="#07070A" />
  </S>
);

const Barber = () => (
  <S>
    <Bg id="gb" a="#1a0b3a" b="#7C3AED" />
    <defs>
      <pattern
        id="st"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(40)"
      >
        <rect width="40" height="40" fill="#f5f5f7" />
        <rect width="14" height="40" fill="#ef4444" />
        <rect x="14" width="13" height="40" fill="#3B82F6" />
      </pattern>
    </defs>
    <rect x="170" y="30" width="60" height="30" rx="8" fill="#d9d9e3" />
    <rect x="170" y="240" width="60" height="30" rx="8" fill="#d9d9e3" />
    <rect x="175" y="60" width="50" height="180" fill="url(#st)" />
    <rect
      x="175"
      y="60"
      width="50"
      height="180"
      fill="none"
      stroke="#fff"
      strokeOpacity=".5"
      strokeWidth="3"
    />
    <g stroke="#f5f5f7" strokeWidth="6" fill="none" strokeLinecap="round">
      <path d="M60 100l70 70M130 100l-70 70" />
      <circle cx="52" cy="92" r="14" />
      <circle cx="52" cy="178" r="14" />
    </g>
    <g fill="#f5f5f7" opacity=".85">
      <rect x="270" y="110" width="80" height="22" rx="4" />
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x={274 + i * 7.5} y="132" width="3.5" height="26" />
      ))}
    </g>
  </S>
);

const Game = () => (
  <S>
    <Bg id="gg" a="#12052e" b="#EC4899" />
    <circle cx="60" cy="60" r="3" fill="#fff" opacity=".6" />
    <circle cx="340" cy="50" r="2" fill="#fff" opacity=".6" />
    <circle cx="300" cy="260" r="3" fill="#fff" opacity=".4" />
    <path
      d="M110 110h180c40 0 60 40 70 90 6 34-22 48-44 28l-34-36H118l-34 36c-22 20-50 6-44-28 10-50 30-90 70-90z"
      fill="#15152a"
      stroke="#f5f5f7"
      strokeOpacity=".5"
      strokeWidth="3"
    />
    <g fill="#f5f5f7">
      <rect x="108" y="140" width="14" height="40" rx="3" />
      <rect x="95" y="153" width="40" height="14" rx="3" />
    </g>
    {[
      [285, 140, "#3B82F6"],
      [310, 160, "#EC4899"],
      [260, 160, "#facc15"],
      [285, 180, "#4ade80"],
    ].map(([x, y, c], i) => (
      <circle key={i} cx={x} cy={y} r="11" fill={c} />
    ))}
  </S>
);

export const art = {
  coffee: Coffee,
  estate: Estate,
  barber: Barber,
  game: Game,
};
