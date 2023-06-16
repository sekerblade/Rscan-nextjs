import { useState } from "react";

const FilterBar = ({
  genders,
  onGenderFilter,
}) => {
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    gender: "",
    from: "",
    to: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;
      case "email":
        onEmailFilter(value);
        break;
      case "gender":
        onGenderFilter(value);
        break;
      case "from":
        onDateFilter(value, "from");
        break;
      case "to":
        break;
      default:
        break;
    }
  };
  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="gender">Gender</label>
        <select
          className="form-control"
          id="gender"
          onChange={handleInput("gender")}
        >
          <option value="">Select</option>
          {genders.map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;