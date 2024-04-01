import { CharacterFormatting } from "./CharacterFormatting";

// CharacterFlyweight (Concrete Flyweight)
export class CharacterFlyweight implements CharacterFormatting {
    private fontFamily: string;
    private fontSize: number;
    private color: string;

    constructor(fontFamily: string, fontSize: number, color: string) {
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
        this.color = color;
    }

    getFontFamily(): string {
        return this.fontFamily;
    }

    getFontSize(): number {
        return this.fontSize;
    }

    getColor(): string {
        return this.color;
    }
}
