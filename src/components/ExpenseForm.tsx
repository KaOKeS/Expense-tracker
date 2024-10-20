import React from "react";
import { categories } from "../App";

const ExpenseForm = () => {
  return (
    <>
      <form action="submit">
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input id="description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Amount
          </label>
          <input id="amount" type="number" className="form-control"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Category
          </label>
          <select id="category" className="form-select">
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </form>
      <button className="btn btn-primary">Submit</button>
    </>
  );
};

export default ExpenseForm;
