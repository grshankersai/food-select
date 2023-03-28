import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Typography } from "@mui/material";

function App() {
  const breakfast = [
    "Masala Dosa + chutney",
    "Idly Vada Sambar Chutney",
    "Pav Bhaji",
    "Poha",
    "Poori-Chole",
    "Poori-alu",
    "Alu-Tost",
    "Alu-Parata",
    "Upma",
    "Bread-Omlete",
    "Bombay Tost",
  ];
  const Lunch = [
    "Rasam Rice + Artikai",
    "Curd Rice Alu fry",
    "Plain Pappu + Meal Maker Vada",
    "Veg Fried Rice + Paneer Kurma",
    "Papu + Bendi Fry",
    "Papu+donda Fry",
    "Red-Chicken Gravy",
    "Chicken Kurma",
    "Rasam + Fish fry",
    "Mutton Keema",
    "Mutton Brain",
    "Mutton Doasakai",
  ];
  const Snacks = [
    "Vada Pav",
    "Pani-Puri",
    "Alu-Parata",
    "Paneer Pakoda",
    "Veg Cutlet",
  ];
  const [day, setDay] = React.useState<number>();

  const [result, setResult] = React.useState<Boolean>(false);
  const handleChange = (event: any) => {
    setDay(event.target.value);
  };

  const [menu, setMenu] = React.useState<{
    breakfast: string;
    lunch: string;
    snacks: string;
  }>();

  const getItems = () => {
    if (day === 4 || day === 6) {
      let breakfast_ = breakfast.splice(0, 9);
      let lunch_ = Lunch.splice(0, 6);

      setMenu({
        breakfast: breakfast_.at(
          Math.floor(Math.random() * breakfast_.length)
        )!,
        lunch: lunch_.at(Math.floor(Math.random() * lunch_.length))!,
        snacks: Snacks.at(Math.floor(Math.random() * Snacks.length))!,
      });
    } else if (day === 7) {
      let lunch_ = Lunch.splice(6, Lunch.length);

      setMenu({
        breakfast: breakfast.at(Math.floor(Math.random() * breakfast.length))!,
        lunch: lunch_.at(Math.floor(Math.random() * lunch_.length))!,
        snacks: Snacks.at(Math.floor(Math.random() * Snacks.length))!,
      });
    } else {
      setMenu({
        breakfast: breakfast.at(Math.floor(Math.random() * breakfast.length))!,
        lunch: Lunch.at(Math.floor(Math.random() * Lunch.length))!,
        snacks: Snacks.at(Math.floor(Math.random() * Snacks.length))!,
      });
    }

    setResult(true);
  };
  return (
    <Box style={{ height: "100vh", width: "100vw" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ width: "300px", margin: "50px 0px 0px 10px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Day</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={day}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>Monday</MenuItem>
              <MenuItem value={2}>Tuesday</MenuItem>
              <MenuItem value={3}>Wednesday</MenuItem>
              <MenuItem value={4}>Thursday</MenuItem>
              <MenuItem value={5}>Friday</MenuItem>
              <MenuItem value={6}>Saturday</MenuItem>
              <MenuItem value={7}>Sunday</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box style={{ margin: "50px 0px 0px 10px", width: "100%" }}>
          <Button variant="contained" onClick={getItems}>
            Get Menu
          </Button>
        </Box>
      </Box>
      {result && (
        <Box style={{ marginTop: "30px" }}>
          <Box
            style={{
              height: "100px",
              width: "100vw",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h6" gutterBottom style={{ width: "50%" }}>
              BreakFast :
            </Typography>
            <Typography variant="h6" gutterBottom style={{ width: "50%" }}>
              {menu?.breakfast}
            </Typography>
          </Box>

          <Box
            style={{
              height: "100px",
              width: "100vw",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h6" gutterBottom style={{ width: "50%" }}>
              Lunch :
            </Typography>
            <Typography variant="h6" gutterBottom style={{ width: "50%" }}>
              {menu?.lunch}
            </Typography>
          </Box>
          <Box
            style={{
              height: "100px",
              width: "100vw",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h6" gutterBottom style={{ width: "50%" }}>
              Snacks :
            </Typography>
            <Typography variant="h6" gutterBottom style={{ width: "50%" }}>
              {menu?.snacks}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default App;
