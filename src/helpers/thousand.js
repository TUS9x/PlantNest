export const thousand = (x = 0, char = '.' ) => {
    if (!x) return '0'
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, char ? char : '.')
}
