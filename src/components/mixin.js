const getImgPath = {
    methods: {
        getImgPath(path) {
            let suffix
            if (!path) {
                return 'http://test.fe.ptdev.cn/elm/elmlogo.jpeg'
            }

            path.indexOf('jpeg') !== -1 ? suffix = '.jpeg' : suffix = '.png'
            const url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix

            return 'https://fuss10.elemecdn.com' + url
        }
    }
}

export default {
    getImgPath
}