const {MongoClient} = require('mongodb');

const mongs = async () => {
    const uri = "mongodb+srv://root:root@cluster0.or5f7.mongodb.net/sftpfiles?retryWrites=true&w=majority"

    const client = new MongoClient(uri);

    try{
        await client.connect();
        await createMultipleFiles(client, [{
            fileSize: "403 bytes",
            fileType: "-",
            filesName: "readme3.txt",
            modifiedTime: "8 Apr 2014 10:09:39"
        },
        {
            fileSize: "403 bytes",
            fileType: "-",
            filesName: "readme1.txt",
            modifiedTime: "8 Apr 2014 10:09:39"
        },
        {
            fileSize: "403 bytes",
            fileType: "-",
            filesName: "readme2.txt",
            modifiedTime: "8 Apr 2014 10:09:39"
        }
        ])
    }
    catch(e){
        console.error(e);
    }
    finally{
        await client.close();
    }
}
mongs();

async function createMultipleFiles(client, newStates){
    const result = await client.db("sftp_files").collection("moved_files").insertMany(newStates);

    console.log(`${result.insertedCount} new States created with the following ids: `);
    console.log(result.insertedIds);
}

async function createMovedFiles(client, newState) {
    const result = await client.db("sftp_files").collection("moved_files").insertOne(newState);
    console.log(`New state inserted with following id : ${result.insertedId}`);
}

async function listDB(client) {
    const dblist = await client.db().admin().listDatabases();
    console.log("DB: ");
    dblist.databases.forEach(db => {
        console.log(` - ${db.name}`);
    })
}