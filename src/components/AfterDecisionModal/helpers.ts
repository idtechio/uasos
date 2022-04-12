interface parseAndSplitContentInterface {
  [name: string]: string;
}

export const parseAndSplitContent = (
  text: string,
  keywords: parseAndSplitContentInterface
): parseAndSplitContentInterface => {
  const removeTag = /\s<\w{0,3}.+>\s+/;

  const splittedByDot = text.split(".");
  splittedByDot[2] = splittedByDot[2].replace(removeTag, "");

  const splittedByAccepted = splittedByDot[0].split(keywords?.accepted);
  const splittedByCancellation = splittedByDot[2].split(keywords?.cancellation);

  return {
    acceptedBefore: splittedByAccepted[0],
    acceptedAfter: splittedByAccepted[1],
    cancellationBefore: splittedByCancellation[0],
    cancellationAfter: splittedByCancellation[1],
    acceptedSecondSentence: splittedByDot[1],
    cancellationSecondSentence: splittedByDot[3],
  };
};
