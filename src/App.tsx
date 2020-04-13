import React from "react";
import { AppProvider } from "./store/store";
import CardInput from "./components/CardInput";
import CardDetails from "./components/CardDetails";

const CardApp = () => (
  <>
    <CardInput />
    <CardDetails />
  </>
);

const App = () => (
  <AppProvider>
    <CardApp />
  </AppProvider>
);

export default App;
