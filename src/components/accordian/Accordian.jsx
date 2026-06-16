import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function hundleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function hundleMultiSelection(getCurrentid) {
    let copyMultiple = [...multiple];
    const finIndexOfCurrentId = copyMultiple.indexOf(getCurrentid);
    if (finIndexOfCurrentId === -1) copyMultiple.push(getCurrentid);
    else copyMultiple.splice(finIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  console.log(multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? "Disable Multiple Selection"
          : "Enable Multiple Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0
          ? data.map((dataItem) => {
              return (
                <div key={dataItem.id} className="item">
                  <div
                    className="title"
                    onClick={
                      enableMultiSelection
                        ? () => hundleMultiSelection(dataItem.id)
                        : () => hundleSingleSelection(dataItem.id)
                    }
                  >
                    {dataItem.question}
                    <span>+</span>
                  </div>
                  {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1 ? (
                    <div className="content"> {dataItem.answer} </div>
                  ) : null}
                </div>
              );
            })
          : "No data found!"}
      </div>
    </div>
  );
}
