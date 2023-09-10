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
