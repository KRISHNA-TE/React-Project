const explorer = {
    name:'root',
    isFolder:true,
    items:[
        {
            name:'public',
            isFolder:true,
            items:[
                {
                    name:'public nested 1',
                    isFolder:true,
                    items:[
                       {
                        name:'index.html',
                        isFolder:false,
                       },
                       {
                        name:'hello.html',
                        isFolder:false,
                       }
                    ]
                },
                {
                    name:'public nested file',
                    isFolder:false
                }
            ]
        },
        {
            name:'src',
            isFolder:true,
            items:[
                {
                    name:'App.js',
                    isFolder:false
                },
                {
                    name:'Index.js',
                    isFolder:false
                },
                {
                    name:'Style.css',
                    isFolder:false
                }
            ]
        },
        {
            name:'package.Json',
            isFolder:false
        }
    ]
}

export default explorer;