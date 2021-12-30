//依赖于YQ_API.js
function getNamespaces() {
    let data=getDocsDetails(MYnamespace1,NamespacesSlug,MYtoken);
    if (data.data.body==null||data.data.body==' '||data.data.body==''){
        return [];
    }else{
        return JSON.parse(data.data.body);
    }
}
function getUserImg_name(namespace) {
    let data=getDocsList(namespace,MYtoken);

    if (data==null||data.data.length==0){
        return ["未知","未知"];
    }

    let res=[data.data[0].last_editor.name, data.data[0].last_editor.avatar_url];
    return res;
}
function getUsername(namespace) {
    let data=getDocsList(namespace,MYtoken);

    if (data==null||data.data.length==0){
        return null;
    }
    let res=[data.data[0].last_editor.name];
    return res;
}
function getArticlesList(namespace) {
    let articles=[];
    let data=getDocsList(namespace,MYtoken);
    console.log(data)
    for (let i = 0; i < data.data.length; i++) {
        let d=new Date(Date.parse(data.data[i].updated_at));
        let article=new Article(data.data[i].title,data.data[i].slug,data.data[i].description,data.data[i].likes_count,data.data[i].comments_count,data.data[i].last_editor.name,d.toLocaleDateString()+d.toLocaleTimeString());
        articles.push(article);
    }
    return articles;
}
function getArticle(namespace,slug) {
    let data=getDocsDetails(namespace,slug,MYtoken);
    console.log(data);
    let d=new Date(Date.parse(data.data.updated_at));
    console.log(d.toLocaleTimeString())
    let article=new Article(data.data.title,data.data.slug,data.data.body_html,data.data.likes_count,data.data.comments_count,data.data.creator.name,d.toLocaleDateString()+d.toLocaleTimeString());
    return article;
}
function deleteNamespace(namespace) {
    let namespaces=getNamespaces();
    let NewNamespace=[];
    let flag=false;
    for (let i = 0; i < namespaces.length; i++) {
        if (namespaces[i]==namespace){
            flag=true;
        }else{
            NewNamespace.push(namespaces[i]);
        }
    }
    updateDoc(MYnamespace1,NamespacesID,"namespaces表",JSON.stringify(NewNamespace),MYtoken);
    return flag;
}
function addNamespace(namespace) {
    let namespaces=getNamespaces();
    for (let i = 0; i < namespaces.length; i++) {
        if (namespaces[i]==namespace){
            return false;
        }
    }
    let username=getUsername(namespace);
    if (username==null){
        return false;
    }
    namespaces.push(namespace);
    updateDoc(MYnamespace1,NamespacesID,"namespaces表",JSON.stringify(namespaces),MYtoken);
    return true;
}
// function getUsers() {//获取数据库所有用户
//     let data=getDocsDetails(MYnamespace1,UserSlug,MYtoken);
//     if (data.data.body==null||data.data.body==' '){
//         return [];
//     }else{
//         return JSON.parse(data.data.body);
//     }
// }
//
// function checkUser(studentID,key) {//用户信息校验
//     let users=getUsers();
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].studentID==studentID){
//             if (users[i].password==key || users[i].token==key){
//                 return users[i];
//             }
//         }
//     }
//     return null;
// }
// function getYQUIDByToken(token) {//通过token获取YQUID
//     return getUser(token).data.id;
// }
// function addYQBlogReps(YQID,token){
//     data=addREPO(YQID,'学生空间','SSBlog',token);
//     if (data!=null){
//         return 1;
//     }
// }
// function getLogin(YQUID,token) {
//     return getUserByID(YQUID,token).data.login;
// }
// function toSyncArticles(YQUID,namespace,token) {
//     let Articles=[];
//     let data=getDocsList(namespace+'/SSBlog',token);
//     let Articles0=getArticlesList();
//     let Uarticles=[];
//     for (let i = 0; i < Articles0.length; i++) {
//         tmp=Articles0.pop();
//         if (tmp.YQUID!=YQUID){
//             Articles.push(tmp)
//         }else{
//             Uarticles.push(tmp)
//         }
//     }
//
//     for (let j = 0; j < data.data.length; j++) {
//         likeNUM=0;
//         views=0;
//         for (let i = 0; i < Uarticles.length; i++) {
//             if (Uarticles[i].id==data.data[j].id){
//                 likeNUM=Uarticles[i].likeNUM;
//                 views=Uarticles[i].views;
//                 break;
//             }
//         }
//
//         article=new Article(YQUID,data.data[j].id,data.data[j].title,data.data[j].slug,likeNUM,views);
//         Articles.push(article);
//     }
//     updateDoc(MYnamespace1,ArticleTable,"文章表",JSON.stringify(Articles),MYtoken);
// }
// function getArticlesList() {
//     let data=getDocsDetails(MYnamespace1,ArticleSlug,MYtoken);
//     if (data.data.body==null||data.data.body==' '){
//         return [];
//     }else{
//         return JSON.parse(data.data.body);
//     }
// }
// function getArticleBody(namespace,slug,token) {
//     return getDocsDetails(namespace+'/SSBlog',slug,token).data.body;
// }