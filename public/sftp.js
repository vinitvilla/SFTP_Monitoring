const SFTP = require('ssh2-sftp-client');

const {config, timeConverter} = require('./../utils/const')

/**
 * Returns the connection with a SFTP host.
 *
 * @param {string} host
 * @param {string | number} port
 * @param {string} user
 * @param {string} password
 *
 * @returns {Promise}
*/

const getSFTPConnection =  async(host, port, username, password) => {
    const sftp = new SFTP();
  
    try {
      await sftp.connect({ host, port, username, password });
    } catch (e) {
      console.error(e);
    }
  
    return sftp;
}

const getSFTPList = () =>{
    return getSFTPConnection(config.host, config.port, config.username, config.password)
    .then((sftp) => {
        return sftp.list('/')
        .then((data)=>{
                let files_list = []
                for(let x of data){
                    let obj = {}
                    obj.filesName = x.name;
                    obj.fileType = x.type;
                    obj.fileSize = x.size + " bytes";
                    obj.modifiedTime = timeConverter(x.modifyTime);
                    obj.status = "Not Moved";
                    files_list.push(obj);
                }
                return files_list;
            })
            .catch((err) => {
                console.log(err);
            })
        });
}

module.exports.getSFTPList = getSFTPList;