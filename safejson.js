const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
}
const safejson = (file) => {
    const json = JSON.stringify(file, getCircularReplacer())
    console.log(json)
    return json
}