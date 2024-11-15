export default function PeopleIcon({ fill, size, height, width, ...props }: any) {
    return (
        <svg width={size || width || "24"} height={size || height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25049C9.37665 1.25049 7.25 3.37714 7.25 6.00049C7.25 8.62384 9.37665 10.7505 12 10.7505C14.6234 10.7505 16.75 8.62384 16.75 6.00049C16.75 3.37714 14.6234 1.25049 12 1.25049ZM8.75 6.00049C8.75 4.20556 10.2051 2.75049 12 2.75049C13.7949 2.75049 15.25 4.20556 15.25 6.00049C15.25 7.79541 13.7949 9.25049 12 9.25049C10.2051 9.25049 8.75 7.79541 8.75 6.00049Z" fill={fill || "currentColor"} />
            <path d="M18 3.25049C17.5858 3.25049 17.25 3.58627 17.25 4.00049C17.25 4.4147 17.5858 4.75049 18 4.75049C19.3765 4.75049 20.25 5.65622 20.25 6.50049C20.25 7.34476 19.3765 8.25049 18 8.25049C17.5858 8.25049 17.25 8.58627 17.25 9.00049C17.25 9.4147 17.5858 9.75049 18 9.75049C19.9372 9.75049 21.75 8.41764 21.75 6.50049C21.75 4.58333 19.9372 3.25049 18 3.25049Z" fill={fill || "currentColor"} />
            <path d="M6.75 4.00049C6.75 3.58627 6.41421 3.25049 6 3.25049C4.06278 3.25049 2.25 4.58333 2.25 6.50049C2.25 8.41764 4.06278 9.75049 6 9.75049C6.41421 9.75049 6.75 9.4147 6.75 9.00049C6.75 8.58627 6.41421 8.25049 6 8.25049C4.62351 8.25049 3.75 7.34476 3.75 6.50049C3.75 5.65622 4.62351 4.75049 6 4.75049C6.41421 4.75049 6.75 4.4147 6.75 4.00049Z" fill={fill || "currentColor"} />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 12.2505C10.2157 12.2505 8.56645 12.7313 7.34133 13.548C6.12146 14.3613 5.25 15.5671 5.25 17.0005C5.25 18.4338 6.12146 19.6397 7.34133 20.453C8.56645 21.2697 10.2157 21.7505 12 21.7505C13.7843 21.7505 15.4335 21.2697 16.6587 20.453C17.8785 19.6397 18.75 18.4338 18.75 17.0005C18.75 15.5671 17.8785 14.3613 16.6587 13.548C15.4335 12.7313 13.7843 12.2505 12 12.2505ZM6.75 17.0005C6.75 16.2247 7.22169 15.4306 8.17338 14.7961C9.11984 14.1651 10.4706 13.7505 12 13.7505C13.5294 13.7505 14.8802 14.1651 15.8266 14.7961C16.7783 15.4306 17.25 16.2247 17.25 17.0005C17.25 17.7763 16.7783 18.5704 15.8266 19.2049C14.8802 19.8358 13.5294 20.2505 12 20.2505C10.4706 20.2505 9.11984 19.8358 8.17338 19.2049C7.22169 18.5704 6.75 17.7763 6.75 17.0005Z"
                fill={fill || "currentColor"}
            />
            <path
                d="M19.2674 13.8398C19.3561 13.4352 19.7561 13.1792 20.1607 13.2679C21.1225 13.4788 21.9893 13.8598 22.6328 14.3864C23.2758 14.9125 23.75 15.6357 23.75 16.5005C23.75 17.3652 23.2758 18.0885 22.6328 18.6146C21.9893 19.1411 21.1225 19.5221 20.1607 19.7331C19.7561 19.8218 19.3561 19.5657 19.2674 19.1611C19.1787 18.7565 19.4347 18.3566 19.8393 18.2679C20.6317 18.0941 21.2649 17.7957 21.6829 17.4537C22.1014 17.1112 22.25 16.7768 22.25 16.5005C22.25 16.2242 22.1014 15.8897 21.6829 15.5473C21.2649 15.2053 20.6317 14.9068 19.8393 14.7331C19.4347 14.6444 19.1787 14.2444 19.2674 13.8398Z"
                fill={fill || "currentColor"}
            />
            <path
                d="M3.83935 13.2679C4.24395 13.1792 4.64387 13.4352 4.73259 13.8398C4.82132 14.2444 4.56525 14.6444 4.16065 14.7331C3.36829 14.9068 2.73505 15.2053 2.31712 15.5473C1.89863 15.8897 1.75 16.2242 1.75 16.5005C1.75 16.7768 1.89863 17.1112 2.31712 17.4537C2.73505 17.7957 3.36829 18.0941 4.16065 18.2679C4.56525 18.3566 4.82132 18.7565 4.73259 19.1611C4.64387 19.5657 4.24395 19.8218 3.83935 19.7331C2.87746 19.5221 2.0107 19.1411 1.36719 18.6146C0.724248 18.0885 0.25 17.3652 0.25 16.5005C0.25 15.6357 0.724248 14.9125 1.36719 14.3864C2.0107 13.8598 2.87746 13.4788 3.83935 13.2679Z"
                fill={fill || "currentColor"}
            />
        </svg>
    );
}