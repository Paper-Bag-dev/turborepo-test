"use client"

export const Signup = () => {
  return (
    <div style={{width:"100vw", justifyContent: "center", display: "flex"}}>
      <div style={{ width: 400, border: "1px solid black" }}>
        <input type="text" placeholder="email"></input>
        <input type="password" placeholder="email"></input>
        <button>Sign</button>
      </div>
    </div>
  );
};
