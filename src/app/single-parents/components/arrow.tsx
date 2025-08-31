export default function Arrow({ className = '' }: { className?: string }) {
  return (
    <span
      className={`w-[22px] h-[13px] inline-block transition-transform duration-300 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="13"
        viewBox="0 0 22 13"
        fill="none"
      >
        <path
          d="M21 0.999999L11 11L1 0.999999"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
