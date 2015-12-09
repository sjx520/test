/**
 * Created by Administrator on 15-12-4.
 */

function clientSideInclude(id, url) {
    var req = false;

// Safari, Firefox, ��������΢�������
    if (window.XMLHttpRequest) {
        try {
            req = new XMLHttpRequest();
        } catch (e) {
            req = false;
        }
    } else if (window.ActiveXObject) {

// For Internet Explorer on Windows
        try {
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                req = false;
            }
        }
    }
    var element = document.getElementById(id);
    if (!element) {
        alert("����clientSideInclude�޷��ҵ�id " + id + "��" +
            "�����ҳ�б�����һ���������id��div �� span ��ǩ��");
        return;
    }
    if (req) {
// ͬ�����󣬵ȴ��յ�ȫ������
        req.open('GET', url, false);
        req.send(null);
        element.innerHTML = req.responseText;
    } else {
        element.innerHTML =
            "�Բ�������������֧��" +
            "XMLHTTPRequest ���������ҳ����ʾҪ��" +
            "Internet Explorer 5 ���ϰ汾, " +
            "�� Firefox �� Safari �������Ҳ���ܻ��������ɼ��ݵ���������ڡ�";
    }
}