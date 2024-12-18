import React from "react";
import { getAssetImg } from "../../../../Assets";

function Index() {
  return (
    <div>
      Index <img src={getAssetImg("checked-secondary")} />{" "}
    </div>
  );
}

export default Index;
