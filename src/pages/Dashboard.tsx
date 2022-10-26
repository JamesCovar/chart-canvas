import React from "react";
import CanvasChart from "../components/CanvasChart/CanvasChart";
import Grid from "../components/Grid/Grid";
import Modal from "../components/Modal/Modal";

export default function Dashboard() {
  return (
    <>
      <Modal>
        <Grid grid layoutName="dashboard-layout">
          <Grid item>
            <h1>Auto Generated Chart</h1>
            <span> Subtitle of generated chart </span>
          </Grid>
        </Grid>
      </Modal>
      <Grid grid layoutName="dashboard-layout">
        <Grid item>
          <CanvasChart></CanvasChart>
        </Grid>
      </Grid>
    </>
  );
}
