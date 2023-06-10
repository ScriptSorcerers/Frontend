import React from "react";
import "./SubmitComponent.css";
const SubmitComponent = ({ projectSettings, databaseSettings, globalArray,models }) => {
  return (
    <div className="submit-component">
      <table className="submit-table">
        <thead>
          <tr>
            <th colSpan={2}>
              <h2>Database Settings</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Database Name:</strong></td>
            <td>{databaseSettings.dbname}</td>
          </tr>
          <tr>
            <td><strong>Database Type:</strong></td>
            <td>{databaseSettings.dbtype}</td>
          </tr>
          <tr>
            <td><strong>Database Host:</strong></td>
            <td>{databaseSettings.dbhost}</td>
          </tr>
          <tr>
            <td><strong>Database Port:</strong></td>
            <td>{databaseSettings.dbport}</td>
          </tr>
          <tr>
            <td><strong>Database Username:</strong></td>
            <td>{databaseSettings.dbusername}</td>
          </tr>
          <tr>
            <td><strong>Database Password:</strong></td>
            <td>{databaseSettings.dbpassword}</td>
          </tr>
        </tbody>
      </table>

      {globalArray.map((table, index) => (
        <table key={index} className="submit-table">
          <thead>
            <tr>
              <th colSpan={2}>
                <h2>{models[index]}</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
            {table.map((field, index) => (
              <table key={index} >
                <thead>
                  <tr>
                    <th colSpan={2}>
                      <h3>Field {index + 1}</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <React.Fragment key={index}>
                    <tr>
                      <td><strong>Field Name:</strong></td>
                      <td>{field.name}</td>
                    </tr>
                    <tr>
                      <td><strong>Field Type:</strong></td>
                      <td>{field.type}</td>
                    </tr>
                    <tr>
                      <td><strong>Field Required:</strong></td>
                      <td>{field.required.toString()}</td>
                    </tr>
                    <tr>
                      <td><strong>Field Unique:</strong></td>
                      <td>{field.unique.toString()}</td>
                    </tr>
                    <tr>
                      <td><strong>Field Default:</strong></td>
                      <td>{field.default}</td>
                    </tr>
                  </React.Fragment>
                </tbody>
              </table>
            ))}
            </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default SubmitComponent;
