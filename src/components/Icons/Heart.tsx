export default function HeartIcon({ fill, size, height, width, ...props }: any) {
    return (
        <svg width={size || width || "24"} height={size || height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.62436 4.42456C3.96537 5.18289 2.75 6.9866 2.75 9.13747C2.75 11.3349 3.64922 13.0286 4.93829 14.4801C6.00072 15.6765 7.28684 16.668 8.54113 17.635C8.83904 17.8646 9.13515 18.0929 9.42605 18.3223C9.95208 18.7369 10.4213 19.1009 10.8736 19.3652C11.3261 19.6296 11.6904 19.7504 12 19.7504C12.3096 19.7504 12.6739 19.6296 13.1264 19.3652C13.5787 19.1009 14.0479 18.7369 14.574 18.3223C14.8649 18.0929 15.161 17.8646 15.4589 17.635C16.7132 16.668 17.9993 15.6765 19.0617 14.4801C20.3508 13.0286 21.25 11.3349 21.25 9.13747C21.25 6.9866 20.0346 5.18289 18.3756 4.42456C16.9023 3.75111 14.9662 3.85631 13.0725 5.51263L14.5302 6.96985C14.8232 7.26269 14.8233 7.73757 14.5304 8.03051C14.2376 8.32346 13.7627 8.32355 13.4698 8.03071L11.4698 6.03143L11.4596 6.0211C9.40166 3.88295 7.23607 3.68785 5.62436 4.42456ZM12 4.45918C9.68795 2.39061 7.09896 2.10124 5.00076 3.06033C2.78471 4.07329 1.25 6.4254 1.25 9.13747C1.25 11.803 2.3605 13.8364 3.81672 15.4762C4.98287 16.7893 6.41022 17.8883 7.67083 18.859C7.95659 19.079 8.23378 19.2924 8.49742 19.5002C9.00965 19.904 9.55954 20.3346 10.1168 20.6603C10.6739 20.9858 11.3096 21.2504 12 21.2504C12.6904 21.2504 13.3261 20.9858 13.8832 20.6603C14.4405 20.3346 14.9903 19.904 15.5026 19.5002C15.7662 19.2924 16.0434 19.079 16.3292 18.8589C17.5898 17.8883 19.0171 16.7893 20.1833 15.4762C21.6395 13.8364 22.75 11.803 22.75 9.13747C22.75 6.4254 21.2153 4.07329 18.9992 3.06033C16.901 2.10124 14.3121 2.39061 12 4.45918Z"
                fill={fill || "currentColor"}
            />
        </svg>
    );
}