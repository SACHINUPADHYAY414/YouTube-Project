import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
//   <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
//   <Link to="/" style={{ display: "flex", alignItems: "center", color: '#fff', textDecoration: 'none' }}>
//     <img src={logo} alt="logo" height={45} style={{ marginRight: '10px' }} />
//     <h2 class="" style={{ color: '#fff' }}>Movies4u</h2>
//   </Link>
//   <SearchBar />
// </Stack
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
