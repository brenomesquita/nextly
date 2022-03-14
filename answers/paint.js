let screen = [
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '#', '.'],
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '.', '.'],
];
let MAX_X = screen.length;
let MAX_Y = screen[0].length;
function floodFillUtil(screen, { x, y }, prevColor, newColor) {
    if (x < 0 || x >= MAX_X || y < 0 || y >= MAX_Y) return;
    if (screen[x][y] !== prevColor) return;
    screen[x][y] = newColor;
    floodFillUtil(screen, { x: x + 1, y }, prevColor, newColor);
    floodFillUtil(screen, { x: x - 1, y }, prevColor, newColor);
    floodFillUtil(screen, { x, y: y + 1 }, prevColor, newColor);
    floodFillUtil(screen, { x, y: y - 1 }, prevColor, newColor);
};

// função feita apenas para mostrar o resultado. nao afeta o comportamento da função principal.
function showScreen() {
    for (let i = 0; i < MAX_X; i++) {
        let t = []
        let j = 0
        for (j; j < MAX_Y; j++) {
            if(screen[i]) t.push(screen[i][j]);
        }
        console.log(`[${t}]`)
        t = [];
    }
};

function floodFill(screen, { x, y }, newColor) {
    let prevColor = screen[x][y];
    if (prevColor === newColor) return;
    floodFillUtil(screen, { x, y }, prevColor, newColor);
    showScreen();
};

let x = 0,
    y = 1,
    newColor = 'o';
floodFill(screen, { x, y }, newColor);
