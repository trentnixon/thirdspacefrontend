

export const AILOGO = (props) =>{

    return(
        <svg
          {...props}
          width={70}
          height={50}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.315 7.155 4.237 31.002C.047 36.24 3.776 44 10.484 44H27a7 7 0 0 0 7-7V10.903c0-5.672-7.142-8.177-10.685-3.748Z"
            stroke="url(#a)"
            strokeWidth={4}
          />
          <path
            d="m38.892 10.941.01 25.232c.003 7.203 8.78 10.734 13.77 5.538l11.255-11.717a7 7 0 0 0-.313-10.004L48.951 6.52c-3.848-3.534-10.061-.804-10.059 4.421Z"
            stroke="url(#b)"
            strokeWidth={4}
          />
          <defs>
            <linearGradient
              id="a"
              x1={-2}
              y1={20.75}
              x2={32}
              y2={20.75}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EC8B33" />
              <stop offset={1} stopColor="#4C9CB9" />
            </linearGradient>
            <linearGradient
              id="b"
              x1={37}
              y1={24.5}
              x2={68}
              y2={24.5}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4C9CB9" />
              <stop offset={1} stopColor="#F4BA41" />
            </linearGradient>
          </defs>
        </svg>
      )
} 
