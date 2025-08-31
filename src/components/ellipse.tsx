import clsx from 'classnames'

interface EllipseProps {
  label?: string | React.ReactNode
  className?: string
}

export default function Ellipse(props: EllipseProps) {
  return (
    <div
      className={clsx(
        'ellipse-container flex flex-col items-center justify-center relative',
        props.className
      )}
    >
      <div className="flex flex-col items-center absolute top-0 left-0 w-full h-full">
        {props.label && <div className="ellipse-label">{props.label}</div>}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="102"
        height="102"
        viewBox="0 0 102 102"
        fill="none"
      >
        <g filter="url(#filter0_i_2445_109)">
          <circle cx="51" cy="51" r="51" fill="#BFC9BF" style={{ mixBlendMode: 'overlay' }} />
          <circle cx="51" cy="51" r="51" fill="#FBF0DA" fillOpacity="0.2" />
        </g>
        <defs>
          <filter
            id="filter0_i_2445_109"
            x="-1"
            y="0"
            width="103"
            height="106"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="4" />
            <feGaussianBlur stdDeviation="19.45" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.803922 0 0 0 0 0.831373 0 0 0 0 0.796078 0 0 0 0.96 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2445_109" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
