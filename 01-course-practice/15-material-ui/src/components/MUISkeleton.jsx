import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Honda from "../images/Honda.jpg";

function MUISkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={250}
          height={150}
        />
      ) : (
        <img src={Honda} alt="Honda" width={250} height={150} />
      )}
    </div>
  );
}

export default MUISkeleton;
