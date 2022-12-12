export default function Icon({ name, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {name === 'chevron-down' && <path d="M6 9l6 6 6-6"></path>}
      {name === 'chevron-left' && <path d="M15 18l-6-6 6-6"></path>}
      {name === 'chevron-right' && <path d="M9 18l6-6-6-6"></path>}
      {name === 'star' && (
        <path d="M12.007 18.254L5.827 21.5l1.18-6.876L2 9.756l6.91-1L12 2.5l3.09 6.255 6.91 1-5.007 4.87 1.18 6.875-6.166-3.246z"></path>
      )}
    </svg>
  )
}
