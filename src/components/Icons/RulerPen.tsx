export default function RulerPenIcon({ fill, size, height, width, ...props }: any) {
    return (
        <svg width={size || width || "24"} height={size || height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.948 1.25L18.052 1.25C18.9505 1.24997 19.6997 1.24995 20.2945 1.32991C20.9223 1.41432 21.4891 1.59999 21.9446 2.05546C22.4 2.51093 22.5857 3.07773 22.6701 3.70552C22.7501 4.30031 22.75 5.04953 22.75 5.94801V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9446 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H15.948C15.0495 22.75 14.3003 22.7501 13.7055 22.6701C13.0777 22.5857 12.5109 22.4 12.0555 21.9445C11.6 21.4891 11.4143 20.9223 11.3299 20.2945C11.2499 19.6997 11.25 18.9505 11.25 18.052V5.94801C11.25 5.04953 11.2499 4.30031 11.3299 3.70552C11.4143 3.07773 11.6 2.51093 12.0555 2.05546C12.5109 1.59999 13.0777 1.41432 13.7055 1.32991C14.3003 1.24995 15.0495 1.24997 15.948 1.25ZM12.75 9.75H15C15.4142 9.75 15.75 9.41422 15.75 9C15.75 8.58579 15.4142 8.25 15 8.25H12.75V6.75L14 6.75C14.4142 6.75 14.75 6.41422 14.75 6C14.75 5.58579 14.4142 5.25 14 5.25L12.7518 5.25C12.756 4.68057 12.7701 4.2509 12.8165 3.9054C12.8786 3.44393 12.9858 3.24644 13.1161 3.11612C13.2464 2.9858 13.4439 2.87858 13.9054 2.81654C14.3884 2.7516 15.036 2.75 16 2.75L18 2.75C18.964 2.75 19.6116 2.7516 20.0946 2.81654C20.5561 2.87858 20.7536 2.9858 20.8839 3.11612C21.0142 3.24644 21.1214 3.44393 21.1835 3.90539C21.2484 4.38843 21.25 5.03599 21.25 6V18C21.25 18.964 21.2484 19.6116 21.1835 20.0946C21.1214 20.5561 21.0142 20.7536 20.8839 20.8839C20.7536 21.0142 20.5561 21.1214 20.0946 21.1835C19.6116 21.2484 18.964 21.25 18 21.25H16C15.036 21.25 14.3884 21.2484 13.9054 21.1835C13.4439 21.1214 13.2464 21.0142 13.1161 20.8839C12.9858 20.7536 12.8786 20.5561 12.8165 20.0946C12.7701 19.7491 12.756 19.3194 12.7518 18.75H14C14.4142 18.75 14.75 18.4142 14.75 18C14.75 17.5858 14.4142 17.25 14 17.25H12.75V15.75L15 15.75C15.4142 15.75 15.75 15.4142 15.75 15C15.75 14.5858 15.4142 14.25 15 14.25L12.75 14.25V12.75H14C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25H12.75V9.75ZM1.25 4.85C1.25001 2.82599 2.96565 1.25 5.00001 1.25C7.03436 1.25 8.75 2.82599 8.75 4.85L8.75001 15.5847C8.75005 16.1279 8.75007 16.4692 8.70597 16.8082C8.65403 17.2074 8.5565 17.5996 8.41535 17.9779C8.29559 18.2988 8.13547 18.603 7.87948 19.0893L6.3873 21.9245C6.11397 22.4438 5.57043 22.75 5 22.75C4.42957 22.75 3.88604 22.4438 3.61271 21.9245L2.12053 19.0893C1.86454 18.603 1.70442 18.2989 1.58466 17.9779C1.44351 17.5996 1.34598 17.2074 1.29404 16.8082C1.24994 16.4692 1.24996 16.1279 1.25 15.5847L1.25 4.85ZM5.00001 2.75C3.72065 2.75 2.75001 3.72599 2.75001 4.85L2.75001 5.40497C2.84638 5.46221 2.96715 5.52769 3.11065 5.59379C3.54827 5.79536 4.19123 6 5.00001 6C5.80878 6 6.45174 5.79536 6.88936 5.59379C7.03286 5.52769 7.15363 5.46221 7.25 5.40497L7.25 4.85C7.25 3.72599 6.27936 2.75 5.00001 2.75ZM7.25 7.07103C6.67722 7.30056 5.91577 7.5 5.00001 7.5C4.08424 7.5 3.32279 7.30056 2.75001 7.07103L2.75001 15.5338C2.75001 16.1439 2.75144 16.3836 2.7815 16.6146C2.81866 16.9002 2.8885 17.1815 2.99001 17.4535C3.07232 17.6741 3.18452 17.8903 3.4716 18.4357L4.44075 20.2771H5.55926L6.52841 18.4357C6.81549 17.8903 6.92769 17.6741 7.01 17.4535C7.11151 17.1815 7.18135 16.9002 7.21851 16.6146C7.24857 16.3836 7.25 16.1439 7.25 15.5338L7.25 7.07103ZM2.47966 5.22344L2.481 5.22455C2.47932 5.22321 2.47929 5.22313 2.47966 5.22344ZM7.51839 5.22502L7.5203 5.22348C7.52003 5.2237 7.51939 5.22422 7.51839 5.22502Z"
                fill={fill || "currentColor"}
            />
        </svg>
    );
}
