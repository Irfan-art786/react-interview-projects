import { useEffect, useState } from "react";

export function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("");
  const [color, setColor] = useState("#000000");

  function createRandomLength(length) {
    return Math.floor(Math.random() * length);
  }

  const hundleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "f"];
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
      hexCode += hex[createRandomLength(hex.length)];
    }

    setColor(hexCode);
  };

  const hundleCreateRandomRgbColor = () => {
    const r = createRandomLength(256);
    const g = createRandomLength(256);
    const b = createRandomLength(256);

    setColor(`rgb(${r},${b},${g})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") hundleCreateRandomRgbColor();
    else hundleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        textAlign: "center",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "rgb"
            ? hundleCreateRandomRgbColor
            : hundleCreateRandomHexColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
          color: "white",
          fontSize: "2rem",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Code" : "HEX Code"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
