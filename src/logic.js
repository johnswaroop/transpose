
export default function TransposeEngine(input, home) {

    let finalInput;
    let finalHome;
    let finalOutput;
    let keyMatrix = [

        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0],
        [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1],
        [3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2],
        [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3],
        [5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4],
        [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5],
        [7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6],
        [8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7],
        [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8],
        [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

    ]


    finalInput = resolveKey(input);
    finalHome = resolveKey(home);
    finalOutput = calculateOut(finalInput, finalHome)

    //console.log(`${finalInput} __ ${finalHome}`);



    function getNo(key) {
        let keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        return keys.indexOf(key);
    }

    function getKey(no) {
        let keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        return keys[no];
    }

    function resolveKey(ckey) {

        if (ckey == 'C♭') {

            return 'B'

        } else if (ckey == 'B#') {

            return 'C'

        } else if (ckey == 'E#') {

            return 'F'

        } else if (ckey.charAt(1) == '♭') {

            return flatSharp(ckey.charAt(0));

        }
        else {
            return ckey;
        }

    }


    function flatSharp(key) {


        let keyNo = getNo(key);

        let newSharp = getKey(keyNo - 1);

        return newSharp;
    }

    function calculateOut(inputkey, homekey) {

        let homeNo = getNo(homekey);
        let inputNo = getNo(inputkey);



        let row = keyMatrix[homeNo];


        let outputNo = row.indexOf(inputNo);

        let outputKey = getKey(outputNo);

        console.log(outputKey);
        return outputKey;

    }

    return finalOutput;

}

