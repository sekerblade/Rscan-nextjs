import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

export const BasicSelect = ({anyPrefix, onPrefixFilters}: {anyPrefix: Array<string>, onPrefixFilters: Function}) => {
  const [filter, setFilters] = useState({
    prefix: "",
    Name: "",
    SureName: "",
  });

  const handleChange = (field: any) => (event:any) => {
    const { value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
    switch (field) {
      case "prefix":
        if (value === "") {
          onPrefixFilters(""); // แสดงรายการพนักงานทั้งหมด
        } else {
          onPrefixFilters(value);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          คำนำหน้า
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="prefix"
          onChange={handleChange("prefix")}
          autoWidth
          label="คำนำหน้า"
        >
          <MenuItem value="">
          <em>ทั้งหมด</em>
          </MenuItem>
          {anyPrefix && anyPrefix.map((prefix) => (
            <MenuItem key={prefix} value={prefix}>
              {prefix}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};