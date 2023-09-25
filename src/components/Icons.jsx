import React from 'react'
export const BarMenuIcon = ({ strokeColor = 'hsl(0, 0%, 18%)' }) => {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23"><path fill="transparent" strokeWidth="3" stroke={strokeColor} strokeLinecap="round" d="M 2 2.5 L 20 2.5"></path><path fill="transparent" strokeWidth="3" stroke={strokeColor} strokeLinecap="round" d="M 2 9.423 L 20 9.423" opacity="1"></path><path fill="transparent" strokeWidth="3" stroke={strokeColor} strokeLinecap="round" d="M 2 16.346 L 20 16.346"></path></svg>
  )
}
export const CloseMenuIcon = ({ strokeColor = 'hsl(0, 0%, 18%)' }) => {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23"><path fill="transparent" strokeWidth="3" stroke={strokeColor} strokeLinecap="round" d="M 3 16.5 L 17 2.5"></path><path fill="transparent" strokeWidth="3" stroke={strokeColor} strokeLinecap="round" d="M 2 9.423 L 20 9.423" opacity="0"></path><path fill="transparent" strokeWidth="3" stroke={strokeColor} strokeLinecap="round" d="M 3 2.5 L 17 16.346"></path></svg>
  )
}
export const SearchIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

export const DownloadIcon = ({ width = 24, height = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    viewBox="0 0 24 24"
    className={className || ''}
  >
    <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z" />
  </svg>
)

export const WorldIcon = ({ width = 24, height = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    viewBox="0 0 24 24"
    className={className || ''}
  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z" />
  </svg>
)

export const FavoriteIcon = ({ width = 24, height = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    viewBox="0 0 24 24"
    className={className || ''}
  >
    <path d="M19 21.723V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v17.723l7-4.571 7 4.571zM8 8l2.667-.333L12 5l1.333 2.667L16 8l-2.223 1.889.89 3.111L12 11.222 9.333 13l.89-3.111L8 8z" />
  </svg>
)

export const DeleteIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M8.60834 13.75H11.3833"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.91669 10.4167H12.0834"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
)

export const VerticalDotsIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      fill="currentColor"
    />
  </svg>
)
export const FilterIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    role="filter"
    viewBox="0 0 100 100"
    width={size || width}
    {...props}
  >
    <g >
      <path d="M 15.205 90 c -1.104 0 -2 -0.896 -2 -2 V 55.115 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 V 88 C 17.205 89.104 16.31 90 15.205 90 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
      <path d="M 74.795 59.357 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 55.357 C 76.795 58.462 75.899 59.357 74.795 59.357 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
      <path d="M 45 90 c -1.104 0 -2 -0.896 -2 -2 V 27.922 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 V 88 C 47 89.104 46.104 90 45 90 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
      <path d="M 45 29.922 c -5.464 0 -9.91 -4.445 -9.91 -9.91 s 4.445 -9.91 9.91 -9.91 c 5.465 0 9.91 4.445 9.91 9.91 S 50.465 29.922 45 29.922 z M 45 14.103 c -3.259 0 -5.91 2.651 -5.91 5.91 s 2.651 5.91 5.91 5.91 s 5.91 -2.651 5.91 -5.91 S 48.259 14.103 45 14.103 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
      <path d="M 15.205 57.115 c -5.464 0 -9.91 -4.445 -9.91 -9.91 c 0 -5.464 4.445 -9.91 9.91 -9.91 s 9.91 4.445 9.91 9.91 C 25.115 52.67 20.669 57.115 15.205 57.115 z M 15.205 41.295 c -3.259 0 -5.91 2.651 -5.91 5.91 s 2.651 5.91 5.91 5.91 s 5.91 -2.651 5.91 -5.91 S 18.464 41.295 15.205 41.295 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
      <path d="M 74.795 75.177 c -5.464 0 -9.909 -4.445 -9.909 -9.91 c 0 -5.464 4.445 -9.909 9.909 -9.909 c 5.465 0 9.91 4.445 9.91 9.909 C 84.705 70.731 80.26 75.177 74.795 75.177 z M 74.795 59.357 c -3.259 0 -5.909 2.65 -5.909 5.909 s 2.65 5.91 5.909 5.91 s 5.91 -2.651 5.91 -5.91 S 78.054 59.357 74.795 59.357 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
      <path d="M 15.205 41.295 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 37.295 C 17.205 40.4 16.31 41.295 15.205 41.295 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
      <path d="M 45 14.103 c -1.104 0 -2 -0.896 -2 -2 V 2 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 10.103 C 47 13.207 46.104 14.103 45 14.103 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
      <path d="M 74.795 90 c -1.104 0 -2 -0.896 -2 -2 V 73.177 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 V 88 C 76.795 89.104 75.899 90 74.795 90 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
    </g>

  </svg>
)

export const PreferencesIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size || height}
    role="preferences"
    width={size || width}
    viewBox="0 0 128 128"
    {...props}
  >
    <path d="M64,39A25,25,0,1,0,89,64,25,25,0,0,0,64,39Zm0,44A19,19,0,1,1,83,64,19,19,0,0,1,64,83Z" /><path d="M121,48h-8.93a1,1,0,0,1-.94-.68,49.9,49.9,0,0,0-2-4.85,1,1,0,0,1,.18-1.15L115.62,35a7,7,0,0,0,0-9.9L102.89,12.38a7,7,0,0,0-9.9,0l-6.31,6.31a1,1,0,0,1-1.15.18,49.76,49.76,0,0,0-4.85-2,1,1,0,0,1-.68-.94V7a7,7,0,0,0-7-7H55a7,7,0,0,0-7,7v8.93a1,1,0,0,1-.68.94,49.9,49.9,0,0,0-4.85,2,1,1,0,0,1-1.15-.18L35,12.38a7,7,0,0,0-9.9,0L12.38,25.11a7,7,0,0,0,0,9.9l6.31,6.31a1,1,0,0,1,.18,1.15,49.76,49.76,0,0,0-2,4.85,1,1,0,0,1-.94.68H7a7,7,0,0,0-7,7V73a7,7,0,0,0,7,7h8.93a1,1,0,0,1,.94.68,49.9,49.9,0,0,0,2,4.85,1,1,0,0,1-.18,1.15L12.38,93a7,7,0,0,0,0,9.9l12.73,12.73a7,7,0,0,0,9.9,0l6.31-6.31a1,1,0,0,1,1.15-.18,49.76,49.76,0,0,0,4.85,2,1,1,0,0,1,.68.94V121a7,7,0,0,0,7,7H73a7,7,0,0,0,7-7v-8.93a1,1,0,0,1,.68-.94,49.9,49.9,0,0,0,4.85-2,1,1,0,0,1,1.15.18L93,115.62a7,7,0,0,0,9.9,0l12.73-12.73a7,7,0,0,0,0-9.9l-6.31-6.31a1,1,0,0,1-.18-1.15,49.76,49.76,0,0,0,2-4.85,1,1,0,0,1,.94-.68H121a7,7,0,0,0,7-7V55A7,7,0,0,0,121,48Zm1,25a1,1,0,0,1-1,1h-8.93a7,7,0,0,0-6.6,4.69,43.9,43.9,0,0,1-1.76,4.26,7,7,0,0,0,1.35,8l6.31,6.31a1,1,0,0,1,0,1.41L98.65,111.38a1,1,0,0,1-1.41,0l-6.31-6.31a7,7,0,0,0-8-1.35,43.88,43.88,0,0,1-4.27,1.76,7,7,0,0,0-4.68,6.6V121a1,1,0,0,1-1,1H55a1,1,0,0,1-1-1v-8.93a7,7,0,0,0-4.69-6.6,43.9,43.9,0,0,1-4.26-1.76,7,7,0,0,0-8,1.35l-6.31,6.31a1,1,0,0,1-1.41,0L16.62,98.65a1,1,0,0,1,0-1.41l6.31-6.31a7,7,0,0,0,1.35-8,43.88,43.88,0,0,1-1.76-4.27A7,7,0,0,0,15.93,74H7a1,1,0,0,1-1-1V55a1,1,0,0,1,1-1h8.93a7,7,0,0,0,6.6-4.69,43.9,43.9,0,0,1,1.76-4.26,7,7,0,0,0-1.35-8l-6.31-6.31a1,1,0,0,1,0-1.41L29.35,16.62a1,1,0,0,1,1.41,0l6.31,6.31a7,7,0,0,0,8,1.35,43.88,43.88,0,0,1,4.27-1.76A7,7,0,0,0,54,15.93V7a1,1,0,0,1,1-1H73a1,1,0,0,1,1,1v8.93a7,7,0,0,0,4.69,6.6,43.9,43.9,0,0,1,4.26,1.76,7,7,0,0,0,8-1.35l6.31-6.31a1,1,0,0,1,1.41,0l12.73,12.73a1,1,0,0,1,0,1.41l-6.31,6.31a7,7,0,0,0-1.35,8,43.88,43.88,0,0,1,1.76,4.27,7,7,0,0,0,6.6,4.68H121a1,1,0,0,1,1,1Z" />
  </svg>
)

export const PreviewIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size || height}
    role="preview"
    width={size || width}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M4.524 6.25a.75.75 0 0 1 .75-.75H18.73a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75H5.274a.75.75 0 0 1-.75-.75v-3.5Zm1.5.75v2H17.98V7H6.024Zm8.206 4.979a.75.75 0 0 0-.75.75v4.5c0 .414.335.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-4.5Zm.75 4.5v-3h3v3h-3ZM4.524 13.25a.75.75 0 0 1 .75-.75h5.976a.75.75 0 0 1 0 1.5H5.274a.75.75 0 0 1-.75-.75Zm.75 2.75a.75.75 0 0 0 0 1.5h5.976a.75.75 0 0 0 0-1.5H5.274ZM2 5.75A2.75 2.75 0 0 1 4.75 3h14.5A2.75 2.75 0 0 1 22 5.75v12.5A2.75 2.75 0 0 1 19.25 21H4.75A2.75 2.75 0 0 1 2 18.25V5.75ZM4.75 4.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H4.75Z" />
  </svg>
)

export const VideoIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size || height}
    role="video icon"
    width={size || width}
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M20 3a2 2 0 0 1 1.995 1.85L22 5v14a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V5a2 2 0 0 1 1.85-1.995L4 3h16Zm0 2H4v14h16V5Zm-9.66 2.638l.518.23l.338.16l.387.19l.43.218l.47.25l.507.28l.266.152l.518.305l.474.292l.43.273l.38.253l.48.33l.364.263l.095.07a1.234 1.234 0 0 1 0 1.98l-.323.235l-.44.308l-.356.239l-.405.263l-.453.283l-.499.3l-.534.309l-.509.282l-.471.25l-.43.22l-.386.188l-.622.288l-.23.1a1.234 1.234 0 0 1-1.714-.99l-.058-.565l-.032-.374l-.042-.664l-.023-.508l-.015-.555a32.12 32.12 0 0 1-.004-.294l-.002-.305c0-.207.002-.407.006-.6l.015-.555l.023-.507l.027-.457l.03-.401l.075-.744a1.235 1.235 0 0 1 1.715-.992Zm.611 2.501l-.436-.218l-.029.487l-.022.551l-.013.61l-.002.325l.002.325l.013.609l.01.283l.026.52l.015.235l.434-.218l.487-.256l.535-.294l.284-.162l.551-.326l.494-.306l.436-.28l.196-.13l-.407-.27l-.466-.294a30.094 30.094 0 0 0-.803-.48l-.283-.161l-.534-.294l-.488-.256Z" /></g>
  </svg>
)

export const PdfIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size || height}
    role="video icon"
    width={size || width}
    viewBox="0 0 15 15"
    {...props}
  >
    <path d="M2.5 6.5V6H2v.5h.5Zm4 0V6H6v.5h.5Zm0 4H6v.5h.5v-.5Zm7-7h.5v-.207l-.146-.147l-.354.354Zm-3-3l.354-.354L10.707 0H10.5v.5ZM2.5 7h1V6h-1v1Zm.5 4V8.5H2V11h1Zm0-2.5v-2H2v2h1Zm.5-.5h-1v1h1V8Zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 5 7.5H4ZM3.5 7a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 3.5 6v1ZM6 6.5v4h1v-4H6Zm.5 4.5h1v-1h-1v1ZM9 9.5v-2H8v2h1ZM7.5 6h-1v1h1V6ZM9 7.5A1.5 1.5 0 0 0 7.5 6v1a.5.5 0 0 1 .5.5h1ZM7.5 11A1.5 1.5 0 0 0 9 9.5H8a.5.5 0 0 1-.5.5v1ZM10 6v5h1V6h-1Zm.5 1H13V6h-2.5v1Zm0 2H12V8h-1.5v1ZM2 5V1.5H1V5h1Zm11-1.5V5h1V3.5h-1ZM2.5 1h8V0h-8v1Zm7.646-.146l3 3l.708-.708l-3-3l-.708.708ZM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5h1ZM1 12v1.5h1V12H1Zm1.5 3h10v-1h-10v1ZM14 13.5V12h-1v1.5h1ZM12.5 15a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v1ZM1 13.5A1.5 1.5 0 0 0 2.5 15v-1a.5.5 0 0 1-.5-.5H1Z" />
  </svg>
)
