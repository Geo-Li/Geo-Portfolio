import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { env } from "@/env";

export function useValidateGeo(setCanEdit) {
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const secretKey = urlParams.get("key");
    if (secretKey === env.GEO_KEY) {
      setCanEdit(true);
    }
  }, [location]);
}
