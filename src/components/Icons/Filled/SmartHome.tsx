export default function SmartHomeIcon({ size, height, width, ...props }: any) {
    return (
        <svg width={size || width || "24"} height={size || height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                opacity="0.5"
                d="M2 10.3685C2.35465 10.1355 2.77911 10 3.23524 10C9.45333 10 14.4941 15.0368 14.4941 21.25C14.4941 21.513 14.4489 21.7654 14.366 22C17.8933 21.9986 19.6942 21.9595 20.8275 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4804 7.82274C20.9608 6.87421 20.0115 6.28551 18.1129 5.10812L16.1113 3.86687C14.1044 2.62229 13.1009 2 11.9921 2C10.8833 2 9.87985 2.62229 7.87292 3.86687L5.87135 5.10813C3.97276 6.28551 3.02347 6.87421 2.50386 7.82274C2.14625 8.47555 2.03476 9.22105 2 10.3685Z"
                fill="#1C274C"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.48465 12.25C2.48465 11.8358 2.8207 11.5 3.23524 11.5C8.62425 11.5 12.9929 15.8652 12.9929 21.25C12.9929 21.6642 12.6569 22 12.2423 22C11.8278 22 11.4917 21.6642 11.4917 21.25C11.4917 16.6937 7.79517 13 3.23524 13C2.8207 13 2.48465 12.6642 2.48465 12.25ZM3.23524 14.5C2.8207 14.5 2.48465 14.8358 2.48465 15.25C2.48465 15.6642 2.8207 16 3.23524 16C6.13702 16 8.48937 18.3505 8.48937 21.25C8.48937 21.6642 8.82542 22 9.23996 22C9.6545 22 9.99055 21.6642 9.99055 21.25C9.99055 17.5221 6.9661 14.5 3.23524 14.5ZM2.48465 18.25C2.48465 17.8358 2.8207 17.5 3.23524 17.5C5.30794 17.5 6.98819 19.1789 6.98819 21.25C6.98819 21.6642 6.65214 22 6.2376 22C5.82306 22 5.48701 21.6642 5.48701 21.25C5.48701 20.0074 4.47886 19 3.23524 19C2.8207 19 2.48465 18.6642 2.48465 18.25Z"
                fill="#1C274C"
            />
        </svg>
    );
}
