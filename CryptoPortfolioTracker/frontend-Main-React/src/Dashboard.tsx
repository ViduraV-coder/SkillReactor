import { AddAsset, GetAsset, DeleteAsset } from "./services/Dashboard.services";
import { useState } from "react";

import "./Dashboard.css";

function Dashboard(data: any) {
  const [token, setToken] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error_messsage, setErrorMesssage] = useState("");
  const [asset_button_value, setAssetButtonValue] = useState("Add Asset");
  const [asset_button_id, setAssetButtonID] = useState("dashboard_add_button");
  const [dataSource, setDataSource] = useState(data.data);

  document.getElementById("logout_link").style.display = "block";

  async function handleAddAsset(event: any) {
    event.preventDefault();
    if (
      token === null ||
      token === "" ||
      quantity === null ||
      quantity === ""
    ) {
      setErrorMesssage ("Error: Please fill all the details");
    } else {
      await AddAsset({
        username: data.username,
        token: token,
        quantity: +quantity,
      });
      setToken("");
      setQuantity("");
      setDataSource(await GetAsset(data.username));
    }
  }

  async function handleDeleteAsset(event: any, token: string, quantity: number, row: number) {
    event.preventDefault();
    if(await DeleteAsset(data.username, token, quantity)){
      const updatedUsers = dataSource.filter((dataSource: any, idx: number) => idx !== row);
      setDataSource( updatedUsers );
    }
  }

  async function handleEditAsset(event: any, token: string, quantity: number) {
    event.preventDefault();
    setToken(token);
    setQuantity(quantity.toString());
    setAssetButtonValue("Save Asset");   
    setAssetButtonID("dashboard_save_button");
  }

  return (
    <div id="Dashboard">
      <h1 id="dashboard_heading">Dashboard</h1>
      <br />
      <table id="assets_table">
        <thead>
          <tr>
            <th className="table_heading">Token</th>
            <th className="table_heading">Qty. Owned</th>
            <th className="table_heading">Price</th>
            <th className="table_heading">Total Value</th>
            <th className="table_heading">Allocation</th>
            <th className="table_heading">Actions</th>
          </tr>
        </thead>
        <tbody id="table_body">
          {dataSource.map((item: any, row: number) => (
            <tr key={row}>
              <td className="table_data">{item.token}</td>
              <td className="table_data">{item.quantity}</td>
              <td className="table_data">${item.price}</td>
              <td className="table_data">${item.totalValue}</td>
              <td className="table_data">{item.allocation}%</td>
              <td className="table_data">
                <button className="delete_button" onClick={(event)=>{handleDeleteAsset(event, item.token, +item.quantity, row)}}>delete</button>
                <button className="edit_button" onClick={(event)=>{handleEditAsset(event, item.token, +item.quantity)}}>edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <form id="add_asset_form" onSubmit={handleAddAsset}>
        <label id="token_label" htmlFor="dashboard_token">
          Token:{" "}
        </label>
        <input
          id="dashboard_token"
          type="text"
          onChange={(event) => (setToken(event.target.value))}
          value={token}
        />
        <label id="quantity_label" htmlFor="dashboard_quantity">
          Quantity:{" "}
        </label>
        <input
          id="dashboard_quantity"
          type="text"
          onChange={(event) => (setQuantity(event.target.value))}
          value={quantity}
        />
        <div id="asset_button_div">
          <button id={asset_button_id} type="submit">
            {asset_button_value}
          </button>
        </div>
      </form>
      <br />
      <label id="add_asset_error">{error_messsage}</label>
    </div>
  );
}

export default Dashboard;
