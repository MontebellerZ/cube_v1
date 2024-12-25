type RotateVariants = "'" | "2";

class CubeSide {
    readonly side: number[][];

    constructor(size: number, color: number) {
        this.side = Array.from({ length: size }, () => new Array(size).fill(color));
    }
}

class Cube {
    private readonly SIZE: number;

    private readonly FACE: CubeSide;
    private readonly BACK: CubeSide;
    private readonly UP: CubeSide;
    private readonly DOWN: CubeSide;
    private readonly LEFT: CubeSide;
    private readonly RIGHT: CubeSide;

    private F(variant?: RotateVariants) {}
    private B(variant?: RotateVariants) {}
    private U(variant?: RotateVariants) {}
    private D(variant?: RotateVariants) {}
    private L(variant?: RotateVariants) {}
    private R(variant?: RotateVariants) {}
    private M(variant?: RotateVariants) {}
    private E(variant?: RotateVariants) {}
    private S(variant?: RotateVariants) {}
    private X(variant?: RotateVariants) {}
    private Y(variant?: RotateVariants) {}
    private Z(variant?: RotateVariants) {}

    constructor(size: number) {
        this.SIZE = size;

        this.FACE = new CubeSide(this.SIZE, 1);
        this.BACK = new CubeSide(this.SIZE, 2);
        this.UP = new CubeSide(this.SIZE, 3);
        this.DOWN = new CubeSide(this.SIZE, 4);
        this.LEFT = new CubeSide(this.SIZE, 5);
        this.RIGHT = new CubeSide(this.SIZE, 6);
    }

    move() {}
}

export default Cube;
