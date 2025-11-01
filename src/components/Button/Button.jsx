export const Button = ({ classOfButton, handleClick, children }) => {
  return (
    <button className={classOfButton} onClick={handleClick}>{children}</button>
  );
}
