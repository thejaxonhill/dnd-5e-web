declare module '@3d-dice/dice-box' {
    export interface DiceBoxOptions {
        id?: string;
        // Add more options as you discover them (theme, sound, etc.)
        assetPath: string;
        container?: string
        origin?: string;
        theme?: string;
        [key: string]: unknown;
    }

    export interface DiceRollResult {
        data: any,
        dieType: string
        groupId: number
        rollId: number
        sides: number
        theme: string
        themeColor: string
    }

    export default class DiceBox {
        constructor(options?: DiceBoxOptions);
        clear(): void;

        /**
         * Many libs are sync; some return a Promise. Allow both.
         */
        init(): Promise<void>;

        /**
         * Roll notation like "2d20".
         */
        roll(notation: string, options?: {theme:string, newStartPoint:boolean}): Promise<DiceRollResult>;
    }
}