let guest = 0;

function Cup() {
  // eslint-disable-next-line react-hooks/globals
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}



export default function Purity() {
  return <TeaSet />;
}