import React from "react";

function Header({ number, increment }) {
  console.log("Header Component Re-rendered");

  return (
    <div>
      Header - {number}
      <br />
      <br />
      <button onClick={increment}>Click</button>
      {/* <code>{JSON.stringify(data)}</code> */}
    </div>
  );
}

// gereksiz render engellenmek için React.memo() kullanılmalı
export default React.memo(Header);
