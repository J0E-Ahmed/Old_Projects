import { CardService } from './card.service';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    getAllItems(): string;
}
