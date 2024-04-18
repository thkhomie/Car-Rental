import { useState } from "react";
import { FAQ } from "../data/Data";

export default function Index() {
  const [select, setSelect] = useState(null);
  const [btnEnable, setBtnEnable] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleClick(getCurrentId) {
    // A answer is closed when it is clicked at question again
    setSelect(getCurrentId === select ? null : getCurrentId);
  }

  function handleMultiClick(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  return (
    <section id="faq" className="p-16">
      <h2 className="text-heading font-bold text-2xl md:text-4xl text-center m-3 mb-12">FAQ</h2>
      <div>
        {FAQ && FAQ.length > 0 ? (
          FAQ.map((dataItem, index) => (
            <div
              key={index}
              className="border-b border-gray-200"
            >
              <div
                className="flex justify-between items-center py-4 px-6 cursor-pointer "
                onClick={btnEnable ? () => handleMultiClick(dataItem.id) : () => handleSingleClick(dataItem.id)}
              >
                <h3 className="text-lg font-semibold text-heading">{dataItem.question}</h3>
                <span>{btnEnable ? (multiple.indexOf(dataItem.id) !== -1 ? '-' : '+') : (select === dataItem.id ? '-' : '+')}</span>
              </div>
              {((btnEnable && multiple.indexOf(dataItem.id) !== -1) || (!btnEnable && select === dataItem.id)) && (
                <div className="py-2 px-6 text-y text-darkBlue">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No Data Found !!</div>
        )}
      </div>
    </section>
  );
}
