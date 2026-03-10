import React from "react";
import SkeletonLoader from "@/components/ReUsables/SkeletonLoader";

const loading = () => {
  return (
    <div style={{ width: "100vw", height: "100dvh" }}>
      <SkeletonLoader width="100%" height="100%" animation="wave" />
    </div>
  );
};

export default loading;
