module.exports = {
    GET_ALL_FILES : "get-current-directory-files",
    
    config : {
        host: 'test.rebex.net',
        port: 22,
        username: 'demo',
        password: 'password'
    },
    
    timeConverter : ((timestamp) => {
        var a = new Date(timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
        var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }),

    loader: {
        LOADING: 1,
        COMPLETED: 0
    },

    // getFilesList : async () => {

    //     ipcRenderer.send("get-current-directory-files");

    //     ipcRenderer.on('reply-current-directory-files', (event, files) => {
    //         return files;
    //     })
    // }
}