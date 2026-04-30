import type { EventType } from "@/constants/event-type.constants";
import type { GenderSeatsLeft, SeatsLeft } from "@/types/event.type";

export const isGenderSeatsLeft = (
  seatsLeft: SeatsLeft
): seatsLeft is GenderSeatsLeft =>
  typeof seatsLeft === "object" && seatsLeft !== null;

export const getTotalSeatsLeft = (seatsLeft: SeatsLeft) =>
  isGenderSeatsLeft(seatsLeft) ? seatsLeft.total : seatsLeft;

export const getCurrentParticipants = (
  maxParticipants: number,
  seatsLeft: SeatsLeft
) => {
  const capacity = Math.max(maxParticipants, 0);
  const currentParticipants = capacity - getTotalSeatsLeft(seatsLeft);

  return Math.max(0, Math.min(capacity, currentParticipants));
};

export const formatParticipationText = (
  eventType: EventType,
  seatsLeft: SeatsLeft,
  maxParticipants: number
) => {
  const capacity = Math.max(maxParticipants, 0);

  if (eventType === "FUNNECTION" && isGenderSeatsLeft(seatsLeft)) {
    const femaleCapacity = Math.ceil(capacity / 2);
    const maleCapacity = Math.floor(capacity / 2);
    const femaleParticipants = Math.max(
      0,
      Math.min(femaleCapacity, femaleCapacity - seatsLeft.female)
    );
    const maleParticipants = Math.max(
      0,
      Math.min(maleCapacity, maleCapacity - seatsLeft.male)
    );

    return `여성 ${femaleParticipants}/${femaleCapacity}, 남성 ${maleParticipants}/${maleCapacity}`;
  }

  return `${getCurrentParticipants(maxParticipants, seatsLeft)}/${capacity}`;
};
