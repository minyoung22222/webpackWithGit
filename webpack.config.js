const path = require('path');   // node module의 path문법 가져오기 (경로가 상이해도 어떤 경로이든 가져올 수 있게)
const myLoader = require('./myLoader');

module.exports = {
    mode : 'development',
    entry : {
        main : path.resolve('./src/app.js')
    },
    output : {
        // publicPath: './webpack/dist/',
        filename : '[name].js',      // entry의 키값이 자동으로 들어가게 된다.
        path : path.resolve('./dist')
    },
    module : {
        // rules : [
        //     {
        //         test : /\.js$/,
        //         use : [
        //             path.resolve('./myLoader.js')
        //         ]
        //     }
        // ]
        rules: [ // 여기서 로더를 추가할 수 있습니다.
            {
                test: /\.css$/,
                use: [ 
                    'style-loader',
                    'css-loader',
                    
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                    maxSize: 20 * 1024 // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
                    }
                },
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `
                Commit version : ${childProcess.execSync('git rev-parse --short HEAD')}
                Committer name : ${childProcess.execSync('git config user.name')}
                Commit Date : ${new Date().toLocaleString()}
            `
        })
    ]
}
