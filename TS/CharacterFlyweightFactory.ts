import { CharacterFlyweight } from "./CharacterFlyweight";

// Flyweight Factory
export class CharacterFlyweightFactory {
    private flyweights: { [key: string]: CharacterFlyweight } = {};

    getCharacterFlyweight(fontFamily: string, fontSize: number, color: string): CharacterFlyweight {
        const key = `${fontFamily}-${fontSize}-${color}`;
        if (!this.flyweights[key]) {
            this.flyweights[key] = new CharacterFlyweight(fontFamily, fontSize, color);
        }
        return this.flyweights[key];
    }
}
