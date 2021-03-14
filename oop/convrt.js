function getRGB(y) {
    if (y.length === 7) {
        let get_rid_of_hash = y.slice(1, )

        var first_part = get_rid_of_hash.slice(0, 2)
        var second_part = get_rid_of_hash.slice(2, 4)
        var third_part = get_rid_of_hash.slice(4, 6)
        return {
            r: parseInt(first_part, 16),
            g: parseInt(second_part, 16),
            b: parseInt(third_part, 16)
        }
    } else {
        throw "invalid string input arguement \n the number of strings must be 6"
    }
}

console.log(getRGB("#abfcde"))