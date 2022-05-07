import "./App.css";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import expand from "./components/JSONData/expansions.json";

export default function App(props) {
  const [panelOpen, setpanelOpen] = useState([]);

  function hPanelClick(event) {
    if (event === panelOpen.event) {
      event = "";
    }
    setpanelOpen({ event });
    console.log(panelOpen);
  }

  //expander name, heading and subheading
  const Exp_Headings = (exp, head, subhead) => {
    return (
      <>
        <Typography key={exp + "TH"} sx={{ width: "33%", flexShrink: 0 }}>
          {head}
        </Typography>
        <Typography key={exp + "TS"} sx={{ color: "text.secondary" }}>
          {subhead}
        </Typography>
      </>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>FOJSAN Duck Eggs</h1>
      </header>
      <body>
        {expand.map((exp) => {
          return (
            <Accordion
              key={exp.name + "A"}
              style={{ width: 1100 }}
              expanded={panelOpen.event === exp.name ? true : false}
            >
              <AccordionSummary
                key={exp.name + "Summary"}
                expandIcon={
                  <ExpandMoreIcon onClick={() => hPanelClick(exp.name)} />
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                {Exp_Headings(exp.name, exp.header, exp.subheader)}
              </AccordionSummary>
              <AccordionDetails key={exp.name + "DT"}>
                <Typography>{exp.content}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </body>
    </div>
  );
}
