export enum Language { Hebrew, English }

export class WordsCategory {
    name: string;
    id: number;
    lastModified: Date;
    sourceLanguage: Language;
    destinationLanguage: Language;
    wordsMap: Map<string, string>

    /**
     *
     */
    constructor(name: string, id: number, lastModified: Date, sourceLanguage: Language, destinationLanguage: Language, wordsMap: Map<string, string>) {
        this.name = name;
        this.id = id;
        this.lastModified = lastModified;
        this.sourceLanguage = sourceLanguage;
        this.destinationLanguage = destinationLanguage;
        this.wordsMap = wordsMap;

    }
}
