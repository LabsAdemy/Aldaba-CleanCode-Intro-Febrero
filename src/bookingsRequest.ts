import { BookingsRequestDTO } from "./bookingsRequestDTO";
import { CreditCard } from "./creditCard";

export class BookingsRequest {
  travelerId: string;
  tripId: string;
  passengersCount: number;
  card: CreditCard;
  hasPremiumFoods: boolean;
  extraLuggageKilos: number;

  constructor(bookingsRequestDTO: BookingsRequestDTO) {
    if (this.hasEntitiesId(bookingsRequestDTO) === false) {
      throw new Error("Invalid parameters");
    }
    if (bookingsRequestDTO.passengersCount <= 0) {
      bookingsRequestDTO.passengersCount = 1;
    }
    this.travelerId = bookingsRequestDTO.travelerId;
    this.tripId = bookingsRequestDTO.tripId;
    this.passengersCount = bookingsRequestDTO.passengersCount;
    this.card = new CreditCard(
      bookingsRequestDTO.cardNumber,
      bookingsRequestDTO.cardExpiry,
      bookingsRequestDTO.cardCVC,
    );
    this.hasPremiumFoods = bookingsRequestDTO.hasPremiumFoods;
    this.extraLuggageKilos = bookingsRequestDTO.extraLuggageKilos;
  }

  private hasEntitiesId(bookingsRequestDTO: BookingsRequestDTO): boolean {
    return bookingsRequestDTO.travelerId !== "" && bookingsRequestDTO.tripId !== "";
  }
}
