
// 文章类
class Article {
    constructor(title,slug,body,likes_count,comments_count,name,updated_at) {
        this.title=title;
        this.slug=slug;
        this.body=body;
        this.likes_count=likes_count;
        this.comments_count=comments_count;
        this.name=name;
        this.updated_at=updated_at;
    }
}
// 简易文章类
class ArticleS {
    constructor(title,slug,updated_at) {
        this.title=title;
        this.slug=slug;
        this.updated_at=updated_at;
    }
}
//用户类
class User {
    constructor(YQUID,token,studentID,name,namespace,classID,class_id,password) {
        this.YQUID=YQUID;
        this.token=token;
        this.studentID=studentID;
        this.name=name;
        this.namespace=namespace;
        this.classID=classID;
        this.class_id=class_id;
        this.password=password;
    }
}


// //文章类
// class Article {
//     constructor(YQUID,id,title,slug,likeNUM,views) {
//         this.YQUID=YQUID;
//         this.id=id;
//         this.title=title;
//         this.slug=slug;
//         this.likeNUM=likeNUM;
//         this.views=views;
//     }
// }

