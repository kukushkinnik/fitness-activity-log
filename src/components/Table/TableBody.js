import React from "react";
import TotalCal from "../TotalCal";
import TotalTime from "../TotalTime";

const TableBody = ({ data, del }) => {
  return (
    <tbody>
      {data.map((element) => {
        return (
          <>
            <tr key={element.id}>
              <td>{element.date}</td>
              <td>{element.time}</td>
              <td>
                {element.calor}
                <button onClick={() => del(element.id)}>X</button>
              </td>
            </tr>
          </>
        );
      })}

      <tr>
        <th>Total</th>
        <td>
          <TotalTime data={data} />
        </td>
        <td>
          {" "}
          <TotalCal data={data} />
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
