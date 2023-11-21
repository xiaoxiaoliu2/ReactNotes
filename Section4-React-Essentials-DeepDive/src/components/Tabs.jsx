export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {  // set multiple slots in components
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}