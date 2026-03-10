import React from "react";
import SkeletonLoader from "@/components/ReUsables/SkeletonLoader";

const loading = () => {
  return (
    <div>
      <SkeletonLoader width="100%" height="100%" animation="wave" />
    </div>
  );
};

export default loading;
