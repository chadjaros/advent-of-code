export class DecMath {
    static pow10(n: number): number {
        if (n === 1) {
            return 1;
        }
        return 10 * this.pow10(n - 1);
    }

    static countDigits(n: number): number {
        if (n === 0) {
            return 0;
        }
        return 1 + this.countDigits(Math.floor(n / 10));
    }
}
