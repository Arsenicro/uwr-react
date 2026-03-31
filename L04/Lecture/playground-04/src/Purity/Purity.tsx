function Cup({ guest }: { guest: number }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  const cups = [];

  for (let i = 1; i <= 3; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }

  return (
    <>
      {cups}
    </>
  );
}



export default function Purity() {
  return <TeaSet />;
}