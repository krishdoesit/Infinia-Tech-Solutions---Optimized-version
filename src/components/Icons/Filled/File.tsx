export default function FileIcon({ size, height, width, ...props }: any) {
    return (
        <svg width={size || width || "24"} height={size || height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g opacity="0.5">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 22.0002H10C6.22876 22.0002 4.34315 22.0002 3.17157 20.8287C2 19.6571 2 17.7715 2 14.0002V10.0002C2 6.22901 2 4.34339 3.17157 3.17182C4.34315 2.00024 6.23869 2.00024 10.0298 2.00024C10.6358 2.00024 11.1214 2.00024 11.53 2.01691C11.5166 2.09684 11.5095 2.17837 11.5092 2.26081L11.5 5.09521C11.4999 6.19232 11.4998 7.16189 11.6049 7.9434C11.7188 8.79052 11.9803 9.63751 12.6716 10.3288C13.3628 11.02 14.2098 11.2816 15.0569 11.3954C15.8385 11.5005 16.808 11.5004 17.9051 11.5004L18 11.5004H21.9574C22 12.0346 22 12.6903 22 13.5631V14.0002C22 17.7715 22 19.6571 20.8284 20.8287C19.6569 22.0002 17.7712 22.0002 14 22.0002Z"
                    fill="#1C274C"
                />
            </g>
            <path d="M6 13.7502C5.58579 13.7502 5.25 14.086 5.25 14.5002C5.25 14.9145 5.58579 15.2502 6 15.2502H14C14.4142 15.2502 14.75 14.9145 14.75 14.5002C14.75 14.086 14.4142 13.7502 14 13.7502H6Z" fill="#1C274C" />
            <path d="M6 17.2502C5.58579 17.2502 5.25 17.586 5.25 18.0002C5.25 18.4145 5.58579 18.7502 6 18.7502H11.5C11.9142 18.7502 12.25 18.4145 12.25 18.0002C12.25 17.586 11.9142 17.2502 11.5 17.2502H6Z" fill="#1C274C" />
            <path
                d="M11.5092 2.26034L11.5 5.09474C11.4999 6.19184 11.4998 7.16142 11.6049 7.94293C11.7188 8.79005 11.9803 9.63704 12.6716 10.3283C13.3629 11.0196 14.2098 11.2811 15.057 11.395C15.8385 11.5 16.808 11.5 17.9051 11.4999L21.9574 11.4999C21.9698 11.6554 21.9786 11.8213 21.9848 11.9998H22C22 11.7323 22 11.5985 21.9901 11.4411C21.9335 10.5465 21.5617 9.52149 21.0315 8.79877C20.9382 8.67155 20.8743 8.59517 20.7467 8.44243C19.9542 7.49383 18.911 6.31217 18 5.49978C17.1892 4.7767 16.0787 3.98561 15.1101 3.33874C14.2781 2.78299 13.862 2.50511 13.2915 2.29858C13.1403 2.24383 12.9408 2.18335 12.7846 2.1449C12.4006 2.05038 12.0268 2.0175 11.5 2.0061L11.5092 2.26034Z"
                fill="#1C274C"
            />
        </svg>
    );
}
