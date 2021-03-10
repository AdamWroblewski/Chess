let currentPlayer;
let secondPlayer;
let lastlyMovedPawnCords;
let pathsToChessPieces;
let blackKing;
let whiteKing;
let whitePawns;
let blackPawns;
let emptyFields
let chessFields;

let setDefaultGameParameters = function () {
    currentPlayer = "white";
    secondPlayer = "black";

    lastlyMovedPawnCords = [-1, -1];

    pathsToChessPieces = {
        bB: 'Sprites/bB.png',
        wB: 'Sprites/wB.png',
        bP: 'Sprites/bP.png',
        wP: 'Sprites/wP.png',
        bR: 'Sprites/bR.png',
        wR: 'Sprites/wR.png',
        bQ: 'Sprites/bQ.png',
        wQ: 'Sprites/wQ.png',
        bK: 'Sprites/bK.png',
        wK: 'Sprites/wK.png',
        bN: 'Sprites/bN.png',
        wN: 'Sprites/wN.png'
    }

    blackKing = {
        chessPiece: 'king', color: 'black', isMoved: false, pathToImg: pathsToChessPieces['bK'],
        currentRow: 0, currentCol: 4
    };

    whiteKing = {
        chessPiece: 'king', color: 'white', isMoved: false, pathToImg: pathsToChessPieces['wK'],
        currentRow: 7, currentCol: 4
    };

    whitePawns = [
        [{chessPiece: 'pawn', color: 'white', isMoved: false, pathToImg: pathsToChessPieces['wP']},
            {chessPiece: 'pawn', color: 'white', isMoved: false, pathToImg: pathsToChessPieces['wP']},
            {chessPiece: 'pawn', color: 'white', isMoved: false, pathToImg: pathsToChessPieces['wP']},
            {chessPiece: 'pawn', color: 'white', isMoved: false, pathToImg: pathsToChessPieces['wP']},
            {chessPiece: 'pawn', color: 'white', isMoved: false, pathToImg: pathsToChessPieces['wP']},
            {chessPiece: 'pawn', color: 'white', isMoved: false, pathToImg: pathsToChessPieces['wP']},
            {chessPiece: 'pawn', color: 'white', isMoved: false, pathToImg: pathsToChessPieces['wP']},
            {chessPiece: 'pawn', color: 'white', isMoved: false, pathToImg: pathsToChessPieces['wP']}],
        [{chessPiece: 'rook', color: 'white', isMoved: false, pathToImg: pathsToChessPieces['wR']},
            {chessPiece: 'knight', color: 'white', pathToImg: pathsToChessPieces['wN']},
            {chessPiece: 'bishop', color: 'white', pathToImg: pathsToChessPieces['wB']},
            {chessPiece: 'queen', color: 'white', pathToImg: pathsToChessPieces['wQ']},
            whiteKing,
            {chessPiece: 'bishop', color: 'white', pathToImg: pathsToChessPieces['wB']},
            {chessPiece: 'knight', color: 'white', pathToImg: pathsToChessPieces['wN']},
            {chessPiece: 'rook', color: 'white', isMoved: false, pathToImg: pathsToChessPieces['wR']}]
    ]

    blackPawns = [
        [{chessPiece: 'rook', color: 'black', isMoved: false, pathToImg: pathsToChessPieces['bR']},
            {chessPiece: 'knight', color: 'black', pathToImg: pathsToChessPieces['bN']},
            {chessPiece: 'bishop', color: 'black', pathToImg: pathsToChessPieces['bB']},
            {chessPiece: 'queen', color: 'black', pathToImg: pathsToChessPieces['bQ']},
            blackKing,
            {chessPiece: 'bishop', color: 'black', pathToImg: pathsToChessPieces['bB']},
            {chessPiece: 'knight', color: 'black', pathToImg: pathsToChessPieces['bN']},
            {chessPiece: 'rook', color: 'black', isMoved: false, pathToImg: pathsToChessPieces['bR']}],
        [{chessPiece: 'pawn', color: 'black', isMoved: false, pathToImg: pathsToChessPieces['bP']},
            {chessPiece: 'pawn', color: 'black', isMoved: false, pathToImg: pathsToChessPieces['bP']},
            {chessPiece: 'pawn', color: 'black', isMoved: false, pathToImg: pathsToChessPieces['bP']},
            {chessPiece: 'pawn', color: 'black', isMoved: false, pathToImg: pathsToChessPieces['bP']},
            {chessPiece: 'pawn', color: 'black', isMoved: false, pathToImg: pathsToChessPieces['bP']},
            {chessPiece: 'pawn', color: 'black', isMoved: false, pathToImg: pathsToChessPieces['bP']},
            {chessPiece: 'pawn', color: 'black', isMoved: false, pathToImg: pathsToChessPieces['bP']},
            {chessPiece: 'pawn', color: 'black', isMoved: false, pathToImg: pathsToChessPieces['bP']}]
    ]

    emptyFields = [
        [{chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {
            chessPiece: '',
            color: ''
        },
            {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {
            chessPiece: '',
            color: ''
        }],
        [{chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {
            chessPiece: '',
            color: ''
        },
            {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {
            chessPiece: '',
            color: ''
        }],
        [{chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {
            chessPiece: '',
            color: ''
        },
            {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {
            chessPiece: '',
            color: ''
        }],
        [{chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {
            chessPiece: '',
            color: ''
        },
            {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {chessPiece: '', color: ''}, {
            chessPiece: '',
            color: ''
        }]
    ]

    chessFields = [
        blackPawns[0], blackPawns[1],
        emptyFields[0], emptyFields[1], emptyFields[2], emptyFields[3],
        whitePawns[0], whitePawns[1]
    ]
}

const bishopDirections = [
    [1, 1], [-1, -1], [-1, 1], [1, -1]
]

const rookDirections = [
    [1, 0], [0, 1], [-1, 0], [0, -1]
]

const knightMoves = [
    [1, 2], [-1, -2], [-1, 2], [1, -2], [2, 1], [-2, -1], [2, -1], [-2, 1]
]

let game = function () {
    const button = document.getElementById("button");
    button.addEventListener("click", game);
    setDefaultGameParameters();
    generateBoard();
}

let generateBoard = function () {
    let boardDiv = document.querySelector("#chess-board")
    boardDiv.innerHTML = "";
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (chessFields[i][j].chessPiece !== '') {
                if ((i + j) % 2 === 0) {
                    let pathToImg = chessFields[i][j].pathToImg
                    boardDiv.insertAdjacentHTML("beforeend",
                        `<div onclick="catchPawn(this)" data-row="${i}" data-col="${j}" class="white-field chesspiece"><img alt="" class="pawn" src="${pathToImg}"></div>`)
                } else {
                    let pathToImg = chessFields[i][j].pathToImg
                    boardDiv.insertAdjacentHTML("beforeend",
                        `<div onclick="catchPawn(this)" data-row="${i}" data-col="${j}" class="black-field chesspiece"><img alt="" class="pawn" src="${pathToImg}"></div>`)
                }
            } else if ((i + j) % 2 === 0) {
                boardDiv.insertAdjacentHTML("beforeend",
                    `<div data-row="${i}" data-col="${j}" class="white-field"></div>`)
            } else {
                boardDiv.insertAdjacentHTML("beforeend",
                    `<div data-row="${i}" data-col="${j}" class="black-field"></div>`)
            }
            if (j > 0 && j % 7 === 0)
                boardDiv.insertAdjacentHTML("beforeend", '<div></div>')
        }
    }
    isKingUnderAttack();
}

let isKingUnderAttack = function () {
    if (currentPlayer === 'white') {
        if (isFieldUnderAttack(whiteKing.currentRow, whiteKing.currentCol)) {
            let field = document.querySelector(`[data-row="${whiteKing.currentRow}"][data-col="${whiteKing.currentCol}"]`)
            field.style.backgroundColor = 'red';
        }
    } else if (currentPlayer === 'black') {
        if (isFieldUnderAttack(blackKing.currentRow, blackKing.currentCol)) {
            let field = document.querySelector(`[data-row="${blackKing.currentRow}"][data-col="${blackKing.currentCol}"]`)
            field.style.backgroundColor = 'red';
        }
    }
}

let catchPawn = function (pawn) {
    generateBoard();
    const row = parseInt(pawn.dataset.row);
    const col = parseInt(pawn.dataset.col);
    let pickedPawn = chessFields[row][col];
    if (pickedPawn.color === currentPlayer) {
        generatePossibleMoves(pickedPawn, row, col);
    }
}

let generatePossibleMoves = function (pickedPawn, row, col) {
    if (pickedPawn.chessPiece === "pawn" && pickedPawn.color === "white") {
        generateWhitePawnMoves(pickedPawn, row, col)
    } else if (pickedPawn.chessPiece === "pawn" && pickedPawn.color === "black") {
        generateBlackPawnMoves(pickedPawn, row, col)
    } else if (pickedPawn.chessPiece === "rook") {
        generateRookMoves(pickedPawn, row, col, 8);
    } else if (pickedPawn.chessPiece === "bishop") {
        generateBishopMoves(pickedPawn, row, col, 8)
    } else if (pickedPawn.chessPiece === "knight") {
        generateKnightMoves(pickedPawn, row, col)
    } else if (pickedPawn.chessPiece === "queen") {
        generateBishopMoves(pickedPawn, row, col, 8)
        generateRookMoves(pickedPawn, row, col, 8)
    } else if (pickedPawn.chessPiece === "king") {
        generateBishopMoves(pickedPawn, row, col, 1)
        generateRookMoves(pickedPawn, row, col, 1)
        isLongCastlingPossible(pickedPawn, row, col)
        isShortCastlingPossible(pickedPawn, row, col)
    }
}

let makeCastling = function (pickedPawn, row, col, newRow, newCol) {
    chessFields[row][col] = {chessPiece: '', color: ''};
    if (newCol === 0) {
        chessFields[row][2] = pickedPawn;
        chessFields[row][3] = chessFields[row][0]
        chessFields[row][0] = {chessPiece: '', color: ''};
        pickedPawn.isMoved = true;
    }
    if (newCol === 7) {
        chessFields[row][6] = pickedPawn;
        chessFields[row][5] = chessFields[row][7]
        chessFields[row][7] = {chessPiece: '', color: ''};
        pickedPawn.isMoved = true;
    }
    generateBoard();
    changePlayer();
    lastlyMovedPawnCords = [-1, -1];
}

let isFieldUnderAttack = function (row, col) {
    return isFieldUnderDiagonalAttack(row, col, 7)
        || isFieldUnderColumnAttack(row, col, 7)
        || isFieldUnderRowAttack(row, col, 7)
        || isFieldUnderKnightAttack(row, col)
        || isFieldUnderKingAttack(row, col)
        || isFieldUnderPawnAttack(row, col);
}

let isFieldUnderKnightAttack = function (row, col) {
    for (let i = 0; i < knightMoves.length; i++) {
        if (isKnightMoveInBoardRange(i, row, col)) {
            if (chessFields[row + knightMoves[i][0]][col + knightMoves[i][1]].color === secondPlayer
                && chessFields[row + knightMoves[i][0]][col + knightMoves[i][1]].chessPiece === "knight") {
                return true;
            }
        }
    }
    return false;
}

let isFieldUnderRowAttack = function (row, col) {
    for (let i = 0; i < rookDirections.length; i++) {
        if (rookDirections[i][0] === 0) {
            for (let j = 1; j <= 8; j++) {
                if (isRowMoveInBoardRange(i, j, col)) {
                    if (chessFields[row][col + j * rookDirections[i][1]].color === currentPlayer) {
                        break;
                    } else if (chessFields[row][col + j * rookDirections[i][1]].color === secondPlayer
                        && !(chessFields[row][col + j * rookDirections[i][1]].chessPiece === "queen"
                            || chessFields[row][col + j * rookDirections[i][1]].chessPiece === "rook")) {
                        break;
                    } else if (chessFields[row][col + j * rookDirections[i][1]].color === secondPlayer
                        && (chessFields[row][col + j * rookDirections[i][1]].chessPiece === "queen"
                            || chessFields[row][col + j * rookDirections[i][1]].chessPiece === "rook")) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

let isFieldUnderColumnAttack = function (row, col,) {
    for (let i = 0; i < rookDirections.length; i++) {
        if (rookDirections[i][1] === 0) {
            for (let j = 1; j <= 8; j++) {
                if (isColumnMoveInBoardRange(i, j, row)) {
                    if (chessFields[row + j * rookDirections[i][0]][col].color === currentPlayer) {
                        break;
                    } else if (chessFields[row + j * rookDirections[i][0]][col].color === secondPlayer
                        && !(chessFields[row + j * rookDirections[i][0]][col].chessPiece === "queen"
                            || chessFields[row + j * rookDirections[i][0]][col].chessPiece === "rook")) {
                        break;
                    } else if (chessFields[row + j * rookDirections[i][0]][col].color === secondPlayer
                        && (chessFields[row + j * rookDirections[i][0]][col].chessPiece === "queen"
                            || chessFields[row + j * rookDirections[i][0]][col].chessPiece === "rook")) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

let isFieldUnderKingAttack = function (row, col) {
    for (let i = 0; i < rookDirections.length; i++) {
        if (rookDirections[i][1] === 0) {
            for (let j = 1; j <= 1; j++) {
                if (isColumnMoveInBoardRange(i, j, row)) {
                    if (chessFields[row + j * rookDirections[i][0]][col].color === currentPlayer) {
                        break;
                    } else if (chessFields[row + j * rookDirections[i][0]][col].color === secondPlayer
                        && !(chessFields[row + j * rookDirections[i][0]][col].chessPiece === "king")) {
                        break;
                    } else if (chessFields[row + j * rookDirections[i][0]][col].color === secondPlayer
                        && (chessFields[row + j * rookDirections[i][0]][col].chessPiece === "king")) {
                        return true;
                    }
                }
            }
        }
    }
    for (let i = 0; i < bishopDirections.length; i++) {
        for (let j = 1; j <= 1; j++) {
            if (isDiagonalMoveInBoardRange(i, j, row, col)) {
                if (chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].color === currentPlayer) {
                    break;
                } else if (chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].color === secondPlayer
                    && !(chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].chessPiece === "king")) {
                    break;
                } else if (chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].color === secondPlayer
                    && (chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].chessPiece === "king")) {
                    return true;
                }
            }
        }
    }
    for (let i = 0; i < rookDirections.length; i++) {
        if (rookDirections[i][0] === 0) {
            for (let j = 1; j <= 1; j++) {
                if (isRowMoveInBoardRange(i, j, col)) {
                    if (chessFields[row][col + j * rookDirections[i][1]].color === currentPlayer) {
                        break;
                    } else if (chessFields[row][col + j * rookDirections[i][1]].color === secondPlayer
                        && !(chessFields[row][col + j * rookDirections[i][1]].chessPiece === "king")) {
                        break;
                    } else if (chessFields[row][col + j * rookDirections[i][1]].color === secondPlayer
                        && (chessFields[row][col + j * rookDirections[i][1]].chessPiece === "king")) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

let isFieldUnderPawnAttack = function (row, col) {
    if (currentPlayer === "white") {
        if (col - 1 >= 0) {
            if ((chessFields[row - 1][col - 1].color === secondPlayer
                && chessFields[row - 1][col - 1].chessPiece === "pawn")) {
                return true;
            }
        }
        if (col + 1 <= 7) {
            if (chessFields[row - 1][col + 1].color === secondPlayer
                && chessFields[row - 1][col + 1].chessPiece === "pawn") {
                return true;
            }
        }
    } else if (currentPlayer === "black") {
        if (col - 1 >= 0) {
            if (chessFields[row + 1][col - 1].color === secondPlayer
                && chessFields[row + 1][col - 1].chessPiece === "pawn") {
                return true;
            }
        }
        if (col + 1 <= 7) {
            if (chessFields[row + 1][col + 1].color === secondPlayer
                && chessFields[row + 1][col + 1].chessPiece === "pawn") {
                return true;
            }
        }
    }
    return false;
}

let isFieldUnderDiagonalAttack = function (row, col) {
    for (let i = 0; i < bishopDirections.length; i++) {
        for (let j = 1; j <= 8; j++) {
            if (isDiagonalMoveInBoardRange(i, j, row, col)) {
                if (chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].color === currentPlayer) {
                    break;
                } else if (chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].color === secondPlayer
                    && !(chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].chessPiece === "queen"
                        || chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].chessPiece === "bishop")) {
                    break;
                } else if (chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].color === secondPlayer
                    && (chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].chessPiece === "queen"
                        || chessFields[row + bishopDirections[i][0] * j][col + bishopDirections[i][1] * j].chessPiece === "bishop")) {
                    return true;
                }
            }
        }
    }
    return false;
}

let isLongCastlingPossible = function (pickedPawn, row, col) {
    if (pickedPawn.isMoved === false) {
        if (chessFields[row][col - 1].chessPiece === ''
            && chessFields[row][col - 2].chessPiece === ''
            && chessFields[row][col - 3].chessPiece === ''
            && chessFields[row][col - 4].chessPiece === 'rook'
            && chessFields[row][col - 4].isMoved === false
            && !isFieldUnderAttack(row, col)
            && !isFieldUnderAttack(row, col - 1)
            && !isFieldUnderAttack(row, col - 2)) {
            generateCastlingMove(pickedPawn, row, col, row, 0)
        }
    }
}

let isShortCastlingPossible = function (pickedPawn, row, col) {
    if (pickedPawn.isMoved === false) {
        if (chessFields[row][col + 1].chessPiece === ''
            && chessFields[row][col + 2].chessPiece === ''
            && chessFields[row][col + 3].chessPiece === 'rook'
            && chessFields[row][col + 3].isMoved === false
            && !isFieldUnderAttack(row, col)
            && !isFieldUnderAttack(row, col + 1)
            && !isFieldUnderAttack(row, col + 2)) {
            generateCastlingMove(pickedPawn, row, col, row, 7)
        }
    }
}

let makeMove = function (pickedPawn, row, col, newRow, newCol) {
    let tempChessField = JSON.parse(JSON.stringify(chessFields));

    if (pickedPawn.chessPiece === "king") {
        chessFields[row][col] = {chessPiece: '', color: '', pathToImg: ''};
        if (!isFieldUnderAttack(newRow, newCol)) {
            chessFields[newRow][newCol] = pickedPawn;
            pickedPawn.isMoved = true;
            if (currentPlayer === "white") {
                whiteKing.currentRow = newRow;
                whiteKing.currentCol = newCol;
            } else {
                blackKing.currentRow = newRow;
                blackKing.currentCol = newCol;
            }
            generateBoard();
            changePlayer();
            isKingUnderAttack();
            return true;
        } else {
            chessFields = tempChessField;
            return false;
        }
    } else {
        chessFields[newRow][newCol] = pickedPawn;
        chessFields[row][col] = {chessPiece: '', color: '', pathToImg: ''};
        if (currentPlayer === "white") {
            if (isFieldUnderAttack(whiteKing.currentRow, whiteKing.currentCol)) {
                chessFields = Array.from(tempChessField);
                generateBoard();
                return false;
            }
        } else {
            if (isFieldUnderAttack(blackKing.currentRow, blackKing.currentCol)) {
                chessFields = Array.from(tempChessField);
                generateBoard();
                return false;
            }
        }

        changePawnToQueen(pickedPawn, newRow, newCol)
        generateBoard();
        changePlayer();
        isKingUnderAttack();

        if (pickedPawn.chessPiece === "pawn" && Math.abs(row - newRow) === 2) // 6 - 4 || 1 - 3
            lastlyMovedPawnCords = [newRow, newCol];
        else lastlyMovedPawnCords = [-1, -1];

        if (pickedPawn.chessPiece === "rook")
            pickedPawn.isMoved = true;
    }
}


let changePawnToQueen = function (pickedPawn, newRow, newCol) {
    if (pickedPawn.chessPiece === "pawn"
        && pickedPawn.color === "white"
        && newRow === 0) {
        chessFields[newRow][newCol] = {chessPiece: 'queen', color: 'white', pathToImg: pathsToChessPieces['wQ']};
    } else if (pickedPawn.chessPiece === "pawn"
        && pickedPawn.color === "black"
        && newRow === 7) {
        chessFields[newRow][newCol] = {chessPiece: 'queen', color: 'black', pathToImg: pathsToChessPieces['bQ']};
    }
}

let isMoveAnAttack = function (row, col) {
    return chessFields[row][col].color === secondPlayer;
}

let generateRookMoves = function (pickedPawn, row, col, moveRange) {
    for (let i = 0; i < rookDirections.length; i++) {
        for (let j = 1; j <= moveRange; j++) {
            if (isColumnMoveInBoardRange(i, j, row)) {
                if (isFriendlyPawnOnField(rookDirections[i][0] * j + row, col)) break;
                generateMoves(pickedPawn, row, col, rookDirections[i][0] * j + row, col)
                if (isMoveAnAttack(rookDirections[i][0] * j + row, col)) break;
            } else if (isRowMoveInBoardRange(i, j, col)) {
                if (isFriendlyPawnOnField(row, rookDirections[i][1] * j + col)) break;
                generateMoves(pickedPawn, row, col, row, rookDirections[i][1] * j + col)
                if (isMoveAnAttack(row, rookDirections[i][1] * j + col)) break;
            }
        }
    }
}

let generateBishopMoves = function (pickedPawn, row, col, moveRange) {
    for (let i = 0; i < bishopDirections.length; i++) {
        for (let j = 1; j <= moveRange; j++) {
            if (isDiagonalMoveInBoardRange(i, j, row, col)) {
                if (isFriendlyPawnOnField(bishopDirections[i][0] * j + row, bishopDirections[i][1] * j + col)) break;
                generateMoves(pickedPawn, row, col,
                    bishopDirections[i][0] * j + row, bishopDirections[i][1] * j + col);
                if (isMoveAnAttack(bishopDirections[i][0] * j + row, bishopDirections[i][1] * j + col))
                    break;
            }
        }
    }
}

let generateKnightMoves = function (pickedPawn, row, col) {
    for (let i = 0; i < knightMoves.length; i++) {
        if (isFriendlyPawnOnField(row + knightMoves[i][0], col + knightMoves[i][1])) continue;
        if (isKnightMoveInBoardRange(i, row, col)) {
            generateMoves(pickedPawn, row, col, row + knightMoves[i][0], col + knightMoves[i][1])
        }
    }
}

let generateWhitePawnMoves = function (pickedPawn, row, col) {
    if (chessFields[row - 1][col].chessPiece === '') {
        generateMoves(pickedPawn, row, col, row - 1, col)
    }
    if (col - 1 >= 0)
        isPawnAttackPossible(pickedPawn, row, col, row - 1, col - 1);
    if (col + 1 <= 7)
        isPawnAttackPossible(pickedPawn, row, col, row - 1, col + 1);
    if (row === 6) {
        if (chessFields[row - 1][col].chessPiece === ''
            && chessFields[row - 2][col].chessPiece === '') {
            generateMoves(pickedPawn, row, col, row - 2, col)
        }
    }
    if (lastlyMovedPawnCords[0] > -1) {
        if (row === lastlyMovedPawnCords[0] && col === lastlyMovedPawnCords[1] - 1) {
            generateEnPassant(pickedPawn, row, col, row - 1, col + 1)
        } else if (row === lastlyMovedPawnCords[0] && col === lastlyMovedPawnCords[1] + 1) {
            generateEnPassant(pickedPawn, row, col, row - 1, col - 1)
        }
    }
}

let generateBlackPawnMoves = function (pickedPawn, row, col) {
    if (chessFields[row + 1][col].chessPiece === '') {
        generateMoves(pickedPawn, row, col, row + 1, col)
    }
    if (col - 1 >= 0)
        isPawnAttackPossible(pickedPawn, row, col, row + 1, col - 1);
    if (col + 1 <= 7)
        isPawnAttackPossible(pickedPawn, row, col, row + 1, col + 1);
    if (row === 1) {
        if (chessFields[row + 1][col].chessPiece === ''
            && chessFields[row + 2][col].chessPiece === '') {
            generateMoves(pickedPawn, row, col, row + 2, col)
        }
    }
    if (lastlyMovedPawnCords[0] > -1) {
        if (row === lastlyMovedPawnCords[0] && col === lastlyMovedPawnCords[1] - 1) {
            generateEnPassant(pickedPawn, row, col, row + 1, col + 1)
        } else if (row === lastlyMovedPawnCords[0] && col === lastlyMovedPawnCords[1] + 1) {
            generateEnPassant(pickedPawn, row, col, row + 1, col - 1)
        }
    }
}

let makeEnPassant = function (pickedPawn, currentRow, currentCol, newRow, newCol) {
    chessFields[currentRow][currentCol] = {chessPiece: '', color: ''};
    chessFields[newRow][newCol] = pickedPawn;
    chessFields[currentRow][newCol] = {chessPiece: '', color: ''};
    generateBoard();
    changePlayer();
    lastlyMovedPawnCords = [-1, -1];
}

let isRowMoveInBoardRange = function (i, j, col) {
    return rookDirections[i][1] * j + col >= 0
        && rookDirections[i][1] * j + col <= 7
        && rookDirections[i][0] === 0
}

let isColumnMoveInBoardRange = function (i, j, row) {
    return rookDirections[i][0] * j + row >= 0
        && rookDirections[i][0] * j + row <= 7
        && rookDirections[i][1] === 0
}

let isDiagonalMoveInBoardRange = function (i, j, row, col) {
    return bishopDirections[i][0] * j + row >= 0
        && bishopDirections[i][0] * j + row <= 7
        && bishopDirections[i][1] * j + col >= 0
        && bishopDirections[i][1] * j + col <= 7
}

let isKnightMoveInBoardRange = function (i, row, col) {
    return knightMoves[i][0] + row >= 0
        && knightMoves[i][0] + row <= 7
        && knightMoves[i][1] + col >= 0
        && knightMoves[i][1] + col <= 7
}

let changePlayer = function () {
    if (currentPlayer === "white") {
        currentPlayer = "black"
        secondPlayer = "white"
    } else {
        currentPlayer = "white"
        secondPlayer = "black"
    }
}


let isFriendlyPawnOnField = function (row, col) {
    if (row >= 8 || row < 0 || col >= 8 || col < 0)
        return false;
    return chessFields[row][col].color === currentPlayer;
}

let isPawnAttackPossible = function (pickedPawn, row, col, newRow, newCol) {
    if (isMoveAnAttack(newRow, newCol)) {
        generateMoves(pickedPawn, row, col, newRow, newCol)
    }
}

let generateEnPassant = function (pickedPawn, currentRow, currentCol, newRow, newCol) {
    let field = document.querySelector(`[data-row='${newRow}'][data-col="${newCol}"]`);
    field.addEventListener("click",
        () => makeEnPassant(pickedPawn, currentRow, currentCol, newRow, newCol));
    field.style.border = "5px solid #865D3A"
    field.style.padding = "0"
}

let generateCastlingMove = function (pickedPawn, currentRow, currentCol, newRow, newCol) {
    let field = document.querySelector(`[data-row='${newRow}'][data-col="${newCol}"]`);
    field.addEventListener("click",
        () => makeCastling(pickedPawn, currentRow, currentCol, newRow, newCol));
    field.style.border = "5px solid #865D3A"
    field.style.padding = "0"
}


let generateMoves = function (pickedPawn, currentRow, currentCol, newRow, newCol) {
    var field = document.querySelector(`[data-row='${newRow}'][data-col="${newCol}"]`)
    field.addEventListener("click",
        () => makeMove(pickedPawn, currentRow, currentCol, newRow, newCol));
    field.style.border = "5px solid #865D3A"
    field.style.padding = "0"
}

game();
