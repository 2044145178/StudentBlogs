var MYnamespace1="zhangyechuan/ss";
var MYnamespace2="zhangyechuan/gmlrr1";
var UtokenSlug='utoken';
var UserSlug='users';
var NamespacesSlug='namespaces';
var ArticleSlug='articles';
var UserTableID=61630869;
var ArticleTable=62217173;
var  NamespacesID=62733900;
YU_QUE_USER = "https://yuque.redhome.cc/api/v2/user";
YU_QUE_USERS = "https://yuque.redhome.cc/api/v2/users/{0}";
YU_QUE_REPOS = "https://yuque.redhome.cc/api/v2/users/{0}/repos?offset=1";
YU_QUE_REPOS_DETAIL = "https://yuque.redhome.cc/api/v2/repos/{0}";
YU_QUE_DOCS = "https://yuque.redhome.cc/api/v2/repos/{0}/docs";
YU_QUE_toADD_DOCS = "https://yuque.redhome.cc/api/v2/repos/{0}/docs";
YU_QUE_toUPDATE_DOCS = "https://yuque.redhome.cc/api/v2/repos/{0}/docs/{1}";
YU_QUE_DOCS_DETAIL = "https://yuque.redhome.cc/api/v2/repos/{0}/docs/{1}?raw=1";
YU_QUE_GROUPS="https://yuque.redhome.cc/api/v2/users/{0}/groups";
YU_QUE_toADD_REPO="https://yuque.redhome.cc/api/v2/users/{0}/repos"
YU_QUE_toDELETE_DOCS = "https://yuque.redhome.cc/api/v2/repos/{0}/docs/{1}";

//http://localhost:8080/yq/getGroupByID?id=dashboard
// URL="https://yuque.redhome.cc/api/v2/repos/zhangyechuan/kb/docs";
var MYtoken='ratfyfx406sCJOqE4G8e37g7m439IJ0OXUKCNIUp';


String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!==undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题
                    var reg2= new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg2, arguments[i]);
                }
            }
        }
    }
    return result;
};

function getUser(token) {
    var DATA;
    $.ajax({
        url:YU_QUE_USER,
        type:'get',
        async:false,
        headers:{
            'X-Auth-Token':token,
            'Content-Type': 'application/json',
            // "User-Agent": "test"
        },
        success:function (data) {
            $('#INFO').html(JSON.stringify(data));
            DATA=data;
        }
    });
    return DATA;
}

function getUserByID(id,token) {
    var DATA;
    $.ajax({
        url:YU_QUE_USERS.format(id),
        type:'get',
        async: false,
        headers:{
            'X-Auth-Token':token,
            'Content-Type': 'application/json',
            // "User-Agent": "test"
        },
        success:function (data) {
            $('#INFO').html(JSON.stringify(data));
            //alert(JSON.stringify(data));
            DATA=data;
        }
    })
    return DATA;
}
function getDocsList(namespace,token) {
    var DATA=null;
    $.ajax({
        url:YU_QUE_DOCS.format(namespace),
        type:'get',
        async:false,
        headers:{
            'X-Auth-Token':token,
            'Content-Type': 'application/json',
            // "User-Agent": "test"
        },
        success:function (data) {
            //alert(JSON.stringify(data));
            DATA=data;
        }
    });
    return DATA;
}

function getDocsDetails(namespace,slug,token) {
    var DATA;
    $.ajax({
        url:YU_QUE_DOCS_DETAIL.format(namespace,slug),
        type:'get',
        async:false,
        headers:{
            'X-Auth-Token':token,
            'Content-Type': 'application/json',
            // "User-Agent": "test"
        },
        success:function (data) {
            //alert(JSON.stringify(data));
            DATA=data;
        }
    });
    return DATA;
}
function getREPOS(id,token) {
    var DATA;
    $.ajax({
        url:YU_QUE_REPOS.format(id),
        type:'get',
        async:false,
        headers:{
            'X-Auth-Token':token,
            'Content-Type': 'application/json',
            // "User-Agent": "test"
        },
        success:function (data) {
            //alert(JSON.stringify(data));
            DATA=data;
        }
    });
    return DATA
}
function addREPO(id,name,slug,token) {
    var DATA;
    $.ajax({
        url:YU_QUE_toADD_REPO.format(id),
        type:'post',
        async:false,
        headers:{
            'X-Auth-Token':token,
            'Content-Type': 'application/json',
            // "User-Agent": "test"
        },
        data:JSON.stringify({name: name, slug: slug,public:0,type:"Book"}),
        success:function (data) {
            $('#INFO').html(JSON.stringify(data));
            //alert(JSON.stringify(data));
            DATA=data;
        }
    });
    return DATA;
}
function deleteREPO(namespace,token) {
    $.ajax({
        url:YU_QUE_REPOS_DETAIL.format(namespace),
        type:'delete',
        headers:{
            'X-Auth-Token':token,
            'Content-Type': 'application/json',
            // "User-Agent": "test"
        },
        data:{

        },
        success:function (data) {
            $('#INFO').html(JSON.stringify(data));
            //alert(JSON.stringify(data));
            return data;
        }
    })
}
function addDoc(namespace,title,slug,body,token) {

    $.ajax({
        url:YU_QUE_toADD_DOCS.format(namespace),
        type:'post',
        headers:{
            'X-Auth-Token':token,
            'Content-Type': 'application/json',
            // "User-Agent": "test"
        },
        data:JSON.stringify({title:title,slug:slug,public:0,format:"markdown",body:body}),
        success:function (data) {
            $('#INFO').html(JSON.stringify(data));
            //alert(JSON.stringify(data));
            return data;
        }
    })
}
function updateDoc(namespace,id,title,body,token) {
    let DATA;
    $.ajax({
        url:YU_QUE_toUPDATE_DOCS.format(namespace,id),
        type:'put',
        async:false,
        headers:{
            'X-Auth-Token':token,
            'Content-Type': 'application/json',
            // "User-Agent": "test"
        },
        data:JSON.stringify({title:title,public:0,body:body,_force_asl :1}),
        success:function (data) {
            $('#INFO').html(JSON.stringify(data));
            //alert(JSON.stringify(data));
            DATA=data;
        }
    })
    return DATA;
}
function deleteDoc(namespace,id,token) {
    var INFO;
    $.ajax({
        url:YU_QUE_toDELETE_DOCS.format(namespace,id),
        type:'delete',
        headers:{
            'X-Auth-Token':token,
            'Content-Type': 'application/json',
            // "User-Agent": "test"
        },
        success:function (data) {
            return data;
        }
    })
}