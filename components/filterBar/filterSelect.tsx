import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const BasicSelect = ({
  anyPrefix,
  onPrefixFilters,
  anyDept,
  onDeptFilters,
}: {
  anyPrefix: Array<string>;
  onPrefixFilters: Function;
  anyDept: Array<string>;
  onDeptFilters: Function;
}) => {
  const [filter, setFilters] = useState({
    prefix: [],
    dept: [],
    Name: "",
    SureName: "",
  });

  const handleChange = (field: any) => (event: any) => {
    const { value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
    switch (field) {
      case "prefix":
        onPrefixFilters(value);
        break;
      case "dept":
        onDeptFilters(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ p: 0, mb: 0, minWidth: 100 }}>
        <InputLabel id="demo-multiple-chip-label">คำนำหน้า</InputLabel>
        <Select
          multiple
          labelId="demo-multiple-chip-label"
          id="prefix"
          value={filter.prefix}
          onChange={handleChange("prefix")}
          renderValue={(selected) => (
            <Stack direction="row" spacing={1}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Stack>
          )}
          native={false}
        >
          {anyPrefix &&
            anyPrefix.map((prefix) => (
              <MenuItem key={prefix} value={prefix}>
                {prefix}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ p: 0, mb: 0, minWidth: 100 }}>
        <InputLabel id="demo-multiple-chip-label">แผนก</InputLabel>
        <Select
          multiple
          labelId="demo-multiple-chip-label"
          id="dept"
          value={filter.dept}
          onChange={handleChange("dept")}
          renderValue={(selected) => (
            <Stack direction="row" spacing={1}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Stack>
          )}
          native={false}
        >
          {anyDept &&
            anyDept.map((dept) => (
              <MenuItem key={dept} value={dept}>
                {dept}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};