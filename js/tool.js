///������

//����һ��
//��ȡurl�еĲ���
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //����һ������Ŀ�������������ʽ����
    var r = window.location.search.substr(1).match(reg);  //ƥ��Ŀ�����
    if (r != null) return unescape(r[2]); return null; //���ز���ֵ
}
//��ȡURL#�ź���Ĳ���
function getParam() {
    var ss = window.location.href.split("#");
    var paramVal = ss[1];
    return paramVal;

}
function getQueryString(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));

}
function getParameterByName(name) {
    var url =window.location.href;
    var theRequest = new Object();
    var surl=url.split("#");
    if (surl[1] !== null && surl[1] !== undefined && surl[1] !== '') {
        var strs = surl[1].split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest[name];
}
