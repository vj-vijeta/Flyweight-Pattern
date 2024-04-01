import { CharacterFlyweightFactory } from "./CharacterFlyweightFactory";

// Client (Text Editor)
export class TextEditor {
    private characterFormattingFactory: CharacterFlyweightFactory;

    constructor() {
        this.characterFormattingFactory = new CharacterFlyweightFactory();
    }

    formatCharacter(char: string, fontFamily: string, fontSize: number, color: string): void {
        const formatting = this.characterFormattingFactory.getCharacterFlyweight(fontFamily, fontSize, color);
        console.log(`Character '${char}' formatted with: Font Family - ${formatting.getFontFamily()}, Font Size - ${formatting.getFontSize()}, Color - ${formatting.getColor()}`);
        // Logic to associate the flyweight with the character being displayed
    }
}
