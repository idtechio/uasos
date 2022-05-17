import { AfterDecisionModal } from "../../../src/components/AfterDecisionModal";
import { useEffect, useState } from "react";
import { ConfirmModalProps } from "./types";

const ConfirmModal = ({
  matchesId,
  listingId,
  isAccepted,
}: ConfirmModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showError, setShowError] = useState<boolean>(false);

  const handleMatch = async (
    matchesId: string,
    listingId: string,
    isAccepted: boolean
  ) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}api/matches/confirm`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          matches_id: matchesId,
          listing_id: listingId,
          accepted: isAccepted ? "TRUE" : "FALSE",
        }),
      }
    );

    if (res) {
      setIsLoading(false);
      if (res.status !== 200) {
        setShowError(true);
      }
    }
  };

  useEffect(() => {
    if (matchesId && listingId) {
      handleMatch(matchesId, listingId, isAccepted);
    } else {
      setIsLoading(false);
      setShowError(true);
    }
  }, [matchesId, listingId, isAccepted]);

  return (
    <>
      {isLoading && <>Loading...</>}
      {!isLoading && (
        <AfterDecisionModal isAccepted={isAccepted} showError={showError} />
      )}
    </>
  );
};

export default ConfirmModal;
