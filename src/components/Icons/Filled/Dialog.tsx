export default function DialogIcon({ size, height, width, ...props }: any) {
    return (
        <svg width={size || width || "24"} height={size || height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 14.0002C18 18.4185 14.4183 22.0002 10 22.0002C8.76449 22.0002 7.5944 21.7202 6.54976 21.22C6.19071 21.0482 5.78393 20.9878 5.39939 21.0907L4.17335 21.4187C3.20701 21.6773 2.32295 20.7932 2.58151 19.8269L2.90955 18.6009C3.01245 18.2163 2.95209 17.8095 2.7802 17.4505C2.28008 16.4058 2 15.2357 2 14.0002C2 9.58197 5.58172 6.00024 10 6.00024C14.4183 6.00024 18 9.58197 18 14.0002ZM6.5 15.0002C7.05228 15.0002 7.5 14.5525 7.5 14.0002C7.5 13.448 7.05228 13.0002 6.5 13.0002C5.94772 13.0002 5.5 13.448 5.5 14.0002C5.5 14.5525 5.94772 15.0002 6.5 15.0002ZM10 15.0002C10.5523 15.0002 11 14.5525 11 14.0002C11 13.448 10.5523 13.0002 10 13.0002C9.44772 13.0002 9 13.448 9 14.0002C9 14.5525 9.44772 15.0002 10 15.0002ZM13.5 15.0002C14.0523 15.0002 14.5 14.5525 14.5 14.0002C14.5 13.448 14.0523 13.0002 13.5 13.0002C12.9477 13.0002 12.5 13.448 12.5 14.0002C12.5 14.5525 12.9477 15.0002 13.5 15.0002Z"
                fill="#1C274C"
            />
            <path
                opacity="0.6"
                d="M17.984 14.5087C18.0919 14.464 18.1983 14.4165 18.3032 14.3663C18.5949 14.2267 18.9255 14.1776 19.2379 14.2612L20.2341 14.5278C21.0192 14.7378 21.7375 14.0195 21.5274 13.2344L21.2609 12.2382C21.1773 11.9258 21.2263 11.5953 21.366 11.3036C21.7723 10.4548 21.9999 9.50409 21.9999 8.50024C21.9999 4.91039 19.0897 2.00024 15.4999 2.00024C12.7899 2.00024 10.4672 3.65875 9.49146 6.01614C9.65958 6.0056 9.82911 6.00024 9.9999 6.00024C14.4182 6.00024 17.9999 9.58197 17.9999 14.0002C17.9999 14.171 17.9945 14.3406 17.984 14.5087Z"
                fill="#1C274C"
            />
        </svg>
    );
}