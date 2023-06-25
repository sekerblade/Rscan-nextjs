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

export const BasicSelect = ({ anyPrefix, onPrefixFilters }: { anyPrefix: Array<string>, onPrefixFilters: Function }) => {
  const [filter, setFilters] = useState({
    prefix: [],
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
        if (value.length === 0) {
          onPrefixFilters([]); // แสดงรายการพนักงานทั้งหมดเมื่อไม่มีการเลือกคำนำหน้า
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
      <FormControl variant="standard" sx={{ p:0 ,mb: 0, minWidth: 100 } }>
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
          native={false}// เปลี่ยนไอคอนเป็น CheckIcon
        >
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