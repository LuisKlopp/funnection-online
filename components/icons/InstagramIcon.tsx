export const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 stroke-[url(#instagram-gradient)] group-hover:stroke-white"
    fill="none"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient
        id="instagram-gradient"
        x1="0%"
        y1="100%"
        x2="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="25%" stopColor="#DD2A7B" />
        <stop offset="50%" stopColor="#8134AF" />
        <stop offset="100%" stopColor="#515BD4" />
      </linearGradient>
    </defs>

    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" />
  </svg>
);
